import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureForumTables } from "@/lib/db";
import { getSession } from "@/lib/auth";

// GET /api/forum/notifications — Listar notificações do usuário
export async function GET() {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
        }

        await ensureForumTables();
        const sql = getDb();

        const notifications = await sql`
            SELECT n.id, n.type, n.sender_name, n.is_read, n.created_at, n.question_id,
                   q.title as question_title
            FROM forum_notifications n
            LEFT JOIN forum_questions q ON q.id = n.question_id
            WHERE n.user_id = ${session.userId}
            ORDER BY n.created_at DESC
            LIMIT 15
        `;

        return NextResponse.json({ success: true, notifications });
    } catch (err) {
        console.error("[GET /api/forum/notifications]", err);
        return NextResponse.json({ error: "Erro ao buscar notificações." }, { status: 500 });
    }
}

// POST /api/forum/notifications — Marcar todas como lidas
export async function POST() {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
        }

        await ensureForumTables();
        const sql = getDb();

        await sql`
            UPDATE forum_notifications
            SET is_read = true
            WHERE user_id = ${session.userId}
        `;

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[POST /api/forum/notifications]", err);
        return NextResponse.json({ error: "Erro ao atualizar notificações." }, { status: 500 });
    }
}
