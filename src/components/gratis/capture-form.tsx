"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/tracking";
import { submitLead } from "@/lib/submit-lead";

// Formulário de captura dos materiais gratuitos: nome + e-mail, depois vai para a página de obrigado
export function CaptureForm({ fileId, source, next, button = "Quero a planilha grátis" }: { fileId: string; source: string; next: string; button?: string }) {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        const ok = await submitLead(email.trim(), fileId, name.trim() || undefined);
        if (!ok) return setStatus("error");
        trackLead(source);
        router.push(next);
    };

    const field =
        "h-14 w-full rounded-lg border border-[var(--grid)] bg-white px-4 text-base text-[var(--ink)] outline-none placeholder:text-[var(--ink-3)] focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--amber)]/40";

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <label htmlFor={`nome-${source}`} className="sr-only">
                Seu primeiro nome
            </label>
            <input
                id={`nome-${source}`}
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu primeiro nome"
                className={field}
            />
            <label htmlFor={`email-${source}`} className="sr-only">
                Seu melhor e-mail
            </label>
            <input
                id={`email-${source}`}
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className={field}
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                    "cta-pop cta-glow group mt-1 inline-flex h-14 items-center justify-center gap-2.5 rounded-lg bg-[var(--amber)] px-6 text-[17px] font-semibold text-[var(--ink)] hover:bg-[#fbb32e] disabled:opacity-70",
                )}
            >
                {status === "loading" ? "Enviando..." : button}
                <ArrowRight aria-hidden weight="bold" className="cta-arrow h-5 w-5" />
            </button>
            {status === "error" && (
                <p role="alert" className="text-sm font-semibold text-[#b91c1c]">
                    Não deu para enviar agora. Confira o e-mail e tente de novo.
                </p>
            )}
            <p className="text-xs leading-relaxed text-[var(--ink-3)]">
                Ao enviar, você recebe a planilha e alguns e-mails sobre modelagem financeira. Dá para sair da lista a qualquer momento.{" "}
                <Link href="/legal" className="underline underline-offset-2 hover:text-[var(--ink)]">
                    Política de privacidade
                </Link>
                .
            </p>
        </form>
    );
}
