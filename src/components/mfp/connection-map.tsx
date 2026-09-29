"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { fmt } from "@/components/mfp/ui";
import { projetar } from "@/components/mfp/projection";

// As ligações que fazem um modelo de 3 demonstrativos fechar, acesas uma por vez.
// Usa o ano 1 da mesma projeção da planilha do topo.
const a = projetar(1)[0];

type Key = "lucro" | "dep" | "giro" | "caixa";

const LINKS: { key: Key; title: string; text: string }[] = [
    {
        key: "lucro",
        title: "O lucro vai para o patrimônio e abre o Fluxo de Caixa",
        text: "O lucro líquido da DRE soma no patrimônio líquido do Balanço e é a primeira linha do Fluxo de Caixa indireto.",
    },
    {
        key: "dep",
        title: "A depreciação reduz o lucro, mas não sai do banco",
        text: "Ela entra como despesa na DRE, volta somando no Fluxo de Caixa e reduz o imobilizado no Balanço.",
    },
    {
        key: "giro",
        title: "Capital de giro consome ou libera caixa",
        text: "Quando contas a receber cresce, o caixa cai. Quando fornecedores cresce, o caixa sobe. O Fluxo de Caixa registra a variação.",
    },
    {
        key: "caixa",
        title: "O caixa final fecha o Balanço",
        text: "O saldo que sai do Fluxo de Caixa é o caixa do Balanço. Com isso, ativo e passivo mais patrimônio ficam iguais.",
    },
];

const STATEMENTS: { title: string; rows: { label: string; value: number; keys: Key[]; strong?: boolean }[] }[] = [
    {
        title: "DRE",
        rows: [
            { label: "Receita líquida", value: a.receita, keys: [] },
            { label: "(−) Custos e despesas", value: -(a.custos + a.despesas), keys: [] },
            { label: "(−) Depreciação", value: -a.depreciacao, keys: ["dep"] },
            { label: "(−) Impostos", value: -a.impostos, keys: [] },
            { label: "Lucro líquido", value: a.lucro, keys: ["lucro"], strong: true },
        ],
    },
    {
        title: "Fluxo de Caixa",
        rows: [
            { label: "Lucro líquido", value: a.lucro, keys: ["lucro"] },
            { label: "(+) Depreciação", value: a.depreciacao, keys: ["dep"] },
            { label: "(−) Aumento de contas a receber", value: -a.varReceber, keys: ["giro"] },
            { label: "(+) Aumento de fornecedores", value: a.varFornecedores, keys: ["giro"] },
            { label: "(−) Investimentos", value: -a.capex, keys: [] },
            { label: "(+) Caixa inicial", value: a.caixaInicial, keys: [] },
            { label: "Caixa final", value: a.caixa, keys: ["caixa"], strong: true },
        ],
    },
    {
        title: "Balanço",
        rows: [
            { label: "Caixa", value: a.caixa, keys: ["caixa"] },
            { label: "Contas a receber", value: a.receber, keys: ["giro"] },
            { label: "Imobilizado líquido", value: a.imobilizado, keys: ["dep"] },
            { label: "Fornecedores", value: a.fornecedores, keys: ["giro"] },
            { label: "Patrimônio líquido", value: a.pl, keys: ["lucro"] },
            { label: "Ativo = Passivo + PL", value: a.ativo, keys: ["caixa"], strong: true },
        ],
    },
];

export function ConnectionMap() {
    const [active, setActive] = useState(0);
    const [auto, setAuto] = useState(true);
    const ref = useRef<HTMLDivElement>(null);
    const key = LINKS[active].key;

    // Avança sozinho só enquanto está na tela e até a pessoa clicar; respeita "reduzir movimento"
    useEffect(() => {
        const el = ref.current;
        if (!el || !auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let timer: ReturnType<typeof setInterval> | undefined;
        const io = new IntersectionObserver(([entry]) => {
            clearInterval(timer);
            if (entry.isIntersecting) timer = setInterval(() => setActive((i) => (i + 1) % LINKS.length), 3500);
        }, { threshold: 0.4 });
        io.observe(el);
        return () => {
            io.disconnect();
            clearInterval(timer);
        };
    }, [auto]);

    const pick = (i: number) => {
        setAuto(false);
        setActive(i);
    };

    return (
        <div ref={ref} className="grid gap-8 xl:grid-cols-[0.9fr_1.6fr] xl:gap-12 [&>*]:min-w-0">
            <ol className="space-y-3">
                {LINKS.map((l, i) => (
                    <li key={l.key}>
                        <button
                            type="button"
                            onClick={() => pick(i)}
                            aria-pressed={active === i}
                            className={cn(
                                "flex w-full gap-4 rounded-xl border p-5 text-left transition-colors",
                                active === i ? "border-[var(--ink)] bg-white" : "border-transparent hover:bg-white/60"
                            )}
                        >
                            <span
                                className={cn(
                                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors",
                                    active === i ? "bg-[var(--ok)] text-white" : "bg-[var(--grid)] text-[var(--ink-2)]"
                                )}
                            >
                                {i + 1}
                            </span>
                            <span>
                                <span className="block font-bold leading-snug">{l.title}</span>
                                {active === i && <span className="mt-2 block leading-relaxed text-[var(--ink-2)]">{l.text}</span>}
                            </span>
                        </button>
                    </li>
                ))}
            </ol>

            <div className="grid gap-4 md:grid-cols-3" aria-live="polite">
                {STATEMENTS.map((s) => (
                    <div key={s.title} className="rounded-xl border border-[var(--grid)] bg-white p-4">
                        <p className="mb-2 border-b border-[var(--ink)] pb-2 font-bold">{s.title}</p>
                        <table className="w-full text-[13px]">
                            <tbody>
                                {s.rows.map((r) => {
                                    const on = r.keys.includes(key);
                                    return (
                                        <tr
                                            key={r.label}
                                            className={cn(
                                                "border-b border-[var(--grid)] transition-colors duration-300 last:border-b-0",
                                                on && "bg-[#e8f4ee]"
                                            )}
                                        >
                                            <td className={cn("py-1.5 pl-1.5 pr-2 leading-tight", r.strong && "font-semibold", on && "font-semibold text-[var(--ok)]")}>
                                                {r.label}
                                            </td>
                                            <td className={cn("py-1.5 pr-1.5 text-right", r.strong && "font-semibold", on && "font-bold text-[var(--ok)]")}>
                                                {fmt(r.value)}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}
