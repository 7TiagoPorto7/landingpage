import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookA, FileSpreadsheet, Search } from "lucide-react";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { FeatureCards, ProductHeader, ProductHero, ProductShell } from "@/components/mfp/kit/layout";
import { LeadForm } from "@/components/mfp/kit/lead-form";
import { VisualFrame } from "@/components/mfp/visuals/frame";
import { PRODUCTS } from "@/lib/products";

const TITLE = "Dicionário de Finanças Corporativas grátis";
const DESCRIPTION = "Baixe grátis a planilha com os principais termos de finanças corporativas explicados de forma clara e objetiva.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/downloads" },
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website", locale: "pt_BR", url: "/downloads" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const SAMPLE = [
    ["EBITDA", "Lucro antes de juros, impostos, depreciação e amortização. Mostra a geração de caixa da operação."],
    ["Capital de giro", "Recursos para financiar a operação: estoques e clientes menos fornecedores."],
    ["WACC", "Custo médio ponderado do capital, usado como taxa de desconto no DCF."],
    ["Payback", "Tempo para o investimento se pagar com o caixa que ele gera."],
];

export default function DownloadsPage() {
    const paid = PRODUCTS.filter((p) => p.kind !== "gratuito");
    return (
        <ProductShell accent="#6366f1">
            <ProductHeader
                product="Dicionário de Finanças"
                action={
                    <a href="#baixar" className="inline-flex h-10 items-center rounded-lg bg-[var(--amber)] px-4 text-sm font-semibold text-[var(--ink)] hover:bg-[#fbb32e]">
                        Baixar grátis
                    </a>
                }
            />
            <main>
                <ProductHero
                    eyebrow="Material gratuito"
                    title={
                        <>
                            Dicionário de Finanças <Accent>Corporativas.</Accent>
                        </>
                    }
                    lead="Os principais termos de finanças corporativas explicados de forma clara, numa planilha para consultar quando precisar."
                    points={["Arquivo em Excel", "Para estudantes e profissionais", "Download na hora"]}
                    actions={
                        <div id="baixar" className="scroll-mt-24">
                            <LeadForm fileId="dicionario-financas" source="downloads_dicionario" button="Baixar grátis" downloadHref="/dicionario-financas.xlsx" />
                            <p className="mt-3 text-sm text-[var(--ink-3)]">Gratuito. Você pode cancelar o recebimento de e-mails quando quiser.</p>
                        </div>
                    }
                    visual={
                        <VisualFrame title="Dicionario_Financas.xlsx" note="Ilustração com exemplos de termos">
                            <dl className="divide-y divide-[var(--grid)]">
                                {SAMPLE.map(([k, v]) => (
                                    <div key={k} className="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-4">
                                        <dt className="font-semibold">{k}</dt>
                                        <dd className="leading-snug text-[var(--ink-2)]">{v}</dd>
                                    </div>
                                ))}
                            </dl>
                        </VisualFrame>
                    }
                />

                <Band tone="white">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Para ter <Accent>sempre à mão</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <FeatureCards
                            items={[
                                { icon: BookA, title: "Termos explicados", text: "Definições diretas, sem jargão, para entender e explicar." },
                                { icon: Search, title: "Fácil de consultar", text: "Uma planilha organizada para filtrar e achar o termo rápido." },
                                { icon: FileSpreadsheet, title: "No seu computador", text: "Baixe o arquivo em Excel e use offline." },
                            ]}
                        />
                    </Container>
                </Band>

                <Band tone="mist">
                    <Container>
                        <SectionTitle
                            title={
                                <>
                                    Quer ir <Accent>além do glossário?</Accent>
                                </>
                            }
                            className="mb-12"
                        />
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {paid.map((p) => (
                                <Link key={p.slug} href={p.href} className="group rounded-2xl bg-white p-6 ring-1 ring-[var(--grid)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]">
                                    <p className="font-semibold leading-snug group-hover:text-[var(--blue-2)]">{p.name}</p>
                                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-2)]">{p.summary}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                                        Saiba mais
                                        <ArrowUpRight aria-hidden className="h-4 w-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </Band>
            </main>
        </ProductShell>
    );
}
