"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Zap, Lock, Flame } from "lucide-react";
import { getDecoratedCheckoutUrl, trackCheckout } from "@/lib/tracking";

const includes = [
    "Acesso a todas as 7 aulas do curso",
    "Template de Modelo Integrado em Excel (DRE, Balanço e DFC)",
    "Planilha de Prompts de IA para Finanças (Bônus)",
    "Checklist de Validação de Modelos (Bônus)",
    "Acesso imediato e vitalício",
    "Garantia incondicional de 7 dias",
];

export function FundamentosPricing() {
    const [checkoutUrl, setCheckoutUrl] = useState("https://pay.hotmart.com/F106435738T");

    useEffect(() => {
        setCheckoutUrl(getDecoratedCheckoutUrl());
    }, []);

    return (
        <section id="oferta" className="py-24 relative overflow-hidden bg-[#0B1528] text-white border-t border-slate-800/80">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/15 blur-[160px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3"
                    >
                        <Flame className="w-4 h-4 text-amber-400 fill-amber-500" />
                        <span>Investimento Acessível</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-white"
                    >
                        Aprenda os fundamentos da modelagem financeira
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-300"
                    >
                        Direto ao ponto. A base que importa, bem explicada.
                    </motion.p>

                    {/* TAREFA 7 — BLOCO DE COMPARAÇÃO / ANCORAGEM DE VALOR */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="mt-10 p-6 md:p-8 rounded-3xl bg-[#111F3D]/90 backdrop-blur-md border border-slate-700/80 shadow-xl max-w-xl mx-auto text-left"
                    >
                        <p className="text-sm font-extrabold text-teal-400 mb-4 text-center leading-relaxed">
                            Cursos completos de modelagem custam de R$ 1.500 a R$ 3.000 e exigem 40+ horas. Este curso entrega a base essencial por R$ 197.
                        </p>
                        <div className="space-y-2.5 text-sm">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 text-slate-300 border border-slate-800">
                                <span>Cursos longos / MBA tradicional de 40+ horas</span>
                                <span className="font-semibold text-slate-500 line-through">R$ 1.500 – R$ 3.000</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-teal-500/15 border border-teal-500/40 text-white font-bold">
                                <span className="flex items-center gap-1.5 text-teal-300">
                                    <Check className="w-4 h-4 text-teal-400 stroke-[3]" />
                                    Fundamentos da Modelagem Financeira + Bônus
                                </span>
                                <span className="text-amber-400 text-base font-extrabold">R$ 197</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative max-w-xl mx-auto">
                    {/* Pulsing glow border */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-teal-500 via-amber-400 to-cyan-500 rounded-[26px] opacity-75 blur-sm animate-pulse" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden border rounded-3xl bg-white text-slate-900 border-slate-200 shadow-2xl"
                    >
                        <div className="p-8 md:p-12 relative z-10">
                            <h3 className="mb-2 text-2xl md:text-3xl font-extrabold text-slate-900">
                                Fundamentos da Modelagem Financeira
                            </h3>
                            <p className="mb-8 text-slate-500 text-base">
                                Curso completo + bônus exclusivos inclusos
                            </p>

                            {/* Massive Price Display */}
                            <div className="flex flex-col items-center mb-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-slate-400 font-bold text-xl line-through decoration-red-500 decoration-2">
                                        De R$ 297
                                    </span>
                                </div>

                                <div className="flex items-baseline justify-center gap-1 my-1">
                                    <span className="text-2xl md:text-3xl font-black text-slate-900 self-start mt-2">R$</span>
                                    <span className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-950 leading-none">
                                        197
                                    </span>
                                </div>

                                <p className="text-sm md:text-base text-teal-700 font-bold mt-2">
                                    ou 12x de R$ 19,70 no cartão
                                </p>
                            </div>

                            <a
                                href={checkoutUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center w-full h-16 md:h-18 mb-5 text-lg md:text-xl font-black text-white transition-all rounded-2xl bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 hover:scale-[1.02] overflow-hidden group shadow-xl"
                                onClick={() => trackCheckout("pricing_main", 197)}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    QUERO COMEÇAR AGORA — R$ 197
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                            </a>

                            <p className="text-center text-xs text-slate-500 font-medium mb-8">
                                🔒 Compra segura via Hotmart · Acesso imediato e vitalício
                            </p>

                            {/* Checklist */}
                            <div className="space-y-3.5 pt-6 border-t border-slate-100">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                    O que está incluído:
                                </p>
                                {includes.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 text-sm">
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-700 shrink-0 mt-0.5 font-bold">
                                            ✓
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
