"use client";

import Link from "next/link";
import { TrendingUp, Lock } from "lucide-react";
import { gtagEvent } from "@/components/analytics";

export function Footer() {
    return (
        <footer className="py-12 border-t border-slate-800 bg-[#070D1B] text-slate-400 text-sm">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-teal-400" />
                            <span className="text-lg font-bold text-white">Modelagem Financeira na Prática</span>
                        </div>
                        <span className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                            <Lock className="w-3 h-3 text-teal-400" /> Pagamento processado pela Hotmart
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
                        <Link
                            href="/legal#terms"
                            className="hover:text-teal-300 transition-colors"
                            onClick={() => gtagEvent("click_footer_link", { label: "Termos de Uso" })}
                        >
                            Termos de Uso
                        </Link>
                        <Link
                            href="/legal#privacy"
                            className="hover:text-teal-300 transition-colors"
                            onClick={() => gtagEvent("click_footer_link", { label: "Política de Privacidade" })}
                        >
                            Política de Privacidade
                        </Link>
                        <Link
                            href="/legal#contact"
                            className="hover:text-teal-300 transition-colors"
                            onClick={() => gtagEvent("click_footer_link", { label: "Contato" })}
                        >
                            Contato
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
                    <div>
                        &copy; {new Date().getFullYear()} Modelagem Financeira na Prática. Todos os direitos reservados.
                    </div>
                    <div className="space-x-3">
                        <span>CNPJ: TODO: [PREENCHER: CNPJ]</span>
                        <span>·</span>
                        <span>E-mail: TODO: [PREENCHER: Email de contato]</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
