import Link from "next/link";
import { ArrowUpRight, ChartLineUp, GraduationCap, Robot, SquaresFour } from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { PRODUCTS, KIND_LABEL } from "@/lib/products";
import { cn } from "@/lib/utils";

// Capa da home: os cursos e ferramentas em cartões, cada um na cor do seu produto
const ICONS: Record<string, PhosphorIcon> = {
    fundamentos: GraduationCap,
    "template-pro": ChartLineUp,
    "starter-kit": SquaresFour,
    prompts4finance: Robot,
};

const PAID = PRODUCTS.filter((p) => p.kind !== "gratuito");

// Uma linha de destaque por produto, tirada do próprio conteúdo
const HIGHLIGHT: Record<string, string> = {
    fundamentos: "DRE, Balanço e Caixa num modelo que fecha",
    "template-pro": "Da premissa ao valor por ação",
    "starter-kit": "DRE e fluxo de caixa automáticos",
    prompts4finance: "100 prompts para usar IA no Excel",
};

function Card({ slug, className, big = false }: { slug: string; className?: string; big?: boolean }) {
    const p = PAID.find((x) => x.slug === slug)!;
    const Icon = ICONS[slug];
    return (
        <Link
            href={p.href}
            className={cn(
                "group relative block overflow-hidden rounded-2xl bg-white p-5 text-[var(--ink)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1",
                big && "p-6",
                className
            )}
        >
            <span aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: p.accent }} />
            <div className="flex items-center justify-between">
                <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ color: p.accent, backgroundColor: `color-mix(in srgb, ${p.accent} 14%, white)` }}
                >
                    <Icon aria-hidden weight="duotone" className="h-5 w-5" />
                </span>
                <ArrowUpRight aria-hidden weight="bold" className="h-4 w-4 text-[var(--ink-3)] transition-colors group-hover:text-[var(--ink)]" />
            </div>
            <p className="mt-4 text-xs font-semibold" style={{ color: p.accent }}>
                {KIND_LABEL[p.kind]}
            </p>
            <p className={cn("mt-1 font-semibold leading-snug", big ? "text-xl" : "text-[15px]")}>{p.name}</p>
            <p className="mt-1.5 text-[13px] leading-snug text-[var(--ink-2)]">{HIGHLIGHT[slug]}</p>
        </Link>
    );
}

export function CoursePanel() {
    const [main, ...rest] = PAID;

    return (
        <div aria-label="Cursos e ferramentas" className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 lg:max-w-none">
            <Card slug={main.slug} big className="col-span-2 sm:col-span-1 sm:row-span-2 sm:self-center" />
            {rest.map((p, i) => (
                <Card key={p.slug} slug={p.slug} className={cn(i === 1 && "sm:translate-x-6")} />
            ))}
        </div>
    );
}
