"use client";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

interface BalancoTableProps {
    activeConnection: string | null;
    onHighlight: (connection: string | null) => void;
    compact?: boolean;
}

type BalancoRow = {
    label: string;
    value: number;
    indent?: number;
    bold?: boolean;
    highlight?: boolean;
    connection?: string;
    sectionHeader?: boolean;
};

const ativoData: BalancoRow[] = [
    { label: "ATIVO CIRCULANTE", value: 0, sectionHeader: true },
    { label: "Caixa e Equivalentes", value: 100000, indent: 1, highlight: true, connection: "dfc-balanco-caixa" },
    { label: "Contas a Receber", value: 85000, indent: 1, highlight: true, connection: "premissa-pmr" },
    { label: "Estoques", value: 60000, indent: 1, highlight: true, connection: "premissa-pme" },
    { label: "= Total Circulante", value: 245000, bold: true },

    { label: "ATIVO NÃO CIRCULANTE", value: 0, sectionHeader: true },
    { label: "Imobilizado (líquido)", value: 210000, indent: 1 },
    { label: "Intangível", value: 45000, indent: 1 },
    { label: "= Total Não Circulante", value: 255000, bold: true },

    { label: "TOTAL DO ATIVO", value: 500000, bold: true },
];

const passivoData: BalancoRow[] = [
    { label: "PASSIVO CIRCULANTE", value: 0, sectionHeader: true },
    { label: "Fornecedores", value: 58000, indent: 1, highlight: true, connection: "premissa-pmp" },
    { label: "Salários a Pagar", value: 22000, indent: 1 },
    { label: "Empréstimos CP", value: 30000, indent: 1 },
    { label: "= Total Circulante", value: 110000, bold: true },

    { label: "PASSIVO NÃO CIRCULANTE", value: 0, sectionHeader: true },
    { label: "Empréstimos LP", value: 90000, indent: 1 },
    { label: "= Total Não Circulante", value: 90000, bold: true },

    { label: "PATRIMÔNIO LÍQUIDO", value: 0, sectionHeader: true },
    { label: "Capital Social", value: 200000, indent: 1 },
    { label: "Lucros Acumulados", value: 100000, indent: 1, highlight: true, connection: "dre-balanco-lucro" },
    { label: "= Total PL", value: 300000, bold: true },

    { label: "TOTAL PASSIVO + PL", value: 500000, bold: true },
];

function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
}

function renderRows(
    data: BalancoRow[],
    activeConnection: string | null,
    onHighlight: (connection: string | null) => void,
    startDelay: number,
    compact?: boolean
) {
    const px = compact ? "px-3" : "px-6";
    const py = compact ? "py-1.5" : "py-2.5";
    const plIndent = compact ? "pl-6" : "pl-10";
    const sectionHeaderSize = compact ? "text-[10px]" : "text-xs";

    return data.map((row, i) => {
        if (row.sectionHeader) {
            return (
                <tr key={`section-${i}`} className="border-b border-white/[0.03]">
                    <td colSpan={2} className={`${px} ${compact ? "py-1.5" : "py-3"} ${sectionHeaderSize} font-bold tracking-widest text-blue-400/70 uppercase`}>
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
                transition={{ duration: 0.3, delay: startDelay + i * 0.025 }}
                className={`
                    border-b border-white/[0.03] transition-all duration-300 cursor-default
                    ${row.bold ? "bg-white/[0.02]" : ""}
                    ${row.highlight ? "bg-blue-500/[0.06]" : ""}
                    ${isActive ? "!bg-blue-500/15 ring-1 ring-blue-500/30" : ""}
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
                                row.connection.includes("dfc") ? "bg-blue-400" : "bg-amber-400"
                            } ${isActive ? "animate-pulse" : ""}`} />
                        )}
                    </div>
                </td>
                <td className={`${px} ${py} text-right font-mono ${
                    row.bold ? "font-semibold text-white" : "text-gray-400"
                }`}>
                    {formatCurrency(row.value)}
                </td>
            </motion.tr>
        );
    });
}

export function BalancoTable({ activeConnection, onHighlight, compact }: BalancoTableProps) {
    const px = compact ? "px-3" : "px-6";
    const headerPy = compact ? "py-2" : "py-3";
    const headerPadding = compact ? "px-3 py-2.5" : "px-6 py-4";
    const textSize = compact ? "text-xs" : "text-sm";
    const titleSize = compact ? "text-sm" : "text-lg";
    const iconSize = compact ? "w-4 h-4" : "w-5 h-5";
    const iconBox = compact ? "w-7 h-7 rounded-lg" : "w-10 h-10 rounded-xl";

    return (
        <motion.section
            id="balanco"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            <div className="rounded-2xl border border-blue-500/20 bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.06)]">
                {/* Header */}
                <div className={`flex items-center gap-2 ${headerPadding} border-b border-blue-500/10 bg-blue-500/[0.03]`}>
                    <div className={`flex items-center justify-center ${iconBox} bg-blue-500/10`}>
                        <Scale className={`${iconSize} text-blue-400`} />
                    </div>
                    <div>
                        <h3 className={`${titleSize} font-bold text-white`}>Balanço Patrimonial</h3>
                        {!compact && <p className="text-sm text-gray-500">Fotografia da posição financeira em uma data</p>}
                    </div>
                </div>

                {/* Two sections stacked in compact, side by side otherwise */}
                <div className={`grid grid-cols-1 ${compact ? "" : "lg:grid-cols-2"} divide-y ${compact ? "" : "lg:divide-y-0 lg:divide-x"} divide-white/5`}>
                    {/* Ativo */}
                    <div className="overflow-x-auto">
                        <table className={`w-full ${textSize}`}>
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className={`text-left ${px} ${headerPy} text-gray-500 font-medium`}>Ativo</th>
                                    <th className={`text-right ${px} ${headerPy} text-gray-500 font-medium`}>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>{renderRows(ativoData, activeConnection, onHighlight, 0, compact)}</tbody>
                        </table>
                    </div>

                    {/* Passivo + PL */}
                    <div className="overflow-x-auto">
                        <table className={`w-full ${textSize}`}>
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className={`text-left ${px} ${headerPy} text-gray-500 font-medium`}>Passivo + PL</th>
                                    <th className={`text-right ${px} ${headerPy} text-gray-500 font-medium`}>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>{renderRows(passivoData, activeConnection, onHighlight, 0.1, compact)}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
