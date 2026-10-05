import { NextRequest, NextResponse } from "next/server";
import { getDb, ensureConsultoriaTable } from "@/lib/db";
import { addLeadToBrevo } from "@/lib/brevo";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Pedido de contato da página /consultoria.
// 1) Banco: tabela consultoria_leads. 2) Aviso por e-mail para quem atende, se CONSULTORIA_NOTIFY_EMAIL estiver no Railway.
// 3) Brevo: contato na lista "Consultoria (MFP Advisory)" com telefone, empresa e observação.
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const str = (v: unknown, max = 200) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null);

        // Campo escondido: só robô preenche. Responde sucesso e descarta.
        if (str(body.website)) return NextResponse.json({ success: true });

        const name = str(body.name, 80);
        const email = str(body.email, 254)?.toLowerCase();
        const phone = str(body.phone, 40);
        const company = str(body.company, 120);
        const message = str(body.message, 3000);
        const utm_source = str(body.utm_source);
        const utm_medium = str(body.utm_medium);
        const utm_campaign = str(body.utm_campaign);

        if (!name || !email || !EMAIL_RE.test(email)) {
            return NextResponse.json({ error: "nome e e-mail válido são obrigatórios" }, { status: 400 });
        }

        let savedDb = false;
        try {
            await ensureConsultoriaTable();
            const sql = getDb();
            await sql`
                INSERT INTO consultoria_leads (name, email, phone, company, message, utm_source, utm_medium, utm_campaign)
                VALUES (${name}, ${email}, ${phone}, ${company}, ${message}, ${utm_source}, ${utm_medium}, ${utm_campaign})
            `;
            savedDb = true;
        } catch (err) {
            console.error("[/api/consultoria] erro no banco:", err);
        }

        const notified = await notify({ name, email, phone, company, message });
        const brevo = await addLeadToBrevo({ email, fileId: "consultoria", name, attributes: { TELEFONE: phone, EMPRESA: company, OBSERVACAO: message } });

        if (!savedDb && !notified && !brevo.sent) {
            return NextResponse.json({ error: "Erro interno ao salvar contato" }, { status: 500 });
        }
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[/api/consultoria] erro:", err);
        return NextResponse.json({ error: "Erro interno ao salvar contato" }, { status: 500 });
    }
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Avisa por e-mail (Brevo transacional) que chegou um pedido. Nunca lança erro. */
async function notify(lead: { name: string; email: string; phone: string | null; company: string | null; message: string | null }) {
    const key = process.env.BREVO_API_KEY;
    const to = process.env.CONSULTORIA_NOTIFY_EMAIL;
    if (!key || !to) return false;

    const rows = [
        ["Nome", lead.name],
        ["E-mail", lead.email],
        ["Telefone", lead.phone ?? "—"],
        ["Empresa", lead.company ?? "—"],
    ]
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${esc(v)}</td></tr>`)
        .join("");

    try {
        const res = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: { "api-key": key, "content-type": "application/json", accept: "application/json" },
            body: JSON.stringify({
                sender: { name: "Site MFP Academy", email: "contato@mfnapratica.com.br" },
                to: [{ email: to }],
                replyTo: { email: lead.email, name: lead.name },
                subject: `Consultoria: novo contato de ${lead.name}`,
                htmlContent: `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111"><p>Novo pedido de contato pela página de consultoria.</p><table>${rows}</table><p style="margin-top:16px;color:#666">Observação</p><p style="white-space:pre-wrap">${esc(lead.message ?? "—")}</p><p style="color:#666">Responda este e-mail para falar direto com a pessoa.</p></div>`,
            }),
            signal: AbortSignal.timeout(6000),
        });
        if (!res.ok) console.error("[/api/consultoria] falha no aviso:", res.status, await res.text().catch(() => ""));
        return res.ok;
    } catch (err) {
        console.error("[/api/consultoria] erro no aviso:", err);
        return false;
    }
}
