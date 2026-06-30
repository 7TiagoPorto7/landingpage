"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

function FAQItem({
    faq,
    isOpen,
    onToggle,
}: {
    faq: (typeof faqs)[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                isOpen
                    ? "border-teal-400 shadow-sm"
                    : "border-slate-200 hover:border-slate-300"
            }`}
        >
            <button
                id={faq.id}
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
            >
                <span
                    className={`font-semibold text-sm md:text-base ${
                        isOpen ? "text-teal-700" : "text-slate-800"
                    }`}
                >
                    {faq.question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 shrink-0 text-teal-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FundamentosFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-teal-700 font-semibold uppercase tracking-wider text-sm mb-3">
                        Dúvidas Frequentes
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Perguntas frequentes
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openIndex === i}
                            onToggle={() =>
                                setOpenIndex(openIndex === i ? null : i)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
