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
    "Não é para quem já domina a integração dos três demonstrativos e busca valuation ou LBO avançado.",
    "Não é para quem procura um curso de Excel — o foco aqui é a lógica do modelo.",
    "Não é para quem quer 40 horas de videoaulas — aqui é o essencial, direto.",
];

export function FundamentosAudiencia() {
    return (
        <section id="audiencia" className="py-24 bg-[#0B1528] text-white relative overflow-hidden border-t border-slate-800/80">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 max-w-6xl">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30 mb-3"
                    >
                        <span>Público-Alvo</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white"
                    >
                        Este curso é para você?
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Para quem É */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-3xl bg-[#111F3D] border border-emerald-500/40 shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
                                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                    <Check className="w-6 h-6 stroke-[3]" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white">
                                    Para quem É este curso
                                </h3>
                            </div>
                            <ul className="space-y-5">
                                {forWhom.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3.5">
                                        <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span className="text-slate-200 leading-relaxed text-base font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* TAREFA 8 — Para quem NÃO É */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 md:p-10 rounded-3xl bg-[#131B2E] border border-red-500/30 shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
                                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
                                    <X className="w-6 h-6 stroke-[3]" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white">
                                    Para quem NÃO é
                                </h3>
                            </div>
                            <ul className="space-y-5">
                                {notForWhom.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3.5">
                                        <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 shrink-0">
                                            <X className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                        <span className="text-slate-300 leading-relaxed text-base font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
