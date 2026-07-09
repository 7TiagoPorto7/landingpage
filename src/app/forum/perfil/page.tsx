import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { getDb, ensureForumTables } from "@/lib/db";
import { UserAvatar } from "@/components/forum/forum-ui";
import { ProfileClient } from "@/components/forum/profile-client";
import { ChevronRight, MessageSquare, Clock, ArrowLeft, TrendingUp, CheckCircle2 } from "lucide-react";

interface Question {
    id: number;
    title: string;
    created_at: string;
    answer_count: number;
    is_solved: boolean;
}

function timeAgo(dateStr: string): string {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHr / 24);

    if (diffMin < 1) return "agora";
    if (diffMin < 60) return `${diffMin}m atrás`;
    if (diffHr < 24) return `${diffHr}h atrás`;
    return `${diffDays}d atrás`;
}

export default async function PerfilPage() {
    const session = await getSession();

    if (!session) {
        redirect("/auth/login?redirect=/forum/perfil");
    }

    let userQuestions: Question[] = [];

    try {
        await ensureForumTables();
        const sql = getDb();

        // Buscar perguntas do usuário
        userQuestions = await sql`
            SELECT q.id, q.title, q.is_solved, q.created_at,
                   COUNT(a.id)::int AS answer_count
            FROM forum_questions q
            LEFT JOIN forum_answers a ON a.question_id = q.id
            WHERE q.user_id = ${session.userId}
            GROUP BY q.id
            ORDER BY q.created_at DESC
        ` as unknown as Question[];
    } catch (e) {
        console.error("Erro ao carregar perfil:", e);
    }

    return (
        <div className="min-h-screen bg-[#0a0f1a] text-slate-200">
            {/* Topbar */}
            <header className="border-b border-slate-800 bg-[#0d1322] sticky top-0 z-50">
                <div className="max-w-[1280px] mx-auto px-4 h-14 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                            <TrendingUp className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-sm font-black text-white tracking-tight leading-none block">MFP Education</span>
                            <span className="text-[10px] text-slate-500 font-medium leading-none">Finance Forum</span>
                        </div>
                    </Link>

                    <Link href="/forum" className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Voltar ao Fórum
                    </Link>
                </div>
            </header>

            <div className="max-w-[800px] mx-auto px-4 py-8">
                {/* Cabeçalho do Perfil */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-[#0d1322] border border-slate-800 rounded-xl mb-6">
                    <UserAvatar name={session.name} avatarUrl={session.avatarUrl} size="lg" />
                    <div className="text-center sm:text-left flex-1">
                        <h1 className="text-xl font-black text-white">{session.name}</h1>
                        <p className="text-xs text-slate-500 mt-1">E-mail: {session.email}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mt-2 bg-slate-800 px-2 py-0.5 rounded inline-block">
                            Membro da Comunidade
                        </p>
                    </div>
                </div>

                {/* Grid principal */}
                <div className="space-y-6">
                    {/* Atualizar Foto e Nome */}
                    <div className="bg-[#0d1322] border border-slate-800 rounded-xl p-6">
                        <h2 className="text-sm font-bold text-white mb-4">Editar Perfil</h2>
                        <ProfileClient initialName={session.name} initialAvatarUrl={session.avatarUrl || ""} />
                    </div>

                    {/* Minhas Perguntas */}
                    <div className="bg-[#0d1322] border border-slate-800 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquare className="w-4 h-4 text-slate-400" />
                            <h2 className="text-sm font-bold text-white">Minhas Perguntas ({userQuestions.length})</h2>
                        </div>

                        {userQuestions.length === 0 ? (
                            <div className="text-center py-8 border border-dashed border-slate-800 rounded-xl">
                                <p className="text-xs text-slate-600">Você ainda não fez nenhuma pergunta no fórum.</p>
                                <Link href="/forum/nova" className="mt-3 inline-block text-xs font-bold text-amber-500 hover:text-amber-400">
                                    Fazer minha primeira pergunta →
                                </Link>
                            </div>
                        ) : (
                            <div className="divide-y divide-slate-800/60">
                                {userQuestions.map((q) => (
                                    <Link
                                        key={q.id}
                                        href={`/forum/${q.id}`}
                                        className="block py-3 hover:bg-slate-800/10 group transition-all"
                                    >
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="text-xs font-semibold text-slate-200 group-hover:text-amber-400 transition-colors truncate">
                                                    {q.is_solved && <CheckCircle2 className="inline w-3 h-3 text-green-400 mr-1" />}
                                                    {q.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-[10px] text-slate-600 mt-1">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-2.5 h-2.5" />
                                                        {timeAgo(q.created_at)}
                                                    </span>
                                                    <span>·</span>
                                                    <span>{q.answer_count} respostas</span>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-slate-500" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
