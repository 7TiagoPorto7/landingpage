import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChartLineUp, FileXls, GraduationCap, Robot, SquaresFour } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { Backdrop } from "@/components/mfp/backdrop";
import { CoursePanel } from "@/components/mfp/course-panel";
import { Logo } from "@/components/logo";
import { PostCover } from "@/components/post-cover";
import { getSortedPostsData } from "@/lib/blog";
import { getCategory } from "@/lib/blog-categories";
import { KIND_LABEL, PRODUCTS, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { BUY_LABEL, CHECKOUT_URL as FUNDAMENTOS_CHECKOUT, PRICE as FUNDAMENTOS_PRICE, PRODUCT as FUNDAMENTOS } from "@/components/fundamentos/content";

const TITLE = "Modelagem Financeira na Prática | Cursos e planilhas com Tiago Porto";
const DESCRIPTION =
    "Cursos, planilhas e guias de modelagem financeira, valuation e FP&A criados por Tiago Porto, especialista em Modelagem Financeira.";

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: "/" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const ICONS: Record<string, Icon> = {
    fundamentos: GraduationCap,
    "template-pro": ChartLineUp,
    "starter-kit": SquaresFour,
    prompts4finance: Robot,
};

function LinkButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 font-semibold transition-colors",
                variant === "primary" ? "bg-[var(--amber)] text-[var(--ink)] hover:bg-[#fbb32e]" : "text-white ring-1 ring-white/25 hover:bg-white/10"
            )}
        >
            {children}
            <ArrowRight aria-hidden weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
    );
}

// "Saiba mais" em formato de botão, na cor de cada produto
const MoreLink = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <span
        className={cn(
            "inline-flex h-11 items-center gap-2 self-start rounded-lg px-4 text-[15px] font-semibold shadow-[0_8px_20px_-10px_rgba(0,0,0,0.6)] transition-transform duration-150 group-hover:-translate-y-0.5",
            className
        )}
        style={style}
    >
        Saiba mais
        <ArrowUpRight aria-hidden weight="bold" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
);

function Tile({ p }: { p: Product }) {
    const I = ICONS[p.slug] ?? FileXls;
    return (
        <Link href={p.href} className="group flex flex-col rounded-3xl bg-[var(--surface)] p-7 ring-1 ring-[var(--line)] transition-colors hover:bg-[#15224a]">
            <I aria-hidden weight="duotone" className="h-9 w-9" style={{ color: p.accent }} />
            <p className="mt-8 text-sm font-semibold" style={{ color: p.accent }}>
                {KIND_LABEL[p.kind]}
            </p>
            <h3 className="mt-1 text-xl font-semibold leading-snug">{p.name}</h3>
            <p className="mb-8 mt-2 leading-relaxed text-[var(--fg-2)]">{p.summary}</p>
            <MoreLink className="mt-auto text-[var(--ink)]" style={{ backgroundColor: p.accent }} />
        </Link>
    );
}

export default function Home() {
    const featured = PRODUCTS.find((p) => p.featured)!;
    const paid = PRODUCTS.filter((p) => !p.featured && p.kind !== "gratuito");
    const free = PRODUCTS.filter((p) => p.kind === "gratuito");
    const posts = getSortedPostsData().slice(0, 4);

    return (
        <div className={`mfp ${mfpFonts} min-h-screen bg-[var(--navy)]`}>
            <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--navy)]/85 text-white backdrop-blur-md">
                <Container className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" aria-label="Página inicial">
                        <Logo className="h-7 w-auto" />
                    </Link>
                    <nav className="flex items-center gap-6 text-sm text-[var(--fg-2)]" aria-label="Principal">
                        <a href="#cursos" className="hover:text-white">
                            Cursos
                        </a>
                        <Link href="/blog" className="hover:text-white">
                            Blog
                        </Link>
                    </nav>
                </Container>
            </header>

            <main className="text-white">
                {/* Capa: painel dos cursos */}
                <section className="relative overflow-hidden">
                    <Backdrop tone="dark" />
                    <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-12 [&>*]:min-w-0">
                        <div>
                            <h1 className="text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.5rem]">
                                Aprenda modelagem financeira <Accent>na prática</Accent>
                            </h1>
                            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--fg-2)]">
                                Cursos, planilhas e guias de Tiago Porto, especialista em Modelagem Financeira. Para usar no trabalho.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-3">
                                <LinkButton href="#cursos">Ver cursos</LinkButton>
                                <LinkButton href="/blog" variant="ghost">
                                    Ler o blog
                                </LinkButton>
                            </div>
                        </div>
                        <CoursePanel />
                    </Container>
                </section>

                {/* Cursos em bento */}
                <Band id="cursos" tone="deep">
                    <Container>
                        <SectionTitle
                            dark
                            title={
                                <>
                                    Por onde <Accent>começar</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
                            <div
                                className="relative flex flex-col overflow-hidden rounded-3xl bg-[var(--amber)] p-8 text-[var(--ink)] sm:p-10 lg:col-span-2 lg:row-span-2"
                            >
                                <GraduationCap aria-hidden weight="duotone" className="h-11 w-11" />
                                <p className="mt-10 text-sm font-semibold">{KIND_LABEL[featured.kind]}, o ponto de partida</p>
                                <h3 className="mt-2 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">{featured.name}</h3>
                                <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--ink)]/75">{featured.summary}</p>
                                <ul className="mt-8 grid max-w-xl gap-x-8 gap-y-2 sm:grid-cols-2">
                                    {featured.includes.map((i) => (
                                        <li key={i} className="text-[15px] font-medium text-[var(--ink)]/80">
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
                                    <CheckoutButton
                                        href={FUNDAMENTOS_CHECKOUT}
                                        section="home_por_onde_comecar"
                                        value={FUNDAMENTOS_PRICE}
                                        product={FUNDAMENTOS}
                                        attention
                                        className="bg-[var(--navy)] text-white hover:bg-[#13204a]"
                                    >
                                        {BUY_LABEL}
                                    </CheckoutButton>
                                    <Link
                                        href={featured.href}
                                        className="group inline-flex h-14 items-center gap-2 rounded-lg px-6 text-[17px] font-semibold text-[var(--ink)] ring-2 ring-[var(--ink)]/80 transition-colors hover:bg-[var(--ink)] hover:text-[var(--amber)]"
                                    >
                                        Saiba mais
                                        <ArrowUpRight aria-hidden weight="bold" className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </Link>
                                </div>
                            </div>
                            {paid.slice(0, 2).map((p) => (
                                <Tile key={p.slug} p={p} />
                            ))}
                        </div>
                        <div className="mt-4 grid gap-4 lg:grid-cols-3">
                            {paid.slice(2).map((p) => (
                                <Tile key={p.slug} p={p} />
                            ))}
                            <div className="rounded-3xl p-7 ring-1 ring-[var(--line)] lg:col-span-2">
                                <p className="text-lg font-semibold">Materiais gratuitos</p>
                                <ul className="mt-5 divide-y divide-[var(--line)]">
                                    {free.map((p) => (
                                        <li key={p.slug}>
                                            <Link href={p.href} className="group flex items-center justify-between gap-6 py-4">
                                                <span>
                                                    <span className="block font-semibold group-hover:text-[var(--amber)]">{p.name}</span>
                                                    <span className="block text-sm text-[var(--fg-2)]">{p.summary}</span>
                                                </span>
                                                <ArrowUpRight aria-hidden weight="bold" className="h-5 w-5 shrink-0 text-[var(--fg-3)] group-hover:text-[var(--amber)]" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </Band>

                {/* Trilha em linha */}
                <Band tone="dark">
                    <Container>
                        <SectionTitle
                            dark
                            title={
                                <>
                                    Uma trilha, <Accent>não uma pilha</Accent> de produtos
                                </>
                            }
                            lead="Cada produto resolve uma etapa. Se você está começando, esta é a ordem que faz sentido."
                            className="mb-14"
                        />
                        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
                            <span aria-hidden className="absolute left-0 right-0 top-[13px] hidden h-px bg-[var(--line)] md:block" />
                            {[
                                { step: "Entenda a lógica", text: "O Fundamentos mostra como os três demonstrativos se ligam e por que o modelo fecha.", href: "/fundamentos", label: "Fundamentos" },
                                { step: "Modele com uma base pronta", text: "O Template Pro aplica essa lógica num modelo completo, com valuation.", href: "/template-pro", label: "Template Pro" },
                                { step: "Leve para a rotina", text: "Starter Kit e Prompts aceleram a gestão financeira e as análises do dia a dia.", href: "/starter-kit", label: "Starter Kit" },
                            ].map((s, i) => (
                                <li key={s.step} className="relative">
                                    <span className="relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--navy)] text-xs font-semibold text-[var(--amber)] ring-1 ring-[var(--amber)]/60">
                                        {i + 1}
                                    </span>
                                    <h3 className="mt-6 text-xl font-semibold">{s.step}</h3>
                                    <p className="mt-2 leading-relaxed text-[var(--fg-2)]">{s.text}</p>
                                    <Link href={s.href} className="mt-4 inline-flex items-center gap-1.5 font-semibold underline decoration-[var(--amber)] decoration-2 underline-offset-4 hover:text-[var(--amber)]">
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </Container>
                </Band>

                {/* Blog em lista editorial */}
                <Band tone="deep">
                    <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        Do <Accent>blog</Accent>
                                    </>
                                }
                                lead="Guias sobre indicadores, demonstrativos e valuation."
                            />
                            <Link href="/blog" className="mt-8 inline-flex items-center gap-1.5 font-semibold underline decoration-[var(--amber)] decoration-2 underline-offset-4 hover:text-[var(--amber)]">
                                Ver todos os artigos
                            </Link>
                        </div>
                        <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                            {posts.map((post) => (
                                <li key={post.slug}>
                                    <Link href={`/blog/${post.slug}`} className="group grid grid-cols-[6.5rem_1fr] items-center gap-5 py-5 sm:grid-cols-[8.5rem_1fr]">
                                        <span className="relative block aspect-[4/3] overflow-hidden rounded-xl">
                                            <PostCover title={post.title} category={getCategory(post.slug)} compact />
                                        </span>
                                        <span>
                                            <span className="block text-sm text-[var(--fg-3)]">
                                                {post.date}, {post.readTime} de leitura
                                            </span>
                                            <span className="mt-1 line-clamp-2 block font-semibold leading-snug group-hover:text-[var(--amber)]">{post.title}</span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </Band>
            </main>

            <MfpFooter />
        </div>
    );
}
