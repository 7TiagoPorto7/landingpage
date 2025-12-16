"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Carlos Mendes",
        role: "Analista de Investment Banking",
        content: "O curso foi fundamental para minha aprovação no processo seletivo. A parte de valuation é explicada com uma clareza impressionante.",
        rating: 5,
    },
    {
        name: "Fernanda Oliveira",
        role: "Gerente Financeira",
        content: "Já trabalhava na área há anos, mas o curso me deu a estrutura e as melhores práticas que faltavam para profissionalizar meus modelos.",
        rating: 5,
    },
    {
        name: "Ricardo Santos",
        role: "Empreendedor",
        content: "Consegui montar o modelo financeiro da minha startup para apresentar a investidores. O feedback sobre a qualidade do material foi excelente.",
        rating: 5,
    },
    {
        name: "Juliana Costa",
        role: "Controller",
        content: "A didática é incrível. Mesmo temas complexos como LBO e M&A ficaram fáceis de entender. Recomendo para todos da área financeira.",
        rating: 5,
    },
    {
        name: "Pedro Alves",
        role: "Estudante de Economia",
        content: "O curso me ajudou a conseguir meu primeiro estágio em um fundo de Private Equity. O conhecimento prático fez toda a diferença na entrevista.",
        rating: 5,
    },
    {
        name: "Mariana Lima",
        role: "Consultora Financeira",
        content: "Templates excelentes e aulas direto ao ponto. Economizei horas de trabalho usando a estrutura ensinada no curso.",
        rating: 5,
    },
];

export function Testimonials() {
    // Duplicate testimonials for seamless loop
    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary/5 to-black pointer-events-none" />

            <div className="container px-4 mx-auto mb-16 relative z-10">
                <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
                    O que dizem nossos alunos
                </h2>
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex gap-8 w-max"
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
                            className="w-[350px] p-8 border rounded-2xl bg-white/5 border-white/10 backdrop-blur-sm flex-shrink-0 hover:border-primary/30 transition-colors"
                        >
                            <div className="flex gap-1 mb-4 text-amber-500">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="mb-6 text-lg italic text-muted-foreground line-clamp-4">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <p className="font-semibold text-white">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
