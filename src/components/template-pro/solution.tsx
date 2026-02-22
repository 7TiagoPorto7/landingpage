"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const flowSteps = [
    "Premissas",
    "DRE",
    "Balanço",
    "DFC",
    "DCF",
    "Valor por Ação",
];

export function TemplateSolution() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>A Solução</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Um modelo financeiro onde{" "}
                        <span className="text-emerald-400">tudo está conectado</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        Da premissa ao valor por ação — e cada aba tem um guia explicativo ao lado dizendo exatamente o que está acontecendo, por quê, e como.
                    </motion.p>
                </div>

                {/* Flow visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
                        {flowSteps.map((step, index) => (
                            <div key={index} className="flex items-center">
                                <div className="px-4 py-3 md:px-6 md:py-4 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 text-sm md:text-base font-semibold text-white hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all cursor-default">
                                    {step}
                                </div>
                                {index < flowSteps.length - 1 && (
                                    <ArrowRight className="w-5 h-5 text-emerald-500/60 mx-1 md:mx-2 shrink-0 hidden md:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Key features */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="grid gap-4">
                        {[
                            "18 abas interligadas — da premissa ao Football Field",
                            "Guia explicativo em cada aba com o que, por que e como",
                            "Checks automáticos no Balanço e na DFC (= 0 em todos os anos)",
                            "Trilha de aprendizado de 15–20h com exercícios práticos",
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
