"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Play, RefreshCw, Layers } from "lucide-react";
import { Logo } from "@/components/logo";

export function LogoShowcase() {
    const [key, setKey] = useState(0);
    const [activeTab, setActiveTab] = useState<"full" | "glowing" | "icon">("glowing");

    const replayAnimation = () => {
        setKey((prev) => prev + 1);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/80 via-[#070D1B] to-slate-950/80 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Header Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                    <span>Animação Vetorial SVG Interativa</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    Marca Vetorial MFP Education
                </h3>
                <p className="text-sm text-slate-400 max-w-lg mb-8 font-light">
                    As 3 faixas vetoriais representam os três demonstrativos financeiros (DRE, Balanço Patrimonial e Fluxo de Caixa) fluindo de forma integrada.
                </p>

                {/* Animated Logo Canvas */}
                <div className="relative w-full min-h-[220px] flex items-center justify-center p-10 rounded-2xl border border-white/5 bg-black/60 shadow-inner mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeTab}-${key}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center justify-center"
                        >
                            <Logo
                                variant={activeTab}
                                className={activeTab === "icon" ? "h-24 sm:h-32" : "h-16 sm:h-20"}
                                animate={true}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={() => setActiveTab("glowing")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            activeTab === "glowing"
                                ? "bg-teal-500 text-black shadow-lg shadow-teal-500/20"
                                : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                        }`}
                    >
                        Versão Glow (Brilho)
                    </button>
                    <button
                        onClick={() => setActiveTab("full")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            activeTab === "full"
                                ? "bg-teal-500 text-black shadow-lg shadow-teal-500/20"
                                : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                        }`}
                    >
                        Versão Completa
                    </button>
                    <button
                        onClick={() => setActiveTab("icon")}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            activeTab === "icon"
                                ? "bg-teal-500 text-black shadow-lg shadow-teal-500/20"
                                : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                        }`}
                    >
                        Ícone Vetorial Simbolo
                    </button>

                    <button
                        onClick={replayAnimation}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-xs font-bold transition-all active:scale-95"
                    >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Replay Animação
                    </button>
                </div>
            </div>
        </div>
    );
}
