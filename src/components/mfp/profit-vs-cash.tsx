"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fmt } from "@/components/mfp/ui";
import { CAPEX, cashModel } from "@/components/mfp/cash-model";

const PRAZOS = [0, 30, 60, 90, 120];

// Escala das colunas (px por R$ mil) e espaço acima/abaixo da linha do zero
const PX = 0.7;
const TOPO = 140;
const BASE = 180;

function Coluna({ label, value, tone }: { label: string; value: number; tone: "amber" | "ok" | "pen" }) {
    const h = Math.abs(value) * PX;
    const cor = tone === "amber" ? "var(--amber)" : tone === "ok" ? "#22c55e" : "#f87171";
    return (
        <div className="relative flex w-24 flex-col items-center sm:w-28" style={{ height: TOPO + BASE }}>
            <div
                className="absolute inset-x-0 rounded-md transition-all duration-500 ease-out"
                style={{
                    backgroundColor: cor,
                    height: Math.max(h, 2),
                    top: value >= 0 ? TOPO - h : TOPO,
                }}
            />
            <p
                className="absolute inset-x-0 text-center text-2xl font-semibold tabular-nums transition-all duration-500 sm:text-3xl"
                style={{ color: cor, top: value >= 0 ? TOPO - h - 44 : TOPO + h + 8 }}
            >
                {fmt(value)}
            </p>
            <p className="absolute inset-x-0 text-center text-sm text-[var(--fg-2)]" style={{ top: TOPO + BASE + 10 }}>
                {label}
            </p>
        </div>
    );
}

// Mesmo lucro, caixa diferente: o prazo dos clientes decide quanto dinheiro entra no banco
// Quando o gráfico aparece na tela, o prazo encurta sozinho de 120 dias até à vista. Um clique assume o controle.
export function ProfitVsCash({ intro }: { intro?: ReactNode }) {
    const [prazo, setPrazo] = useState(120);
    const chart = useRef<HTMLDivElement>(null);
    const manual = useRef(false);
    const stopRef = useRef<() => void>(() => {});

    useEffect(() => {
        const el = chart.current;
        if (!el) return;
        let timers: ReturnType<typeof setTimeout>[] = [];
        const stop = () => {
            timers.forEach(clearTimeout);
            timers = [];
        };
        stopRef.current = stop;
        const play = () => {
            stop();
            setPrazo(120);
            [...PRAZOS].reverse().slice(1).forEach((d, i) => timers.push(setTimeout(() => setPrazo(d), 1200 + i * 1200)));
        };
        const io = new IntersectionObserver(
            ([e]) => {
                if (manual.current) return;
                if (e.isIntersecting) play();
                else stop();
            },
            { threshold: 0.6 },
        );
        io.observe(el);
        return () => {
            io.disconnect();
            stop();
        };
    }, []);

    const m = cashModel(prazo);
    const gerado = m.caixaOperacional - CAPEX;
    const negativo = gerado < 0;

    return (
        <div>
            <div>
                {intro}
                <div className="grid gap-12 rounded-3xl bg-[var(--surface)] p-6 ring-1 ring-[var(--line)] sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-16">
                    <div className="flex flex-col">
                        <p className="text-xl font-semibold">Seus clientes pagam em quantos dias?</p>
                        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Prazo de recebimento">
                            {PRAZOS.map((d) => (
                                <button
                                    key={d}
                                    type="button"
                                    aria-pressed={prazo === d}
                                    onClick={() => {
                                        manual.current = true;
                                        stopRef.current();
                                        setPrazo(d);
                                    }}
                                    className={cn(
                                        "h-11 rounded-lg px-4 font-semibold transition-colors",
                                        prazo === d
                                            ? "bg-[var(--amber)] text-[var(--ink)]"
                                            : "text-[var(--fg-2)] ring-1 ring-[var(--line)] hover:text-white hover:ring-white/30",
                                    )}
                                >
                                    {d === 0 ? "À vista" : `${d} dias`}
                                </button>
                            ))}
                        </div>
                        <div aria-hidden className="mt-4 h-1 max-w-sm overflow-hidden rounded-full bg-white/10">
                            <div
                                className="h-full rounded-full bg-[var(--amber)] transition-all duration-500"
                                style={{
                                    width: `${((PRAZOS.length - 1 - PRAZOS.indexOf(prazo)) / (PRAZOS.length - 1)) * 100}%`,
                                }}
                            />
                        </div>

                        <p
                            aria-live="polite"
                            className={cn("mt-10 min-h-[6rem] max-w-md text-2xl font-semibold leading-snug sm:min-h-[4rem]", negativo && "text-[#f87171]")}
                        >
                            {negativo
                                ? "A empresa lucrou e mesmo assim saiu dinheiro do banco."
                                : prazo === 0
                                  ? "À vista, o lucro vira caixa, e ainda sobra mais."
                                  : "Mesmo lucro, menos dinheiro no banco."}
                        </p>
                        <p className="mt-3 min-h-[4.5rem] max-w-md leading-relaxed text-[var(--fg-2)] sm:min-h-0">
                            {prazo === 0
                                ? "A depreciação não sai do banco e os fornecedores ainda dão prazo."
                                : `R$ ${fmt(m.receber)} mil das vendas ainda estão com os clientes. O lucro continua ${fmt(m.lucro)}.`}
                        </p>

                        <p className="mt-auto pt-10 text-sm text-[var(--fg-3)]">
                            R$ mil, ano 1 do modelo-exemplo, já com investimento de {fmt(CAPEX)} em equipamentos.
                        </p>
                    </div>

                    <div ref={chart} className="flex justify-center pb-8" aria-hidden>
                        <div className="relative flex gap-6 sm:gap-10">
                            <span className="absolute -inset-x-4 h-px bg-white/20" style={{ top: TOPO }} />
                            <Coluna label="Lucro na DRE" value={m.lucro} tone="amber" />
                            <Coluna label="Caixa gerado" value={gerado} tone={negativo ? "pen" : "ok"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
