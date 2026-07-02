"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Download,
    Linkedin,
    Youtube,
    ExternalLink,
    FileSpreadsheet,
    BookOpen,
    ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gtagEvent } from "@/components/analytics";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

interface BannerCardProps {
    href: string;
    image: string;
    title: string;
    description: string;
    badge?: string;
    gradient: string;
    glowColor: string;
}

function BannerCard({ href, image, title, description, badge, gradient, glowColor }: BannerCardProps) {
    return (
        <motion.div variants={item}>
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
                style={{ boxShadow: `0 0 0px ${glowColor}` }}
                onClick={() => gtagEvent("click_links_page", { label: title, destination: href })}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${glowColor}`;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${glowColor}`;
                }}
            >
                <div className="relative aspect-[16/9] w-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 520px) 100vw, 480px"
                    />
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-80`} />

                    {/* Badge */}
                    {badge && (
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white">
                            {badge}
                        </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">
                            {title}
                        </h3>
                        <p className="text-sm text-white/80 drop-shadow-md leading-relaxed">
                            {description}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all">
                            Acessar
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

interface LinkButtonProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    external?: boolean;
}

function LinkButton({ href, icon, label, external = false }: LinkButtonProps) {
    return (
        <motion.div variants={item}>
            <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 w-full px-5 py-4 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => gtagEvent("click_links_page", { label, destination: href })}
            >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.06] text-primary group-hover:bg-primary/20 transition-colors">
                    {icon}
                </span>
                <span className="flex-1 text-sm font-medium text-white/90">{label}</span>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
            </Link>
        </motion.div>
    );
}

export function LinksPage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-amber-500/8 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-emerald-500/8 blur-[150px] rounded-full" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            {/* Grid pattern */}
            <div
                className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="relative z-10 max-w-[480px] mx-auto px-4 py-12 pb-20">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-[3px] mb-5 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                            <TrendingUp className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-white mb-1">
                        Modelagem Financeira na Prática
                    </h1>
                    <p className="text-sm text-white/50">
                        Cursos, templates e recursos para dominar finanças corporativas
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-4"
                >
                    {/* Section: Downloads */}
                    <motion.div variants={item} className="pt-4 mb-2">
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <Download className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400/80">
                                Downloads Gratuitos
                            </span>
                        </div>
                    </motion.div>

                    {/* Banner: Downloads Gratuitos */}
                    <BannerCard
                        href="/downloads"
                        image="/banner_downloads_gratis.png"
                        title="Arquivos Gratuitos para Download"
                        description="Templates, planilhas e materiais de apoio para suas análises financeiras."
                        badge="Free"
                        gradient="from-black/90 via-black/50 to-transparent"
                        glowColor="rgba(16,185,129,0.25)"
                    />

                    {/* Section: Links */}
                    <motion.div variants={item} className="pt-4 mb-2">
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-400/80">
                                Conheça Mais
                            </span>
                        </div>
                    </motion.div>

                    {/* Link Buttons */}
                    <LinkButton
                        href="/"
                        icon={<TrendingUp className="w-5 h-5" />}
                        label="Curso Completo — Modelagem Financeira na Prática"
                    />

                    <LinkButton
                        href="/template-pro"
                        icon={<FileSpreadsheet className="w-5 h-5" />}
                        label="Template Pro — Modelo Financeiro + Valuation"
                    />



                    <LinkButton
                        href="https://www.youtube.com/@Tiago_Porto"
                        icon={<Youtube className="w-5 h-5" />}
                        label="YouTube"
                        external
                    />

                    <LinkButton
                        href="https://www.linkedin.com/in/portotiago/"
                        icon={<Linkedin className="w-5 h-5" />}
                        label="LinkedIn"
                        external
                    />
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-12 text-center"
                >
                    <div className="flex items-center justify-center gap-1.5 text-white/20 text-xs">
                        <TrendingUp className="w-3 h-3" />
                        <span>Modelagem Financeira na Prática</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
