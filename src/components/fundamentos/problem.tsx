"use client";

import { motion } from "framer-motion";
import { Clock, Hourglass, AlertTriangle, ZapOff } from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Cursos extensos de 40+ horas",
        description:
            "Treinamentos longos e cheios de teoria que exigem meses de estudo — e que você acaba abandonando na metade.",
        iconBg: "bg-red-500/20 text-red-400 border border-red-500/30",
    },
    {
        icon: Hourglass,
        title: "Falta de tempo na rotina",
        description:
            "A dificuldade de conciliar a rotina de trabalho com horas de aulas teóricas que demoram a chegar ao ponto prático.",
        iconBg: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    },
    {
        icon: AlertTriangle,
        title: "Horas travado na planilha",
        description:
            "Perder um final de semana inteiro tentando descobrir por que o Balanço não fecha ou por que o caixa não bate.",
        iconBg: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    },
    {
        icon: ZapOff,
        title: "Teoria solta sem conexão",
        description:
            "Estudar os demonstrativos isoladamente e continuar sem saber como conectar a DRE ao Balanço e ao Fluxo de Caixa.",
        iconBg: "bg-red-500/20 text-red-400 border border-red-500/30",
    },
];

export function FundamentosProblema() {
    return (
        <section className="py-20 bg-[#0B1528] text-white relative overflow-hidden border-y border-slate-800/80">
            {/* Ambient Glow Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/10 blur-[140px] rounded-full pointer-events-none" />
            
            <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30 mb-4"
                    >
                        <span>O Desafio</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
                    >
                        Você quer aprender modelagem financeira,{" "}
                        <br className="hidden sm:block" />
                        <span className="text-red-400 font-extrabold">mas não tem tempo a perder.</span>
                    </motion.h2>
                </div>

                {/* Minimalist Dark Cards Grid */}
                <div className="grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="p-6 md:p-7 rounded-2xl bg-[#111C3B]/90 backdrop-blur-md border border-slate-700/60 shadow-xl hover:border-slate-500 hover:bg-[#16244C] transition-all"
                        >
                            <div className={`flex items-center justify-center w-11 h-11 mb-4 rounded-xl ${problem.iconBg}`}>
                                <problem.icon className="w-5.5 h-5.5" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-white">{problem.title}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Minimalist Conclusion Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto mt-12 text-center"
                >
                    <p className="text-base md:text-lg text-slate-200 leading-relaxed bg-[#111C3B] p-6 rounded-2xl border border-slate-700/80 shadow-lg">
                        Você não tem tempo para 40 horas de enrolação.{" "}
                        <strong className="text-teal-300 font-bold block sm:inline mt-1 sm:mt-0">Você precisa da lógica prática para dominar o modelo em poucas horas.</strong>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
