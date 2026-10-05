import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Container } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { Logo } from "@/components/logo";
import { PostCover } from "@/components/post-cover";
import { getSortedPostsData } from "@/lib/blog";
import { getCategory } from "@/lib/blog-categories";
import { INSTALLMENT_COUNT, INSTALLMENT_VALUE, PRICE_LABEL } from "@/components/fundamentos/content";

export const metadata: Metadata = {
    title: { absolute: "Inscrição confirmada | Modelagem Financeira na Prática" },
    robots: { index: false, follow: false },
};

// Os mesmos 3 artigos do primeiro e-mail da sequência
const START = ["o-que-e-dre-como-calcular", "o-que-e-bp-como-calcular", "o-que-e-dfc-como-calcular"];

// Depois da inscrição na newsletter: confirma, sugere por onde começar e apresenta o curso
export default function InscricaoConfirmadaPage() {
    const posts = getSortedPostsData();
    const start = START.map((slug) => posts.find((p) => p.slug === slug)).filter((p) => p !== undefined);

    return (
        <div className={`mfp ${mfpFonts} flex min-h-screen flex-col`} style={{ "--product": "#f59e0b", background: "var(--snow)" } as React.CSSProperties}>
            <header className="border-b border-[var(--grid)] bg-white">
                <Container className="flex h-16 items-center">
                    <Link href="/" aria-label="Página inicial">
                        <Logo variant="dark" className="h-7 w-auto" />
                    </Link>
                </Container>
            </header>

            <main className="flex-1 py-14 text-[var(--ink)] sm:py-20">
                <Container className="max-w-4xl">
                    <div className="text-center">
                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--ok)]/10">
                            <EnvelopeSimple aria-hidden weight="duotone" className="h-7 w-7 text-[var(--ok)]" />
                        </span>
                        <h1 className="mt-6 text-balance text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.8rem]">
                            Inscrição confirmada. <Accent>Confira seu e-mail</Accent>
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--ink-2)]">
                            O primeiro e-mail, &ldquo;Comece por aqui&rdquo;, sai de <b>contato@mfnapratica.com.br</b> em instantes. Se não aparecer, olhe a caixa de spam ou
                            promoções.
                        </p>
                    </div>

                    {/* Por onde começar */}
                    <section className="mt-14">
                        <h2 className="text-xl font-semibold">Enquanto isso, comece pelos três demonstrativos</h2>
                        <ul className="mt-5 grid gap-5 md:grid-cols-3">
                            {start.map((post) => (
                                <li key={post.slug}>
                                    <Link
                                        href={`/blog/${post.slug}?utm_source=site&utm_medium=obrigado&utm_campaign=newsletter-blog`}
                                        className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-[var(--grid)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]"
                                    >
                                        <div className="relative aspect-video">
                                            <PostCover title={post.title} category={getCategory(post.slug)} image={post.image} alt={post.imageAlt} />
                                        </div>
                                        <div className="p-5">
                                            <p className="line-clamp-2 font-semibold leading-snug group-hover:text-[#b45309]">{post.title}</p>
                                            <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#b45309]">
                                                Ler o artigo <ArrowUpRight aria-hidden weight="bold" className="h-4 w-4" />
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* O curso */}
                    <section className="mt-12 flex flex-col gap-6 overflow-hidden rounded-3xl bg-[var(--navy)] p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-lg">
                            <p className="text-sm font-semibold text-[var(--amber)]">Quando quiser ir além dos artigos</p>
                            <h2 className="mt-2 text-balance text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.025em] sm:text-[2rem]">
                                Monte o modelo inteiro no curso Fundamentos da Modelagem Financeira
                            </h2>
                            <p className="mt-3 leading-relaxed text-[var(--fg-2)]">
                                DRE, Balanço e Fluxo de Caixa ligados passo a passo, até a checagem do Balanço dar zero. {INSTALLMENT_COUNT}{" "}
                                <b className="text-white">{INSTALLMENT_VALUE}</b> ou {PRICE_LABEL}, com garantia de 7 dias.
                            </p>
                        </div>
                        <Link
                            href="/fundamentos?utm_source=site&utm_medium=obrigado&utm_campaign=newsletter-blog"
                            className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-[var(--amber)] px-6 font-semibold text-[var(--ink)] hover:bg-[#fbb32e]"
                        >
                            Conhecer o curso
                        </Link>
                    </section>
                </Container>
            </main>

            <MfpFooter />
        </div>
    );
}
