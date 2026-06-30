"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen, Target, Lock } from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Cursos intermináveis",
        description:
            "Um curso de 40 horas que você começa animado e abandona na terceira aula.",
        color: "text-red-400",
        bgColor: "bg-red-50",
        borderColor: "border-red-500/20",
    },
    {
        icon: BookOpen,
        title: "Teoria que não vai usar",
        description:
            "Horas de teoria que você nunca vai usar, só para chegar no que interessa.",
        color: "text-orange-400",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-500/20",
    },
    {
        icon: Target,
        title: "Conteúdo raso",
        description:
            "Conteúdo raso, daqueles que te deixam exatamente onde você começou.",
        color: "text-amber-400",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-500/20",
    },
    {
        icon: Lock,
        title: "Caixa-preta",
        description:
            "A sensação de que modelagem financeira é uma caixa-preta inacessível.",
        color: "text-red-400",
        bgColor: "bg-red-50",
        borderColor: "border-red-500/20",
    },
];

export function FundamentosProblema() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle bg accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/8 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3"
                    >
                        O Problema
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900"
                    >
                        Você quer aprender modelagem financeira.{" "}
                        <span className="text-red-500">Mas não quer isto:</span>
                    </motion.h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-2xl bg-white border ${problem.borderColor} border-slate-200 shadow-sm hover:shadow-md transition-all`}
                        >
                            <div className={`flex items-center justify-center w-14 h-14 mb-6 rounded-xl ${problem.bgColor} ${problem.color}`}>
                                <problem.icon className="w-7 h-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-800">{problem.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Conclusion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-16 text-center"
                >
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Você não precisa de mais conteúdo.{" "}
                        <strong className="text-slate-900">Precisa do conteúdo certo, explicado de forma direta.</strong>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
