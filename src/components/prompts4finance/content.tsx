import { CheckCircle2 } from 'lucide-react';

export function Content() {
    const categories = [
        {
            title: "Formatação e Design",
            desc: "Relatórios com cara de consultoria em minutos",
            level: "Básico ao Avançado",
            tag: "Design"
        },
        {
            title: "Fórmulas e Cálculos",
            desc: "De PROCV até validação de CPF por fórmula",
            level: "Todos os Níveis",
            tag: "Lógica"
        },
        {
            title: "Análise de Dados e BI",
            desc: "Coorte, RFM, Pareto, correlação, sazonalidade",
            level: "Interm. a Expert",
            tag: "Data Science"
        },
        {
            title: "Modelagem Financeira",
            desc: "DCF, 3-statement, LBO, Monte Carlo",
            level: "Avançado a Expert",
            tag: "Finanças"
        },
        {
            title: "Automação e Produtividade",
            desc: "Estoque, Gantt, faturamento, CRM, folha",
            level: "Interm. ao Avançado",
            tag: "Rotina"
        },
        {
            title: "Gráficos e Visualização",
            desc: "Waterfall, heatmap, bullet chart, gauge, combo",
            level: "Básico ao Avançado",
            tag: "Apresentação"
        },
        {
            title: "Limpeza e Transformação",
            desc: "Dedup, outliers, validação, reconciliação",
            level: "Básico ao Avançado",
            tag: "Data Prep"
        },
        {
            title: "Templates de Negócio",
            desc: "Canvas, SWOT, cap table, precificação, competitivo",
            level: "Todos os Níveis",
            tag: "Estratégia"
        },
        {
            title: "Educação e Referência",
            desc: "Tutoriais interativos de funções com exemplos",
            level: "Básico ao Intermed.",
            tag: "Aprendizado"
        },
        {
            title: "Nível Avançado",
            desc: "M&A, Black-Scholes, credit scoring, due diligence",
            level: "Expert",
            tag: "Hard Skills"
        }
    ];

    return (
        <section className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        10 categorias. Do básico ao <span className="text-gradient">nível Goldman Sachs.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Organizado logicamente para você achar a solução certa no momento em que precisar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                    Módulo {idx + 1}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
                                    {cat.tag}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-primary transition-colors">
                                {cat.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-4 min-h-[40px]">
                                {cat.desc}
                            </p>

                            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-800/50">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span className="text-xs font-medium text-slate-500">{cat.level}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50">
                        <div className="bg-background px-8 py-6 rounded-lg">
                            <p className="text-xl md:text-2xl font-semibold italic text-slate-300">
                                "Tem prompt aqui que consultoria cobra R$50 mil pra entregar. <span className="text-primary font-bold not-italic">Você paga R$29,90.</span>"
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
