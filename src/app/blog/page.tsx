import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";
import { NewsletterForm } from "@/components/newsletter-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { BlogListClient } from "@/components/blog-list-client";
import { Logo } from "@/components/logo";


export const metadata: Metadata = {
    title: "Blog & Insights | MFP Education",
    description: "Artigos, tutoriais e análises aprofundadas sobre modelagem financeira, valuation, Excel corporativo e carreira no mercado financeiro.",
    openGraph: {
        title: "Blog & Insights | MFP Education",
        description: "Artigos, tutoriais e análises sobre modelagem financeira, valuation e carreira no mercado financeiro.",
        url: "https://www.mfnapratica.com.br/blog",
        type: "website",
        locale: "pt_BR",
        siteName: "MFP Education",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog & Insights | MFP Education",
        description: "Artigos, tutoriais e análises sobre modelagem financeira, valuation e carreira no mercado financeiro.",
    },
};



export default function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black transition-colors duration-200">
            {/* Top Navigation */}
            <nav className="border-b border-border bg-background/70 backdrop-blur-md sticky top-0 z-50">
                <div className="container max-w-5xl px-6 mx-auto h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center shrink-0 group">
                        <Logo className="h-8 w-auto hover:opacity-95 transition-opacity" />
                    </Link>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link
                            href="/"
                            className="inline-flex items-center text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                            Voltar para Home
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="container max-w-5xl px-6 mx-auto pt-16 pb-12">
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-foreground">
                    Blog & Insights
                </h1>
                <p className="text-base text-muted-foreground max-w-2xl leading-relaxed font-light">
                    Tutoriais, guias passo a passo e análises técnicas para acelerar sua jornada de estudos em finanças e tecnologia.
                </p>
                <div className="mt-8 h-px w-full bg-border" />
            </header>

            {/* Blog Listing Client Component */}
            <section className="container max-w-5xl px-6 mx-auto pb-24">
                <BlogListClient posts={posts} />

                {/* Newsletter Box */}
                <div className="mt-20 p-6 sm:p-10 rounded-2xl border border-border bg-card relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-xl">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                            Insights por E-mail
                        </span>
                        <h3 className="text-xl font-extrabold text-foreground mt-1 mb-2">
                            Aprofunde seus conhecimentos
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                            Receba tutoriais práticos de modelagem, planilhas exclusivas de valuation e artigos direto na sua caixa de entrada. Sem spam.
                        </p>

                        <NewsletterForm />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-card py-12 text-center text-muted-foreground text-xs">
                <div className="container max-w-5xl px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        &copy; {new Date().getFullYear()} MFP Education. Todos os direitos reservados.
                    </div>
                    <div className="flex gap-4">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <Link href="/legal" className="hover:text-foreground transition-colors">Termos</Link>
                        <Link href="/legal" className="hover:text-foreground transition-colors">Privacidade</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
