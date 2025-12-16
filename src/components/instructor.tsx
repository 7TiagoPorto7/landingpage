"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

export function Instructor() {
    return (
        <section className="py-24 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/instructor_headshot.png"
                                alt="Instrutor de Modelagem Financeira"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white">Carlos Mendes</h3>
                                <p className="text-primary font-medium">Especialista em Valuation & M&A</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <p className="text-lg text-muted-foreground">
                            Com mais de 15 anos de experiência em bancos de investimento e consultorias de elite, Carlos já liderou transações que somam mais de R$ 2 bilhões.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Sua metodologia combina o rigor técnico exigido por grandes instituições com uma didática prática e direta, focada no que realmente importa para sua carreira.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
