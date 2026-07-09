import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureForumTables } from "@/lib/db";
import { hashPassword, createSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
        }

        if (password.length < 6) {
            return NextResponse.json({ error: "A senha deve ter pelo menos 6 caracteres." }, { status: 400 });
        }

        await ensureForumTables();
        const sql = getDb();

        // Verificar se e-mail já existe
        const existing = await sql`SELECT id FROM forum_users WHERE email = ${email}`;
        if (existing.length > 0) {
            return NextResponse.json({ error: "Este e-mail já está cadastrado." }, { status: 409 });
        }

        const passwordHash = await hashPassword(password);

        const [user] = await sql`
            INSERT INTO forum_users (name, email, password_hash)
            VALUES (${name.trim()}, ${email.toLowerCase().trim()}, ${passwordHash})
            RETURNING id, name, email, role, avatar_url
        `;

        await createSession({
            userId: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            avatarUrl: user.avatar_url,
        });


        return NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
        console.error("[/api/auth/register]", err);
        return NextResponse.json({ error: "Erro interno ao criar conta." }, { status: 500 });
    }
}
