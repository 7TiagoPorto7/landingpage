"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen, Target, Lock, TrendingUp } from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Cursos intermináveis",
        description:
            "Um curso de 40 horas que você começa animado e abandona na terceira aula.",
        color: "text-red-400",
        bgColor: "bg-red-500/10 border border-red-500/20",
    },
    {
        icon: BookOpen,
        title: "Teoria que não vai usar",
        description:
            "Horas de teoria que você nunca vai usar, só para chegar no que interessa.",
        color: "text-amber-400",
        bgColor: "bg-amber-500/10 border border-amber-500/20",
    },
    {
        icon: Target,
        title: "Conteúdo raso",
        description:
            "Conteúdo raso, daqueles que te deixam exatamente onde você começou.",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10 border border-orange-500/20",
    },
    {
        icon: Lock,
        title: "Caixa-preta",
        description:
            "A sensação de que modelagem financeira é uma caixa-preta inacessível.",
        color: "text-red-400",
        bgColor: "bg-red-500/10 border border-red-500/20",
    },
];

export function FundamentosProblema() {
    return (
        <section className="py-24 bg-[#0B1528] text-white relative overflow-hidden">
            {/* Wave grid lines overlay inspired by design sample */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 600"
                preserveAspectRatio="none"
            >
                <path d="M-100 80 Q 300 480 700 180 T 1300 280" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M-100 130 Q 300 530 700 230 T 1300 330" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M-100 180 Q 300 580 700 280 T 1300 380" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M-100 230 Q 300 630 700 330 T 1300 430" fill="none" stroke="#0EA5E9" strokeWidth="1.2" />
                <path d="M-100 280 Q 300 680 700 380 T 1300 480" fill="none" stroke="#0284C7" strokeWidth="1" opacity="0.6" />
                <path d="M-100 330 Q 300 730 700 430 T 1300 530" fill="none" stroke="#0284C7" strokeWidth="1" opacity="0.4" />
            </svg>

            {/* Glowing radial accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4"
                    >
                        <span>O Problema</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white"
                    >
                        Você quer aprender modelagem financeira.{" "}
                        <span className="text-red-400 underline decoration-red-500/40 decoration-wavy">
                            Mas não quer isto:
                        </span>
                    </motion.h2>
                </div>

                {/* Grid Cards */}
                <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-[#111C3B]/90 backdrop-blur-md border border-slate-700/60 shadow-xl hover:border-slate-500 hover:bg-[#16244C] transition-all duration-300 group"
                        >
                            <div
                                className={`flex items-center justify-center w-14 h-14 mb-6 rounded-xl ${problem.bgColor} ${problem.color} group-hover:scale-105 transition-transform`}
                            >
                                <problem.icon className="w-7 h-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                                {problem.title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Conclusion - White Container with Amber Growth Arrow (Inspired directly by design sample) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl mx-auto mt-14"
                >
                    <div className="relative p-6 md:p-8 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
                        <div className="space-y-1 text-center sm:text-left">
                            <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                                A virada de chave
                            </p>
                            <p className="text-base md:text-lg text-slate-700 leading-snug">
                                Você não precisa de mais conteúdo acumulado.{" "}
                                <strong className="text-slate-950 font-bold">
                                    Precisa da lógica certa, explicada de forma prática e direta.
                                </strong>
                            </p>
                        </div>

                        {/* White Badge container with Amber Growth Arrow */}
                        <div className="flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 p-4 rounded-xl shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-8 h-8 text-white stroke-[2.5]" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
