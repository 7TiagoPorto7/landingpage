"use client";

import { motion } from "framer-motion";
import { Link2, BookOpenCheck, GraduationCap, Palette, Code2, Shield, Eye } from "lucide-react";

const differentials = [
    {
        number: "①",
        icon: Link2,
        title: "Integração real, não cosmética",
        description: "Altere uma premissa na aba Premissas e observe o efeito cascata em todas as 18 abas — da Receita ao Valor por Ação. Checks automáticos no Balanço e na DFC garantem que o modelo está correto.",
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10",
    },
    {
        number: "②",
        icon: BookOpenCheck,
        title: "Cada aba ensina",
        description: "Não é um template vazio. Cada aba tem um guia explicativo na coluna ao lado com: o que está sendo calculado, por quê, como ler o resultado, e erros comuns a evitar.",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
    },
    {
        number: "③",
        icon: GraduationCap,
        title: "Trilha de aprendizado estruturada",
        description: "6 módulos progressivos com exercícios práticos que indicam a célula exata a verificar. 15–20h de aprendizado hands-on — do básico ao Monte Carlo.",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
    },
    {
        number: "④",
        icon: Palette,
        title: "Legenda de cores padrão de mercado",
        description: "🔵 Azul = input editável | ⚫ Preto = fórmula | 🟢 Verde = link entre abas | 🔴 Vermelho = check de integridade",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/10",
    },
    {
        number: "⑤",
        icon: Code2,
        title: "Python + Excel (e não Python OU Excel)",
        description: "O Excel modela. O Python simula 10.000 cenários em < 2 segundos. Os resultados voltam pro Excel. 4 scripts documentados linha por linha, com tabela de parâmetros automática.",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
    },
    {
        number: "⑥",
        icon: Shield,
        title: "Rigor quantitativo de nível institucional",
        description: "Monte Carlo, VaR, Expected Shortfall, Correlação de Pearson, Breakeven, Football Field. As mesmas análises que bancos de investimento e fundos usam — aplicadas de forma didática.",
        color: "text-red-400",
        bgColor: "bg-red-500/10",
    },
    {
        number: "⑦",
        icon: Eye,
        title: "100% editável e auditável",
        description: "Zero VBA. Zero macros. Todas as fórmulas visíveis. Troque a empresa, troque as premissas, e o modelo inteiro se recalcula.",
        color: "text-teal-400",
        bgColor: "bg-teal-500/10",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function TemplateDifferentials() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-[-10%] w-[400px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />
                <div className="absolute top-0 right-[-10%] w-[400px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3"
                    >
                        Diferenciais
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        O que torna este modelo{" "}
                        <span className="text-emerald-400">diferente de qualquer outro</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
                >
                    {differentials.map((diff, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group ${index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
                        >
                            <div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-xl ${diff.bgColor} ${diff.color} group-hover:scale-110 transition-transform`}>
                                <diff.icon className="w-6 h-6" />
                            </div>
                            <h3 className="mb-3 text-lg font-bold flex items-center gap-2">
                                <span className={`${diff.color} text-xl`}>{diff.number}</span>
                                {diff.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{diff.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
