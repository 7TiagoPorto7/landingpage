"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Award, GraduationCap, Briefcase } from "lucide-react";

export function FundamentosInstrutor() {
    return (
        <section id="instrutor" className="py-24 bg-[#070D1B] text-white relative overflow-hidden border-t border-slate-800/80">
            {/* Background Accent Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[150px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-500/30 mb-3"
                    >
                        <span>Quem vai te ensinar</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-white"
                    >
                        Aprenda com quem vive a modelagem no dia a dia
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl p-[1px] bg-gradient-to-br from-teal-500/40 via-slate-700 to-cyan-500/40 shadow-2xl overflow-hidden"
                >
                    <div className="bg-[#0D1935] rounded-[23px] p-8 md:p-12 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                            {/* Photo Column (Left) */}
                            <div className="lg:col-span-5 flex flex-col items-center text-center">
                                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 mb-6 group ring-2 ring-teal-500/30">
                                    {/* TODO: [PREENCHER: caminho da foto profissional se houver nova foto] */}
                                    <Image
                                        src="/tiago-porto.png"
                                        alt="Tiago Porto — Analista de M&A e Instrutor"
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-extrabold text-white">Tiago Porto</h3>
                                <p className="text-teal-400 font-semibold text-sm mt-1 mb-4">
                                    Especialista em modelagem financeira
                                </p>

                                {/* LinkedIn button */}
                                <a
                                    href="https://www.linkedin.com/in/portotiago/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600/20 border border-sky-500/40 text-sky-300 text-xs font-semibold hover:bg-sky-600/30 transition-colors mb-4"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>Perfil no LinkedIn</span>
                                </a>

                                {/* Credibility Badges */}
                                <div className="flex flex-wrap justify-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                                        <Briefcase className="w-3.5 h-3.5 text-teal-400" />
                                        M&A & FP&A Prático
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                                        <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                                        Especialista em Finanças
                                    </span>
                                </div>
                            </div>

                            {/* Bio Text Column (Right) */}
                            <div className="lg:col-span-7 space-y-5 text-slate-300 text-base md:text-lg leading-relaxed">
                                <p className="italic text-teal-200 font-medium bg-teal-500/10 p-5 rounded-2xl border border-teal-500/30 text-lg leading-relaxed">
                                    "Modelagem financeira é o meu trabalho, não só o meu curso. Atuo em M&A construindo modelos e materiais que vão para a mesa de investidores, depois de anos em FP&A planejando e analisando as finanças de empresas de diferentes setores — de grupos com múltiplas unidades de negócio a consultorias de planejamento financeiro. Nessa trajetória, percebi que quase todo mundo trava no mesmo ponto: ninguém explica direito a lógica que conecta DRE, Balanço e Fluxo de Caixa. Criei este curso para resolver exatamente isso — do jeito que eu gostaria de ter aprendido: direto, sem enrolação e com profundidade onde importa."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
