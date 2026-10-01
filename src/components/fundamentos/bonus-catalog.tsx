"use client";

import { useRef } from "react";
import { CaretLeft, CaretRight, ChartLineUp, FileXls, Infinity as InfinityIcon, Robot, SquaresFour } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

// Bônus em fileira de pôsteres, como um catálogo de streaming. Valores só dos itens vendidos à parte no site.
const TITLES: { title: string; text: string; tag: string; accent: string; icon: Icon }[] = [
    { title: "Template do modelo integrado", text: "DRE, Balanço e DFC ligados, com checagem de fechamento", tag: "Incluso", accent: "#f59e0b", icon: FileXls },
    { title: "Template Pro", text: "Modelo completo de 3 demonstrativos com valuation por DCF", tag: "Vendido por R$ 97", accent: "#3b82f6", icon: ChartLineUp },
    { title: "Starter Kit Financeiro", text: "DRE, fluxo de caixa e dashboard de KPIs automáticos", tag: "Vendido por R$ 67,90", accent: "#10b981", icon: SquaresFour },
    { title: "Planilha de prompts de IA", text: "Prompts para análise de DRE e resumos executivos", tag: "Incluso", accent: "#8b5cf6", icon: Robot },
    { title: "Novas aulas", text: "Módulos complementares que recebem aulas com frequência", tag: "Sempre no seu acesso", accent: "#06b6d4", icon: InfinityIcon },
];

// Arte do pôster: linhas de gráfico e grade, na cor de cada produto
function PosterArt({ accent, seed }: { accent: string; seed: number }) {
    const pts = Array.from({ length: 7 }, (_, i) => `${i * 40},${150 - ((i * 37 + seed * 23) % 70) - i * 9}`).join(" ");
    return (
        <svg aria-hidden viewBox="0 0 240 200" className="absolute inset-x-0 top-0 h-[62%] w-full" preserveAspectRatio="none">
            {Array.from({ length: 6 }, (_, i) => (
                <line key={i} x1="0" x2="240" y1={30 + i * 30} y2={30 + i * 30} stroke="white" strokeOpacity="0.06" />
            ))}
            <polyline points={pts} fill="none" stroke={accent} strokeWidth="3" strokeLinejoin="round" />
            <polygon points={`0,200 ${pts} 240,200`} fill={accent} fillOpacity="0.18" />
        </svg>
    );
}

export function BonusCatalog() {
    const row = useRef<HTMLUListElement>(null);
    const move = (dir: 1 | -1) => row.current?.scrollBy({ left: dir * row.current.clientWidth * 0.8, behavior: "smooth" });

    return (
        <div className="relative">
            <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-lg font-semibold">Bônus inclusos no seu acesso</p>
                <div className="hidden gap-2 sm:flex">
                    {([-1, 1] as const).map((d) => (
                        <button
                            key={d}
                            type="button"
                            onClick={() => move(d)}
                            aria-label={d < 0 ? "Ver anteriores" : "Ver próximos"}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
                        >
                            {d < 0 ? <CaretLeft weight="bold" className="h-4 w-4" /> : <CaretRight weight="bold" className="h-4 w-4" />}
                        </button>
                    ))}
                </div>
            </div>

            <ul
                ref={row}
                className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-6 pt-2 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
            >
                {TITLES.map(({ title, text, tag, accent, icon: Icon }, i) => (
                    <li key={title} className="flex shrink-0 snap-start items-end">
                        {/* Número grande ao lado do pôster, como numa lista dos mais vistos */}
                        <span
                            aria-hidden
                            className="-mr-5 select-none text-[7.5rem] font-bold leading-[0.8] text-transparent sm:text-[9rem]"
                            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.35)" }}
                        >
                            {i + 1}
                        </span>
                        <article
                            className="group relative aspect-[2/3] w-44 overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] sm:w-52"
                            style={{ background: `linear-gradient(160deg, color-mix(in srgb, ${accent} 38%, #070d24) 0%, #070d24 70%)` }}
                        >
                            <PosterArt accent={accent} seed={i} />
                            <span
                                className="absolute left-3 top-3 rounded-md px-2 py-1 text-[11px] font-semibold text-[var(--ink)]"
                                style={{ backgroundColor: accent }}
                            >
                                Bônus
                            </span>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 pt-16">
                                <Icon aria-hidden weight="duotone" className="h-7 w-7" style={{ color: accent }} />
                                <h3 className="mt-2 text-lg font-semibold leading-tight">{title}</h3>
                                <p className="mt-1.5 text-[13px] leading-snug text-white/70">{text}</p>
                                <p className="mt-3 text-xs font-semibold" style={{ color: accent }}>
                                    {tag}
                                </p>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}
