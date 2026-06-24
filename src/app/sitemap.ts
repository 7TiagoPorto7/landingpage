import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";

const BASE_URL = "https://www.mfnapratica.com.br";

// ─────────────────────────────────────────────
// Páginas estáticas do site
// Ao criar uma nova página, adicione-a aqui.
// ─────────────────────────────────────────────
const staticRoutes: MetadataRoute.Sitemap = [
    {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
    },
    {
        url: `${BASE_URL}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/starter-kit`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/template-pro`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/prompts4finance`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/downloads`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/links`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/legal`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
    },
    {
        url: `${BASE_URL}/fundamentos`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
];

export default function sitemap(): MetadataRoute.Sitemap {
    // Posts do blog — gerados automaticamente a partir de content/posts/
    const postSlugs = getAllPostSlugs();
    const postRoutes: MetadataRoute.Sitemap = postSlugs.map(({ params }) => ({
        url: `${BASE_URL}/blog/${params.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...postRoutes];
}
