import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bank, Briefcase, CaretDown, Certificate, ChartLineUp, ChatsCircle, CheckCircle, Plus, ShieldCheck, XCircle } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { SecureCheckout } from "@/components/mfp/secure-checkout";
import { MfpFooter } from "@/components/mfp/footer";
import { Backdrop } from "@/components/mfp/backdrop";
import { Marquee } from "@/components/mfp/marquee";
import { ShakeOnView } from "@/components/mfp/shake-on-view";
import { BonusCatalog } from "@/components/fundamentos/bonus-catalog";
import { Testimonials } from "@/components/fundamentos/testimonials";
import { Logo } from "@/components/logo";
import { FundamentosLeadCapture } from "@/components/fundamentos/lead-capture";
import { FundamentosStickyCTA } from "@/components/fundamentos/sticky-cta";
import {
    ACCESS_STEPS,
    BONUS_TOTAL,
    BUY_LABEL,
    CHECKOUT_URL,
    FAQ,
    INCLUDED,
    INSTALLMENT_COUNT,
    INSTALLMENT_VALUE,
    LESSONS,
    MARQUEE,
    NOT_FOR_WHO,
    OUTCOMES,
    PERSONAS,
    PRICE,
    PRICE_LABEL,
    PRODUCT,
} from "@/components/fundamentos/content";

const TITLE = "Aprenda a conectar os três demonstrativos financeiros e alavanque sua carreira";
const DESCRIPTION =
    "Aprenda a conectar DRE, Balanço e Fluxo de Caixa em um modelo que fecha, com módulos complementares que recebem novas aulas. Template em Excel, R$ 197 ou 12x, garantia de 7 dias.";

export const metadata: Metadata = {
    title: { absolute: TITLE },
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

const Buy = ({ section, size }: { section: string; size?: "sm" | "lg" }) => (
    <CheckoutButton href={CHECKOUT_URL} section={section} value={PRICE} product={PRODUCT} size={size} attention>
        {BUY_LABEL}
    </CheckoutButton>
);

// Parcela com o "12x de" pequeno e o valor em destaque
const Installment = ({ className, valueClassName }: { className?: string; valueClassName?: string }) => (
    <span className={cn("whitespace-nowrap", className)}>
        <span className="text-[0.8em] font-medium opacity-80">{INSTALLMENT_COUNT}</span>{" "}
        <strong className={cn("text-[1.3em] font-semibold tracking-[-0.01em]", valueClassName)}>{INSTALLMENT_VALUE}</strong>
    </span>
);

const PriceLine = ({ className, light = false }: { className?: string; light?: boolean }) => (
    <p className={cn("text-[15px]", light ? "text-[var(--ink-2)]" : "text-[var(--fg-2)]", className)}>
        <Installment className={light ? "text-[var(--ink)]" : "text-white"} /> ou {PRICE_LABEL} à vista. Garantia de 7 dias.
    </p>
);

// Chamada para o checkout que se repete ao longo da página
const CtaRow = ({
    section,
    className,
    light = false,
    center = false,
    shake = false,
}: {
    section: string;
    className?: string;
    light?: boolean;
    center?: boolean;
    shake?: boolean;
}) => (
    <div className={cn("mt-12 flex flex-col gap-3", center ? "items-center text-center" : "items-start", className)}>
        {shake ? (
            <ShakeOnView className="inline-block">
                <Buy section={section} />
            </ShakeOnView>
        ) : (
            <Buy section={section} />
        )}
        <PriceLine light={light} />
    </div>
);

const CAREERS = [
    {
        icon: ChartLineUp,
        title: "FP&A e controladoria",
        text: "Orçamento e forecast em que o resultado, o Balanço e o caixa contam a mesma história.",
    },
    {
        icon: Briefcase,
        title: "Valuation e M&A",
        text: "Todo DCF começa nos três demonstrativos projetados. Sem a base, o valor da empresa não se sustenta.",
    },
    {
        icon: Bank,
        title: "Crédito e bancos",
        text: "A capacidade de pagar uma dívida vem do caixa, não do lucro. É a ligação que você aprende aqui.",
    },
    {
        icon: ChatsCircle,
        title: "Entrevistas e cases",
        text: "“Se a depreciação sobe 10, o que muda nos três demonstrativos?” Você responde sem travar.",
    },
];

// Ilustração do certificado de conclusão (o nome é do aluno)
function Certificado() {
    return (
        <figure
            aria-label="Ilustração do certificado de conclusão do curso"
            className="relative mx-auto w-full max-w-xl rotate-[-1.5deg] rounded-2xl bg-white p-2.5 text-[var(--ink)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85)]"
        >
            <div className="relative overflow-hidden rounded-xl border border-[var(--amber)]/50 px-6 py-8 sm:px-10 sm:py-10">
                <svg aria-hidden className="absolute inset-0 h-full w-full text-[var(--amber)] opacity-[0.12]" preserveAspectRatio="none" viewBox="0 0 400 260">
                    {Array.from({ length: 14 }, (_, i) => (
                        <path key={i} d={`M-20 ${40 + i * 14} C 100 ${10 + i * 14}, 300 ${80 + i * 14}, 420 ${40 + i * 14}`} fill="none" stroke="currentColor" strokeWidth="1" />
                    ))}
                </svg>
                <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold tracking-wide text-[var(--ink-2)]">Certificado de conclusão</p>
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--amber)] text-[var(--ink)] ring-4 ring-[var(--amber)]/25">
                            <Certificate aria-hidden weight="fill" className="h-7 w-7" />
                        </span>
                    </div>
                    <p className="mt-6 text-[15px] text-[var(--ink-2)]">Certificamos que</p>
                    <p className="mt-1 border-b border-dashed border-[var(--ink-3)]/50 pb-2 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">Seu nome aqui</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-2)]">concluiu o curso</p>
                    <p className="text-xl font-semibold leading-snug sm:text-2xl">{PRODUCT}</p>
                    <div className="mt-8 flex items-end justify-between gap-6">
                        <div>
                            <p className="font-semibold">Tiago Porto</p>
                            <p className="border-t border-[var(--ink-3)]/40 pt-1 text-xs text-[var(--ink-3)]">Especialista em Modelagem Financeira</p>
                        </div>
                        <span className="shrink-0 rounded-lg bg-[var(--navy)] px-3 py-2">
                            <Logo className="h-5 w-auto" />
                        </span>
                    </div>
                </div>
            </div>
        </figure>
    );
}

export default function FundamentosPage() {
    return (
        <div className={`mfp ${mfpFonts} min-h-screen bg-[var(--navy)]`} style={{ "--product": "#f59e0b" } as React.CSSProperties}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }} />

            <header className="sticky top-0 z-30 border-b border-[var(--grid)] bg-white/95 text-[var(--ink)] shadow-[0_1px_12px_rgba(7,13,36,0.08)] backdrop-blur-md">
                <Container className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" aria-label="Página inicial">
                        <Logo variant="dark" className="h-7 w-auto" />
                    </Link>
                    <div className="flex items-center gap-5">
                        <p className="hidden text-sm text-[var(--ink-2)] md:block">
                            <Installment className="text-[var(--ink)]" /> ou {PRICE_LABEL}
                        </p>
                        <Buy section="header" size="sm" />
                    </div>
                </Container>
            </header>

            <main className="text-white">
                {/* Topo: promessa e compra */}
                <section className="relative overflow-hidden">
                    <Backdrop tone="dark" />
                    <Container className="relative flex flex-col items-center pb-24 pt-20 text-center sm:pt-28 lg:pb-32">
                        <h1 className="max-w-4xl text-balance text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[3.2rem] lg:text-[3.9rem]">
                            Aprenda a conectar os três demonstrativos financeiros e <Accent>alavanque sua carreira</Accent>
                        </h1>
                        <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--fg-2)] sm:text-xl">
                            DRE, Balanço e Fluxo de Caixa num modelo que fecha, com módulos que recebem novas aulas.
                        </p>
                        <div className="mt-10">
                            <Buy section="hero" />
                        </div>

                        {/* Cartão de preço no canto inferior direito (no celular, abaixo do botão) */}
                        <div className="mt-10 w-full max-w-[17rem] rounded-2xl bg-white/[0.06] p-5 text-left ring-1 ring-[var(--amber)]/40 backdrop-blur-md lg:absolute lg:bottom-10 lg:right-6 lg:mt-0 xl:right-8">
                            <p className="text-sm text-[var(--fg-2)]">No cartão</p>
                            <p className="mt-1 leading-none">
                                <span className="text-base font-medium text-[var(--fg-2)]">{INSTALLMENT_COUNT}</span>{" "}
                                <span className="text-[2.6rem] font-semibold tracking-[-0.03em] text-white">{INSTALLMENT_VALUE}</span>
                            </p>
                            <p className="mt-2 text-sm text-[var(--fg-2)]">ou {PRICE_LABEL} à vista</p>
                            <p className="mt-4 flex items-center gap-2 border-t border-[var(--line)] pt-3 text-sm text-[var(--fg-2)]">
                                <ShieldCheck aria-hidden weight="duotone" className="h-5 w-5 text-[var(--amber)]" />
                                Garantia de 7 dias
                            </p>
                        </div>
                    </Container>
                </section>

                <Marquee items={MARQUEE} />

                {/* Carreira: onde a habilidade é usada */}
                <Band tone="white">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    A base que <Accent>todo profissional de finanças</Accent> usa
                                </>
                            }
                            lead="Quem entende como DRE, Balanço e Fluxo de Caixa se conectam fala a língua de todas as áreas de finanças."
                            className="mb-12"
                        />
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {CAREERS.map(({ icon: Icon, title, text }) => (
                                <li key={title} className="rounded-2xl bg-[var(--snow)] p-6 ring-1 ring-[var(--grid)] transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(7,13,36,0.35)]">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--amber)]">
                                        <Icon aria-hidden weight="duotone" className="h-6 w-6" />
                                    </span>
                                    <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                                    <p className="mt-2 leading-relaxed text-[var(--ink-2)]">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </Band>

                {/* Bônus em catálogo de streaming */}
                <section className="overflow-hidden bg-[#03060f] py-20 sm:py-28">
                    <Container>
                        <SectionTitle
                            dark
                            title={
                                <>
                                    E ainda leva <Accent>estes bônus</Accent>
                                </>
                            }
                            lead={`Além do curso, você recebe produtos que também são vendidos separadamente. Só o Template Pro e o Starter Kit somam ${BONUS_TOTAL}.`}
                            className="mb-12"
                        />
                        <BonusCatalog />
                        <CtaRow section="bonus" className="mt-6" />
                    </Container>
                </section>

                {/* Conteúdo: tabela de aulas que expande ao clicar */}
                <Band tone="deep" id="conteudo">
                    <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
                        <div className="lg:sticky lg:top-28 lg:order-2 lg:self-start">
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        O módulo principal: <Accent>as 3 demonstrações</Accent> conectadas
                                    </>
                                }
                                lead="Na ordem em que um modelo é construído, até a checagem do Balanço dar zero. Clique em uma aula para ver o que ela cobre."
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line)]">
                            <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3.5 text-sm text-[var(--fg-3)] sm:px-6">
                                <span>Módulo principal</span>
                                <span>com novas aulas nos complementares</span>
                            </div>
                            {LESSONS.map((l, i) => (
                                <details key={l.title} name="aulas" open={i === 0} className="group border-b border-[var(--line)]">
                                    <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03] sm:px-6 [&::-webkit-details-marker]:hidden">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)] text-sm font-semibold text-[var(--amber)] ring-1 ring-[var(--amber)]/40">
                                            {i + 1}
                                        </span>
                                        <h3 className="flex-1 text-[17px] font-semibold leading-snug">{l.title}</h3>
                                        <CaretDown aria-hidden weight="bold" className="h-4 w-4 shrink-0 text-[var(--fg-3)] transition-transform duration-200 group-open:rotate-180 group-open:text-[var(--amber)]" />
                                    </summary>
                                    <div className="pb-5 pl-[4.25rem] pr-6 sm:pl-[4.75rem]">
                                        <p className="leading-relaxed text-[var(--fg-2)]">{l.text}</p>
                                        <p className="mt-2 text-sm text-[var(--fg-3)]">Você sai com {l.outcome}.</p>
                                    </div>
                                </details>
                            ))}
                            <details name="aulas" className="group">
                                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03] sm:px-6 [&::-webkit-details-marker]:hidden">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--amber)] text-base font-bold text-[var(--ink)]">+</span>
                                    <h3 className="flex-1 text-[17px] font-semibold leading-snug text-[var(--amber)]">Módulos complementares</h3>
                                    <CaretDown aria-hidden weight="bold" className="h-4 w-4 shrink-0 text-[var(--fg-3)] transition-transform duration-200 group-open:rotate-180 group-open:text-[var(--amber)]" />
                                </summary>
                                <p className="pb-5 pl-[4.25rem] pr-6 leading-relaxed text-[var(--fg-2)] sm:pl-[4.75rem]">
                                    O curso continua com módulos que recebem novas aulas com frequência. Tudo o que for adicionado entra no seu acesso.
                                </p>
                            </details>
                        </div>
                    </Container>
                </Band>

                {/* O que a pessoa consegue fazer depois do curso */}
                <Band tone="dark">
                    <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <div>
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        Depois do curso, <Accent>você consegue</Accent>
                                    </>
                                }
                                lead="O que muda no seu trabalho quando os três demonstrativos deixam de ser abas separadas."
                            />
                            <div className="mt-10">
                                <Buy section="outcomes" />
                            </div>
                        </div>
                        <ul className="space-y-5 rounded-3xl bg-[var(--surface)] p-8 ring-1 ring-[var(--line)] sm:p-10">
                            {OUTCOMES.map((o) => (
                                <li key={o} className="flex gap-3 text-lg leading-snug">
                                    <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-6 w-6 shrink-0 text-[var(--amber)]" />
                                    {o}
                                </li>
                            ))}
                        </ul>
                    </Container>
                </Band>

                {/* Para quem */}
                <Band tone="white">
                    <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <SectionTitle
                            title={
                                <>
                                    Feito para <Accent>quem trabalha com números</Accent>
                                </>
                            }
                        />
                        <div>
                            <ul className="divide-y divide-[var(--grid)] border-y border-[var(--grid)]">
                                {PERSONAS.map((p) => (
                                    <li key={p.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                                        <p className="text-lg font-semibold leading-snug">{p.title}</p>
                                        <p className="leading-relaxed text-[var(--ink-2)]">{p.text}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <p className="font-semibold">Não é para você se</p>
                                <ul className="mt-3 space-y-2">
                                    {NOT_FOR_WHO.map((t) => (
                                        <li key={t} className="flex gap-3 text-[var(--ink-2)]">
                                            <XCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ink-3)]" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <CtaRow section="para_quem" light shake />
                        </div>
                    </Container>
                </Band>

                {/* Instrutor */}
                <Band tone="dark">
                    <Container className="grid items-center gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
                        <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-3xl ring-1 ring-[var(--line)]">
                            <Image src="/tiago-porto.png" alt="Tiago Porto" fill sizes="340px" className="object-cover" />
                        </div>
                        <div>
                            <SectionTitle dark title="Quem ensina" />
                            <p className="mt-6 text-2xl font-semibold">Tiago Porto</p>
                            <p className="mt-1 font-semibold text-[var(--amber)]">Especialista em Modelagem Financeira</p>
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
                            <CtaRow section="instrutor" className="mt-10" />
                        </div>
                    </Container>
                </Band>

                {/* Depoimentos (só aparece no site quando houver depoimentos reais) */}
                <Testimonials />

                {/* Oferta */}
                <Band tone="deep" id="oferta">
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
                            <p className="mt-8 text-[15px] text-[var(--ink-2)]">No cartão</p>
                            <p className="text-5xl font-semibold tracking-[-0.03em]">
                                <span className="text-2xl font-medium text-[var(--ink-2)]">{INSTALLMENT_COUNT}</span> {INSTALLMENT_VALUE}
                            </p>
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

                {/* Certificado */}
                <Band tone="dark">
                    <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 [&>*]:min-w-0">
                        <div>
                            <SectionTitle
                                dark
                                title={
                                    <>
                                        Conclua o curso e receba <Accent>seu certificado</Accent>
                                    </>
                                }
                                lead="Ao terminar as aulas, você emite o certificado de conclusão do Fundamentos da Modelagem Financeira, com o seu nome."
                            />
                            <ul className="mt-8 space-y-3">
                                {["Emitido pela Hotmart, direto na área do aluno", "Em PDF, para baixar e imprimir", "Para colocar no LinkedIn e no currículo"].map((t) => (
                                    <li key={t} className="flex gap-3 text-lg leading-snug">
                                        <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-6 w-6 shrink-0 text-[var(--amber)]" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <CtaRow section="certificado" className="mt-10" />
                        </div>
                        <Certificado />
                    </Container>
                </Band>

                {/* Perguntas: lista que expande ao clicar */}
                <Band tone="deep">
                    <Container className="max-w-3xl">
                        <SectionTitle dark center title="Perguntas frequentes" className="mb-12" />
                        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                            {FAQ.map((f, i) => (
                                <details key={f.q} name="faq" open={i === 0} className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold transition-colors hover:text-[var(--amber)] [&::-webkit-details-marker]:hidden">
                                        {f.q}
                                        <Plus
                                            aria-hidden
                                            weight="bold"
                                            className="h-5 w-5 shrink-0 text-[var(--amber)] transition-transform duration-200 group-open:rotate-45"
                                        />
                                    </summary>
                                    <p className="max-w-2xl pb-6 pr-10 leading-relaxed text-[var(--fg-2)]">{f.a}</p>
                                </details>
                            ))}
                        </div>
                        <CtaRow section="faq" center className="mt-16" />
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
