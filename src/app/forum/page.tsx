import Link from "next/link";
import type { Metadata } from "next";
import { TrendingUp, Plus, MessageSquare, Eye, CheckCircle2, Clock } from "lucide-react";
import { getSession } from "@/lib/auth";
import { FORUM_TAGS } from "@/lib/forum-constants";
import { TagBadge, UserAvatar } from "@/components/forum/forum-ui";
import { ForumFeedClient } from "@/components/forum/forum-feed-client";

export const metadata: Metadata = {
    title: "Fórum de Finanças | MFP Education",
    description: "Tire suas dúvidas sobre modelagem financeira, valuation e finanças corporativas com a comunidade MFP.",
    robots: { index: false, follow: false }, // Não indexar fórum no Google
};

export default async function ForumPage() {
    const session = await getSession();

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Nav */}
            <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container max-w-6xl px-4 mx-auto h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-105 transition-transform">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-black tracking-tight">MFP Education</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        {session ? (
                            <>
                                <div className="hidden sm:flex items-center gap-2">
                                    <UserAvatar name={session.name} size="sm" />
                                    <span className="text-sm font-medium text-foreground">{session.name.split(" ")[0]}</span>
                                </div>
                                <Link
                                    href="/forum/nova"
                                    id="forum-new-question-btn"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs hover:from-amber-300 hover:to-orange-400 transition-all shadow-md hover:shadow-amber-500/20"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Fazer Pergunta
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/auth/login"
                                    id="forum-login-btn"
                                    className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Entrar
                                </Link>
                                <Link
                                    href="/auth/cadastro"
                                    id="forum-register-btn"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs hover:from-amber-300 hover:to-orange-400 transition-all shadow-md"
                                >
                                    Criar conta
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="container max-w-6xl px-4 mx-auto py-10">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Comunidade</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-3">
                        Fórum de Finanças
                    </h1>
                    <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
                        Tire suas dúvidas sobre modelagem financeira, valuation, Excel avançado e finanças corporativas.
                        As melhores respostas são votadas pela comunidade.
                    </p>
                </div>

                {/* Stats rápidas */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                        { icon: MessageSquare, label: "Perguntas", color: "text-amber-400" },
                        { icon: CheckCircle2, label: "Resolvidas", color: "text-green-400" },
                        { icon: Clock, label: "Esta semana", color: "text-blue-400" },
                    ].map(({ icon: Icon, label, color }) => (
                        <div key={label} className="bg-card border border-border rounded-xl p-4 text-center">
                            <Icon className={`w-5 h-5 mx-auto mb-1.5 ${color}`} />
                            <p className="text-xs text-muted-foreground font-medium">{label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar: Tags */}
                    <aside className="lg:w-52 shrink-0">
                        <div className="bg-card border border-border rounded-xl p-4 sticky top-24">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Filtrar por tema</p>
                            <ForumTagFilter tags={[...FORUM_TAGS]} />
                        </div>
                    </aside>

                    {/* Feed principal */}
                    <div className="flex-1 min-w-0">
                        <ForumFeedClient isLoggedIn={!!session} />
                    </div>
                </div>
            </div>
        </main>
    );
}

function ForumTagFilter({ tags }: { tags: string[] }) {
    // Este é um componente server-side placeholder; a filtragem real é feita no ForumFeedClient
    return (
        <div className="flex flex-col gap-1.5">
            {tags.map((tag) => (
                <span key={tag}>
                    <TagBadge tag={tag} />
                </span>
            ))}
        </div>
    );
}
