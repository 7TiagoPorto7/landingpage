"use client";

import { Check } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-black">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/spreadsheet-bg.png')",
                        backgroundSize: "800px",
                        backgroundRepeat: "repeat",
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "800px 800px"]
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Invista na sua Carreira
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Acesso a todo o conteúdo, atualizações e comunidade exclusiva.
                    </p>
                </div>

                <div className="relative max-w-lg mx-auto">
                    {/* Glowing Border Effect */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500 rounded-[26px] opacity-75 blur-sm animate-pulse" />

                    <div className="relative overflow-hidden border rounded-3xl bg-card border-white/10 h-full">
                        <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-black text-xs font-bold rounded-bl-xl z-20">
                            MAIS POPULAR
                        </div>

                        <div className="p-8 md:p-12 relative z-10">
                            <h3 className="mb-2 text-2xl font-bold text-primary">Acesso Completo</h3>
                            <p className="mb-8 text-muted-foreground">Tudo o que você precisa para dominar modelagem financeira.</p>

                            <div className="flex flex-col mb-8">
                                <span className="text-sm text-muted-foreground line-through mb-1">De R$ 1.997 por apenas</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-bold tracking-tighter text-white">R$ 697,90</span>
                                    <span className="text-xl text-muted-foreground">/à vista</span>
                                </div>
                                <p className="text-sm text-primary mt-2 font-medium">Ou 10x de R$ 69,79</p>
                            </div>

                            <Link
                                href="#"
                                className="relative flex items-center justify-center w-full h-16 mb-10 text-lg font-bold text-black transition-all rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Garantir Minha Vaga
                                    <Check className="w-5 h-5" />
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                            </Link>

                            <div className="space-y-4">
                                <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">O que está incluso:</p>
                                <ul className="space-y-4 text-left">
                                    {[
                                        "Acesso Vitalício ao Curso",
                                        "Certificado de Conclusão",
                                        "Planilhas e Modelos Editáveis",
                                        "Suporte direto com o instrutor",
                                        "Atualizações gratuitas de conteúdo",
                                        "Garantia Incondicional de 7 dias",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 group/item">
                                            <div className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-primary/10 text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-black transition-colors">
                                                <Check className="w-4 h-4" />
                                            </div>
                                            <span className="text-muted-foreground group-hover/item:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
