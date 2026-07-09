"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ThumbsUp, CheckCircle2, Clock, AlertCircle, MessageSquare, Trophy, ChevronUp } from "lucide-react";
import { TAG_COLORS } from "@/lib/forum-constants";

interface Answer {
    id: number;
    body: string;
    is_accepted: boolean;
    like_count: number;
    created_at: string;
    author_id: number;
    author_name: string;
    user_liked: boolean;
    isAuthor: boolean;
}

interface Session {
    userId: number;
    name: string;
}

interface AnswerSectionProps {
    questionId: number;
    questionAuthorId: number;
    initialAnswers: Answer[];
    session: Session | null;
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

function getInitials(name: string) {
    return name.split(" ").slice(0, 2).map((n) => n[0]?.toUpperCase() || "").join("");
}
function getAvatarColor(name: string) {
    const colors = ["bg-amber-500","bg-violet-500","bg-blue-500","bg-emerald-500","bg-rose-500","bg-cyan-500"];
    return colors[name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length];
}

export function AnswerSection({ questionId, questionAuthorId, initialAnswers, session }: AnswerSectionProps) {
    const [answers, setAnswers] = useState<Answer[]>(initialAnswers);
    const [newAnswer, setNewAnswer] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [likingId, setLikingId] = useState<number | null>(null);
    const [acceptingId, setAcceptingId] = useState<number | null>(null);

    const isQuestionAuthor = session?.userId === questionAuthorId;

    const sortedAnswers = [...answers].sort((a, b) => {
        if (a.is_accepted && !b.is_accepted) return -1;
        if (!a.is_accepted && b.is_accepted) return 1;
        return b.like_count - a.like_count;
    });

    async function handleSubmitAnswer(e: FormEvent) {
        e.preventDefault();
        if (!newAnswer.trim()) return;
        setSubmitting(true);
        setSubmitError("");

        const res = await fetch("/api/forum/answers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ questionId, body: newAnswer }),
        });
        const data = await res.json();
        setSubmitting(false);

        if (!res.ok) { setSubmitError(data.error || "Erro ao publicar."); return; }
        setAnswers((prev) => [...prev, data.answer]);
        setNewAnswer("");
    }

    async function handleLike(answerId: number) {
        if (!session || likingId) return;
        setLikingId(answerId);
        const res = await fetch(`/api/forum/answers/${answerId}/like`, { method: "POST" });
        const data = await res.json();
        setLikingId(null);
        if (res.ok) {
            setAnswers((prev) => prev.map((a) =>
                a.id === answerId ? { ...a, like_count: data.like_count, user_liked: data.liked } : a
            ));
        }
    }

    async function handleAccept(answerId: number) {
        if (!isQuestionAuthor || acceptingId) return;
        setAcceptingId(answerId);
        const res = await fetch(`/api/forum/answers/${answerId}/accept`, { method: "POST" });
        setAcceptingId(null);
        if (res.ok) setAnswers((prev) => prev.map((a) => ({ ...a, is_accepted: a.id === answerId })));
    }

    return (
        <div className="space-y-4">
            {/* Header */}
            {sortedAnswers.length > 0 && (
                <div className="flex items-center gap-2 px-1">
                    <MessageSquare className="w-4 h-4 text-slate-500" />
                    <h2 className="text-sm font-bold text-white">
                        {sortedAnswers.length} {sortedAnswers.length === 1 ? "Resposta" : "Respostas"}
                    </h2>
                </div>
            )}

            {/* Answer cards */}
            {sortedAnswers.map((answer, idx) => (
                <div
                    key={answer.id}
                    id={`answer-${answer.id}`}
                    className={`bg-[#0d1322] border rounded-xl overflow-hidden ${
                        answer.is_accepted ? "border-green-500/30" : "border-slate-800"
                    }`}
                >
                    {/* Best answer banner */}
                    {answer.is_accepted && (
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-green-500/8 border-b border-green-500/20">
                            <Trophy className="w-3.5 h-3.5 text-green-400" />
                            <span className="text-xs font-bold text-green-400">Melhor Resposta</span>
                        </div>
                    )}

                    <div className="flex">
                        {/* Vote column */}
                        <div className="flex flex-col items-center gap-1.5 px-4 py-5 border-r border-slate-800 w-16 shrink-0">
                            <button
                                onClick={() => handleLike(answer.id)}
                                disabled={!session || likingId === answer.id}
                                title={!session ? "Faça login para curtir" : undefined}
                                className={`flex flex-col items-center gap-1 group transition-all ${
                                    answer.user_liked ? "text-amber-400" : !session ? "text-slate-700 cursor-default" : "text-slate-600 hover:text-amber-400 cursor-pointer"
                                }`}
                            >
                                <ChevronUp className={`w-5 h-5 stroke-[2.5] transition-transform ${likingId === answer.id ? "scale-125" : "group-hover:scale-110"}`} />
                                <span className="text-sm font-black tabular-nums">{answer.like_count}</span>
                            </button>
                            {isQuestionAuthor && !answer.is_accepted && (
                                <button
                                    onClick={() => handleAccept(answer.id)}
                                    disabled={acceptingId === answer.id}
                                    title="Marcar como melhor resposta"
                                    className="mt-2 text-slate-700 hover:text-green-400 transition-colors"
                                >
                                    <CheckCircle2 className="w-4 h-4" />
                                </button>
                            )}
                            {answer.is_accepted && (
                                <CheckCircle2 className="w-4 h-4 text-green-400 mt-2" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 p-5">
                            {/* Autor */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className={`w-8 h-8 rounded-full ${getAvatarColor(answer.author_name)} flex items-center justify-center text-xs font-black text-slate-950 shrink-0`}>
                                    {getInitials(answer.author_name)}
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-200">{answer.author_name}</span>
                                    <div className="flex items-center gap-1 text-[10px] text-slate-600">
                                        <Clock className="w-2.5 h-2.5" />
                                        {timeAgo(answer.created_at)}
                                    </div>
                                </div>
                                {idx === 0 && sortedAnswers.length > 1 && !answer.is_accepted && (
                                    <span className="ml-auto text-[10px] font-semibold text-slate-600">#{idx + 1} mais votada</span>
                                )}
                            </div>

                            {/* Body */}
                            <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                                {answer.body}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Formulário de resposta */}
            <div className="bg-[#0d1322] border border-slate-800 rounded-xl overflow-hidden">
                <div className="px-5 py-3.5 border-b border-slate-800 flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                    <h3 className="text-sm font-bold text-white">Sua resposta</h3>
                </div>

                {session ? (
                    <div className="p-5">
                        <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-full ${getAvatarColor(session.name)} flex items-center justify-center text-xs font-black text-slate-950 shrink-0 mt-1`}>
                                {getInitials(session.name)}
                            </div>
                            <form onSubmit={handleSubmitAnswer} className="flex-1 space-y-3">
                                <textarea
                                    id="answer-body"
                                    rows={7}
                                    value={newAnswer}
                                    onChange={(e) => setNewAnswer(e.target.value)}
                                    placeholder="Escreva uma resposta detalhada. Inclua exemplos, fórmulas ou cálculos quando possível..."
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/40 transition-all resize-none leading-relaxed font-mono"
                                />
                                {submitError && (
                                    <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
                                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                        {submitError}
                                    </div>
                                )}
                                <div className="flex justify-end">
                                    <button
                                        id="submit-answer-btn"
                                        type="submit"
                                        disabled={submitting || !newAnswer.trim()}
                                        className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-colors shadow-lg shadow-amber-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? "Publicando..." : "Publicar Resposta"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="p-8 text-center">
                        <MessageSquare className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                        <p className="text-sm font-semibold text-slate-400 mb-1">Faça login para responder</p>
                        <p className="text-xs text-slate-600 mb-4">Junte-se à comunidade e compartilhe seu conhecimento</p>
                        <div className="flex items-center justify-center gap-3">
                            <Link href="/auth/login" id="answer-login-btn" className="px-4 py-2 rounded-lg border border-slate-700 text-xs font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-all">
                                Entrar
                            </Link>
                            <Link href="/auth/cadastro" id="answer-register-btn" className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors">
                                Criar conta grátis
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
