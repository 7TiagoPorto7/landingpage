"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileSpreadsheet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TemplateProHero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32 bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/15 blur-[120px] rounded-full opacity-50 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/15 blur-[120px] rounded-full opacity-50 animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/8 blur-[100px] rounded-full opacity-40" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 backdrop-blur-sm"
                >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Template Pro — Modelo Financeiro Integrado + Valuation</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-5xl mx-auto mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]"
                >
                    Aprenda a integrar{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">DRE, Balanço e Fluxo de Caixa</span>
                    {" "}do zero — e construir um{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Valuation DCF profissional</span>
                    {" "}com análise de risco quantitativa
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-12 text-lg text-muted-foreground md:text-xl leading-relaxed"
                >
                    Modelo financeiro completo com <strong className="text-white">18 abas interligadas</strong>, <strong className="text-white">trilha de aprendizado guiada</strong> com exercícios e gabarito, <strong className="text-white">4 scripts Python</strong> e guia explicativo em cada aba. Tudo editável. Tudo auditável.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="https://pay.hotmart.com/B104550189M"
                        className="relative inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-black transition-all duration-300 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center">
                            Quero o Modelo Completo
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                    </Link>
                    <Link
                        href="#modules"
                        className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium transition-colors rounded-full border border-white/10 hover:bg-white/5 hover:border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        Ver Conteúdo Completo
                    </Link>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-3xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "18", label: "Abas Interligadas" },
                        { value: "6", label: "Módulos" },
                        { value: "✅", label: "Exercícios + Gabarito" },
                        { value: "4", label: "Scripts Python" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <div className="text-2xl md:text-3xl font-bold text-emerald-400">{stat.value}</div>
                            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* GIF Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="relative max-w-5xl mx-auto mt-14 pb-6"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.12)]">
                        {/* Glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none rounded-2xl" />
                        <Image
                            src="/template-pro-demo.gif"
                            alt="Template Pro — demonstração em vídeo"
                            width={1200}
                            height={675}
                            className="w-full h-auto"
                            unoptimized
                        />
                    </div>
                    {/* Label */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Veja o Template Pro em ação
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
