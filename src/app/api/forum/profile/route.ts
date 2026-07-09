import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureForumTables } from "@/lib/db";
import { getSession, createSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
        }

        const { name, avatarUrl } = await req.json();

        if (!name?.trim()) {
            return NextResponse.json({ error: "O nome não pode ser vazio." }, { status: 400 });
        }

        await ensureForumTables();
        const sql = getDb();

        // Atualizar no banco de dados
        await sql`
            UPDATE forum_users
            SET name = ${name.trim()}, avatar_url = ${avatarUrl?.trim() || null}
            WHERE id = ${session.userId}
        `;

        // Recriar a sessão com os dados atualizados
        await createSession({
            userId: session.userId,
            email: session.email,
            name: name.trim(),
            role: session.role,
            avatarUrl: avatarUrl?.trim() || null,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[POST /api/forum/profile]", err);
        return NextResponse.json({ error: "Erro ao atualizar perfil." }, { status: 500 });
    }
}
