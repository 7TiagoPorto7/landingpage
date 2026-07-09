import Link from "next/link";
import type { Metadata } from "next";
import { TrendingUp, Plus, Search, Bell, ChevronRight, Users, MessageSquare, Flame } from "lucide-react";
import { getSession } from "@/lib/auth";
import { FORUM_TAGS } from "@/lib/forum-constants";
import { ForumFeedClient } from "@/components/forum/forum-feed-client";
import { UserAvatar } from "@/components/forum/forum-ui";
import { Logo } from "@/components/logo";
import { HeaderSearch } from "@/components/forum/header-search";
import { ThemeToggle } from "@/components/theme-toggle";




export const metadata: Metadata = {
    title: "Fórum de Finanças Corporativas | MFP Education",
    description: "Tire dúvidas sobre modelagem financeira, valuation e finanças corporativas com a comunidade MFP Education.",
    robots: { index: false, follow: false },
};

const CATEGORY_META: Record<string, { icon: string; description: string }> = {
    "Valuation":        { icon: "📊", description: "DCF, Múltiplos, P/E, EV/EBITDA" },
    "Modelagem":        { icon: "📐", description: "Modelo 3 Demos, LBO, M&A" },
    "DRE":              { icon: "📋", description: "Receita, Margens, EBITDA" },
    "Balanço":          { icon: "⚖️",  description: "Ativos, Passivos, PL" },
    "Fluxo de Caixa":  { icon: "💰", description: "FCO, FCI, FCF, FCFE, FCFF" },
    "Endividamento":    { icon: "🏦", description: "D/E, Covenants, Dívida Líquida" },
    "Eficiência":       { icon: "⚙️",  description: "Giro, ROIC, ROE, Ciclos" },
    "Risco & Retorno":  { icon: "📈", description: "Sharpe, VaR, Beta, Drawdown" },
    "Renda Fixa":       { icon: "🔒", description: "Duration, Yield, Títulos" },
    "Derivativos":      { icon: "🔀", description: "Opções, Futuros, Swaps" },
    "Real Estate":      { icon: "🏢", description: "FII, Cap Rate, NOI, LTV" },
    "Banking":          { icon: "🏛️", description: "Basileia, Tier 1, NIM" },
    "Estatística":      { icon: "📉", description: "Regressão, Correlação, Std Dev" },
    "Excel":            { icon: "📗", description: "Fórmulas, VBA, Power Query" },
};

export default async function ForumPage() {
    const session = await getSession();

    return (
        <div className="min-h-screen bg-[#0a0f1a] text-slate-200 forum-layout">
            {/* ── TOP NAV ─────────────────────────────────────────────── */}
            <header className="border-b border-slate-800 bg-[#0d1322] sticky top-0 z-50">
                <div className="max-w-[1280px] mx-auto px-4 h-14 flex items-center gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0 group">
                        <Logo className="h-8 w-auto hover:opacity-95 transition-opacity" />
                    </Link>


                    {/* Barra de busca */}
                    <HeaderSearch />


                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                        <ThemeToggle />
                        {session ? (
                            <>
                                <button className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors">
                                    <Bell className="w-4 h-4" />
                                </button>
                                <Link href="/forum/perfil" className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors">
                                    <UserAvatar name={session.name} avatarUrl={session.avatarUrl} size="sm" />
                                    <span className="text-xs font-medium text-slate-200">{session.name.split(" ")[0]}</span>
                                </Link>

                                <Link
                                    href="/forum/nova"
                                    id="forum-new-question-btn"
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-500/20"
                                >
                                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                                    <span className="hidden sm:inline">Nova Discussão</span>
                                    <span className="sm:hidden">Post</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/auth/login" id="forum-login-btn" className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors">
                                    Entrar
                                </Link>
                                <Link href="/auth/cadastro" id="forum-register-btn" className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-500/20">
                                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                                    Criar conta
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Sub-nav com categorias rápidas */}
                <div className="border-t border-slate-800/80 bg-[#0a0f1a]/50">
                    <div className="max-w-[1280px] mx-auto px-4">
                        <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
                            <Link href="/forum" className="px-4 py-2.5 text-xs font-bold text-amber-400 border-b-2 border-amber-400 whitespace-nowrap">
                                Todos os Posts
                            </Link>
                            {["Valuation", "Modelagem", "DRE", "Fluxo de Caixa", "Risco & Retorno", "Excel"].map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/forum?tag=${encodeURIComponent(tag)}`}
                                    className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-slate-200 whitespace-nowrap border-b-2 border-transparent hover:border-slate-600 transition-all"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* ── BODY 3 COLUNAS ──────────────────────────────────────── */}
            <div className="max-w-[1280px] mx-auto px-4 py-6 flex gap-5">

                {/* ── SIDEBAR ESQUERDA: Categorias ───────────────────── */}
                <aside className="hidden lg:block w-56 shrink-0">
                    <div className="bg-[#0d1322] border border-slate-800 rounded-xl overflow-hidden sticky top-[97px]">
                        <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Categorias</span>
                        </div>
                        <nav className="py-1">
                            <Link
                                href="/forum"
                                className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-800/50 group transition-colors"
                            >
                                <div className="flex items-center gap-2.5">
                                    <span className="text-base leading-none">🏠</span>
                                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white">Todos os Posts</span>
                                </div>
                                <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
                            </Link>
                            {FORUM_TAGS.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/forum?tag=${encodeURIComponent(tag)}`}
                                    className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-800/50 group transition-colors"
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <span className="text-sm leading-none shrink-0">{CATEGORY_META[tag]?.icon || "📌"}</span>
                                        <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 truncate">{tag}</span>
                                    </div>
                                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-slate-500 shrink-0" />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* ── FEED PRINCIPAL ───────────────────────────────────── */}
                <main className="flex-1 min-w-0">
                    {/* Header do feed */}
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-base font-black text-white">Discussões Recentes</h1>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Flame className="w-3.5 h-3.5 text-amber-500" />
                            <span>Atualizado em tempo real</span>
                        </div>
                    </div>

                    <ForumFeedClient isLoggedIn={!!session} />
                </main>

                {/* ── SIDEBAR DIREITA: Stats + Recursos ───────────────── */}
                <aside className="hidden xl:block w-64 shrink-0">
                    <div className="space-y-4 sticky top-[97px]">
                        {/* Stats da comunidade */}
                        <div className="bg-[#0d1322] border border-slate-800 rounded-xl overflow-hidden">
                            <div className="px-4 py-3 border-b border-slate-800">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Comunidade</span>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Users className="w-3.5 h-3.5" />
                                        <span className="text-xs">Membros</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-200">—</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <MessageSquare className="w-3.5 h-3.5" />
                                        <span className="text-xs">Discussões</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-200">—</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <TrendingUp className="w-3.5 h-3.5" />
                                        <span className="text-xs">Respostas</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-200">—</span>
                                </div>
                            </div>
                            {!session && (
                                <div className="px-4 pb-4">
                                    <Link
                                        href="/auth/cadastro"
                                        className="block w-full text-center py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-colors"
                                    >
                                        Participar da comunidade →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Categorias populares */}
                        <div className="bg-[#0d1322] border border-slate-800 rounded-xl overflow-hidden">
                            <div className="px-4 py-3 border-b border-slate-800">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Tópicos em destaque</span>
                            </div>
                            <div className="py-1">
                                {["Valuation", "Modelagem", "Risco & Retorno", "Excel", "Renda Fixa"].map((tag, i) => (
                                    <Link
                                        key={tag}
                                        href={`/forum?tag=${encodeURIComponent(tag)}`}
                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800/50 group transition-colors"
                                    >
                                        <span className="text-xs font-bold text-slate-600 w-4">{i + 1}</span>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">{tag}</span>
                                            <p className="text-[10px] text-slate-600 truncate">{CATEGORY_META[tag]?.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Blog */}
                        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 rounded-xl p-4">
                            <p className="text-xs font-black text-white mb-1">📚 Blog de Finanças</p>
                            <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                                +120 artigos técnicos sobre modelagem financeira, valuation e derivativos.
                            </p>
                            <Link
                                href="/blog"
                                className="block text-center py-2 rounded-lg border border-amber-500/40 text-amber-400 text-xs font-semibold hover:bg-amber-500/10 transition-colors"
                            >
                                Ver artigos →
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
