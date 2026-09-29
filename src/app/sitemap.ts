import { MetadataRoute } from "next";
import { getSortedPostsData } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

// ─────────────────────────────────────────────
// Páginas estáticas do site
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
        url: `${BASE_URL}/fundamentos`,
        lastModified: new Date(),
        changeFrequency: "monthly",
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
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/prompts4finance`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/claude-financas`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/fluxograma`,
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
        url: `${BASE_URL}/llms.txt`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
    },
    {
        url: `${BASE_URL}/llms-full.txt`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
    },
];

export default function sitemap(): MetadataRoute.Sitemap {
    // Posts do blog — gerados automaticamente a partir de content/posts/
    const postRoutes: MetadataRoute.Sitemap = getSortedPostsData().map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.isoDate),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...postRoutes];
}
