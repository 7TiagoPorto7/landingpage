"use client";

import { motion } from "framer-motion";

interface ConnectionArrowProps {
    from: string;
    to: string;
    label: string;
    color: "emerald" | "blue" | "amber";
    connection: string;
    activeConnection: string | null;
    onHighlight: (connection: string | null) => void;
    reverse?: boolean;
}

const colorMap = {
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400", glow: "rgba(16,185,129,0.3)" },
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", dot: "bg-blue-400", glow: "rgba(59,130,246,0.3)" },
    amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", dot: "bg-amber-400", glow: "rgba(245,158,11,0.3)" },
};

export function ConnectionArrow({ from, to, label, color, connection, activeConnection, onHighlight, reverse }: ConnectionArrowProps) {
    const isActive = activeConnection === connection;
    const isDimmed = activeConnection !== null && !isActive;
    const c = colorMap[color];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className={`
                flex items-center justify-center gap-3 py-6 transition-all duration-300 cursor-pointer
                ${isDimmed ? "opacity-30" : "opacity-100"}
            `}
            onMouseEnter={() => onHighlight(connection)}
            onMouseLeave={() => onHighlight(null)}
        >
            {/* Arrow visual */}
            <div className="flex items-center gap-3 max-w-md w-full">
                {/* From label */}
                <span className={`text-xs font-mono font-bold shrink-0 ${c.text} opacity-60`}>{from}</span>

                {/* Arrow line */}
                <div className="relative flex-1 flex items-center">
                    {/* Animated dots along the line */}
                    <div className={`h-px w-full ${isActive ? c.border.replace("border", "bg") : "bg-white/10"} transition-all duration-300 relative overflow-hidden`}>
                        {isActive && (
                            <motion.div
                                className={`absolute top-[-2px] w-2 h-2 rounded-full ${c.dot}`}
                                animate={{ left: reverse ? ["100%", "-5%"] : ["-5%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                style={{ filter: `drop-shadow(0 0 4px ${c.glow})` }}
                            />
                        )}
                    </div>

                    {/* Center label */}
                    <div className={`
                        absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2
                        px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap
                        border transition-all duration-300
                        ${isActive ? `${c.bg} ${c.border} ${c.text}` : "bg-black/80 border-white/10 text-gray-500"}
                    `}>
                        {label}
                    </div>

                    {/* Arrow tip */}
                    <div className={`w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent shrink-0 transition-colors duration-300
                        ${reverse ? "border-r-[8px] border-l-0" : "border-l-[8px] border-r-0"}
                        ${isActive ? (reverse ? `border-r-${color}-400` : `border-l-${color}-400`) : (reverse ? "border-r-white/20" : "border-l-white/20")}
                    `}
                    style={isActive ? { [reverse ? "borderRightColor" : "borderLeftColor"]: c.glow.replace(",0.3)", ",0.8)") } : {}}
                    />
                </div>

                {/* To label */}
                <span className={`text-xs font-mono font-bold shrink-0 ${c.text} opacity-60`}>{to}</span>
            </div>
        </motion.div>
    );
}
