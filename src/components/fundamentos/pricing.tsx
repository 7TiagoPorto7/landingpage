"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Zap, CreditCard } from "lucide-react";
import Link from "next/link";

const CHECKOUT_URL = "https://pay.hotmart.com/F106435738T";

const included = [
    "7 aulas diretas e objetivas",
    "Planilha de modelo integrado",
    "Planilha de Prompts de IA para Finanças (BÔNUS)",
    "Checklist de validação",
    "Acesso imediato",
    "Garantia incondicional de 7 dias",
];

export function FundamentosPricing() {
    return (
        <section id="oferta" className="py-24 relative overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3"
                    >
                        Oferta de Lançamento
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        Aprenda os fundamentos da modelagem financeira
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Direto ao ponto. A base que importa, bem explicada.
                    </motion.p>
                </div>

                <div className="relative max-w-lg mx-auto">
                    {/* Pulsing glow border */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-500 rounded-[26px] opacity-75 blur-sm animate-pulse" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden border rounded-3xl bg-card border-white/10"
                    >
                        <div className="absolute top-0 right-0 px-5 py-1.5 bg-gradient-to-r from-cyan-500 to-teal-400 text-black text-xs font-bold rounded-bl-xl z-20 uppercase tracking-wider">
                            Oferta de Lançamento
                        </div>

                        <div className="p-8 md:p-12 relative z-10">
                            <h3 className="mb-2 text-2xl font-bold text-cyan-400">
                                Fundamentos da Modelagem Financeira
                            </h3>
                            <p className="mb-8 text-muted-foreground">
                                Curso completo + bônus exclusivos
                            </p>

                            <div className="flex flex-col items-center mb-8">
                                <div className="text-red-500 font-semibold text-lg mb-1 line-through decoration-2">
                                    R$ 297
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl text-white font-medium">R$</span>
                                    <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white">
                                        197
                                    </span>
                                </div>
                                <p className="text-sm text-cyan-400 mt-2 font-medium">
                                    ou em até 12x no cartão
                                </p>
                            </div>

                            <Link
                                href={CHECKOUT_URL}
                                id="pricing-cta"
                                className="relative flex items-center justify-center w-full h-16 mb-4 text-lg font-bold text-black transition-all rounded-xl bg-gradient-to-r from-cyan-400 to-teal-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    QUERO COMEÇAR AGORA
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                            </Link>

                            {/* Guarantee */}
                            <p className="text-center text-muted-foreground text-sm mb-8 flex items-center justify-center gap-2">
                                <Shield className="w-4 h-4 text-cyan-400" />
                                🔒 Garantia de 7 dias — não gostou, devolvemos 100%
                            </p>

                            {/* Included */}
                            <div className="space-y-4">
                                <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">
                                    O que está incluso:
                                </p>
                                <ul className="space-y-3 text-left">
                                    {included.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 group/item">
                                            <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0 group-hover/item:bg-cyan-500 group-hover/item:text-black transition-colors">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground text-sm group-hover/item:text-white transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Payment methods */}
                        <div className="border-t border-white/5 px-8 py-4 bg-white/[0.02] flex items-center justify-center gap-6 flex-wrap">
                            <div className="flex items-center gap-2 text-muted-foreground text-xs">
                                <Zap className="w-4 h-4 text-cyan-400" />
                                Pix
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-xs">
                                <CreditCard className="w-4 h-4 text-cyan-400" />
                                Cartão de crédito
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-xs">
                                <CreditCard className="w-4 h-4 text-cyan-400" aria-hidden />
                                Boleto
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
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <span>Compra segura</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span>Acesso imediato</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
