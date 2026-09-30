"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { fmt } from "@/components/mfp/ui";
import { projetar } from "@/components/mfp/projection";

// Animação: o Balanço não fecha, a fórmula do PL ganha o link com a DRE e a checagem vai a zero.
// Números do ano 1 do mesmo modelo-exemplo da página.
const a = projetar(1)[0];
const PL_ERRADO = a.pl - a.lucro; // lucro esquecido fora do PL

const FORMULA_BASE = "=B7";
const FORMULA_LINK = "+DRE!C8";

type Phase = "erro" | "digitando" | "ajustando" | "fechou";

// Número que anda até o alvo
function useTween(target: number, ms = 900) {
    const [value, setValue] = useState(target);
    const from = useRef(target);
    useEffect(() => {
        const start = performance.now();
        const origin = from.current;
        let raf = 0;
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / ms);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(origin + (target - origin) * eased);
            if (t < 1) raf = requestAnimationFrame(tick);
            else from.current = target;
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, ms]);
    return value;
}

export function BalanceCheck({ className }: { className?: string }) {
    const [phase, setPhase] = useState<Phase>("erro");
    const [typed, setTyped] = useState(0);

    // Linha do tempo em loop
    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];
        const run = () => {
            setPhase("erro");
            setTyped(0);
            timers.push(setTimeout(() => setPhase("digitando"), 1600));
            for (let i = 1; i <= FORMULA_LINK.length; i++) timers.push(setTimeout(() => setTyped(i), 1600 + i * 90));
            timers.push(setTimeout(() => setPhase("ajustando"), 1600 + FORMULA_LINK.length * 90 + 300));
            timers.push(setTimeout(() => setPhase("fechou"), 1600 + FORMULA_LINK.length * 90 + 1400));
            timers.push(setTimeout(run, 9000));
        };
        run();
        return () => timers.forEach(clearTimeout);
    }, []);

    const linked = phase === "ajustando" || phase === "fechou";
    const pl = useTween(linked ? a.pl : PL_ERRADO);
    const passivoPl = a.fornecedores + pl;
    const diff = useTween(phase === "fechou" ? 0 : a.ativo - (a.fornecedores + PL_ERRADO), 700);
    const ok = phase === "fechou";

    const formula = FORMULA_BASE + (phase === "erro" ? "" : FORMULA_LINK.slice(0, phase === "digitando" ? typed : FORMULA_LINK.length));

    const row = (label: string, value: number, opts: { strong?: boolean; hl?: boolean; num?: number } = {}) => (
        <tr className={cn("border-b border-[var(--grid)]", opts.hl && "bg-[#e8f4ee]")}>
            <td className="w-8 border-r border-[var(--grid)] bg-[var(--paper-2)] text-center text-[11px] text-[var(--ink-3)]">{opts.num}</td>
            <td className={cn("px-3 py-[7px]", opts.strong && "font-semibold")}>{label}</td>
            <td className={cn("px-3 py-[7px] text-right tabular-nums", opts.strong && "font-semibold", opts.hl && "font-semibold text-[var(--ok)]")}>
                {fmt(value)}
            </td>
        </tr>
    );

    return (
        <figure
            aria-label="Animação: a checagem do Balanço vai de 105 para zero quando o lucro é ligado ao patrimônio líquido"
            className={cn("overflow-hidden rounded-2xl bg-white text-[13px] text-[var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]", className)}
        >
            <div className="flex items-center gap-3 border-b border-[var(--grid)] bg-[var(--paper-2)] px-4 py-2.5">
                <span aria-hidden className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                </span>
                <span className="text-xs text-[var(--ink-2)]">Balanço, ano 1</span>
            </div>

            {/* Barra de fórmula do PL */}
            <div className="flex items-center gap-3 border-b border-[var(--grid)] px-4 py-2 font-mono text-[12px]">
                <span className="w-9 text-[var(--ink-3)]">C7</span>
                <span className="font-semibold italic text-[var(--ink-3)]">fx</span>
                <span>
                    {FORMULA_BASE}
                    <span className="text-[var(--ok)]">{formula.slice(FORMULA_BASE.length)}</span>
                    {phase === "digitando" && <span className="ml-px inline-block h-3.5 w-px animate-pulse bg-[var(--ink)] align-middle" />}
                </span>
            </div>

            <table className="w-full">
                <tbody>
                    {row("Caixa", a.caixa, { num: 2 })}
                    {row("Contas a receber", a.receber, { num: 3 })}
                    {row("Imobilizado líquido", a.imobilizado, { num: 4 })}
                    {row("Ativo total", a.ativo, { strong: true, num: 5 })}
                    {row("Fornecedores", a.fornecedores, { num: 6 })}
                    {row("Patrimônio líquido", pl, { num: 7, hl: linked })}
                    {row("Passivo + PL", passivoPl, { strong: true, num: 8 })}
                    <tr className={cn("transition-colors duration-500", ok ? "bg-[#e8f4ee]" : "bg-[#fdecea]")}>
                        <td className="w-8 border-r border-[var(--grid)] bg-[var(--paper-2)] text-center text-[11px] text-[var(--ink-3)]">9</td>
                        <td className={cn("px-3 py-2.5 font-semibold transition-colors duration-500", ok ? "text-[var(--ok)]" : "text-[var(--pen)]")}>
                            Checagem: Ativo − (Passivo + PL)
                        </td>
                        <td className={cn("px-3 py-2.5 text-right text-base font-bold tabular-nums transition-colors duration-500", ok ? "text-[var(--ok)]" : "text-[var(--pen)]")}>
                            {fmt(diff)}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="flex items-center justify-between gap-4 px-4 py-3.5">
                <p className="text-[12px] text-[var(--ink-2)]">
                    {ok ? "Lucro da DRE ligado ao patrimônio líquido." : phase === "erro" ? "O lucro do ano ficou fora do patrimônio líquido." : "Ligando o lucro da DRE ao PL..."}
                </p>
                <span
                    className={cn(
                        "flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all duration-500",
                        ok ? "bg-[var(--ok)] text-white opacity-100" : "bg-[var(--paper-2)] text-[var(--ink-3)] opacity-80"
                    )}
                >
                    <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.6" opacity={ok ? 1 : 0.5} />
                        <path
                            d="M6 10.4l2.6 2.6L14 7.6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ strokeDasharray: 14, strokeDashoffset: ok ? 0 : 14, transition: "stroke-dashoffset 500ms ease-out 150ms" }}
                        />
                    </svg>
                    {ok ? "Balanço fecha" : "Não fecha"}
                </span>
            </div>
        </figure>
    );
}
