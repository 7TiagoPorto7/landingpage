"use client";

// Tracking IDs with TODO fallbacks if not provided in env
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ""; // TODO: [PREENCHER: ID do Pixel do Meta]
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-V70VJ88N4V";

export const BASE_CHECKOUT_URL = "https://pay.hotmart.com/F106435738T";

/**
 * Capture and store UTM parameters from URL into sessionStorage
 */
export function initUtmTracking() {
    if (typeof window === "undefined") return;

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
        
        utmKeys.forEach((key) => {
            const val = urlParams.get(key);
            if (val) {
                sessionStorage.setItem(key, val);
            }
        });
    } catch (e) {
        console.error("Failed to store UTM parameters:", e);
    }
}

/**
 * Decorates checkout URL with stored UTMs and Hotmart `sck` parameter
 */
export function getDecoratedCheckoutUrl(baseUrl: string = BASE_CHECKOUT_URL): string {
    if (typeof window === "undefined") return baseUrl;

    try {
        const url = new URL(baseUrl);
        const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
        
        const storedUtms: Record<string, string> = {};
        const currentParams = new URLSearchParams(window.location.search);

        utmKeys.forEach((key) => {
            const val = currentParams.get(key) || sessionStorage.getItem(key);
            if (val) {
                storedUtms[key] = val;
                url.searchParams.set(key, val);
            }
        });

        // Format Hotmart sck parameter: utm_source|utm_medium|utm_campaign|utm_content
        const sckParts = [
            storedUtms["utm_source"] || "",
            storedUtms["utm_medium"] || "",
            storedUtms["utm_campaign"] || "",
            storedUtms["utm_content"] || "",
        ].join("|");

        if (sckParts !== "|||") {
            url.searchParams.set("sck", sckParts);
        }

        return url.toString();
    } catch (e) {
        return baseUrl;
    }
}

/**
 * Trigger InitiateCheckout on Meta Pixel and begin_checkout on GA4 before redirect
 */
export function trackCheckout(sectionName: string, value: number = 197) {
    if (typeof window !== "undefined") {
        try {
            localStorage.setItem("has_clicked_checkout", "true");
        } catch (e) {}

        // GA4 Event
        if (typeof window.gtag !== "undefined") {
            (window as any).gtag("event", "begin_checkout", {
                currency: "BRL",
                value: value,
                item_name: "Fundamentos da Modelagem Financeira",
                section: sectionName,
            });
        }

        // Meta Pixel Event
        if (typeof (window as any).fbq !== "undefined") {
            (window as any).fbq("track", "InitiateCheckout", {
                value: value,
                currency: "BRL",
                content_name: "Fundamentos da Modelagem Financeira",
                section: sectionName,
            });
        }
    }
}

/**
 * Trigger Lead event on Meta Pixel and generate_lead on GA4
 */
export function trackLead(formSource: string = "fundamentos_page") {
    if (typeof window !== "undefined") {
        // GA4 Event
        if (typeof (window as any).gtag !== "undefined") {
            (window as any).gtag("event", "generate_lead", {
                source: formSource,
            });
        }

        // Meta Pixel Event
        if (typeof (window as any).fbq !== "undefined") {
            (window as any).fbq("track", "Lead", {
                content_name: "Captura de Lead Fundamentos",
                source: formSource,
            });
        }
    }
}
