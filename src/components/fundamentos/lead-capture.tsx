"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, FileText, Download } from "lucide-react";
import { trackLead } from "@/lib/tracking";

export function FundamentosLeadCapture() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        // TODO: [PREENCHER: Mailchimp/Brevo/ConvertKit + form action ou API key]
        try {
            // Simulate / send to lead API endpoint
            await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, page: "fundamentos", type: "lead_magnet" }),
            });
        } catch (err) {
            console.error("Lead submission endpoint error:", err);
        }

        trackLead("fundamentos_lead_section");
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section id="captura-email" className="py-20 bg-[#0B1528] text-white relative overflow-hidden border-t border-slate-800/80">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[150px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-3xl bg-[#111F3D] border border-teal-500/30 shadow-2xl text-center backdrop-blur-md relative overflow-hidden"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30 mb-4">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Material Gratuito</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                        Ainda não está pronto para comprar?
                    </h2>

                    <p className="text-sm md:text-base text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        Baixe grátis: <strong className="text-teal-300 font-bold">O mapa de 1 página de como o Balanço fecha</strong>
                        {/* TODO: [PREENCHER: nome da isca se diferente do padrão] */}
                    </p>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-6 rounded-2xl bg-teal-500/20 border border-teal-500/40 text-teal-200 text-center"
                        >
                            <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto mb-2" />
                            <h3 className="text-lg font-bold text-white mb-1">Material enviado com sucesso!</h3>
                            <p className="text-xs md:text-sm text-slate-300">
                                Verifique sua caixa de entrada (e a pasta de spam) para acessar seu material gratuito.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <div className="relative flex-1">
                                <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Seu melhor e-mail"
                                    className="w-full h-13 pl-11 pr-4 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="h-13 px-7 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-black text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg cursor-pointer"
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
                </motion.div>
            </div>
        </section>
    );
}
