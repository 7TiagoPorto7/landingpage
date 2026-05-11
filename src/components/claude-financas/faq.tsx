"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "O guia é realmente gratuito?",
        a: "Sim, 100% gratuito. Basta inserir seu melhor e-mail e você recebe o material completo na hora. Sem pegadinha.",
    },
    {
        q: "Preciso ter experiência com IA para aproveitar?",
        a: "Não. O guia foi pensado tanto para quem nunca usou IA quanto para quem já usa mas quer resultados melhores na área financeira. Tudo é explicado passo a passo.",
    },
    {
        q: "Qual a diferença do Claude para o ChatGPT em finanças?",
        a: "O Claude tem raciocínio lógico superior, é mais preciso com números, cita fontes quando relevante e recusa inventar dados quando não tem certeza. Isso é crítico em finanças, onde precisão é tudo.",
    },
    {
        q: "Preciso pagar para usar o Claude?",
        a: "O Claude possui um plano gratuito que já permite usar muitos dos prompts do guia. Para uso intensivo e profissional, recomendamos o plano Pro. O guia cobre as duas opções.",
    },
    {
        q: "O conteúdo vale para qual área de finanças?",
        a: "O guia cobre FP&A, Controladoria, M&A, Valuation, Investment Banking, Tesouraria, Contabilidade e Consultoria Financeira. Não importa sua sub-área, terá conteúdo relevante.",
    },
    {
        q: "Vou receber spam?",
        a: "Não. Enviamos apenas conteúdo relevante sobre IA e finanças. Você pode cancelar a inscrição a qualquer momento com um clique.",
    },
];

export function CFFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Perguntas Frequentes
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full" />
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`border rounded-xl transition-all duration-300 ${
                                    isOpen
                                        ? "border-purple-500/30 bg-purple-500/5"
                                        : "border-border bg-card hover:border-white/20"
                                }`}
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : idx)
                                    }
                                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                                >
                                    <span className="font-semibold text-foreground pr-4">
                                        {faq.q}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isOpen ? "max-h-64 pb-5" : "max-h-0"
                                    }`}
                                >
                                    <p className="px-5 text-muted-foreground text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
