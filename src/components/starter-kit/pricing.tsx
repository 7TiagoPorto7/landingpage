"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Shield, Zap, CreditCard } from "lucide-react";

const SK_BUY_URL = "https://pay.hotmart.com/YOUR_PRODUCT_ID"; // To be updated with real URL

const included = [
    "DRE automática — 12 meses",
    "Fluxo de Caixa método direto",
    "Dashboard com 10 KPIs e 4 gráficos",
    "Conciliação bancária integrada",
    "44 subcategorias pré-configuradas",
    "Aba GUIA com passo a passo completo",
    "Funciona no Excel e Google Sheets",
    "Atualizações futuras incluídas",
];

export function SKPricing() {
    return (
        <section id="preco" className="py-20 md:py-28 bg-[#F2F2F2] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-[#2F5496] -skew-y-2 origin-top-left" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 pt-8"
                >
                    <p className="text-[#FFF2CC] font-semibold uppercase tracking-wider text-sm mb-3">
                        Oferta
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Invista uma vez. Use para sempre.
                    </h2>
                </motion.div>

                {/* Pricing card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="max-w-lg mx-auto relative"
                >
                    {/* Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-[#548235] to-[#2F5496] rounded-3xl opacity-40 blur-lg" />

                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#2F5496]/20">
                        {/* Top badge */}
                        <div className="bg-[#2F5496] text-center py-3 px-6">
                            <span className="text-white font-bold text-sm uppercase tracking-widest">
                                STARTER KIT FINANCEIRO
                            </span>
                        </div>

                        <div className="p-8 md:p-10">
                            {/* Price */}
                            <div className="text-center mb-8">
                                <div className="text-red-500 font-semibold text-base mb-1 line-through decoration-2">
                                    R$ 197,00
                                </div>
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-[#2F5496] font-bold text-xl">R$</span>
                                    <span className="text-[#2F5496] font-bold text-6xl leading-none">
                                        67
                                    </span>
                                    <span className="text-[#2F5496] font-bold text-3xl">,90</span>
                                </div>
                                <p className="text-[#548235] font-semibold text-sm mt-2">
                                    pagamento único · acesso vitalício
                                </p>
                            </div>

                            {/* CTA */}
                            <Link
                                href={SK_BUY_URL}
                                id="pricing-cta"
                                className="block w-full text-center py-5 bg-[#548235] hover:bg-[#4a7230] text-white font-bold text-xl rounded-xl transition-all duration-200 shadow-lg shadow-[#548235]/40 hover:shadow-[#548235]/60 hover:scale-[1.02] mb-4"
                            >
                                GARANTIR MEU STARTER KIT →
                            </Link>

                            {/* Guarantee */}
                            <p className="text-center text-gray-500 text-sm mb-8 flex items-center justify-center gap-2">
                                <Shield className="w-4 h-4 text-[#548235]" />
                                🔒 Garantia de 7 dias — não gostou, devolvemos 100%
                            </p>

                            {/* Features list */}
                            <div className="border-t border-gray-100 pt-6">
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                                    O que está incluso:
                                </p>
                                <ul className="space-y-3">
                                    {included.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#548235]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-[#548235]" />
                                            </div>
                                            <span className="text-gray-700 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Payment methods */}
                        <div className="border-t border-gray-100 px-8 py-4 bg-[#F2F2F2] flex items-center justify-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <Zap className="w-4 h-4 text-[#548235]" />
                                Pix
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <CreditCard className="w-4 h-4 text-[#2F5496]" />
                                Cartão de crédito
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <CreditCard className="w-4 h-4 text-[#2F5496]" aria-hidden />
                                Boleto
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Reassurance texts */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 text-center grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
                >
                    {[
                        { icon: "🔒", text: "Compra 100% segura" },
                        { icon: "⚡", text: "Acesso imediato" },
                        { icon: "♾️", text: "Uso vitalício" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center gap-2 text-gray-600 text-sm bg-white rounded-xl py-3 px-4 shadow-sm"
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.text}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
