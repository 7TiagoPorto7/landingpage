"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "Preciso saber Excel avançado?",
            a: "Não. A planilha já traz 15 prompts básicos pra você começar. O objetivo é justamente a IA fazer o trabalho pesado por você, independente do seu nível atual."
        },
        {
            q: "Funciona com qual versão do Excel?",
            a: "Recomendamos Excel 365 (desktop ou online) com o Claude aberto na aba ao lado (ou usando add-ins de IA que conectam via API). A lógica dos prompts funciona universalmente."
        },
        {
            q: "Isso é um curso?",
            a: "Não. É uma ferramenta prática voltada para produtividade. Você não precisa assistir a 40 horas de vídeo. É só abrir a planilha, copiar a instrução que precisa, colar no Claude e ver a mágica acontecer."
        },
        {
            q: "Como eu recebo o material?",
            a: "O acesso é imediato. Assim que o pagamento for confirmado, você recebe um e-mail com o link direto para download seguro do seu arquivo .xlsx."
        },
        {
            q: "E se eu não gostar?",
            a: "Você tem 7 dias de garantia incondicional. Se achar que a planilha não te economizou pelo menos 10 horas de trabalho na primeira semana, devolvemos 100% do seu dinheiro, sem perguntas."
        },
        {
            q: "Funciona com ChatGPT também?",
            a: "Sim! Os prompts foram otimizados e extensivamente testados no Claude (por ele ser atualmente superior em lógica matemática e análise de dados complexa), mas a estrutura de engenharia de prompt funciona perfeitamente bem no ChatGPT Plus ou Gemini Advanced."
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Ainda na dúvida se isso vai economizar seu tempo?
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-800/30 border-primary/30 shadow-md' : 'bg-transparent hover:bg-slate-800/20'
                                }`}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center bg-transparent focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-primary' : 'text-slate-200'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
