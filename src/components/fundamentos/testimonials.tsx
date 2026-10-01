import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { cn } from "@/lib/utils";
import { TESTIMONIALS, type Testimonial } from "./content";

// Só no computador do desenvolvedor: mostra o layout enquanto não há depoimentos reais
const EXEMPLOS: Testimonial[] = Array.from({ length: 6 }, (_, i) => ({
    name: `Nome do aluno ${i + 1}`,
    role: "Cargo e empresa",
    text:
        i % 2 === 0
            ? "Exemplo de depoimento. Troque por um texto real enviado por um aluno, com a autorização dele para publicar."
            : "Exemplo de depoimento mais curto. Pode ser um print de WhatsApp ou da avaliação na Hotmart.",
}));

function Card({ t, exemplo }: { t: Testimonial; exemplo: boolean }) {
    return (
        <figure className={cn("mb-4 break-inside-avoid rounded-2xl bg-[var(--snow)] p-6 ring-1 ring-[var(--grid)]", exemplo && "border-2 border-dashed border-[var(--amber)]/60")}>
            {exemplo && <p className="mb-3 text-xs font-semibold text-[var(--amber)]">Exemplo, não aparece no site publicado</p>}
            {t.image && (
                <Image src={t.image.src} width={t.image.width} height={t.image.height} alt={t.image.alt} className="mb-4 h-auto w-full rounded-xl ring-1 ring-[var(--grid)]" />
            )}
            {t.text && (
                <blockquote className="flex gap-3 text-[17px] leading-relaxed text-[var(--ink)]">
                    <Quotes aria-hidden weight="fill" className="h-6 w-6 shrink-0 text-[var(--amber)]" />
                    <p>{t.text}</p>
                </blockquote>
            )}
            <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-semibold text-[var(--amber)]">
                    {t.name.trim().charAt(0).toUpperCase()}
                </span>
                <span>
                    <span className="block font-semibold">{t.name}</span>
                    {t.role && <span className="block text-sm text-[var(--ink-2)]">{t.role}</span>}
                </span>
            </figcaption>
        </figure>
    );
}

export function Testimonials() {
    const exemplo = TESTIMONIALS.length === 0;
    if (exemplo && process.env.NODE_ENV === "production") return null;
    const items = exemplo ? EXEMPLOS : TESTIMONIALS;

    return (
        <Band tone="white" id="depoimentos">
            <Container>
                <SectionTitle
                    center
                    title={
                        <>
                            Quem fez, <Accent>recomenda</Accent>
                        </>
                    }
                    lead="Mensagens que alunos do Fundamentos mandaram no WhatsApp."
                    className="mb-14"
                />
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                    {items.map((t) => (
                        <Card key={t.name} t={t} exemplo={exemplo} />
                    ))}
                </div>
            </Container>
        </Band>
    );
}
