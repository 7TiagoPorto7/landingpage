"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

import { MazeGrid } from "@/components/ui/maze-grid";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-black">
            {/* Maze Background Animation */}
            <MazeGrid />

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/20 blur-[120px] rounded-full opacity-40 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/20 blur-[120px] rounded-full opacity-40 animate-pulse delay-1000" />
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/10 blur-[100px] rounded-full opacity-30" />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-primary backdrop-blur-sm"
                >
                    <TrendingUp className="w-4 h-4" />
                    <span>Modelagem Financeira na Prática</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-5xl mx-auto mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
                >
                    Domine a Arte da <br />
                    <span className="text-gradient-primary drop-shadow-sm">Modelagem Financeira</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-10 text-lg text-muted-foreground md:text-xl"
                >
                    Aprenda a construir modelos financeiros robustos, realizar valuations precisos e tomar decisões de investimento baseadas em dados. Do zero ao avançado.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="#pricing"
                        className="relative inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-black transition-all duration-300 rounded-full bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center">
                            Começar Agora
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                    </Link>
                    <Link
                        href="#curriculum"
                        className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium transition-colors rounded-full border border-white/10 hover:bg-white/5 hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        Ver Grade Curricular
                    </Link>
                </motion.div>

                {/* Video Player Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="relative max-w-4xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
                >
                    <div className="aspect-video bg-black/50 relative flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        {/* Thumbnail or Placeholder Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 opacity-50" />

                        {/* Play Button */}
                        <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 text-black shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="absolute bottom-6 text-sm font-medium text-white/80 tracking-wide uppercase">Assista ao Trailer do Curso</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
