"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        icon: "⚙️",
        title: "Configure",
        subtitle: "(5 min)",
        description:
            "Defina o saldo inicial das contas bancárias e confira as categorias. A planilha vem pronta — você só ajusta o que precisar.",
        color: "text-[#548235]",
    },
    {
        number: "02",
        icon: "✏️",
        title: "Lance",
        subtitle: "",
        description:
            "Registre cada receita e despesa preenchendo 6 campos simples. Receita = positivo, despesa = negativo. Sem fórmula, sem complicação.",
        color: "text-[#2F5496]",
    },
    {
        number: "03",
        icon: "📊",
        title: "Analise",
        subtitle: "",
        description:
            "DRE, Fluxo de Caixa e Dashboard se atualizam automaticamente. Faça a conciliação bancária mensal e tome decisões com números reais.",
        color: "text-[#548235]",
    },
];

export function SKHowItWorks() {
    return (
        <section id="como-funciona" className="py-20 md:py-28 bg-[#F2F2F2]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-[#548235] font-semibold uppercase tracking-wider text-sm mb-3">
                        Processo
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F5496]">
                        Do zero ao controle em 3 passos
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                    {/* Connecting line (desktop) */}
                    <div className="absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#548235] via-[#2F5496] to-[#548235] hidden md:block" style={{ left: '16.66%', right: '16.66%' }} />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative text-center"
                        >
                            {/* Number circle */}
                            <div className="relative inline-flex items-center justify-center mb-6">
                                <div className="w-24 h-24 rounded-full bg-white shadow-lg border-4 border-[#2F5496]/10 flex items-center justify-center">
                                    <span className="text-4xl">{step.icon}</span>
                                </div>
                                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2F5496] flex items-center justify-center`}>
                                    <span className="text-white font-bold text-xs">{step.number}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#2F5496] mb-1">
                                {step.title}{" "}
                                {step.subtitle && (
                                    <span className="text-[#548235] text-base font-medium">
                                        {step.subtitle}
                                    </span>
                                )}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mt-3 max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 max-w-2xl mx-auto"
                >
                    <div className="bg-white rounded-xl p-5 border-l-4 border-[#2F5496] shadow-sm">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <strong className="text-[#2F5496]">💡 Detalhe importante:</strong>{" "}
                            A planilha separa{" "}
                            <strong className="text-[#548235]">competência</strong> (quando
                            aconteceu) de{" "}
                            <strong className="text-[#548235]">caixa</strong> (quando o
                            dinheiro movimentou). Você tem os dois relatórios sem trabalho
                            dobrado.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
