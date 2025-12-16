"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Para quem é este curso?",
        answer: "O curso é ideal para estudantes de finanças, analistas, contadores e empreendedores que desejam dominar a modelagem financeira para tomada de decisões estratégicas.",
    },
    {
        question: "Preciso ter conhecimento avançado em Excel?",
        answer: "Não. O curso começa com um módulo de nivelamento onde ensinamos todas as funções e atalhos necessários para acompanhar as aulas avançadas.",
    },
    {
        question: "O curso oferece certificado?",
        answer: "Sim! Ao concluir todas as aulas e exercícios, você receberá um certificado de conclusão reconhecido para enriquecer seu currículo.",
    },
    {
        question: "Como funciona a garantia de 7 dias?",
        answer: "Se por qualquer motivo você não ficar satisfeito com o curso, basta nos enviar um e-mail dentro do prazo de 7 dias após a compra que devolveremos 100% do seu dinheiro.",
    },
    {
        question: "Como posso tirar minhas dúvidas?",
        answer: "Você terá acesso a uma comunidade exclusiva de alunos e suporte direto com os instrutores para esclarecer qualquer dúvida sobre o conteúdo.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-black">
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Tire suas dúvidas sobre o curso e comece a estudar hoje mesmo.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden border rounded-xl bg-card border-white/5 hover:border-primary/20 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-primary transition-transform duration-200 shrink-0",
                                        openIndex === index ? "rotate-180" : ""
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
