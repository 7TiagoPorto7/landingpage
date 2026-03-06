"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Preciso entender de contabilidade?",
        answer:
            "Não. A planilha vem com guia passo a passo, 44 categorias prontas e exemplos práticos. Se você sabe preencher uma tabela no Excel, você consegue usar.",
        id: "faq-contabilidade",
    },
    {
        question: "Funciona no Google Sheets?",
        answer:
            "Sim. O Starter Kit foi construído no Excel mas é compatível com Google Sheets.",
        id: "faq-google-sheets",
    },
    {
        question: "Sou consultor financeiro. Posso usar com meus clientes?",
        answer:
            "Sim, e esse é um dos principais usos. O Starter Kit funciona como entregável profissional de onboarding. Você entrega para o cliente, ele preenche os lançamentos, e vocês acompanham juntos.",
        id: "faq-consultor",
    },
    {
        question: "Qual a diferença para o Template Pro Finance?",
        answer:
            "O Starter Kit é a base: DRE, Fluxo de Caixa e Dashboard para quem está organizando as finanças. O Pro Finance é para gestão avançada, com recursos adicionais para empresas em crescimento.",
        id: "faq-diferenca-pro",
    },
    {
        question: "É pagamento único ou assinatura?",
        answer:
            "Pagamento único. Você paga uma vez e usa para sempre. Sem mensalidade, sem renovação.",
        id: "faq-pagamento",
    },
    {
        question: "E se eu não gostar?",
        answer:
            "Garantia incondicional de 7 dias. Se não atender suas expectativas, devolvemos 100% do valor. Sem perguntas.",
        id: "faq-garantia",
    },
    {
        question: "Posso personalizar as categorias?",
        answer:
            "Sim. Você pode adicionar novas subcategorias seguindo o padrão da aba Categorias. A estrutura é aberta e flexível.",
        id: "faq-categorias",
    },
    {
        question: "Serve para qual tipo de empresa?",
        answer:
            "Ideal para prestadores de serviço, consultores, agências, freelancers PJ, escritórios e microempresas de até 20 funcionários.",
        id: "faq-empresa",
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
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen
                    ? "border-[#2F5496] shadow-md"
                    : "border-gray-200 hover:border-[#2F5496]/30"
                }`}
        >
            <button
                id={faq.id}
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-[#F2F2F2] transition-colors"
                aria-expanded={isOpen}
            >
                <span className={`font-semibold text-sm md:text-base ${isOpen ? "text-[#2F5496]" : "text-[#1a1a2e]"}`}>
                    {faq.question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#2F5496] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
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
                        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed bg-white">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function SKFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[#548235] font-semibold uppercase tracking-wider text-sm mb-3">
                        Dúvidas
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F5496]">
                        Perguntas frequentes
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
