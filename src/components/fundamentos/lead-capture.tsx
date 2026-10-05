import { NewsletterForm } from "@/components/newsletter-form";

// Para quem ainda não vai comprar: entra na newsletter do blog, que termina no convite do Fundamentos
export function FundamentosLeadCapture() {
    return (
        <div className="grid gap-8 rounded-[1.75rem] border border-white/10 bg-[var(--navy-2)] p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
                <h2 className="text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-3xl">Ainda não é hora de comprar?</h2>
                <p className="mt-2 text-lg text-white/70">
                    Receba por e-mail os principais artigos do blog, numa sequência que vai dos demonstrativos ao modelo financeiro.
                </p>
            </div>
            <NewsletterForm source="fundamentos_newsletter" button="Quero receber" />
        </div>
    );
}
