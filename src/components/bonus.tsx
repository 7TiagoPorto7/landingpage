"use client";

import { Calculator, Code, FileSpreadsheet, Gift } from "lucide-react";
import { motion } from "framer-motion";

const bonuses = [
    {
        icon: FileSpreadsheet,
        title: "Pack de Modelos Prontos",
        description: "Templates profissionais de Valuation, DRE, LBO e M&A prontos para usar.",
        value: "R$ 497",
        image: "/Users/tiagoporto/.gemini/antigravity/brain/739acb02-0f72-4759-a5de-96ccd8339843/bonus_templates_1765809781435.png",
    },
    {
        icon: Calculator,
        title: "Curso de HP12C",
        description: "Domine a calculadora financeira mais usada no mercado com aulas práticas.",
        value: "R$ 297",
        image: "/Users/tiagoporto/.gemini/antigravity/brain/739acb02-0f72-4759-a5de-96ccd8339843/bonus_hp12c_1765809887094.png",
    },
    {
        icon: Code,
        title: "Python para Finanças",
        description: "Introdução à programação para automatizar análises e manipular dados financeiros.",
        value: "R$ 597",
        image: "/Users/tiagoporto/.gemini/antigravity/brain/739acb02-0f72-4759-a5de-96ccd8339843/bonus_python_1765810268107.png",
    },
];

export function Bonus() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full opacity-30" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full opacity-30" />

                {/* Blurred 3D Gifts */}
                <div className="absolute top-10 left-[-5%] w-64 h-64 opacity-40 blur-sm animate-pulse">
                    <img src="/3d_gift_blue_black_1765852176786.png" alt="" className="w-full h-full object-contain rotate-12" />
                </div>
                <div className="absolute bottom-10 right-[-5%] w-80 h-80 opacity-40 blur-sm animate-pulse delay-1000">
                    <img src="/3d_gift_blue_black_1765852176786.png" alt="" className="w-full h-full object-contain -rotate-12" />
                </div>
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        <Gift className="w-4 h-4" />
                        <span>Bônus Exclusivos</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Leve também esses presentes
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Ao se inscrever hoje, você ganha acesso gratuito a estes conteúdos complementares.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {bonuses.map((bonus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative overflow-hidden border rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border-white/10 group hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-colors" />

                            <div className="p-8 flex flex-col items-center text-center h-full">
                                <div className="mb-6 relative">
                                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/40 transition-colors" />
                                    <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                                        <bonus.icon className="w-10 h-10" />
                                    </div>
                                </div>

                                <h3 className="mb-3 text-2xl font-bold group-hover:text-blue-500 transition-colors">{bonus.title}</h3>
                                <p className="text-muted-foreground mb-6 text-sm flex-1">{bonus.description}</p>

                                <div className="w-full pt-6 border-t border-white/10 flex flex-col gap-2">
                                    <div className="text-sm text-muted-foreground line-through">
                                        Valor: {bonus.value}
                                    </div>
                                    <div className="text-lg font-bold text-blue-500 animate-pulse">
                                        GRÁTIS HOJE
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
