import { cn } from "@/lib/utils";

// Selo circular de garantia, com o texto girando em volta do número de dias
export function GuaranteeSeal({ days = 7, className }: { days?: number; className?: string }) {
    const ring = `GARANTIA DE ${days} DIAS • REEMBOLSO INTEGRAL • `;
    return (
        <svg viewBox="0 0 200 200" role="img" aria-label={`Selo de garantia de ${days} dias`} className={cn("h-44 w-44", className)}>
            <defs>
                <path id="seal-ring" d="M100,26 a74,74 0 1,1 0,148 a74,74 0 1,1 0,-148" />
            </defs>
            {/* Borda serrilhada do selo */}
            <path
                d={Array.from({ length: 48 }, (_, i) => {
                    const a = (i / 48) * Math.PI * 2;
                    const r = i % 2 === 0 ? 98 : 92;
                    return `${i === 0 ? "M" : "L"}${(100 + r * Math.cos(a)).toFixed(2)},${(100 + r * Math.sin(a)).toFixed(2)}`;
                }).join(" ") + "Z"}
                fill="#f59e0b"
            />
            <circle cx="100" cy="100" r="86" fill="#070d24" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#f59e0b" strokeOpacity="0.5" strokeWidth="1.5" />
            <text fill="#f59e0b" fontSize="13" fontWeight="700">
                <textPath href="#seal-ring" textLength="462" lengthAdjust="spacing">
                    {ring}
                </textPath>
            </text>
            <text x="100" y="108" textAnchor="middle" fill="white" fontSize="54" fontWeight="700" letterSpacing="-2">
                {days}
            </text>
            <text x="100" y="134" textAnchor="middle" fill="white" fontSize="15" fontWeight="600" letterSpacing="1">
                DIAS
            </text>
        </svg>
    );
}
