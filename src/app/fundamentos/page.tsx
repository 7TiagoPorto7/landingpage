import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Accent, Band, Container, SectionTitle, fmt } from "@/components/mfp/ui";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { ModelWorkbook } from "@/components/mfp/model-workbook";
import { ProfitVsCash } from "@/components/mfp/profit-vs-cash";
import { SecureCheckout } from "@/components/mfp/secure-checkout";
import { MfpFooter } from "@/components/mfp/footer";
import { Backdrop } from "@/components/mfp/backdrop";
import { Marquee } from "@/components/mfp/marquee";
import { BalanceCheck } from "@/components/mfp/balance-check";
import { Logo } from "@/components/logo";
import { projetar } from "@/components/mfp/projection";
import { FundamentosLeadCapture } from "@/components/fundamentos/lead-capture";
import { FundamentosStickyCTA } from "@/components/fundamentos/sticky-cta";
import {
    ACCESS_STEPS,
    BONUS_TOTAL,
    BUY_LABEL,
    CHECKOUT_URL,
    DELIVERABLES,
    FAQ,
    INCLUDED,
    INSTALLMENT_LABEL,
    LESSONS,
    MARQUEE,
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
    "Aprenda a conectar DRE, Balanço e Fluxo de Caixa em um modelo que fecha, com módulos complementares que recebem novas aulas. Template em Excel, R$ 197 ou 12x, garantia de 7 dias.";

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
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online" },
};

const ano1 = projetar(1)[0];

const Buy = ({ section, size }: { section: string; size?: "sm" | "lg" }) => (
    <CheckoutButton href={CHECKOUT_URL} section={section} value={PRICE} product={PRODUCT} size={size}>
        {BUY_LABEL}
    </CheckoutButton>
);

const PriceLine = ({ className }: { className?: string }) => (
    <p className={cn("text-[15px] text-[var(--fg-2)]", className)}>
        <strong className="font-semibold text-white">{INSTALLMENT_LABEL}</strong> ou {PRICE_LABEL} à vista. Garantia de 7 dias.
    </p>
);

export default function FundamentosPage() {
    return (
        <div className={`mfp ${mfpFonts} min-h-screen bg-[var(--navy)]`} style={{ "--product": "#f59e0b" } as React.CSSProperties}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }} />

            <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--navy)]/85 text-white backdrop-blur-md">
                <Container className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" aria-label="Página inicial">
                        <Logo className="h-7 w-auto" />
                    </Link>
                    <div className="flex items-center gap-5">
                        <p className="hidden text-sm text-[var(--fg-2)] md:block">
                            <strong className="font-semibold text-white">{INSTALLMENT_LABEL}</strong> ou {PRICE_LABEL}
                        </p>
                        <Buy section="header" size="sm" />
                    </div>
                </Container>
            </header>

            <main className="text-white">
                {/* Topo: promessa + o modelo funcionando */}
                <section className="relative overflow-hidden">
                    <Backdrop tone="dark" />
                    <Container className="relative grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:pb-28 lg:pt-20 [&>*]:min-w-0">
                        <div>
                            <h1 className="text-balance text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem]">
                                DRE, Balanço e Caixa num modelo <Accent>que fecha.</Accent>
                            </h1>
                            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--fg-2)]">
                                O curso que conecta as três demonstrações financeiras, com módulos que recebem novas aulas.
                            </p>
                            <div className="mt-9 flex flex-col items-start gap-4">
                                <Buy section="hero" />
                                <PriceLine />
                            </div>
                        </div>
                        <ModelWorkbook className="shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-white/10" />
                    </Container>
                </section>

                <Marquee items={MARQUEE} />

                {/* O teste que todo modelo precisa passar */}
                <Band tone="deep">
                    <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 [&>*]:min-w-0">
                        <div>
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        O teste que todo modelo <Accent>precisa passar</Accent>
                                    </>
                                }
                                lead="Esqueça de levar o lucro para o patrimônio e o Balanço não fecha. No curso você aprende cada ligação até a checagem dar zero."
                            />
                            <dl className="mt-10 grid grid-cols-3 gap-4">
                                {[
                                    [`${fmt(ano1.lucro)}`, "lucro do ano"],
                                    [`${fmt(ano1.caixa)}`, "caixa final"],
                                    ["0", "diferença"],
                                ].map(([v, l]) => (
                                    <div key={l} className="border-l-2 border-[var(--amber)] pl-4">
                                        <dt className="sr-only">{l}</dt>
                                        <dd>
                                            <span className="block text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{v}</span>
                                            <span className="mt-1 block text-sm text-[var(--fg-2)]">{l}</span>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                            <p className="mt-3 text-xs text-[var(--fg-3)]">R$ mil, ano 1 do modelo-exemplo</p>
                        </div>
                        <BalanceCheck />
                    </Container>
                </Band>

                {/* Antes e depois */}
                <Band tone="dark">
                    <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                        <div>
                            <SectionTitle dark title="Onde a maioria trava" className="mb-10" />
                            <ul className="space-y-7">
                                {PAINS.map((p) => (
                                    <li key={p.title} className="flex gap-4">
                                        <XCircle aria-hidden weight="duotone" className="mt-0.5 h-6 w-6 shrink-0 text-[#f08b73]" />
                                        <div>
                                            <p className="text-lg font-semibold">{p.title}</p>
                                            <p className="mt-1 leading-relaxed text-[var(--fg-2)]">{p.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-[var(--surface)] p-8 ring-1 ring-[var(--line)] sm:p-10">
                            <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                                Depois do curso, <Accent>você consegue</Accent>
                            </h2>
                            <ul className="mt-8 space-y-5">
                                {OUTCOMES.map((o) => (
                                    <li key={o} className="flex gap-3 text-lg leading-snug">
                                        <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-6 w-6 shrink-0 text-[var(--amber)]" />
                                        {o}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </Band>

                {/* A lógica, interativa */}
                <Band tone="deep">
                    <Container>
                        <ProfitVsCash
                            intro={
                                <SectionTitle
                                    dark
                                    title={
                                        <>
                                            Teste a lógica <Accent>com números</Accent>
                                        </>
                                    }
                                    lead="Veja o prazo dos clientes encurtar de 120 dias até à vista. O lucro não muda, o caixa sim."
                                    className="mb-10"
                                />
                            }
                        />
                    </Container>
                </Band>

                {/* Conteúdo em linha do tempo */}
                <Band tone="dark" id="conteudo">
                    <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div className="lg:sticky lg:top-28 lg:self-start">
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        O módulo principal: <Accent>as 3 demonstrações</Accent> conectadas
                                    </>
                                }
                                lead="Na ordem em que um modelo é construído, até a checagem do Balanço dar zero."
                            />
                            <div className="mt-8">
                                <Buy section="curriculum" />
                            </div>
                        </div>
                        <ol className="relative border-l border-[var(--line)]">
                            {LESSONS.map((l, i) => (
                                <li key={l.title} className="relative pb-10 pl-10 last:pb-0">
                                    <span className="absolute -left-[13px] top-0 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--navy)] text-xs font-semibold text-[var(--amber)] ring-1 ring-[var(--amber)]/60">
                                        {i + 1}
                                    </span>
                                    <h3 className="text-lg font-semibold">{l.title}</h3>
                                    <p className="mt-1.5 leading-relaxed text-[var(--fg-2)]">{l.text}</p>
                                    <p className="mt-2 text-sm text-[var(--fg-3)]">Você sai com {l.outcome}.</p>
                                </li>
                            ))}
                            <li className="relative pl-10 pt-10">
                                <span className="absolute -left-[13px] top-10 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--amber)] text-sm font-bold text-[var(--ink)]">
                                    +
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--amber)]">Módulos complementares</h3>
                                <p className="mt-1.5 leading-relaxed text-[var(--fg-2)]">
                                    O curso continua com módulos que recebem novas aulas com frequência. Tudo o que for adicionado entra no seu acesso.
                                </p>
                            </li>
                        </ol>
                    </Container>
                </Band>

                {/* Entregáveis em bento */}
                <Band tone="deep">
                    <Container>
                        <SectionTitle
                            dark
                            title={
                                <>
                                    Tudo o que <Accent>você recebe</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <ul className="grid auto-rows-[minmax(9.5rem,auto)] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                            {DELIVERABLES.map(({ icon: Icon, title, text }, i) => (
                                <li
                                    key={title}
                                    className={cn(
                                        "flex flex-col justify-between rounded-2xl p-5 ring-1 ring-[var(--line)] sm:p-6",
                                        i === 0 ? "col-span-2 row-span-2 bg-[var(--amber)] text-[var(--ink)] ring-0" : "bg-[var(--surface)]",
                                        i === 1 && "col-span-2"
                                    )}
                                >
                                    <Icon aria-hidden weight="duotone" className={cn(i === 0 ? "h-10 w-10" : "h-7 w-7 text-[var(--amber)]")} />
                                    <div className="mt-6">
                                        <p className={cn("font-semibold leading-snug", i === 0 ? "text-2xl sm:text-3xl" : "text-lg")}>{title}</p>
                                        <p className={cn("mt-1 leading-relaxed", i === 0 ? "text-[var(--ink)]/75 sm:text-lg" : "text-sm text-[var(--fg-2)]")}>{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </Band>

                {/* Para quem */}
                <Band tone="dark">
                    <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <SectionTitle
                            dark
                            title={
                                <>
                                    Feito para <Accent>quem trabalha com números</Accent>
                                </>
                            }
                            lead={`Pré-requisitos: ${PREREQS}`}
                        />
                        <div>
                            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                                {PERSONAS.map((p) => (
                                    <li key={p.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                                        <p className="text-lg font-semibold leading-snug">{p.title}</p>
                                        <p className="leading-relaxed text-[var(--fg-2)]">{p.text}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <p className="font-semibold">Não é para você se</p>
                                <ul className="mt-3 space-y-2">
                                    {NOT_FOR_WHO.map((t) => (
                                        <li key={t} className="flex gap-3 text-[var(--fg-2)]">
                                            <XCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-[var(--fg-3)]" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </Band>

                {/* Instrutor */}
                <Band tone="deep">
                    <Container className="grid items-center gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
                        <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-3xl ring-1 ring-[var(--line)]">
                            <Image src="/tiago-porto.png" alt="Tiago Porto" fill sizes="340px" className="object-cover" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy)]/90 to-transparent p-5 pt-16">
                                <p className="font-semibold">Tiago Porto</p>
                                <p className="text-sm text-[var(--fg-2)]">Especialista em Modelagem Financeira</p>
                            </div>
                        </div>
                        <div>
                            <SectionTitle dark title="Quem ensina" />
                            <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-[var(--fg-2)]">
                                <p>
                                    Modelagem financeira é o meu trabalho, não só o meu curso: monto modelos que vão para a mesa de
                                    investidores, depois de anos planejando e analisando as finanças de empresas.
                                </p>
                                <p>
                                    Nesse caminho, vi quase todo mundo travar no mesmo ponto. Ninguém explica direito como DRE, Balanço e
                                    Fluxo de Caixa se ligam. Montei este curso do jeito que eu queria ter aprendido.
                                </p>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/portotiago/"
                                target="_blank"
                                rel="noopener"
                                className="mt-8 inline-flex items-center gap-1.5 font-semibold text-white underline decoration-[var(--amber)] decoration-2 underline-offset-4 hover:text-[var(--amber)]"
                            >
                                Ver trajetória no LinkedIn
                            </a>
                        </div>
                    </Container>
                </Band>

                {/* Oferta */}
                <Band tone="dark" id="oferta">
                    <Container className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-16">
                        <div>
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        Tudo incluso, <Accent>num só pagamento</Accent>
                                    </>
                                }
                                lead={`Os bônus também são vendidos separadamente no site. Só os dois somam ${BONUS_TOTAL}.`}
                            />
                            <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                                {INCLUDED.map((r) => (
                                    <li key={r.item} className="flex items-start justify-between gap-6 py-4">
                                        <div className="flex gap-3">
                                            <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--amber)]" />
                                            <div>
                                                <p className="font-semibold">{r.item}</p>
                                                <p className="text-[15px] text-[var(--fg-3)]">{r.detail}</p>
                                            </div>
                                        </div>
                                        <span className="shrink-0 text-right text-sm text-[var(--fg-3)]">
                                            {r.value ? `vendido por ${r.value}` : "incluso"}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <ol className="mt-10 grid gap-6 sm:grid-cols-3">
                                {ACCESS_STEPS.map((s, i) => (
                                    <li key={s.title}>
                                        <p className="text-sm font-semibold text-[var(--amber)]">
                                            {i + 1}. {s.title}
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-[var(--fg-2)]">{s.text}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="rounded-3xl bg-white p-7 text-[var(--ink)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] sm:p-9 lg:sticky lg:top-24">
                            <p className="text-lg font-semibold">{PRODUCT}</p>
                            <p className="mt-1 text-[15px] text-[var(--ink-2)]">Curso, template e 3 bônus</p>
                            <p className="mt-8 text-[15px] text-[var(--ink-2)]">Em até</p>
                            <p className="text-5xl font-semibold tracking-[-0.03em]">{INSTALLMENT_LABEL}</p>
                            <p className="mt-1 text-[var(--ink-2)]">ou {PRICE_LABEL} à vista</p>
                            <div className="mt-8 [&>a]:w-full">
                                <Buy section="pricing_main" />
                            </div>
                            <SecureCheckout className="mt-5 justify-center" />
                            <p className="mt-6 border-t border-[var(--grid)] pt-5 text-sm leading-relaxed text-[var(--ink-2)]">
                                <strong className="text-[var(--ink)]">Garantia de 7 dias.</strong> Assista, abra o material e decida. Se não for
                                para você, peça o reembolso na Hotmart e receba 100% de volta.
                            </p>
                        </div>
                    </Container>
                </Band>

                {/* Perguntas: lista lado a lado, sem sanfona */}
                <Band tone="deep">
                    <Container>
                        <SectionTitle dark title="Perguntas frequentes" className="mb-12" />
                        <dl className="grid gap-x-16 gap-y-10 md:grid-cols-2">
                            {FAQ.map((f) => (
                                <div key={f.q}>
                                    <dt className="text-lg font-semibold">{f.q}</dt>
                                    <dd className="mt-2 leading-relaxed text-[var(--fg-2)]">{f.a}</dd>
                                </div>
                            ))}
                        </dl>
                    </Container>
                </Band>

                {/* Fechamento */}
                <section className="relative overflow-hidden py-24 sm:py-32">
                    <Backdrop tone="dark" />
                    <Container className="relative">
                        <div className="text-center">
                            <h2 className="mx-auto max-w-3xl text-balance text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[3.3rem]">
                                Olhe um Balanço e <Accent>saiba de onde vem cada número.</Accent>
                            </h2>
                            <div className="mt-10 flex flex-col items-center gap-4">
                                <Buy section="final_cta" />
                                <PriceLine />
                            </div>
                        </div>
                        <div className="mt-24">
                            <FundamentosLeadCapture />
                        </div>
                    </Container>
                </section>
            </main>

            <MfpFooter />
            <div aria-hidden className="h-16 bg-[var(--navy)]" />
            <FundamentosStickyCTA />
        </div>
    );
}
