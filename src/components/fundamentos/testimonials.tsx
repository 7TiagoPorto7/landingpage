import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { cn } from "@/lib/utils";
import { TESTIMONIALS, type Testimonial } from "./content";

// Só no computador do desenvolvedor: mostra o layout enquanto não há depoimentos reais
const EXEMPLOS: Testimonial[] = Array.from({ length: 6 }, (_, i) => ({
    name: `Nome do aluno ${i + 1}`,
    role: "Cargo e empresa",
    highlight: "Frase de destaque tirada do próprio depoimento",
    text: "Exemplo de depoimento. Troque por um texto real enviado por um aluno, com a autorização dele para publicar.",
}));

// Cores das iniciais, para os cartões não ficarem todos iguais
const AVATAR = ["#f59e0b", "#3b82f6", "#10b981", "#8b5cf6", "#06b6d4", "#f43f5e"];

function Card({ t, i, exemplo }: { t: Testimonial; i: number; exemplo: boolean }) {
    const cor = AVATAR[i % AVATAR.length];
    return (
        <figure
            className={cn(
                "mb-5 flex break-inside-avoid flex-col rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(7,13,36,0.06),0_12px_32px_-16px_rgba(7,13,36,0.18)] ring-1 ring-[var(--grid)]",
                exemplo && "border-2 border-dashed border-[var(--amber)]/60",
            )}
        >
            {exemplo && <p className="mb-3 text-xs font-semibold text-[#b45309]">Exemplo, não aparece no site publicado</p>}

            <figcaption className="flex items-center gap-3">
                <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
                    style={{ backgroundColor: cor }}
                >
                    {t.name.trim().charAt(0).toUpperCase()}
                </span>
                <span className="min-w-0">
                    <span className="block font-semibold leading-tight text-[var(--ink)]">{t.name}</span>
                    {t.role && <span className="block text-sm text-[var(--ink-2)]">{t.role}</span>}
                </span>
                <Quotes aria-hidden weight="fill" className="ml-auto h-7 w-7 shrink-0 text-[var(--amber)]/80" />
            </figcaption>

            {t.highlight && <p className="mt-6 text-xl font-semibold leading-snug tracking-[-0.01em] text-[var(--ink)]">“{t.highlight}”</p>}

            {t.image && (
                <Image
                    src={t.image.src}
                    width={t.image.width}
                    height={t.image.height}
                    alt={t.image.alt}
                    className="mt-5 h-auto w-full rounded-xl ring-1 ring-[var(--grid)]"
                />
            )}

            {t.text && <blockquote className="mt-4 text-[15.5px] leading-[1.7] text-[var(--ink-2)]">{t.text}</blockquote>}

        </figure>
    );
}

export function Testimonials() {
    const exemplo = TESTIMONIALS.length === 0;
    if (exemplo && process.env.NODE_ENV === "production") return null;
    const items = exemplo ? EXEMPLOS : TESTIMONIALS;

    return (
        <Band tone="snow" id="depoimentos">
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
                <div className="gap-5 md:columns-2 lg:columns-3">
                    {items.map((t, i) => (
                        <Card key={t.name} t={t} i={i} exemplo={exemplo} />
                    ))}
                </div>
            </Container>
        </Band>
    );
}
