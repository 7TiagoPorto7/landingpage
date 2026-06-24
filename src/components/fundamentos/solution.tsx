"use client";

import { motion } from "framer-motion";
import { Zap, Target, CheckCircle, Shield } from "lucide-react";

const differentials = [
    {
        icon: Zap,
        title: "Direto ao ponto.",
        description:
            "Só o que importa, sem enrolação e sem horas de teoria que você nunca vai usar.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
    },
    {
        icon: Target,
        title: "Profundidade onde conta.",
        description:
            "O foco é a lógica e a estrutura, explicadas de verdade — não de raspão.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
    },
    {
        icon: CheckCircle,
        title: "Feito para você terminar.",
        description:
            "Direto e objetivo, pensado para você concluir o curso e sair aplicando.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
    },
    {
        icon: Shield,
        title: "Honesto.",
        description:
            "São os fundamentos bem-feitos, não a promessa vazia de dominar tudo de uma vez.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
    },
];

export function FundamentosSolucao() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3"
                    >
                        A Solução
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl mb-6"
                    >
                        É exatamente para isso que o{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
                            Fundamentos da Modelagem Financeira
                        </span>{" "}
                        foi criado
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        Este é um curso{" "}
                        <strong className="text-white">direto, objetivo e introdutório</strong>{" "}
                        — pensado para quem quer aprender modelagem financeira sem
                        perder tempo. O foco é claro: a{" "}
                        <strong className="text-white">estrutura</strong> de um modelo
                        financeiro e a{" "}
                        <strong className="text-white">
                            dinâmica que conecta os três principais demonstrativos
                        </strong>{" "}
                        (DRE, Balanço Patrimonial e Fluxo de Caixa). Você vai entender
                        como as peças se encaixam, por que o lucro vira caixa e como o
                        Balanço fecha — a lógica que faz tudo funcionar.
                    </motion.p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                    {differentials.map((diff, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
                        >
                            <div
                                className={`flex items-center justify-center w-12 h-12 mb-5 rounded-xl ${diff.bgColor} ${diff.color} group-hover:scale-110 transition-transform`}
                            >
                                <diff.icon className="w-6 h-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-white">
                                {diff.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {diff.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
