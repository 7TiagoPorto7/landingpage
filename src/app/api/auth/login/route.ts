import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureForumTables } from "@/lib/db";
import { verifyPassword, createSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "E-mail e senha são obrigatórios." }, { status: 400 });
        }

        await ensureForumTables();
        const sql = getDb();

        const [user] = await sql`
            SELECT id, name, email, password_hash, role
            FROM forum_users
            WHERE email = ${email.toLowerCase().trim()}
        `;

        if (!user) {
            return NextResponse.json({ error: "E-mail ou senha incorretos." }, { status: 401 });
        }

        const passwordValid = await verifyPassword(password, user.password_hash);
        if (!passwordValid) {
            return NextResponse.json({ error: "E-mail ou senha incorretos." }, { status: 401 });
        }

        await createSession({
            userId: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        });

        return NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
        console.error("[/api/auth/login]", err);
        return NextResponse.json({ error: "Erro interno ao fazer login." }, { status: 500 });
    }
}
