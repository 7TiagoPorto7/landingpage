import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calculator, CheckCircle2, ChevronDown, GitMerge, Landmark, RefreshCw, Scale } from "lucide-react";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { ModelWorkbook } from "@/components/mfp/model-workbook";
import { LogicExplorer } from "@/components/mfp/logic-explorer";
import { SecureCheckout } from "@/components/mfp/secure-checkout";
import { MfpFooter } from "@/components/mfp/footer";
import { KpiCards } from "@/components/mfp/kpi-cards";
import { Backdrop } from "@/components/mfp/backdrop";
import { Marquee } from "@/components/mfp/marquee";
import { Logo } from "@/components/logo";
import { FundamentosLeadCapture } from "@/components/fundamentos/lead-capture";
import { FundamentosStickyCTA } from "@/components/fundamentos/sticky-cta";
import {
    ACCESS_STEPS,
    BONUS_TOTAL,
    DELIVERABLES,
    INCLUDED,
    MARQUEE,
    CHECKOUT_URL,
    FAQ,
    INSTALLMENT_LABEL,
    LESSONS,
    NOT_FOR_WHO,
    OUTCOMES,
    PAINS,
    PERSONAS,
    PREREQS,
    PRICE,
    PRICE_LABEL,
    PRODUCT,
} from "@/components/fundamentos/content";

const TITLE = "Fundamentos da Modelagem Financeira, com Tiago Porto";
const DESCRIPTION =
    "Aprenda a conectar DRE, Balanço e Fluxo de Caixa em um modelo que fecha. 7 aulas práticas, template em Excel, R$ 197 ou 12x, garantia de 7 dias.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/fundamentos" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: "/fundamentos" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLdCourse = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: PRODUCT,
    description: DESCRIPTION,
    provider: { "@type": "Person", name: "Tiago Porto", url: "https://www.linkedin.com/in/portotiago/" },
    offers: { "@type": "Offer", price: "197.00", priceCurrency: "BRL", url: CHECKOUT_URL, category: "Paid" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online", courseWorkload: "PT2H" },
};

const LESSON_ICONS = [BookOpen, Calculator, Scale, RefreshCw, Landmark, GitMerge, CheckCircle2];

const Buy = ({ section, children = "Quero entrar no curso", size }: { section: string; children?: React.ReactNode; size?: "sm" | "lg" }) => (
    <CheckoutButton href={CHECKOUT_URL} section={section} value={PRICE} product={PRODUCT} size={size}>
        {children}
    </CheckoutButton>
);

function PriceNote({ dark = false }: { dark?: boolean }) {
    return (
        <p className={`text-[15px] ${dark ? "text-white/65" : "text-[var(--ink-2)]"}`}>
            <strong className={dark ? "text-white" : "text-[var(--ink)]"}>{INSTALLMENT_LABEL}</strong> ou {PRICE_LABEL} à vista. Garantia de 7 dias.
        </p>
    );
}

const Check = ({ className = "text-[var(--ok)]" }: { className?: string }) => (
    <svg aria-hidden viewBox="0 0 20 20" className={`mt-[3px] h-5 w-5 shrink-0 ${className}`} fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 10.4l2.6 2.6L14 7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function FundamentosPage() {
    return (
        <div className={`mfp ${mfpFonts} min-h-screen`} style={{ "--product": "#f59e0b" } as React.CSSProperties}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }} />

            {/* Topo fixo */}
            <header className="sticky top-0 z-30 border-b border-[var(--grid)] bg-white/90 backdrop-blur-md">
                <Container className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" aria-label="Página inicial">
                        <Logo className="h-7 w-auto" />
                    </Link>
                    <div className="flex items-center gap-5">
                        <p className="hidden text-sm text-[var(--ink-2)] md:block">
                            <strong className="font-semibold text-[var(--ink)]">{INSTALLMENT_LABEL}</strong> ou {PRICE_LABEL}
                        </p>
                        <Buy section="header" size="sm">
                            Comprar
                        </Buy>
                    </div>
                </Container>
            </header>

            <main>
                {/* Hero claro com indicadores do modelo */}
                <section className="product-tint relative overflow-hidden">
                    <Backdrop tone="light" />
                    <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-28 [&>*]:min-w-0">
                        <div>
                            <h1 className="text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-[4rem]">
                                Conecte DRE, Balanço e Fluxo de Caixa em um modelo <Accent>que fecha.</Accent>
                            </h1>
                            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[var(--ink-2)] sm:text-xl">
                                A base que falta para quem trabalha com FP&A, M&A, crédito ou controladoria. Em 7 aulas diretas,
                                cerca de 2 horas no total.
                            </p>
                            <div className="mt-10 flex flex-col items-start gap-4">
                                <Buy section="hero" />
                                <PriceNote />
                            </div>
                            <SecureCheckout className="mt-8" />
                        </div>
                        <KpiCards />
                    </Container>
                </section>

                <Marquee items={MARQUEE} />

                {/* O modelo */}
                <Band tone="mist">
                    <Container>
                        <SectionTitle
                            center
                            title={
                                <>
                                    Por dentro do <Accent>modelo integrado</Accent>
                                </>
                            }
                            lead="Premissas, DRE, Balanço, Fluxo de Caixa e as checagens que mostram na hora quando algo não fecha. Clique nas abas e passe o mouse nas células."
                            className="mb-12"
                        />
                        <div className="mx-auto max-w-4xl">
                            <ModelWorkbook />
                        </div>
                    </Container>
                </Band>

                {/* O que muda */}
                <Band tone="dark">
                    <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
                        <div>
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        Do modelo que <Accent>não fecha</Accent> ao modelo que você sabe explicar
                                    </>
                                }
                            />
                            <ul className="mt-10 space-y-5">
                                {OUTCOMES.map((o) => (
                                    <li key={o} className="flex gap-3 text-lg leading-snug text-white/85">
                                        <Check className="text-[var(--amber)]" />
                                        {o}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-[1.75rem] border border-white/10 bg-[var(--navy-2)] p-7 sm:p-9">
                            <p className="font-semibold text-white/80">Onde a maioria trava hoje</p>
                            <ul className="mt-6 space-y-6">
                                {PAINS.map((p) => (
                                    <li key={p.title} className="border-l-2 border-[var(--pen)] pl-5">
                                        <p className="text-lg font-semibold">{p.title}</p>
                                        <p className="mt-1 leading-relaxed text-white/60">{p.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </Band>

                {/* A lógica na prática */}
                <Band tone="snow">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Teste a lógica <Accent>com números</Accent>
                                </>
                            }
                            lead="Veja onde cada ligação aparece nos três demonstrativos, ou teste por que uma empresa com lucro pode ficar sem caixa."
                            className="mb-10"
                        />
                        <LogicExplorer />
                    </Container>
                </Band>

                {/* Aulas */}
                <Band id="conteudo" tone="white">
                    <Container>
                        <SectionTitle
                            center
                            title={
                                <>
                                    As 7 aulas, <Accent>na ordem do modelo</Accent>
                                </>
                            }
                            lead="Cada aula prepara a seguinte, até a checagem do Balanço dar zero."
                            className="mb-14"
                        />
                        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {LESSONS.map((l, i) => {
                                const Icon = LESSON_ICONS[i];
                                return (
                                    <li key={l.title} className="flex flex-col rounded-2xl bg-[var(--snow)] p-6 ring-1 ring-[var(--grid)]">
                                        <div className="flex items-center justify-between">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--amber)]">
                                                <Icon className="h-5 w-5" aria-hidden />
                                            </span>
                                            <span className="text-sm text-[var(--ink-3)]">Aula {i + 1}</span>
                                        </div>
                                        <h3 className="mt-6 text-lg font-semibold leading-snug">{l.title}</h3>
                                        <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">{l.text}</p>
                                    </li>
                                );
                            })}
                            <li className="flex flex-col justify-between rounded-2xl bg-[var(--amber)] p-6 text-[var(--ink)]">
                                <p className="text-lg font-semibold leading-snug">Você termina com um modelo integrado que fecha, e sabe explicar cada linha.</p>
                                <p className="mt-6 text-sm">+ template em Excel e 3 bônus</p>
                            </li>
                        </ol>

                    </Container>
                </Band>

                {/* Entregáveis */}
                <Band tone="dark">
                    <Container>
                        <SectionTitle
                            dark
                            title={
                                <>
                                    Tudo o que <Accent>você recebe</Accent>
                                </>
                            }
                            lead="Curso, planilhas e materiais de apoio, com acesso vitalício."
                            className="mb-12"
                        />
                        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                            {DELIVERABLES.map(({ icon: Icon, title, text }) => (
                                <li key={title} className="rounded-2xl bg-white p-5 text-[var(--ink)] sm:p-6">
                                    <Icon aria-hidden className="h-6 w-6 text-[var(--blue-2)]" />
                                    <p className="mt-4 font-semibold leading-snug">{title}</p>
                                    <p className="mt-1 text-sm leading-relaxed text-[var(--ink-2)]">{text}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                            <Buy section="deliverables" />
                            <PriceNote dark />
                        </div>
                    </Container>
                </Band>

                {/* Para quem */}
                <Band tone="mist">
                    <Container>
                        <SectionTitle
                            center
                            title={
                                <>
                                    Feito para <Accent>quem trabalha com números</Accent>
                                </>
                            }
                            lead={`Pré-requisitos: ${PREREQS}`}
                            className="mb-14"
                        />
                        <div className="grid gap-4 md:grid-cols-3">
                            {PERSONAS.map((p) => (
                                <div key={p.title} className="rounded-2xl bg-white p-7 ring-1 ring-[var(--grid)]">
                                    <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                                    <p className="mt-3 leading-relaxed text-[var(--ink-2)]">{p.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 rounded-2xl border border-[var(--ink)]/15 p-7">
                            <h3 className="font-semibold">Não é para você se</h3>
                            <ul className="mt-3 grid gap-3 md:grid-cols-2">
                                {NOT_FOR_WHO.map((t) => (
                                    <li key={t} className="flex gap-3 leading-snug text-[var(--ink-2)]">
                                        <span aria-hidden className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.6px] border-[var(--ink-3)] text-[11px] font-bold text-[var(--ink-3)]">
                                            ✕
                                        </span>
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </Band>

                {/* Como funciona o acesso */}
                <Band tone="snow">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Como funciona <Accent>depois da compra</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <ol className="grid gap-4 md:grid-cols-3">
                            {ACCESS_STEPS.map((step, i) => (
                                <li key={step.title} className="rounded-2xl bg-white p-7 ring-1 ring-[var(--grid)]">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-semibold text-white">
                                        {i + 1}
                                    </span>
                                    <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                                    <p className="mt-2 leading-relaxed text-[var(--ink-2)]">{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </Container>
                </Band>

                {/* Instrutor */}
                <Band tone="white">
                    <Container className="grid gap-12 lg:grid-cols-[340px_1fr] lg:items-center lg:gap-16">
                        <div>
                            <SectionTitle
                                title={
                                    <>
                                        Quem ensina: <Accent>Tiago Porto</Accent>
                                    </>
                                }
                            />
                            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-[var(--ink-2)]">
                                <p>
                                    Eu sou o Tiago Porto, especialista em Modelagem Financeira. Modelagem é o meu trabalho, não só
                                    o meu curso: monto modelos que vão para a mesa de investidores, depois de anos planejando e
                                    analisando as finanças de empresas.
                                </p>
                                <p>
                                    Nesse caminho, vi quase todo mundo travar no mesmo ponto. Ninguém explica direito como DRE,
                                    Balanço e Fluxo de Caixa se ligam. Montei este curso do jeito que eu queria ter aprendido:
                                    direto, sem enrolação e com profundidade onde importa.
                                </p>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/portotiago/"
                                target="_blank"
                                rel="noopener"
                                className="mt-8 inline-flex h-11 items-center rounded-full border border-[var(--ink)]/25 px-5 font-semibold transition-colors hover:bg-[var(--ink)] hover:text-white"
                            >
                                Ver trajetória no LinkedIn
                            </a>
                        </div>
                        <div className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-[1.75rem] lg:order-first">
                            <Image src="/tiago-porto.png" alt="Tiago Porto" fill sizes="340px" className="object-cover" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white">
                                <p className="font-semibold">Tiago Porto</p>
                                <p className="text-white/75">Especialista em Modelagem Financeira</p>
                            </div>
                        </div>
                    </Container>
                </Band>

                {/* Oferta */}
                <Band id="oferta" tone="dark">
                    <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-14">
                        <div className="text-white">
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        Tudo incluso <Accent>num só pagamento</Accent>
                                    </>
                                }
                                lead="Os bônus também são vendidos separadamente no site. No curso, eles entram sem custo."
                            />
                            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
                                {INCLUDED.map((r) => (
                                    <li key={r.item} className="flex items-start justify-between gap-6 py-4">
                                        <div className="flex gap-3">
                                            <Check className="text-[var(--amber)]" />
                                            <div>
                                                <p className="font-semibold">{r.item}</p>
                                                <p className="text-[15px] text-white/55">{r.detail}</p>
                                            </div>
                                        </div>
                                        <span className="shrink-0 pt-0.5 text-right text-sm text-white/55">
                                            {r.value ? (
                                                <>
                                                    <span className="block">vendido por</span>
                                                    <span className="font-semibold text-white/80">{r.value}</span>
                                                </>
                                            ) : (
                                                "incluso"
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-[15px] text-white/60">
                                Só os dois bônus vendidos separadamente somam <strong className="text-white">{BONUS_TOTAL}</strong>.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-7 text-[var(--ink)] sm:p-9 lg:sticky lg:top-24">
                            <p className="text-lg font-semibold">{PRODUCT}</p>
                            <p className="mt-1 text-[15px] text-[var(--ink-2)]">Curso, template e 3 bônus</p>
                            <div className="mt-7 rounded-xl bg-[var(--snow)] p-5">
                                <p className="text-[15px] text-[var(--ink-2)]">Em até</p>
                                <p className="text-5xl font-semibold tracking-[-0.03em]">{INSTALLMENT_LABEL}</p>
                                <p className="mt-1 text-[var(--ink-2)]">ou {PRICE_LABEL} à vista</p>
                            </div>
                            <div className="mt-6 [&>a]:w-full">
                                <Buy section="pricing_main" />
                            </div>
                            <SecureCheckout className="mt-5 justify-center" />
                            <p className="mt-6 border-t border-[var(--grid)] pt-5 text-sm leading-relaxed text-[var(--ink-2)]">
                                <strong className="text-[var(--ink)]">Garantia de 7 dias.</strong> Você tem uma semana para assistir e
                                decidir. Se não for para você, pede o reembolso na Hotmart e recebe 100% de volta.
                            </p>
                        </div>
                    </Container>
                </Band>

                {/* FAQ */}
                <Band tone="mist">
                    <Container className="max-w-3xl">
                        <SectionTitle center title="Perguntas frequentes" className="mb-12" />
                        <div className="rounded-2xl bg-white px-6 ring-1 ring-[var(--grid)] sm:px-8">
                            {FAQ.map((f) => (
                                <details key={f.q} className="group border-b border-[var(--grid)] last:border-b-0">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                                        {f.q}
                                        <ChevronDown aria-hidden className="h-5 w-5 shrink-0 text-[var(--ink-3)] transition-transform group-open:rotate-180" />
                                    </summary>
                                    <p className="max-w-2xl pb-6 leading-relaxed text-[var(--ink-2)]">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </Container>
                </Band>

                {/* Fechamento */}
                <Band tone="dark">
                    <Container>
                        <div className="text-center">
                            <h2 className="mx-auto max-w-3xl text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl">
                                Daqui a duas horas, você olha um Balanço e <Accent>sabe de onde vem cada número.</Accent>
                            </h2>
                            <div className="mt-12 flex flex-col items-center gap-4">
                                <Buy section="final_cta" />
                                <PriceNote dark />
                            </div>
                        </div>
                        <div className="mt-24">
                            <FundamentosLeadCapture />
                        </div>
                    </Container>
                </Band>
            </main>

            <MfpFooter />
            {/* espaço para a barra fixa não cobrir o rodapé */}
            <div aria-hidden className="h-16 bg-[var(--navy)]" />
            <FundamentosStickyCTA />
        </div>
    );
}
