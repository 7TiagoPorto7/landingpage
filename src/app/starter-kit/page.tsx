import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, ChartColumn, ClipboardList, FileSpreadsheet, Scale, Wallet } from "lucide-react";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { SecureCheckout } from "@/components/mfp/secure-checkout";
import { FaqList, FeatureCards, FinalBand, ForWhom, OfferPanel, ProductHeader, ProductHero, ProductShell } from "@/components/mfp/kit/layout";
import { StickyBar } from "@/components/mfp/kit/sticky-bar";
import { StarterKitDashboard } from "@/components/mfp/visuals/sk-dashboard";

const PRODUCT = "Starter Kit Financeiro";
const CHECKOUT = "https://pay.hotmart.com/B104777770W?off=fwpjg9hw";
const PRICE = 67.9;
const PRICE_LABEL = "R$ 67,90";

const TITLE = "Starter Kit Financeiro: DRE, fluxo de caixa e dashboard automáticos";
const DESCRIPTION =
    "Planilha para organizar as finanças da empresa: lance receitas e despesas e tenha DRE, fluxo de caixa, dashboard e conciliação automáticos. R$ 67,90, pagamento único.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/starter-kit" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: "/starter-kit" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const MODULES = [
    { icon: ClipboardList, title: "Lançamentos", text: "Preencha data, descrição, categoria, valor e conta. A classificação para DRE e fluxo de caixa é automática." },
    { icon: FileSpreadsheet, title: "DRE automática", text: "Mês a mês, da receita bruta ao resultado líquido, com total anual." },
    { icon: Wallet, title: "Fluxo de caixa direto", text: "Separado em operacional, investimento, financiamento e financeiro, com saldo mês a mês." },
    { icon: ChartColumn, title: "Dashboard", text: "10 indicadores e 4 gráficos: receita e resultado, despesas, caixa e margens." },
    { icon: Scale, title: "Conciliação bancária", text: "Compare com o extrato. A checagem mostra zero quando está tudo certo e alerta quando não está." },
    { icon: BookOpen, title: "Guia passo a passo", text: "Configuração, como lançar, exemplos, conciliação e como ler cada relatório." },
];

const STEPS = [
    { title: "Configure", text: "Informe o saldo inicial das contas e confira as 44 subcategorias que já vêm prontas." },
    { title: "Lance", text: "Registre receitas e despesas em poucos campos. Receita positiva, despesa negativa, sem fórmula." },
    { title: "Analise", text: "DRE, fluxo de caixa e dashboard se atualizam sozinhos. Concilie no fim do mês e decida com números reais." },
];

const INCLUDED = [
    { item: "DRE automática de 12 meses" },
    { item: "Fluxo de caixa pelo método direto" },
    { item: "Dashboard com 10 indicadores e 4 gráficos" },
    { item: "Conciliação bancária integrada" },
    { item: "44 subcategorias pré-configuradas", detail: "Você pode adicionar as suas" },
    { item: "Aba de guia com o passo a passo" },
    { item: "Funciona no Excel e no Google Sheets" },
];

const FAQ = [
    { q: "Preciso entender de contabilidade?", a: "Não. A planilha vem com guia passo a passo, categorias prontas e exemplos. Se você sabe preencher uma tabela, consegue usar." },
    { q: "Funciona no Google Sheets?", a: "Sim. Foi construída no Excel e é compatível com o Google Sheets." },
    { q: "Sou consultor financeiro. Posso usar com meus clientes?", a: "Sim. Ela funciona bem como entregável de onboarding: o cliente lança e vocês acompanham os relatórios juntos." },
    { q: "Posso personalizar as categorias?", a: "Sim. Dá para adicionar subcategorias seguindo o padrão da aba de categorias." },
    { q: "Serve para qual tipo de empresa?", a: "Prestadores de serviço, consultores, agências, profissionais PJ, escritórios e pequenas empresas." },
    { q: "É pagamento único?", a: "Sim. Você paga uma vez e usa sem mensalidade." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia. Se não atender, pede o reembolso na Hotmart e recebe 100% do valor." },
];

const buy = (section: string, label = "Quero o Starter Kit") => (
    <CheckoutButton href={CHECKOUT} section={`starter_kit_${section}`} value={PRICE} product={PRODUCT}>
        {label}
    </CheckoutButton>
);

export default function StarterKitPage() {
    return (
        <ProductShell accent="#10b981" bottomSpace>
            <ProductHeader
                product="Starter Kit"
                priceSummary={<><strong className="font-semibold text-[var(--ink)]">{PRICE_LABEL}</strong> pagamento único</>}
                action={
                    <CheckoutButton href={CHECKOUT} section="starter_kit_header" value={PRICE} product={PRODUCT} size="sm">
                        Comprar
                    </CheckoutButton>
                }
            />

            <main>
                <ProductHero
                    eyebrow="Planilha em Excel e Google Sheets"
                    title={
                        <>
                            O controle financeiro da empresa <Accent>numa planilha só.</Accent>
                        </>
                    }
                    lead="Lance receitas e despesas. DRE, fluxo de caixa, dashboard e conciliação bancária saem prontos, mês a mês."
                    points={["Pronta para usar em minutos", "44 subcategorias pré-configuradas", "Competência e caixa sem trabalho dobrado"]}
                    actions={
                        <div className="flex flex-col items-start gap-4">
                            {buy("hero")}
                            <p className="text-[15px] text-[var(--ink-2)]">
                                <strong className="text-[var(--ink)]">{PRICE_LABEL}</strong>, pagamento único. Garantia de 7 dias.
                            </p>
                            <SecureCheckout className="mt-2" />
                        </div>
                    }
                    visual={<StarterKitDashboard />}
                />

                <Band tone="white">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Um kit, <Accent>dois usos</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                ["Para quem tem um negócio", "Saber se a empresa dá lucro de verdade, sair da planilha bagunçada e decidir com dados, sem pagar um sistema caro."],
                                ["Para profissionais de finanças", "Um entregável profissional para o onboarding de clientes menores e uma base antes de sistemas mais complexos."],
                            ].map(([t, d]) => (
                                <div key={t} className="rounded-2xl bg-[var(--snow)] p-7 ring-1 ring-[var(--grid)]">
                                    <h3 className="text-lg font-semibold">{t}</h3>
                                    <p className="mt-2 leading-relaxed text-[var(--ink-2)]">{d}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Band>

                <Band tone="mist" id="conteudo">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Seis módulos que <Accent>trabalham juntos</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <FeatureCards items={MODULES} />
                    </Container>
                </Band>

                <Band tone="dark">
                    <Container>
                        <SectionTitle
                            dark
                            title={
                                <>
                                    Do zero ao controle <Accent>em 3 passos</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <ol className="grid gap-4 md:grid-cols-3">
                            {STEPS.map((s, i) => (
                                <li key={s.title} className="rounded-2xl bg-white p-7 text-[var(--ink)]">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--amber)] text-sm font-semibold">{i + 1}</span>
                                    <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                                    <p className="mt-2 leading-relaxed text-[var(--ink-2)]">{s.text}</p>
                                </li>
                            ))}
                        </ol>
                    </Container>
                </Band>

                <Band tone="snow">
                    <Container>
                        <SectionTitle title={<>Para <Accent>quem é</Accent></>} className="mb-12" />
                        <ForWhom
                            yes={[
                                "Tem uma pequena empresa ou presta serviços e quer enxergar os números",
                                "É consultor e precisa de uma ferramenta de entrada para clientes",
                                "Quer DRE e fluxo de caixa sem pagar mensalidade de sistema",
                            ]}
                            no={["Precisa de um ERP completo com emissão de nota e estoque", "Quer um modelo de projeção e valuation (para isso existe o Template Pro)"]}
                        />
                        <Link
                            href="/template-pro"
                            className="mt-8 inline-flex items-center gap-1.5 font-semibold underline decoration-[var(--amber)] decoration-2 underline-offset-4 hover:text-[var(--blue-2)]"
                        >
                            Conhecer o Template Pro
                            <ArrowUpRight aria-hidden className="h-4 w-4" />
                        </Link>
                    </Container>
                </Band>

                <Band tone="dark" id="oferta">
                    <OfferPanel
                        title={
                            <>
                                Pague uma vez, <Accent>use sempre</Accent>
                            </>
                        }
                        items={INCLUDED}
                        card={
                            <>
                                <p className="text-lg font-semibold">{PRODUCT}</p>
                                <p className="mt-1 text-[15px] text-[var(--ink-2)]">DRE, fluxo de caixa e dashboard automáticos</p>
                                <div className="mt-7 rounded-xl bg-[var(--snow)] p-5">
                                    <p className="text-5xl font-semibold tracking-[-0.03em]">{PRICE_LABEL}</p>
                                    <p className="mt-1 text-[var(--ink-2)]">pagamento único</p>
                                </div>
                                <div className="mt-6 [&>a]:w-full">{buy("pricing")}</div>
                                <SecureCheckout className="mt-5 justify-center" />
                                <p className="mt-6 border-t border-[var(--grid)] pt-5 text-sm leading-relaxed text-[var(--ink-2)]">
                                    <strong className="text-[var(--ink)]">Garantia de 7 dias.</strong> Se não atender, pede o reembolso na Hotmart e recebe 100% de volta.
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
                            Clareza financeira <Accent>não é luxo.</Accent> É o mínimo.
                        </>
                    }
                >
                    {buy("final")}
                    <p className="text-[15px] text-white/65">{PRICE_LABEL}, pagamento único. Garantia de 7 dias.</p>
                </FinalBand>
            </main>

            <StickyBar
                name={PRODUCT}
                shortName="Starter Kit"
                price={`${PRICE_LABEL}, pagamento único`}
                action={
                    <CheckoutButton href={CHECKOUT} section="starter_kit_sticky" value={PRICE} product={PRODUCT} size="sm">
                        Comprar
                    </CheckoutButton>
                }
            />
        </ProductShell>
    );
}
