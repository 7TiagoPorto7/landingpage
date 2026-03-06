"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const tabs = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: "📊",
        image: "/sk-dashboard.png",
        alt: "Dashboard do Starter Kit Financeiro com KPIs e gráficos automáticos",
        description:
            "Visão geral completa do negócio com 10 KPIs e 4 gráficos automáticos.",
    },
    {
        id: "dre",
        label: "DRE",
        icon: "📈",
        image: "/sk-dre.png",
        alt: "Demonstração de Resultado do Exercício automática, mês a mês",
        description:
            "DRE completa do Resultado Líquido, mês a mês, com total anual automático.",
    },
    {
        id: "fluxo",
        label: "Fluxo de Caixa",
        icon: "💰",
        image: "/sk-cashflow.png",
        alt: "Fluxo de Caixa método direto com conciliação bancária",
        description:
            "Fluxo de caixa pelo método direto, segregado por atividades, com saldo automático.",
    },
    {
        id: "lancamentos",
        label: "Lançamentos",
        icon: "📝",
        image: "/sk-lancamentos.png",
        alt: "Aba de lançamentos com 6 colunas de preenchimento principais",
        description:
            "Preenchimento simples: 6 campos por lançamento. As demais colunas são automáticas.",
    },
];

const SK_BUY_URL = "#preco";

export function SKScreenshots() {
    const [active, setActive] = useState(0);

    return (
        <section id="demonstracao" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[#548235] font-semibold uppercase tracking-wider text-sm mb-3">
                        Demonstração
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F5496]">
                        Veja por dentro
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                        Cada aba foi desenhada para ser intuitiva e profissional.
                    </p>
                </motion.div>

                {/* Tab nav */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab.id}
                            id={`tab-${tab.id}`}
                            onClick={() => setActive(i)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 ${active === i
                                    ? "bg-[#2F5496] text-white shadow-lg shadow-[#2F5496]/30"
                                    : "bg-[#F2F2F2] text-gray-600 hover:bg-[#2F5496]/10 hover:text-[#2F5496]"
                                }`}
                        >
                            <span>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Image display */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                        >
                            {/* Browser bar */}
                            <div className="bg-[#2F5496] flex items-center px-4 py-2.5 gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                                <span className="ml-3 text-white/50 text-xs flex items-center gap-2">
                                    {tabs[active].icon} {tabs[active].label} — Starter Kit
                                    Financeiro
                                </span>
                            </div>
                            <Image
                                src={tabs[active].image}
                                alt={tabs[active].alt}
                                width={1000}
                                height={600}
                                className="w-full object-cover"
                            />
                            {/* Description overlay */}
                            <div className="bg-[#F2F2F2] px-6 py-4 border-t border-gray-200">
                                <p className="text-[#2F5496] font-medium text-sm">
                                    {tabs[active].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA below */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <Link
                        href={SK_BUY_URL}
                        id="screenshots-cta"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#548235] hover:bg-[#4a7230] text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-[#548235]/30 hover:scale-105"
                    >
                        QUERO MEU STARTER KIT →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
