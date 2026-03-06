"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Building2, BarChart3, CheckCircle } from "lucide-react";

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

            <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text content */}
                    <div className="space-y-8">
                        {/* Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-wrap gap-3"
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
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                                O controle financeiro do seu negócio{" "}
                                <span className="relative">
                                    <span className="text-[#FFF2CC]">começa aqui.</span>
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#548235] rounded-full" />
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
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
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href={SK_BUY_URL}
                                id="hero-cta"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#548235] hover:bg-[#4a7230] text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-[#548235]/30 hover:shadow-[#548235]/50 hover:scale-105 group"
                            >
                                QUERO MEU STARTER KIT
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <a
                                href="#o-que-inclui"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-white/80 hover:text-white font-medium transition-colors"
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
                            className="flex items-center gap-2 text-white/60 text-sm"
                        >
                            <CheckCircle className="w-4 h-4 text-[#548235]" />
                            Funciona no Excel e Google Sheets · Pronto em 5 minutos
                        </motion.div>
                    </div>

                    {/* Right: Mockup image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-[#548235]/20 blur-3xl rounded-3xl" />
                        {/* Image wrapper with border effect */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <div className="absolute top-0 left-0 right-0 h-8 bg-[#2F5496] flex items-center px-3 gap-1.5 border-b border-white/10">
                                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                                <span className="ml-3 text-white/50 text-xs">
                                    Dashboard — Starter Kit Financeiro
                                </span>
                            </div>
                            <Image
                                src="/sk-dashboard.png"
                                alt="Dashboard do Starter Kit Financeiro mostrando KPIs e gráficos financeiros"
                                width={700}
                                height={500}
                                className="w-full object-cover mt-8"
                                priority
                            />
                        </div>
                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 hidden md:flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#548235] flex items-center justify-center text-white text-lg">
                                ✓
                            </div>
                            <div>
                                <p className="text-[#2F5496] font-bold text-sm">
                                    44 categorias
                                </p>
                                <p className="text-gray-500 text-xs">pré-configuradas</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="absolute -top-4 -right-4 bg-[#FFF2CC] rounded-xl shadow-xl px-4 py-3 hidden md:flex items-center gap-3"
                        >
                            <div className="text-2xl">🚀</div>
                            <div>
                                <p className="text-[#2F5496] font-bold text-sm">Pronto em</p>
                                <p className="text-[#548235] font-bold text-sm">5 minutos</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
