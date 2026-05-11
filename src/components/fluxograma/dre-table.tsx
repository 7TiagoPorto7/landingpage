"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface DreTableProps {
    activeConnection: string | null;
    onHighlight: (connection: string | null) => void;
    compact?: boolean;
}

const dreData = [
    { label: "Receita Bruta", value: 500000, indent: 0, connections: ["valuation-receita"] },
    { label: "(–) Deduções", value: -50000, indent: 1 },
    { label: "= Receita Líquida", value: 450000, indent: 0, bold: true, connections: ["premissa-pmr"] },
    { label: "(–) CMV / CPV", value: -180000, indent: 1, connections: ["premissa-pmp"] },
    { label: "= Lucro Bruto", value: 270000, indent: 0, bold: true },
    { label: "(–) Despesas Operacionais", value: -120000, indent: 1 },
    { label: "= EBITDA", value: 150000, indent: 0, bold: true, connections: ["valuation-ebitda"] },
    { label: "(–) Depreciação & Amortização", value: -30000, indent: 1, connections: ["dre-dfc-depreciacao"] },
    { label: "= EBIT (Lucro Operacional)", value: 120000, indent: 0, bold: true },
    { label: "(–) Despesas Financeiras", value: -15000, indent: 1 },
    { label: "(+) Receitas Financeiras", value: 5000, indent: 1 },
    { label: "= LAIR (Lucro Antes do IR)", value: 110000, indent: 0, bold: true },
    { label: "(–) IR & CSLL (34%)", value: -37400, indent: 1 },
    { label: "= Lucro Líquido", value: 72600, indent: 0, bold: true, highlight: true, connections: ["dre-dfc-lucro", "valuation-lucro"] },
];

function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

export function DreTable({ activeConnection, onHighlight, compact }: DreTableProps) {
    const px = compact ? "px-3" : "px-6";
    const py = compact ? "py-1.5" : "py-2.5";
    const headerPy = compact ? "py-2" : "py-3";
    const headerPadding = compact ? "px-3 py-2.5" : "px-6 py-4";
    const textSize = compact ? "text-xs" : "text-sm";
    const titleSize = compact ? "text-sm" : "text-lg";
    const iconSize = compact ? "w-4 h-4" : "w-5 h-5";
    const iconBox = compact ? "w-7 h-7 rounded-lg" : "w-10 h-10 rounded-xl";
    const plIndent = compact ? "pl-6" : "pl-10";

    return (
        <motion.section
            id="dre"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            <div className="rounded-2xl border border-emerald-500/20 bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.06)]">
                {/* Header */}
                <div className={`flex items-center gap-2 ${headerPadding} border-b border-emerald-500/10 bg-emerald-500/[0.03]`}>
                    <div className={`flex items-center justify-center ${iconBox} bg-emerald-500/10`}>
                        <TrendingUp className={`${iconSize} text-emerald-400`} />
                    </div>
                    <div>
                        <h3 className={`${titleSize} font-bold text-white`}>DRE — Demonstração do Resultado</h3>
                        {!compact && <p className="text-sm text-gray-500">Apura o lucro ou prejuízo do período</p>}
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
                            {dreData.map((row, i) => {
                                const isActive = row.connections && row.connections.includes(activeConnection ?? "");
                                const isDimmed = activeConnection && !isActive && row.connections && row.connections.length > 0;
                                // Determine the primary dot color based on which connection is active or the first one
                                const primaryConn = activeConnection && row.connections?.includes(activeConnection)
                                    ? activeConnection
                                    : row.connections?.[0];
                                const dotColor = primaryConn?.includes("premissa") ? "bg-violet-400"
                                    : primaryConn?.includes("valuation") ? "bg-rose-400"
                                    : "bg-emerald-400";
                                return (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.03 }}
                                        className={`
                                            border-b border-white/[0.03] transition-all duration-300 cursor-default
                                            ${row.bold ? "bg-white/[0.02]" : ""}
                                            ${row.highlight ? "bg-emerald-500/[0.06]" : ""}
                                            ${isActive ? "!bg-emerald-500/15 ring-1 ring-emerald-500/30" : ""}
                                            ${isDimmed ? "opacity-40" : ""}
                                            hover:bg-white/[0.04]
                                        `}
                                        onMouseEnter={() => row.connections?.[0] && onHighlight(row.connections[0])}
                                        onMouseLeave={() => row.connections?.[0] && onHighlight(null)}
                                    >
                                        <td className={`${px} ${py} ${row.indent ? plIndent : ""} ${row.bold ? "font-semibold text-white" : "text-gray-400"}`}>
                                            <div className="flex items-center gap-1.5">
                                                {row.label}
                                                {row.connections && row.connections.length > 0 && (
                                                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${dotColor} ${isActive ? "animate-pulse" : ""}`} />
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
