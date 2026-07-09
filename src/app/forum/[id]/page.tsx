import { notFound } from "next/navigation";
import Link from "next/link";
import { TrendingUp, ArrowLeft, Eye, Clock, MessageSquare } from "lucide-react";
import { getSession } from "@/lib/auth";
import { TagBadge, UserAvatar } from "@/components/forum/forum-ui";
import { AnswerSection } from "@/components/forum/answer-section";

interface PageProps {
    params: Promise<{ id: string }>;
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
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export default async function QuestionPage({ params }: PageProps) {
    const { id } = await params;
    const session = await getSession();

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/forum/questions/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        notFound();
    }

    const { question, answers } = await res.json();

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Nav */}
            <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container max-w-4xl px-4 mx-auto h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-105 transition-transform">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-black tracking-tight hidden sm:block">MFP Education</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        {session && (
                            <div className="hidden sm:flex items-center gap-2">
                                <UserAvatar name={session.name} size="sm" />
                                <span className="text-sm font-medium">{session.name.split(" ")[0]}</span>
                            </div>
                        )}
                        <Link
                            href="/forum"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Fórum
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container max-w-4xl px-4 mx-auto py-10">
                {/* Pergunta */}
                <article className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-6">
                    {/* Status badge */}
                    {question.is_solved && (
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 mb-4">
                            ✓ Resolvida
                        </div>
                    )}

                    <h1 className="text-xl sm:text-2xl font-black text-foreground leading-snug mb-4">
                        {question.title}
                    </h1>

                    {/* Tags */}
                    {question.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                            {question.tags.map((tag: string) => (
                                <Link key={tag} href={`/forum?tag=${encodeURIComponent(tag)}`}>
                                    <TagBadge tag={tag} />
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Conteúdo */}
                    <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap border-t border-border pt-5 mb-5">
                        {question.body}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                        <span className="flex items-center gap-1.5">
                            <UserAvatar name={question.author_name} size="sm" />
                            <span className="font-medium text-foreground">{question.author_name}</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {timeAgo(question.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {question.view_count} visualizações
                        </span>
                        <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            {answers.length} resposta{answers.length !== 1 ? "s" : ""}
                        </span>
                    </div>
                </article>

                {/* Respostas + formulário (client component) */}
                <AnswerSection
                    questionId={question.id}
                    questionAuthorId={question.author_id}
                    initialAnswers={answers}
                    session={session ? { userId: session.userId, name: session.name } : null}
                />
            </div>
        </main>
    );
}
