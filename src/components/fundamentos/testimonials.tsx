import { Accent, Band, Container, SectionTitle } from "@/components/mfp/ui";
import { TESTIMONIALS, type Testimonial } from "./content";
import { TestimonialCarousel } from "./testimonial-carousel";

// Só no computador do desenvolvedor: mostra o layout enquanto não há depoimentos reais
const EXEMPLOS: Testimonial[] = Array.from({ length: 6 }, (_, i) => ({
    name: `Nome do aluno ${i + 1}`,
    role: "Cargo e empresa",
    highlight: "Frase de destaque tirada do próprio depoimento",
    text: "Exemplo de depoimento. Troque por um texto real enviado por um aluno, com a autorização dele para publicar.",
}));

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
                    className="mb-12"
                />
                <TestimonialCarousel items={items} exemplo={exemplo} />
            </Container>
        </Band>
    );
}
