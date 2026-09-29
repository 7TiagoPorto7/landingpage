import { VisualFrame } from "./frame";

// Painel do Starter Kit com dados de exemplo de uma pequena empresa de serviços
const MONTHS = [
    { m: "Jan", r: 38, res: 4.1 },
    { m: "Fev", r: 41, res: 5.2 },
    { m: "Mar", r: 44, res: 6.0 },
    { m: "Abr", r: 43, res: 5.4 },
    { m: "Mai", r: 46, res: 7.3 },
    { m: "Jun", r: 48.2, res: 8.45 },
];

export function StarterKitDashboard() {
    const max = 50;
    return (
        <VisualFrame title="Starter_Kit_Financeiro.xlsx  |  Dashboard" note="Ilustração com dados de exemplo">
            <div className="grid grid-cols-2 gap-3">
                {[
                    ["Receita do mês", "R$ 48.200"],
                    ["Resultado", "R$ 8.450"],
                    ["Margem líquida", "17,5%"],
                    ["Saldo em caixa", "R$ 21.300"],
                ].map(([k, v]) => (
                    <div key={k} className="rounded-xl bg-[var(--paper-2)] p-3">
                        <p className="text-[11px] text-[var(--ink-3)]">{k}</p>
                        <p className="mt-0.5 text-lg font-semibold tracking-[-0.01em]">{v}</p>
                    </div>
                ))}
            </div>
            <p className="mt-5 font-semibold">Receita e resultado (R$ mil)</p>
            <div className="mt-3 flex h-32 items-end gap-3">
                {MONTHS.map((x) => (
                    <div key={x.m} className="flex h-full flex-1 flex-col items-center gap-1.5">
                        <div className="flex w-full flex-1 items-end justify-center gap-1">
                            <span className="w-1/2 rounded-t bg-[var(--navy)]" style={{ height: `${(x.r / max) * 100}%` }} />
                            <span className="w-1/2 rounded-t bg-[var(--amber)]" style={{ height: `${(x.res / max) * 100}%` }} />
                        </div>
                        <span className="text-[11px] text-[var(--ink-3)]">{x.m}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-[#e8f4ee] px-3 py-2.5">
                <span className="font-semibold text-[var(--ok)]">Conciliação bancária</span>
                <span className="font-semibold text-[var(--ok)]">diferença R$ 0 ✓</span>
            </div>
        </VisualFrame>
    );
}
