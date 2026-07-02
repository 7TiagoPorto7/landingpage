"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FileSpreadsheet, Layers, PieChart, ArrowRightLeft, CheckCircle2, Zap, GitCommit } from "lucide-react";

interface Topic {
    id: number;
    title: string;
    description: string;
    icon: any;
    tag: string;
    highlight?: boolean;
}

const topics: Topic[] = [
    {
        id: 1,
        title: "A Lógica Central do Modelo",
        tag: "Fundamento",
        description:
            "O que é um modelo financeiro profissional e a regra de ouro: os três demonstrativos não são peças isoladas, mas sim partes de uma engrenagem única.",
        icon: GitCommit,
    },
    {
        id: 2,
        title: "A DRE: A Estrutura do Resultado",
        tag: "Resultado",
        description:
            "Da receita bruta ao lucro líquido. Como desmembrar cada linha do resultado operacional e entender por onde o dinheiro entra e é consumido.",
        icon: PieChart,
    },
    {
        id: 3,
        title: "O Balanço Patrimonial: A Fotografia",
        tag: "Patrimônio",
        description:
            "Ativo, Passivo e Patrimônio Líquido: a equação fundamental da empresa explicada sem jargões e mantida sempre em equilíbrio.",
        icon: Layers,
    },
    {
        id: 4,
        title: "A DFC: Do Lucro ao Caixa Real",
        tag: "Caixa",
        description:
            "Descubra por que ter lucro alto não significa ter dinheiro na conta. A reconciliação exata entre o resultado contábil e o fluxo financeiro.",
        icon: ArrowRightLeft,
    },
    {
        id: 5,
        title: "Capital de Giro e Dinâmica Operacional",
        tag: "Conexão",
        description:
            "A ponte crítica do modelo: como Prazos Médios de Estoques, Contas a Receber e Fornecedores drenam ou geram caixa no dia a dia.",
        icon: Zap,
    },
    {
        id: 6,
        title: "As Conexões que Integram Tudo",
        tag: "O Coração do Curso",
        description:
            "O momento da virada: o lucro alimentando o Patrimônio Líquido, a depreciação impactando o resultado sem queimar caixa, e o saldo final fechando o Balanço.",
        icon: FileSpreadsheet,
        highlight: true,
    },
    {
        id: 7,
        title: "Montagem & Validação Prática",
        tag: "Aplicação",
        description:
            "Como montar o modelo integrado passo a passo na planilha e as checagens de validação para garantir que seu Balanço feche 100% sem erros.",
        icon: CheckCircle2,
    },
];

export function FundamentosCurriculo() {
    return (
        <section id="conteudo" className="py-24 bg-[#0B1528] text-white relative overflow-hidden border-t border-slate-800/80">
            {/* Background Accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-teal-500/10 blur-[160px] rounded-full opacity-50" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-wider rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                        <span>A Jornada Completa</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
                        O que você vai aprender na prática
                    </h2>
                    <p className="text-slate-300 text-base md:text-lg">
                        Um passo a passo lógico e encadeado para dominar a estrutura de modelos financeiros.
                    </p>
                </motion.div>

                {/* Visual Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {topics.map((topic, index) => (
                        <motion.div
                            key={topic.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            className={cn(
                                "relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl group",
                                topic.highlight
                                    ? "bg-gradient-to-br from-[#11274F] via-[#0D2042] to-[#0A1A36] border-2 border-teal-400/80 shadow-[0_0_30px_rgba(20,184,166,0.25)] md:col-span-2 lg:col-span-1"
                                    : "bg-[#0D1935] border border-slate-700/80 hover:border-slate-500"
                            )}
                        >
                            {/* Card Header */}
                            <div>
                                <div className="flex items-center justify-between gap-3 mb-5">
                                    <div
                                        className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                                            topic.highlight
                                                ? "bg-teal-400 text-slate-950 shadow-lg"
                                                : "bg-teal-500/15 text-teal-300 border border-teal-500/30"
                                        )}
                                    >
                                        <topic.icon className="w-6 h-6" />
                                    </div>
                                    <span
                                        className={cn(
                                            "text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border",
                                            topic.highlight
                                                ? "bg-amber-400/20 text-amber-300 border-amber-400/40"
                                                : "bg-slate-800/80 text-slate-300 border-slate-700"
                                        )}
                                    >
                                        {topic.tag}
                                    </span>
                                </div>

                                <h3
                                    className={cn(
                                        "text-xl font-bold mb-3 leading-snug",
                                        topic.highlight ? "text-teal-300" : "text-white"
                                    )}
                                >
                                    {topic.title}
                                </h3>

                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {topic.description}
                                </p>
                            </div>

                            {/* Stage indicator */}
                            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-semibold">
                                <span>Etapa {topic.id} de 7</span>
                                <span className="text-teal-400 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
