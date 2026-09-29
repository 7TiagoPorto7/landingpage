import type { Metadata } from "next";
import { BarChart3, Brain, Briefcase, Calculator, GraduationCap, Layers, LineChart, Paintbrush, Sparkles, Workflow } from "lucide-react";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { SecureCheckout } from "@/components/mfp/secure-checkout";
import { FaqList, FeatureCards, FinalBand, ForWhom, OfferPanel, ProductHeader, ProductHero, ProductShell } from "@/components/mfp/kit/layout";
import { StickyBar } from "@/components/mfp/kit/sticky-bar";
import { PromptTable } from "@/components/mfp/visuals/prompt-table";

const PRODUCT = "100 Prompts Excel + IA";
const CHECKOUT = "https://pay.hotmart.com/P104814631L?off=8b3uxx2o";
const PRICE = 29.9;
const PRICE_LABEL = "R$ 29,90";

const TITLE = "100 Prompts Excel + IA para finanças";
const DESCRIPTION =
    "Planilha com 100 prompts prontos para usar IA no Excel: fórmulas, análises, modelagem financeira, automação e gráficos. 120+ fórmulas documentadas. R$ 29,90.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/prompts4finance" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: "/prompts4finance" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const CATEGORIES = [
    { icon: Paintbrush, title: "Formatação e design", text: "Relatórios com acabamento profissional em minutos." },
    { icon: Calculator, title: "Fórmulas e cálculos", text: "Do PROCV à validação de dados por fórmula." },
    { icon: BarChart3, title: "Análise de dados", text: "Coorte, RFM, Pareto, correlação e sazonalidade." },
    { icon: LineChart, title: "Modelagem financeira", text: "DCF, três demonstrativos, LBO e Monte Carlo." },
    { icon: Workflow, title: "Automação", text: "Estoque, cronograma, faturamento, CRM e folha." },
    { icon: Sparkles, title: "Gráficos", text: "Cascata, mapa de calor, bullet chart e combinados." },
    { icon: Layers, title: "Limpeza de dados", text: "Duplicados, outliers, validação e conciliação." },
    { icon: Briefcase, title: "Modelos de negócio", text: "Canvas, SWOT, cap table e precificação." },
    { icon: GraduationCap, title: "Referência", text: "Tutoriais de funções com exemplos." },
    { icon: Brain, title: "Nível avançado", text: "M&A, Black-Scholes, credit scoring e due diligence." },
];

const COLUMNS = [
    ["Prompt", "O comando completo, pronto para copiar e colar na IA."],
    ["O que você recebe", "A descrição do resultado que a IA vai gerar na planilha."],
    ["Fórmulas", "As fórmulas do Excel usadas, documentadas."],
    ["Por que importa", "O uso prático e o impacto no trabalho."],
    ["Nível", "Básico, intermediário, avançado ou expert."],
];

const INCLUDED = [
    { item: "Planilha com 100 prompts organizados", detail: "Em 10 categorias e 4 níveis de dificuldade" },
    { item: "120+ fórmulas do Excel documentadas" },
    { item: "Resultado esperado e uso prático de cada prompt" },
    { item: "Funciona com Claude, ChatGPT, Gemini e Copilot" },
];

const FAQ = [
    { q: "Preciso saber Excel avançado?", a: "Não. A planilha tem prompts do nível básico ao expert, e a ideia é justamente a IA fazer o trabalho pesado." },
    { q: "Isso é um curso?", a: "Não. É uma ferramenta de consulta: você abre a planilha, copia o prompt de que precisa e cola na IA." },
    { q: "Funciona com qual IA?", a: "Os prompts foram testados no Claude e a estrutura funciona também no ChatGPT, Gemini e Copilot." },
    { q: "Qual versão do Excel?", a: "Recomendamos o Excel 365, no computador ou online, com a IA aberta ao lado. A lógica dos prompts vale para qualquer versão recente." },
    { q: "Como recebo o material?", a: "Assim que o pagamento é confirmado, você recebe o acesso para baixar o arquivo .xlsx." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia. Se não for para você, pede o reembolso na Hotmart e recebe 100% do valor." },
];

const buy = (section: string, label = "Quero os 100 prompts") => (
    <CheckoutButton href={CHECKOUT} section={`prompts_${section}`} value={PRICE} product={PRODUCT}>
        {label}
    </CheckoutButton>
);

export default function PromptsPage() {
    return (
        <ProductShell accent="#8b5cf6" bottomSpace>
            <ProductHeader
                product="100 Prompts"
                priceSummary={<><strong className="font-semibold text-[var(--ink)]">{PRICE_LABEL}</strong> pagamento único</>}
                action={
                    <CheckoutButton href={CHECKOUT} section="prompts_header" value={PRICE} product={PRODUCT} size="sm">
                        Comprar
                    </CheckoutButton>
                }
            />

            <main>
                <ProductHero
                    eyebrow="Guia em planilha"
                    title={
                        <>
                            100 prompts para a IA <Accent>trabalhar por você no Excel.</Accent>
                        </>
                    }
                    lead="Fórmulas, análises, modelagem e automação. Copie o prompt, cole na IA e aplique o resultado na sua planilha."
                    points={["100 prompts em 10 categorias", "120+ fórmulas documentadas", "Do nível básico ao expert"]}
                    actions={
                        <div className="flex flex-col items-start gap-4">
                            {buy("hero")}
                            <p className="text-[15px] text-[var(--ink-2)]">
                                <strong className="text-[var(--ink)]">{PRICE_LABEL}</strong>, pagamento único. Garantia de 7 dias.
                            </p>
                            <SecureCheckout className="mt-2" />
                        </div>
                    }
                    visual={<PromptTable />}
                />

                <Band tone="white">
                    <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                        <SectionTitle
                            title={
                                <>
                                    O problema nunca foi o Excel. <Accent>É saber o que pedir.</Accent>
                                </>
                            }
                            lead="A IA ajuda muito, mas pedidos genéricos geram respostas genéricas. Cada linha da planilha é um pedido completo, já testado."
                        />
                        <dl className="grid gap-3">
                            {COLUMNS.map(([k, v]) => (
                                <div key={k} className="grid gap-1 rounded-xl bg-[var(--snow)] px-5 py-4 ring-1 ring-[var(--grid)] sm:grid-cols-[10rem_1fr] sm:gap-4">
                                    <dt className="font-semibold">{k}</dt>
                                    <dd className="text-[var(--ink-2)]">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </Container>
                </Band>

                <Band tone="mist" id="conteudo">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    10 categorias, <Accent>do básico ao expert</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <FeatureCards items={CATEGORIES} cols={4} />
                    </Container>
                </Band>

                <Band tone="snow">
                    <Container>
                        <SectionTitle title={<>Para <Accent>quem é</Accent></>} className="mb-12" />
                        <ForWhom
                            yes={[
                                "Usa Excel no trabalho e quer ganhar tempo",
                                "Quer aprender a usar IA de forma prática",
                                "Precisa entregar planilhas e modelos com qualidade profissional",
                            ]}
                            no={["Nunca abriu o Excel", "Quer um curso em vídeo (isto é uma ferramenta de consulta)"]}
                        />
                    </Container>
                </Band>

                <Band tone="dark" id="oferta">
                    <OfferPanel
                        title={
                            <>
                                Uma ferramenta <Accent>para consultar sempre</Accent>
                            </>
                        }
                        items={INCLUDED}
                        card={
                            <>
                                <p className="text-lg font-semibold">{PRODUCT}</p>
                                <p className="mt-1 text-[15px] text-[var(--ink-2)]">Planilha .xlsx com acesso vitalício</p>
                                <div className="mt-7 rounded-xl bg-[var(--snow)] p-5">
                                    <p className="text-5xl font-semibold tracking-[-0.03em]">{PRICE_LABEL}</p>
                                    <p className="mt-1 text-[var(--ink-2)]">pagamento único</p>
                                </div>
                                <div className="mt-6 [&>a]:w-full">{buy("pricing")}</div>
                                <SecureCheckout className="mt-5 justify-center" />
                                <p className="mt-6 border-t border-[var(--grid)] pt-5 text-sm leading-relaxed text-[var(--ink-2)]">
                                    <strong className="text-[var(--ink)]">Garantia de 7 dias.</strong> Se não for para você, pede o reembolso na Hotmart e recebe 100% de volta.
                                </p>
                            </>
                        }
                    />
                </Band>

                <Band tone="mist">
                    <Container className="max-w-3xl">
                        <SectionTitle center title="Perguntas frequentes" className="mb-12" />
                        <FaqList items={FAQ} />
                    </Container>
                </Band>

                <FinalBand
                    title={
                        <>
                            Menos tempo montando planilha, <Accent>mais tempo analisando.</Accent>
                        </>
                    }
                >
                    {buy("final")}
                    <p className="text-[15px] text-white/65">{PRICE_LABEL}, pagamento único. Garantia de 7 dias.</p>
                </FinalBand>
            </main>

            <StickyBar
                name={PRODUCT}
                shortName="100 Prompts"
                price={`${PRICE_LABEL}, pagamento único`}
                action={
                    <CheckoutButton href={CHECKOUT} section="prompts_sticky" value={PRICE} product={PRODUCT} size="sm">
                        Comprar
                    </CheckoutButton>
                }
            />
        </ProductShell>
    );
}
