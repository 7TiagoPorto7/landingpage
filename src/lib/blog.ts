import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

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
    /** Data em ISO (YYYY-MM-DD), derivada de `date` */
    isoDate: string;
    readTime: string;
    author: string;
    excerpt: string;
    /** Foto do post (Unsplash, licença gratuita) e crédito do fotógrafo */
    image?: string;
    imageAlt?: string;
    imageCredit?: string;
    imageCreditUrl?: string;
    contentHtml?: string;
    headings?: HeadingItem[];
}

const MONTHS: Record<string, string> = {
    jan: "01", fev: "02", mar: "03", abr: "04", mai: "05", jun: "06",
    jul: "07", ago: "08", set: "09", out: "10", nov: "11", dez: "12",
};

// "07 Jul 2026" -> "2026-07-07"
export function parseDateToISO(dateStr: string): string {
    const [day, month, year] = dateStr.trim().split(/\s+/);
    const mm = MONTHS[month?.toLowerCase().slice(0, 3)];
    if (!day || !mm || !year) return "1970-01-01";
    return `${year}-${mm}-${day.padStart(2, "0")}`;
}

function readingTime(markdown: string): string {
    const words = markdown.split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 200))} min`;
}

// Os posts escrevem fórmulas como \[ ... \] e \( ... \). O remark trata "\[" como colchete escapado,
// então convertemos para a sintaxe $$ do remark-math. Cifrão simples fica desligado por causa do "R$".
function normalizeMath(markdown: string): string {
    return markdown
        .replace(/^[ \t]*\\\[\s*([\s\S]+?)\s*\\\][ \t]*$/gm, (_, expr) => `\n$$\n${expr}\n$$\n`)
        .replace(/\\\(\s*(.+?)\s*\\\)/g, (_, expr) => `$$${expr}$$`);
}

function readPostFile(fileName: string) {
    const slug = fileName.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
    const { data, content } = matter(fileContents);
    return {
        slug,
        content,
        meta: {
            slug,
            title: data.title as string,
            date: data.date as string,
            isoDate: parseDateToISO(data.date as string),
            readTime: readingTime(content),
            author: data.author as string,
            excerpt: data.excerpt as string,
            image: (data.image as string) || undefined,
            imageAlt: (data.imageAlt as string) || undefined,
            imageCredit: (data.imageCredit as string) || undefined,
            imageCreditUrl: (data.imageCreditUrl as string) || undefined,
        } satisfies PostData,
    };
}

function isPublished(isoDate: string): boolean {
    return isoDate <= new Date().toISOString().slice(0, 10);
}

function listPostFiles(): string[] {
    if (!fs.existsSync(postsDirectory)) return [];
    return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
}

export function getSortedPostsData(): PostData[] {
    return listPostFiles()
        .map((f) => readPostFile(f).meta)
        .filter((post) => isPublished(post.isoDate))
        .sort((a, b) => b.isoDate.localeCompare(a.isoDate) || a.title.localeCompare(b.title));
}

export function getAllPostSlugs() {
    return getSortedPostsData().map((post) => ({ params: { slug: post.slug } }));
}

export function postExists(slug: string): boolean {
    return getSortedPostsData().some((post) => post.slug === slug);
}

const decodeEntities = (s: string) =>
    s
        .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
        .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");

const slugify = (text: string) =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

export async function getPostData(slug: string): Promise<PostData | null> {
    const fileName = `${slug}.md`;
    if (!fs.existsSync(path.join(postsDirectory, fileName))) return null;

    const { content, meta } = readPostFile(fileName);
    if (!isPublished(meta.isoDate)) return null;

    const processed = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMath, { singleDollarTextMath: false })
        .use(remarkRehype)
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(normalizeMath(content));
    let contentHtml = processed.toString();

    // Extrair cabeçalhos (h2 e h3) e injetar ID para âncoras (TOC)
    const headings: HeadingItem[] = [];
    contentHtml = contentHtml.replace(/<h(2|3)>([^<]+)<\/h\1>/g, (_, level, raw) => {
        const text = decodeEntities(raw);
        const id = slugify(text);
        headings.push({ text, id, level: parseInt(level) });
        return `<h${level} id="${id}">${raw}</h${level}>`;
    });

    return { ...meta, contentHtml, headings };
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

    // Ordenados por data decrescente: o mais novo (next) fica antes, o mais antigo (prev) depois
    const nextPost = index > 0 ? posts[index - 1] : null;
    const prevPost = index < posts.length - 1 ? posts[index + 1] : null;

    return {
        next: nextPost ? { slug: nextPost.slug, title: nextPost.title } : null,
        prev: prevPost ? { slug: prevPost.slug, title: prevPost.title } : null,
    };
}

const STOPWORDS = new Set(
    "o a os as e de do da dos das que como um uma para por na no nas nos em com sobre calcular pratica guia entender e é ao".split(" ")
);

const keywords = (post: PostData) =>
    new Set(
        slugify(`${post.title} ${post.excerpt}`)
            .split("-")
            .filter((w) => w.length > 2 && !STOPWORDS.has(w))
    );

// Relacionados por sobreposição de palavras-chave de título e resumo
export function getRelatedPosts(currentSlug: string, limit = 3): PostData[] {
    const posts = getSortedPostsData();
    const current = posts.find((p) => p.slug === currentSlug);
    if (!current) return posts.slice(0, limit);

    const base = keywords(current);
    return posts
        .filter((p) => p.slug !== currentSlug)
        .map((p) => {
            const kw = keywords(p);
            let shared = 0;
            kw.forEach((w) => base.has(w) && shared++);
            return { p, score: shared / Math.sqrt(kw.size * base.size || 1) };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ p }) => p);
}
