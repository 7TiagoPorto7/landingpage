import { FileText, Search, Calculator, Target, Award } from 'lucide-react';

export function Solution() {
    const columns = [
        {
            title: "PROMPT",
            description: "O comando completo, testado e validado. Pronto pra copiar e colar no Claude.",
            icon: <FileText className="w-6 h-6 text-amber-500" />
        },
        {
            title: "O QUE VOCÊ RECEBE",
            description: "Descrição detalhada do output que a IA vai gerar na sua planilha.",
            icon: <Search className="w-6 h-6 text-blue-500" />
        },
        {
            title: "FÓRMULAS UTILIZADAS",
            description: "120+ fórmulas reais e complexas do Excel documentadas.",
            icon: <Calculator className="w-6 h-6 text-purple-500" />
        },
        {
            title: "POR QUE ISSO IMPORTA",
            description: "Insight estratégico com dados reais de mercado e impacto no negócio.",
            icon: <Target className="w-6 h-6 text-green-500" />
        },
        {
            title: "NÍVEL",
            description: "Classificação clara de dificuldade: Básico, Intermediário, Avançado ou Expert.",
            icon: <Award className="w-6 h-6 text-orange-500" />
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        100 prompts testados. Resultados garantidos.
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A planilha foi desenhada para ir direto ao ponto. Cada linha é um fluxo de trabalho otimizado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                    {columns.map((col, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4 border border-white/5">
                                {col.icon}
                            </div>
                            <h3 className="text-sm font-bold tracking-wider text-slate-200 mb-2">
                                {col.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {col.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Visual Proof / Large Spreadsheet Mockup */}
                <div className="relative mx-auto rounded-xl border border-border shadow-2xl overflow-hidden glass mt-8 max-w-5xl">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent"></div>

                    <div className="bg-[#1e1e1e] p-2 md:p-4 text-xs md:text-sm font-mono overflow-auto">
                        <table className="w-full min-w-[800px] text-left border-collapse">
                            <thead>
                                <tr className="bg-[#2d2d2d] text-slate-300 border-b border-[#3c3c3c]">
                                    <th className="p-3 font-semibold w-12 text-center border-r border-[#3c3c3c]">#</th>
                                    <th className="p-3 font-semibold border-r border-[#3c3c3c]">Prompt (Copie e Cole)</th>
                                    <th className="p-3 font-semibold border-r border-[#3c3c3c]">O Que Você Recebe</th>
                                    <th className="p-3 font-semibold border-r border-[#3c3c3c]">Fórmulas Principais</th>
                                    <th className="p-3 font-semibold border-r border-[#3c3c3c]">Insight Estratégico</th>
                                    <th className="p-3 font-semibold text-center w-24">Nível</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-400">
                                {/* Row 1 */}
                                <tr className="border-b border-[#3c3c3c] hover:bg-[#2a2a2a] transition-colors">
                                    <td className="p-3 text-center border-r border-[#3c3c3c]">87</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-amber-400 max-w-xs truncate">"Atue como um analista de FP&A sr... Calcule o LTV/CAC e construa uma coorte..."</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-slate-300">Tabela de Coorte SaaS pronta com LTV/CAC dinâmico e retenção mensal</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-blue-400 font-mono text-xs">=PROCV(), =SOMARPRODUTO()</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-slate-300">Identifica rapidamente churn crítico no mês 3, vital p/ SaaS.</td>
                                    <td className="p-3 text-center font-bold text-red-500">Avançado</td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="border-b border-[#3c3c3c] hover:bg-[#2a2a2a] transition-colors bg-[#252525]">
                                    <td className="p-3 text-center border-r border-[#3c3c3c]">42</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-amber-400 max-w-xs truncate">"Analise essa base de 10k linhas de vendas. Identifique sazonalidade e aplique Pareto (80/20)..."</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-slate-300">Dash de Curva ABC e Sazonalidade (Heatmap) com destaques de anomalias</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-blue-400 font-mono text-xs">=SOMASES(), =ÍNDICE()</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-slate-300">Reduz capital de giro no estoque focando nos 20% Top.</td>
                                    <td className="p-3 text-center font-bold text-orange-500">Intermed.</td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="border-b border-[#3c3c3c] hover:bg-[#2a2a2a] transition-colors">
                                    <td className="p-3 text-center border-r border-[#3c3c3c]">12</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-amber-400 max-w-xs truncate">"Crie uma regra de formatação condicional que destaque em vermelho linhas inteiras onde DRE &lt; 0..."</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-slate-300">Visualização profissional de P&L destacando prejuízos automaticamente</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-blue-400 font-mono text-xs">Formatação Cond.</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-slate-300">Tempo de leitura do relatório de caixa cai pela metade em reuniões.</td>
                                    <td className="p-3 text-center font-bold text-green-500">Básico</td>
                                </tr>
                                {/* Row 4 */}
                                <tr className="hover:bg-[#2a2a2a] transition-colors bg-[#252525]">
                                    <td className="p-3 text-center border-r border-[#3c3c3c]">99</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-amber-400 max-w-xs truncate">"Configure um modelo de Black-Scholes para precificar calls e puts considerando Vol Implícita..."</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-slate-300">Calculadora de derivativos B-S (d1, d2, N(d1), N(d2), preço final)</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-blue-400 font-mono text-xs">=DIST.NORM.N(), =EXP()</td>
                                    <td className="p-3 border-r border-[#3c3c3c] text-slate-300">Usado em mesas de prop trading e proteção de carteira (hedge).</td>
                                    <td className="p-3 text-center font-bold text-purple-500">Expert</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
