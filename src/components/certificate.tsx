"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

export function Certificate() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary/10 to-black pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                            <Award className="w-4 h-4" />
                            <span>Reconhecimento Profissional</span>
                        </div>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                            Certificado de Conclusão <br />
                            <span className="text-gradient-primary">Reconhecido pelo Mercado</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Ao finalizar o curso, você receberá um certificado oficial comprovando sua expertise em Modelagem Financeira, Valuation e Excel Avançado.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Válido em todo o território nacional",
                                "Ideal para enriquecer seu currículo e LinkedIn",
                                "Comprovação de horas complementares",
                                "Autenticidade verificável via QR Code",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full opacity-30" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="/certificate_mockup_1765852371603.png"
                                alt="Certificado de Conclusão Modelagem Financeira"
                                className="w-full h-auto object-cover"
                            />
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
