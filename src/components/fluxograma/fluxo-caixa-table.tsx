"use client";

import { motion } from "framer-motion";
import { ArrowDownUp } from "lucide-react";

interface FluxoCaixaTableProps {
    activeConnection: string | null;
    onHighlight: (connection: string | null) => void;
    compact?: boolean;
}

type FluxoRow = {
    label: string;
    value: number;
    indent?: number;
    bold?: boolean;
    highlight?: boolean;
    connection?: string;
    separator?: boolean;
    sectionHeader?: boolean;
};

const fluxoCaixaData: FluxoRow[] = [
    { label: "ATIVIDADES OPERACIONAIS", value: 0, sectionHeader: true },
    { label: "Lucro Líquido", value: 72600, indent: 1, connection: "dre-dfc-lucro" },
    { label: "(+) Depreciação & Amortização", value: 30000, indent: 1, connection: "dre-dfc-depreciacao" },
    { label: "(–) Aumento de Contas a Receber", value: -15000, indent: 1, connection: "premissa-pmr" },
    { label: "(–) Aumento de Estoques", value: -10000, indent: 1, connection: "premissa-pme" },
    { label: "(+) Aumento de Fornecedores", value: 8000, indent: 1, connection: "premissa-pmp" },
    { label: "= Caixa das Operações", value: 85600, bold: true, separator: true },

    { label: "ATIVIDADES DE INVESTIMENTO", value: 0, sectionHeader: true },
    { label: "(–) CAPEX (Aquisição de Imobilizado)", value: -40000, indent: 1 },
    { label: "= Caixa de Investimento", value: -40000, bold: true, separator: true },

    { label: "ATIVIDADES DE FINANCIAMENTO", value: 0, sectionHeader: true },
    { label: "(+) Novos Empréstimos", value: 20000, indent: 1 },
    { label: "(–) Pagamento de Dividendos", value: -25000, indent: 1 },
    { label: "= Caixa de Financiamento", value: -5000, bold: true, separator: true },

    { label: "Variação de Caixa no Período", value: 40600, bold: true },
    { label: "(+) Saldo Inicial de Caixa", value: 59400, indent: 1 },
    { label: "= Saldo Final de Caixa", value: 100000, bold: true, highlight: true, connection: "dfc-balanco-caixa" },
];

function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export function FluxoCaixaTable({ activeConnection, onHighlight, compact }: FluxoCaixaTableProps) {
    const px = compact ? "px-3" : "px-6";
    const py = compact ? "py-1.5" : "py-2.5";
    const headerPy = compact ? "py-2" : "py-3";
    const headerPadding = compact ? "px-3 py-2.5" : "px-6 py-4";
    const textSize = compact ? "text-xs" : "text-sm";
    const titleSize = compact ? "text-sm" : "text-lg";
    const iconSize = compact ? "w-4 h-4" : "w-5 h-5";
    const iconBox = compact ? "w-7 h-7 rounded-lg" : "w-10 h-10 rounded-xl";
    const plIndent = compact ? "pl-6" : "pl-10";
    const sectionHeaderSize = compact ? "text-[10px]" : "text-xs";

    return (
        <motion.section
            id="dfc"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            <div className="rounded-2xl border border-amber-500/20 bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.06)]">
                {/* Header */}
                <div className={`flex items-center gap-2 ${headerPadding} border-b border-amber-500/10 bg-amber-500/[0.03]`}>
                    <div className={`flex items-center justify-center ${iconBox} bg-amber-500/10`}>
                        <ArrowDownUp className={`${iconSize} text-amber-400`} />
                    </div>
                    <div>
                        <h3 className={`${titleSize} font-bold text-white`}>DFC — Fluxo de Caixa</h3>
                        {!compact && <p className="text-sm text-gray-500">Mostra a movimentação real de dinheiro</p>}
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className={`w-full ${textSize}`}>
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className={`text-left ${px} ${headerPy} text-gray-500 font-medium`}>Conta</th>
                                <th className={`text-right ${px} ${headerPy} text-gray-500 font-medium`}>Valor (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fluxoCaixaData.map((row, i) => {
                                if (row.sectionHeader) {
                                    return (
                                        <tr key={i} className="border-b border-white/[0.03]">
                                            <td colSpan={2} className={`${px} ${compact ? "py-1.5" : "py-3"} ${sectionHeaderSize} font-bold tracking-widest text-amber-400/70 uppercase`}>
                                                {row.label}
                                            </td>
                                        </tr>
                                    );
                                }

                                const isActive = row.connection && activeConnection === row.connection;
                                const isDimmed = activeConnection && !isActive && row.connection;
                                return (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.025 }}
                                        className={`
                                            border-b border-white/[0.03] transition-all duration-300 cursor-default
                                            ${row.bold ? "bg-white/[0.02]" : ""}
                                            ${row.highlight ? "bg-amber-500/[0.06]" : ""}
                                            ${row.separator ? "border-b-white/10" : ""}
                                            ${isActive ? "!bg-amber-500/15 ring-1 ring-amber-500/30" : ""}
                                            ${isDimmed ? "opacity-40" : ""}
                                            hover:bg-white/[0.04]
                                        `}
                                        onMouseEnter={() => row.connection && onHighlight(row.connection)}
                                        onMouseLeave={() => row.connection && onHighlight(null)}
                                    >
                                        <td className={`${px} ${py} ${row.indent ? plIndent : ""} ${row.bold ? "font-semibold text-white" : "text-gray-400"}`}>
                                            <div className="flex items-center gap-1.5">
                                                {row.label}
                                                {row.connection && (
                                                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${
                                                        row.connection.includes("premissa") ? "bg-violet-400" :
                                                        row.connection.includes("dre") ? "bg-emerald-400" : "bg-blue-400"
                                                    } ${isActive ? "animate-pulse" : ""}`} />
                                                )}
                                            </div>
                                        </td>
                                        <td className={`${px} ${py} text-right font-mono ${
                                            row.bold ? "font-semibold text-white" : 
                                            row.value < 0 ? "text-red-400/80" : "text-gray-400"
                                        }`}>
                                            {formatCurrency(row.value)}
                                        </td>
                                    </motion.tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.section>
    );
}
