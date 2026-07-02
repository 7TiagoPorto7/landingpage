import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { FundamentosHero } from "@/components/fundamentos/hero";

const FundamentosProblema = dynamic(() => import("@/components/fundamentos/problem").then((mod) => mod.FundamentosProblema));
const FundamentosSolucao = dynamic(() => import("@/components/fundamentos/solution").then((mod) => mod.FundamentosSolucao));
const FundamentosInstrutor = dynamic(() => import("@/components/fundamentos/instructor").then((mod) => mod.FundamentosInstrutor));
const FundamentosAudiencia = dynamic(() => import("@/components/fundamentos/audience").then((mod) => mod.FundamentosAudiencia));
const FundamentosCurriculo = dynamic(() => import("@/components/fundamentos/curriculum").then((mod) => mod.FundamentosCurriculo));
const FundamentosOQueVoceRecebe = dynamic(() => import("@/components/fundamentos/product-gallery").then((mod) => mod.FundamentosOQueVoceRecebe));
// Oculto conforme solicitação: const FundamentosAulaAmostra = dynamic(() => import("@/components/fundamentos/sample-lesson").then((mod) => mod.FundamentosAulaAmostra));
const FundamentosBonus = dynamic(() => import("@/components/fundamentos/bonus").then((mod) => mod.FundamentosBonus));
const FundamentosTestimonials = dynamic(() => import("@/components/fundamentos/testimonials").then((mod) => mod.FundamentosTestimonials));
const FundamentosPricing = dynamic(() => import("@/components/fundamentos/pricing").then((mod) => mod.FundamentosPricing));
const FundamentosGarantia = dynamic(() => import("@/components/fundamentos/guarantee").then((mod) => mod.FundamentosGarantia));
const FundamentosFAQ = dynamic(() => import("@/components/fundamentos/faq").then((mod) => mod.FundamentosFAQ));
const FundamentosLeadCapture = dynamic(() => import("@/components/fundamentos/lead-capture").then((mod) => mod.FundamentosLeadCapture));
const FundamentosCTAFinal = dynamic(() => import("@/components/fundamentos/final-cta").then((mod) => mod.FundamentosCTAFinal));
const FundamentosExitModal = dynamic(() => import("@/components/fundamentos/exit-modal").then((mod) => mod.FundamentosExitModal));
const FundamentosStickyMobileCTA = dynamic(() => import("@/components/fundamentos/sticky-cta").then((mod) => mod.FundamentosStickyMobileCTA));
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer));

export const metadata: Metadata = {
    title: "Fundamentos da Modelagem Financeira — Com Tiago Porto",
    description:
        "Entenda de uma vez como DRE, Balanço e Fluxo de Caixa se conectam. Em apenas 2 horas de conteúdo prático, aprenda a lógica que faz um modelo financeiro funcionar.",
    openGraph: {
        title: "Fundamentos da Modelagem Financeira — Com Tiago Porto",
        description:
            "Entenda de uma vez como DRE, Balanço e Fluxo de Caixa se conectam. 2 horas de conteúdo 100% prático.",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "/tiago-porto.png",
                width: 1200,
                height: 630,
                alt: "Fundamentos da Modelagem Financeira",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fundamentos da Modelagem Financeira — Com Tiago Porto",
        description:
            "Entenda de uma vez como DRE, Balanço e Fluxo de Caixa se conectam. 2 horas de conteúdo 100% prático.",
        images: ["/tiago-porto.png"],
    },
};

const jsonLdCourse = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Fundamentos da Modelagem Financeira",
    "description": "Em apenas 2 horas de conteúdo prático, você aprende a lógica que faz um modelo financeiro funcionar — e por que o lucro vira (ou não vira) caixa.",
    "provider": {
        "@type": "Person",
        "name": "Tiago Porto",
        "sameAs": "https://www.linkedin.com/in/portotiago/"
    },
    "offers": {
        "@type": "Offer",
        "price": "197.00",
        "priceCurrency": "BRL",
        "url": "https://pay.hotmart.com/F106435738T"
    }
};

export default function FundamentosPage() {
    return (
        <main className="min-h-screen bg-[#070D1B]">
            {/* JSON-LD Course Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
            />

            <FundamentosHero />
            <FundamentosProblema />
            <FundamentosSolucao />
            <FundamentosInstrutor />
            <FundamentosAudiencia />
            <FundamentosCurriculo />
            <FundamentosOQueVoceRecebe />
            {/* <FundamentosAulaAmostra /> (Oculto conforme solicitado) */}
            <FundamentosBonus />
            <FundamentosTestimonials />
            <FundamentosPricing />
            <FundamentosGarantia />
            <FundamentosFAQ />
            <FundamentosLeadCapture />
            <FundamentosCTAFinal />
            <FundamentosExitModal />
            <FundamentosStickyMobileCTA />
            <Footer />
        </main>
    );
}
