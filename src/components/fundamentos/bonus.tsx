"use client";

import { motion } from "framer-motion";
import { Gift, FileSpreadsheet, ClipboardCheck, Sparkles } from "lucide-react";

export function FundamentosBonus() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/6 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3"
                    >
                        Bônus Inclusos
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900"
                    >
                        Leve ainda mais com o seu curso
                    </motion.h2>
                </div>

                {/* Main Bonus — Template Pro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-8 relative"
                >
                    {/* Animated gradient border */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-400 via-teal-400 to-amber-400 rounded-[22px] opacity-50 blur-sm animate-pulse" />

                    <div className="relative p-8 md:p-10 rounded-[20px] bg-amber-50/50 border border-amber-200">
                        {/* EXCLUSIVO badge */}
                        <div className="absolute top-0 right-0 px-5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-extrabold rounded-bl-xl rounded-tr-[20px] uppercase tracking-wider">
                            <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                Incluso
                            </span>
                        </div>

                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 shrink-0">
                                <FileSpreadsheet className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                                    🎁 Bônus 1: Template Pro (Modelo Financeiro de 3 Demonstrativos)
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    O modelo financeiro profissional completo e automatizado com DRE, Balanço Patrimonial e DFC integrados no Excel. Utilizado no dia a dia do mercado para projeções e valuation. (Valor original: R$ 97,00 — 100% grátis).
                                </p>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* Secondary bonuses */}
                <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-400 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-teal-50 border border-teal-100 text-teal-700">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                            Bônus 2: Starter Kit de Finanças
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            O kit essencial de aceleração de carreira com manual de atalhos rápidos do Excel, planilhas de exercícios práticos e guias de modelagem ágil. (Valor original: R$ 67,90 — 100% grátis).
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-400 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-teal-50 border border-teal-100 text-teal-700">
                            <Gift className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                            Bônus 3: Planilha de Prompts de IA
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Nossa planilha de comandos avançados de Inteligência Artificial para agilizar pesquisas setoriais, automatizar tarefas contábeis e criar relatórios em minutos.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
