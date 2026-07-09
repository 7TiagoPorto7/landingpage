import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getSession } from "@/lib/auth";

// POST /api/forum/answers/[id]/like — Toggle curtida
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

        // Verificar se já curtiu (toggle)
        const [existing] = await sql`
            SELECT id FROM forum_likes WHERE user_id = ${session.userId} AND answer_id = ${answerId}
        `;

        let liked: boolean;
        if (existing) {
            // Descurtir
            await sql`DELETE FROM forum_likes WHERE user_id = ${session.userId} AND answer_id = ${answerId}`;
            await sql`UPDATE forum_answers SET like_count = GREATEST(like_count - 1, 0) WHERE id = ${answerId}`;
            liked = false;
        } else {
            // Curtir
            await sql`INSERT INTO forum_likes (user_id, answer_id) VALUES (${session.userId}, ${answerId})`;
            await sql`UPDATE forum_answers SET like_count = like_count + 1 WHERE id = ${answerId}`;
            liked = true;

            // Notificar o autor da resposta se outra pessoa curtir
            const [answerInfo] = await sql`SELECT user_id, question_id FROM forum_answers WHERE id = ${answerId}`;
            if (answerInfo && answerInfo.user_id !== session.userId) {
                await sql`
                    INSERT INTO forum_notifications (user_id, type, sender_name, question_id)
                    VALUES (${answerInfo.user_id}, 'like', ${session.name}, ${answerInfo.question_id})
                `;
            }
        }

        const [{ like_count }] = await sql`SELECT like_count FROM forum_answers WHERE id = ${answerId}`;

        return NextResponse.json({ success: true, liked, like_count });
    } catch (err) {
        console.error("[POST /api/forum/answers/[id]/like]", err);
        return NextResponse.json({ error: "Erro ao processar curtida." }, { status: 500 });
    }
}
