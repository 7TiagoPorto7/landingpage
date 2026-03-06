"use client";

import { motion } from "framer-motion";

const rows = [
    {
        feature: "DRE automática",
        sem: false,
        caseira: false,
        sistema: true,
        starter: true,
    },
    {
        feature: "Fluxo de caixa",
        sem: false,
        caseira: false,
        sistema: true,
        starter: true,
    },
    {
        feature: "Dashboard e gráficos",
        sem: false,
        caseira: false,
        sistema: true,
        starter: true,
    },
    {
        feature: "Conciliação bancária",
        sem: false,
        caseira: false,
        sistema: true,
        starter: true,
    },
    {
        feature: "Guia de uso incluso",
        sem: false,
        caseira: false,
        sistema: false,
        starter: true,
    },
    {
        feature: "Simples de usar",
        sem: null,
        caseira: "partial" as const,
        sistema: false,
        starter: true,
    },
    {
        feature: "Sem mensalidade",
        sem: null,
        caseira: true,
        sistema: false,
        starter: true,
    },
    {
        feature: "Funciona no Excel",
        sem: null,
        caseira: "partial" as const,
        sistema: false,
        starter: true,
    },
];

const colHeaders = [
    {
        label: "Sem controle",
        sub: "R$ 0*",
        sub2: "*custa caro em decisões erradas",
        highlight: false,
    },
    { label: "Planilha caseira", sub: "R$ 0", sub2: "", highlight: false },
    {
        label: "Sistema/ERP",
        sub: "R$ 200-500/mês",
        sub2: "",
        highlight: false,
    },
    {
        label: "Starter Kit",
        sub: "Pagamento único",
        sub2: "",
        highlight: true,
        badge: "MELHOR CUSTO-BENEFÍCIO",
    },
];

function CellIcon({
    value,
}: {
    value: boolean | null | "partial";
}) {
    if (value === true)
        return <span className="text-[#548235] text-lg font-bold">✅</span>;
    if (value === false)
        return <span className="text-red-400 text-lg font-bold">❌</span>;
    if (value === "partial")
        return <span className="text-yellow-500 text-lg">⚠️</span>;
    return <span className="text-gray-400 text-sm">—</span>;
}

export function SKComparison() {
    return (
        <section id="comparacao" className="py-20 md:py-28 bg-[#F2F2F2]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[#548235] font-semibold uppercase tracking-wider text-sm mb-3">
                        Comparativo
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F5496]">
                        Quanto custa{" "}
                        <span className="italic text-red-500">NÃO</span> ter controle?
                    </h2>
                </motion.div>

                {/* Table wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto"
                >
                    <div className="max-w-5xl mx-auto">
                        <table className="w-full border-separate border-spacing-0">
                            <thead>
                                <tr>
                                    <th className="text-left p-4 text-gray-500 font-normal text-sm w-48" />
                                    {colHeaders.map((col, i) => (
                                        <th
                                            key={i}
                                            className={`p-4 text-center relative ${col.highlight
                                                ? "bg-[#2F5496] text-white rounded-t-2xl"
                                                : "text-[#2F5496]"
                                                }`}
                                        >
                                            {col.highlight && col.badge && (
                                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#548235] text-white text-xs font-bold px-3 py-1 rounded-full">
                                                    {col.badge}
                                                </span>
                                            )}
                                            <div className="font-bold text-sm md:text-base">
                                                {col.label}
                                            </div>
                                            <div
                                                className={`text-xs mt-1 font-medium ${col.highlight ? "text-[#FFF2CC]" : "text-[#548235]"
                                                    }`}
                                            >
                                                {col.sub}
                                            </div>
                                            {col.sub2 && (
                                                <div
                                                    className={`text-xs mt-0.5 ${col.highlight ? "text-white/60" : "text-gray-400"
                                                        }`}
                                                >
                                                    {col.sub2}
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr
                                        key={i}
                                        className={i % 2 === 0 ? "bg-white" : "bg-[#F2F2F2]"}
                                    >
                                        <td className="p-4 text-gray-700 font-medium text-sm rounded-l-lg">
                                            {row.feature}
                                        </td>
                                        <td className="p-4 text-center">
                                            <CellIcon value={row.sem} />
                                        </td>
                                        <td className="p-4 text-center">
                                            <CellIcon value={row.caseira} />
                                        </td>
                                        <td className="p-4 text-center">
                                            <CellIcon value={row.sistema} />
                                        </td>
                                        <td
                                            className={`p-4 text-center ${i === rows.length - 1
                                                ? "bg-[#2F5496]/5 rounded-br-2xl"
                                                : "bg-[#2F5496]/5"
                                                }`}
                                        >
                                            <CellIcon value={row.starter} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
