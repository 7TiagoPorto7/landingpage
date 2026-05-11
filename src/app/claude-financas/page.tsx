import { Metadata } from "next";
import { Header } from "@/components/header";
import { SKFooter } from "@/components/starter-kit/footer";

import { CFHero } from "@/components/claude-financas/hero";
import { CFProblem } from "@/components/claude-financas/problem";
import { CFSolution } from "@/components/claude-financas/solution";
import { CFBenefits } from "@/components/claude-financas/benefits";
import { CFUseCases } from "@/components/claude-financas/use-cases";
import { CFTestimonials } from "@/components/claude-financas/testimonials";
import { CFFAQ } from "@/components/claude-financas/faq";
import { CFFinalCTA } from "@/components/claude-financas/final-cta";

export const metadata: Metadata = {
    title: "Claude para Finanças — Guia Gratuito | Domine IA no Financeiro",
    description:
        "Descubra como usar o Claude para automatizar análises financeiras, modelagem, FP&A, valuation e mais. Baixe o guia gratuito e transforme sua rotina.",
    openGraph: {
        title: "Claude para Finanças — Guia Gratuito",
        description:
            "Descubra como usar o Claude para automatizar análises financeiras, modelagem, FP&A, valuation e mais.",
        url: "https://seulink.com/claude-financas",
    },
};

export default function ClaudeFinancas() {
    return (
        <div className="min-h-screen flex flex-col pt-16 selection:bg-purple-500/30 selection:text-white">
            <Header />

            <main className="flex-grow">
                <CFHero />
                <CFProblem />
                <CFSolution />
                <CFBenefits />
                <CFUseCases />
                <CFTestimonials />
                <CFFAQ />
                <CFFinalCTA />
            </main>

            <SKFooter />
        </div>
    );
}
