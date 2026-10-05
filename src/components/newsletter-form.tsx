"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { submitLead } from "@/lib/submit-lead";
import { trackLead } from "@/lib/tracking";

export const NEWSLETTER_THANKS = "/blog/inscricao-confirmada";

// Inscrição na newsletter do blog (lista 6 do Brevo). Depois do envio, vai para a página de obrigado.
export function NewsletterForm({ source = "blog_newsletter", button = "Inscrever-se" }: { source?: string; button?: string }) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        const ok = await submitLead(email, "newsletter-blog");
        if (!ok) return setStatus("error");
        trackLead(source);
        router.push(NEWSLETTER_THANKS);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <input
                type="email"
                aria-label="Seu e-mail"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 transition-all focus:border-[var(--amber)]/60 focus:outline-none focus:ring-1 focus:ring-[var(--amber)]/40"
                required
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[var(--amber,#f59e0b)] px-6 py-3 text-sm font-bold text-[var(--ink,#0f172a)] transition-all hover:bg-[#fbb32e] active:scale-[0.98] disabled:opacity-60"
            >
                <span>{status === "loading" ? "Enviando..." : button}</span>
                <ArrowRight className="h-4 w-4" />
            </button>
            {status === "error" && (
                <p role="alert" className="text-xs text-red-300 sm:basis-full">
                    Não conseguimos registrar seu e-mail. Tente de novo.
                </p>
            )}
        </form>
    );
}
