import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
            {
                userAgent: [
                    "GPTBot",
                    "ChatGPT-User",
                    "PerplexityBot",
                    "ClaudeBot",
                    "Claude-Web",
                    "Google-Extended",
                    "CCBot",
                    "cohere-ai",
                    "Bytespider",
                    "Applebot-Extended",
                ],
                allow: "/",
                disallow: ["/api/"],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
