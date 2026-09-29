"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { submitLead } from "@/lib/submit-lead";
import { trackLead } from "@/lib/tracking";

export function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        const ok = await submitLead(email, "newsletter-blog");
        if (ok) trackLead("blog_newsletter");
        setStatus(ok ? "done" : "error");
    };

    if (status === "done") {
        return (
            <p className="flex items-center gap-2 text-sm text-emerald-300">
                <Check className="w-4 h-4" />
                Inscrição confirmada. Você recebe os próximos artigos por e-mail.
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
                type="email"
                aria-label="Seu e-mail"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[var(--amber)]/60 focus:ring-1 focus:ring-[var(--amber)]/40 transition-all"
                required
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-xl bg-[var(--amber,#f59e0b)] text-[var(--ink,#0f172a)] font-bold text-sm hover:bg-[#fbb32e] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
            >
                <span>{status === "loading" ? "Enviando..." : "Inscrever-se"}</span>
                <ArrowRight className="w-4 h-4" />
            </button>
            {status === "error" && (
                <p role="alert" className="text-xs text-red-300 sm:basis-full">
                    Não conseguimos registrar seu e-mail. Tente de novo.
                </p>
            )}
        </form>
    );
}
