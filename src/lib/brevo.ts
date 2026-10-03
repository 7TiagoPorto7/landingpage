// Envia leads para o Brevo (e-mail marketing). A entrega do material e a sequência de e-mails
// ficam numa automação do Brevo disparada quando o contato entra na lista.
//
// Variáveis de ambiente (configuradas no Railway, nunca no código):
//   BREVO_API_KEY   chave de API v3 do Brevo
//   BREVO_LIST_ID   lista padrão para qualquer material
//   BREVO_LISTS     opcional, lista por material: "planilha-modelo-integrado:5,dicionario:6"

const API = "https://api.brevo.com/v3/contacts";

function listFor(fileId: string): number | null {
    const map = Object.fromEntries(
        (process.env.BREVO_LISTS ?? "")
            .split(",")
            .map((pair) => pair.split(":").map((s) => s.trim()))
            .filter(([id, list]) => id && Number(list) > 0)
            .map(([id, list]) => [id, Number(list)])
    );
    const fallback = Number(process.env.BREVO_LIST_ID);
    return map[fileId] ?? (fallback > 0 ? fallback : null);
}

/** Cria ou atualiza o contato no Brevo e coloca na lista do material. Nunca lança erro. */
export async function addLeadToBrevo({ email, fileId, name }: { email: string; fileId: string; name?: string | null }) {
    const key = process.env.BREVO_API_KEY;
    const listId = listFor(fileId);
    if (!key || !listId) return { sent: false, reason: "não configurado" } as const;

    try {
        const res = await fetch(API, {
            method: "POST",
            headers: { "api-key": key, "content-type": "application/json", accept: "application/json" },
            body: JSON.stringify({
                email,
                listIds: [listId],
                updateEnabled: true,
                ...(name ? { attributes: { FIRSTNAME: name } } : {}),
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
