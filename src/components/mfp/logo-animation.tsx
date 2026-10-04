"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { logoFont } from "@/lib/fonts";

// "Modelagem Financeira na Prática" é engolida até as iniciais MFP e então "Academy" aparece ao lado.
// Cada palavra é a inicial (fica) + o resto, que é cortado da direita para a esquerda; "na" some inteira.
// O símbolo das faixas fica à esquerda, com a mesma proporção da logo.
const WORDS = [
    { initial: "M", rest: "odelagem" },
    { initial: "F", rest: "inanceira" },
    { initial: "", rest: "na" },
    { initial: "P", rest: "rática" },
];

type Stage = "full" | "collapse" | "academy";

export function LogoAnimation({ className, loop = true }: { className?: string; loop?: boolean }) {
    const [stage, setStage] = useState<Stage>("full");
    const rests = useRef<(HTMLSpanElement | null)[]>([]);
    const [widths, setWidths] = useState<number[]>([]);

    // Mede a largura de cada trecho para animar de "largura real" até zero
    useLayoutEffect(() => {
        const measure = () => setWidths(rests.current.map((el) => (el ? el.scrollWidth : 0)));
        measure();
        document.fonts?.ready.then(measure);
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];
        const run = () => {
            setStage("full");
            timers.push(setTimeout(() => setStage("collapse"), 1600));
            timers.push(setTimeout(() => setStage("academy"), 3200));
            if (loop) timers.push(setTimeout(run, 7500));
        };
        run();
        return () => timers.forEach(clearTimeout);
    }, [loop]);

    const collapsed = stage !== "full";
    const ease = "cubic-bezier(0.65, 0, 0.35, 1)";

    return (
        <span
            role="img"
            aria-label="Modelagem Financeira na Prática, MFP Academy"
            className={cn(logoFont.className, "inline-flex items-baseline whitespace-nowrap font-bold", className)}
        >
            {/* Símbolo das faixas: máscara pintada com a cor do texto */}
            <span
                aria-hidden
                className="mr-[0.55em] inline-block shrink-0 self-baseline"
                style={{
                    width: "1.78em",
                    height: "0.74em",
                    backgroundColor: "currentColor",
                    WebkitMaskImage: "url(/logo-mfp-simbolo.png)",
                    maskImage: "url(/logo-mfp-simbolo.png)",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                }}
            />
            {WORDS.map((w, i) => (
                <span key={i} aria-hidden className="inline-flex items-baseline">
                    {w.initial && <span>{w.initial}</span>}
                    <span
                        ref={(el) => {
                            rests.current[i] = el;
                        }}
                        className="inline-block overflow-hidden"
                        style={{
                            // O espaço depois da palavra também recolhe (exceto na última)
                            // A largura vai a zero com o texto preso à esquerda: a borda direita "come" as letras
                            maxWidth: collapsed ? 0 : widths[i] ? widths[i] : undefined,
                            transition: `max-width 1000ms ${ease} ${(WORDS.length - 1 - i) * 140}ms`,
                        }}
                    >
                        {w.rest}
                    </span>
                    {/* Espaço entre as palavras: só fecha quando a palavra termina de ser engolida */}
                    {i < WORDS.length - 1 && (
                        <span
                            className="inline-block"
                            style={{
                                width: collapsed ? 0 : "0.26em",
                                transition: `width 300ms ${ease} ${(WORDS.length - 1 - i) * 140 + 750}ms`,
                            }}
                        />
                    )}
                </span>
            ))}
            <span
                aria-hidden
                className="inline-block"
                style={{
                    marginLeft: stage === "academy" ? "0.25em" : 0,
                    opacity: stage === "academy" ? 1 : 0,
                    transform: stage === "academy" ? "translateX(0)" : "translateX(-0.25em)",
                    filter: stage === "academy" ? "blur(0)" : "blur(4px)",
                    transition: "opacity 900ms ease, transform 900ms ease, filter 900ms ease, margin-left 600ms ease",
                }}
            >
                Academy
            </span>
        </span>
    );
}
