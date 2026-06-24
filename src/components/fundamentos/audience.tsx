"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forWhom = [
    "Quem quer aprender modelagem financeira de forma direta e objetiva.",
    "Quem não tem tempo (nem paciência) para um curso longo, lotado de teoria que não vai usar.",
    "Quem conhece os demonstrativos isoladamente, mas quer entender de uma vez como eles se conectam.",
    "Quem busca uma base sólida e bem explicada, sem gordura.",
];

const notForWhom = [
    "Para quem busca um curso completo \"do zero ao avançado\", com todos os detalhes de premissas, valuation e modelagem setorial. Aqui o foco são os fundamentos.",
    "Para quem nunca ouviu falar em DRE, Balanço ou Fluxo de Caixa (assumimos uma noção básica de cada um).",
];

export function FundamentosAudiencia() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3"
                    >
                        Público-Alvo
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Este curso é para você?
                    </motion.h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    {/* Para quem É */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white/[0.03] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10">
                                <Check className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-emerald-400">
                                Para quem é
                            </h3>
                        </div>
                        <ul className="space-y-5">
                            {forWhom.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-emerald-500/10 shrink-0">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <span className="text-muted-foreground leading-relaxed text-sm">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Para quem NÃO é */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white/[0.03] border border-red-500/20 hover:border-red-500/40 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10">
                                <X className="w-5 h-5 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-red-400">
                                Para quem NÃO é
                            </h3>
                        </div>
                        <ul className="space-y-5">
                            {notForWhom.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-red-500/10 shrink-0">
                                        <X className="w-4 h-4 text-red-400" />
                                    </div>
                                    <span className="text-muted-foreground leading-relaxed text-sm">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
