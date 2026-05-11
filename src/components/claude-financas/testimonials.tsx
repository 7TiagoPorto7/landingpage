import { Star } from "lucide-react";

export function CFTestimonials() {
    const testimonials = [
        {
            name: "Rafael M.",
            role: "Analista de FP&A — Multinacional",
            text: "Eu gastava 4 horas montando o relatório mensal de variância. Com os prompts do guia, faço em 20 minutos. O Claude não só calcula, ele INTERPRETA os dados. Meu diretor achou que eu contratei um estagiário novo.",
            stars: 5,
        },
        {
            name: "Carolina S.",
            role: "Consultora de M&A — Boutique",
            text: "O guia mudou minha forma de trabalhar. Agora uso o Claude pra montar comps table, modelar DCF e até redigir memos de investimento. O nível de qualidade é absurdo. Recomendo pra qualquer pessoa da área.",
            stars: 5,
        },
        {
            name: "Lucas T.",
            role: "Controller — Indústria",
            text: "Sempre tive receio de usar IA pra finanças porque os resultados eram ruins. O Claude é diferente — ele entende contexto contábil. O guia me mostrou exatamente como pedir. Agora reconcilio tudo em minutos.",
            stars: 5,
        },
    ];

    return (
        <section className="py-24 bg-slate-900/30 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        O que profissionais estão{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                            dizendo
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Centenas de profissionais de finanças já transformaram sua rotina.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-card border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden hover:border-purple-500/20 transition-colors group"
                        >
                            {/* Subtle glow */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/10 transition-colors" />

                            {/* Stars */}
                            <div className="flex items-center gap-1 text-amber-400 mb-4 relative z-10">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                                &quot;{t.text}&quot;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3 relative z-10 mt-auto pt-4 border-t border-white/5">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">
                                        {t.name}
                                    </p>
                                    <p className="text-muted-foreground text-xs">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
