"use client";

import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

export function FluxogramaHero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28 bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/15 blur-[120px] rounded-full opacity-50 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/15 blur-[120px] rounded-full opacity-50 animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/8 blur-[100px] rounded-full opacity-40" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container relative z-10 px-4 mx-auto text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 backdrop-blur-sm"
                >
                    <GitBranch className="w-4 h-4" />
                    <span>Guia Visual Interativo</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-5xl mx-auto mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-[1.1]"
                >
                    Como integrar{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">DRE</span>,{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Balanço Patrimonial</span>{" "}
                    e{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Fluxo de Caixa</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-8 text-lg text-gray-400 md:text-xl leading-relaxed"
                >
                    Entenda de forma <strong className="text-white">visual e didática</strong> como os três demonstrativos financeiros se conectam entre si.
                    Cada seta e destaque mostra exatamente <strong className="text-white">de onde vem e para onde vai</strong> cada número.
                </motion.p>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    {[
                        { color: "emerald", label: "DRE → DFC", desc: "Lucro Líquido, Depreciação" },
                        { color: "blue", label: "DFC → Balanço", desc: "Saldo de Caixa" },
                        { color: "amber", label: "DRE → Balanço", desc: "Lucros Acumulados" },
                        { color: "violet", label: "Premissas", desc: "PMR, PMP, PME → Capital de Giro" },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">
                            <span className={`w-2.5 h-2.5 rounded-full ${
                                item.color === "emerald" ? "bg-emerald-400" :
                                item.color === "blue" ? "bg-blue-400" :
                                item.color === "violet" ? "bg-violet-400" : "bg-amber-400"
                            }`} />
                            <span className="text-white font-medium">{item.label}</span>
                            <span className="text-gray-500 hidden sm:inline">— {item.desc}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
