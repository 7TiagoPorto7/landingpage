import { notFound } from "next/navigation";
import Link from "next/link";
import { TrendingUp, Eye, Clock, MessageSquare, ChevronRight, ArrowLeft } from "lucide-react";
import { getSession } from "@/lib/auth";
import { TAG_COLORS } from "@/lib/forum-constants";
import { UserAvatar } from "@/components/forum/forum-ui";
import { AnswerSection } from "@/components/forum/answer-section";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";



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
    if (diffMin < 60) return `${diffMin} min atrás`;
    if (diffHr < 24) return `${diffHr}h atrás`;
    if (diffDays < 30) return `${diffDays}d atrás`;
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function getInitials(name: string): string {
    return name.split(" ").slice(0, 2).map((n) => n[0]?.toUpperCase() || "").join("");
}
function getAvatarColor(name: string): string {
    const colors = ["bg-amber-500","bg-violet-500","bg-blue-500","bg-emerald-500","bg-rose-500","bg-cyan-500"];
    const idx = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length;
    return colors[idx];
}

import { getDb, ensureForumTables } from "@/lib/db";

export default async function QuestionPage({ params }: PageProps) {
    const { id } = await params;
    const questionId = parseInt(id);

    if (isNaN(questionId)) {
        notFound();
    }

    const session = await getSession();

    let dbQuestion;
    let dbAnswers;

    try {
        await ensureForumTables();
        const sql = getDb();

        // Incrementar view_count
        await sql`UPDATE forum_questions SET view_count = view_count + 1 WHERE id = ${questionId}`;

        // Buscar a pergunta
        const rows = await sql`
            SELECT q.id, q.title, q.body, q.tags, q.view_count, q.is_solved, q.created_at,
                   u.id AS author_id, u.name AS author_name, u.avatar_url AS author_avatar
            FROM forum_questions q
            JOIN forum_users u ON u.id = q.user_id
            WHERE q.id = ${questionId}
        `;
        dbQuestion = rows[0];

        // Buscar respostas ordenadas: aceita primeiro, depois por curtidas
        dbAnswers = await sql`
            SELECT a.id, a.body, a.is_accepted, a.like_count, a.created_at,
                   u.id AS author_id, u.name AS author_name, u.avatar_url AS author_avatar,
                   ${session ? sql`EXISTS(
                       SELECT 1 FROM forum_likes l
                       WHERE l.answer_id = a.id AND l.user_id = ${session.userId}
                   )` : sql`FALSE`} AS user_liked
            FROM forum_answers a
            JOIN forum_users u ON u.id = a.user_id
            WHERE a.question_id = ${questionId}
            ORDER BY a.is_accepted DESC, a.like_count DESC, a.created_at ASC
        `;
    } catch (err) {
        console.error("Erro ao carregar pergunta no banco:", err);
        notFound();
    }

    if (!dbQuestion) {
        notFound();
    }

    const question: any = {
        ...dbQuestion,
        isAuthor: session ? session.userId === dbQuestion.author_id : false,
    };


    const answers = dbAnswers.map((a: any) => ({
        ...a,
        isAuthor: session ? session.userId === a.author_id : false,
    }));



    return (
        <div className="min-h-screen bg-[#0a0f1a] text-slate-200">
            {/* NAV */}
            <header className="border-b border-slate-800 bg-[#0d1322] sticky top-0 z-50">
                <div className="max-w-[1280px] mx-auto px-4 h-14 flex items-center gap-4">
                    <Link href="/" className="flex items-center shrink-0 group">
                        <Logo className="h-8 w-auto hover:opacity-95 transition-opacity" />
                    </Link>


                    {/* Breadcrumb */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 overflow-hidden">
                        <Link href="/forum" className="hover:text-slate-300 transition-colors whitespace-nowrap flex items-center gap-1">
                            <ArrowLeft className="w-3 h-3" />
                            Fórum
                        </Link>
                        <ChevronRight className="w-3 h-3 shrink-0" />
                        {question.tags?.[0] && (
                            <>
                                <Link href={`/forum?tag=${encodeURIComponent(question.tags[0])}`} className="hover:text-slate-300 whitespace-nowrap">
                                    {question.tags[0]}
                                </Link>
                                <ChevronRight className="w-3 h-3 shrink-0" />
                            </>
                        )}
                        <span className="text-slate-600 truncate">{question.title.slice(0, 50)}...</span>
                    </div>

                    <div className="ml-auto flex items-center gap-2 shrink-0">
                        <ThemeToggle />
                        {session ? (
                            <Link href="/forum/perfil" className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors">
                                <UserAvatar name={session.name} avatarUrl={session.avatarUrl} size="sm" />
                                <span className="text-xs font-medium text-slate-200">{session.name.split(" ")[0]}</span>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link href="/auth/login" className="text-xs font-semibold text-slate-400 hover:text-white">Entrar</Link>
                                <Link href="/auth/cadastro" className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors">Criar conta</Link>
                            </div>
                        )}
                    </div>

                </div>
            </header>

            <div className="max-w-[1280px] mx-auto px-4 py-6 flex gap-5">
                {/* CONTEÚDO PRINCIPAL */}
                <main className="flex-1 min-w-0">
                    {/* Pergunta */}
                    <article className="bg-[#0d1322] border border-slate-800 rounded-xl overflow-hidden mb-4">
                        {/* Header da pergunta */}
                        <div className="px-6 py-5 border-b border-slate-800">
                            <div className="flex items-start gap-4">
                                <UserAvatar name={question.author_name} avatarUrl={question.author_avatar} size="lg" />


                                <div className="flex-1 min-w-0">
                                    {/* Status + Tags */}
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        {question.is_solved && (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-[11px] font-bold text-green-400">
                                                ✓ Resolvida
                                            </span>
                                        )}
                                        {question.tags?.map((tag: string) => (
                                            <Link key={tag} href={`/forum?tag=${encodeURIComponent(tag)}`}>
                                                <span className={`inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold border ${TAG_COLORS[tag] || "text-slate-400 border-slate-700 bg-slate-800"}`}>
                                                    {tag}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>

                                    <h1 className="text-lg sm:text-xl font-black text-white leading-snug mb-2">
                                        {question.title}
                                    </h1>

                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
                                        <span className="font-semibold text-slate-400">{question.author_name}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {timeAgo(question.created_at)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            {question.view_count} views
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageSquare className="w-3 h-3" />
                                            {answers.length} resp.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Corpo da pergunta */}
                        <div className="px-6 py-5">
                            <div className="prose prose-sm prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap text-sm">
                                {question.body}
                            </div>
                        </div>
                    </article>

                    {/* Respostas */}
                    <AnswerSection
                        questionId={question.id}
                        questionAuthorId={question.author_id}
                        initialAnswers={answers}
                        session={session ? { userId: session.userId, name: session.name } : null}
                    />
                </main>

                {/* SIDEBAR DIREITA */}
                <aside className="hidden lg:block w-64 shrink-0">
                    <div className="space-y-4 sticky top-[73px]">
                        {/* Info da pergunta */}
                        <div className="bg-[#0d1322] border border-slate-800 rounded-xl overflow-hidden">
                            <div className="px-4 py-3 border-b border-slate-800">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Sobre esta discussão</span>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Autor</span>
                                    <div className="flex items-center gap-1.5">
                                        <div className={`w-5 h-5 rounded-full ${getAvatarColor(question.author_name)} flex items-center justify-center text-[8px] font-black text-slate-950`}>
                                            {getInitials(question.author_name)}
                                        </div>
                                        <span className="text-xs font-semibold text-slate-300">{question.author_name.split(" ")[0]}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Publicado</span>
                                    <span className="text-xs text-slate-300">{timeAgo(question.created_at)}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Visualizações</span>
                                    <span className="text-xs font-bold text-slate-300">{question.view_count}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Respostas</span>
                                    <span className={`text-xs font-bold ${answers.length > 0 ? "text-blue-400" : "text-slate-600"}`}>{answers.length}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Status</span>
                                    <span className={`text-xs font-bold ${question.is_solved ? "text-green-400" : "text-amber-400"}`}>
                                        {question.is_solved ? "✓ Resolvida" : "⏳ Aberta"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Categorias relacionadas */}
                        {question.tags?.length > 0 && (
                            <div className="bg-[#0d1322] border border-slate-800 rounded-xl overflow-hidden">
                                <div className="px-4 py-3 border-b border-slate-800">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Ver mais sobre</span>
                                </div>
                                <div className="p-4 flex flex-wrap gap-2">
                                    {question.tags.map((tag: string) => (
                                        <Link key={tag} href={`/forum?tag=${encodeURIComponent(tag)}`}>
                                            <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-semibold border cursor-pointer hover:opacity-80 transition-opacity ${TAG_COLORS[tag] || "text-slate-400 border-slate-700 bg-slate-800"}`}>
                                                {tag}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 rounded-xl p-4">
                            <p className="text-xs font-black text-white mb-1">💡 Aprenda mais</p>
                            <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                                Leia nossos artigos técnicos sobre {question.tags?.[0] || "finanças corporativas"}.
                            </p>
                            <Link href="/blog" className="block text-center py-2 rounded-lg border border-amber-500/40 text-amber-400 text-xs font-semibold hover:bg-amber-500/10 transition-colors">
                                Ver artigos →
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
