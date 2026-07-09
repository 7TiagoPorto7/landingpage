import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getSession } from "@/lib/auth";

// POST /api/forum/answers/[id]/accept — Marcar como resposta aceita
export async function POST(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
        }

        const { id } = await params;
        const answerId = parseInt(id);
        if (isNaN(answerId)) {
            return NextResponse.json({ error: "ID inválido." }, { status: 400 });
        }

        const sql = getDb();

        // Verificar que o usuário é o autor da pergunta
        const [answer] = await sql`
            SELECT a.id, q.user_id AS question_author_id, a.question_id
            FROM forum_answers a
            JOIN forum_questions q ON q.id = a.question_id
            WHERE a.id = ${answerId}
        `;

        if (!answer) {
            return NextResponse.json({ error: "Resposta não encontrada." }, { status: 404 });
        }

        if (answer.question_author_id !== session.userId) {
            return NextResponse.json({ error: "Apenas o autor da pergunta pode aceitar respostas." }, { status: 403 });
        }

        // Desmarcar todas as respostas aceitas anteriores da mesma pergunta
        await sql`
            UPDATE forum_answers SET is_accepted = FALSE WHERE question_id = ${answer.question_id}
        `;

        // Marcar esta como aceita
        await sql`UPDATE forum_answers SET is_accepted = TRUE WHERE id = ${answerId}`;

        // Marcar a pergunta como resolvida
        await sql`UPDATE forum_questions SET is_solved = TRUE WHERE id = ${answer.question_id}`;

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[POST /api/forum/answers/[id]/accept]", err);
        return NextResponse.json({ error: "Erro ao aceitar resposta." }, { status: 500 });
    }
}
