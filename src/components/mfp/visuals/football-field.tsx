import { VisualFrame } from "./frame";

// Football field do valuation: faixa de valor por ação em cada metodologia
const ROWS = [
    { label: "DCF (FCFF)", lo: 8.2, hi: 11.6 },
    { label: "Cenários bear / bull", lo: 6.8, hi: 13.4 },
    { label: "EV / Receita", lo: 7.4, hi: 10.9 },
    { label: "EV / EBITDA", lo: 8.9, hi: 12.3 },
];
const MIN = 5;
const MAX = 15;
const pos = (v: number) => ((v - MIN) / (MAX - MIN)) * 100;
const brl = (v: number) => v.toFixed(2).replace(".", ",");

export function FootballField() {
    const price = 9.8;
    return (
        <VisualFrame title="Template_Pro.xlsx  |  Football Field" note="Ilustração com a empresa fictícia do modelo (TechFlow S.A.)">
            <p className="font-semibold text-[var(--ink)]">Valor por ação (R$)</p>
            <div className="relative mt-5 space-y-4">
                <div aria-hidden className="absolute inset-y-0 w-px bg-[var(--amber)]" style={{ left: `calc(9.75rem + (100% - 9.75rem) * ${pos(price) / 100})` }} />
                {ROWS.map((r) => (
                    <div key={r.label} className="flex items-center gap-3">
                        <span className="w-[9rem] shrink-0 text-[var(--ink-2)]">{r.label}</span>
                        <div className="relative h-7 flex-1 rounded bg-[var(--paper-2)]">
                            <div
                                className="absolute inset-y-1 flex items-center justify-between rounded bg-[var(--navy)] px-2 text-[11px] font-semibold text-white"
                                style={{ left: `${pos(r.lo)}%`, width: `${pos(r.hi) - pos(r.lo)}%` }}
                            >
                                <span>{brl(r.lo)}</span>
                                <span>{brl(r.hi)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 flex justify-between pl-[9.75rem] text-[11px] text-[var(--ink-3)]">
                {[5, 7.5, 10, 12.5, 15].map((t) => (
                    <span key={t}>{brl(t)}</span>
                ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[var(--grid)] pt-4">
                {[
                    ["WACC", "12,5%"],
                    ["Crescimento na perpetuidade", "4,0%"],
                    ["Checagem do Balanço", "0 ✓"],
                ].map(([k, v]) => (
                    <div key={k}>
                        <p className="text-[11px] text-[var(--ink-3)]">{k}</p>
                        <p className={`text-base font-semibold ${v.includes("✓") ? "text-[var(--ok)]" : ""}`}>{v}</p>
                    </div>
                ))}
            </div>
        </VisualFrame>
    );
}
