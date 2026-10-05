import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Container } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { Backdrop } from "@/components/mfp/backdrop";
import { CaptureForm } from "@/components/gratis/capture-form";
import { Logo } from "@/components/logo";

const TITLE = "Guia grátis: IA para Finanças";
const DESCRIPTION =
    "Guia prático em PDF para usar ChatGPT, Claude e Gemini no fechamento, na conciliação, na DRE e na análise financeira. Com biblioteca de prompts prontos e plano de 7 dias.";
const URL = "/gratis/ia-para-financas";

export const metadata: Metadata = {
    title: { absolute: `${TITLE} | Modelagem Financeira na Prática` },
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: URL, images: ["/materiais/ia-para-financas-capa.jpg"] },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const POINTS = [
    "Os 4 elementos de um prompt que entrega pronto para a planilha",
    "Categorização, conciliação e DRE com apoio de IA, passo a passo",
    "Biblioteca de prompts prontos e um plano para aplicar em 7 dias",
];

// Capítulos reais do PDF
const CHAPTERS = [
    ["1", "Como conversar com uma IA", "Contexto, tarefa, formato e restrição: o roteiro que aparece em todo prompt do guia."],
    ["2", "Categorização de lançamentos", "Do extrato bagunçado para o seu plano de contas, com sinalização do que é estranho."],
    ["3", "Fechamento e conciliação", "Extrato contra ERP: o que bate, o que tem diferença e o que só aparece de um lado."],
    ["4", "DRE e fluxo de caixa", "Monte a DRE com margens e peça o resumo executivo para quem não é da área."],
    ["5", "Análise e insights", "Variações entre meses, tendências, sazonalidade e simulações simples."],
    ["6", "Cobrança e fornecedores", "Mensagens de cobrança em 3 níveis e argumentos para negociar prazo."],
    ["7", "Da planilha à modelagem", "Onde a IA ajuda e onde ainda é preciso conhecimento técnico."],
    ["8", "Gratuito x pago", "O que dá para fazer sem gastar nada e quando a assinatura compensa."],
    ["9", "Plano de 7 dias", "Um dia por tarefa, para sentir o ganho de tempo já na primeira semana."],
    ["10", "Prompts prontos", "Para copiar e colar: categorização, conciliação, DRE, análise, cobrança e contratos."],
    ["11", "Cuidados", "Dados sensíveis, LGPD e por que conferir os números antes de usar."],
];

// Página de captura do guia: entrega o PDF e prepara a oferta do 100 Prompts Excel + IA
export default function IaParaFinancasPage() {
    return (
        <div className={`mfp ${mfpFonts} flex min-h-screen flex-col`} style={{ "--product": "#8b5cf6", background: "#ffffff" } as React.CSSProperties}>
            <header className="border-b border-[var(--grid)] bg-white">
                <Container className="flex h-16 items-center">
                    <Link href="/" aria-label="Página inicial">
                        <Logo variant="dark" className="h-7 w-auto" />
                    </Link>
                </Container>
            </header>

            <main className="flex-1 text-[var(--ink)]">
                {/* Capa: promessa, formulário e o PDF */}
                <section id="topo" className="relative scroll-mt-4 overflow-hidden">
                    <Backdrop tone="light" />
                    <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 [&>*]:min-w-0">
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full bg-[#8b5cf6]/12 px-3 py-1 text-sm font-semibold text-[#6d28d9]">
                                Guia gratuito em PDF
                            </p>
                            <h1 className="mt-5 text-balance text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl">
                                Use IA para ganhar tempo no <Accent>fechamento e na análise</Accent>
                            </h1>
                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-2)]">
                                O guia IA para Finanças mostra como usar ChatGPT, Claude e Gemini nas tarefas repetitivas do financeiro, com prompts prontos para copiar.
                            </p>
                            <ul className="mt-7 space-y-3">
                                {POINTS.map((p) => (
                                    <li key={p} className="flex gap-3 text-lg leading-snug text-[var(--ink-2)]">
                                        <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-6 w-6 shrink-0 text-[#8b5cf6]" />
                                        {p}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 max-w-md rounded-2xl bg-white p-6 shadow-[0_24px_48px_-28px_rgba(7,13,36,0.45)] ring-1 ring-[var(--grid)]">
                                <p className="mb-4 font-semibold">Receba o guia no seu e-mail</p>
                                <CaptureForm fileId="ia-para-financas" source="gratis_ia_para_financas" next={`${URL}/obrigado`} button="Quero o guia grátis" material="o guia" />
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-[24rem]">
                            <div className="relative aspect-[636/900] rotate-[2deg] overflow-hidden rounded-xl shadow-[0_40px_80px_-30px_rgba(7,13,36,0.7)] ring-1 ring-black/10">
                                <Image src="/materiais/ia-para-financas-capa.jpg" alt="Capa do guia IA para Finanças, de Tiago Porto" fill priority sizes="384px" className="object-cover" />
                            </div>
                            <p className="mt-6 text-center text-sm text-[var(--ink-3)]">26 páginas · 11 capítulos · PDF</p>
                        </div>
                    </Container>
                </section>

                {/* Exemplo tirado do capítulo 1 */}
                <section className="bg-[var(--snow)] py-16 sm:py-20">
                    <Container>
                        <h2 className="max-w-2xl text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem]">
                            A diferença está em <Accent>como você pede</Accent>
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-2)]">Um exemplo do primeiro capítulo do guia:</p>
                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            <figure className="rounded-2xl bg-white p-6 ring-1 ring-[var(--grid)]">
                                <figcaption className="flex items-center gap-2 text-sm font-semibold text-[#b91c1c]">
                                    <XCircle aria-hidden weight="fill" className="h-5 w-5" /> Prompt fraco
                                </figcaption>
                                <blockquote className="mt-4 text-lg leading-relaxed">&ldquo;Organiza esses gastos aqui.&rdquo;</blockquote>
                                <p className="mt-4 text-sm text-[var(--ink-3)]">Resposta genérica, categorias inventadas e retrabalho.</p>
                            </figure>
                            <figure className="rounded-2xl bg-white p-6 ring-1 ring-[#8b5cf6]/40">
                                <figcaption className="flex items-center gap-2 text-sm font-semibold text-[var(--ok)]">
                                    <CheckCircle aria-hidden weight="fill" className="h-5 w-5" /> Prompt forte
                                </figcaption>
                                <blockquote className="mt-4 text-lg leading-relaxed">
                                    &ldquo;Sou controller de uma empresa de serviços. Categorize estes lançamentos em Receita, COGS, Despesas Operacionais, Despesas
                                    Administrativas e Impostos, entregue em tabela com total por categoria ao final: [colar dados].&rdquo;
                                </blockquote>
                                <p className="mt-4 text-sm text-[var(--ink-3)]">Sai praticamente pronto para levar para a planilha.</p>
                            </figure>
                        </div>
                    </Container>
                </section>

                {/* Sumário */}
                <section className="py-16 sm:py-20">
                    <Container>
                        <h2 className="max-w-2xl text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem]">
                            O que tem <Accent>dentro do guia</Accent>
                        </h2>
                        <ol className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                            {CHAPTERS.map(([n, title, text]) => (
                                <li key={n} className="flex gap-4">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)] text-sm font-semibold text-white">{n}</span>
                                    <span>
                                        <span className="block font-semibold leading-snug">{title}</span>
                                        <span className="mt-1 block text-[15px] leading-relaxed text-[var(--ink-2)]">{text}</span>
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </Container>
                </section>

                {/* Ponte para o produto pago */}
                <section className="bg-[var(--navy)] py-16 text-white sm:py-20">
                    <Container className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <p className="text-sm font-semibold text-[#c4b5fd]">Depois do guia</p>
                            <h2 className="mt-2 text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem]">
                                Quer pular a parte de escrever os prompts?
                            </h2>
                            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--fg-2)]">
                                O guia ensina o método. O <b className="text-white">100 Prompts Excel + IA</b> entrega os prompts já escritos e testados, organizados por
                                tarefa: fórmulas, análise de dados, modelagem financeira, automação e gráficos no Excel.
                            </p>
                            <Link
                                href="/prompts4finance?utm_source=site&utm_medium=gratis&utm_campaign=ia-para-financas"
                                className="mt-7 inline-flex items-center gap-2 font-semibold text-white underline decoration-[#8b5cf6] decoration-2 underline-offset-4 hover:text-[#c4b5fd]"
                            >
                                Conhecer o 100 Prompts Excel + IA <ArrowRight aria-hidden weight="bold" className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="rounded-2xl bg-[var(--surface)] p-7 ring-1 ring-[var(--line)]">
                            <p className="font-semibold">Comece pelo guia grátis</p>
                            <p className="mt-2 text-[15px] leading-relaxed text-[var(--fg-2)]">Aprenda o método e aplique já no próximo fechamento.</p>
                            <a
                                href="#topo"
                                className="mt-5 inline-flex h-12 items-center gap-2 rounded-lg bg-[var(--amber)] px-5 font-semibold text-[var(--ink)] hover:bg-[#fbb32e]"
                            >
                                Quero o guia grátis <ArrowRight aria-hidden weight="bold" className="h-4 w-4" />
                            </a>
                        </div>
                    </Container>
                </section>
            </main>

            <MfpFooter />
        </div>
    );
}
