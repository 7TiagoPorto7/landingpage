import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { MazeGrid } from "@/components/ui/maze-grid";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
    title: "Modelagem Financeira na Prática — Em Breve",
    description:
        "A plataforma completa de cursos e ferramentas de modelagem financeira está sendo preparada. Conheça já o curso Fundamentos da Modelagem Financeira.",
    openGraph: {
        title: "Modelagem Financeira na Prática — Em Breve",
        description:
            "A plataforma completa de cursos e ferramentas de modelagem financeira está sendo preparada. Conheça o curso Fundamentos.",
        type: "website",
        locale: "pt_BR",
    },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col justify-between relative overflow-hidden">
            {/* Maze Grid Background Animation */}
            <MazeGrid />

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/15 blur-[140px] rounded-full opacity-60 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/15 blur-[140px] rounded-full opacity-60 animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full opacity-40" />
            </div>

            {/* Header Brand */}
            <header className="container relative z-10 px-4 mx-auto pt-8 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-lg">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-extrabold tracking-tight text-white">
                        Modelagem Financeira na Prática
                    </span>
                </div>

                <Link
                    href="/fundamentos"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/30"
                >
                    <span>Ver Curso Fundamentos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                </Link>
            </header>

            {/* Main Hero Section */}
            <div className="container relative z-10 px-4 mx-auto py-20 text-center max-w-4xl my-auto">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full border border-amber-400/30 bg-amber-500/10 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-amber-400">
                        Plataforma Principal — Em Breve
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white">
                    Modelagem Financeira{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                        na Prática
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
                    Estamos construindo a plataforma definitiva de modelos, ferramentas de inteligência artificial e treinamentos em finanças corporativas.
                </p>

                {/* FEATURED COURSE CARD / BANNER DRIVING TO /fundamentos */}
                <div className="max-w-2xl mx-auto p-[1px] rounded-3xl bg-gradient-to-r from-amber-400 via-orange-500 to-teal-400 shadow-2xl mb-12 group">
                    <div className="bg-[#0D182E] rounded-[23px] p-8 md:p-10 text-left relative overflow-hidden backdrop-blur-md">
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />
                        
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30 mb-4">
                            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                            <span>Treinamento Disponível Agora</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                            Curso Fundamentos da Modelagem Financeira
                        </h2>

                        <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                            Aprenda a conectar DRE, Balanço Patrimonial e Fluxo de Caixa em apenas <strong className="text-teal-300 font-bold">2 horas de conteúdo 100% prático</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
                            <div className="text-sm">
                                <span className="text-slate-400 line-through text-xs block">De R$ 297</span>
                                <span className="text-xl font-black text-white">por R$ 197 <span className="text-xs text-teal-400 font-normal">ou 12x de R$ 19,70</span></span>
                            </div>

                            <Link
                                href="/fundamentos"
                                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm md:text-base shadow-lg hover:scale-105 transition-all gap-2 group/btn"
                            >
                                <span>Acessar Curso Fundamentos</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        Acesso Imediato
                    </span>
                    <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                        7 Dias de Garantia
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-amber-400" />
                        Checkout Seguro via Hotmart
                    </span>
                </div>
            </div>

            <Footer />
        </main>
    );
}
