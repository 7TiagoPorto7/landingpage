"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import type { PostData } from "@/lib/blog";
import { getCategory } from "@/lib/blog-categories";
import { PostCover } from "@/components/post-cover";

interface BlogListClientProps {
    posts: PostData[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
    const [searchQuery, setSearchQuery] = useState("");

    // Filtrar posts com base no texto de busca
    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Organizar: 3 mais recentes em destaque e o restante como barras
    const featuredPosts: PostData[] = [];
    const restPosts: PostData[] = [];

    if (!searchQuery) {
        for (const post of posts) {
            if (featuredPosts.length < 3) {
                featuredPosts.push(post);
            } else {
                restPosts.push(post);
            }
        }
    }

    return (
        <div className="space-y-10">
            {/* Barra de Pesquisa */}
            <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--ink-3)]" />
                <input
                    type="text"
                    placeholder="Pesquisar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--paper-2,#f1f4f9)] ring-1 ring-[var(--grid)] text-[var(--ink)] placeholder-[var(--ink-3)] text-sm focus:outline-none focus:ring-[var(--amber)] transition-all"
                />
            </div>

            {searchQuery ? (
                /* Resultados da Busca */
                <div className="space-y-6">
                    <h3 className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-widest">
                        Resultados da Busca ({filteredPosts.length})
                    </h3>
                    {filteredPosts.length > 0 ? (
                        <div className="rounded-2xl bg-white ring-1 ring-[var(--grid)] divide-y divide-[var(--grid)] overflow-hidden">
                            {filteredPosts.map((post) => {
                                const category = getCategory(post.slug);
                                return (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group block p-5 hover:bg-[var(--snow)] transition-colors"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div className="space-y-2 flex-1">
                                                <div className="flex items-center gap-3 text-[10px] font-semibold text-[var(--ink-3)]">
                                                    <span className="bg-[var(--navy)] text-[var(--amber)] px-2 py-0.5 rounded uppercase tracking-wider text-[9px] font-bold">
                                                        {category}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {post.date}
                                                    </span>
                                                    <span className="h-1 w-1 rounded-full bg-[var(--grid)]" />
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                                <h4 className="text-base font-semibold text-[var(--ink)] group-hover:text-[var(--blue-2)] transition-colors leading-snug">
                                                    {post.title}
                                                </h4>
                                                <p className="text-xs text-[var(--ink-2)] line-clamp-2 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="text-xs font-semibold text-[var(--blue-2)] flex items-center gap-0.5 whitespace-nowrap self-end sm:self-center">
                                                <span>Ler artigo</span>
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12 border border-dashed border-[var(--grid)] rounded-2xl text-[var(--ink-3)] text-sm">
                            Nenhum artigo encontrado para &quot;{searchQuery}&quot;.
                        </div>
                    )}
                </div>
            ) : (
                /* Layout Padrão (Destaques em Thumbnails + Resto em Barras) */
                <div className="space-y-14">
                    {/* Top 3 posts com thumbnails */}
                    {featuredPosts.length > 0 && (
                        <div className="space-y-6">
                            <h3 className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-widest">
                                Artigos em Destaque
                            </h3>
                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {featuredPosts.map((post) => {
                                    const category = getCategory(post.slug);
                                    return (
                                        <article
                                            key={post.slug}
                                            className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[var(--grid)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
                                        >
                                            <Link href={`/blog/${post.slug}`} className="aspect-video relative overflow-hidden block">
                                                <PostCover title={post.title} category={category} image={post.image} alt={post.imageAlt} />
                                            </Link>
                                            <div className="p-5 flex-1 flex flex-col">
                                                <div className="flex items-center justify-between mb-3.5">
                                                    <span className="inline-flex items-center text-[10px] font-bold bg-[var(--navy)] text-[var(--amber)] px-2 py-0.5 rounded-md uppercase tracking-wider">
                                                        {category}
                                                    </span>
                                                    <span className="text-[10px] text-[var(--ink-3)] flex items-center gap-1 font-semibold">
                                                        <Calendar className="w-3 h-3" />
                                                        {post.date}
                                                    </span>
                                                </div>
                                                <Link href={`/blog/${post.slug}`} className="block mb-2">
                                                    <h4 className="text-base font-semibold text-[var(--ink)] group-hover:text-[var(--blue-2)] transition-colors leading-snug line-clamp-2">
                                                        {post.title}
                                                    </h4>
                                                </Link>
                                                <p className="text-[var(--ink-2)] text-xs leading-relaxed line-clamp-3 mb-5">
                                                    {post.excerpt}
                                                </p>
                                                <div className="mt-auto pt-3 border-t border-[var(--grid)] flex items-center justify-between text-xs font-semibold text-[var(--blue-2)]">
                                                    <span className="flex items-center gap-1 text-[10px] text-[var(--ink-3)] font-semibold">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {post.readTime}
                                                    </span>
                                                    <Link
                                                        href={`/blog/${post.slug}`}
                                                        className="inline-flex items-center gap-0.5 hover:text-[var(--blue)] transition-colors group/link"
                                                    >
                                                        <span>Ler artigo</span>
                                                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Resto dos posts organizados como barras */}
                    {restPosts.length > 0 && (
                        <div className="space-y-6">
                            <h3 className="text-xs font-semibold text-[var(--ink-3)] uppercase tracking-widest">
                                Mais Artigos
                            </h3>
                            <div className="rounded-2xl bg-white ring-1 ring-[var(--grid)] divide-y divide-[var(--grid)] overflow-hidden">
                                {restPosts.map((post) => {
                                    const category = getCategory(post.slug);
                                    return (
                                        <Link
                                            key={post.slug}
                                            href={`/blog/${post.slug}`}
                                            className="group block p-5 hover:bg-[var(--snow)] transition-colors"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="space-y-2 flex-1">
                                                    <div className="flex items-center gap-3 text-[10px] font-semibold text-[var(--ink-3)]">
                                                        <span className="bg-[var(--navy)] text-[var(--amber)] px-2 py-0.5 rounded uppercase tracking-wider text-[9px] font-bold">
                                                            {category}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {post.date}
                                                        </span>
                                                        <span className="h-1 w-1 rounded-full bg-[var(--grid)]" />
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {post.readTime}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-base font-semibold text-[var(--ink)] group-hover:text-[var(--blue-2)] transition-colors leading-snug">
                                                        {post.title}
                                                    </h4>
                                                    <p className="text-xs text-[var(--ink-2)] line-clamp-2 leading-relaxed">
                                                        {post.excerpt}
                                                    </p>
                                                </div>

                                                <div className="text-xs font-semibold text-[var(--blue-2)] flex items-center gap-0.5 whitespace-nowrap self-end sm:self-center">
                                                    <span>Ler artigo</span>
                                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
