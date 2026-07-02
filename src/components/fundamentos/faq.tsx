"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Este curso é completo / cobre nível avançado?",
        answer:
            "Ele é focado: cobre os fundamentos, a estrutura do modelo e as conexões entre os demonstrativos, com profundidade. Não é um curso do zero ao avançado, e a proposta é exatamente essa: te entregar o que importa, direto ao ponto, para você construir uma base sólida sem perder tempo.",
        id: "faq-nivel",
    },
    {
        question: "Preciso saber contabilidade para acompanhar?",
        answer:
            "Não precisa ser contador. Basta ter uma noção básica do que é a DRE, o Balanço e o Fluxo de Caixa. A gente revisa a estrutura de cada um antes de conectá-los.",
        id: "faq-contabilidade",
    },
    {
        question: "Preciso saber Excel?",
        answer:
            "Conhecimento básico já é suficiente. A ferramenta é só o meio. O foco é a lógica do modelo.",
        id: "faq-excel",
    },
    {
        question: "Vou aprender a montar premissas e projeções?",
        answer:
            "O curso te dá a base: a estrutura e a dinâmica das conexões. Com isso bem entendido, construir premissas (que variam de negócio para negócio) se torna o passo natural seguinte.",
        id: "faq-premissas",
    },
    {
        question: "As aulas são ao vivo ou gravadas?",
        answer: "Gravadas, com acesso imediato após a compra.",
        id: "faq-formato",
    },
    {
        question: "E se eu não gostar?",
        answer:
            "Você tem 7 dias de garantia incondicional. Se em uma semana você sentir que o curso não é para você, é só pedir o reembolso pela própria Hotmart. Sem perguntas, sem burocracia.",
        id: "faq-garantia",
    },
];

export function FundamentosFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[#0B1528] text-white relative overflow-hidden border-t border-slate-800/80">
            {/* Ambient Accent Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/10 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-500/30 mb-3">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Dúvidas Frequentes</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Perguntas frequentes
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={faq.id}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                                    isOpen
                                        ? "border-teal-500/50 bg-[#111F3D] shadow-xl"
                                        : "border-slate-800 bg-[#0D1935] hover:border-slate-700"
                                }`}
                            >
                                <button
                                    id={faq.id}
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`font-bold text-base md:text-lg ${
                                            isOpen ? "text-teal-300" : "text-white"
                                        }`}
                                    >
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 shrink-0 text-teal-400 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {/* Static HTML rendering for SEO crawlers with CSS toggle */}
                                <div className={`px-5 pb-6 md:px-6 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/80 pt-4 ${isOpen ? "block" : "hidden"}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
