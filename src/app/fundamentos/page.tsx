import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { FundamentosHero } from "@/components/fundamentos/hero";

const FundamentosProblema = dynamic(() => import("@/components/fundamentos/problem").then((mod) => mod.FundamentosProblema));
const FundamentosSolucao = dynamic(() => import("@/components/fundamentos/solution").then((mod) => mod.FundamentosSolucao));
const FundamentosAudiencia = dynamic(() => import("@/components/fundamentos/audience").then((mod) => mod.FundamentosAudiencia));
const FundamentosCurriculo = dynamic(() => import("@/components/fundamentos/curriculum").then((mod) => mod.FundamentosCurriculo));
const FundamentosBonus = dynamic(() => import("@/components/fundamentos/bonus").then((mod) => mod.FundamentosBonus));
const FundamentosPricing = dynamic(() => import("@/components/fundamentos/pricing").then((mod) => mod.FundamentosPricing));
const FundamentosGarantia = dynamic(() => import("@/components/fundamentos/guarantee").then((mod) => mod.FundamentosGarantia));
const FundamentosFAQ = dynamic(() => import("@/components/fundamentos/faq").then((mod) => mod.FundamentosFAQ));
const FundamentosCTAFinal = dynamic(() => import("@/components/fundamentos/final-cta").then((mod) => mod.FundamentosCTAFinal));
const FundamentosStickyMobileCTA = dynamic(() => import("@/components/fundamentos/sticky-cta").then((mod) => mod.FundamentosStickyMobileCTA));
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer));

export const metadata: Metadata = {
    title: "Fundamentos da Modelagem Financeira — Curso Direto ao Ponto",
    description:
        "Aprenda a estrutura de um modelo financeiro e a lógica que conecta DRE, Balanço Patrimonial e Fluxo de Caixa. 7 aulas diretas, sem enrolação. Inclui planilha de prompts de IA para finanças.",
    openGraph: {
        title: "Fundamentos da Modelagem Financeira — Curso Direto ao Ponto",
        description:
            "Aprenda a estrutura de um modelo financeiro e a lógica que conecta os três demonstrativos. 7 aulas diretas + bônus exclusivos.",
        type: "website",
        locale: "pt_BR",
    },
};

export default function FundamentosPage() {
    return (
        <main className="min-h-screen bg-black">
            <FundamentosHero />
            <FundamentosProblema />
            <FundamentosSolucao />
            <FundamentosAudiencia />
            <FundamentosCurriculo />
            <FundamentosBonus />
            <FundamentosPricing />
            <FundamentosGarantia />
            <FundamentosFAQ />
            <FundamentosCTAFinal />
            <FundamentosStickyMobileCTA />
            <Footer />
        </main>
    );
}
