"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { gtagEvent } from "@/components/analytics";

const CHECKOUT_URL = "https://pay.hotmart.com/F106435738T";

export function FundamentosCTAFinal() {
    return (
        <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#070D1B] via-[#0B1528] to-[#081020] text-white overflow-hidden">
            {/* Wave grid lines overlay inspired by design sample */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 600"
                preserveAspectRatio="none"
            >
                <path d="M-100 100 Q 300 500 700 200 T 1300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M-100 150 Q 300 550 700 250 T 1300 350" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M-100 200 Q 300 600 700 300 T 1300 400" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M-100 250 Q 300 650 700 350 T 1300 450" fill="none" stroke="#0EA5E9" strokeWidth="1.2" />
                <path d="M-100 300 Q 300 700 700 400 T 1300 500" fill="none" stroke="#0284C7" strokeWidth="1" opacity="0.6" />
            </svg>

            {/* Radial glow accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[160px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge container inspired by design sample */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white text-slate-900 shadow-xl mb-8 border border-slate-100">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                            Curso Prático
                        </span>
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold">
                            <span>Modelagem Financeira</span>
                            <TrendingUp className="w-3.5 h-3.5" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                        Aprenda os fundamentos.{" "}
                        <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400">
                            Direto ao ponto.
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Sem enrolação, sem curso interminável. O que importa, bem
                        explicado, para você entender a lógica do modelo e sair
                        aplicando.
                    </p>

                    {/* Price block */}
                    <div className="mb-10">
                        <p className="text-lg text-slate-400 line-through mb-2">
                            De R$ 297
                        </p>
                        <p className="text-5xl md:text-6xl font-black text-white tracking-tight">
                            por{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">
                                R$ 197
                            </span>
                        </p>
                    </div>

                    {/* CTA Button with shimmer */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="mb-10"
                    >
                        <Link
                            href={CHECKOUT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-lg md:text-xl hover:brightness-110 transition-all shadow-xl shadow-amber-500/20 overflow-hidden group"
                            onClick={() => gtagEvent("begin_checkout", { label: "Quero Começar Agora", value: 197, currency: "BRL", page: "fundamentos", section: "final_cta" })}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                QUERO COMEÇAR AGORA | R$ 197
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                        </Link>
                    </motion.div>

                    {/* Trust badges */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5">
                            <Lock className="w-4 h-4 text-amber-400" />
                            Compra segura
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Zap className="w-4 h-4 text-amber-400" />
                            Acesso imediato
                        </span>
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-amber-400" />
                            7 dias de garantia
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
