"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Play, Clock, Sparkles } from "lucide-react";
import { getDecoratedCheckoutUrl, trackCheckout, initUtmTracking } from "@/lib/tracking";

import { MazeGrid } from "@/components/ui/maze-grid";

export function FundamentosHero() {
    const [checkoutUrl, setCheckoutUrl] = useState("https://pay.hotmart.com/F106435738T");

    useEffect(() => {
        initUtmTracking();
        setCheckoutUrl(getDecoratedCheckoutUrl());
    }, []);

    const handleCheckoutClick = (section: string) => {
        trackCheckout(section, 197);
    };

    return (
        <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#070D1B] text-white">
            {/* Maze Background Animation from main site */}
            <MazeGrid />

            {/* Ambient Background Orbs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/15 blur-[140px] rounded-full opacity-60 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/15 blur-[140px] rounded-full opacity-60 animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full opacity-50" />
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container relative z-10 px-4 mx-auto text-center max-w-5xl">
                {/* LINHA DE CREDENCIAL */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 backdrop-blur-md"
                >
                    <span>Com Tiago Porto — Analista de M&A · MBA em Modelagem Financeira, Valuation e M&A (PUC Minas)</span>
                </motion.div>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white"
                >
                    Entenda de uma vez como DRE, Balanço e Fluxo de Caixa se conectam
                </motion.h1>

                {/* SUBHEADLINE — HIGHLIGHTING 2 HOURS AS ADVANTAGE */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-10 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal"
                >
                    Em apenas <strong className="text-teal-300 font-extrabold">2 horas de conteúdo 100% prático</strong>, você aprende a lógica que faz um modelo financeiro funcionar — e por que o lucro vira (ou não vira) caixa. O essencial para dominá-lo em uma única tarde, sem perder tempo com 40 horas de teoria.
                </motion.p>

                {/* CTA PRIMÁRIO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center justify-center gap-3 mb-4"
                >
                    <a
                        href={checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full sm:w-auto inline-flex items-center justify-center h-16 px-10 text-lg md:text-xl font-black text-white transition-all rounded-2xl bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(20,184,166,0.5)] focus:outline-none focus:ring-2 focus:ring-teal-400 overflow-hidden group shadow-xl"
                        onClick={() => handleCheckoutClick("hero_primary")}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            QUERO COMEÇAR AGORA — R$ 197
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                    </a>

                    {/* Preço riscado */}
                    <div className="text-sm font-semibold text-slate-300 mt-1 flex items-center gap-2">
                        <span className="text-slate-400 line-through">De R$ 297</span>
                        <span>por <strong className="text-amber-400 font-extrabold">R$ 197</strong></span>
                    </div>

                    {/* Subtexto do CTA */}
                    <p className="text-xs md:text-sm text-slate-400 font-medium max-w-md flex flex-wrap items-center justify-center gap-1.5 mt-1">
                        <span>ou 12x de R$ 19,70</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                            <Lock className="w-3.5 h-3.5 text-teal-400" /> Compra segura via Hotmart
                        </span>
                        <span>·</span>
                        <span>Acesso imediato e vitalício</span>
                    </p>
                </motion.div>

                {/* BARRA DE STATS (DIFERENCIAL DE 2 HORAS) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-3xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { value: "2 Horas", label: "Conteúdo 100% Prático", highlight: true },
                        { value: "1 Tarde", label: "Para Dominar a Lógica" },
                        { value: "3", label: "Materiais Inclusos" },
                        { value: "7 dias", label: "Garantia Total" },
                    ].map((stat, index) => (
                        <div key={index} className={`text-center p-4 rounded-2xl border backdrop-blur-md transition-all ${
                            stat.highlight
                                ? "bg-teal-500/15 border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
                                : "bg-[#0F1C38]/90 border-slate-700/70 shadow-md"
                        }`}>
                            <div className={`text-xl md:text-2xl font-black ${stat.highlight ? "text-teal-300" : "text-white"}`}>{stat.value}</div>
                            <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
