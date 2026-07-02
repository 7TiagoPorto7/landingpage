// Declarações de tipo para o Google Analytics (gtag.js)
// Evita erros de TypeScript ao acessar window.gtag

interface Window {
  dataLayer: unknown[];
  gtag: (
    command: "config" | "event" | "js" | "set",
    targetId: string | Date,
    config?: Record<string, string | number | boolean | undefined>
  ) => void;
}
