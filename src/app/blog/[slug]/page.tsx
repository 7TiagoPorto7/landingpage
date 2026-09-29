import Link from "next/link";
import { notFound } from "next/navigation";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { getPostData, getAllPostSlugs, getAdjacentPosts, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { ReadingProgress } from "@/components/reading-progress";
import { ShareButtons } from "@/components/share-buttons";
import { Logo } from "@/components/logo";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { mfpFonts } from "@/lib/fonts";
import { Container } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { PostCover } from "@/components/post-cover";
import { getCategory } from "@/lib/blog-categories";


export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostData(slug);
    if (!post) return { title: "Artigo não encontrado" };
    {
        const title = post.title;
        const description = post.excerpt;

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                url: `${SITE_URL}/blog/${slug}`,
                type: "article",
                locale: "pt_BR",
                siteName: SITE_NAME,
                publishedTime: post.isoDate,
                authors: [post.author],
            },
            twitter: {
                card: "summary_large_image",
                title,
                description,
            },
            alternates: { canonical: `/blog/${slug}` },
        };
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData(slug);
    if (!post) notFound();

    const { prev, next } = getAdjacentPosts(slug);
    const relatedPosts = getRelatedPosts(slug, 3);
    const postUrl = `${SITE_URL}/blog/${slug}`;

    return (
        <div className={`mfp ${mfpFonts} min-h-screen`}>
            {/* Structured Data (JSON-LD) */}
            <BlogJsonLd post={post} url={postUrl} />

            {/* Reading Progress Indicator */}
            <ReadingProgress />

            {/* Header MFP */}
            <header className="sticky top-0 z-30 border-b border-white/10 bg-[var(--navy)]/85 text-white backdrop-blur-md">
                <Container className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" aria-label="Página inicial">
                        <Logo className="h-7 w-auto" />
                    </Link>
                    <nav className="flex items-center gap-6 text-sm text-white/75" aria-label="Navegação">
                        <Link href="/blog" className="hover:text-white inline-flex items-center gap-1">
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Blog
                        </Link>
                        <Link href="/fundamentos" className="hidden rounded-lg bg-[var(--amber)] px-4 py-2 font-semibold text-[var(--ink)] hover:bg-[#fbb32e] sm:inline-flex">
                            Comece pelo curso
                        </Link>
                    </nav>
                </Container>
            </header>

            <main>
                {/* Article Hero */}
                <section className="bg-[var(--snow)] py-16 sm:py-20">
                    <Container>
                        <div className="max-w-3xl">
                            {/* Meta Info */}
                            <div className="flex items-center gap-4 text-xs font-semibold text-[var(--ink-3)] mb-4">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {post.date}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-[var(--grid)]" />
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {post.readTime}
                                </span>
                            </div>

                            {/* Main H1 Title */}
                            <h1 className="text-[2.1rem] sm:text-[3.1rem] font-semibold tracking-[-0.025em] leading-[1.08] mb-3">
                                {post.title}
                            </h1>

                            {/* Author */}
                            <div className="text-sm text-[var(--ink-2)] mb-6">
                                Por <span className="font-semibold text-[var(--ink)]">{post.author}</span>
                            </div>

                            {/* Excerpt */}
                            <p className="text-lg sm:text-xl text-[var(--ink-2)] leading-relaxed mb-6 italic border-l-3 border-[var(--amber)] pl-4">
                                {post.excerpt}
                            </p>

                            {/* Share Bar */}
                            <div className="flex items-center justify-between py-3 border-y border-[var(--grid)] mb-4">
                                <span className="text-xs text-[var(--ink-3)] font-semibold uppercase tracking-wider">Compartilhar</span>
                                <ShareButtons title={post.title} slug={slug} />
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Article Content */}
                <section className="bg-white py-16 sm:py-20">
                    <Container>
                        {/* Grid layout: Content & Table of Contents Sidebar */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                            {/* Content Column */}
                            <div className="lg:col-span-3">
                                <div
                                    className="blog-prose"
                                    dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                                />
                            </div>

                            {/* Desktop Sidebar (Table of Contents) */}
                            {post.headings && post.headings.length > 0 && (
                                <aside className="hidden lg:block lg:col-span-1">
                                    <div className="sticky top-24 self-start">
                                        <h4 className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-widest mb-4">
                                            Índice do Artigo
                                        </h4>
                                        <nav className="space-y-3.5 text-sm border-l border-[var(--grid)] pl-4">
                                            {post.headings.map((heading) => (
                                                <a
                                                    key={heading.id}
                                                    href={`#${heading.id}`}
                                                    className={`block transition-colors hover:text-[var(--blue-2)] ${
                                                        heading.level === 3
                                                            ? "pl-3 text-xs text-[var(--ink-3)]"
                                                            : "font-medium text-[var(--ink-2)]"
                                                    }`}
                                                >
                                                    {heading.text}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </aside>
                            )}
                        </div>
                    </Container>
                </section>

                {/* Post Footer: Prev/Next + Related */}
                <section className="bg-[var(--snow)] py-16 sm:py-20">
                    <Container>
                        {/* Next/Prev Navigation */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            {prev ? (
                                <Link
                                    href={`/blog/${prev.slug}`}
                                    className="group flex flex-col p-6 rounded-2xl bg-white ring-1 ring-[var(--grid)] hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)] transition-all text-left"
                                >
                                    <span className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider mb-2 flex items-center">
                                        &larr; Artigo Anterior
                                    </span>
                                    <span className="text-base font-semibold text-[var(--ink)] group-hover:text-[var(--blue-2)] transition-colors line-clamp-2">
                                        {prev.title}
                                    </span>
                                </Link>
                            ) : (
                                <div className="hidden md:block" />
                            )}

                            {next ? (
                                <Link
                                    href={`/blog/${next.slug}`}
                                    className="group flex flex-col p-6 rounded-2xl bg-white ring-1 ring-[var(--grid)] hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)] transition-all text-right items-end"
                                >
                                    <span className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider mb-2 flex items-center">
                                        Próximo Artigo &rarr;
                                    </span>
                                    <span className="text-base font-semibold text-[var(--ink)] group-hover:text-[var(--blue-2)] transition-colors line-clamp-2">
                                        {next.title}
                                    </span>
                                </Link>
                            ) : (
                                <div className="hidden md:block" />
                            )}
                        </div>

                        {/* Related Posts Section */}
                        {relatedPosts.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-8">
                                    Mais Conteúdos para Você
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    {relatedPosts.map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/blog/${related.slug}`}
                                            className="group overflow-hidden rounded-2xl bg-white ring-1 ring-[var(--grid)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
                                        >
                                            <div className="relative aspect-video">
                                                <PostCover title={related.title} category={getCategory(related.slug)} />
                                            </div>
                                            <div className="p-6">
                                                <p className="text-sm text-[var(--ink-3)]">
                                                    {related.date}
                                                </p>
                                                <h4 className="mt-2 line-clamp-2 font-semibold leading-snug group-hover:text-[var(--blue-2)]">
                                                    {related.title}
                                                </h4>
                                                <span className="mt-3 inline-flex items-center gap-0.5 text-xs font-semibold text-[var(--blue-2)]">
                                                    Ler mais
                                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Container>
                </section>
            </main>

            <MfpFooter />
        </div>
    );
}
