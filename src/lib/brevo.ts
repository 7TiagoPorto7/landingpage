// Envia leads para o Brevo (e-mail marketing). A entrega do material e a sequência de e-mails
// ficam numa automação do Brevo disparada quando o contato entra na lista.
//
// Variáveis de ambiente (configuradas no Railway, nunca no código):
//   BREVO_API_KEY   chave de API v3 do Brevo
//   BREVO_LISTS     opcional, sobrescreve ou acrescenta listas por material: "newsletter-blog:5,dicionario-financas:6"
//
// Cada material vai para a SUA lista, porque cada lista dispara uma automação diferente.
// Material sem lista definida não vai para o Brevo (fica só no banco do site).

const API = "https://api.brevo.com/v3/contacts";
// Listas do Brevo por material (fileId do formulário)
const LISTS: Record<string, number> = {
    "planilha-modelo-integrado": 3, // "Leads – Planilha modelo integrado", com a sequência de 5 e-mails
    "newsletter-blog": 6, // "Newsletter do blog", com a sequência dos principais posts
    "ia-para-financas": 7, // "Guia IA para Finanças", entrega do PDF e oferta do 100 Prompts
    "dicionario-financas": 8, // "Dicionário de Finanças", entrega da planilha e oferta do Template Pro
    consultoria: 9, // "Consultoria (MFP Advisory)", pedidos de contato da página /consultoria
};

function listFor(fileId: string): number | null {
    const map = Object.fromEntries(
        (process.env.BREVO_LISTS ?? "")
            .split(",")
            .map((pair) => pair.split(":").map((s) => s.trim()))
            .filter(([id, list]) => id && Number(list) > 0)
            .map(([id, list]) => [id, Number(list)])
    );
    return map[fileId] ?? LISTS[fileId] ?? null;
}

/** Cria ou atualiza o contato no Brevo e coloca na lista do material. Nunca lança erro. */
export async function addLeadToBrevo({
    email,
    fileId,
    name,
    attributes = {},
}: {
    email: string;
    fileId: string;
    name?: string | null;
    /** Atributos extras do contato (ex.: TELEFONE, EMPRESA, OBSERVACAO). Valores vazios são ignorados. */
    attributes?: Record<string, string | null | undefined>;
}) {
    const key = process.env.BREVO_API_KEY;
    const listId = listFor(fileId);
    if (!key) return { sent: false, reason: "não configurado" } as const;
    if (!listId) return { sent: false, reason: "sem lista para este material" } as const;

    try {
        const res = await fetch(API, {
            method: "POST",
            headers: { "api-key": key, "content-type": "application/json", accept: "application/json" },
            body: JSON.stringify({
                email,
                listIds: [listId],
                updateEnabled: true,
                attributes: Object.fromEntries(Object.entries({ NOME: name, ...attributes }).filter(([, v]) => v)),
            }),
            signal: AbortSignal.timeout(6000),
        });
        if (!res.ok) {
            console.error("[brevo] falha ao enviar contato:", res.status, await res.text().catch(() => ""));
            return { sent: false, reason: `http ${res.status}` } as const;
        }
        return { sent: true } as const;
    } catch (err) {
        console.error("[brevo] erro de rede:", err);
        return { sent: false, reason: "rede" } as const;
    }
}
