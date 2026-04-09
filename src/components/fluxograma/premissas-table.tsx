"use client";

import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

interface PremissasTableProps {
    activeConnection: string | null;
    onHighlight: (connection: string | null) => void;
    compact?: boolean;
}

const premissasData = [
    {
        id: "pmr",
        label: "PMR — Prazo Médio de Recebimento",
        days: 68,
        formula: "Contas a Receber ÷ Receita Líquida × 360",
        calc: "(R$ 85.000 ÷ R$ 450.000) × 360",
        result: "Contas a Receber = R$ 85.000",
        connection: "premissa-pmr",
        description: "Quantos dias, em média, a empresa leva para receber dos clientes.",
    },
    {
        id: "pmp",
        label: "PMP — Prazo Médio de Pagamento",
        days: 116,
        formula: "Fornecedores ÷ CMV × 360",
        calc: "(R$ 58.000 ÷ R$ 180.000) × 360",
        result: "Fornecedores = R$ 58.000",
        connection: "premissa-pmp",
        description: "Quantos dias, em média, a empresa leva para pagar seus fornecedores.",
    },
    {
        id: "pme",
        label: "PME — Prazo Médio de Estoque",
        days: 120,
        formula: "Estoques ÷ CMV × 360",
        calc: "(R$ 60.000 ÷ R$ 180.000) × 360",
        result: "Estoques = R$ 60.000",
        connection: "premissa-pme",
        description: "Quantos dias, em média, o estoque fica parado antes de ser vendido.",
    },
];

const cicloFinanceiro = {
    cicloOperacional: 68 + 120, // PMR + PME = 188 dias
    cicloFinanceiro: 68 + 120 - 116, // PMR + PME - PMP = 72 dias
};

export function PremissasTable({ activeConnection, onHighlight, compact }: PremissasTableProps) {
    const headerPadding = compact ? "px-3 py-2.5" : "px-6 py-4";
    const titleSize = compact ? "text-sm" : "text-lg";
    const iconSize = compact ? "w-4 h-4" : "w-5 h-5";
    const iconBox = compact ? "w-7 h-7 rounded-lg" : "w-10 h-10 rounded-xl";
    const textSize = compact ? "text-xs" : "text-sm";
    const px = compact ? "px-3" : "px-5";
    const py = compact ? "py-2" : "py-3";

    return (
        <motion.section
            id="premissas"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            <div className="rounded-2xl border border-violet-500/20 bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.06)]">
                {/* Header */}
                <div className={`flex items-center gap-2 ${headerPadding} border-b border-violet-500/10 bg-violet-500/[0.03]`}>
                    <div className={`flex items-center justify-center ${iconBox} bg-violet-500/10`}>
                        <Calculator className={`${iconSize} text-violet-400`} />
                    </div>
                    <div>
                        <h3 className={`${titleSize} font-bold text-white`}>Premissas — Prazos Médios</h3>
                        {!compact && <p className="text-sm text-gray-500">Conectam DRE ao Capital de Giro do Balanço</p>}
                    </div>
                </div>

                {/* Cards */}
                <div className={`${px} ${py} space-y-2`}>
                    {premissasData.map((item, i) => {
                        const isActive = activeConnection === item.connection;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className={`
                                    rounded-xl border p-3 transition-all duration-300 cursor-pointer
                                    ${isActive
                                        ? "border-violet-400/40 bg-violet-500/10 shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                                        : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                                    }
                                `}
                                onMouseEnter={() => onHighlight(item.connection)}
                                onMouseLeave={() => onHighlight(null)}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className={`${compact ? "text-[11px]" : "text-xs"} font-bold text-violet-400`}>
                                        {item.label}
                                    </span>
                                    <span className={`${compact ? "text-base" : "text-lg"} font-bold font-mono text-white`}>
                                        {item.days} dias
                                    </span>
                                </div>
                                <p className={`${compact ? "text-[10px]" : "text-xs"} text-gray-500 mb-1.5`}>
                                    {item.description}
                                </p>
                                <div className={`${compact ? "text-[10px]" : "text-xs"} font-mono space-y-0.5`}>
                                    <div className="text-gray-600">{item.formula}</div>
                                    <div className="text-gray-500">{item.calc}</div>
                                    <div className="text-violet-400/80 font-semibold">→ {item.result}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Ciclo Financeiro */}
                <div className={`${px} pb-3 pt-1`}>
                    <div className={`rounded-xl border border-violet-500/15 bg-violet-500/[0.03] p-3 ${textSize}`}>
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-gray-400 font-medium">Ciclo Operacional</span>
                            <span className="font-mono font-semibold text-white">
                                PMR + PME = <span className="text-violet-400">{cicloFinanceiro.cicloOperacional} dias</span>
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400 font-medium">Ciclo Financeiro</span>
                            <span className="font-mono font-semibold text-white">
                                PMR + PME − PMP = <span className="text-violet-400">{cicloFinanceiro.cicloFinanceiro} dias</span>
                            </span>
                        </div>
                        <p className={`mt-2 ${compact ? "text-[10px]" : "text-[11px]"} text-gray-600 leading-relaxed`}>
                            A empresa precisa financiar <strong className="text-gray-400">{cicloFinanceiro.cicloFinanceiro} dias</strong> de operação com capital próprio ou de terceiros.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
