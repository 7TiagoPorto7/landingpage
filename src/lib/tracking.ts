"use client";

export const BASE_CHECKOUT_URL = "https://pay.hotmart.com/F106435738T";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

type Fbq = (command: "track", event: string, params?: Record<string, unknown>) => void;
const fbq = (): Fbq | undefined => (window as unknown as { fbq?: Fbq }).fbq;

/**
 * UTMs da visita: URL atual > sessionStorage "utm_data" (gravado pelo UtmTracker) > chaves soltas legadas.
 */
function getStoredUtms(): Record<string, string> {
    const utms: Record<string, string> = {};
    try {
        const current = new URLSearchParams(window.location.search);
        const saved = JSON.parse(sessionStorage.getItem("utm_data") || "{}") as Record<string, string>;
        for (const key of UTM_KEYS) {
            const val = current.get(key) || saved[key] || sessionStorage.getItem(key);
            if (val) utms[key] = val;
        }
    } catch {}
    return utms;
}

/**
 * Adiciona as UTMs da visita e o parâmetro `sck` da Hotmart ao link de checkout.
 */
export function getDecoratedCheckoutUrl(baseUrl: string = BASE_CHECKOUT_URL): string {
    if (typeof window === "undefined") return baseUrl;

    try {
        const url = new URL(baseUrl);
        const utms = getStoredUtms();
        Object.entries(utms).forEach(([key, val]) => url.searchParams.set(key, val));

        // sck da Hotmart: utm_source|utm_medium|utm_campaign|utm_content
        const sck = [utms.utm_source, utms.utm_medium, utms.utm_campaign, utms.utm_content].map((v) => v || "").join("|");
        if (sck !== "|||") url.searchParams.set("sck", sck);

        return url.toString();
    } catch {
        return baseUrl;
    }
}

/**
 * Dispara begin_checkout (GA4) e InitiateCheckout (Meta) antes de ir para a Hotmart.
 */
export function trackCheckout(sectionName: string, value: number = 197, productName = "Fundamentos da Modelagem Financeira") {
    if (typeof window === "undefined") return;

    try {
        localStorage.setItem("has_clicked_checkout", "true");
    } catch {}

    window.gtag?.("event", "begin_checkout", {
        currency: "BRL",
        value,
        item_name: productName,
        section: sectionName,
    });

    fbq()?.("track", "InitiateCheckout", {
        value,
        currency: "BRL",
        content_name: productName,
        section: sectionName,
    });
}

/**
 * Dispara generate_lead (GA4) e Lead (Meta).
 */
export function trackLead(formSource: string = "fundamentos_page") {
    if (typeof window === "undefined") return;

    window.gtag?.("event", "generate_lead", { source: formSource });
    fbq()?.("track", "Lead", { source: formSource });
}
