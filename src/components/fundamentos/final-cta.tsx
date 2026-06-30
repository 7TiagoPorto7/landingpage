"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, Zap, ShieldCheck } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/F106435738T";

export function FundamentosCTAFinal() {
    return (
        <section className="py-24 md:py-32 relative bg-gradient-to-b from-teal-600 to-teal-800 overflow-hidden">
            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-300/10 blur-[120px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full" />
            </div>

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-8 border border-white/20">
                        🎯 Oferta por tempo limitado
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                        Aprenda os fundamentos.{" "}
                        <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300">
                            Direto ao ponto.
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-teal-100 font-medium mb-12 max-w-2xl mx-auto">
                        Sem enrolação, sem curso interminável. O que importa, bem
                        explicado, para você entender a lógica do modelo e sair
                        aplicando.
                    </p>

                    {/* Price block */}
                    <div className="mb-10">
                        <p className="text-lg text-teal-300 line-through mb-2">
                            De R$ 297
                        </p>
                        <p className="text-5xl md:text-6xl font-black text-white tracking-tight">
                            por{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200">
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
                            className="relative w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 rounded-2xl bg-white text-teal-700 font-bold text-lg md:text-xl hover:bg-amber-50 transition-all shadow-xl overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                QUERO COMEÇAR AGORA — R$ 197
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                        </Link>
                    </motion.div>

                    {/* Trust badges */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-teal-200 font-medium">
                        <span className="flex items-center gap-1.5">
                            <Lock className="w-4 h-4 text-teal-200" />
                            Compra segura
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Zap className="w-4 h-4 text-teal-200" />
                            Acesso imediato
                        </span>
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-teal-200" />
                            7 dias de garantia
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
