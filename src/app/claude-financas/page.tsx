import type { Metadata } from "next";
import { Calculator, FileBarChart, GitCompare, LineChart, ListChecks, Presentation, Scale, ShieldAlert, Sigma, TrendingUp } from "lucide-react";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { FaqList, FeatureCards, FinalBand, ProductHeader, ProductHero, ProductShell } from "@/components/mfp/kit/layout";
import { LeadForm } from "@/components/mfp/kit/lead-form";
import { ClaudeChat } from "@/components/mfp/visuals/claude-chat";

const TITLE = "Guia gratuito: Claude para Finanças";
const DESCRIPTION = "Guia gratuito com prompts e fluxos para usar o Claude em FP&A, DRE, valuation, conciliação e relatórios executivos.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/claude-financas" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: "/claude-financas" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const TOPICS = [
    { icon: FileBarChart, title: "DRE, Balanço e Fluxo de Caixa", text: "Prompts para analisar os demonstrativos e explicar variações." },
    { icon: TrendingUp, title: "Valuation", text: "Estruturas para DCF e múltiplos, com as premissas explícitas." },
    { icon: Presentation, title: "Relatórios de FP&A", text: "Modelos de relatório prontos para a diretoria." },
    { icon: Scale, title: "Conciliação", text: "Fluxos para conciliação bancária e contábil." },
    { icon: Calculator, title: "Viabilidade de projetos", text: "TIR, VPL e payback com a lógica explicada." },
    { icon: LineChart, title: "Cenários e projeções", text: "Otimista, base e pessimista, com premissas fundamentadas." },
    { icon: ShieldAlert, title: "Due diligence e risco", text: "Roteiros para levantar riscos e pontos de atenção." },
    { icon: ListChecks, title: "Memos de investimento", text: "Estrutura para redigir memos claros e objetivos." },
];

const PILLARS = [
    { icon: Sigma, title: "Fundamentos", text: "Como configurar e usar o Claude em tarefas financeiras, do zero." },
    { icon: GitCompare, title: "Estratégias", text: "Estruturas de prompt que evitam respostas genéricas e números inventados." },
    { icon: ListChecks, title: "Implementação", text: "Casos práticos e fluxos de trabalho para aplicar no dia a dia." },
];

const FAQ = [
    { q: "O guia é gratuito mesmo?", a: "Sim. Você informa o e-mail e recebe o material, sem custo." },
    { q: "Preciso ter experiência com IA?", a: "Não. O guia serve para quem nunca usou IA e para quem já usa e quer resultados melhores em finanças." },
    { q: "Preciso pagar pelo Claude?", a: "O Claude tem um plano gratuito que já permite usar muitos dos prompts. Para uso intenso, o plano pago ajuda. O guia cobre as duas opções." },
    { q: "Vale para qual área de finanças?", a: "FP&A, controladoria, M&A, valuation, tesouraria, contabilidade e consultoria financeira." },
    { q: "Vou receber spam?", a: "Não. Você recebe conteúdo sobre IA e finanças e pode cancelar a qualquer momento." },
];

const form = (source: string, dark = false) => <LeadForm fileId="claude-financas-guia" source={`claude_financas_${source}`} button="Receber o guia" dark={dark} />;

export default function ClaudeFinancasPage() {
    return (
        <ProductShell accent="#06b6d4">
            <ProductHeader
                product="Claude para Finanças"
                action={
                    <a href="#receber" className="inline-flex h-10 items-center rounded-lg bg-[var(--amber)] px-4 text-sm font-semibold text-[var(--ink)] hover:bg-[#fbb32e]">
                        Receber grátis
                    </a>
                }
            />

            <main>
                <ProductHero
                    eyebrow="Material gratuito"
                    title={
                        <>
                            Como usar o Claude <Accent>no trabalho de finanças.</Accent>
                        </>
                    }
                    lead="Um guia com prompts e fluxos para FP&A, análise de demonstrativos, valuation, conciliação e relatórios executivos."
                    points={["Prompts testados em casos de finanças", "Como evitar respostas genéricas e números inventados", "Do básico à aplicação no dia a dia"]}
                    actions={
                        <div id="receber" className="scroll-mt-24">
                            {form("hero")}
                            <p className="mt-3 text-sm text-[var(--ink-3)]">Gratuito. Você pode cancelar o recebimento quando quiser.</p>
                        </div>
                    }
                    visual={<ClaudeChat />}
                />

                <Band tone="white">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    O problema não é a IA. <Accent>É como você pede.</Accent>
                                </>
                            }
                            lead="Pedidos vagos geram respostas vagas. Em finanças, isso vira número errado. O guia mostra como estruturar o pedido para a IA explicar o raciocínio e não inventar dados."
                            className="mb-12"
                        />
                        <FeatureCards items={PILLARS} />
                    </Container>
                </Band>

                <Band tone="mist">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    O que tem <Accent>dentro do guia</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <FeatureCards items={TOPICS} cols={4} />
                    </Container>
                </Band>

                <Band tone="snow">
                    <Container className="max-w-3xl">
                        <SectionTitle center title="Perguntas frequentes" className="mb-12" />
                        <FaqList items={FAQ} />
                    </Container>
                </Band>

                <FinalBand
                    title={
                        <>
                            Comece a usar IA <Accent>com método.</Accent>
                        </>
                    }
                >
                    {form("final", true)}
                </FinalBand>
            </main>
        </ProductShell>
    );
}
