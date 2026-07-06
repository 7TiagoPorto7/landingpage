import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface HeadingItem {
    text: string;
    id: string;
    level: number;
}

export interface PostData {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    excerpt: string;
    contentHtml?: string;
    headings?: HeadingItem[];
}


export function getSortedPostsData(): PostData[] {
    // Get file names under /posts
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            slug,
            ...(matterResult.data as Omit<PostData, "slug" | "contentHtml">),
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Post not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    let contentHtml = processedContent.toString();

    // Extrair cabeçalhos (h2 e h3) e injetar ID para âncoras (TOC)
    const headings: HeadingItem[] = [];
    const slugify = (text: string) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    };

    contentHtml = contentHtml.replace(/<h(2|3)>([^<]+)<\/h\1>/g, (match, level, text) => {
        const id = slugify(text);
        headings.push({ text, id, level: parseInt(level) });
        return `<h${level} id="${id}">${text}</h${level}>`;
    });

    // Combine the data with the id and contentHtml
    return {
        slug,
        contentHtml,
        headings,
        ...(matterResult.data as Omit<PostData, "slug" | "contentHtml" | "headings">),
    };
}


export interface AdjacentPosts {
    prev: { slug: string; title: string } | null;
    next: { slug: string; title: string } | null;
}

export function getAdjacentPosts(slug: string): AdjacentPosts {
    const posts = getSortedPostsData();
    const index = posts.findIndex((post) => post.slug === slug);

    if (index === -1) {
        return { prev: null, next: null };
    }

    // Ordenados por data decrescente (mais recente primeiro)
    // O post mais novo (next) estará no índice anterior (index - 1)
    // O post mais antigo (prev) estará no índice posterior (index + 1)
    const nextPost = index > 0 ? posts[index - 1] : null;
    const prevPost = index < posts.length - 1 ? posts[index + 1] : null;

    return {
        next: nextPost ? { slug: nextPost.slug, title: nextPost.title } : null,
        prev: prevPost ? { slug: prevPost.slug, title: prevPost.title } : null,
    };
}

export function getRelatedPosts(currentSlug: string, limit = 3): PostData[] {
    const posts = getSortedPostsData();
    return posts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}

