"use client";

import { useState } from "react";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export function CFFinalCTA() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

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
        <section className="py-24 relative bg-slate-900/50 overflow-hidden border-t border-white/5">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 w-[700px] h-[500px] bg-purple-500/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-8 border border-purple-500/20">
                    🎁 100% Gratuito
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.1]">
                    Pronto para dominar o Claude{" "}
                    <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500">
                        nas suas análises financeiras?
                    </span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
                    Baixe o guia gratuito agora e comece a trabalhar 10x mais rápido.
                </p>

                {status === "success" ? (
                    <div className="max-w-md mx-auto bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-8 h-8 text-green-400" />
                        </div>
                        <p className="text-green-400 font-bold text-xl mb-2">
                            Guia enviado! 🚀
                        </p>
                        <p className="text-green-400/70">
                            Acesse seu e-mail e baixe o guia agora mesmo.
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-6">
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-lg"
                        >
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Digite seu melhor e-mail"
                                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all text-base"
                                />
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg hover:from-purple-500 hover:to-violet-500 transition-all shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] disabled:opacity-50 group whitespace-nowrap cursor-pointer"
                                >
                                    {status === "loading" ? (
                                        <span className="flex items-center gap-2">
                                            <svg
                                                className="animate-spin h-5 w-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="none"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : (
                                        <>
                                            QUERO MEU GUIA
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
                        </form>

                        <div className="flex flex-col items-center gap-2 text-sm text-slate-400 font-medium">
                            <span className="flex items-center gap-1.5">
                                <Lock className="w-4 h-4 text-green-500" />
                                Seus dados estão 100% seguros
                            </span>
                            <span className="text-slate-500 text-xs">
                                Acesso liberado no e-mail em menos de 2 minutos.
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
