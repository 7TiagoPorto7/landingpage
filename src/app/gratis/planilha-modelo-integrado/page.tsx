import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Flask, LockSimple, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Container } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { Backdrop } from "@/components/mfp/backdrop";
import { BalanceCheck } from "@/components/mfp/balance-check";
import { CaptureForm } from "@/components/gratis/capture-form";
import { Logo } from "@/components/logo";
import { INSTALLMENT_COUNT, INSTALLMENT_VALUE, PRICE_LABEL } from "@/components/fundamentos/content";

const TITLE = "Planilha grátis: DRE, Balanço e Fluxo de Caixa ligados";
const DESCRIPTION =
    "Baixe grátis um modelo financeiro em Excel com DRE, Balanço e Fluxo de Caixa de 5 anos conectados, o mapa das 8 ligações e checagem automática de fechamento.";
const URL = "/gratis/planilha-modelo-integrado";
const NEXT = `${URL}/obrigado`;

export const metadata: Metadata = {
    title: { absolute: `${TITLE} | Modelagem Financeira na Prática` },
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: URL },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const POINTS = [
    "DRE, Balanço e Fluxo de Caixa de 5 anos, já conectados",
    "Mapa das 8 ligações entre os demonstrativos, conferidas ao vivo",
    "Aba de checagem que avisa na hora se o Balanço não fecha",
    "5 exercícios guiados, inclusive quebrar uma ligação para ver o erro aparecer",
];

// As 8 ligações da aba "Ligações" da planilha
const LINKS: [string, string, string, string][] = [
    ["O lucro abre o Fluxo de Caixa", "DRE", "Fluxo de Caixa", "O Fluxo de Caixa indireto começa no lucro e explica, linha a linha, por que o caixa é diferente dele."],
    ["O lucro soma no patrimônio líquido", "DRE", "Balanço", "Sem ela, o Balanço fica com uma diferença exatamente igual ao lucro do ano."],
    ["A depreciação volta somando no caixa", "DRE", "Fluxo de Caixa", "Ela reduz o lucro, mas não sai do banco. Por isso é somada de volta."],
    ["A depreciação reduz o imobilizado", "DRE", "Balanço", "O desgaste do ano sai do valor das máquinas no Balanço."],
    ["O investimento aumenta o imobilizado", "Fluxo de Caixa", "Balanço", "Comprar máquina tira caixa, mas não passa pela DRE: vira ativo."],
    ["Contas a receber consome caixa", "Balanço", "Fluxo de Caixa", "Venda a prazo entra no lucro, mas o dinheiro ainda está com o cliente."],
    ["Fornecedores seguram caixa", "Balanço", "Fluxo de Caixa", "Comprar a prazo entra no custo, mas o dinheiro só sai depois."],
    ["O caixa final fecha o Balanço", "Fluxo de Caixa", "Balanço", "É a última ligação: com ela, Ativo = Passivo + PL."],
];

// Aba "Exercícios" da planilha
const EXPERIMENTS: [string, string, string][] = [
    ["Lucro não é caixa", "Mude o prazo de recebimento de 30 para 120 dias.", "O lucro não muda. O caixa das operações cai: um terço das vendas fica com o cliente."],
    ["O fornecedor também financia", "Mude o prazo de pagamento aos fornecedores de 30 para 60 dias.", "O caixa sobe sem o lucro mudar: você vende antes de pagar."],
    ["Depreciação e imposto", "Mude a depreciação de 50 para 0.", "O lucro sobe, mas o caixa cai: o lucro tributável aumenta e você paga mais IR."],
    ["Investimento não passa pela DRE", "Mude o investimento por ano de 60 para 200.", "O lucro fica igual. O caixa final cai 140 por ano e o imobilizado cresce."],
    ["Quebre uma ligação", "Apague o lucro da fórmula do patrimônio líquido.", "A Checagem mostra diferença igual ao lucro e a ligação 2 fica marcada como Quebrada."],
];

const LEFT_OUT = [
    "Dívida e juros, que mexem no lucro, no caixa e no Balanço ao mesmo tempo",
    "Dividendos e distribuição de lucro",
    "Estoques e o ciclo de caixa completo",
    "Cenários e análise de sensibilidade",
];

const COURSE = [
    "Módulo principal: as 3 demonstrações conectadas, passo a passo",
    "Módulos complementares que recebem novas aulas",
    "Template do modelo integrado em Excel",
    "Certificado de conclusão e acesso vitalício",
];

const FormCard = ({ source, title }: { source: string; title: string }) => (
    <div className="max-w-md rounded-2xl bg-white p-6 text-[var(--ink)] shadow-[0_24px_48px_-28px_rgba(7,13,36,0.45)] ring-1 ring-[var(--grid)]">
        <p className="mb-4 font-semibold">{title}</p>
        <CaptureForm fileId="planilha-modelo-integrado" source={source} next={NEXT} />
    </div>
);

// Página de captura da planilha: mostra o valor do modelo e leva ao curso Fundamentos
export default function PlanilhaModeloIntegradoPage() {
    return (
        <div className={`mfp ${mfpFonts} flex min-h-screen flex-col`} style={{ "--product": "#f59e0b", background: "#ffffff" } as React.CSSProperties}>
            <header className="border-b border-[var(--grid)] bg-white">
                <Container className="flex h-16 items-center">
                    <Link href="/" aria-label="Página inicial">
                        <Logo variant="dark" className="h-7 w-auto" />
                    </Link>
                </Container>
            </header>

            <main className="flex-1 text-[var(--ink)]">
                {/* Capa */}
                <section className="relative overflow-hidden">
                    <Backdrop tone="light" />
                    <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 [&>*]:min-w-0">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--amber)]/15 px-3 py-1 text-sm font-semibold text-[#b45309]">
                                Planilha gratuita em Excel
                            </p>
                            <h1 className="mt-5 text-balance text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl">
                                O modelo que liga DRE, Balanço e Caixa <Accent>e fecha sozinho</Accent>
                            </h1>
                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-2)]">
                                Montar cada demonstrativo separado é a parte fácil. Aqui você vê as ligações que fazem os três virarem um modelo só.
                            </p>
                            <ul className="mt-7 space-y-3">
                                {POINTS.map((p) => (
                                    <li key={p} className="flex gap-3 text-lg leading-snug text-[var(--ink-2)]">
                                        <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-6 w-6 shrink-0 text-[var(--amber)]" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <FormCard source="gratis_planilha_modelo_integrado" title="Receba a planilha no seu e-mail" />
                            </div>
                        </div>

                        <div>
                            <BalanceCheck />
                            <p className="mt-4 text-center text-sm text-[var(--ink-3)]">
                                A aba de checagem da planilha: quando o lucro chega ao patrimônio, a diferença vai a zero.
                            </p>
                        </div>
                    </Container>
                </section>

                {/* As 8 ligações */}
                <section className="bg-[var(--snow)] py-16 sm:py-24">
                    <Container>
                        <h2 className="max-w-3xl text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.6rem]">
                            As <Accent>8 ligações</Accent> que fazem o modelo fechar
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-2)]">
                            A aba Ligações mostra de onde sai e onde chega cada número, e marca cada uma como Ligada ou Quebrada em tempo real.
                        </p>
                        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {LINKS.map(([title, from, to, why], i) => (
                                <li key={title} className="flex flex-col rounded-2xl bg-white p-5 ring-1 ring-[var(--grid)]">
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--navy)] text-sm font-semibold text-[var(--amber)]">
                                            {i + 1}
                                        </span>
                                        <span className="rounded-md bg-[var(--ok)]/10 px-2 py-0.5 text-xs font-semibold text-[var(--ok)]">Ligada</span>
                                    </div>
                                    <p className="mt-4 font-semibold leading-snug">{title}</p>
                                    <p className="mt-2 text-xs font-semibold text-[#b45309]">
                                        {from} → {to}
                                    </p>
                                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--ink-2)]">{why}</p>
                                </li>
                            ))}
                        </ol>
                    </Container>
                </section>

                {/* Os 5 experimentos */}
                <section className="py-16 sm:py-24">
                    <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                        <div>
                            <h2 className="text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.6rem]">
                                5 experimentos para <Accent>sentir o modelo funcionando</Accent>
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-[var(--ink-2)]">
                                A aba Exercícios guia cada teste. Você muda uma premissa, vê os números se moverem nos três demonstrativos e confere que o Balanço continua
                                fechando.
                            </p>
                        </div>
                        <ol className="divide-y divide-[var(--grid)] border-y border-[var(--grid)]">
                            {EXPERIMENTS.map(([title, todo, observe], i) => (
                                <li key={title} className="grid gap-2 py-5 sm:grid-cols-[2.25rem_1fr]">
                                    <Flask aria-hidden weight="duotone" className="h-6 w-6 text-[var(--amber)]" />
                                    <div>
                                        <p className="font-semibold">
                                            {i + 1}. {title}
                                        </p>
                                        <p className="mt-1 text-[15px] text-[var(--ink-2)]">
                                            <b className="font-semibold text-[var(--ink)]">Faça:</b> {todo}
                                        </p>
                                        <p className="mt-1 text-[15px] text-[var(--ink-2)]">
                                            <b className="font-semibold text-[var(--ink)]">Observe:</b> {observe}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </Container>
                </section>

                {/* Ponte para o Fundamentos */}
                <section className="bg-[var(--navy)] py-16 text-white sm:py-24">
                    <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                        <div>
                            <p className="text-sm font-semibold text-[var(--amber)]">O que a planilha deixa de fora, de propósito</p>
                            <h2 className="mt-2 text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.6rem]">
                                Um modelo de verdade tem <Accent>mais peças</Accent>
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-[var(--fg-2)]">A planilha é simplificada para você enxergar a lógica. No trabalho, o modelo ainda ganha:</p>
                            <ul className="mt-6 space-y-3">
                                {LEFT_OUT.map((t) => (
                                    <li key={t} className="flex gap-3 text-lg leading-snug">
                                        <LockSimple aria-hidden weight="duotone" className="mt-0.5 h-6 w-6 shrink-0 text-[var(--fg-3)]" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 leading-relaxed text-[var(--fg-2)]">Antes dessas peças vem a base: saber montar os três demonstrativos ligados e achar o erro quando o modelo não fecha. É isso que o curso ensina. Dívida e cenários você encontra prontos no Template Pro, que vem de bônus.</p>
                        </div>

                        <div className="rounded-3xl bg-white p-7 text-[var(--ink)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] sm:p-9">
                            <p className="text-sm font-semibold text-[#b45309]">Curso</p>
                            <p className="mt-1 text-2xl font-semibold leading-snug">Fundamentos da Modelagem Financeira</p>
                            <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">
                                Você monta do zero, passo a passo, a DRE, o Balanço, o Fluxo de Caixa e o capital de giro, e liga tudo até a checagem do Balanço dar zero.
                            </p>
                            <ul className="mt-5 space-y-2.5">
                                {COURSE.map((c) => (
                                    <li key={c} className="flex gap-2.5 text-[15px] leading-snug">
                                        <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--amber)]" />
                                        {c}
                                    </li>
                                ))}
                            </ul>
                            {/* Bônus em destaque: o Template Pro vem junto no curso */}
                            <div className="mt-5 rounded-2xl bg-[#3b82f6]/8 p-4 ring-1 ring-[#3b82f6]/25">
                                <div className="flex items-start justify-between gap-3">
                                    <p className="text-sm font-semibold text-[#1d4ed8]">Bônus incluso</p>
                                    <p className="text-xs text-[var(--ink-3)]">vendido separadamente por R$ 97</p>
                                </div>
                                <p className="mt-1 font-semibold">Template Pro</p>
                                <p className="mt-1 text-[14px] leading-relaxed text-[var(--ink-2)]">
                                    O modelo completo com DCF até o valor por ação, múltiplos, cenários e Monte Carlo. O próximo degrau depois desta planilha.
                                </p>
                            </div>
                            <p className="mt-2 text-xs text-[var(--ink-3)]">Também incluso: Starter Kit Financeiro e planilha de prompts de IA.</p>

                            <p className="mt-6 text-[15px] text-[var(--ink-2)]">
                                {INSTALLMENT_COUNT} <strong className="text-[1.6em] font-bold text-[var(--ink)]">{INSTALLMENT_VALUE}</strong> ou {PRICE_LABEL} à vista
                            </p>
                            <Link
                                href="/fundamentos?utm_source=site&utm_medium=gratis&utm_campaign=planilha-modelo-integrado"
                                className="cta-pop cta-glow mt-5 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-lg bg-[var(--amber)] px-6 text-[17px] font-semibold text-[var(--ink)] hover:bg-[#fbb32e]"
                            >
                                Conhecer o curso
                                <ArrowRight aria-hidden weight="bold" className="cta-arrow h-5 w-5" />
                            </Link>
                            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--ink-2)]">
                                <ShieldCheck aria-hidden weight="duotone" className="h-5 w-5 text-[var(--ok)]" />
                                Garantia de 7 dias
                            </p>
                        </div>
                    </Container>
                </section>

                {/* Fechamento: o download */}
                <section className="py-16 sm:py-24">
                    <Container className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
                        <div>
                            <h2 className="max-w-xl text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.6rem]">
                                Comece pela planilha: <Accent>é grátis</Accent>
                            </h2>
                            <p className="mt-4 max-w-lg text-lg leading-relaxed text-[var(--ink-2)]">
                                Abra, mude as premissas e veja as 8 ligações funcionando antes de dar o próximo passo.
                            </p>
                        </div>
                        <FormCard source="gratis_planilha_modelo_integrado_final" title="Receba a planilha no seu e-mail" />
                    </Container>
                </section>
            </main>

            <MfpFooter />
        </div>
    );
}
