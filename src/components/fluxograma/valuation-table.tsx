"use client";

import { motion } from "framer-motion";
import { BarChart2, TrendingUp, DollarSign, Layers, Info } from "lucide-react";

// ── Connection IDs ────────────────────────────────────────────────────────────
export const VALUATION_CONNECTIONS = {
    ebitda: "valuation-ebitda",
    lucro: "valuation-lucro",
    receita: "valuation-receita",
    dcf: "valuation-dcf",
} as const;

// ── Source data (must match DRE) ───────────────────────────────────────────────
const ebitda = 150000;
const lucroLiquido = 72600;
const receitaBruta = 500000;

function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
    });
}

// ── Color maps ────────────────────────────────────────────────────────────────
type Color = "emerald" | "blue" | "amber" | "rose";

const colorMap: Record<Color, {
    border: string; activeBg: string; headerBg: string; text: string;
    iconBg: string; thColor: string; divideColor: string; resultBg: string;
    badgeCls: string; glowColor: string;
}> = {
    emerald: {
        border: "border-emerald-500/30",
        activeBg: "bg-emerald-500/[0.08]",
        headerBg: "bg-emerald-500/[0.04]",
        text: "text-emerald-400",
        iconBg: "bg-emerald-500/10",
        thColor: "text-emerald-500/60",
        divideColor: "divide-emerald-500/10",
        resultBg: "bg-emerald-500/[0.08] border-emerald-500/20",
        badgeCls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
        glowColor: "rgba(16,185,129,0.12)",
    },
    blue: {
        border: "border-blue-500/30",
        activeBg: "bg-blue-500/[0.08]",
        headerBg: "bg-blue-500/[0.04]",
        text: "text-blue-400",
        iconBg: "bg-blue-500/10",
        thColor: "text-blue-500/60",
        divideColor: "divide-blue-500/10",
        resultBg: "bg-blue-500/[0.08] border-blue-500/20",
        badgeCls: "bg-blue-500/15 text-blue-300 border-blue-500/20",
        glowColor: "rgba(59,130,246,0.12)",
    },
    amber: {
        border: "border-amber-500/30",
        activeBg: "bg-amber-500/[0.08]",
        headerBg: "bg-amber-500/[0.04]",
        text: "text-amber-400",
        iconBg: "bg-amber-500/10",
        thColor: "text-amber-500/60",
        divideColor: "divide-amber-500/10",
        resultBg: "bg-amber-500/[0.08] border-amber-500/20",
        badgeCls: "bg-amber-500/15 text-amber-300 border-amber-500/20",
        glowColor: "rgba(245,158,11,0.12)",
    },
    rose: {
        border: "border-rose-500/30",
        activeBg: "bg-rose-500/[0.08]",
        headerBg: "bg-rose-500/[0.04]",
        text: "text-rose-400",
        iconBg: "bg-rose-500/10",
        thColor: "text-rose-500/60",
        divideColor: "divide-rose-500/10",
        resultBg: "bg-rose-500/[0.08] border-rose-500/20",
        badgeCls: "bg-rose-500/15 text-rose-300 border-rose-500/20",
        glowColor: "rgba(244,63,94,0.12)",
    },
};

// ── Single method card (full table) ──────────────────────────────────────────
interface MethodCardProps {
    connectionId: string;
    activeConnection: string | null;
    onHighlight: (c: string | null) => void;
    color: Color;
    icon: React.ElementType;
    title: string;
    badge: string;
    subtitle: string;
    what: string;
    whenUse: string;
    rows: { label: string; value: string; isResult?: boolean }[];
    resultLabel: string;
    resultValue: number;
    compact?: boolean;
    delay?: number;
}

export function ValuationMethodCard({
    connectionId, activeConnection, onHighlight,
    color, icon: Icon, title, badge, subtitle, what, whenUse,
    rows, resultLabel, resultValue, compact, delay = 0,
}: MethodCardProps) {
    const c = colorMap[color];
    const isActive = activeConnection === connectionId;
    const anyValuationActive = activeConnection !== null &&
        Object.values(VALUATION_CONNECTIONS).includes(activeConnection as never);
    const isDimmed = anyValuationActive && !isActive;

    const px = compact ? "px-3" : "px-4";
    const py = compact ? "py-1.5" : "py-2";
    const headerPx = compact ? "px-3 py-2.5" : "px-4 py-3";
    const iconBox = compact ? "w-7 h-7 rounded-lg" : "w-9 h-9 rounded-xl";
    const iconSz = compact ? "w-3.5 h-3.5" : "w-4 h-4";
    const titleSz = compact ? "text-xs font-bold" : "text-sm font-bold";
    const textSz = compact ? "text-[10px]" : "text-xs";

    return (
        <motion.div
            id={connectionId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay }}
            className={`
                relative rounded-2xl border bg-black/60 backdrop-blur-xl overflow-hidden
                transition-all duration-300 cursor-pointer flex flex-col
                ${c.border}
                ${isDimmed ? "opacity-40" : ""}
            `}
            style={isActive ? { boxShadow: `0 0 40px ${c.glowColor}` } : {}}
            onMouseEnter={() => onHighlight(connectionId)}
            onMouseLeave={() => onHighlight(null)}
        >
            {/* Header */}
            <div className={`${headerPx} ${c.headerBg} border-b ${c.border} flex items-center justify-between shrink-0`}>
                <div className="flex items-center gap-2 min-w-0">
                    <div className={`flex items-center justify-center shrink-0 ${iconBox} ${c.iconBg}`}>
                        <Icon className={`${iconSz} ${c.text}`} />
                    </div>
                    <div className="min-w-0">
                        <h4 className={`${titleSz} text-white truncate`}>{title}</h4>
                        {!compact && (
                            <p className="text-[10px] text-gray-500 mt-0.5 truncate">{subtitle}</p>
                        )}
                    </div>
                </div>
                <span className={`ml-2 shrink-0 inline-block font-mono font-bold text-[10px] px-2 py-0.5 rounded-full border ${c.badgeCls}`}>
                    {badge}
                </span>
            </div>

            {/* O que é / quando usar */}
            {!compact && (
                <div className={`${px} pt-2.5 pb-2 border-b border-white/[0.04] bg-white/[0.01] shrink-0`}>
                    <div className="flex gap-1.5 mb-1">
                        <Info className="w-3 h-3 text-gray-500 shrink-0 mt-0.5" />
                        <p className={`${textSz} text-gray-400 leading-relaxed`}>{what}</p>
                    </div>
                    <p className={`${textSz} text-gray-600 leading-relaxed italic`}>
                        Quando usar: {whenUse}
                    </p>
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto grow">
                <table className="w-full min-w-0">
                    <thead>
                        <tr className={`border-b border-white/[0.04]`}>
                            <th className={`${px} ${py} text-left ${textSz} font-semibold ${c.thColor} uppercase tracking-wider`}>
                                Componente
                            </th>
                            <th className={`${px} ${py} text-right ${textSz} font-semibold ${c.thColor} uppercase tracking-wider`}>
                                Valor
                            </th>
                        </tr>
                    </thead>
                    <tbody className={`divide-y ${c.divideColor}`}>
                        {rows.map((row, i) => (
                            <tr
                                key={i}
                                className={`transition-colors ${row.isResult ? c.activeBg : "hover:bg-white/[0.02]"}`}
                            >
                                <td className={`${px} ${py} ${textSz} ${row.isResult ? `font-semibold ${c.text}` : "text-gray-400"}`}>
                                    {row.label}
                                </td>
                                <td className={`${px} ${py} text-right font-mono ${textSz} ${row.isResult ? `font-bold ${c.text}` : "text-gray-300"}`}>
                                    {row.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Result footer */}
            <div className={`${px} py-2.5 border-t ${c.border} shrink-0`}>
                <div className={`rounded-xl border ${c.resultBg} p-2.5 flex items-center justify-between gap-2`}>
                    <span className={`${textSz} font-semibold text-gray-300`}>{resultLabel}</span>
                    <span className={`font-mono font-bold text-sm ${c.text} whitespace-nowrap`}>
                        {formatCurrency(resultValue)}
                    </span>
                </div>
            </div>

            {/* Glow overlay when active */}
            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: `inset 0 0 30px ${c.glowColor}` }}
                />
            )}
        </motion.div>
    );
}

// ── DCF rows ──────────────────────────────────────────────────────────────────
const dcfRows = [
    { label: "EBITDA Projetado — Ano 1", value: formatCurrency(ebitda * 1.15) },
    { label: "EBITDA Projetado — Ano 2", value: formatCurrency(ebitda * 1.32) },
    { label: "EBITDA Projetado — Ano 3", value: formatCurrency(ebitda * 1.52) },
    { label: "(–) Capex & Capital de Giro", value: "–R$ 45.000" },
    { label: "= FCL Total (3 anos)", value: formatCurrency(ebitda * 1.15 + ebitda * 1.32 + ebitda * 1.52 - 45000), isResult: true },
    { label: "Valor Residual (perpetuidade)", value: "R$ 650.000" },
];
const dcfTotal = ebitda * 1.15 + ebitda * 1.32 + ebitda * 1.52 - 45000 + 650000;

// ── Props for wrapper (kept for backwards-compat if needed) ───────────────────
interface ValuationTableProps {
    compact?: boolean;
    activeConnection: string | null;
    onHighlight: (connection: string | null) => void;
}

// ── Main export: 4 cards in a grid ───────────────────────────────────────────
export function ValuationTable({ compact, activeConnection, onHighlight }: ValuationTableProps) {
    const methods: Omit<MethodCardProps, "activeConnection" | "onHighlight">[] = [
        {
            connectionId: VALUATION_CONNECTIONS.ebitda,
            color: "emerald",
            icon: TrendingUp,
            title: "EV/EBITDA",
            badge: "6×",
            subtitle: "Enterprise Value / EBITDA",
            what: "Divide o valor da empresa pelo EBITDA. Remove os efeitos de estrutura de capital, impostos e depreciação, tornando a comparação entre empresas mais justa.",
            whenUse: "Empresas lucrativas e maduras em setores tradicionais (varejo, indústria, serviços).",
            rows: [
                { label: "EBITDA (DRE)", value: formatCurrency(ebitda) },
                { label: "Múltiplo de mercado", value: "6×" },
                { label: "= EV (Valor da Empresa)", value: formatCurrency(ebitda * 6), isResult: true },
            ],
            resultLabel: "Valor estimado (EV/EBITDA)",
            resultValue: ebitda * 6,
            delay: 0,
        },
        {
            connectionId: VALUATION_CONNECTIONS.lucro,
            color: "blue",
            icon: DollarSign,
            title: "P/L — Preço / Lucro",
            badge: "10×",
            subtitle: "Price to Earnings (P/E)",
            what: "Divide o preço da empresa pelo Lucro Líquido. Indica quantos anos de lucro o comprador pagaria para adquirir o negócio.",
            whenUse: "Empresas lucrativas e estáveis; usado em valuations de PMEs e em bolsa.",
            rows: [
                { label: "Lucro Líquido (DRE)", value: formatCurrency(lucroLiquido) },
                { label: "Múltiplo P/L", value: "10×" },
                { label: "= Valor de Mercado (P/L)", value: formatCurrency(lucroLiquido * 10), isResult: true },
            ],
            resultLabel: "Valor estimado (P/L)",
            resultValue: lucroLiquido * 10,
            delay: 0.06,
        },
        {
            connectionId: VALUATION_CONNECTIONS.receita,
            color: "amber",
            icon: Layers,
            title: "EV/Receita",
            badge: "1,2×",
            subtitle: "Enterprise Value / Revenue",
            what: "Divide o valor da empresa pela Receita Bruta. Ignora margens — útil quando a empresa ainda não tem lucro ou está em crescimento acelerado.",
            whenUse: "Startups e empresas em expansão com margens negativas onde múltiplos de lucro não se aplicam.",
            rows: [
                { label: "Receita Bruta (DRE)", value: formatCurrency(receitaBruta) },
                { label: "Múltiplo EV/Receita", value: "1,2×" },
                { label: "= EV (Valor da Empresa)", value: formatCurrency(receitaBruta * 1.2), isResult: true },
            ],
            resultLabel: "Valor estimado (EV/Receita)",
            resultValue: receitaBruta * 1.2,
            delay: 0.12,
        },
        {
            connectionId: VALUATION_CONNECTIONS.dcf,
            color: "rose",
            icon: BarChart2,
            title: "DCF — Fluxo Descontado",
            badge: "Projeção",
            subtitle: "Discounted Cash Flow",
            what: "Projeta os fluxos de caixa futuros e os desconta ao valor presente usando o WACC. Método mais completo, mas exige premissas claras.",
            whenUse: "Quando há previsibilidade de FCL e premissas bem definidas. Padrão em M&A e transações estratégicas.",
            rows: dcfRows,
            resultLabel: "Valor da Empresa (DCF)",
            resultValue: dcfTotal,
            delay: 0.18,
        },
    ];

    return (
        <>
            {methods.map((m) => (
                <ValuationMethodCard
                    key={m.connectionId}
                    {...m}
                    activeConnection={activeConnection}
                    onHighlight={onHighlight}
                    compact={compact}
                />
            ))}
        </>
    );
}
