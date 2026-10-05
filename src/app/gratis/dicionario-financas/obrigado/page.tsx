import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, DownloadSimple, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Container } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
    title: { absolute: "Seu dicionário está a caminho | Modelagem Financeira na Prática" },
    robots: { index: false, follow: false },
};

const ARQUIVO = "/dicionario-financas.xlsx";
const PRODUTO = "Template Pro";
const CHECKOUT = "https://pay.hotmart.com/N105779312S";
const PRECO = 97;

const INCLUDES = [
    "DRE, Balanço e Fluxo de Caixa integrados, com checagens",
    "DCF até o valor por ação, com sensibilidade 7×7",
    "Múltiplos, comparáveis, cenários e Monte Carlo",
    "Um guia em cada aba e trilha com exercícios",
];

// Depois do cadastro: entrega a planilha na hora e oferece o Template Pro
export default function ObrigadoDicionarioPage() {
    return (
        <div className={`mfp ${mfpFonts} flex min-h-screen flex-col`} style={{ "--product": "#6366f1", background: "var(--snow)" } as React.CSSProperties}>
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
                            Pronto! O dicionário está <Accent>no seu e-mail</Accent>
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
                            Baixar o dicionário agora (Excel)
                        </a>
                    </div>

                    {/* Oferta do Template Pro */}
                    <section className="mt-16 overflow-hidden rounded-3xl bg-[var(--navy)] p-8 text-white sm:p-10">
                        <p className="text-sm font-semibold text-[#a5b4fc]">Próximo passo</p>
                        <h2 className="mt-2 text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.3rem]">
                            Veja essas fórmulas funcionando juntas num modelo de verdade
                        </h2>
                        <p className="mt-4 max-w-xl leading-relaxed text-[var(--fg-2)]">
                            O dicionário explica cada indicador. O {PRODUTO} junta todos num modelo financeiro completo em Excel, aberto e sem macros, para você estudar e adaptar à sua empresa.
                        </p>
                        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                            {INCLUDES.map((i) => (
                                <li key={i} className="flex gap-2.5 text-[15px] leading-snug">
                                    <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-5 w-5 shrink-0 text-[#a5b4fc]" />
                                    {i}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                            <CheckoutButton href={CHECKOUT} section="obrigado_dicionario_financas" value={PRECO} product={PRODUTO} attention>
                                Comprar agora
                            </CheckoutButton>
                            <p className="text-[15px] text-[var(--fg-2)]">
                                <strong className="text-[1.5em] font-bold text-white">R$ 97</strong> · pagamento único
                            </p>
                        </div>
                        <Link
                            href="/template-pro?utm_source=site&utm_medium=obrigado&utm_campaign=dicionario-financas"
                            className="mt-6 inline-block font-semibold text-white underline decoration-[#6366f1] decoration-2 underline-offset-4 hover:text-[#a5b4fc]"
                        >
                            Ver tudo o que o Template Pro inclui
                        </Link>
                    </section>

                    {/* Depois do produto intermediário, o curso */}
                    <section className="mt-6 flex flex-col gap-4 rounded-3xl bg-white p-7 ring-1 ring-[var(--grid)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div>
                            <p className="font-semibold">Quer aprender a montar o modelo do zero?</p>
                            <p className="mt-1 max-w-md text-[15px] leading-relaxed text-[var(--ink-2)]">
                                No curso Fundamentos da Modelagem Financeira você liga DRE, Balanço e Fluxo de Caixa passo a passo. 12x de R$ 19,67.
                            </p>
                        </div>
                        <Link
                            href="/fundamentos?utm_source=site&utm_medium=obrigado&utm_campaign=dicionario-financas"
                            className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg px-5 font-semibold text-[var(--ink)] ring-1 ring-[var(--ink)]/25 transition-colors hover:bg-[var(--ink)] hover:text-white"
                        >
                            Conhecer o curso
                        </Link>
                    </section>
                </Container>
            </main>

            <MfpFooter />
        </div>
    );
}
