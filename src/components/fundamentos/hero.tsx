"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function FundamentosHero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32 bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/15 blur-[120px] rounded-full opacity-50 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/15 blur-[120px] rounded-full opacity-50 animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/8 blur-[100px] rounded-full opacity-40" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container relative z-10 px-4 mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 backdrop-blur-sm"
                >
                    <BookOpen className="w-4 h-4" />
                    <span>📚 Curso — Fundamentos da Modelagem Financeira</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-5xl mx-auto mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]"
                >
                    Domine os fundamentos da modelagem financeira —{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
                        direto ao ponto.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-12 text-lg text-muted-foreground md:text-xl leading-relaxed"
                >
                    Aprenda a estrutura de um modelo financeiro e a lógica que conecta os três demonstrativos. Sem enrolação, sem curso interminável: a base, bem explicada.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="https://pay.hotmart.com/F106435738T"
                        className="relative inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-black transition-all duration-300 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center">
                            QUERO COMEÇAR AGORA — R$ 197
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                    </Link>
                    <Link
                        href="#conteudo"
                        className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium transition-colors rounded-full border border-white/10 hover:bg-white/5 hover:border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        Ver conteúdo do curso
                    </Link>
                </motion.div>

                {/* Price Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 flex items-center justify-center gap-3"
                >
                    <span className="text-muted-foreground line-through text-sm">De R$ 297</span>
                    <span className="text-amber-400 font-semibold text-sm">por R$ 197 — oferta de lançamento</span>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-3xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "7", label: "Aulas" },
                        { value: "🎯", label: "Direto ao Ponto" },
                        { value: "✅", label: "Planilha Bônus" },
                        { value: "7 dias", label: "Garantia" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <div className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</div>
                            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
