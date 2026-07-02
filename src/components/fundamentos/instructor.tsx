"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Briefcase, GraduationCap, Quote } from "lucide-react";

export function FundamentosInstrutor() {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
            {/* Background Accent Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3"
                    >
                        Seu Instrutor
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
                    >
                        Aprenda com quem vive a modelagem no dia a dia
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100/70 rounded-3xl border border-slate-200/80 p-8 md:p-12 shadow-sm relative overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        {/* Photo Column */}
                        <div className="lg:col-span-5 flex flex-col items-center text-center">
                            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white mb-6 group">
                                <Image
                                    src="/tiago-porto.png"
                                    alt="Tiago Porto — Analista de M&A e Instrutor"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900">Tiago Porto</h3>
                            <p className="text-teal-700 font-medium text-sm mt-1 mb-4">
                                Analista de M&A | MBA em Modelagem Financeira, Valuation e M&A (PUC Minas)
                            </p>

                            {/* Credibility Badges */}
                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
                                    <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                                    M&A & FP&A
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
                                    <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                                    MBA PUC Minas
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
                                    <Award className="w-3.5 h-3.5 text-teal-600" />
                                    Prática de Mercado
                                </span>
                            </div>
                        </div>

                        {/* Bio Text Column */}
                        <div className="lg:col-span-7 space-y-5 text-slate-600 text-base md:text-lg leading-relaxed">
                            <div className="relative pl-6 border-l-4 border-teal-500 bg-teal-50/50 p-4 rounded-r-xl">
                                <Quote className="w-8 h-8 text-teal-500/30 absolute -top-2 -left-2 -z-10" />
                                <p className="font-semibold text-slate-900 text-lg italic">
                                    "Modelagem financeira é o meu trabalho, não só o meu curso."
                                </p>
                            </div>

                            <p>
                                Atuo em M&A construindo modelos e materiais que vão para a mesa de investidores, depois de anos em FP&A planejando e analisando as finanças de empresas de diferentes setores — de grupos com múltiplas unidades de negócio a consultorias de planejamento financeiro.
                            </p>

                            <p>
                                Nessa trajetória, percebi que quase todo mundo trava no mesmo ponto: <strong className="text-slate-900 font-semibold">ninguém explica direito a lógica que conecta DRE, Balanço e Fluxo de Caixa.</strong>
                            </p>

                            <p className="text-slate-800 font-medium bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                                Criei este curso para resolver exatamente isso — do jeito que eu gostaria de ter aprendido: <span className="text-teal-700 font-bold">direto, sem enrolação e com profundidade onde importa.</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
