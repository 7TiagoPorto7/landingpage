"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, FileSpreadsheet, Layers, LineChart, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: FileSpreadsheet,
        title: "Excel Avançado",
        description: "Domine as funções e atalhos essenciais para modelagem financeira de alta performance.",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        hoverBg: "group-hover:bg-green-500",
    },
    {
        icon: LineChart,
        title: "Valuation Completo",
        description: "Aprenda DCF, Múltiplos e outras metodologias de avaliação de empresas na prática.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        hoverBg: "group-hover:bg-blue-500",
    },
    {
        icon: BarChart3,
        title: "Análise de Cenários",
        description: "Construa modelos dinâmicos com sensibilidade e análise de cenários (Best/Base/Worst).",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        hoverBg: "group-hover:bg-purple-500",
    },
    {
        icon: Layers,
        title: "Estrutura de 3 Demonstrações",
        description: "Integre DRE, Balanço Patrimonial e Fluxo de Caixa de forma consistente e sem erros.",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        hoverBg: "group-hover:bg-orange-500",
    },
    {
        icon: Brain,
        title: "Lógica de Negócios",
        description: "Entenda como traduzir estratégias de negócios em projeções financeiras sólidas.",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        hoverBg: "group-hover:bg-pink-500",
    },
    {
        icon: ShieldCheck,
        title: "Melhores Práticas",
        description: "Adote padrões de formatação e auditoria utilizados pelos grandes bancos de investimento.",
        color: "text-teal-500",
        bgColor: "bg-teal-500/10",
        hoverBg: "group-hover:bg-teal-500",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Features() {
    return (
        <section className="py-24 bg-black">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        O que você vai aprender
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Uma metodologia completa para transformar você em um especialista em modelagem financeira.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="p-6 transition-all border rounded-2xl bg-card border-white/5 hover:border-white/20 hover:-translate-y-1 group"
                        >
                            <div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-lg ${feature.bgColor} ${feature.color} ${feature.hoverBg} group-hover:text-black transition-colors duration-300`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
