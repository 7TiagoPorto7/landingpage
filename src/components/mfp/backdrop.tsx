import { cn } from "@/lib/utils";

// Vetor de fundo da marca: curvas no movimento das faixas do logo e uma linha de resultado subindo.
// Fica atrás do conteúdo, sem interação, e se adapta a fundo claro ou escuro.
export function Backdrop({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
    const line = tone === "light" ? "15,23,42" : "255,255,255";
    const curves = Array.from({ length: 9 }, (_, i) => {
        const y = 150 + i * 62;
        return `M -80 ${y + 260} C 340 ${y + 220}, 620 ${y + 40}, 900 ${y - 60} S 1320 ${y - 300}, 1560 ${y - 330}`;
    });

    return (
        <svg
            aria-hidden
            viewBox="0 0 1440 820"
            preserveAspectRatio="xMidYMid slice"
            className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
        >
            <defs>
                <linearGradient id={`fade-${tone}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor={`rgb(${line})`} stopOpacity="0" />
                    <stop offset="0.45" stopColor={`rgb(${line})`} stopOpacity={tone === "light" ? 0.16 : 0.14} />
                    <stop offset="1" stopColor={`rgb(${line})`} stopOpacity={tone === "light" ? 0.05 : 0.04} />
                </linearGradient>
                <radialGradient id={`glow-${tone}`} cx="0.82" cy="0.18" r="0.55">
                    <stop offset="0" style={{ stopColor: "var(--product, #3b82f6)" }} stopOpacity={tone === "light" ? 0.18 : 0.24} />
                    <stop offset="1" style={{ stopColor: "var(--product, #3b82f6)" }} stopOpacity="0" />
                </radialGradient>
            </defs>

            <rect width="1440" height="820" fill={`url(#glow-${tone})`} />

            {curves.map((d, i) => (
                <path key={i} d={d} fill="none" stroke={`url(#fade-${tone})`} strokeWidth={i === 4 ? 1.6 : 1} />
            ))}

            {/* faixa na cor do produto, como a seta do logo */}
            <path
                d="M -80 700 C 360 660, 640 470, 920 360 S 1330 110, 1560 80"
                fill="none"
                style={{ stroke: "var(--product, #f59e0b)" }}
                strokeOpacity={tone === "light" ? 0.6 : 0.75}
                strokeWidth="2.2"
                strokeLinecap="round"
            />

            {/* linha de resultado com pontos, discreta */}
            <polyline
                points="980,600 1060,560 1140,574 1220,500 1300,468 1380,404"
                fill="none"
                stroke="#3b82f6"
                strokeOpacity={tone === "light" ? 0.35 : 0.5}
                strokeWidth="1.6"
            />
            {[
                [980, 600],
                [1060, 560],
                [1140, 574],
                [1220, 500],
                [1300, 468],
                [1380, 404],
            ].map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" fill="#3b82f6" fillOpacity={tone === "light" ? 0.45 : 0.6} />
            ))}
        </svg>
    );
}
