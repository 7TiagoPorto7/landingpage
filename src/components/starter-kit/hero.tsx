"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Building2, BarChart3, CheckCircle } from "lucide-react";
import { gtagEvent } from "@/components/analytics";

const SK_BUY_URL = "#preco";

export function SKHero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#2F5496]">
            {/* Background gradient overlays */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2F5496] via-[#1e3a6e] to-[#0f2240]" />
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#548235]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    {/* Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                            <Building2 className="w-4 h-4 text-[#FFF2CC]" />
                            Para donos de negócio que querem clareza
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                            <BarChart3 className="w-4 h-4 text-[#FFF2CC]" />
                            Para profissionais de finanças que querem escala
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                            O controle financeiro do seu negócio{" "}
                            <span className="relative">
                                <span className="text-[#FFF2CC]">começa aqui.</span>
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#548235] rounded-full" />
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto"
                    >
                        DRE, Fluxo de Caixa e Dashboard automáticos em uma planilha
                        profissional. Preencha 6 colunas —{" "}
                        <strong className="text-white font-semibold">
                            o Starter Kit faz o resto.
                        </strong>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                    >
                        <Link
                            href={SK_BUY_URL}
                            id="hero-cta"
                            className="inline-flex items-center justify-center px-10 py-5 bg-[#548235] hover:bg-[#4a7230] text-white font-bold text-xl rounded-xl transition-all duration-200 shadow-lg shadow-[#548235]/30 hover:shadow-[#548235]/50 hover:scale-105 group"
                            onClick={() => gtagEvent("click_cta", { label: "Quero Meu Starter Kit", section: "hero", page: "starter-kit" })}
                        >
                            QUERO MEU STARTER KIT
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <a
                            href="#o-que-inclui"
                            className="inline-flex items-center justify-center gap-2 px-8 py-5 text-white hover:bg-white/10 font-medium rounded-xl transition-colors"
                            onClick={() => gtagEvent("click_cta", { label: "Veja o que está incluso", section: "hero", page: "starter-kit" })}
                        >
                            Veja o que está incluso
                            <ArrowDown className="w-4 h-4 animate-bounce" />
                        </a>
                    </motion.div>

                    {/* Trust element */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm md:text-base pt-8"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#548235]" />
                            Funciona no Excel e Google Sheets
                        </div>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-white/30" />
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#548235]" />
                            Pronto em 5 minutos
                        </div>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-white/30" />
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#548235]" />
                            44 categorias pré-configuradas
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
