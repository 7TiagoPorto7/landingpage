import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/api/", // bloqueia rotas de API do rastreamento
        },
        sitemap: "https://www.mfnapratica.com.br/sitemap.xml",
    };
}
