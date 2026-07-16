import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureLeadsTable } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { email, fileId, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = await req.json();

        if (!email || !fileId) {
            return NextResponse.json(
                { error: "email e fileId são obrigatórios" },
                { status: 400 }
            );
        }

        // Garante que a tabela existe (idempotente)
        await ensureLeadsTable();

        const sql = getDb();

        // Salva o lead com UTMs
        await sql`
            INSERT INTO leads (email, file_id, utm_source, utm_medium, utm_campaign, utm_term, utm_content)
            VALUES (${email}, ${fileId}, ${utm_source || null}, ${utm_medium || null}, ${utm_campaign || null}, ${utm_term || null}, ${utm_content || null})
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
