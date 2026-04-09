"use client";

import { motion } from "framer-motion";

interface FlowchartProps {
    activeConnection: string | null;
    onHighlight: (connection: string | null) => void;
}

type Connection = {
    id: string;
    from: string;
    to: string;
    label: string;
    description: string;
    color: string;
    colorHex: string;
};

const connections: Connection[] = [
    {
        id: "dre-dfc-lucro",
        from: "DRE",
        to: "DFC",
        label: "Lucro Líquido",
        description: "O ponto de partida do DFC (método indireto) é o Lucro Líquido apurado na DRE.",
        color: "emerald",
        colorHex: "#34d399",
    },
    {
        id: "dre-dfc-depreciacao",
        from: "DRE",
        to: "DFC",
        label: "Depreciação",
        description: "A depreciação reduz o lucro na DRE, mas não é uma saída de caixa — por isso é somada de volta no DFC.",
        color: "emerald",
        colorHex: "#34d399",
    },
    {
        id: "dfc-balanco-caixa",
        from: "DFC",
        to: "Balanço",
        label: "Saldo de Caixa",
        description: "O saldo final de caixa do DFC é exatamente o valor de Caixa que aparece no Ativo do Balanço.",
        color: "blue",
        colorHex: "#60a5fa",
    },
    {
        id: "dre-balanco-lucro",
        from: "DRE",
        to: "Balanço",
        label: "Lucros Acumulados",
        description: "O Lucro Líquido da DRE (menos dividendos) alimenta os Lucros Acumulados no Patrimônio Líquido.",
        color: "amber",
        colorHex: "#fbbf24",
    },
];

export function Flowchart({ activeConnection, onHighlight }: FlowchartProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
        >
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Como os demonstrativos se conectam
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Passe o mouse sobre cada conexão para entender o fluxo de dados entre os três demonstrativos financeiros.
                </p>
            </div>

            {/* Flowchart Diagram */}
            <div className="relative max-w-4xl mx-auto">
                {/* Three Cards in Triangle Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                    {/* DRE Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative z-10"
                    >
                        <div className={`rounded-2xl border-2 p-6 text-center transition-all duration-500 ${
                            activeConnection && activeConnection.includes("dre")
                                ? "border-emerald-400/60 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
                                : "border-emerald-500/20 bg-black/60"
                        }`}>
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
                                <span className="text-2xl font-bold text-emerald-400">DRE</span>
                            </div>
                            <h3 className="text-white font-bold mb-1">Demonstração do Resultado</h3>
                            <p className="text-gray-500 text-sm">Receitas − Custos − Despesas = Lucro</p>
                            <div className="mt-3 text-xs text-emerald-400/60 font-mono">Período</div>
                        </div>
                    </motion.div>

                    {/* DFC Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className={`rounded-2xl border-2 p-6 text-center transition-all duration-500 ${
                            activeConnection && (activeConnection.includes("dfc") || activeConnection.includes("dre-dfc"))
                                ? "border-amber-400/60 bg-amber-500/10 shadow-[0_0_40px_rgba(245,158,11,0.15)]"
                                : "border-amber-500/20 bg-black/60"
                        }`}>
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-amber-500/15 flex items-center justify-center">
                                <span className="text-2xl font-bold text-amber-400">DFC</span>
                            </div>
                            <h3 className="text-white font-bold mb-1">Fluxo de Caixa</h3>
                            <p className="text-gray-500 text-sm">Entradas − Saídas = Saldo de Caixa</p>
                            <div className="mt-3 text-xs text-amber-400/60 font-mono">Período</div>
                        </div>
                    </motion.div>

                    {/* Balanço Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative z-10"
                    >
                        <div className={`rounded-2xl border-2 p-6 text-center transition-all duration-500 ${
                            activeConnection && (activeConnection.includes("balanco"))
                                ? "border-blue-400/60 bg-blue-500/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                                : "border-blue-500/20 bg-black/60"
                        }`}>
                            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-500/15 flex items-center justify-center">
                                <span className="text-2xl font-bold text-blue-400">BP</span>
                            </div>
                            <h3 className="text-white font-bold mb-1">Balanço Patrimonial</h3>
                            <p className="text-gray-500 text-sm">Ativo = Passivo + Patrimônio Líquido</p>
                            <div className="mt-3 text-xs text-blue-400/60 font-mono">Data</div>
                        </div>
                    </motion.div>
                </div>

                {/* SVG Arrow Connectors – desktop only */}
                <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" style={{ top: 0, left: 0 }}>
                    {/* DRE → DFC arrow (top: from right edge of card 1 to left edge of card 2) */}
                    <motion.line
                        x1="33%" y1="50%" x2="37%" y2="50%"
                        stroke="#34d399"
                        strokeWidth={activeConnection === "dre-dfc-lucro" || activeConnection === "dre-dfc-depreciacao" ? 3 : 1.5}
                        strokeDasharray="6 3"
                        opacity={activeConnection && !activeConnection.includes("dre-dfc") ? 0.2 : 0.6}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    {/* DFC → Balanço arrow */}
                    <motion.line
                        x1="66%" y1="50%" x2="70%" y2="50%"
                        stroke="#60a5fa"
                        strokeWidth={activeConnection === "dfc-balanco-caixa" ? 3 : 1.5}
                        strokeDasharray="6 3"
                        opacity={activeConnection && activeConnection !== "dfc-balanco-caixa" ? 0.2 : 0.6}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                    />
                </svg>
            </div>

            {/* Connection Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {connections.map((conn, i) => {
                    const isActive = activeConnection === conn.id;
                    return (
                        <motion.div
                            key={conn.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            className={`
                                relative rounded-xl p-4 border transition-all duration-300 cursor-pointer
                                ${isActive
                                    ? `border-${conn.color}-400/50 bg-${conn.color}-500/10 shadow-lg`
                                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20"
                                }
                            `}
                            onMouseEnter={() => onHighlight(conn.id)}
                            onMouseLeave={() => onHighlight(null)}
                        >
                            <div className="flex items-start gap-3">
                                {/* Color indicator */}
                                <div
                                    className="mt-1 w-3 h-3 rounded-full shrink-0"
                                    style={{ backgroundColor: conn.colorHex, opacity: isActive ? 1 : 0.6 }}
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-mono text-gray-500">{conn.from}</span>
                                        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
                                            <path d="M0 6h14M10 1l5 5-5 5" stroke={conn.colorHex} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-xs font-mono text-gray-500">{conn.to}</span>
                                    </div>
                                    <h4 className="text-white font-semibold text-sm mb-1">{conn.label}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{conn.description}</p>
                                </div>
                            </div>

                            {/* Glow effect when active */}
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 rounded-xl pointer-events-none"
                                    style={{
                                        boxShadow: `0 0 30px ${conn.colorHex}15, inset 0 0 30px ${conn.colorHex}05`,
                                    }}
                                />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
}
