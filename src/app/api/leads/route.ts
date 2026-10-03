import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureLeadsTable } from "@/lib/db";
import { addLeadToBrevo } from "@/lib/brevo";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const str = (v: unknown, max = 200) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null);

        const email = str(body.email, 254)?.toLowerCase();
        const fileId = str(body.fileId, 80);
        const name = str(body.name, 80);
        const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = {
            utm_source: str(body.utm_source),
            utm_medium: str(body.utm_medium),
            utm_campaign: str(body.utm_campaign),
            utm_term: str(body.utm_term),
            utm_content: str(body.utm_content),
        };

        if (!email || !EMAIL_RE.test(email) || !fileId) {
            return NextResponse.json(
                { error: "email válido e fileId são obrigatórios" },
                { status: 400 }
            );
        }

        // 1) Banco: registro próprio do lead com UTMs. 2) Brevo: entrega do material e sequência de e-mails.
        // Um não depende do outro; o lead só é perdido se os dois falharem.
        let savedDb = false;
        try {
            await ensureLeadsTable();
            const sql = getDb();
            await sql`
                INSERT INTO leads (email, file_id, utm_source, utm_medium, utm_campaign, utm_term, utm_content)
                VALUES (${email}, ${fileId}, ${utm_source || null}, ${utm_medium || null}, ${utm_campaign || null}, ${utm_term || null}, ${utm_content || null})
            `;
            savedDb = true;
        } catch (err) {
            console.error("[/api/leads] erro no banco:", err);
        }

        const brevo = await addLeadToBrevo({ email, fileId, name });

        if (!savedDb && !brevo.sent) {
            return NextResponse.json({ error: "Erro interno ao salvar lead" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[/api/leads] erro:", err);
        return NextResponse.json(
            { error: "Erro interno ao salvar lead" },
            { status: 500 }
        );
    }
}
