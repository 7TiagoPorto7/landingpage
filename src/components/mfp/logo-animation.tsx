"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { logoFont } from "@/lib/fonts";

// "Modelagem Financeira na Prática" encolhe até as iniciais MFP e então "Academy" aparece ao lado.
// Cada palavra é a inicial (fica) + o resto (recolhe); "na" some inteira.
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
            timers.push(setTimeout(() => setStage("academy"), 2700));
            if (loop) timers.push(setTimeout(run, 7000));
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
                            maxWidth: collapsed ? 0 : widths[i] ? widths[i] : undefined,
                            opacity: collapsed ? 0 : 1,
                            transition: `max-width 900ms ${ease} ${i * 70}ms, opacity 500ms ease ${i * 70}ms`,
                        }}
                    >
                        {w.rest}
                        {i < WORDS.length - 1 && " "}
                    </span>
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
