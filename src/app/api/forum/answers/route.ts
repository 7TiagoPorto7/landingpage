import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureForumTables } from "@/lib/db";
import { getSession } from "@/lib/auth";

// POST /api/forum/answers — Criar resposta
export async function POST(req: NextRequest) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
        }

        const { questionId, body } = await req.json();

        if (!questionId || !body?.trim()) {
            return NextResponse.json({ error: "questionId e body são obrigatórios." }, { status: 400 });
        }

        await ensureForumTables();
        const sql = getDb();

        // Verificar que a pergunta existe
        const [question] = await sql`SELECT id, user_id FROM forum_questions WHERE id = ${questionId}`;
        if (!question) {
            return NextResponse.json({ error: "Pergunta não encontrada." }, { status: 404 });
        }

        const [answer] = await sql`
            INSERT INTO forum_answers (question_id, user_id, body)
            VALUES (${questionId}, ${session.userId}, ${body.trim()})
            RETURNING id, body, is_accepted, like_count, created_at
        `;

        // Notificar o autor da pergunta se outra pessoa responder
        if (question.user_id !== session.userId) {
            await sql`
                INSERT INTO forum_notifications (user_id, type, sender_name, question_id)
                VALUES (${question.user_id}, 'answer', ${session.name}, ${questionId})
            `;
        }

        return NextResponse.json({
            success: true,
            answer: {
                ...answer,
                author_name: session.name,
                author_id: session.userId,
                user_liked: false,
                isAuthor: true,
            },
        });
    } catch (err) {
        console.error("[POST /api/forum/answers]", err);
        return NextResponse.json({ error: "Erro ao criar resposta." }, { status: 500 });
    }
}
