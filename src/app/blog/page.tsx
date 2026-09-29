import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";
import { NewsletterForm } from "@/components/newsletter-form";
import { BlogListClient } from "@/components/blog-list-client";
import { Logo } from "@/components/logo";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { Backdrop } from "@/components/mfp/backdrop";
import { MfpFooter } from "@/components/mfp/footer";


export const metadata: Metadata = {
    title: "Blog: guias de modelagem financeira, valuation e indicadores",
    description: "Artigos, tutoriais e análises aprofundadas sobre modelagem financeira, valuation, Excel corporativo e carreira no mercado financeiro.",
    openGraph: {
        title: "Blog | Modelagem Financeira na Prática",
        description: "Artigos, tutoriais e análises sobre modelagem financeira, valuation e carreira no mercado financeiro.",
        url: "/blog",
        type: "website",
        locale: "pt_BR",
        siteName: "Modelagem Financeira na Prática",
    },
    alternates: { canonical: "/blog" },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Modelagem Financeira na Prática",
        description: "Artigos, tutoriais e análises sobre modelagem financeira, valuation e carreira no mercado financeiro.",
    },
};



export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <div className={`mfp ${mfpFonts} min-h-screen`}>
            {/* Header MFP */}
            <header className="sticky top-0 z-30 border-b border-white/10 bg-[var(--navy)]/85 text-white backdrop-blur-md">
                <Container className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" aria-label="Página inicial">
                        <Logo className="h-7 w-auto" />
                    </Link>
                    <nav className="flex items-center gap-6 text-sm text-white/75" aria-label="Principal">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <Link href="/blog" className="text-white font-semibold">Blog</Link>
                        <Link href="/fundamentos" className="hidden rounded-lg bg-[var(--amber)] px-4 py-2 font-semibold text-[var(--ink)] hover:bg-[#fbb32e] sm:inline-flex">
                            Comece pelo curso
                        </Link>
                    </nav>
                </Container>
            </header>

            <main>
                {/* Hero do Blog */}
                <Band tone="snow">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Blog &amp; <Accent>Insights</Accent>
                                </>
                            }
                            lead="Tutoriais, guias passo a passo e análises técnicas para acelerar sua jornada de estudos em finanças e tecnologia."
                            className="mb-2"
                        />
                        <div className="mt-8 h-px w-full bg-[var(--grid)]" />
                    </Container>
                </Band>

                {/* Blog Listing */}
                <Band tone="white">
                    <Container>
                        <BlogListClient posts={posts} />
                    </Container>
                </Band>

                {/* Newsletter */}
                <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white sm:py-28">
                    <Backdrop tone="dark" className="opacity-60" />
                    <Container className="relative">
                        <div className="max-w-xl">
                            <p className="text-sm font-semibold text-[var(--amber)]">Insights por E-mail</p>
                            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
                                Aprofunde seus conhecimentos
                            </h3>
                            <p className="mt-4 text-white/65 leading-relaxed">
                                Receba tutoriais práticos de modelagem, planilhas exclusivas de valuation e artigos direto na sua caixa de entrada. Sem spam.
                            </p>
                            <div className="mt-8">
                                <NewsletterForm />
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            <MfpFooter />
        </div>
    );
}
