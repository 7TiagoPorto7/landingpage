"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { PostData } from "@/lib/blog";

interface BlogListClientProps {
    posts: PostData[];
}

function getCategory(slug: string): string {
    if (slug.includes("carreira")) return "Carreira";
    if (slug.includes("valuation") || slug.includes("dcf")) return "Valuation";
    if (slug.includes("modelo") || slug.includes("modelagem")) return "Modelagem";
    return "Finanças";
}

export function BlogListClient({ posts }: BlogListClientProps) {
    const [searchQuery, setSearchQuery] = useState("");

    // Filtrar posts com base no texto de busca
    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Organizar: Destaques (Top 3 com imagem de capa) e o restante como barras
    const featuredPosts: PostData[] = [];
    const restPosts: PostData[] = [];

    if (!searchQuery) {
        // Encontrar os 3 primeiros posts que tenham imagem de capa cadastrada
        for (const post of posts) {
            if (post.image && featuredPosts.length < 3) {
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
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Pesquisar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
            </div>

            {searchQuery ? (
                /* Resultados da Busca */
                <div className="space-y-6">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Resultados da Busca ({filteredPosts.length})
                    </h3>
                    {filteredPosts.length > 0 ? (
                        <div className="border border-border rounded-2xl bg-card divide-y divide-border overflow-hidden">
                            {filteredPosts.map((post) => {
                                const category = getCategory(post.slug);
                                return (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group block p-5 hover:bg-muted/10 transition-colors"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div className="space-y-2 flex-1">
                                                <div className="flex items-center gap-3 text-[10px] font-semibold text-muted-foreground">
                                                    <span className="text-primary bg-primary/5 px-2 py-0.5 rounded uppercase tracking-wider text-[9px] font-bold border border-primary/10">
                                                        {category}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {post.date}
                                                    </span>
                                                    <span className="h-1 w-1 rounded-full bg-border" />
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {post.readTime}
                                                    </span>
                                                </div>
                                                <h4 className="text-base font-extrabold text-foreground group-hover:text-blue-400 transition-colors leading-snug">
                                                    {post.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="text-xs font-bold text-blue-400 group-hover:text-blue-300 flex items-center gap-0.5 whitespace-nowrap self-end sm:self-center">
                                                <span>Ler artigo</span>
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12 border border-dashed border-border rounded-2xl text-muted-foreground text-sm">
                            Nenhum artigo encontrado para "{searchQuery}".
                        </div>
                    )}
                </div>
            ) : (
                /* Layout Padrão (Destaques em Thumbnails + Resto em Barras) */
                <div className="space-y-14">
                    {/* Top 3 posts com thumbnails */}
                    {featuredPosts.length > 0 && (
                        <div className="space-y-6">
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                Artigos em Destaque
                            </h3>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {featuredPosts.map((post) => {
                                    const category = getCategory(post.slug);
                                    return (
                                        <article
                                            key={post.slug}
                                            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <Link href={`/blog/${post.slug}`} className="aspect-video relative overflow-hidden block">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                            </Link>
                                            <div className="p-5 flex-1 flex flex-col">
                                                <div className="flex items-center justify-between mb-3.5">
                                                    <span className="inline-flex items-center text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                                                        {category}
                                                    </span>
                                                    <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-semibold">
                                                        <Calendar className="w-3 h-3" />
                                                        {post.date}
                                                    </span>
                                                </div>
                                                <Link href={`/blog/${post.slug}`} className="block mb-2">
                                                    <h4 className="text-base font-extrabold text-foreground group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                                                        {post.title}
                                                    </h4>
                                                </Link>
                                                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-5">
                                                    {post.excerpt}
                                                </p>
                                                <div className="mt-auto pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-blue-400">
                                                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-semibold">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {post.readTime}
                                                    </span>
                                                    <Link
                                                        href={`/blog/${post.slug}`}
                                                        className="inline-flex items-center gap-0.5 hover:text-blue-300 transition-colors group/link"
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
                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                Mais Artigos
                            </h3>
                            <div className="border border-border rounded-2xl bg-card divide-y divide-border overflow-hidden">
                                {restPosts.map((post) => {
                                    const category = getCategory(post.slug);
                                    return (
                                        <Link
                                            key={post.slug}
                                            href={`/blog/${post.slug}`}
                                            className="group block p-5 hover:bg-muted/10 transition-colors"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="space-y-2 flex-1">
                                                    <div className="flex items-center gap-3 text-[10px] font-semibold text-muted-foreground">
                                                        <span className="text-blue-400 bg-blue-500/5 px-2 py-0.5 rounded uppercase tracking-wider text-[9px] font-bold border border-blue-500/10">
                                                            {category}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {post.date}
                                                        </span>
                                                        <span className="h-1 w-1 rounded-full bg-border" />
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {post.readTime}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-base font-extrabold text-foreground group-hover:text-blue-400 transition-colors leading-snug">
                                                        {post.title}
                                                    </h4>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                                        {post.excerpt}
                                                    </p>
                                                </div>

                                                <div className="text-xs font-bold text-blue-400 group-hover:text-blue-300 flex items-center gap-0.5 whitespace-nowrap self-end sm:self-center">
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
