"use client";

import { useState } from "react";
import { ChevronDown, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const modules = [
    {
        title: "Módulo 1: Fundamentos do Excel para Finanças",
        lessons: [
            "Configuração do ambiente e atalhos essenciais",
            "Fórmulas lógicas e de busca (IF, INDEX, MATCH, XLOOKUP)",
            "Tratamento de dados e tabelas dinâmicas",
            "Formatação condicional e gráficos profissionais",
        ],
    },
    {
        title: "Módulo 2: Contabilidade para Modelagem",
        lessons: [
            "Estrutura das Demonstrações Financeiras (DRE, BP, DFC)",
            "O ciclo contábil e a integração das 3 demonstrações",
            "Análise horizontal e vertical",
            "Indicadores financeiros (Liquidez, Rentabilidade, Endividamento)",
        ],
    },
    {
        title: "Módulo 3: Construção do Modelo Financeiro (Operating Model)",
        lessons: [
            "Premissas de Receita (Preço x Volume)",
            "Projeção de Custos e Despesas (Fixos vs Variáveis)",
            "Capital de Giro (Prazos Médios)",
            "CAPEX e Depreciação",
            "Estrutura de Dívida e Juros",
        ],
    },
    {
        title: "Módulo 4: Valuation (Avaliação de Empresas)",
        lessons: [
            "Conceitos de Valor do Dinheiro no Tempo",
            "Custo de Capital (WACC)",
            "Fluxo de Caixa Descontado (DCF)",
            "Cálculo do Valor Terminal (Perpetuidade e Múltiplos)",
            "Análise de Sensibilidade e Cenários",
        ],
    },
];

export function Curriculum() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="curriculum" className="py-24 bg-black relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Conteúdo Programático
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Um currículo estruturado para levar você do básico ao avançado, com exemplos reais e exercícios práticos.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className="overflow-hidden border rounded-xl border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-primary/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-white/5"
                            >
                                <span className="text-lg font-semibold">{module.title}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 transition-transform duration-200",
                                        openIndex === index ? "rotate-180" : ""
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 border-t border-white/10 bg-black/20">
                                            <ul className="space-y-3 pt-4">
                                                {module.lessons.map((lesson, lessonIndex) => (
                                                    <li key={lessonIndex} className="flex items-start gap-3 text-muted-foreground">
                                                        <PlayCircle className="w-5 h-5 mt-0.5 text-primary/60 shrink-0" />
                                                        <span>{lesson}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
