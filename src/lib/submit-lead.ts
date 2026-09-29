// Envia um lead para /api/leads com as UTMs da sessão. Retorna true só se o lead foi salvo.
export async function submitLead(email: string, fileId: string): Promise<boolean> {
    let utmData = {};
    try {
        const utmStr = sessionStorage.getItem("utm_data");
        if (utmStr) utmData = JSON.parse(utmStr);
    } catch {}

    try {
        const res = await fetch("/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...utmData, email, fileId }),
        });
        return res.ok;
    } catch (err) {
        console.error("Erro ao enviar lead:", err);
        return false;
    }
}
