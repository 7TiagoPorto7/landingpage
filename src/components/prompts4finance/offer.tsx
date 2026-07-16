"use client";

import { CheckCircle2, ShieldCheck, Zap, Download } from 'lucide-react';
import Link from 'next/link';
import { gtagEvent } from '@/components/analytics';
import { useUtmLink } from "@/hooks/use-utm-link";

export function Offer() {
    const checkoutUrl = useUtmLink("https://pay.hotmart.com/P104814631L?off=8b3uxx2o");
    return (
        <section id="pricing" className="py-24 relative bg-slate-900/80 overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 w-full max-w-7xl h-[800px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-accent/10 to-transparent blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Quanto vale economizar <span className="text-gradient-primary">100+ horas por ano?</span>
                    </h2>
                </div>

                <div className="glass rounded-3xl p-8 md:p-12 border border-primary/20 shadow-2xl shadow-primary/10 relative overflow-hidden">
                    {/* Subtle destructive gradient in the corner */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                        {/* Left: Value Anchoring */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-200 mb-6">
                                    Se você fosse comprar separado:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-slate-400">
                                        <span className="flex items-center gap-2"><XIcon /> Curso Excel Avançado</span>
                                        <span className="line-through decoration-red-500/50">R$ 497,00</span>
                                    </li>
                                    <li className="flex justify-between items-center text-slate-400">
                                        <span className="flex items-center gap-2"><XIcon /> 1h de Consultoria FP&A</span>
                                        <span className="line-through decoration-red-500/50">R$ 350,00</span>
                                    </li>
                                    <li className="flex justify-between items-center text-slate-400">
                                        <span className="flex items-center gap-2"><XIcon /> Bundle de Modelagem</span>
                                        <span className="line-through decoration-red-500/50">R$ 197,00</span>
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center font-bold text-slate-500">
                                    <span>Valor Total:</span>
                                    <span className="line-through decoration-red-500/80">R$ 1.044,00</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: The Offer */}
                        <div className="bg-background/80 rounded-2xl p-8 border border-white/10 text-center shadow-xl relative">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl tracking-wider">
                                ACESSO VITALÍCIO
                            </div>

                            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
                                Guia Definitivo
                            </p>
                            <h4 className="text-2xl font-bold text-slate-200 mb-6">100 Prompts Excel + IA</h4>

                            <div className="mb-6 flex justify-center items-end gap-2">
                                <span className="text-2xl font-bold text-slate-400">R$</span>
                                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-none tracking-tighter">
                                    29<span className="text-4xl">,90</span>
                                </span>
                            </div>

                            <p className="text-slate-400 font-medium mb-8">
                                Menos que um almoço.<br />Mais que um curso inteiro.
                            </p>

                            <Link
                                href={checkoutUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex justify-center items-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 mb-6"
                                onClick={() => gtagEvent("begin_checkout", { label: "Quero Meu Guia Agora", value: 29.90, currency: "BRL", page: "prompts4finance", section: "offer" })}
                            >
                                QUERO MEU GUIA AGORA
                            </Link>

                            <div className="flex flex-col gap-3 justify-center text-xs text-slate-500 font-medium">
                                <div className="flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-green-500" />
                                    Compra 100% Segura e Garantida
                                </div>
                                <div className="flex justify-center gap-4">
                                    <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-500" /> Acesso Imediato</span>
                                    <span className="flex items-center gap-1"><Download className="w-3 h-3 text-blue-500" /> Formato .xlsx</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

function XIcon() {
    return (
        <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}
