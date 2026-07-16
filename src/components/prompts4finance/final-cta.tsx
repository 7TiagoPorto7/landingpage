"use client";

import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import { gtagEvent } from '@/components/analytics';
import { useUtmLink } from "@/hooks/use-utm-link";

export function FinalCTA() {
    const checkoutUrl = useUtmLink("https://pay.hotmart.com/P104814631L?off=8b3uxx2o");
    return (
        <section className="py-24 relative bg-background overflow-hidden border-t border-white/5">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
                    Você pode continuar gastando horas no Excel.<br className="hidden md:block" />
                    <span className="text-primary italic">Ou pode começar agora.</span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12">
                    100 prompts. R$ 29,90. Acesso imediato. Garantia de 7 dias.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <Link
                        href={checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-xl md:text-2xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/30 hover:scale-105 group"
                        onClick={() => gtagEvent("begin_checkout", { label: "Quero Parar de Perder Tempo", value: 29.90, currency: "BRL", page: "prompts4finance", section: "final_cta" })}
                    >
                        QUERO PARAR DE PERDER TEMPO
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <div className="flex flex-col items-center gap-2 text-sm text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5 justify-center">
                            <Lock className="w-4 h-4 text-green-500" />
                            Pagamento 100% seguro via Hotmart/Kiwify
                        </span>
                        <span>Acesso liberado no e-mail em menos de 2 minutos.</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
