import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Warning } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Container } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { Backdrop } from "@/components/mfp/backdrop";
import { CaptureForm } from "@/components/gratis/capture-form";
import { Logo } from "@/components/logo";

const TITLE = "Dicionário de Finanças grátis: 340 fórmulas em Excel";
const DESCRIPTION =
    "Planilha gratuita com 340 termos de finanças em inglês e português: fórmula, explicação, exemplo numérico e armadilhas. DRE, valuation, risco, renda fixa, derivativos e Excel financeiro.";
const URL = "/gratis/dicionario-financas";

export const metadata: Metadata = {
    title: { absolute: `${TITLE} | Modelagem Financeira na Prática` },
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: URL },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const POINTS = [
    "340 termos com fórmula, explicação e exemplo numérico",
    "Inglês e português lado a lado, como no dia a dia do mercado",
    "As armadilhas de cada indicador, para não errar na análise",
];

// Seções reais da aba INDEX da planilha
const SECTIONS: [string, string, number][] = [
    ["DRE e margens", "Margens, EPS, alavancagem e break-even", 30],
    ["Balanço e liquidez", "ROE, ROA, ROIC, DuPont, EVA e Z-Score", 25],
    ["Fluxo de caixa", "FCO, FCF, FCFF, FCFE e qualidade do lucro", 20],
    ["Endividamento", "D/E, cobertura de juros, DSCR e custo da dívida", 20],
    ["Eficiência e giro", "Giro de ativos, estoques, recebíveis e ciclo de caixa", 20],
    ["Valuation", "EV, múltiplos, DCF, WACC, Gordon e comparáveis", 30],
    ["Risco e retorno", "CAPM, beta, Sharpe, VaR e Monte Carlo", 30],
    ["Modelagem", "LBO, M&A, modelo de 3 demonstrativos e dívida", 25],
    ["Renda fixa", "Preço, yields, duration, convexidade e crédito", 25],
    ["Derivativos", "Black-Scholes, gregas, opções e futuros", 25],
    ["Real estate", "NOI, cap rate, FFO e valuation de REITs", 20],
    ["Banking", "NIM, inadimplência, Basileia III e liquidez", 20],
    ["Estatística", "Regressão, distribuição normal e R²", 20],
    ["Excel financeiro", "VP, VF, VPL, TIR, PGTO e sensibilidade", 30],
];

// Um verbete real da aba Valuation, como amostra
function Verbete() {
    const rows: [string, string][] = [
        ["Fórmula", "EV/EBITDA = Enterprise Value ÷ EBITDA"],
        ["Explicação", "Múltiplo mais usado em valuation. Compara o valor da firma com a geração de caixa operacional. Menor = mais barato."],
        ["Exemplo", "1.950 ÷ 210 = 9,3x"],
        ["Relacionados", "EV/EBIT, EV/Receita, EBITDA, Comparáveis"],
    ];
    return (
        <figure
            aria-label="Exemplo de verbete do dicionário: EV/EBITDA"
            className="overflow-hidden rounded-2xl bg-white text-[14px] shadow-[0_40px_80px_-30px_rgba(7,13,36,0.55)] ring-1 ring-[var(--grid)]"
        >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--grid)] bg-[var(--paper-2)] px-4 py-2.5">
                <span className="text-xs text-[var(--ink-2)]">Dicionario_Financas.xlsx · aba Valuation</span>
                <span className="rounded-md bg-[#6366f1]/12 px-2 py-0.5 text-xs font-semibold text-[#4f46e5]">Intermediário</span>
            </div>
            <div className="px-5 pb-5 pt-4">
                <p className="text-xs font-semibold text-[var(--ink-3)]">#3 · Múltiplos</p>
                <p className="mt-1 text-2xl font-semibold tracking-[-0.02em]">EV/EBITDA</p>
                <dl className="mt-4 divide-y divide-[var(--grid)] border-y border-[var(--grid)]">
                    {rows.map(([k, v]) => (
                        <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
                            <dt className="text-[var(--ink-3)]">{k}</dt>
                            <dd className={k === "Fórmula" || k === "Exemplo" ? "font-mono text-[13px] text-[var(--ink)]" : "text-[var(--ink-2)]"}>{v}</dd>
                        </div>
                    ))}
                </dl>
                <p className="mt-4 flex gap-2 rounded-lg bg-[#fff7ed] p-3 text-[13px] leading-relaxed text-[#9a3412]">
                    <Warning aria-hidden weight="fill" className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                        <b>Armadilha:</b> EBITDA dos últimos 12 meses ou projetado? O projetado costuma ser mais relevante. Não use um EBITDA ajustado inflado.
                    </span>
                </p>
            </div>
        </figure>
    );
}

// Página de captura do dicionário: entrega a planilha e prepara a oferta do Template Pro
export default function DicionarioFinancasPage() {
    return (
        <div className={`mfp ${mfpFonts} flex min-h-screen flex-col`} style={{ "--product": "#6366f1", background: "#ffffff" } as React.CSSProperties}>
            <header className="border-b border-[var(--grid)] bg-white">
                <Container className="flex h-16 items-center">
                    <Link href="/" aria-label="Página inicial">
                        <Logo variant="dark" className="h-7 w-auto" />
                    </Link>
                </Container>
            </header>

            <main className="flex-1 text-[var(--ink)]">
                {/* Capa: promessa, formulário e um verbete real */}
                <section id="topo" className="relative scroll-mt-4 overflow-hidden">
                    <Backdrop tone="light" />
                    <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 [&>*]:min-w-0">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full bg-[#6366f1]/12 px-3 py-1 text-sm font-semibold text-[#4f46e5]">
                                Planilha gratuita em Excel
                            </p>
                            <h1 className="mt-5 text-balance text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl">
                                340 fórmulas de finanças <Accent>explicadas e com exemplo</Accent>
                            </h1>
                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-2)]">
                                O Dicionário de Finanças reúne, numa planilha para consulta rápida, os termos que aparecem em DRE, valuation, crédito, risco e mercado.
                            </p>
                            <ul className="mt-7 space-y-3">
                                {POINTS.map((p) => (
                                    <li key={p} className="flex gap-3 text-lg leading-snug text-[var(--ink-2)]">
                                        <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-6 w-6 shrink-0 text-[#6366f1]" />
                                        {p}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 max-w-md rounded-2xl bg-white p-6 shadow-[0_24px_48px_-28px_rgba(7,13,36,0.45)] ring-1 ring-[var(--grid)]">
                                <p className="mb-4 font-semibold">Receba o dicionário no seu e-mail</p>
                                <CaptureForm
                                    fileId="dicionario-financas"
                                    source="gratis_dicionario_financas"
                                    next={`${URL}/obrigado`}
                                    button="Quero o dicionário grátis"
                                    material="o dicionário"
                                />
                            </div>
                        </div>

                        <div>
                            <Verbete />
                            <p className="mt-4 text-center text-sm text-[var(--ink-3)]">Um dos 340 verbetes, como aparece na planilha</p>
                        </div>
                    </Container>
                </section>

                {/* As 14 seções */}
                <section className="bg-[var(--snow)] py-16 sm:py-20">
                    <Container>
                        <h2 className="max-w-2xl text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem]">
                            14 seções, <Accent>do básico ao avançado</Accent>
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-2)]">
                            Cada termo vem marcado como básico, intermediário ou avançado, com os termos relacionados para você seguir a lógica.
                        </p>
                        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {SECTIONS.map(([title, text, n]) => (
                                <li key={title} className="flex items-start justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-[var(--grid)]">
                                    <span>
                                        <span className="block font-semibold leading-snug">{title}</span>
                                        <span className="mt-1 block text-[15px] leading-relaxed text-[var(--ink-2)]">{text}</span>
                                    </span>
                                    <span className="shrink-0 rounded-lg bg-[var(--navy)] px-2.5 py-1 text-sm font-semibold tabular-nums text-white">{n}</span>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </section>

                {/* Ponte para o Template Pro */}
                <section className="bg-[var(--navy)] py-16 text-white sm:py-20">
                    <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <p className="text-sm font-semibold text-[#a5b4fc]">Depois do dicionário</p>
                            <h2 className="mt-2 text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem]">
                                Quer ver essas fórmulas funcionando juntas?
                            </h2>
                            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--fg-2)]">
                                O dicionário explica cada indicador. O <b className="text-white">Template Pro</b> junta todos num modelo de verdade: DRE, Balanço e Fluxo de
                                Caixa integrados, DCF até o valor por ação, múltiplos, cenários e Monte Carlo, com um guia em cada aba.
                            </p>
                            <Link
                                href="/template-pro?utm_source=site&utm_medium=gratis&utm_campaign=dicionario-financas"
                                className="mt-7 inline-flex items-center gap-2 font-semibold text-white underline decoration-[#6366f1] decoration-2 underline-offset-4 hover:text-[#a5b4fc]"
                            >
                                Conhecer o Template Pro <ArrowRight aria-hidden weight="bold" className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="rounded-2xl bg-[var(--surface)] p-7 ring-1 ring-[var(--line)]">
                            <p className="font-semibold">Comece pelo dicionário grátis</p>
                            <p className="mt-2 text-[15px] leading-relaxed text-[var(--fg-2)]">Deixe aberto ao lado do Excel e consulte sempre que um termo aparecer.</p>
                            <a href="#topo" className="mt-5 inline-flex h-12 items-center gap-2 rounded-lg bg-[var(--amber)] px-5 font-semibold text-[var(--ink)] hover:bg-[#fbb32e]">
                                Quero o dicionário grátis <ArrowRight aria-hidden weight="bold" className="h-4 w-4" />
                            </a>
                        </div>
                    </Container>
                </section>
            </main>

            <MfpFooter />
        </div>
    );
}
