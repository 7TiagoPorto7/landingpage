import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mfpFonts } from "@/lib/fonts";
import { Logo } from "@/components/logo";
import { Backdrop } from "@/components/mfp/backdrop";
import { Container, SectionTitle } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";

// Kit de seções compartilhado pelas páginas de produto (tema .mfp)

export function ProductShell({ children, accent, bottomSpace = false }: { children: React.ReactNode; accent: string; bottomSpace?: boolean }) {
    return (
        <div className={`mfp ${mfpFonts} min-h-screen`} style={{ "--product": accent } as React.CSSProperties}>
            {children}
            <MfpFooter />
            {bottomSpace && <div aria-hidden className="h-16 bg-[var(--navy)]" />}
        </div>
    );
}

export function ProductHeader({ product, priceSummary, action }: { product: string; priceSummary?: React.ReactNode; action: React.ReactNode }) {
    return (
        <header className="sticky top-0 z-30 border-b border-[var(--grid)] bg-white/90 backdrop-blur-md">
            <Container className="flex h-16 items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                    <Link href="/" aria-label="Página inicial" className="shrink-0">
                        <Logo className="h-7 w-auto" />
                    </Link>
                    <span className="hidden items-center gap-2 truncate rounded-full px-3 py-1 text-sm font-semibold sm:inline-flex" style={{ color: "var(--product)", backgroundColor: "color-mix(in srgb, var(--product) 12%, white)" }}>
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--product)" }} />
                        {product}
                    </span>
                </div>
                <div className="flex items-center gap-5">
                    {priceSummary && <p className="hidden text-sm text-[var(--ink-2)] md:block">{priceSummary}</p>}
                    {action}
                </div>
            </Container>
        </header>
    );
}

export function ProductHero({
    eyebrow,
    title,
    lead,
    points,
    actions,
    visual,
}: {
    eyebrow: string;
    title: React.ReactNode;
    lead: React.ReactNode;
    points?: string[];
    actions: React.ReactNode;
    visual: React.ReactNode;
}) {
    return (
        <section className="product-tint relative overflow-hidden">
            <Backdrop tone="light" />
            <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-28 [&>*]:min-w-0">
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-[var(--ink-2)] ring-1 ring-[var(--grid)]">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--product)" }} />
                        {eyebrow}
                    </p>
                    <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[3.7rem]">{title}</h1>
                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--ink-2)] sm:text-xl">{lead}</p>
                    {points && (
                        <ul className="mt-7 space-y-2.5">
                            {points.map((p) => (
                                <li key={p} className="flex gap-3 text-[17px]">
                                    <Check />
                                    {p}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="mt-10">{actions}</div>
                </div>
                <div>{visual}</div>
            </Container>
        </section>
    );
}

export const Check = ({ className = "text-[var(--ok)]" }: { className?: string }) => (
    <svg aria-hidden viewBox="0 0 20 20" className={`mt-[3px] h-5 w-5 shrink-0 ${className}`} fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 10.4l2.6 2.6L14 7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export function FeatureCards({ items, dark = false, cols = 3 }: { items: { icon: LucideIcon; title: string; text: string }[]; dark?: boolean; cols?: 2 | 3 | 4 }) {
    return (
        <ul className={cn("grid gap-4", cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
            {items.map(({ icon: Icon, title, text }) => (
                <li key={title} className={cn("rounded-2xl p-6", dark ? "bg-white text-[var(--ink)]" : "bg-white ring-1 ring-[var(--grid)]")}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--navy)]" style={{ color: "var(--product)" }}>
                        <Icon aria-hidden className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
                    <p className="mt-2 leading-relaxed text-[var(--ink-2)]">{text}</p>
                </li>
            ))}
        </ul>
    );
}

export function ForWhom({ yes, no }: { yes: string[]; no: string[] }) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 ring-1 ring-[var(--grid)]">
                <h3 className="text-lg font-semibold">É para você se</h3>
                <ul className="mt-5 space-y-4">
                    {yes.map((t) => (
                        <li key={t} className="flex gap-3 leading-snug">
                            <Check />
                            {t}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="rounded-2xl p-7 ring-1 ring-[var(--ink)]/15">
                <h3 className="text-lg font-semibold">Não é para você se</h3>
                <ul className="mt-5 space-y-4">
                    {no.map((t) => (
                        <li key={t} className="flex gap-3 leading-snug text-[var(--ink-2)]">
                            <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.6px] border-[var(--ink-3)] text-[11px] font-bold text-[var(--ink-3)]">
                                ✕
                            </span>
                            {t}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function OfferPanel({
    title,
    lead,
    items,
    card,
}: {
    title: React.ReactNode;
    lead?: string;
    items: { item: string; detail?: string }[];
    card: React.ReactNode;
}) {
    return (
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-14">
            <div className="text-white">
                <SectionTitle dark title={title} lead={lead} />
                <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
                    {items.map((r) => (
                        <li key={r.item} className="flex gap-3 py-4">
                            <Check className="text-[var(--amber)]" />
                            <div>
                                <p className="font-semibold">{r.item}</p>
                                {r.detail && <p className="text-[15px] text-white/55">{r.detail}</p>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="rounded-2xl bg-white p-7 text-[var(--ink)] sm:p-9 lg:sticky lg:top-24">{card}</div>
        </Container>
    );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
    return (
        <div className="rounded-2xl bg-white px-6 ring-1 ring-[var(--grid)] sm:px-8">
            {items.map((f) => (
                <details key={f.q} className="group border-b border-[var(--grid)] last:border-b-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <ChevronDown aria-hidden className="h-5 w-5 shrink-0 text-[var(--ink-3)] transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="max-w-2xl pb-6 leading-relaxed text-[var(--ink-2)]">{f.a}</p>
                </details>
            ))}
        </div>
    );
}

export function FinalBand({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
    return (
        <section className="relative overflow-hidden bg-[var(--navy)] py-24 text-white sm:py-32">
            <Backdrop tone="dark" />
            <Container className="relative text-center">
                <h2 className="mx-auto max-w-3xl text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[3.4rem]">{title}</h2>
                <div className="mt-10 flex flex-col items-center gap-4">{children}</div>
            </Container>
        </section>
    );
}
