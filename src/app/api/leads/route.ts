import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureLeadsTable } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { email, fileId } = await req.json();

        if (!email || !fileId) {
            return NextResponse.json(
                { error: "email e fileId são obrigatórios" },
                { status: 400 }
            );
        }

        // Garante que a tabela existe (idempotente)
        await ensureLeadsTable();

        const sql = getDb();

        // Salva o lead
        await sql`
            INSERT INTO leads (email, file_id)
            VALUES (${email}, ${fileId})
        `;

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[/api/leads] erro:", err);
        return NextResponse.json(
            { error: "Erro interno ao salvar lead" },
            { status: 500 }
        );
    }
}
