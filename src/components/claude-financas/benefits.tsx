import { CheckCircle2, BookOpen, Lightbulb, Rocket } from "lucide-react";

export function CFBenefits() {
    const benefits = [
        "Prompts testados para análise de DRE, Balanço e Fluxo de Caixa",
        "Frameworks completos para Valuation por DCF e Múltiplos",
        "Templates para relatórios de FP&A prontos para diretoria",
        "Automação de conciliação bancária e contábil",
        "Análise de viabilidade financeira de projetos (TIR, VPL, Payback)",
        "Construção de dashboards e apresentações executivas",
        "Modelagem de cenários (otimista, base, pessimista)",
        "Projeção financeira com premissas fundamentadas",
        "Due diligence e análise de risco automatizada",
        "Criação de memos de investimento profissionais",
    ];

    const pillars = [
        {
            icon: <BookOpen className="w-7 h-7 text-purple-400" />,
            title: "Fundamentos",
            desc: "Entenda como configurar e usar o Claude para tarefas financeiras do zero",
            color: "from-purple-500/20 to-purple-600/10",
        },
        {
            icon: <Lightbulb className="w-7 h-7 text-amber-400" />,
            title: "Estratégias",
            desc: "Frameworks e prompts avançados validados por profissionais de mercado",
            color: "from-amber-500/20 to-amber-600/10",
        },
        {
            icon: <Rocket className="w-7 h-7 text-emerald-400" />,
            title: "Implementação",
            desc: "Casos práticos e fluxos de trabalho para aplicar imediatamente no seu dia",
            color: "from-emerald-500/20 to-emerald-600/10",
        },
    ];

    return (
        <section className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        O que você vai aprender no{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                            guia gratuito
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Um material completo, organizado em 3 pilares, para transformar sua
                        rotina financeira com IA.
                    </p>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {pillars.map((p, idx) => (
                        <div
                            key={idx}
                            className="relative p-6 rounded-2xl border border-white/10 bg-card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    Pilar {idx + 1}: {p.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Checklist */}
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                    <h3 className="text-2xl font-bold text-foreground mb-8 text-center relative z-10">
                        Dentro do guia, você encontra:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                        {benefits.map((b, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                            >
                                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300 text-sm">{b}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
