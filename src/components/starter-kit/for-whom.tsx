"use client";

import { motion } from "framer-motion";

const cards = [
    {
        icon: "🏢",
        badge: "Dono de negócio",
        title: "Você empreende e quer enxergar seus números",
        bullets: [
            "Quer saber se a empresa está dando lucro — de verdade",
            "Cansou de planilhas bagunçadas que não mostram nada",
            "Precisa de relatórios financeiros mas não quer (ou não pode) pagar um sistema caro",
            "Quer tomar decisões com base em dados, não em achismo",
        ],
        closing:
            "O Starter Kit te dá a visão financeira que todo empresário deveria ter.",
        bgColor: "bg-white",
        badgeColor: "bg-[#2F5496]/10 text-[#2F5496]",
        closingColor: "text-[#2F5496]",
        borderColor: "border-[#2F5496]/20 hover:border-[#2F5496]/50",
        id: "card-dono",
    },
    {
        icon: "📊",
        badge: "Profissional de finanças",
        title: "Você atende clientes e precisa de uma ferramenta de entrada",
        bullets: [
            "Quer um entregável profissional para o onboarding de novos clientes",
            "Precisa de uma base sólida antes de implementar sistemas mais complexos",
            "Busca padronizar a entrega para clientes menores sem perder qualidade",
            "Quer uma ponte para upsell de serviços mais completos (consultoria, BPO)",
        ],
        closing:
            "O Starter Kit é a ferramenta que faltava no seu portfólio de serviços.",
        bgColor: "bg-[#2F5496]",
        badgeColor: "bg-white/15 text-white",
        closingColor: "text-[#FFF2CC]",
        borderColor: "border-[#2F5496] hover:border-[#548235]",
        id: "card-profissional",
    },
];

export function SKForWhom() {
    return (
        <section id="para-quem" className="py-20 md:py-28 bg-[#F2F2F2]">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-[#548235] font-semibold uppercase tracking-wider text-sm mb-3">
                        Para quem é
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F5496]">
                        Um kit.{" "}
                        <span className="relative">
                            Dois caminhos.
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#548235] rounded-full" />
                        </span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            id={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`${card.bgColor} ${card.borderColor} border-2 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                        >
                            {/* Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <span className="text-4xl">{card.icon}</span>
                                <div>
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${card.badgeColor} mb-2`}
                                    >
                                        {card.badge}
                                    </span>
                                    <h3
                                        className={`text-xl font-bold leading-tight ${card.bgColor === "bg-[#2F5496]"
                                                ? "text-white"
                                                : "text-[#1a1a2e]"
                                            }`}
                                    >
                                        {card.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Bullets */}
                            <ul className="space-y-3 mb-6">
                                {card.bullets.map((bullet, idx) => (
                                    <li
                                        key={idx}
                                        className={`flex items-start gap-3 text-sm leading-relaxed ${card.bgColor === "bg-[#2F5496]"
                                                ? "text-white/80"
                                                : "text-gray-600"
                                            }`}
                                    >
                                        <span className="text-[#548235] mt-0.5 shrink-0 font-bold">
                                            ✓
                                        </span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            {/* Closing line */}
                            <p
                                className={`text-sm font-semibold italic border-t ${card.bgColor === "bg-[#2F5496]"
                                        ? "border-white/20"
                                        : "border-[#2F5496]/20"
                                    } pt-4 ${card.closingColor}`}
                            >
                                {card.closing}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
