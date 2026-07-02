"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Utilitário para disparar eventos personalizados no Google Analytics.
 * Use para rastrear conversões, cliques em CTAs, downloads, etc.
 *
 * Exemplos de uso:
 *   gtagEvent("click_cta_hero", { label: "Quero Aprender" });
 *   gtagEvent("purchase", { value: 297, currency: "BRL" });
 *   gtagEvent("generate_lead", { method: "form_contact" });
 */
export function gtagEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", action, params);
  }
}

/**
 * Componente de Google Analytics (gtag.js).
 * Carregado com strategy="afterInteractive" para não bloquear o LCP/FCP
 * e garantir conformidade com Core Web Vitals.
 * Desabilitado automaticamente em ambiente de desenvolvimento.
 */
export function Analytics() {
  // Não rastreia em desenvolvimento para não poluir os dados
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* Carrega o script do gtag.js de forma assíncrona e não bloqueante */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Inicializa o dataLayer e configura o Measurement ID */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
