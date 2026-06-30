"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const lessons = [
    {
        number: 1,
        title: "Introdução: A Lógica dos Três Demonstrativos",
        description:
            "O que é um modelo financeiro, para que ele serve e a ideia central que sustenta tudo: os três demonstrativos não são independentes. Eles são um sistema único.",
    },
    {
        number: 2,
        title: "A DRE: A Estrutura do Resultado",
        description:
            "Como a Demonstração de Resultado é construída, da receita ao lucro líquido. Entenda cada degrau da DRE e por que ela costuma ser o ponto de partida do modelo.",
    },
    {
        number: 3,
        title: "O Balanço Patrimonial: A Fotografia da Empresa",
        description:
            "Ativo, Passivo e Patrimônio Líquido: a equação fundamental que precisa estar sempre em equilíbrio.",
    },
    {
        number: 4,
        title: "A Demonstração de Fluxo de Caixa: Do Lucro ao Caixa",
        description:
            "Por que lucro não é a mesma coisa que dinheiro no bolso. Como a DFC parte do lucro líquido e reconcilia com o caixa.",
    },
    {
        number: 5,
        title: "O Capital de Giro e a Dinâmica do Caixa",
        description:
            "A ponte que quase ninguém explica: como contas a receber, estoques e contas a pagar conectam o resultado ao caixa.",
    },
    {
        number: 6,
        title: "As Conexões: Como Tudo se Integra",
        description:
            "O coração do curso. O lucro que vira Patrimônio Líquido, o caixa que volta para o Balanço, a depreciação que circula entre os três.",
        highlight: true,
    },
    {
        number: 7,
        title: "Montando e Validando o Modelo Integrado",
        description:
            "Como garantir que o Balanço feche, os erros mais comuns e as checagens de validação.",
    },
];

export function FundamentosCurriculo() {
    return (
        <section id="conteudo" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/6 blur-[120px] rounded-full opacity-40" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/6 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                        <span>Conteúdo Programático</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                        O que você vai aprender: 7 aulas
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 via-teal-200 to-transparent" />

                    <div className="space-y-6">
                        {lessons.map((lesson, index) => (
                            <motion.div
                                key={lesson.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="relative pl-16 md:pl-20"
                            >
                                {/* Number circle */}
                                <div
                                    className={cn(
                                        "absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold z-10 transition-all",
                                        lesson.highlight
                                            ? "bg-gradient-to-br from-teal-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                                            : "bg-white border border-slate-200 text-teal-700 shadow-sm"
                                    )}
                                >
                                    {lesson.number}
                                </div>

                                {/* Card */}
                                <div
                                    className={cn(
                                        "relative overflow-hidden border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1",
                                        lesson.highlight
                                            ? "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 shadow-md hover:shadow-lg"
                                            : "bg-white border-slate-200 shadow-sm hover:border-teal-200 hover:shadow-md"
                                    )}
                                >
                                    {lesson.highlight && (
                                        <div className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-teal-100 text-teal-700 border border-teal-200">
                                            ★ Aula principal
                                        </div>
                                    )}

                                    <h3
                                        className={cn(
                                            "text-lg md:text-xl font-bold mb-2",
                                            lesson.highlight ? "text-teal-700" : "text-slate-800"
                                        )}
                                    >
                                        {lesson.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                        {lesson.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
