import { Bot, FileSpreadsheet, Shield, Zap, Brain, BarChart3 } from "lucide-react";

export function CFSolution() {
    const features = [
        {
            icon: <Bot className="w-6 h-6 text-purple-400" />,
            title: "Claude Entende Finanças",
            description:
                "Diferente de outros modelos, o Claude foi treinado para raciocinar sobre dados financeiros com precisão.",
        },
        {
            icon: <FileSpreadsheet className="w-6 h-6 text-green-400" />,
            title: "Prompts Prontos pra Usar",
            description:
                "Nosso guia inclui prompts testados para FP&A, Valuation, DRE, Balanço, Fluxo de Caixa e mais.",
        },
        {
            icon: <Shield className="w-6 h-6 text-blue-400" />,
            title: "Resultados Confiáveis",
            description:
                "O Claude cita fontes, explica raciocínios e recusa inventar dados — perfeito pra finanças.",
        },
        {
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            title: "10x Mais Produtivo",
            description:
                "Automatize análises que levavam horas. Faça em minutos o que antes levava um dia inteiro.",
        },
        {
            icon: <Brain className="w-6 h-6 text-pink-400" />,
            title: "Raciocínio Avançado",
            description:
                "Monte Carlo, DCF, LBO, Sensibilidade — o Claude modela cenários complexos com perfeição.",
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
            title: "Dados + Insights",
            description:
                "Não é só calcular. O Claude interpreta os dados e entrega insights acionáveis pro negócio.",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
                        A Solução
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Por que o Claude é a{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                            melhor IA para finanças?
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        O Claude da Anthropic se destaca em raciocínio lógico, precisão
                        numérica e análise profunda — exatamente o que o financeiro precisa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feat, idx) => (
                        <div
                            key={idx}
                            className="glass p-6 rounded-2xl flex flex-col hover:-translate-y-1 transition-all duration-300 hover:border-purple-500/30 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                                {feat.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-purple-300 transition-colors">
                                {feat.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {feat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
