"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MessageSquare, Eye, ThumbsUp, CheckCircle2, Clock, Search, Filter, ChevronUp } from "lucide-react";
import { FORUM_TAGS } from "@/lib/forum-constants";
import { Suspense } from "react";

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
    if (diffMin < 60) return `${diffMin}m`;
    if (diffHr < 24) return `${diffHr}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

function getInitials(name: string): string {
    return name.split(" ").slice(0, 2).map((n) => n[0]?.toUpperCase() || "").join("");
}

function getAvatarColor(name: string): string {
    const colors = [
        "bg-amber-500", "bg-violet-500", "bg-blue-500",
        "bg-emerald-500", "bg-rose-500", "bg-cyan-500",
    ];
    const idx = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length;
    return colors[idx];
}

const TAG_COLORS: Record<string, string> = {
    Valuation: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    Modelagem: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    DRE: "text-green-400 bg-green-500/10 border-green-500/20",
    "Balanço": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    "Fluxo de Caixa": "text-amber-400 bg-amber-500/10 border-amber-500/20",
    Endividamento: "text-red-400 bg-red-500/10 border-red-500/20",
    "Eficiência": "text-orange-400 bg-orange-500/10 border-orange-500/20",
    "Risco & Retorno": "text-pink-400 bg-pink-500/10 border-pink-500/20",
    "Renda Fixa": "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    Derivativos: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    "Real Estate": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    Banking: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    Estatística: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    Excel: "text-lime-400 bg-lime-500/10 border-lime-500/20",
};

function FeedContent({ isLoggedIn }: { isLoggedIn: boolean }) {
    const searchParams = useSearchParams();
    const tagParam = searchParams.get("tag") || "";

    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedTag, setSelectedTag] = useState(tagParam);
    const [sort, setSort] = useState<"recent" | "popular" | "unanswered">("recent");
    const [showTagPicker, setShowTagPicker] = useState(false);

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
        setSelectedTag(tagParam);
    }, [tagParam]);

    useEffect(() => {
        const t = setTimeout(fetchQuestions, 300);
        return () => clearTimeout(t);
    }, [fetchQuestions]);

    return (
        <div>
            {/* Toolbar */}
            <div className="flex items-center gap-2 mb-3">
                {/* Busca */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                    <input
                        id="forum-search"
                        type="text"
                        placeholder="Buscar discussões..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 text-xs bg-[#0d1322] border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-all"
                    />
                </div>

                {/* Sort tabs */}
                <div className="flex items-center bg-[#0d1322] border border-slate-700 rounded-lg overflow-hidden">
                    {(["recent", "popular", "unanswered"] as const).map((s) => (
                        <button
                            key={s}
                            onClick={() => setSort(s)}
                            className={`px-3 py-2 text-[11px] font-semibold transition-colors whitespace-nowrap ${
                                sort === s
                                    ? "bg-amber-500/15 text-amber-400"
                                    : "text-slate-500 hover:text-slate-300"
                            }`}
                        >
                            {s === "recent" ? "Recentes" : s === "popular" ? "Populares" : "Sem resposta"}
                        </button>
                    ))}
                </div>

                {/* Filtro de tag */}
                <button
                    onClick={() => setShowTagPicker(!showTagPicker)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-[11px] font-semibold transition-all ${
                        selectedTag
                            ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
                            : "border-slate-700 bg-[#0d1322] text-slate-400 hover:text-slate-200"
                    }`}
                >
                    <Filter className="w-3.5 h-3.5" />
                    {selectedTag || "Categoria"}
                </button>
            </div>

            {/* Tag picker */}
            {showTagPicker && (
                <div className="mb-3 p-3 bg-[#0d1322] border border-slate-700 rounded-xl flex flex-wrap gap-1.5">
                    <button
                        onClick={() => { setSelectedTag(""); setShowTagPicker(false); }}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all ${!selectedTag ? "border-amber-500/40 bg-amber-500/10 text-amber-400" : "border-slate-700 text-slate-400"}`}
                    >
                        Todos
                    </button>
                    {FORUM_TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => { setSelectedTag(selectedTag === tag ? "" : tag); setShowTagPicker(false); }}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all ${
                                selectedTag === tag
                                    ? (TAG_COLORS[tag] || "border-amber-500/40 bg-amber-500/10 text-amber-400") + " border"
                                    : "border-slate-700 text-slate-400 hover:border-slate-500"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            )}

            {/* Filtro ativo */}
            {selectedTag && !showTagPicker && (
                <div className="mb-3 flex items-center gap-2">
                    <span className="text-[11px] text-slate-500">Filtrando:</span>
                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border ${TAG_COLORS[selectedTag] || "border-amber-500/40 text-amber-400 bg-amber-500/10"}`}>
                        {selectedTag}
                    </span>
                    <button onClick={() => setSelectedTag("")} className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors">
                        × remover
                    </button>
                </div>
            )}

            {/* Tabela de threads estilo WSO */}
            <div className="bg-[#0d1322] border border-slate-800 rounded-xl overflow-hidden">
                {/* Header da tabela */}
                <div className="grid grid-cols-[40px_1fr_80px_56px_56px] sm:grid-cols-[48px_1fr_100px_64px_64px] items-center px-4 py-2 border-b border-slate-800 bg-slate-900/30">
                    <div className="text-[10px] font-bold text-slate-600 uppercase text-center">Votos</div>
                    <div className="text-[10px] font-bold text-slate-600 uppercase pl-2">Título / Autor</div>
                    <div className="text-[10px] font-bold text-slate-600 uppercase text-center hidden sm:block">Categoria</div>
                    <div className="text-[10px] font-bold text-slate-600 uppercase text-center">Resp.</div>
                    <div className="text-[10px] font-bold text-slate-600 uppercase text-center">Views</div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="divide-y divide-slate-800/60">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="grid grid-cols-[40px_1fr_80px_56px_56px] sm:grid-cols-[48px_1fr_100px_64px_64px] items-center px-4 py-3 animate-pulse">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="h-3 w-6 bg-slate-800 rounded" />
                                </div>
                                <div className="pl-2 space-y-2">
                                    <div className="h-3 bg-slate-800 rounded w-4/5" />
                                    <div className="h-2.5 bg-slate-800 rounded w-1/3" />
                                </div>
                                <div className="h-5 bg-slate-800 rounded-full w-16 mx-auto hidden sm:block" />
                                <div className="h-3 bg-slate-800 rounded w-8 mx-auto" />
                                <div className="h-3 bg-slate-800 rounded w-8 mx-auto" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty state */}
                {!loading && questions.length === 0 && (
                    <div className="text-center py-16">
                        <MessageSquare className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                        <p className="text-sm font-semibold text-slate-400 mb-1">Nenhuma discussão encontrada</p>
                        <p className="text-xs text-slate-600 mb-4">
                            {search ? `Sem resultados para "${search}"` : "Seja o primeiro a começar uma discussão!"}
                        </p>
                        {isLoggedIn && (
                            <Link href="/forum/nova" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors">
                                + Nova Discussão
                            </Link>
                        )}
                    </div>
                )}

                {/* Thread rows */}
                {!loading && questions.length > 0 && (
                    <div className="divide-y divide-slate-800/60">
                        {questions.map((q, idx) => (
                            <Link
                                key={q.id}
                                href={`/forum/${q.id}`}
                                className={`grid grid-cols-[40px_1fr_80px_56px_56px] sm:grid-cols-[48px_1fr_100px_64px_64px] items-center px-4 py-3 group transition-colors ${
                                    idx % 2 === 0 ? "hover:bg-slate-800/30" : "bg-slate-900/20 hover:bg-slate-800/30"
                                }`}
                            >
                                {/* Upvotes */}
                                <div className="flex flex-col items-center gap-0.5">
                                    <ChevronUp className={`w-3 h-3 ${q.total_likes > 0 ? "text-amber-500" : "text-slate-700"}`} />
                                    <span className={`text-xs font-black tabular-nums ${q.total_likes > 0 ? "text-amber-400" : "text-slate-600"}`}>
                                        {q.total_likes}
                                    </span>
                                </div>

                                {/* Título + autor */}
                                <div className="pl-2 min-w-0">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        {q.is_solved && (
                                            <CheckCircle2 className="w-3 h-3 text-green-400 shrink-0" />
                                        )}
                                        <span className="text-xs sm:text-[13px] font-semibold text-slate-200 group-hover:text-amber-400 transition-colors leading-snug line-clamp-1">
                                            {q.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* Mini avatar + nome */}
                                        <div className="flex items-center gap-1">
                                            <div className={`w-4 h-4 rounded-full ${getAvatarColor(q.author_name)} flex items-center justify-center text-[7px] font-black text-slate-950 shrink-0`}>
                                                {getInitials(q.author_name)}
                                            </div>
                                            <span className="text-[10px] text-slate-500 font-medium">{q.author_name}</span>
                                        </div>
                                        <span className="text-slate-700 text-[10px]">·</span>
                                        <div className="flex items-center gap-1 text-[10px] text-slate-600">
                                            <Clock className="w-2.5 h-2.5" />
                                            {timeAgo(q.created_at)}
                                        </div>
                                        {/* Tags mobile */}
                                        {q.tags.length > 0 && (
                                            <span className={`sm:hidden px-1.5 py-0.5 rounded text-[10px] font-semibold border ${TAG_COLORS[q.tags[0]] || "text-slate-400 border-slate-700"}`}>
                                                {q.tags[0]}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Categoria (desktop) */}
                                <div className="hidden sm:flex justify-center">
                                    {q.tags.length > 0 ? (
                                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border truncate max-w-full ${TAG_COLORS[q.tags[0]] || "text-slate-400 border-slate-700 bg-slate-800"}`}>
                                            {q.tags[0]}
                                        </span>
                                    ) : (
                                        <span className="text-[10px] text-slate-700">—</span>
                                    )}
                                </div>

                                {/* Respostas */}
                                <div className="text-center">
                                    <span className={`text-xs font-bold tabular-nums ${q.answer_count > 0 ? (q.is_solved ? "text-green-400" : "text-blue-400") : "text-slate-600"}`}>
                                        {q.answer_count}
                                    </span>
                                </div>

                                {/* Views */}
                                <div className="text-center">
                                    <span className="text-[11px] text-slate-600 tabular-nums font-medium">
                                        {q.view_count >= 1000 ? `${(q.view_count / 1000).toFixed(1)}k` : q.view_count}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer da tabela */}
            {!loading && questions.length > 0 && (
                <div className="mt-3 flex items-center justify-between">
                    <p className="text-[11px] text-slate-600">
                        {questions.length} discussões encontradas
                    </p>
                    {isLoggedIn && (
                        <Link
                            href="/forum/nova"
                            className="text-[11px] font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                        >
                            + Iniciar nova discussão
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

export function ForumFeedClient({ isLoggedIn }: { isLoggedIn: boolean }) {
    return (
        <Suspense fallback={
            <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-12 bg-slate-800/40 rounded-lg animate-pulse" />
                ))}
            </div>
        }>
            <FeedContent isLoggedIn={isLoggedIn} />
        </Suspense>
    );
}
