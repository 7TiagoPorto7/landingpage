"use client";

import { motion } from "framer-motion";
import { Gift, FileSpreadsheet, ClipboardCheck, Sparkles } from "lucide-react";

export function FundamentosBonus() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3"
                    >
                        Bônus Inclusos
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Leve ainda mais com o seu curso
                    </motion.h2>
                </div>

                {/* Main Bonus — AI Prompts */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-8 relative"
                >
                    {/* Animated gradient border */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500 via-cyan-400 to-amber-500 rounded-[22px] opacity-60 blur-sm animate-pulse" />

                    <div className="relative p-8 md:p-10 rounded-[20px] bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                        {/* EXCLUSIVO badge */}
                        <div className="absolute top-0 right-0 px-5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-extrabold rounded-bl-xl rounded-tr-[20px] uppercase tracking-wider">
                            <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                Exclusivo
                            </span>
                        </div>

                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-amber-400 shrink-0">
                                <Gift className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                    🎁 Planilha de Prompts de IA para Finanças
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Uma planilha exclusiva com prompts de Inteligência Artificial
                                    para aplicar em finanças. Agilize análises, automatize tarefas
                                    e domine ferramentas de IA no seu dia a dia financeiro.
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
                        className="p-7 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-colors"
                    >
                        <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-cyan-500/10 text-cyan-400">
                            <FileSpreadsheet className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                            Template de Modelo Integrado
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Planilha pronta com o modelo financeiro dos três demonstrativos
                            integrados. Estude, adapte e pratique à vontade.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-7 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-colors"
                    >
                        <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-cyan-500/10 text-cyan-400">
                            <ClipboardCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                            Checklist de Validação
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            O passo a passo para conferir se o seu modelo está fechando
                            corretamente. Nunca mais perca horas procurando erro.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
