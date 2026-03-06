"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ecosystem = [
    {
        number: "01",
        title: "Starter Kit Financeiro",
        badge: "Você está aqui",
        badgeBg: "bg-[#548235] text-white",
        description:
            "A base. DRE, Fluxo de Caixa, Dashboard e conciliação. Para organizar e ter clareza.",
        highlight: true,
        cta: null,
    },
    {
        number: "02",
        title: "Template Pro Finance",
        badge: "Próximo passo",
        badgeBg: "bg-[#2F5496] text-white",
        description:
            "Gestão financeira avançada para empresas em crescimento. Mais abas, mais controle.",
        highlight: false,
        cta: { label: "Conhecer o Template Pro", href: "/template-pro" },
    },
    {
        number: "03",
        title: "Consultoria Financeira",
        badge: "Sob medida",
        badgeBg: "bg-gray-200 text-gray-700",
        description:
            "Implementação personalizada, análise e acompanhamento com especialistas.",
        highlight: false,
        cta: { label: "Fale conosco", href: "mailto:tl.araujoporto@gmail.com" },
    },
];

export function SKEcosystem() {
    return (
        <section id="ecossistema" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
                >
                    <p className="text-[#548235] font-semibold uppercase tracking-wider text-sm mb-3">
                        Ecossistema Pro Finance
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F5496] mb-3">
                        O Starter Kit é só o começo.
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Conforme seu negócio cresce, suas ferramentas crescem junto.
                    </p>
                </motion.div>

                {/* Timeline cards */}
                <div className="relative max-w-5xl mx-auto mt-14">
                    {/* Connecting arrow (desktop) */}
                    <div className="hidden md:flex absolute top-14 left-0 right-0 items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
                        <div className="w-full flex items-center px-[15%]">
                            <div className="flex-1 h-0.5 bg-gradient-to-r from-[#548235] to-[#2F5496]" />
                            <div className="text-[#2F5496] text-2xl mx-2">→</div>
                            <div className="flex-1 h-0.5 bg-gradient-to-r from-[#2F5496] to-gray-300" />
                            <div className="text-gray-300 text-2xl mx-2">→</div>
                            <div className="flex-1 h-0.5 bg-gray-300" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 relative z-10">
                        {ecosystem.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`rounded-2xl p-7 border-2 transition-all duration-300 ${item.highlight
                                    ? "border-[#548235] bg-[#548235]/5 shadow-xl shadow-[#548235]/10"
                                    : "border-gray-200 bg-white hover:border-[#2F5496]/30 hover:shadow-lg"
                                    }`}
                            >
                                {/* Step number */}
                                <div className="flex items-center justify-between mb-5">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.highlight
                                            ? "bg-[#548235] text-white"
                                            : "bg-[#2F5496]/10 text-[#2F5496]"
                                            }`}
                                    >
                                        {item.number}
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeBg}`}
                                    >
                                        {item.badge}
                                    </span>
                                </div>

                                <h3
                                    className={`text-lg font-bold mb-3 ${item.highlight ? "text-[#548235]" : "text-[#2F5496]"
                                        }`}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    {item.description}
                                </p>

                                {item.cta && (
                                    <Link
                                        href={item.cta.href}
                                        className="text-[#2F5496] hover:text-[#548235] text-sm font-medium underline underline-offset-2 transition-colors"
                                    >
                                        {item.cta.label} →
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Closing phrase */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-gray-500 italic mt-10 max-w-2xl mx-auto text-sm"
                >
                    O Starter Kit organiza seus números. O Pro Finance aprofunda. A
                    consultoria transforma.
                </motion.p>
            </div>
        </section>
    );
}
