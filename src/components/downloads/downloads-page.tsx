"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Download,
    FileSpreadsheet,
    FileText,
    Mail,
    X,
    ArrowLeft,
    CheckCircle,
    Lock,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

interface DownloadFile {
    id: string;
    title: string;
    description: string;
    type: "pdf" | "xlsx";
    size: string;
    downloadUrl: string;
}

const files: DownloadFile[] = [];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function FileIcon({ type }: { type: "pdf" | "xlsx" }) {
    if (type === "pdf") {
        return (
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20">
                <FileText className="w-6 h-6 text-red-400" />
            </div>
        );
    }
    return (
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <FileSpreadsheet className="w-6 h-6 text-emerald-400" />
        </div>
    );
}

function FileBadge({ type }: { type: "pdf" | "xlsx" }) {
    const colors = type === "pdf"
        ? "bg-red-500/10 text-red-400 border-red-500/20"
        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    return (
        <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${colors}`}>
            {type}
        </span>
    );
}

interface EmailModalProps {
    file: DownloadFile | null;
    onClose: () => void;
}

function EmailModal({ file, onClose }: EmailModalProps) {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        // Simulate API call — replace with real endpoint
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1200);
    };

    if (!file) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-md rounded-2xl bg-[#0c1222] border border-white/10 p-6 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/40 hover:text-white/80"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {!submitted ? (
                        <>
                            <div className="flex items-center gap-3 mb-5">
                                <FileIcon type={file.type} />
                                <div>
                                    <h3 className="text-base font-bold text-white">{file.title}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <FileBadge type={file.type} />
                                        <span className="text-xs text-white/40">{file.size}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-5 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                                <p className="text-xs text-amber-200/80">
                                    Informe seu e-mail para liberar o download gratuito.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="Seu melhor e-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="relative w-full h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold text-sm hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 disabled:opacity-60 disabled:hover:scale-100 overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {loading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Download className="w-4 h-4" />
                                                Baixar Gratuitamente
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                </button>
                            </form>

                            <p className="mt-4 text-[11px] text-center text-white/25">
                                Seu e-mail não será compartilhado. Apenas conteúdo relevante.
                            </p>
                        </>
                    ) : (
                        <div className="text-center py-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4"
                            >
                                <CheckCircle className="w-8 h-8 text-emerald-400" />
                            </motion.div>
                            <h3 className="text-lg font-bold text-white mb-2">Download Liberado!</h3>
                            <p className="text-sm text-white/50 mb-6">
                                Obrigado! Seu download começará automaticamente.
                            </p>
                            <a
                                href={file.downloadUrl}
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm hover:bg-emerald-500/20 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Baixar {file.title}
                            </a>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export function DownloadsPage() {
    const [selectedFile, setSelectedFile] = useState<DownloadFile | null>(null);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-15%] right-[-15%] w-[50%] h-[50%] bg-emerald-500/8 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-15%] left-[-15%] w-[50%] h-[50%] bg-blue-500/8 blur-[150px] rounded-full" />
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

            <div className="relative z-10 max-w-3xl mx-auto px-4 pt-12 pb-20">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        href="/links"
                        className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar aos links
                    </Link>
                </motion.div>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>100% Gratuito</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Arquivos Gratuitos para{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                            Download
                        </span>
                    </h1>
                    <p className="max-w-xl mx-auto text-base text-white/50 leading-relaxed">
                        Templates, planilhas e materiais de apoio para suas análises financeiras.
                        Basta informar seu e-mail para baixar.
                    </p>
                </motion.div>

                {/* Em Breve Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center justify-center py-20 px-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] text-center"
                >
                    <div className="relative mb-6">
                        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                            <Download className="w-9 h-9 text-emerald-400/60" />
                        </div>
                        <span className="absolute -top-2 -right-2 flex h-5 w-5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500/20 border border-emerald-400/40 items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            </span>
                        </span>
                    </div>
                    <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        Em Breve
                    </span>
                    <h2 className="text-lg font-bold text-white mb-2">
                        Arquivos chegando em breve
                    </h2>
                    <p className="text-sm text-white/40 max-w-sm leading-relaxed">
                        Estamos preparando templates, planilhas e materiais de qualidade para você. Volte em breve!
                    </p>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-14 text-center p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.07]"
                >
                    <h2 className="text-lg font-bold text-white mb-2">
                        Quer ir além?
                    </h2>
                    <p className="text-sm text-white/40 mb-5 max-w-md mx-auto">
                        Conheça nosso curso completo de Modelagem Financeira na Prática e o Template Pro com 18 abas interligadas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold text-black rounded-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                        >
                            Curso Completo
                        </Link>
                        <Link
                            href="/template-pro"
                            className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300"
                        >
                            Template Pro
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Email Modal */}
            {selectedFile && (
                <EmailModal
                    file={selectedFile}
                    onClose={() => setSelectedFile(null)}
                />
            )}
        </div>
    );
}
