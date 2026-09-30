"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PREMISSAS, projetar, type Ano } from "@/components/mfp/projection";

// Planilha ilustrativa do modelo integrado: abas clicáveis, fórmulas reais na barra de fórmulas
// e cores na convenção de banco (azul = premissa, preto = fórmula, verde = link de outra aba).

const ANOS = projetar(3);
const COLS = ["C", "D", "E"];
const prev = (col: string) => String.fromCharCode(col.charCodeAt(0) - 1);

type Fmt = "num" | "pct" | "dias";
interface Row {
    label: string;
    strong?: boolean;
    check?: boolean;
    fmt?: Fmt;
    /** valor no Ano 0 (só Balanço) */
    ano0?: number;
    ano0Formula?: string;
    value?: (a: Ano) => number;
    formula?: (col: string) => string;
    /** Premissas: valor único digitado */
    input?: number;
}

const P = PREMISSAS;

const SHEETS: Record<string, { title: string; rows: Row[]; ano0?: boolean }> = {
    Premissas: {
        title: "Premissas",
        rows: [
            { label: "Receita do ano 1", input: P.receitaAno1 },
            { label: "Crescimento da receita", input: P.crescimento, fmt: "pct" },
            { label: "Custos (% da receita)", input: P.custosPctReceita, fmt: "pct" },
            { label: "Despesas (% da receita)", input: P.despesasPctReceita, fmt: "pct" },
            { label: "Depreciação anual", input: P.depreciacao },
            { label: "Investimento anual (capex)", input: P.capex },
            { label: "Alíquota de IR", input: P.aliquotaIR, fmt: "pct" },
            { label: "Prazo de clientes", input: P.prazoClientes, fmt: "dias" },
            { label: "Prazo de fornecedores", input: P.prazoFornecedores, fmt: "dias" },
            { label: "Caixa inicial", input: P.caixaInicial },
            { label: "Imobilizado inicial", input: P.imobilizadoInicial },
            { label: "Patrimônio líquido inicial", input: P.plInicial },
        ],
    },
    DRE: {
        title: "DRE",
        rows: [
            { label: "Receita líquida", value: (a) => a.receita, formula: (c) => (c === "C" ? "=Premissas!C2" : `=${prev(c)}2*(1+Premissas!$C$3)`) },
            { label: "(−) Custos", value: (a) => -a.custos, formula: (c) => `=-${c}2*Premissas!$C$4` },
            { label: "(−) Despesas", value: (a) => -a.despesas, formula: (c) => `=-${c}2*Premissas!$C$5` },
            { label: "(−) Depreciação", value: (a) => -a.depreciacao, formula: () => "=-Premissas!$C$6" },
            { label: "EBIT", strong: true, value: (a) => a.ebit, formula: (c) => `=SOMA(${c}2:${c}5)` },
            { label: "(−) Impostos", value: (a) => -a.impostos, formula: (c) => `=-${c}6*Premissas!$C$8` },
            { label: "Lucro líquido", strong: true, value: (a) => a.lucro, formula: (c) => `=${c}6+${c}7` },
        ],
    },
    Balanço: {
        title: "Balanço",
        ano0: true,
        rows: [
            { label: "Caixa", ano0: P.caixaInicial, ano0Formula: "=Premissas!C11", value: (a) => a.caixa, formula: (c) => `=DFC!${c}9` },
            { label: "Contas a receber", ano0: 0, value: (a) => a.receber, formula: (c) => `=DRE!${c}2*Premissas!$C$9/360` },
            { label: "Imobilizado líquido", ano0: P.imobilizadoInicial, ano0Formula: "=Premissas!C12", value: (a) => a.imobilizado, formula: (c) => `=${prev(c)}4+Premissas!$C$7-Premissas!$C$6` },
            { label: "Ativo total", strong: true, ano0: P.caixaInicial + P.imobilizadoInicial, ano0Formula: "=SOMA(B2:B4)", value: (a) => a.ativo, formula: (c) => `=SOMA(${c}2:${c}4)` },
            { label: "Fornecedores", ano0: 0, value: (a) => a.fornecedores, formula: (c) => `=-DRE!${c}3*Premissas!$C$10/360` },
            { label: "Patrimônio líquido", ano0: P.plInicial, ano0Formula: "=Premissas!C13", value: (a) => a.pl, formula: (c) => `=${prev(c)}7+DRE!${c}8` },
            { label: "Passivo + PL", strong: true, ano0: P.plInicial, ano0Formula: "=B6+B7", value: (a) => a.passivoPl, formula: (c) => `=${c}6+${c}7` },
        ],
    },
    DFC: {
        title: "Fluxo de Caixa",
        rows: [
            { label: "Lucro líquido", value: (a) => a.lucro, formula: (c) => `=DRE!${c}8` },
            { label: "(+) Depreciação", value: (a) => a.depreciacao, formula: () => "=Premissas!$C$6" },
            { label: "(−) Aumento de contas a receber", value: (a) => -a.varReceber, formula: (c) => `=-(Balanço!${c}3-Balanço!${prev(c)}3)` },
            { label: "(+) Aumento de fornecedores", value: (a) => a.varFornecedores, formula: (c) => `=Balanço!${c}6-Balanço!${prev(c)}6` },
            { label: "Caixa das operações", strong: true, value: (a) => a.caixaOperacional, formula: (c) => `=SOMA(${c}2:${c}5)` },
            { label: "(−) Investimentos", value: (a) => -a.capex, formula: () => "=-Premissas!$C$7" },
            { label: "Variação do caixa", value: (a) => a.variacaoCaixa, formula: (c) => `=${c}6+${c}7` },
            { label: "Caixa final", strong: true, value: (a) => a.caixa, formula: (c) => `=Balanço!${prev(c)}2+${c}8` },
        ],
    },
    Checagens: {
        title: "Checagens",
        rows: [
            { label: "Ativo total", value: (a) => a.ativo, formula: (c) => `=Balanço!${c}5` },
            { label: "Passivo + PL", value: (a) => a.passivoPl, formula: (c) => `=Balanço!${c}8` },
            { label: "Balanço fecha", check: true, value: (a) => a.checagem, formula: (c) => `=${c}2-${c}3` },
            { label: "Caixa bate com o DFC", check: true, value: (a) => a.caixa - a.caixa, formula: (c) => `=DFC!${c}9-Balanço!${c}2` },
        ],
    },
};

const TABS = ["Premissas", "DRE", "Balanço", "DFC", "Checagens"] as const;
type Tab = (typeof TABS)[number];

function show(n: number, f: Fmt = "num") {
    if (f === "pct") return `${Math.round(n * 100)}%`;
    if (f === "dias") return `${n} dias`;
    const r = Math.round(n);
    if (r === 0) return "0";
    const abs = Math.abs(r).toLocaleString("pt-BR");
    return r < 0 ? `(${abs})` : abs;
}

// Referência pura a outra aba = link (verde); o resto é fórmula (preto)
const isLink = (f: string) => /^=-?[A-Za-zÀ-ú]+!\$?[A-Z]\$?\d+$/.test(f);

interface Sel {
    ref: string;
    formula: string;
    note?: string;
}

const DEFAULT_SEL: Sel = {
    ref: "Balanço!C7",
    formula: "=B7+DRE!C8",
    note: "PL do ano anterior + lucro do ano",
};

export function ModelWorkbook({ className }: { className?: string }) {
    const [tab, setTab] = useState<Tab>("Balanço");
    const [sel, setSel] = useState<Sel>(DEFAULT_SEL);
    const sheet = SHEETS[tab];
    const hasAno0 = !!sheet.ano0;
    const isInputs = tab === "Premissas";

    const cellProps = (s: Sel) => ({
        tabIndex: 0,
        onMouseEnter: () => setSel(s),
        onFocus: () => setSel(s),
        "aria-label": `${s.ref}: ${s.formula}`,
    });

    return (
        <figure
            className={cn(
                "overflow-hidden rounded-xl border border-[var(--grid)] bg-white text-[13px] text-[var(--ink)] shadow-[0_24px_48px_-24px_rgba(20,33,61,0.35)]",
                className
            )}
        >
            <div className="flex items-center gap-3 border-b border-[var(--grid)] bg-[var(--paper-2)] px-4 py-2.5">
                <span aria-hidden className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                </span>
                <span className="text-xs text-[var(--ink-2)]">Modelo_Integrado.xlsx</span>
                <span className="ml-auto hidden text-[11px] text-[var(--ink-3)] sm:inline">Passe o mouse nas células</span>
            </div>

            {/* Barra de fórmulas */}
            <div className="flex min-h-[2.1rem] items-center gap-3 border-b border-[var(--grid)] px-4 py-1.5 font-mono text-[11.5px]">
                <span className="w-[5.5rem] shrink-0 truncate text-[var(--ink-3)]">{sel.ref}</span>
                <span className="font-semibold italic text-[var(--ink-3)]">fx</span>
                <span className="truncate text-[var(--ink)]">{sel.formula}</span>
                {sel.note && <span className="ml-auto hidden shrink-0 font-sans text-[var(--ink-3)] md:inline">{sel.note}</span>}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[26rem]">
                    <thead>
                        <tr className="border-b border-[var(--grid)] text-[11px] text-[var(--ink-3)]">
                            <th className="w-8 border-r border-[var(--grid)] bg-[var(--paper-2)] py-1 font-normal" />
                            <th className="px-3 py-1 text-left font-normal">{isInputs ? "Premissa" : "R$ mil"}</th>
                            {isInputs ? (
                                <th className="px-3 py-1 text-right font-normal">Valor</th>
                            ) : (
                                <>
                                    {hasAno0 && <th className="px-3 py-1 text-right font-normal">Ano 0</th>}
                                    {COLS.map((c, i) => (
                                        <th key={c} className="px-3 py-1 text-right font-normal">
                                            Ano {i + 1}
                                        </th>
                                    ))}
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {sheet.rows.map((r, i) => {
                            const rowNum = i + 2;
                            return (
                                <tr key={r.label} className={cn("border-b border-[var(--grid)] last:border-b-0", r.check && "bg-[#e8f4ee]")}>
                                    <td className="w-8 border-r border-[var(--grid)] bg-[var(--paper-2)] text-center text-[11px] text-[var(--ink-3)]">
                                        {rowNum}
                                    </td>
                                    <td className={cn("whitespace-nowrap px-3 py-[6px]", r.strong && "font-semibold", r.check && "font-semibold text-[var(--ok)]")}>
                                        {r.label}
                                    </td>

                                    {isInputs && r.input !== undefined && (
                                        <td
                                            {...cellProps({ ref: `Premissas!C${rowNum}`, formula: show(r.input, r.fmt), note: "Premissa digitada" })}
                                            className="cursor-default px-3 py-[6px] text-right text-[#1348c8] outline-none hover:bg-[#eef3ff] focus:bg-[#eef3ff]"
                                        >
                                            {show(r.input, r.fmt)}
                                        </td>
                                    )}

                                    {!isInputs && hasAno0 && (
                                        <td
                                            {...cellProps({
                                                ref: `${tab}!B${rowNum}`,
                                                formula: r.ano0Formula ?? "0",
                                            })}
                                            className={cn(
                                                "cursor-default px-3 py-[6px] text-right text-[var(--ink-2)] outline-none hover:bg-[var(--paper-2)] focus:bg-[var(--paper-2)]",
                                                r.ano0Formula && isLink(r.ano0Formula) && "text-[var(--ok)]",
                                                r.strong && "font-semibold"
                                            )}
                                        >
                                            {show(r.ano0 ?? 0)}
                                        </td>
                                    )}

                                    {!isInputs &&
                                        COLS.map((c, k) => {
                                            const formula = r.formula!(c);
                                            const value = r.value!(ANOS[k]);
                                            const link = isLink(formula);
                                            const selected = sel.ref === `${tab}!${c}${rowNum}`;
                                            return (
                                                <td
                                                    key={c}
                                                    {...cellProps({ ref: `${tab}!${c}${rowNum}`, formula, note: link ? "Link de outra aba" : undefined })}
                                                    className={cn(
                                                        "cursor-default px-3 py-[6px] text-right outline-none hover:bg-[var(--paper-2)] focus:bg-[var(--paper-2)]",
                                                        link && "text-[var(--ok)]",
                                                        r.strong && "font-semibold",
                                                        r.check && "font-bold text-[var(--ok)]",
                                                        selected && "outline outline-2 -outline-offset-2 outline-[var(--ok)]"
                                                    )}
                                                >
                                                    {r.check ? `${show(value)} ✓` : show(value)}
                                                </td>
                                            );
                                        })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div role="tablist" aria-label="Abas do modelo" className="flex overflow-x-auto border-t border-[var(--grid)] bg-[var(--paper-2)] text-xs">
                {TABS.map((t) => (
                    <button
                        key={t}
                        role="tab"
                        type="button"
                        aria-selected={tab === t}
                        onClick={() => setTab(t)}
                        className={cn(
                            "shrink-0 border-r border-[var(--grid)] px-3.5 py-2 transition-colors",
                            tab === t ? "bg-white font-semibold text-[var(--ink)]" : "text-[var(--ink-2)] hover:bg-white/60"
                        )}
                    >
                        {SHEETS[t].title}
                    </button>
                ))}
            </div>

            <figcaption className="flex flex-wrap gap-x-4 gap-y-1 border-t border-[var(--grid)] px-4 py-2.5 text-[11px] text-[var(--ink-2)]">
                <span>
                    <span className="font-semibold text-[#1348c8]">Azul</span> premissa
                </span>
                <span>
                    <span className="font-semibold text-[var(--ink)]">Preto</span> fórmula
                </span>
                <span>
                    <span className="font-semibold text-[var(--ok)]">Verde</span> link entre abas
                </span>
                <span className="ml-auto text-[var(--ink-3)]">Ilustração do modelo montado no curso</span>
            </figcaption>
        </figure>
    );
}
