"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, FileSpreadsheet, Shield, Zap } from "lucide-react";
import Link from "next/link";

const included = [
    "18 abas interligadas (DRE → BP → DFC → DCF → Múltiplos → Comps → Cenários → Monte Carlo → VaR)",
    "Guia explicativo em cada aba",
    "4 scripts Python documentados linha por linha",
    "Trilha de aprendizado de 15–20h com exercícios",
    "Tabela de sensibilidade 7×7 (WACC × g)",
    "Football Field com 4 metodologias",
    "Legenda de cores padrão de mercado",
    "Template de Resumo Executivo (equity research)",
];

export function TemplateProCTA() {
    return (
        <section id="cta" className="py-24 relative overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Pronto para dominar modelagem financeira?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Acesso imediato. Arquivo .xlsx. Todas as fórmulas abertas. Trilha de aprendizado incluída.
                    </motion.p>
                </div>

                <div className="relative max-w-lg mx-auto">
                    {/* Glowing Border */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-[26px] opacity-75 blur-sm animate-pulse" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden border rounded-3xl bg-card border-white/10"
                    >
                        <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-xs font-bold rounded-bl-xl z-20">
                            MODELO COMPLETO
                        </div>

                        <div className="p-8 md:p-12 relative z-10">
                            <h3 className="mb-2 text-2xl font-bold text-emerald-400">Template Pro</h3>
                            <p className="mb-8 text-muted-foreground">Modelo Financeiro Integrado + Valuation DCF + Análise de Risco</p>

                            <div className="flex flex-col mb-8">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl md:text-6xl font-bold tracking-tighter text-white">R$ 97</span>
                                    <span className="text-xl text-muted-foreground">/único</span>
                                </div>
                                <p className="text-sm text-emerald-400 mt-2 font-medium">Acesso vitalício • Arquivo .xlsx editável</p>
                            </div>

                            <Link
                                href="#"
                                className="relative flex items-center justify-center w-full h-16 mb-10 text-lg font-bold text-black transition-all rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Quero o Modelo Completo
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                            </Link>

                            <div className="space-y-4">
                                <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">O que está incluso:</p>
                                <ul className="space-y-3 text-left">
                                    {included.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 group/item">
                                            <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 group-hover/item:bg-emerald-500 group-hover/item:text-black transition-colors">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground text-sm group-hover/item:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-lg mx-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
                >
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span>Compra segura</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span>Acesso imediato</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                        <span>100% editável</span>
                    </div>
                </motion.div>

                {/* Disclaimer */}
                <p className="max-w-lg mx-auto text-center text-xs text-muted-foreground/60 mt-8">
                    Empresa fictícia (TechFlow S.A.) para fins 100% educacionais.
                </p>
            </div>
        </section>
    );
}
