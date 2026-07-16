"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2, FileText, Download } from "lucide-react";
import { trackLead } from "@/lib/tracking";

export function FundamentosExitModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Check if modal was already shown or user clicked checkout
        const modalShown = localStorage.getItem("fundamentos_lead_modal_shown");
        const hasClickedCheckout = localStorage.getItem("has_clicked_checkout");

        if (modalShown || hasClickedCheckout) {
            return;
        }

        // Desktop exit-intent (mouse leave top)
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !localStorage.getItem("fundamentos_lead_modal_shown")) {
                setIsOpen(true);
                localStorage.setItem("fundamentos_lead_modal_shown", "true");
            }
        };

        // Mobile scroll trigger (60% scroll)
        const handleScroll = () => {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            if (scrollPercent >= 0.6 && !localStorage.getItem("fundamentos_lead_modal_shown")) {
                setIsOpen(true);
                localStorage.setItem("fundamentos_lead_modal_shown", "true");
                window.removeEventListener("scroll", handleScroll);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            
            let utmData = {};
            try {
                const utmStr = sessionStorage.getItem("utm_data");
                if (utmStr) utmData = JSON.parse(utmStr);
            } catch (e) {}
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, page: "fundamentos", type: "exit_modal" , ...utmData}),
            });
        } catch (err) {
            console.error("Lead submission endpoint error:", err);
        }

        trackLead("fundamentos_exit_modal");
        setLoading(false);
        setSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg p-8 rounded-3xl bg-[#0F1C38] border border-teal-500/40 text-white shadow-2xl overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
                        aria-label="Fechar"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30 mb-4">
                            <FileText className="w-3.5 h-3.5" />
                            <span>Antes de sair...</span>
                        </div>

                        <h3 className="text-2xl font-black text-white mb-2">
                            Ainda não está pronto para comprar?
                        </h3>

                        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                            Baixe grátis: <strong className="text-teal-300 font-bold">O mapa de 1 página de como o Balanço fecha</strong>
                        </p>

                        {submitted ? (
                            <div className="p-5 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-200">
                                <CheckCircle2 className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                                <p className="font-bold text-white text-base mb-1">Enviado com sucesso!</p>
                                <p className="text-xs text-slate-300">Confira sua caixa de e-mail.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div className="relative">
                                    <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Seu melhor e-mail"
                                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full h-12 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-black text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                                >
                                    {loading ? (
                                        "Enviando..."
                                    ) : (
                                        <>
                                            <Download className="w-4 h-4" />
                                            <span>Quero receber grátis</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
