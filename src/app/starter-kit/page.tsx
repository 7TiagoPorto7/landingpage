import { Metadata } from "next";
import { SKHero } from "@/components/starter-kit/hero";
import dynamic from "next/dynamic";

const SKForWhom = dynamic(() => import("@/components/starter-kit/for-whom").then((m) => m.SKForWhom));
const SKWhatIncludes = dynamic(() => import("@/components/starter-kit/what-includes").then((m) => m.SKWhatIncludes));
const SKHowItWorks = dynamic(() => import("@/components/starter-kit/how-it-works").then((m) => m.SKHowItWorks));
const SKScreenshots = dynamic(() => import("@/components/starter-kit/screenshots").then((m) => m.SKScreenshots));
const SKComparison = dynamic(() => import("@/components/starter-kit/comparison").then((m) => m.SKComparison));
const SKEcosystem = dynamic(() => import("@/components/starter-kit/ecosystem").then((m) => m.SKEcosystem));
const SKPricing = dynamic(() => import("@/components/starter-kit/pricing").then((m) => m.SKPricing));
const SKFAQ = dynamic(() => import("@/components/starter-kit/faq").then((m) => m.SKFAQ));
const SKCTAFinal = dynamic(() => import("@/components/starter-kit/cta-final").then((m) => m.SKCTAFinal));
const SKFooter = dynamic(() => import("@/components/starter-kit/footer").then((m) => m.SKFooter));
const SKStickyMobileCTA = dynamic(() => import("@/components/starter-kit/sticky-cta").then((m) => m.SKStickyMobileCTA));

export const metadata: Metadata = {
    title: "Starter Kit Financeiro — DRE, Fluxo de Caixa e Dashboard automáticos",
    description:
        "Kit completo em Excel com DRE automática, Fluxo de Caixa, Dashboard com KPIs e Conciliação Bancária. Preencha 6 colunas — o Starter Kit faz o resto. Para donos de negócio e profissionais de finanças.",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        title: "Starter Kit Financeiro — DRE, Fluxo de Caixa e Dashboard automáticos",
        description:
            "Kit completo em Excel com DRE automática, Fluxo de Caixa, Dashboard com KPIs e Conciliação Bancária. Preencha 6 colunas — o Starter Kit faz o resto.",
        siteName: "Starter Kit Financeiro",
    },
    twitter: {
        card: "summary_large_image",
        title: "Starter Kit Financeiro — Controle financeiro profissional",
        description:
            "DRE, Fluxo de Caixa e Dashboard automáticos. Preencha 6 colunas, o kit faz o resto.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function StarterKitPage() {
    return (
        <main className="min-h-screen">
            <SKHero />
            <SKForWhom />
            <SKWhatIncludes />
            <SKHowItWorks />
            <SKScreenshots />
            <SKComparison />
            <SKEcosystem />
            <SKPricing />
            <SKFAQ />
            <SKCTAFinal />
            <SKFooter />
            <SKStickyMobileCTA />
        </main>
    );
}
