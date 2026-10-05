import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, DownloadSimple, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Container } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { Logo } from "@/components/logo";
import { BUY_LABEL, CHECKOUT_URL, INSTALLMENT_COUNT, INSTALLMENT_VALUE, PRICE, PRICE_LABEL, PRODUCT } from "@/components/fundamentos/content";

export const metadata: Metadata = {
    title: { absolute: "Sua planilha está a caminho | Modelagem Financeira na Prática" },
    robots: { index: false, follow: false },
};

const ARQUIVO = "/materiais/modelo-integrado-simplificado.xlsx";

const INCLUDES = [
    "Módulo principal: as 3 demonstrações conectadas",
    "Capital de giro: prazos de clientes, fornecedores e estoques",
    "Módulos complementares com novas aulas",
    "Template do modelo integrado, bônus e certificado",
];

// Depois do cadastro: entrega na hora e a oferta do curso
export default function ObrigadoPage() {
    return (
        <div className={`mfp ${mfpFonts} flex min-h-screen flex-col`} style={{ "--product": "#f59e0b", background: "var(--snow)" } as React.CSSProperties}>
            <header className="border-b border-[var(--grid)] bg-white">
                <Container className="flex h-16 items-center">
                    <Link href="/" aria-label="Página inicial">
                        <Logo variant="dark" className="h-7 w-auto" />
                    </Link>
                </Container>
            </header>

            <main className="flex-1 py-14 text-[var(--ink)] sm:py-20">
                <Container className="max-w-3xl">
                    <div className="text-center">
                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--ok)]/10">
                            <EnvelopeSimple aria-hidden weight="duotone" className="h-7 w-7 text-[var(--ok)]" />
                        </span>
                        <h1 className="mt-6 text-balance text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.8rem]">
                            Pronto! A planilha está <Accent>no seu e-mail</Accent>
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--ink-2)]">
                            Enviamos de <b>contato@mfnapratica.com.br</b>. Se não aparecer em alguns minutos, olhe a caixa de spam ou promoções.
                        </p>
                        <a
                            href={ARQUIVO}
                            download
                            className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg px-5 font-semibold text-[var(--ink)] ring-1 ring-[var(--ink)]/25 transition-colors hover:bg-[var(--ink)] hover:text-white"
                        >
                            <DownloadSimple aria-hidden weight="bold" className="h-5 w-5" />
                            Baixar a planilha agora
                        </a>
                    </div>

                    {/* Oferta do Fundamentos */}
                    <section className="mt-16 overflow-hidden rounded-3xl bg-[var(--navy)] p-8 text-white sm:p-10">
                        <p className="text-sm font-semibold text-[var(--amber)]">Próximo passo</p>
                        <h2 className="mt-2 text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.3rem]">
                            Monte um modelo completo do zero, sabendo de onde vem cada número
                        </h2>
                        <p className="mt-4 max-w-xl leading-relaxed text-[var(--fg-2)]">
                            A planilha mostra a lógica pronta. No curso {PRODUCT} você constrói o modelo do zero, passo a passo, sabendo de onde vem cada número.
                        </p>
                        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                            {INCLUDES.map((i) => (
                                <li key={i} className="flex gap-2.5 text-[15px] leading-snug">
                                    <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--amber)]" />
                                    {i}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                            <CheckoutButton href={CHECKOUT_URL} section="obrigado_planilha" value={PRICE} product={PRODUCT} attention>
                                {BUY_LABEL}
                            </CheckoutButton>
                            <p className="text-[15px] text-[var(--fg-2)]">
                                {INSTALLMENT_COUNT} <strong className="text-[1.5em] font-bold text-white">{INSTALLMENT_VALUE}</strong> ou {PRICE_LABEL}.
                                Garantia de 7 dias.
                            </p>
                        </div>
                        <Link
                            href="/fundamentos?utm_source=site&utm_medium=obrigado&utm_campaign=planilha-modelo-integrado"
                            className="mt-6 inline-block font-semibold text-white underline decoration-[var(--amber)] decoration-2 underline-offset-4 hover:text-[var(--amber)]"
                        >
                            Ver tudo o que o curso inclui
                        </Link>
                    </section>
                </Container>
            </main>

            <MfpFooter />
        </div>
    );
}
