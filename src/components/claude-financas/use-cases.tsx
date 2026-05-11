import { Bot, ArrowRight } from "lucide-react";

export function CFUseCases() {
    const useCases = [
        {
            area: "FP&A",
            prompt: "Analise o DRE dos últimos 12 meses e identifique as 3 maiores variações de margem...",
            result: "Relatório executivo com análise de variância, waterfall de margem e recomendações",
            time: "5 min",
            oldTime: "4 horas",
        },
        {
            area: "Valuation",
            prompt: "Monte um modelo DCF com 5 anos de projeção usando as premissas de crescimento...",
            result: "Modelo completo com WACC, valor terminal, sensibilidade e equity value",
            time: "10 min",
            oldTime: "2 dias",
        },
        {
            area: "M&A",
            prompt: "Compare os múltiplos de transação das últimas 10 aquisições no setor de tech...",
            result: "Tabela de comparáveis com mediana, média e análise de prêmio de controle",
            time: "8 min",
            oldTime: "6 horas",
        },
        {
            area: "Controladoria",
            prompt: "Reconcilie os saldos contábeis vs. bancários e liste todas as divergências...",
            result: "Relatório de conciliação com itens pendentes, classificação e aging",
            time: "3 min",
            oldTime: "3 horas",
        },
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Veja o Claude em{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                            ação
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Casos reais de como o Claude transforma a rotina de profissionais
                        de finanças.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {useCases.map((uc, idx) => (
                        <div
                            key={idx}
                            className="bg-card border border-border rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
                        >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between bg-slate-800/30">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <span className="font-bold text-foreground">{uc.area}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="text-red-400/70 line-through">{uc.oldTime}</span>
                                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                                    <span className="text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full">
                                        {uc.time}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                {/* Prompt */}
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold mb-2">
                                        Prompt
                                    </p>
                                    <div className="bg-purple-500/5 border border-purple-500/10 rounded-xl px-4 py-3 text-sm text-slate-300 italic">
                                        &quot;{uc.prompt}&quot;
                                    </div>
                                </div>

                                {/* Result */}
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-green-400 font-semibold mb-2">
                                        Resultado
                                    </p>
                                    <div className="bg-green-500/5 border border-green-500/10 rounded-xl px-4 py-3 text-sm text-slate-300">
                                        {uc.result}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
