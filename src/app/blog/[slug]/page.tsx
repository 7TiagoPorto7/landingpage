import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { getPostData, getAllPostSlugs, getAdjacentPosts, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { ReadingProgress } from "@/components/reading-progress";
import { ShareButtons } from "@/components/share-buttons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";


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
    try {
        const post = await getPostData(slug);
        const title = `${post.title} | Modelagem Financeira na Prática`;
        const description = post.excerpt;

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                url: `https://www.mfnapratica.com.br/blog/${slug}`,
                type: "article",
                locale: "pt_BR",
                siteName: "Modelagem Financeira na Prática",
                images: [
                    {
                        url: post.image,
                        width: 1200,
                        height: 630,
                        alt: post.title,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title,
                description,
                images: [post.image],
            },
        };
    } catch {
        return {
            title: "Artigo Não Encontrado | Modelagem Financeira na Prática",
        };
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post;
    try {
        post = await getPostData(slug);
    } catch {
        post = null;
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
                <Link href="/blog" className="text-primary hover:underline inline-flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para o Blog
                </Link>
            </div>
        );
    }

    const { prev, next } = getAdjacentPosts(slug);
    const relatedPosts = getRelatedPosts(slug, 3);
    const postUrl = `https://www.mfnapratica.com.br/blog/${slug}`;

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black transition-colors duration-200">
            {/* Structured Data (JSON-LD) */}
            <BlogJsonLd post={post} url={postUrl} />

            {/* Reading Progress Indicator */}
            <ReadingProgress />

            {/* Sticky Navigation Header */}
            <nav className="border-b border-border bg-background/70 backdrop-blur-md sticky top-0 z-50">
                <div className="container max-w-5xl px-6 mx-auto h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center shrink-0 group">
                        <Logo className="h-8 w-auto hover:opacity-95 transition-opacity" />
                    </Link>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                            Voltar para Blog
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Article Container */}
            <article className="container max-w-5xl px-6 mx-auto pt-16 pb-24">
                <div className="max-w-3xl">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </span>
                    </div>

                    {/* Main H1 Title */}
                    <h1 className="text-3.5xl sm:text-5xl font-black tracking-tight leading-tight mb-2">
                        {post.title}
                    </h1>

                    {/* Small Author Subtitle */}
                    <div className="text-xs sm:text-sm text-muted-foreground mb-6">
                        Por <span className="font-bold text-foreground/90">{post.author}</span>
                    </div>

                    {/* Excerpt Summary */}
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 font-light italic border-l-2 border-primary/45 pl-4">
                        {post.excerpt}
                    </p>

                    {/* Share Bar */}
                    <div className="flex items-center justify-between py-3 border-y border-border mb-10">
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Compartilhar</span>
                        <ShareButtons title={post.title} slug={slug} />
                    </div>
                </div>


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
                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                    Índice do Artigo
                                </h4>
                                <nav className="space-y-3.5 text-sm border-l border-border pl-4">
                                    {post.headings.map((heading) => (
                                        <a
                                            key={heading.id}
                                            href={`#${heading.id}`}
                                            className={`block transition-colors hover:text-primary ${
                                                heading.level === 3
                                                    ? "pl-3 text-xs text-muted-foreground"
                                                    : "font-medium text-foreground/80"
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

                {/* Post Footer Divider */}
                <div className="mt-20 border-t border-border pt-12" />

                {/* Next/Prev Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {prev ? (
                        <Link
                            href={`/blog/${prev.slug}`}
                            className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all text-left"
                        >
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center">
                                &larr; Artigo Anterior
                            </span>
                            <span className="text-base font-bold text-foreground/80 group-hover:text-primary transition-colors line-clamp-2">
                                {prev.title}
                            </span>
                        </Link>
                    ) : (
                        <div className="hidden md:block" />
                    )}

                    {next ? (
                        <Link
                            href={`/blog/${next.slug}`}
                            className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all text-right items-end"
                        >
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center">
                                Próximo Artigo &rarr;
                            </span>
                            <span className="text-base font-bold text-foreground/80 group-hover:text-primary transition-colors line-clamp-2">
                                {next.title}
                            </span>
                        </Link>
                    ) : (
                        <div className="hidden md:block" />
                    )}
                </div>

                {/* Related Posts Section */}
                {relatedPosts.length > 0 && (
                    <div className="mt-20">
                        <h3 className="text-xl font-extrabold tracking-tight text-foreground mb-8">
                            Mais Conteúdos para Você
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group flex flex-col p-5 rounded-2xl border border-border hover:border-primary/20 transition-all bg-card/40"
                                >
                                    <span className="text-xs font-semibold text-muted-foreground mb-2">
                                        {related.date}
                                    </span>
                                    <h4 className="text-base font-bold text-foreground/80 group-hover:text-primary transition-colors line-clamp-2 mb-3 leading-snug">
                                        {related.title}
                                    </h4>
                                    <span className="mt-auto text-xs font-bold text-primary inline-flex items-center gap-0.5">
                                        <span>Ler mais</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>

            {/* Simple Footer */}
            <footer className="border-t border-border bg-card py-12 text-center text-muted-foreground text-xs">
                <div className="container max-w-5xl px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        &copy; {new Date().getFullYear()} MFP Education. Todos os direitos reservados.
                    </div>
                    <div className="flex gap-4">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                        <Link href="/legal" className="hover:text-foreground transition-colors">Privacidade</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
