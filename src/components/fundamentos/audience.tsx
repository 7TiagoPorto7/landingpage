"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const forWhom = [
    "Quem quer aprender modelagem financeira de forma direta e objetiva.",
    "Quem não tem tempo (nem paciência) para um curso longo, lotado de teoria que não vai usar.",
    "Quem conhece os demonstrativos isoladamente, mas quer entender de uma vez como eles se conectam.",
    "Quem busca uma base sólida e bem explicada, sem gordura.",
];


export function FundamentosAudiencia() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/8 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3"
                    >
                        Público-Alvo
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900"
                    >
                        Este curso é para você?
                    </motion.h2>
                </div>

                <div className="flex justify-center max-w-5xl mx-auto">
                    {/* Para quem É */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-xl p-8 rounded-2xl bg-white border border-emerald-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50">
                                <Check className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-emerald-700">
                                Para quem é
                            </h3>
                        </div>
                        <ul className="space-y-5">
                            {forWhom.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-emerald-50 shrink-0">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <span className="text-slate-600 leading-relaxed text-sm">
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
