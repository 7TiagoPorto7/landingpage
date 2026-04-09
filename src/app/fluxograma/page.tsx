"use client";

import { useState } from "react";
import { FluxogramaHero } from "@/components/fluxograma/hero";
import { Flowchart } from "@/components/fluxograma/flowchart";
import { DreTable } from "@/components/fluxograma/dre-table";
import { FluxoCaixaTable } from "@/components/fluxograma/fluxo-caixa-table";
import { BalancoTable } from "@/components/fluxograma/balanco-table";
import { PremissasTable } from "@/components/fluxograma/premissas-table";
import { FluxogramaCTA } from "@/components/fluxograma/cta-banner";
import { Footer } from "@/components/footer";

export default function FluxogramaPage() {
    const [activeConnection, setActiveConnection] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-black">
            <FluxogramaHero />

            <div className="px-4 mx-auto max-w-[1600px] pb-16">
                {/* Overview Flowchart */}
                <Flowchart
                    activeConnection={activeConnection}
                    onHighlight={setActiveConnection}
                />

                {/* Divider */}
                <div className="py-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Section Title */}
                <div className="text-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Os três demonstrativos em detalhe
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        Passe o mouse sobre os valores com <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 align-middle mx-0.5" /> para ver a conexão entre os demonstrativos.
                    </p>
                </div>

                {/* Three Tables + Premissas */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 items-start">
                    {/* DRE */}
                    <div className="relative">
                        <DreTable
                            activeConnection={activeConnection}
                            onHighlight={setActiveConnection}
                            compact
                        />
                        {/* Arrow label: DRE → DFC */}
                        <div className="hidden xl:flex absolute -right-[0.85rem] top-1/4 z-20 flex-col items-center gap-1">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center cursor-pointer hover:bg-emerald-500/25 transition-all"
                                onMouseEnter={() => setActiveConnection("dre-dfc-lucro")}
                                onMouseLeave={() => setActiveConnection(null)}
                            >
                                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* DFC */}
                    <div className="relative">
                        <FluxoCaixaTable
                            activeConnection={activeConnection}
                            onHighlight={setActiveConnection}
                            compact
                        />
                        {/* Arrow label: DFC → Balanço */}
                        <div className="hidden xl:flex absolute -right-[0.85rem] top-1/4 z-20 flex-col items-center gap-1">
                            <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center cursor-pointer hover:bg-blue-500/25 transition-all"
                                onMouseEnter={() => setActiveConnection("dfc-balanco-caixa")}
                                onMouseLeave={() => setActiveConnection(null)}
                            >
                                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Balanço */}
                    <div className="relative">
                        <BalancoTable
                            activeConnection={activeConnection}
                            onHighlight={setActiveConnection}
                            compact
                        />
                        {/* Arrow label: Balanço ↔ Premissas */}
                        <div className="hidden xl:flex absolute -right-[0.85rem] top-1/4 z-20 flex-col items-center gap-1">
                            <div className="w-5 h-5 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center cursor-pointer hover:bg-violet-500/25 transition-all"
                                onMouseEnter={() => setActiveConnection("premissa-pmr")}
                                onMouseLeave={() => setActiveConnection(null)}
                            >
                                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6h8M7 3l3 3-3 3" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Premissas */}
                    <PremissasTable
                        activeConnection={activeConnection}
                        onHighlight={setActiveConnection}
                        compact
                    />
                </div>

                {/* Connection Legend (below tables) */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div
                        className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 cursor-pointer hover:bg-emerald-500/10 transition-all"
                        onMouseEnter={() => setActiveConnection("dre-dfc-lucro")}
                        onMouseLeave={() => setActiveConnection(null)}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-emerald-400 font-bold text-xs">DRE → DFC</span>
                        </div>
                        <p className="text-gray-500 text-[11px] leading-relaxed">
                            <strong className="text-gray-300">Lucro Líquido</strong> e <strong className="text-gray-300">Depreciação</strong> iniciam o fluxo de caixa operacional.
                        </p>
                    </div>
                    <div
                        className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 cursor-pointer hover:bg-blue-500/10 transition-all"
                        onMouseEnter={() => setActiveConnection("dfc-balanco-caixa")}
                        onMouseLeave={() => setActiveConnection(null)}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            <span className="text-blue-400 font-bold text-xs">DFC → Balanço</span>
                        </div>
                        <p className="text-gray-500 text-[11px] leading-relaxed">
                            O <strong className="text-gray-300">Saldo Final</strong> do DFC = <strong className="text-gray-300">Caixa</strong> no Ativo do Balanço.
                        </p>
                    </div>
                    <div
                        className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 cursor-pointer hover:bg-amber-500/10 transition-all"
                        onMouseEnter={() => setActiveConnection("dre-balanco-lucro")}
                        onMouseLeave={() => setActiveConnection(null)}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span className="text-amber-400 font-bold text-xs">DRE → Balanço</span>
                        </div>
                        <p className="text-gray-500 text-[11px] leading-relaxed">
                            <strong className="text-gray-300">Lucro Líquido</strong> (– dividendos) → <strong className="text-gray-300">Lucros Acumulados</strong> no PL.
                        </p>
                    </div>
                    <div
                        className="p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 cursor-pointer hover:bg-violet-500/10 transition-all"
                        onMouseEnter={() => setActiveConnection("premissa-pmr")}
                        onMouseLeave={() => setActiveConnection(null)}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-violet-400" />
                            <span className="text-violet-400 font-bold text-xs">Premissas → Capital de Giro</span>
                        </div>
                        <p className="text-gray-500 text-[11px] leading-relaxed">
                            <strong className="text-gray-300">PMR, PMP, PME</strong> calculam Contas a Receber, Fornecedores e Estoques a partir da DRE.
                        </p>
                    </div>
                </div>
            </div>

            <FluxogramaCTA />
            <Footer />
        </main>
    );
}
