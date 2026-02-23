import type { Metadata } from "next";
import { LinksPage } from "@/components/links/links-page";

export const metadata: Metadata = {
    title: "Links — Modelagem Financeira na Prática",
    description:
        "Acesse todos os nossos links: minicursos gratuitos, downloads de templates, planilhas e materiais de apoio para modelagem financeira.",
    openGraph: {
        title: "Links — Modelagem Financeira na Prática",
        description:
            "Minicursos, templates e recursos gratuitos para modelagem financeira e valuation.",
        type: "website",
    },
};

export default function LinksRouterPage() {
    return (
        <main className="min-h-screen bg-black">
            <LinksPage />
        </main>
    );
}
