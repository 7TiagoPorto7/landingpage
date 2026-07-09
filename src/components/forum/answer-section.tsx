"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ThumbsUp, CheckCircle2, Clock, AlertCircle, MessageSquare, Trophy } from "lucide-react";
import { UserAvatar } from "@/components/forum/forum-ui";

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

export function AnswerSection({ questionId, questionAuthorId, initialAnswers, session }: AnswerSectionProps) {
    const [answers, setAnswers] = useState<Answer[]>(initialAnswers);
    const [newAnswer, setNewAnswer] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [likingId, setLikingId] = useState<number | null>(null);
    const [acceptingId, setAcceptingId] = useState<number | null>(null);

    const isQuestionAuthor = session?.userId === questionAuthorId;

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

        if (!res.ok) {
            setSubmitError(data.error || "Erro ao publicar resposta.");
            return;
        }

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
            setAnswers((prev) =>
                prev.map((a) =>
                    a.id === answerId
                        ? { ...a, like_count: data.like_count, user_liked: data.liked }
                        : a
                )
            );
        }
    }

    async function handleAccept(answerId: number) {
        if (!isQuestionAuthor || acceptingId) return;
        setAcceptingId(answerId);

        const res = await fetch(`/api/forum/answers/${answerId}/accept`, { method: "POST" });
        setAcceptingId(null);

        if (res.ok) {
            setAnswers((prev) =>
                prev.map((a) => ({ ...a, is_accepted: a.id === answerId }))
            );
        }
    }

    // Ordenar: aceita primeiro, depois por likes
    const sortedAnswers = [...answers].sort((a, b) => {
        if (a.is_accepted && !b.is_accepted) return -1;
        if (!a.is_accepted && b.is_accepted) return 1;
        return b.like_count - a.like_count;
    });

    return (
        <div className="space-y-6">
            {/* Header respostas */}
            {sortedAnswers.length > 0 && (
                <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    <h2 className="text-sm font-bold text-foreground">
                        {sortedAnswers.length} Resposta{sortedAnswers.length !== 1 ? "s" : ""}
                    </h2>
                </div>
            )}

            {/* Lista de respostas */}
            {sortedAnswers.map((answer) => (
                <div
                    key={answer.id}
                    id={`answer-${answer.id}`}
                    className={`bg-card border rounded-2xl p-6 transition-all ${
                        answer.is_accepted
                            ? "border-green-500/40 shadow-green-500/10 shadow-lg"
                            : "border-border"
                    }`}
                >
                    {/* Badge aceita */}
                    {answer.is_accepted && (
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 mb-4">
                            <Trophy className="w-3.5 h-3.5" />
                            Melhor Resposta
                        </div>
                    )}

                    {/* Conteúdo */}
                    <div className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap mb-5">
                        {answer.body}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <UserAvatar name={answer.author_name} size="sm" />
                                <span className="font-medium text-foreground">{answer.author_name}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {timeAgo(answer.created_at)}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Botão aceitar (somente autor da pergunta) */}
                            {isQuestionAuthor && !answer.is_accepted && (
                                <button
                                    onClick={() => handleAccept(answer.id)}
                                    disabled={acceptingId === answer.id}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-green-400 border border-border hover:border-green-500/30 px-3 py-1.5 rounded-xl transition-all"
                                >
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    {acceptingId === answer.id ? "..." : "Aceitar"}
                                </button>
                            )}

                            {/* Botão curtir */}
                            <button
                                onClick={() => handleLike(answer.id)}
                                disabled={!session || likingId === answer.id}
                                title={!session ? "Faça login para curtir" : undefined}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                                    answer.user_liked
                                        ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                                        : "border-border text-muted-foreground hover:border-amber-500/30 hover:text-amber-400"
                                } ${!session ? "cursor-default opacity-60" : "cursor-pointer"}`}
                            >
                                <ThumbsUp className={`w-3.5 h-3.5 transition-transform ${likingId === answer.id ? "scale-125" : ""}`} />
                                {answer.like_count}
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Formulário de resposta */}
            <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-sm font-bold text-foreground mb-4">
                    {session ? "Sua Resposta" : "Responder esta pergunta"}
                </h3>

                {session ? (
                    <form onSubmit={handleSubmitAnswer} className="space-y-4">
                        <div className="flex items-start gap-3">
                            <UserAvatar name={session.name} size="md" />
                            <textarea
                                id="answer-body"
                                rows={6}
                                value={newAnswer}
                                onChange={(e) => setNewAnswer(e.target.value)}
                                placeholder="Escreva uma resposta clara e detalhada. Inclua exemplos ou cálculos quando possível..."
                                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none leading-relaxed"
                            />
                        </div>

                        {submitError && (
                            <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                {submitError}
                            </div>
                        )}

                        <div className="flex justify-end">
                            <button
                                id="submit-answer-btn"
                                type="submit"
                                disabled={submitting || !newAnswer.trim()}
                                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-extrabold text-sm hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg hover:shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitting ? "Publicando..." : "Publicar Resposta"}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-8 border border-dashed border-border rounded-xl">
                        <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm text-muted-foreground mb-4">
                            Faça login para responder esta pergunta
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <Link
                                href="/auth/login"
                                id="answer-login-btn"
                                className="px-4 py-2 rounded-xl border border-border text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
                            >
                                Entrar
                            </Link>
                            <Link
                                href="/auth/cadastro"
                                id="answer-register-btn"
                                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm"
                            >
                                Criar conta grátis
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
