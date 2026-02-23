import type { Metadata } from "next";
import { DownloadsPage } from "@/components/downloads/downloads-page";

export const metadata: Metadata = {
    title: "Downloads Gratuitos — Modelagem Financeira na Prática",
    description:
        "Baixe gratuitamente templates, planilhas e materiais de apoio para modelagem financeira, valuation e análise de investimentos.",
    openGraph: {
        title: "Downloads Gratuitos — Modelagem Financeira na Prática",
        description:
            "Templates financeiros, planilhas de DRE, fluxo de caixa e mais. Tudo gratuito.",
        type: "website",
    },
};

export default function DownloadsRouterPage() {
    return (
        <main className="min-h-screen bg-black">
            <DownloadsPage />
        </main>
    );
}
