import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { TemplateProHero } from "@/components/template-pro/hero";

const TemplateProblem = dynamic(() => import("@/components/template-pro/problem").then((mod) => mod.TemplateProblem));
const TemplateSolution = dynamic(() => import("@/components/template-pro/solution").then((mod) => mod.TemplateSolution));
const TemplateModules = dynamic(() => import("@/components/template-pro/modules").then((mod) => mod.TemplateModules));
const TemplateDifferentials = dynamic(() => import("@/components/template-pro/differentials").then((mod) => mod.TemplateDifferentials));
const TemplateAudience = dynamic(() => import("@/components/template-pro/audience").then((mod) => mod.TemplateAudience));
const TemplateProCTA = dynamic(() => import("@/components/template-pro/cta").then((mod) => mod.TemplateProCTA));
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer));

export const metadata: Metadata = {
    title: "Template Pro — Modelo Financeiro Integrado + Valuation DCF",
    description:
        "Modelo financeiro completo com 18 abas interligadas, trilha de aprendizado de 15–20h, 4 scripts Python e guia explicativo em cada aba. DRE, Balanço, DFC, DCF, Monte Carlo, VaR e mais.",
};

export default function TemplateProPage() {
    return (
        <main className="min-h-screen bg-black">
            <TemplateProHero />
            <TemplateProblem />
            <TemplateSolution />
            <TemplateModules />
            <TemplateDifferentials />
            <TemplateAudience />
            <TemplateProCTA />
            <Footer />
        </main>
    );
}
