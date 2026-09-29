import type { Metadata } from "next";
import { Blocks, BookOpenCheck, Code2, Eye, GraduationCap, Palette, Sigma } from "lucide-react";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { SecureCheckout } from "@/components/mfp/secure-checkout";
import { FaqList, FeatureCards, FinalBand, ForWhom, OfferPanel, ProductHeader, ProductHero, ProductShell } from "@/components/mfp/kit/layout";
import { StickyBar } from "@/components/mfp/kit/sticky-bar";
import { FootballField } from "@/components/mfp/visuals/football-field";

const PRODUCT = "Template Pro";
const CHECKOUT = "https://pay.hotmart.com/N105779312S";
const PRICE = 97;

const TITLE = "Template Pro: modelo financeiro integrado com valuation";
const DESCRIPTION =
    "Modelo em Excel com DRE, Balanço e DFC integrados, DCF, múltiplos, cenários, Monte Carlo e VaR, guia em cada aba e 4 scripts em Python. R$ 97, pagamento único.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/template-pro" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: "/template-pro" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const MODULES = [
    { n: 1, title: "Fundamentos", time: "~2h", tabs: ["Capa: índice com o resumo do valuation", "Premissas: todos os inputs editáveis de receita, custos, balanço, dívida e WACC"] },
    { n: 2, title: "Os 3 demonstrativos integrados", time: "~4h", tabs: ["DRE: da receita ao lucro líquido", "Balanço com checagem automática", "DFC pelo método indireto", "Guia de integração com os erros mais comuns"] },
    { n: 3, title: "Valuation", time: "~3h", tabs: ["DCF por FCFF até o valor por ação, com sensibilidade 7×7 (WACC × g)", "Múltiplos: EV/Receita, EV/EBITDA, P/L, ROIC", "Comparáveis com 5 empresas e 3 métodos"] },
    { n: 4, title: "Cenários, retorno e tese", time: "~3h", tabs: ["Cenários bear, base e bull", "TIR, MOIC e sensibilidade por múltiplo de saída", "Resumo executivo no formato equity research", "Football field com 4 metodologias"] },
    { n: 5, title: "Análise de risco quantitativa", time: "~3h", tabs: ["Monte Carlo com 10.000 simulações", "Correlação e ranking de importância das premissas", "Breakeven por premissa", "VaR, Expected Shortfall e perfil de risco"] },
    { n: 6, title: "Dashboard, Python e consolidação", time: "~2h", tabs: ["Dashboard com os KPIs consolidados", "4 scripts em Python (Monte Carlo, breakeven, correlação e VaR)"] },
];

const DIFFERENTIALS = [
    { icon: Blocks, title: "Integração de verdade", text: "Mude uma premissa e veja o efeito em cascata, da receita ao valor por ação, com checagens no Balanço e na DFC." },
    { icon: BookOpenCheck, title: "Cada aba ensina", text: "Um guia ao lado de cada aba explica o que é calculado, por quê, como ler o resultado e os erros comuns." },
    { icon: GraduationCap, title: "Trilha com exercícios", text: "Seis módulos progressivos com exercícios que indicam a célula a conferir, e gabarito." },
    { icon: Palette, title: "Cores padrão de mercado", text: "Azul para input, preto para fórmula, verde para link entre abas e vermelho para checagem." },
    { icon: Code2, title: "Excel e Python juntos", text: "O Excel modela, o Python simula os cenários e os resultados voltam para a planilha." },
    { icon: Eye, title: "Tudo aberto e auditável", text: "Sem VBA e sem macros. Todas as fórmulas visíveis para você trocar a empresa e recalcular." },
];

const OUTCOMES = [
    "Integrar DRE, Balanço e DFC num sistema que se auto-verifica",
    "Construir um DCF completo, do FCFF à sensibilidade",
    "Calcular e interpretar múltiplos, comparáveis, TIR e MOIC",
    "Rodar 10.000 simulações de Monte Carlo e ler a distribuição",
    "Medir risco com VaR, CVaR, correlação e margem de segurança",
    "Apresentar um valuation em formato de equity research",
];

const INCLUDED = [
    { item: "Modelo integrado em Excel (.xlsx)", detail: "DRE, Balanço, DFC, DCF, múltiplos, comparáveis, cenários, Monte Carlo e VaR" },
    { item: "Guia explicativo em cada aba" },
    { item: "4 scripts em Python documentados linha a linha" },
    { item: "Trilha de aprendizado com exercícios e gabarito" },
    { item: "Sensibilidade 7×7 e football field com 4 metodologias" },
    { item: "Modelo de resumo executivo (equity research)" },
];

const FAQ = [
    { q: "Preciso saber Python?", a: "Não. Os scripts vêm documentados linha a linha, com guia de execução no computador ou no Google Colab. O modelo em Excel funciona sozinho." },
    { q: "Posso usar com os dados de uma empresa real?", a: "Pode adaptar, mas o modelo é didático e vem com uma empresa fictícia (TechFlow S.A.). O objetivo é aprender a estrutura, não gerar um relatório pronto amanhã." },
    { q: "Tem macro ou VBA?", a: "Não. Tudo é fórmula aberta, para você auditar e alterar." },
    { q: "É pagamento único?", a: "Sim. Você paga uma vez, baixa o arquivo e usa sem prazo." },
    { q: "Qual a diferença para o curso Fundamentos?", a: "O Fundamentos ensina a lógica que liga os três demonstrativos. O Template Pro aplica essa lógica num modelo completo, com valuation e risco. O Template Pro também vem de bônus no curso." },
];

const buy = (section: string, label = "Quero o Template Pro") => (
    <CheckoutButton href={CHECKOUT} section={`template_pro_${section}`} value={PRICE} product={PRODUCT}>
        {label}
    </CheckoutButton>
);

export default function TemplateProPage() {
    return (
        <ProductShell accent="#3b82f6" bottomSpace>
            <ProductHeader
                product="Template Pro"
                priceSummary={<><strong className="font-semibold text-[var(--ink)]">R$ 97</strong> pagamento único</>}
                action={
                    <CheckoutButton href={CHECKOUT} section="template_pro_header" value={PRICE} product={PRODUCT} size="sm">
                        Comprar
                    </CheckoutButton>
                }
            />

            <main>
                <ProductHero
                    eyebrow="Planilha em Excel"
                    title={
                        <>
                            Um modelo financeiro completo, <Accent>da premissa ao valor por ação.</Accent>
                        </>
                    }
                    lead="DRE, Balanço e DFC integrados, valuation por DCF e múltiplos, cenários e análise de risco. Com um guia em cada aba para você entender cada número."
                    points={["Seis módulos, do básico ao Monte Carlo", "Exercícios com gabarito", "4 scripts em Python inclusos"]}
                    actions={
                        <div className="flex flex-col items-start gap-4">
                            {buy("hero")}
                            <p className="text-[15px] text-[var(--ink-2)]">
                                <strong className="text-[var(--ink)]">R$ 97</strong>, pagamento único. Arquivo .xlsx editável.
                            </p>
                            <SecureCheckout className="mt-2" />
                        </div>
                    }
                    visual={<FootballField />}
                />

                <Band tone="white">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Por que quase ninguém <Accent>domina modelagem</Accent> de verdade
                                </>
                            }
                            className="mb-12"
                        />
                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                ["Demonstrativos desconectados", "A maioria dos cursos ensina DRE, Balanço e DFC separados. Você nunca vê uma premissa mudando o modelo inteiro."],
                                ["Valuation sem profundidade", "O estudo para no DCF básico: sem cenários, sem simulação e sem responder qual a chance de o investimento dar errado."],
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
                                    O que tem <Accent>dentro do modelo</Accent>
                                </>
                            }
                            lead="Seis módulos progressivos, com exercícios em cada aba."
                            className="mb-12"
                        />
                        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {MODULES.map((m) => (
                                <li key={m.n} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-[var(--grid)]">
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-semibold text-white">{m.n}</span>
                                        <span className="text-sm text-[var(--ink-3)]">{m.time}</span>
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold">{m.title}</h3>
                                    <ul className="mt-3 space-y-2 text-[15px] text-[var(--ink-2)]">
                                        {m.tabs.map((t) => (
                                            <li key={t} className="flex gap-2">
                                                <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--amber)]" />
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </Container>
                </Band>

                <Band tone="dark">
                    <Container>
                        <SectionTitle
                            dark
                            title={
                                <>
                                    O que torna este modelo <Accent>diferente</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <FeatureCards items={DIFFERENTIALS} dark />
                    </Container>
                </Band>

                <Band tone="snow">
                    <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                        <SectionTitle
                            title={
                                <>
                                    O que você <Accent>sai sabendo</Accent>
                                </>
                            }
                        />
                        <ul className="grid gap-3">
                            {OUTCOMES.map((o) => (
                                <li key={o} className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 ring-1 ring-[var(--grid)]">
                                    <Sigma aria-hidden className="h-5 w-5 shrink-0 text-[var(--blue-2)]" />
                                    {o}
                                </li>
                            ))}
                        </ul>
                    </Container>
                </Band>

                <Band tone="white">
                    <Container>
                        <SectionTitle title={<>Para <Accent>quem é</Accent></>} className="mb-12" />
                        <ForWhom
                            yes={[
                                "Analistas e estagiários de Investment Banking, Equity Research, FP&A ou M&A",
                                "Profissionais de finanças indo para análise quantitativa com Python e Excel",
                                "Estudantes se preparando para processos seletivos em bancos e consultorias",
                            ]}
                            no={[
                                "Quem quer um modelo pronto para plugar dados reais amanhã (a empresa do modelo é fictícia)",
                                "Quem não quer abrir as fórmulas e entender o que está por trás",
                            ]}
                        />
                    </Container>
                </Band>

                <Band tone="dark" id="oferta">
                    <OfferPanel
                        title={
                            <>
                                Tudo o que <Accent>vem no arquivo</Accent>
                            </>
                        }
                        lead="Acesso imediato ao .xlsx, com todas as fórmulas abertas."
                        items={INCLUDED}
                        card={
                            <>
                                <p className="text-lg font-semibold">{PRODUCT}</p>
                                <p className="mt-1 text-[15px] text-[var(--ink-2)]">Modelo integrado, valuation e risco</p>
                                <div className="mt-7 rounded-xl bg-[var(--snow)] p-5">
                                    <p className="text-5xl font-semibold tracking-[-0.03em]">R$ 97</p>
                                    <p className="mt-1 text-[var(--ink-2)]">pagamento único</p>
                                </div>
                                <div className="mt-6 [&>a]:w-full">{buy("pricing")}</div>
                                <SecureCheckout className="mt-5 justify-center" />
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
                            Da premissa ao valor por ação, <Accent>com cada número explicado.</Accent>
                        </>
                    }
                >
                    {buy("final")}
                    <p className="text-[15px] text-white/65">R$ 97, pagamento único. Arquivo .xlsx editável.</p>
                </FinalBand>
            </main>

            <StickyBar
                name="Template Pro: modelo integrado + valuation"
                shortName="Template Pro"
                price="R$ 97, pagamento único"
                action={
                    <CheckoutButton href={CHECKOUT} section="template_pro_sticky" value={PRICE} product={PRODUCT} size="sm">
                        Comprar
                    </CheckoutButton>
                }
            />
        </ProductShell>
    );
}
