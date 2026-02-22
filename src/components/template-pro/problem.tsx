"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Unplug } from "lucide-react";

const problems = [
    {
        icon: Unplug,
        title: "Demonstrativos Financeiros Desconectados",
        description:
            "A maioria dos cursos ensina DRE, Balanço e DFC separados. Você nunca vê como eles se conectam num sistema integrado onde uma premissa altera tudo.",
        color: "text-red-400",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/20",
    },
    {
        icon: AlertTriangle,
        title: "Valuation Sem Profundidade",
        description:
            'Quando chega no Valuation, a maioria para no DCF básico. Sem cenários quantitativos. Sem simulação de risco. Sem saber responder: "Qual a probabilidade de esse investimento dar errado?"',
        color: "text-amber-400",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/20",
    },
];

export function TemplateProblem() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Subtle bg accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3"
                    >
                        O Problema
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Por que a maioria nunca domina modelagem financeira de verdade?
                    </motion.h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`p-8 rounded-2xl bg-white/[0.02] border ${problem.borderColor} hover:bg-white/[0.04] transition-all`}
                        >
                            <div className={`flex items-center justify-center w-14 h-14 mb-6 rounded-xl ${problem.bgColor} ${problem.color}`}>
                                <problem.icon className="w-7 h-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">{problem.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
