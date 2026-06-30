"use client";

import { motion } from "framer-motion";
import { Star, Users, TrendingUp, Award } from "lucide-react";

const testimonials = [
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
    {
        name: "Débora N.",
        role: "Auxiliar Administrativo",
        content:
            "Queria entender finanças para crescer na empresa. O curso é simples sem ser superficial. Consegui apresentar uma análise de resultados para meu gestor e recebi elogios.",
        rating: 5,
        highlight: "Recebi elogios do gestor",
    },
    {
        name: "Marcos P.",
        role: "Empreendedor Digital",
        content:
            "Montei a projeção financeira do meu negócio usando a estrutura das aulas. Ficou profissional o suficiente para apresentar em uma reunião com investidor-anjo. Valeu cada centavo.",
        rating: 5,
        highlight: "Apresentei para investidor-anjo",
    },
];

const socialProofStats = [
    {
        icon: Users,
        value: "+500",
        label: "Alunos matriculados",
        color: "text-teal-700",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-200",
    },
    {
        icon: Star,
        value: "4.9",
        label: "Avaliação média",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
    },
    {
        icon: TrendingUp,
        value: "97%",
        label: "Recomendam o curso",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
    },
    {
        icon: Award,
        value: "7 dias",
        label: "Garantia total",
        color: "text-violet-600",
        bgColor: "bg-violet-50",
        borderColor: "border-violet-200",
    },
];

export function FundamentosTestimonials() {
    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="depoimentos">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/6 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-amber-500/6 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-teal-500/6 blur-[100px] rounded-full" />
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-amber-50 border border-amber-200 text-amber-700 backdrop-blur-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Quem já passou por aqui</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                        Alunos que saíram da{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500">
                            confusão para a clareza
                        </span>
                    </h2>

                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Veja o que dizem quem investiu R$ 197 e finalmente entendeu como os
                        três demonstrativos financeiros se conectam.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
                >
                    {socialProofStats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50 border ${stat.borderColor}`}
                        >
                            <div className={`w-10 h-10 rounded-full ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center mb-3`}>
                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                            </div>
                            <div className={`text-2xl md:text-3xl font-black ${stat.color} mb-1`}>
                                {stat.value}
                            </div>
                            <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scrolling testimonials */}
            <div className="relative w-full">
                {/* Fade masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {allTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[340px] md:w-[380px] p-7 rounded-2xl border border-slate-200 bg-white shadow-sm flex-shrink-0 hover:border-teal-300 hover:shadow-md transition-all duration-300 group"
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
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
                                <span>✦</span>
                                <span>{testimonial.highlight}</span>
                            </div>

                            {/* Content */}
                            <p className="mb-6 text-sm md:text-base text-slate-600 leading-relaxed line-clamp-4 italic">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 border border-teal-200 flex items-center justify-center text-teal-700 font-bold text-sm flex-shrink-0">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800 text-sm">
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-sm text-slate-400"
                >
                    Depoimentos reais de alunos do curso Fundamentos da Modelagem Financeira.
                </motion.p>
            </div>
        </section>
    );
}
