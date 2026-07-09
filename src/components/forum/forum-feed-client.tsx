"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, MessageSquare, ThumbsUp, Eye, CheckCircle2, Clock, Filter } from "lucide-react";
import { FORUM_TAGS } from "@/lib/forum-constants";
import { TagBadge, UserAvatar } from "@/components/forum/forum-ui";

interface Question {
    id: number;
    title: string;
    tags: string[];
    view_count: number;
    is_solved: boolean;
    created_at: string;
    author_name: string;
    answer_count: number;
    total_likes: number;
}

function timeAgo(dateStr: string): string {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHr / 24);

    if (diffMin < 1) return "agora";
    if (diffMin < 60) return `${diffMin}min atrás`;
    if (diffHr < 24) return `${diffHr}h atrás`;
    if (diffDays < 30) return `${diffDays}d atrás`;
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

export function ForumFeedClient({ isLoggedIn }: { isLoggedIn: boolean }) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [sort, setSort] = useState<"recent" | "popular" | "unanswered">("recent");
    const [showTagFilter, setShowTagFilter] = useState(false);

    const fetchQuestions = useCallback(async () => {
        setLoading(true);
        const params = new URLSearchParams({ sort });
        if (search) params.set("search", search);
        if (selectedTag) params.set("tag", selectedTag);

        const res = await fetch(`/api/forum/questions?${params}`);
        const data = await res.json();
        setQuestions(data.questions || []);
        setLoading(false);
    }, [search, selectedTag, sort]);

    useEffect(() => {
        const timer = setTimeout(fetchQuestions, 300);
        return () => clearTimeout(timer);
    }, [fetchQuestions]);

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Busca */}
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        id="forum-search"
                        placeholder="Buscar perguntas..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                </div>

                {/* Sort */}
                <div className="flex gap-2">
                    {(["recent", "popular", "unanswered"] as const).map((s) => (
                        <button
                            key={s}
                            onClick={() => setSort(s)}
                            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                                sort === s
                                    ? "bg-primary text-slate-950"
                                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {s === "recent" ? "Recentes" : s === "popular" ? "Populares" : "Sem resposta"}
                        </button>
                    ))}

                    {/* Filtro de tag (mobile) */}
                    <button
                        onClick={() => setShowTagFilter(!showTagFilter)}
                        className="lg:hidden px-3 py-2 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground transition-all"
                    >
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Tag filter (mobile dropdown) */}
            {showTagFilter && (
                <div className="lg:hidden bg-card border border-border rounded-xl p-4 flex flex-wrap gap-2">
                    <button
                        onClick={() => { setSelectedTag(""); setShowTagFilter(false); }}
                        className={`text-xs px-2.5 py-1 rounded-full border font-semibold transition-all ${!selectedTag ? "bg-primary/20 border-primary text-primary" : "border-border text-muted-foreground"}`}
                    >
                        Todos
                    </button>
                    {FORUM_TAGS.map((tag) => (
                        <span key={tag} onClick={() => { setSelectedTag(selectedTag === tag ? "" : tag); setShowTagFilter(false); }}>
                            <TagBadge tag={tag} active={selectedTag === tag} onClick={() => {}} />
                        </span>
                    ))}
                </div>
            )}

            {/* Tag ativa */}
            {selectedTag && (
                <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Filtrando por:</span>
                    <TagBadge tag={selectedTag} onClick={() => setSelectedTag("")} active />
                    <button onClick={() => setSelectedTag("")} className="text-xs text-muted-foreground hover:text-foreground">
                        × Remover
                    </button>
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-card border border-border rounded-xl p-5 animate-pulse">
                            <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                            <div className="h-3 bg-muted rounded w-1/4" />
                        </div>
                    ))}
                </div>
            )}

            {/* Lista de perguntas */}
            {!loading && questions.length === 0 && (
                <div className="text-center py-16 border border-dashed border-border rounded-xl">
                    <MessageSquare className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-foreground font-semibold mb-1">Nenhuma pergunta encontrada</p>
                    <p className="text-sm text-muted-foreground mb-4">
                        {search ? `Sem resultados para "${search}"` : "Seja o primeiro a perguntar!"}
                    </p>
                    {isLoggedIn && (
                        <Link
                            href="/forum/nova"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs"
                        >
                            Fazer a primeira pergunta
                        </Link>
                    )}
                </div>
            )}

            {!loading && questions.length > 0 && (
                <div className="space-y-3">
                    {questions.map((q) => (
                        <Link
                            key={q.id}
                            href={`/forum/${q.id}`}
                            className="group block bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
                        >
                            <div className="flex items-start gap-4">
                                {/* Stats sidebar */}
                                <div className="hidden sm:flex flex-col items-center gap-3 shrink-0 w-12 text-center">
                                    <div className={`flex flex-col items-center gap-0.5 ${q.answer_count > 0 && q.is_solved ? "text-green-400" : q.answer_count > 0 ? "text-blue-400" : "text-muted-foreground"}`}>
                                        <span className="text-base font-black">{q.answer_count}</span>
                                        <span className="text-[9px] font-semibold uppercase tracking-wider">resp.</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-0.5 text-muted-foreground">
                                        <span className="text-sm font-bold">{q.total_likes}</span>
                                        <ThumbsUp className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h2 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                            {q.is_solved && <CheckCircle2 className="inline w-4 h-4 text-green-400 mr-1 -mt-0.5" />}
                                            {q.title}
                                        </h2>
                                    </div>

                                    {/* Tags */}
                                    {q.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {q.tags.slice(0, 3).map((tag) => (
                                                <TagBadge key={tag} tag={tag} />
                                            ))}
                                        </div>
                                    )}

                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <UserAvatar name={q.author_name} size="sm" />
                                            {q.author_name}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {timeAgo(q.created_at)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            {q.view_count} views
                                        </span>
                                        {/* Mobile stats */}
                                        <span className="sm:hidden flex items-center gap-1">
                                            <MessageSquare className="w-3 h-3" />
                                            {q.answer_count} resp.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
