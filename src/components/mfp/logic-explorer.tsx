"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ConnectionMap } from "@/components/mfp/connection-map";
import { CashBridge } from "@/components/mfp/cash-bridge";

const VIEWS = [
    { key: "ligacoes", label: "As 4 ligações do modelo" },
    { key: "caixa", label: "Lucro não é caixa" },
] as const;

// Os dois exemplos interativos do curso no mesmo lugar
export function LogicExplorer() {
    const [view, setView] = useState<(typeof VIEWS)[number]["key"]>("ligacoes");

    return (
        <div>
            <div role="tablist" aria-label="Exemplos" className="mb-8 inline-flex rounded-lg border border-[var(--grid)] bg-white p-1">
                {VIEWS.map((v) => (
                    <button
                        key={v.key}
                        role="tab"
                        type="button"
                        aria-selected={view === v.key}
                        onClick={() => setView(v.key)}
                        className={cn(
                            "h-10 rounded-md px-4 text-[15px] font-semibold transition-colors",
                            view === v.key ? "bg-[var(--ink)] text-white" : "text-[var(--ink-2)] hover:text-[var(--ink)]"
                        )}
                    >
                        {v.label}
                    </button>
                ))}
            </div>
            <div role="tabpanel">{view === "ligacoes" ? <ConnectionMap /> : <CashBridge />}</div>
        </div>
    );
}
