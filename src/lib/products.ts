// Carteira de produtos: fonte única para a home e para links cruzados entre páginas.
// Preços e descrições conferidos nas páginas de cada produto.

export type ProductKind = "curso" | "planilha" | "guia" | "gratuito";

export interface Product {
    slug: string;
    href: string;
    name: string;
    kind: ProductKind;
    summary: string;
    includes: string[];
    /** Cor do produto, a mesma da landing page */
    accent: string;
    price?: string;
    priceNote?: string;
    cta: string;
    featured?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        slug: "fundamentos",
        accent: "#f59e0b",
        href: "/fundamentos",
        name: "Fundamentos da Modelagem Financeira",
        kind: "curso",
        summary: "Como DRE, Balanço e Fluxo de Caixa se conectam num modelo que fecha.",
        includes: ["Módulo das 3 demonstrações conectadas", "Módulos complementares com novas aulas", "Template Pro e Starter Kit de bônus", "Certificado e garantia de 7 dias"],
        price: "12x de R$ 19,67",
        priceNote: "ou R$ 197 à vista",
        cta: "Conhecer o curso",
        featured: true,
    },
    {
        slug: "template-pro",
        accent: "#3b82f6",
        href: "/template-pro",
        name: "Template Pro",
        kind: "planilha",
        summary: "Modelo de 3 demonstrativos integrado, com valuation por DCF e múltiplos.",
        includes: ["DRE, Balanço e DFC ligados", "DCF, sensibilidade e football field", "Scripts em Python para risco"],
        price: "R$ 97",
        priceNote: "pagamento único",
        cta: "Ver o modelo",
    },
    {
        slug: "starter-kit",
        accent: "#10b981",
        href: "/starter-kit",
        name: "Starter Kit Financeiro",
        kind: "planilha",
        summary: "Gestão financeira da empresa pronta no Excel, a partir dos lançamentos.",
        includes: ["DRE automática de 12 meses", "Fluxo de caixa pelo método direto", "Dashboard com 10 indicadores"],
        price: "R$ 67,90",
        priceNote: "pagamento único",
        cta: "Ver o kit",
    },
    {
        slug: "prompts4finance",
        accent: "#8b5cf6",
        href: "/prompts4finance",
        name: "100 Prompts Excel + IA",
        kind: "guia",
        summary: "Prompts prontos para usar IA em fórmulas, análises e rotinas financeiras no Excel.",
        includes: ["100 prompts organizados por tarefa", "Para ChatGPT, Claude e Copilot"],
        price: "R$ 29,90",
        priceNote: "pagamento único",
        cta: "Ver os prompts",
    },
    {
        slug: "ia-para-financas",
        accent: "#06b6d4",
        href: "/gratis/ia-para-financas",
        name: "Guia IA para Finanças",
        kind: "gratuito",
        summary: "Como usar ChatGPT, Claude e Gemini no fechamento, na conciliação, na DRE e na análise.",
        includes: ["Guia gratuito"],
        cta: "Baixar grátis",
    },
    {
        slug: "dicionario",
        accent: "#6366f1",
        href: "/downloads",
        name: "Dicionário de Finanças",
        kind: "gratuito",
        summary: "Os termos de finanças corporativas explicados, numa planilha para consulta.",
        includes: ["Arquivo em Excel"],
        cta: "Baixar grátis",
    },
];

export const KIND_LABEL: Record<ProductKind, string> = {
    curso: "Curso",
    planilha: "Planilha",
    guia: "Guia",
    gratuito: "Gratuito",
};
