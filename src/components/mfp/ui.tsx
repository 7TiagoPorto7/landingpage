import { cn } from "@/lib/utils";

// Blocos básicos das páginas de venda (tema .mfp)

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

type Tone = "dark" | "deep" | "mist" | "snow" | "white";

const TONES: Record<Tone, string> = {
    dark: "bg-[var(--navy)] text-white",
    deep: "bg-[var(--navy-1)] text-white",
    mist: "bg-[var(--mist)] text-[var(--ink)]",
    snow: "bg-[var(--snow)] text-[var(--ink)]",
    white: "bg-white text-[var(--ink)]",
};

/** Faixa de página com fundo próprio */
export function Band({ id, tone = "snow", className, children }: { id?: string; tone?: Tone; className?: string; children: React.ReactNode }) {
    return (
        <section id={id} className={cn("py-20 sm:py-28", TONES[tone], className)}>
            {children}
        </section>
    );
}

export function Accent({ children, className }: { children: React.ReactNode; className?: string }) {
    return <span className={cn("accent", className)}>{children}</span>;
}

export function SectionTitle({
    title,
    lead,
    className,
    center = false,
    dark = false,
}: {
    title: React.ReactNode;
    lead?: React.ReactNode;
    className?: string;
    center?: boolean;
    dark?: boolean;
}) {
    return (
        <header className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
            <h2 className="text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[3.1rem]">{title}</h2>
            {lead && (
                <p className={cn("mt-5 text-lg leading-relaxed sm:text-xl", center && "mx-auto", "max-w-2xl", dark ? "text-white/70" : "text-[var(--ink-2)]")}>
                    {lead}
                </p>
            )}
        </header>
    );
}

/** Formata número no padrão brasileiro, negativos entre parênteses como em demonstrativo */
export function fmt(n: number) {
    const abs = Math.abs(Math.round(n)).toLocaleString("pt-BR");
    return n < 0 ? `(${abs})` : abs;
}
