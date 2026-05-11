"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Bot, TrendingUp, Brain } from "lucide-react";

export function CFHero() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, fileId: "claude-financas-guia" }),
            });
            if (res.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-28">
            {/* Background effects */}
            <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-violet-500/20 to-purple-600/30 blur-3xl opacity-50" />
            </div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Copy */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
                            <Sparkles className="h-4 w-4" />
                            Material 100% Gratuito
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                            Descubra como o Claude está{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500">
                                revolucionando o mercado financeiro.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                            Baixe gratuitamente o guia definitivo para usar a IA mais
                            poderosa do mundo em FP&A, Valuation, M&A, Modelagem
                            Financeira e muito mais.
                        </p>

                        {/* Lead Capture Form */}
                        {status === "success" ? (
                            <div className="w-full max-w-md bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="text-green-400 font-bold text-lg mb-1">Pronto! 🎉</p>
                                <p className="text-green-400/70 text-sm">
                                    Confira seu e-mail para acessar o guia gratuitamente.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="w-full max-w-md">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Seu melhor e-mail"
                                        className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all text-base"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="inline-flex justify-center items-center px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-base hover:from-purple-500 hover:to-violet-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 disabled:opacity-50 group whitespace-nowrap cursor-pointer"
                                    >
                                        {status === "loading" ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Enviando...
                                            </span>
                                        ) : (
                                            <>
                                                BAIXAR GRÁTIS
                                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>
                                {status === "error" && (
                                    <p className="text-red-400 text-sm mt-2">
                                        Erro ao enviar. Tente novamente.
                                    </p>
                                )}
                                <p className="text-xs text-muted-foreground/50 mt-3">
                                    🔒 Seus dados estão seguros. Sem spam, prometemos.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        {/* Glow behind */}
                        <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600/30 to-violet-500/30 opacity-40 blur-3xl rounded-[2rem] -z-10" />

                        {/* AI Chat Mockup */}
                        <div className="glass rounded-2xl p-2 border border-white/10 shadow-2xl relative">
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                            {/* Header */}
                            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/20 rounded-t-xl">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="mx-auto flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                    <Bot className="w-4 h-4 text-purple-400" />
                                    Claude — Análise Financeira
                                </div>
                            </div>

                            {/* Chat Content */}
                            <div className="bg-slate-900/80 rounded-b-xl p-5 space-y-4 text-sm">
                                {/* User message */}
                                <div className="flex justify-end">
                                    <div className="bg-purple-600/20 border border-purple-500/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                                        <p className="text-slate-200">
                                            Analise o DRE da empresa e projete o EBITDA para os próximos 5 anos
                                            considerando crescimento de receita de 15% a.a.
                                        </p>
                                    </div>
                                </div>

                                {/* Claude response */}
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center">
                                                <Bot className="w-3 h-3 text-purple-300" />
                                            </div>
                                            <span className="text-purple-400 font-semibold text-xs">Claude</span>
                                        </div>
                                        <p className="text-slate-300 leading-relaxed">
                                            Com base nos dados fornecidos, segue a projeção:
                                        </p>
                                        <div className="mt-3 bg-black/30 rounded-lg p-3 font-mono text-xs border border-white/5">
                                            <div className="grid grid-cols-6 gap-1 text-center">
                                                <div className="text-slate-500">Ano</div>
                                                <div className="text-purple-400 font-bold">2026</div>
                                                <div className="text-purple-400 font-bold">2027</div>
                                                <div className="text-purple-400 font-bold">2028</div>
                                                <div className="text-purple-400 font-bold">2029</div>
                                                <div className="text-purple-400 font-bold">2030</div>
                                            </div>
                                            <div className="grid grid-cols-6 gap-1 text-center mt-2">
                                                <div className="text-slate-500 text-[10px]">Receita</div>
                                                <div className="text-green-400">12.8M</div>
                                                <div className="text-green-400">14.7M</div>
                                                <div className="text-green-400">16.9M</div>
                                                <div className="text-green-400">19.5M</div>
                                                <div className="text-green-400">22.4M</div>
                                            </div>
                                            <div className="grid grid-cols-6 gap-1 text-center mt-1">
                                                <div className="text-slate-500 text-[10px]">EBITDA</div>
                                                <div className="text-amber-400">3.2M</div>
                                                <div className="text-amber-400">3.8M</div>
                                                <div className="text-amber-400">4.5M</div>
                                                <div className="text-amber-400">5.3M</div>
                                                <div className="text-amber-400">6.3M</div>
                                            </div>
                                            <div className="grid grid-cols-6 gap-1 text-center mt-1">
                                                <div className="text-slate-500 text-[10px]">Margem</div>
                                                <div className="text-sky-400">25%</div>
                                                <div className="text-sky-400">26%</div>
                                                <div className="text-sky-400">27%</div>
                                                <div className="text-sky-400">27%</div>
                                                <div className="text-sky-400">28%</div>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-xs mt-3">
                                            A margem EBITDA mostra tendência de expansão
                                            devido à diluição dos custos fixos...
                                        </p>
                                    </div>
                                </div>

                                {/* Typing indicator */}
                                <div className="flex items-center gap-1 text-purple-400/50 text-xs pl-2">
                                    <div className="w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                    <div className="w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                    <div className="w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    <span className="ml-1">Claude está analisando...</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-card border border-border rounded-xl p-3 shadow-xl glass">
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-purple-500/20 p-2 text-purple-400">
                                    <Brain className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-medium">Powered by</p>
                                    <p className="text-sm font-bold text-foreground">Claude AI</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-2 -right-2 lg:-right-6 bg-card border border-border rounded-xl p-3 shadow-xl glass">
                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-green-500/20 p-2 text-green-400">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-medium">Produtividade</p>
                                    <p className="text-sm font-bold text-foreground">+300%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
