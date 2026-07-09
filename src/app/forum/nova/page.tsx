"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, AlertCircle, HelpCircle } from "lucide-react";
import { FORUM_TAGS } from "@/lib/forum-constants";
import { TagBadge } from "@/components/forum/forum-ui";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";


export default function NovaPage() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function toggleTag(tag: string) {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : prev.length < 3 ? [...prev, tag] : prev
        );
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!title.trim() || !body.trim()) {
            setError("Preencha o título e a descrição.");
            return;
        }

        setLoading(true);
        setError("");

        const res = await fetch("/api/forum/questions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body, tags: selectedTags }),
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) {
            setError(data.error || "Erro ao publicar pergunta.");
            return;
        }

        router.push(`/forum/${data.question.id}`);
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Nav */}
            <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container max-w-3xl px-4 mx-auto h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center shrink-0 group">
                        <Logo className="h-8 w-auto hover:opacity-95 transition-opacity" />
                    </Link>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link
                            href="/forum"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Voltar ao fórum
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container max-w-3xl px-4 mx-auto py-10">
                <div className="mb-8">
                    <h1 className="text-2xl font-black text-foreground mb-1">Fazer uma Pergunta</h1>
                    <p className="text-sm text-muted-foreground">
                        Seja específico e forneça contexto para receber respostas melhores da comunidade.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Título */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <label htmlFor="question-title" className="block text-sm font-bold text-foreground mb-1">
                            Título da pergunta
                        </label>
                        <p className="text-xs text-muted-foreground mb-3">
                            Seja direto e claro, como se estivesse explicando para um colega.
                        </p>
                        <input
                            id="question-title"
                            type="text"
                            required
                            maxLength={200}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ex: Como calcular o WACC de uma empresa alavancada?"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                        />
                        <div className="mt-1.5 text-right text-xs text-muted-foreground">{title.length}/200</div>
                    </div>

                    {/* Corpo */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <label htmlFor="question-body" className="block text-sm font-bold text-foreground mb-1">
                            Descrição detalhada
                        </label>
                        <p className="text-xs text-muted-foreground mb-3">
                            Descreva o problema com detalhes. Inclua o que você já tentou, dados relevantes, e qual resultado esperava.
                        </p>
                        <textarea
                            id="question-body"
                            required
                            rows={10}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Descreva sua dúvida em detalhes...&#10;&#10;Contexto: estou modelando uma empresa do setor de energia...&#10;O que já tentei: ..."
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none font-mono leading-relaxed"
                        />
                    </div>

                    {/* Tags */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <label className="block text-sm font-bold text-foreground mb-1">
                            Categorias <span className="text-muted-foreground font-normal">(máx. 3)</span>
                        </label>
                        <p className="text-xs text-muted-foreground mb-4">
                            Escolha as categorias que melhor descrevem sua pergunta.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {FORUM_TAGS.map((tag) => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => toggleTag(tag)}
                                    className={`transition-all ${selectedTags.includes(tag) ? "ring-2 ring-primary scale-105" : !selectedTags.includes(tag) && selectedTags.length >= 3 ? "opacity-40 cursor-not-allowed" : ""}`}
                                >
                                    <TagBadge tag={tag} active={selectedTags.includes(tag)} />
                                </button>
                            ))}
                        </div>

                        {selectedTags.length > 0 && (
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">Selecionadas:</span>
                                {selectedTags.map((t) => <TagBadge key={t} tag={t} />)}
                            </div>
                        )}
                    </div>

                    {/* Dica */}
                    <div className="flex items-start gap-3 px-4 py-3 bg-blue-500/5 border border-blue-500/15 rounded-xl">
                        <HelpCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            <strong className="text-foreground">Dica:</strong> Perguntas com exemplos numéricos e contexto claro recebem respostas muito melhores e mais rápidas.
                        </p>
                    </div>

                    {/* Erro */}
                    {error && (
                        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {error}
                        </div>
                    )}

                    {/* Submit */}
                    <div className="flex items-center justify-between gap-4">
                        <Link href="/forum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Cancelar
                        </Link>
                        <button
                            id="submit-question-btn"
                            type="submit"
                            disabled={loading || !title.trim() || !body.trim()}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-extrabold text-sm hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg hover:shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Publicando..." : "Publicar Pergunta"}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
