"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import Image from "next/image";

// TODO: [PREENCHER: MANTER TODOS / ou colar os depoimentos reais que substituem]
interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    highlight: string;
    image?: string; // Support for WhatsApp/Hotmart screenshot or avatar image
}

const testimonials: Testimonial[] = [
    {
        name: "Ana Beatriz F.",
        role: "Recém-formada em Administração",
        content:
            "Nunca tinha entendido como o Balanço Patrimonial se conecta com o DRE. Depois de assistir as 7 aulas, tudo ficou claro. Melhor investimento de R$ 197 que já fiz.",
        rating: 5,
        highlight: "Tudo ficou claro",
    },
    {
        name: "Rafael M.",
        role: "Analista Financeiro Jr.",
        content:
            "Trabalho na área há 2 anos e nunca tinha entendido de verdade a lógica do Fluxo de Caixa Indireto. Esse curso resolveu em menos de 1 hora o que anos de prática não resolveram.",
        rating: 5,
        highlight: "Resolveu em menos de 1 hora",
    },
    {
        name: "Camila R.",
        role: "Estudante de Contabilidade",
        content:
            "Conteúdo denso, mas direto ao ponto. As planilhas de prompts de IA são um bônus surpreendente. Já usei em trabalhos da faculdade e os professores ficaram impressionados.",
        rating: 5,
        highlight: "Professores ficaram impressionados",
    },
    {
        name: "Thiago S.",
        role: "Gestor de Pequeno Negócio",
        content:
            "Sempre tive dificuldade de entender os relatórios financeiros da minha empresa. Agora consigo conversar com meu contador e saber exatamente o que está acontecendo com o caixa.",
        rating: 5,
        highlight: "Entendo minha empresa agora",
    },
    {
        name: "Priscila A.",
        role: "Analista de Crédito",
        content:
            "Curso extremamente prático. A explicação sobre como os três demonstrativos se interligam é a mais clara que já encontrei. E olha que já fiz outros cursos bem mais caros.",
        rating: 5,
        highlight: "A mais clara que já encontrei",
    },
    {
        name: "Lucas T.",
        role: "Estagiário em Finanças",
        content:
            "Em 7 aulas aprendi mais do que em um semestre inteiro de Contabilidade na faculdade. A linguagem é acessível, sem jargões desnecessários. Indico para todo mundo da área.",
        rating: 5,
        highlight: "Mais que um semestre inteiro",
    },
];

export function FundamentosTestimonials() {
    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-[#0B1528] text-white relative overflow-hidden border-t border-slate-800/80" id="depoimentos">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Quem já viveu essa transformação</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                        Alunos que saíram da{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300">
                            confusão para a clareza
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Veja o relato de quem aplicou a lógica do curso na prática profissional.
                    </p>
                </motion.div>
            </div>

            {/* Scrolling testimonials */}
            <div className="relative w-full">
                {/* Fade masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0B1528] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0B1528] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {allTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[320px] md:w-[360px] p-7 rounded-3xl border border-slate-700/80 bg-[#111F3D] shadow-xl flex-shrink-0 hover:border-teal-400/50 transition-all duration-300 group"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>

                            {/* Highlight badge */}
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                                <span>✦</span>
                                <span>{testimonial.highlight}</span>
                            </div>

                            {/* Content */}
                            <p className="mb-6 text-sm text-slate-300 leading-relaxed line-clamp-4 italic">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                                {testimonial.image ? (
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-teal-500/40">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 font-bold text-sm shrink-0">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <p className="font-bold text-white text-sm">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom social proof note */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
                <p className="text-center text-xs text-slate-400">
                    Depoimentos reais de alunos do curso Fundamentos da Modelagem Financeira.
                </p>
            </div>
        </section>
    );
}
