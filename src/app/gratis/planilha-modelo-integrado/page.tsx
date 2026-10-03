import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { mfpFonts } from "@/lib/fonts";
import { Accent, Container } from "@/components/mfp/ui";
import { MfpFooter } from "@/components/mfp/footer";
import { Backdrop } from "@/components/mfp/backdrop";
import { BalanceCheck } from "@/components/mfp/balance-check";
import { CaptureForm } from "@/components/gratis/capture-form";
import { Logo } from "@/components/logo";

const TITLE = "Planilha grátis: DRE, Balanço e Fluxo de Caixa ligados";
const DESCRIPTION = "Baixe grátis um modelo financeiro simplificado em Excel com DRE, Balanço e Fluxo de Caixa conectados e checagem automática de fechamento.";

export const metadata: Metadata = {
    title: { absolute: `${TITLE} | Modelagem Financeira na Prática` },
    description: DESCRIPTION,
    alternates: { canonical: "/gratis/planilha-modelo-integrado" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: "/gratis/planilha-modelo-integrado" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const POINTS = [
    "DRE, Balanço e Fluxo de Caixa de 3 anos, já conectados",
    "Aba de checagem que avisa na hora se o Balanço não fecha",
    "Premissas em azul: mude a receita, os custos e os prazos e veja tudo se mover",
];

// Página de captura: sem menu nem links de saída, o único caminho é o formulário
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

            <main className="relative flex-1 overflow-hidden text-[var(--ink)]">
                <Backdrop tone="light" />
                <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 [&>*]:min-w-0">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full bg-[var(--amber)]/15 px-3 py-1 text-sm font-semibold text-[#b45309]">
                            Planilha gratuita em Excel
                        </p>
                        <h1 className="mt-5 text-balance text-[2.3rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl">
                            O modelo que liga DRE, Balanço e Caixa <Accent>e fecha sozinho</Accent>
                        </h1>
                        <ul className="mt-8 space-y-3">
                            {POINTS.map((p) => (
                                <li key={p} className="flex gap-3 text-lg leading-snug text-[var(--ink-2)]">
                                    <CheckCircle aria-hidden weight="fill" className="mt-0.5 h-6 w-6 shrink-0 text-[var(--amber)]" />
                                    {p}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 max-w-md rounded-2xl bg-white p-6 shadow-[0_24px_48px_-28px_rgba(7,13,36,0.45)] ring-1 ring-[var(--grid)]">
                            <p className="mb-4 font-semibold">Receba a planilha no seu e-mail</p>
                            <CaptureForm
                                fileId="planilha-modelo-integrado"
                                source="gratis_planilha_modelo_integrado"
                                next="/gratis/planilha-modelo-integrado/obrigado"
                            />
                        </div>
                    </div>

                    <div>
                        <BalanceCheck />
                        <p className="mt-4 text-center text-sm text-[var(--ink-3)]">
                            A aba de checagem da planilha: quando o lucro chega ao patrimônio, a diferença vai a zero.
                        </p>
                    </div>
                </Container>
            </main>

            <MfpFooter />
        </div>
    );
}
