"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Video } from "lucide-react";
import { getDecoratedCheckoutUrl, trackCheckout } from "@/lib/tracking";

export function FundamentosAulaAmostra() {
    const [checkoutUrl, setCheckoutUrl] = useState("https://pay.hotmart.com/F106435738T");

    useEffect(() => {
        setCheckoutUrl(getDecoratedCheckoutUrl());
    }, []);

    return (
        <section id="aula-amostra" className="py-24 bg-[#0B1528] text-white relative overflow-hidden border-t border-slate-800/80">
            {/* Background Accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/10 blur-[160px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-500/15 text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-500/30 mb-4"
                >
                    <Video className="w-3.5 h-3.5" />
                    <span>Aula de Amostra</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
                >
                    Veja por dentro antes de comprar
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Um trecho real do curso. Se este é o nível de clareza que você procura, o resto das aulas segue o mesmo padrão.
                </motion.p>

                {/* Video Embed Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl aspect-video mb-10 group"
                >
                    {/* TODO: [PREENCHER: URL YouTube unlisted/Vimeo do trecho de aula] */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/60">
                        <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 fill-teal-300 ml-1" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
                            [ TODO: PREENCHER — URL YouTube unlisted/Vimeo do trecho de aula ]
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                            Assista a uma prévia de aula sobre a Conexão dos Demonstrativos
                        </h3>
                        <p className="text-xs md:text-sm text-slate-400 max-w-md">
                            Insira o link de embed da aula de amostra para permitir a reprodução direta aqui.
                        </p>
                    </div>
                </motion.div>

                {/* CTA Secundário */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center gap-2"
                >
                    <a
                        href={checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-14 px-8 text-base md:text-lg font-bold text-white transition-all rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105 shadow-lg group"
                        onClick={() => trackCheckout("sample_lesson", 197)}
                    >
                        <span className="flex items-center gap-2">
                            QUERO COMEÇAR AGORA — R$ 197
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>
                    <span className="text-xs text-slate-400">ou 12x de R$ 19,70 · Acesso imediato</span>
                </motion.div>
            </div>
        </section>
    );
}
