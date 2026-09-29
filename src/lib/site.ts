// Fonte única do domínio e da marca. Em produção o NEXT_PUBLIC_SITE_URL já aponta para o mesmo domínio.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.mfnapratica.com.br").replace(/\/$/, "");
export const SITE_NAME = "Modelagem Financeira na Prática";
