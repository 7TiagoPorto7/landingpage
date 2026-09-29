"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { fmt } from "@/components/mfp/ui";
import { CAIXA_INICIAL, CAPEX, CUSTOS, DEPRECIACAO, DESPESAS, RECEITA, cashModel } from "@/components/mfp/cash-model";

const PRAZOS = [
    { dias: 0, label: "À vista" },
    { dias: 30, label: "30 dias" },
    { dias: 60, label: "60 dias" },
    { dias: 90, label: "90 dias" },
    { dias: 120, label: "120 dias" },
];

// Ponte do caixa inicial ao caixa final, partindo do lucro
export function CashBridge() {
    const [prazo, setPrazo] = useState(30);
    const m = cashModel(prazo);

    const steps = [
        { label: "Caixa no início do ano", value: CAIXA_INICIAL, kind: "base" as const },
        { label: "Lucro do ano", value: m.lucro, kind: "up" as const },
        { label: "Depreciação (reduz o lucro, mas não sai do banco)", value: DEPRECIACAO, kind: "up" as const },
        { label: "Fornecedores que você ainda vai pagar", value: m.fornecedores, kind: "up" as const },
        { label: "Vendas que os clientes ainda não pagaram", value: -m.receber, kind: "down" as const },
        { label: "Investimentos em máquinas e equipamentos", value: -CAPEX, kind: "down" as const },
    ];

    // Posição de cada barra na régua (waterfall)
    let running = 0;
    const bars = steps.map((s) => {
        const from = running;
        running += s.value;
        return { ...s, from, to: running };
    });
    const lo = Math.min(0, ...bars.map((b) => Math.min(b.from, b.to)));
    const hi = Math.max(...bars.map((b) => Math.max(b.from, b.to)));
    const pos = (v: number) => ((v - lo) / (hi - lo)) * 100;
    const negativo = m.caixa < 0;
    const fecha = Math.round(m.ativo) === Math.round(m.passivoPl);

    return (
        <div className="rounded-xl border border-[var(--grid)] bg-white">
            <fieldset className="border-b border-[var(--grid)] p-5 sm:p-7">
                <legend className="sr-only">Prazo que os clientes levam para pagar</legend>
                <p className="text-lg font-bold sm:text-xl">Seus clientes pagam em quantos dias?</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {PRAZOS.map((p) => (
                        <button
                            key={p.dias}
                            type="button"
                            aria-pressed={prazo === p.dias}
                            onClick={() => setPrazo(p.dias)}
                            className={cn(
                                "h-11 rounded-lg border px-4 font-semibold transition-colors",
                                prazo === p.dias
                                    ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                                    : "border-[var(--grid)] bg-white text-[var(--ink-2)] hover:border-[var(--ink)]"
                            )}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            <div className="grid gap-10 p-5 sm:p-7 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
                <ol className="space-y-4" aria-label="Do caixa inicial ao caixa final">
                    {bars.map((b) => (
                        <li key={b.label}>
                            <div className="flex items-baseline justify-between gap-4 text-[15px]">
                                <span className="text-[var(--ink-2)]">{b.label}</span>
                                <span className={cn("font-bold", b.kind === "down" && b.value !== 0 && "text-[var(--pen)]")}>
                                    {b.kind === "up" ? "+" : ""}
                                    {fmt(b.value)}
                                </span>
                            </div>
                            <div className="relative mt-1.5 h-3 rounded-full bg-[var(--paper-2)]">
                                <div
                                    className={cn(
                                        "absolute inset-y-0 rounded-full transition-all duration-500",
                                        b.kind === "down" ? "bg-[var(--pen)]" : b.kind === "base" ? "bg-[var(--ink-3)]" : "bg-[var(--ink)]"
                                    )}
                                    style={{ left: `${pos(Math.min(b.from, b.to))}%`, width: `${Math.max(pos(Math.max(b.from, b.to)) - pos(Math.min(b.from, b.to)), 0.6)}%` }}
                                />
                            </div>
                        </li>
                    ))}
                    <li className="border-t border-[var(--ink)] pt-4">
                        <div className="flex items-baseline justify-between gap-4">
                            <span className="font-bold">Caixa no fim do ano</span>
                            <span className={cn("text-xl font-extrabold", negativo && "text-[var(--pen)]")}>{fmt(m.caixa)}</span>
                        </div>
                        <div className="relative mt-1.5 h-3 rounded-full bg-[var(--paper-2)]">
                            <div
                                className={cn("absolute inset-y-0 rounded-full transition-all duration-500", negativo ? "bg-[var(--pen)]" : "bg-[var(--ok)]")}
                                style={{ left: `${pos(Math.min(0, m.caixa))}%`, width: `${Math.max(pos(Math.max(0, m.caixa)) - pos(Math.min(0, m.caixa)), 0.6)}%` }}
                            />
                        </div>
                    </li>
                </ol>

                <div className="flex flex-col justify-between gap-8 rounded-xl bg-[var(--paper-2)] p-6">
                    <div aria-live="polite">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-[var(--ink-2)]">Lucro</p>
                                <p className="text-4xl font-extrabold">{fmt(m.lucro)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-[var(--ink-2)]">Caixa</p>
                                <p className={cn("text-4xl font-extrabold", negativo && "text-[var(--pen)]")}>{fmt(m.caixa)}</p>
                            </div>
                        </div>
                        <p className={cn("mt-5 text-lg font-semibold leading-snug", negativo ? "text-[var(--pen)]" : "text-[var(--ink)]")}>
                            {negativo
                                ? "A empresa lucrou e ainda precisaria de um empréstimo para pagar as contas."
                                : prazo === 0
                                  ? "À vista, o lucro inteiro vira caixa, e o prazo dos fornecedores ainda ajuda."
                                  : "Mesmo lucro, menos dinheiro no banco: parte da venda ainda não entrou."}
                        </p>
                    </div>
                    <p className="text-sm text-[var(--ink-2)]">
                        <span className={cn("font-bold", fecha ? "text-[var(--ok)]" : "text-[var(--pen)]")}>
                            {fecha ? "✓ O Balanço fecha" : "✗ O Balanço não fecha"}
                        </span>{" "}
                        em todos os cenários: ativo de {fmt(m.ativo)} igual a passivo mais patrimônio de {fmt(m.passivoPl)}.
                    </p>
                </div>
            </div>

            <details className="group border-t border-[var(--grid)]">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-bold sm:px-7 [&::-webkit-details-marker]:hidden">
                    Ver os três demonstrativos completos
                    <span aria-hidden className="text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="grid gap-6 px-5 pb-7 text-sm sm:px-7 md:grid-cols-3">
                    <MiniStatement
                        title="DRE"
                        rows={[
                            ["Receita", RECEITA],
                            ["Custos", -CUSTOS],
                            ["Despesas", -DESPESAS],
                            ["Depreciação", -DEPRECIACAO],
                            ["Impostos (30%)", -m.impostos],
                            ["Lucro líquido", m.lucro, true],
                        ]}
                    />
                    <MiniStatement
                        title="Fluxo de Caixa"
                        rows={[
                            ["Lucro líquido", m.lucro],
                            ["Depreciação", DEPRECIACAO],
                            ["Contas a receber", -m.receber],
                            ["Fornecedores", m.fornecedores],
                            ["Investimentos", -CAPEX],
                            ["Caixa inicial", CAIXA_INICIAL],
                            ["Caixa final", m.caixa, true],
                        ]}
                    />
                    <MiniStatement
                        title="Balanço"
                        rows={[
                            ["Caixa", m.caixa],
                            ["Contas a receber", m.receber],
                            ["Imobilizado", m.imobilizado],
                            ["Ativo total", m.ativo, true],
                            ["Fornecedores", m.fornecedores],
                            ["Patrimônio líquido", m.pl],
                            ["Passivo + PL", m.passivoPl, true],
                        ]}
                    />
                </div>
            </details>
        </div>
    );
}

function MiniStatement({ title, rows }: { title: string; rows: [string, number, boolean?][] }) {
    return (
        <table className="w-full">
            <caption className="mb-2 text-left font-bold">{title}</caption>
            <tbody>
                {rows.map(([label, value, total]) => (
                    <tr key={label} className={cn("border-b border-[var(--grid)]", total && "font-bold")}>
                        <td className="py-1.5">{label}</td>
                        <td className={cn("py-1.5 text-right", value < 0 && "text-[var(--pen)]")}>{fmt(value)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
