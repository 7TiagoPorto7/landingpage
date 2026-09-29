import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { Backdrop } from "@/components/mfp/backdrop";
import { Logo } from "@/components/logo";
import { PostCover } from "@/components/post-cover";
import { getSortedPostsData } from "@/lib/blog";
import { getCategory } from "@/lib/blog-categories";
import { KIND_LABEL, PRODUCTS, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

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

function LinkButton({ href, children, variant = "primary", className }: { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; className?: string }) {
    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 font-semibold transition-colors",
                variant === "primary" ? "bg-[var(--amber)] text-[var(--ink)] hover:bg-[#fbb32e]" : "border border-current/25 hover:bg-white/10",
                className
            )}
        >
            {children}
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
    );
}

function ProductCard({ p }: { p: Product }) {
    return (
        <article
            className="flex flex-col overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-[var(--grid)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
            style={{ boxShadow: `inset 0 4px 0 ${p.accent}` }}
        >
            <p className="text-sm font-semibold" style={{ color: p.accent }}>
                {KIND_LABEL[p.kind]}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug">{p.name}</h3>
            <p className="mt-2 leading-relaxed text-[var(--ink-2)]">{p.summary}</p>
            <ul className="mt-5 space-y-1.5 text-[15px] text-[var(--ink-2)]">
                {p.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                        <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: p.accent }} />
                        {i}
                    </li>
                ))}
            </ul>
            <div className="mt-auto pt-8">
                <Link
                    href={p.href}
                    className="group inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--navy)] px-5 font-semibold text-white transition-colors hover:bg-[var(--navy-3)]"
                >
                    Saiba mais
                    <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>
        </article>
    );
}

export default function Home() {
    const featured = PRODUCTS.find((p) => p.featured)!;
    const paid = PRODUCTS.filter((p) => !p.featured && p.kind !== "gratuito");
    const free = PRODUCTS.filter((p) => p.kind === "gratuito");
    const latestPosts = getSortedPostsData().slice(0, 3);

    return (
        <div className={`mfp ${mfpFonts} min-h-screen`}>
            <header className="sticky top-0 z-30 border-b border-white/10 bg-[var(--navy)]/85 text-white backdrop-blur-md">
                <Container className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" aria-label="Página inicial">
                        <Logo className="h-7 w-auto" />
                    </Link>
                    <nav className="flex items-center gap-6 text-sm text-white/75" aria-label="Principal">
                        <a href="#cursos" className="hover:text-white">Cursos</a>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <Link href="/fundamentos" className="hidden rounded-lg bg-[var(--amber)] px-4 py-2 font-semibold text-[var(--ink)] hover:bg-[#fbb32e] sm:inline-flex">
                            Comece pelo curso
                        </Link>
                    </nav>
                </Container>
            </header>

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-[var(--navy)] pb-20 text-white sm:pb-28">
                    <Backdrop tone="dark" />
                    <div className="absolute inset-0 lg:left-auto lg:w-[48%]">
                        <Image
                            src="/tiago-porto.png"
                            alt="Tiago Porto"
                            fill
                            priority
                            sizes="(min-width: 1024px) 48vw, 100vw"
                            className="object-cover object-[50%_20%] brightness-[0.8] saturate-[0.85]"
                        />
                        <div className="absolute inset-0 bg-[var(--navy)]/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-[var(--navy)] lg:via-[var(--navy)]/55 lg:to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-transparent to-[var(--navy)]/30" />
                    </div>
                    <Container className="relative pt-16 sm:pt-24 lg:pt-28">
                        <div className="max-w-xl">
                            <h1 className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[4rem]">
                                Modelagem financeira <Accent>do jeito que o mercado usa.</Accent>
                            </h1>
                            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl">
                                Cursos, planilhas e guias criados por Tiago Porto, especialista em Modelagem Financeira. Direto
                                ao ponto, para usar no trabalho.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-3">
                                <LinkButton href="#cursos">Ver cursos</LinkButton>
                                <LinkButton href="/blog" variant="ghost">
                                    Ler o blog
                                </LinkButton>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Cursos e produtos */}
                <Band id="cursos" tone="snow">
                    <Container>

                        {/* Destaque: por onde começar */}
                        <article className="grid overflow-hidden rounded-2xl bg-[var(--navy)] text-white lg:grid-cols-[1.3fr_1fr]">
                            <div className="p-7 sm:p-10">
                                <p className="text-sm font-semibold text-[var(--amber)]">Comece por aqui</p>
                                <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">{featured.name}</h3>
                                <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">{featured.summary}</p>
                                <ul className="mt-6 grid gap-2 text-white/80 sm:grid-cols-2">
                                    {featured.includes.map((i) => (
                                        <li key={i} className="flex gap-2">
                                            <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--amber)]" />
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative flex flex-col justify-end gap-6 overflow-hidden border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0">
                                <Backdrop tone="dark" className="opacity-80" />
                                <p className="relative max-w-xs text-lg leading-snug text-white/80">
                                    A base para todo o resto: entender como o modelo fecha.
                                </p>
                                <LinkButton href={featured.href} className="relative self-start">
                                    Saiba mais
                                </LinkButton>
                            </div>
                        </article>

                        <div className="mt-5 grid gap-5 md:grid-cols-3">
                            {paid.map((p) => (
                                <ProductCard key={p.slug} p={p} />
                            ))}
                        </div>

                        <h3 className="mt-16 text-2xl font-semibold tracking-[-0.02em]">Materiais gratuitos</h3>
                        <div className="mt-6 grid gap-5 md:grid-cols-3">
                            {free.map((p) => (
                                <ProductCard key={p.slug} p={p} />
                            ))}
                        </div>
                    </Container>
                </Band>

                {/* Trilha sugerida */}
                <Band tone="mist">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Uma trilha, <Accent>não uma pilha</Accent> de produtos
                                </>
                            }
                            lead="Cada produto resolve uma etapa. Se você está começando, esta é a ordem que faz sentido."
                            className="mb-12"
                        />
                        <ol className="grid gap-4 md:grid-cols-3">
                            {[
                                { step: "Entenda a lógica", text: "O curso Fundamentos mostra como os três demonstrativos se ligam e por que o modelo fecha.", href: "/fundamentos", label: "Fundamentos" },
                                { step: "Modele com uma base pronta", text: "O Template Pro aplica essa lógica num modelo completo, com valuation.", href: "/template-pro", label: "Template Pro" },
                                { step: "Leve para a rotina", text: "Starter Kit e Prompts aceleram a gestão financeira e as análises do dia a dia.", href: "/starter-kit", label: "Starter Kit" },
                            ].map((s, i) => (
                                <li key={s.step} className="rounded-2xl bg-white p-7 ring-1 ring-[var(--grid)]">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-semibold text-white">
                                        {i + 1}
                                    </span>
                                    <h3 className="mt-5 text-lg font-semibold">{s.step}</h3>
                                    <p className="mt-2 leading-relaxed text-[var(--ink-2)]">{s.text}</p>
                                    <Link href={s.href} className="mt-5 inline-flex items-center gap-1.5 font-semibold underline decoration-[var(--amber)] decoration-2 underline-offset-4 hover:text-[var(--blue-2)]">
                                        {s.label}
                                        <ArrowUpRight aria-hidden className="h-4 w-4" />
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </Container>
                </Band>

                {/* Blog */}
                <Band tone="white">
                    <Container>
                        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                            <SectionTitle
                                title={
                                    <>
                                        Do <Accent>blog</Accent>
                                    </>
                                }
                                lead="Guias sobre indicadores, demonstrativos e valuation."
                            />
                            <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold underline decoration-[var(--amber)] decoration-2 underline-offset-4">
                                Ver todos os artigos
                                <ArrowUpRight aria-hidden className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {latestPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group overflow-hidden rounded-2xl ring-1 ring-[var(--grid)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
                                >
                                    <div className="relative aspect-video">
                                        <PostCover title={post.title} category={getCategory(post.slug)} />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-[var(--ink-3)]">
                                            {post.date}, {post.readTime} de leitura
                                        </p>
                                        <h3 className="mt-2 line-clamp-2 font-semibold leading-snug group-hover:text-[var(--blue-2)]">{post.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </Band>
            </main>

            <MfpFooter />
        </div>
    );
}
