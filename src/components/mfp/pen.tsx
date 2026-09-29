import { cn } from "@/lib/utils";

// Marcação de revisão em vermelho. O traço se desenha uma vez (ver .pen-draw no globals.css).

export function PenCircle({ className, delay = "0.5s" }: { className?: string; delay?: string }) {
    return (
        <svg aria-hidden viewBox="0 0 200 80" preserveAspectRatio="none" className={cn("pointer-events-none absolute", className)}>
            <path
                d="M40 12 C 90 0, 175 6, 190 30 C 202 52, 150 74, 95 74 C 40 74, 6 62, 8 40 C 10 20, 55 8, 120 10"
                fill="none"
                stroke="var(--pen)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="pen-draw"
                style={{ "--len": 560, "--delay": delay } as React.CSSProperties}
            />
        </svg>
    );
}
