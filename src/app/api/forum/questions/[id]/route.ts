import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureForumTables } from "@/lib/db";
import { getSession } from "@/lib/auth";

// GET /api/forum/questions/[id] — Detalhes da pergunta com respostas
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const questionId = parseInt(id);
        if (isNaN(questionId)) {
            return NextResponse.json({ error: "ID inválido." }, { status: 400 });
        }

        await ensureForumTables();
        const sql = getDb();
        const session = await getSession();

        // Incrementar view_count
        await sql`UPDATE forum_questions SET view_count = view_count + 1 WHERE id = ${questionId}`;

        // Buscar a pergunta
        const [question] = await sql`
            SELECT q.id, q.title, q.body, q.tags, q.view_count, q.is_solved, q.created_at,
                   u.id AS author_id, u.name AS author_name
            FROM forum_questions q
            JOIN forum_users u ON u.id = q.user_id
            WHERE q.id = ${questionId}
        `;

        if (!question) {
            return NextResponse.json({ error: "Pergunta não encontrada." }, { status: 404 });
        }

        // Buscar respostas ordenadas: aceita primeiro, depois por curtidas
        const answers = await sql`
            SELECT a.id, a.body, a.is_accepted, a.like_count, a.created_at,
                   u.id AS author_id, u.name AS author_name,
                   ${session ? sql`EXISTS(
                       SELECT 1 FROM forum_likes l
                       WHERE l.answer_id = a.id AND l.user_id = ${session.userId}
                   )` : sql`FALSE`} AS user_liked
            FROM forum_answers a
            JOIN forum_users u ON u.id = a.user_id
            WHERE a.question_id = ${questionId}
            ORDER BY a.is_accepted DESC, a.like_count DESC, a.created_at ASC
        `;

        return NextResponse.json({
            question: {
                ...question,
                isAuthor: session ? session.userId === question.author_id : false,
            },
            answers: answers.map((a) => ({
                ...a,
                isAuthor: session ? session.userId === a.author_id : false,
            })),
        });
    } catch (err) {
        console.error("[GET /api/forum/questions/[id]]", err);
        return NextResponse.json({ error: "Erro ao buscar pergunta." }, { status: 500 });
    }
}
