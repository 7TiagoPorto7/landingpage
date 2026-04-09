import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fluxograma — Como Integrar DRE, Balanço e Fluxo de Caixa",
    description:
        "Guia visual e interativo mostrando como os três demonstrativos financeiros (DRE, Balanço Patrimonial e Fluxo de Caixa) se conectam entre si.",
};

export default function FluxogramaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
