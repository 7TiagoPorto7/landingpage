"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function FundamentosGarantia() {
    return (
        <section className="py-24 relative bg-black overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14 text-center"
                >
                    {/* Subtle gradient border glow */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-500/20 via-transparent to-cyan-500/5 pointer-events-none" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center justify-center mx-auto mb-8"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl" />
                                <div className="relative w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                                    <Shield className="w-10 h-10 text-cyan-400" />
                                </div>
                            </div>
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
                            Garantia Incondicional de{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">
                                7 Dias
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Você tem 7 dias para assistir às aulas, explorar o material e
                            decidir. Se em uma semana você sentir que o curso não é para
                            você, é só pedir o reembolso pela própria Hotmart — sem
                            perguntas, sem burocracia.{" "}
                            <span className="text-cyan-400 font-semibold">
                                O risco é todo nosso.
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
