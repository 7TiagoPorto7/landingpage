import { SITE_URL } from "@/lib/site";
export function JsonLd() {
    const siteUrl = SITE_URL;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                "url": siteUrl,
                "name": "Modelagem Financeira na Prática",
                "alternateName": ["MFP Academy", "MFP Education", "Modelagem Financeira na Prática"],
                "description": "Formação executiva e modelos institucionais em Excel, Valuation DCF, DRE, Balanço Patrimonial, DFC e automações com Inteligência Artificial.",
                "inLanguage": "pt-BR",
                "publisher": {
                    "@id": `${siteUrl}/#organization`
                }
            },
            {
                "@type": "EducationalOrganization",
                "@id": `${siteUrl}/#organization`,
                "name": "Modelagem Financeira na Prática",
                "alternateName": "MFP Academy",
                "url": siteUrl,
                "logo": `${siteUrl}/logo-mfp.png`,
                "image": `${siteUrl}/logo-mfp.png`,
                "description": "Edtech especializada em formação técnica e modelos práticos para o mercado financeiro corporativo, Investment Banking, M&A e FP&A.",
                "founder": {
                    "@type": "Person",
                    "name": "Tiago Porto",
                    "sameAs": "https://www.linkedin.com/in/portotiago/"
                },
                "sameAs": [
                    "https://www.linkedin.com/in/portotiago/",
                    "https://www.youtube.com/@Tiago_Porto"
                ]
            },
            {
                "@type": "Course",
                "@id": `${siteUrl}/fundamentos/#course`,
                "name": "Fundamentos da Modelagem Financeira",
                "description": "Aprenda a conectar DRE, Balanço Patrimonial e DFC em 2 horas de conteúdo prático e direto ao ponto.",
                "provider": {
                    "@id": `${siteUrl}/#organization`
                },
                "offers": {
                    "@type": "Offer",
                    "category": "Paid",
                    "priceCurrency": "BRL",
                    "price": "197.00",
                    "url": `${siteUrl}/fundamentos`
                },
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "Online",
                    "courseWorkload": "PT2H"
                }
            },
            {
                "@type": "FAQPage",
                "@id": `${siteUrl}/#faq`,
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "O que é Modelagem Financeira Integrada (3-Statement Model)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Modelagem financeira integrada é a construção de um modelo dinâmico no Excel onde DRE (Resultado), Balanço Patrimonial e DFC (Fluxo de Caixa) são interligados. O Lucro Líquido conecta ao Patrimônio Líquido e ao DFC Indireto, garantindo consistência matemática e auditabilidade."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como funciona o Valuation por Fluxo de Caixa Descontado (DCF)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O valuation por DCF projeta os fluxos de caixa livres futuros da empresa (FCFF), desconta-os pela taxa de custo médio ponderado de capital (WACC) e calcula o Valor Terminal via crescimento perpétuo ou múltiplos de saída para determinar o valor justo da empresa (Enterprise Value e Equity Value)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como usar Inteligência Artificial (Claude e ChatGPT) na modelagem financeira?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Modelos de IA como Claude e ChatGPT podem ser usados com prompts estruturados para gerar código VBA/Macros no Excel, validar fórmulas complexas, interpretar relatórios de RI, automatizar análises de variância de FP&A e acelerar a construção de comparáveis de valuation."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
