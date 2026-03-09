import { Metadata } from "next";
import { Header } from "@/components/header";
import { SKFooter } from "@/components/starter-kit/footer";

// Novas Seções Prompts4Finance
import { Hero } from "@/components/prompts4finance/hero";
import { Problem } from "@/components/prompts4finance/problem";
import { Solution } from "@/components/prompts4finance/solution";
import { Content } from "@/components/prompts4finance/content";
import { Numbers } from "@/components/prompts4finance/numbers";
import { Audience } from "@/components/prompts4finance/audience";
import { Offer } from "@/components/prompts4finance/offer";
import { FAQ } from "@/components/prompts4finance/faq";
import { FinalCTA } from "@/components/prompts4finance/final-cta";
import { StickyCTA } from "@/components/prompts4finance/sticky-cta";

export const metadata: Metadata = {
    title: "100 Prompts Excel + IA - Pare de Perder Tempo",
    description: "Da formatação básica ao Black-Scholes. O Guia definitivo para fazer o Claude e a IA trabalharem por você no Excel.",
    openGraph: {
        title: "100 Prompts Excel + IA - Pare de Perder Tempo",
        description: "Da formatação básica ao Black-Scholes. O Guia definitivo para fazer o Claude e a IA trabalharem por você no Excel.",
        url: "https://seulink.com/prompts4finance", // Ajuste no futuro
    },
};

export default function Prompts4Finance() {
    return (
        <div className="min-h-screen flex flex-col pt-16 selection:bg-primary/30 selection:text-white">
            {/* Reutilizando Header com prop type específica, caso o design demande */}
            <Header />

            <main className="flex-grow">
                <Hero />
                <Problem />
                <Solution />
                <Content />
                <Numbers />
                <Audience />
                <Offer />
                <FAQ />
                <FinalCTA />
            </main>

            {/* Sticky CTA Mobile Only */}
            <StickyCTA />

            <SKFooter />
        </div>
    );
}
