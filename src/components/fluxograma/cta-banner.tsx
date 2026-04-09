"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, TableProperties, TrendingUp, GitBranch } from "lucide-react";

export function FluxogramaCTA() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-28">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/8 blur-[120px] rounded-full" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container relative z-10 px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl overflow-hidden"
                >
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute -top-1 -left-1 -right-1 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse" />
                        <div className="absolute -bottom-1 -left-1 -right-1 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>

                    <div className="px-8 py-12 md:px-16 md:py-16 text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Template Pro — Modelo Financeiro Completo</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.15]"
                        >
                            Gostou do fluxograma?{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400">
                                Agora imagine tudo isso
                            </span>{" "}
                            funcionando no Excel.
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
                        >
                            O <strong className="text-white">Template Pro</strong> é o modelo financeiro com{" "}
                            <strong className="text-white">18 abas interligadas</strong> — DRE, Balanço, DFC, Valuation DCF,
                            Monte Carlo — tudo conectado e pronto para usar.
                        </motion.p>

                        {/* Feature Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-3 mb-10"
                        >
                            {[
                                { icon: TableProperties, text: "18 abas integradas" },
                                { icon: TrendingUp, text: "Valuation DCF completo" },
                                { icon: GitBranch, text: "Cenários e sensibilidade" },
                                { icon: Sparkles, text: "4 scripts Python inclusos" },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                                    <Icon className="w-4 h-4 text-emerald-400" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Link
                                href="/template-pro"
                                className="group relative inline-flex items-center gap-3 px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:scale-[1.03]"
                            >
                                <span>Conhecer o Template Pro</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <p className="mt-4 text-sm text-gray-500">
                                Guia explicativo em cada aba • Pronto para usar
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
