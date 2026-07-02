"use client";

import { motion } from "framer-motion";
import { Zap, Target, CheckCircle, Shield } from "lucide-react";

const differentials = [
    {
        icon: Zap,
        title: "Direto ao Ponto",
        description:
            "Só o que realmente importa no dia a dia. Sem enrolação e sem horas de teoria acadêmica que você nunca vai usar na prática.",
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10 border border-emerald-500/20",
        badge: "01"
    },
    {
        icon: Target,
        title: "Profundidade Onde Conta",
        description:
            "O foco é entender a lógica que conecta os demonstrativos de verdade. Não de raspão ou apenas decorando fórmulas.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10 border border-cyan-500/20",
        badge: "02"
    },
    {
        icon: CheckCircle,
        title: "Feito Para Você Concluir",
        description:
            "Metodologia altamente objetiva de 7 aulas, pensada para você finalizar rapidamente e já sair aplicando nos seus modelos.",
        color: "text-teal-400",
        bgColor: "bg-teal-500/10 border border-teal-500/20",
        badge: "03"
    },
    {
        icon: Shield,
        title: "100% Prático e Honesto",
        description:
            "Os fundamentos bem-feitos de quem atua no mercado de M&A. Sem promessas milagrosas de 'fique rico da noite para o dia'.",
        color: "text-amber-400",
        bgColor: "bg-amber-500/10 border border-amber-500/20",
        badge: "04"
    },
];

export function FundamentosSolucao() {
    return (
        <section className="py-24 bg-[#070D1B] text-white relative overflow-hidden border-t border-slate-800/80">
            {/* Smooth vector wave grid lines */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 600"
                preserveAspectRatio="none"
            >
                <path d="M-100 200 Q 300 50 700 350 T 1300 150" fill="none" stroke="#14B8A6" strokeWidth="1.5" />
                <path d="M-100 250 Q 300 100 700 400 T 1300 200" fill="none" stroke="#14B8A6" strokeWidth="1.5" />
                <path d="M-100 300 Q 300 150 700 450 T 1300 250" fill="none" stroke="#06B6D4" strokeWidth="1.2" />
                <path d="M-100 350 Q 300 200 700 500 T 1300 300" fill="none" stroke="#0284C7" strokeWidth="1" opacity="0.5" />
            </svg>

            {/* Glowing radial background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-500/12 blur-[160px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        <span>💡 A Solução Definitiva</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6 text-white leading-tight"
                    >
                        É exatamente para isso que o{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300">
                            Fundamentos da Modelagem Financeira
                        </span>{" "}
                        foi criado
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
                    >
                        Um curso direto e prático para entender a{" "}
                        <strong className="text-white font-semibold">estrutura</strong> de um modelo financeiro e como as engrenagens da DRE, Balanço e Fluxo de Caixa se conectam de verdade.
                    </motion.p>
                </div>

                {/* Grid Cards - 4 Differentials */}
                <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                    {differentials.map((diff, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-[#0D1935]/90 backdrop-blur-md border border-slate-700/70 hover:border-teal-500/50 hover:bg-[#122246] shadow-xl transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Number badge */}
                            <span className="absolute top-4 right-4 text-xs font-bold text-slate-500 group-hover:text-teal-400 transition-colors">
                                {diff.badge}
                            </span>

                            <div
                                className={`flex items-center justify-center w-14 h-14 mb-6 rounded-xl ${diff.bgColor} ${diff.color} group-hover:scale-110 transition-transform`}
                            >
                                <diff.icon className="w-7 h-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                                {diff.title}
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                {diff.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
