"use client";

import { motion } from "framer-motion";
import { ChevronDown, BookOpen } from "lucide-react";
import { useState } from "react";

interface Tab {
    name: string;
    description: string;
}

interface Module {
    number: number;
    title: string;
    color: string;
    bgColor: string;
    borderColor: string;
    dotColor: string;
    time: string;
    difficulty: string;
    tabs: Tab[];
}

const modules: Module[] = [
    {
        number: 1,
        title: "Fundamentos",
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        dotColor: "bg-emerald-500",
        time: "~2h",
        difficulty: "⭐",
        tabs: [
            { name: "Capa", description: "Índice completo com resumo do valuation" },
            { name: "Premissas", description: "Painel de controle com todos os inputs editáveis. Texto azul = mude. Texto preto = fórmula. 5 seções: Receita, Custos, Balanço, Dívida/Equity, WACC" },
        ],
    },
    {
        number: 2,
        title: "Os 3 Demonstrativos Integrados",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/30",
        dotColor: "bg-yellow-500",
        time: "~4h",
        difficulty: "⭐⭐⭐",
        tabs: [
            { name: "DRE", description: "Receita → CPV → Lucro Bruto → SG&A → EBITDA → D&A → EBIT → Resultado Financeiro → Lucro Líquido. Margens de 8% → 33,5% EBITDA em 5 anos" },
            { name: "Balanço Patrimonial", description: "Ativo = Passivo + PL com check automático (= 0 em todos os anos). Integrado com DRE e DFC" },
            { name: "DFC (Fluxo de Caixa)", description: "Método indireto. Operacional + Investimentos + Financiamento. Reconcilia lucro com caixa real. Check automático" },
            { name: "Guia de Integração", description: "Mapa visual completo: como DRE alimenta BP, BP alimenta DFC, DFC fecha BP, e tudo alimenta o DCF. Com erros comuns e regras mnemônicas" },
        ],
    },
    {
        number: 3,
        title: "Valuation",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/30",
        dotColor: "bg-orange-500",
        time: "~3h",
        difficulty: "⭐⭐⭐⭐",
        tabs: [
            { name: "DCF", description: "FCFF em 5 etapas: NOPAT + D&A - CAPEX - ΔWC = FCFF → Valor Terminal → VP → Enterprise Value → Bridge → Equity Value → Valor por Ação. Tabela de sensibilidade 7×7 (WACC × g)" },
            { name: "Múltiplos", description: "EV/Revenue, EV/EBITDA, P/E, ROIC, Rule of 40. Com explicação de quando usar cada um" },
            { name: "Comps", description: "5 peers SaaS B2B com 3 métodos de valuation relativo. Mediana, prêmio/desconto vs. DCF, média ponderada" },
        ],
    },
    {
        number: 4,
        title: "Cenários, Retorno e Tese",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30",
        dotColor: "bg-blue-500",
        time: "~3h",
        difficulty: "⭐⭐⭐",
        tabs: [
            { name: "Cenários", description: "Bear / Base / Bull com premissas completas e valor por ação de cada" },
            { name: "Retorno (IRR)", description: "IRR, MOIC e ganho por ação em 3 anos. Sensibilidade por múltiplo de saída (3x a 12x)" },
            { name: "Resumo Executivo", description: "Template de equity research profissional com métricas, faixa de valor e riscos-chave" },
            { name: "Football Field", description: "4 metodologias com faixas sobrepostas: DCF, Cenários, EV/Revenue, EV/EBITDA" },
        ],
    },
    {
        number: 5,
        title: "Análise de Risco Quantitativa",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/30",
        dotColor: "bg-purple-500",
        time: "~3h",
        difficulty: "⭐⭐⭐⭐⭐",
        tabs: [
            { name: "Monte Carlo", description: "10.000 simulações com 6 variáveis aleatorizadas (distribuição triangular). Histograma, tornado chart, percentis, probabilidades" },
            { name: "Correlação", description: "Matriz de Pearson 7×7 + ranking de importância (R²). Descubra que WACC + Margem EBITDA explicam 77% da variância" },
            { name: "Breakeven", description: "Quanto cada premissa pode piorar antes do valor cair abaixo de R$ 5,00. Margem de segurança por variável" },
            { name: "VaR", description: "Value at Risk 90/95/99%, Expected Shortfall, perfil de risco completo com skewness, kurtosis, max drawdown e classificação de risco" },
        ],
    },
    {
        number: 6,
        title: "Dashboard, Python e Consolidação",
        color: "text-red-400",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/30",
        dotColor: "bg-red-500",
        time: "~2h",
        difficulty: "⭐⭐⭐",
        tabs: [
            { name: "Dashboard", description: "KPIs consolidados: Receita, EBITDA, LL, margens, Rule of 40, cenários" },
            { name: "Códigos Python", description: "4 scripts completos (Monte Carlo, Breakeven, Correlação, VaR) + tabela de parâmetros que se atualiza automaticamente quando você muda premissas + comparação Excel vs Python + guia de execução (local ou Google Colab)" },
        ],
    },
];

function ModuleCard({ module, index }: { module: Module; index: number }) {
    const [open, setOpen] = useState(index === 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`rounded-2xl border ${open ? module.borderColor : "border-white/10"} bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-4 p-6 md:p-8 text-left cursor-pointer"
            >
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${module.bgColor} ${module.color} text-lg font-bold shrink-0`}>
                    {module.number}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold">{module.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${module.bgColor} ${module.color}`}>{module.time}</span>
                        <span className="text-xs text-muted-foreground">{module.difficulty}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                        {module.tabs.length} {module.tabs.length === 1 ? "aba" : "abas"}
                    </p>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-4 border-t border-white/5 pt-6">
                    {module.tabs.map((tab, tabIndex) => (
                        <div key={tabIndex} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors">
                            <div className={`w-2 h-2 ${module.dotColor} rounded-full mt-2 shrink-0`} />
                            <div>
                                <h4 className="font-semibold text-white mb-1">{tab.name}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{tab.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function TemplateModules() {
    return (
        <section id="modules" className="py-24 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 text-white/80 border border-white/10"
                    >
                        <BookOpen className="w-4 h-4" />
                        <span>18 Abas Interligadas</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
                    >
                        O que está dentro do modelo
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        6 módulos progressivos — do básico ao Monte Carlo — com exercícios práticos em cada aba.
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {modules.map((module, index) => (
                        <ModuleCard key={index} module={module} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
