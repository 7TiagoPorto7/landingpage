import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, GraduationCap, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { getSortedPostsData } from "@/lib/blog";

export const metadata: Metadata = {
    title: "MFP Education | Formação e Ferramentas para o Mercado Financeiro",
    description:
        "Aprenda modelagem financeira, valuation e análise de dados na prática. Cursos, ferramentas e insights criados por profissionais do mercado.",
    openGraph: {
        title: "MFP Education | Formação e Ferramentas para o Mercado Financeiro",
        description:
            "Aprenda modelagem financeira, valuation e análise de dados na prática. Conheça nossos cursos e artigos.",
        type: "website",
        locale: "pt_BR",
        siteName: "MFP Education",
    },
};

export default function Home() {
    // Buscar os 3 posts mais recentes para exibir na Home
    const latestPosts = getSortedPostsData().slice(0, 3);

    return (
        <main className="min-h-screen bg-[#050a15] text-white flex flex-col justify-between relative overflow-hidden selection:bg-primary selection:text-black">
            {/* Soft Ambient Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full" />
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-teal-500/5 blur-[140px] rounded-full" />
                <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full" />
            </div>

            {/* Header Brand Navbar */}
            <header className="border-b border-white/5 bg-[#050a15]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container max-w-5xl px-6 mx-auto h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <Logo className="w-6 h-6 text-white group-hover:scale-105 transition-transform" />
                        <span className="text-base font-black tracking-tight text-white">
                            MFP Education
                        </span>
                    </Link>

                    <nav className="hidden sm:flex items-center gap-8 text-sm font-semibold text-neutral-400">
                        <a href="#cursos" className="hover:text-white transition-colors">Cursos</a>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    </nav>

                    <a
                        href="#cursos"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/10 transition-all cursor-pointer"
                    >
                        Ver Cursos
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container relative z-10 px-6 mx-auto pt-24 pb-20 text-center max-w-4xl my-auto">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                        MFP Education Hub
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-white">
                    Formação de Elite para o{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-amber-400">
                        Mercado Financeiro
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Aprenda modelagem financeira, valuation e análise de dados corporativos com metodologias 100% práticas e focadas na realidade do mercado de trabalho.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#cursos"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-primary text-slate-950 font-bold text-sm md:text-base hover:bg-amber-400 active:scale-98 transition-all gap-1.5 shadow-lg shadow-amber-500/10 cursor-pointer"
                    >
                        <span>Conhecer Cursos</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                        href="/blog"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm md:text-base transition-all gap-1.5 cursor-pointer"
                    >
                        <BookOpen className="w-4 h-4 text-neutral-400" />
                        <span>Acessar Blog</span>
                    </Link>
                </div>
            </section>

            {/* Courses Section */}
            <section id="cursos" className="border-t border-white/5 bg-[#03070f] relative z-10 py-24">
                <div className="container max-w-5xl px-6 mx-auto">
                    <div className="text-center max-w-xl mx-auto mb-16">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">
                            Nossos Treinamentos
                        </span>
                        <h2 className="text-3xl font-black text-white mt-2 mb-4">
                            Cursos Práticos e Completos
                        </h2>
                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                            Desenvolva habilidades técnicas de alta demanda no mercado financeiro corporativo, assessorias, bancos e consultorias.
                        </p>
                    </div>

                    {/* Course Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Course 1: Fundamentos */}
                        <div className="md:col-span-2 p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-teal-500 to-amber-500 shadow-2xl flex flex-col justify-between group">
                            <div className="bg-[#050a15] rounded-[15px] p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
                                
                                <div>
                                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30 mb-4">
                                        <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                                        <span>Disponível</span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                                        Curso Fundamentos de Modelagem Financeira
                                    </h3>

                                    <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                                        Aprenda a estruturar e conectar de forma lógica e auditável a DRE, o Balanço Patrimonial e a DFC (Fluxo de Caixa) do zero em apenas 2 horas de conteúdo prático.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
                                    <div className="text-sm">
                                        <span className="text-neutral-500 line-through text-xs block">De R$ 297</span>
                                        <span className="text-lg font-black text-white">por R$ 197 <span className="text-xs text-teal-400 font-normal">ou 12x de R$ 19,70</span></span>
                                    </div>

                                    <Link
                                        href="/fundamentos"
                                        className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md hover:scale-102 active:scale-98 transition-all gap-1 group/btn"
                                    >
                                        <span>Acessar Curso</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Course 2: Valuation (Coming soon) */}
                        <div className="p-6 rounded-2xl border border-white/5 bg-[#050a15] flex flex-col justify-between relative overflow-hidden group">
                            <div>
                                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/20 mb-4">
                                    Em Breve
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                                    Valuation Avançado: DCF e Múltiplos
                                </h3>
                                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                                    Domine projeções avançadas de fluxo de caixa, custo de capital (WACC/CAPM) e análises setoriais comparativas por múltiplos de mercado.
                                </p>
                            </div>
                            <span className="text-xs text-neutral-500 font-semibold border-t border-white/5 pt-4">Lançamento no Próximo Semestre</span>
                        </div>

                        {/* Course 3: Python Finance (Coming soon) */}
                        <div className="p-6 rounded-2xl border border-white/5 bg-[#050a15] flex flex-col justify-between relative overflow-hidden group">
                            <div>
                                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/20 mb-4">
                                    Em Breve
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                                    Python e Automação para Finanças
                                </h3>
                                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                                    Automatize relatórios, extraia dados de APIs e do Banco Central, e construa scripts de análise de risco e portfólio usando Python.
                                </p>
                            </div>
                            <span className="text-xs text-neutral-500 font-semibold border-t border-white/5 pt-4">Lançamento no Próximo Semestre</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Blog Section */}
            {latestPosts.length > 0 && (
                <section className="bg-[#050a15] relative z-10 py-24 border-t border-white/5">
                    <div className="container max-w-5xl px-6 mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
                            <div>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                                    Artigos Gratuitos
                                </span>
                                <h2 className="text-3xl font-black text-white mt-2">
                                    Últimos do Nosso Blog
                               </h2>
                            </div>
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-sm font-bold text-neutral-400 hover:text-white transition-colors group/all"
                            >
                                <span>Ver todos os posts</span>
                                <ArrowRight className="w-4 h-4 ml-1 group-hover/all:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                        {/* Posts List */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {latestPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col p-5 rounded-xl border border-white/5 bg-neutral-950/40 hover:border-primary/20 hover:bg-neutral-950/80 transition-all duration-200"
                                >
                                    <div className="flex items-center gap-3 text-[10px] font-semibold text-neutral-500 mb-3">
                                        <span className="flex items-center gap-0.5">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="h-1 w-1 rounded-full bg-neutral-800" />
                                        <span className="flex items-center gap-0.5">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-bold text-neutral-200 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <span className="mt-auto text-xs font-bold text-primary inline-flex items-center gap-0.5">
                                        <span>Ler artigo</span>
                                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
