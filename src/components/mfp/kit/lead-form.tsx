"use client";

import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/tracking";
import { submitLead } from "@/lib/submit-lead";

// Formulário de e-mail para materiais gratuitos
export function LeadForm({
    fileId,
    source,
    button = "Quero receber",
    done = "E-mail registrado. O material chega na sua caixa de entrada.",
    dark = false,
    downloadHref,
    className,
}: {
    fileId: string;
    source: string;
    button?: string;
    done?: string;
    dark?: boolean;
    /** Se informado, o sucesso mostra o botão para baixar o arquivo na hora */
    downloadHref?: string;
    className?: string;
}) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        const ok = await submitLead(email, fileId);
        if (ok) trackLead(source);
        setStatus(ok ? "done" : "error");
    };

    if (status === "done" && downloadHref) {
        return (
            <div role="status" className={cn("flex flex-col items-start gap-3", className)}>
                <p className={cn("font-semibold", dark ? "text-[var(--amber)]" : "text-[var(--ok)]")}>✓ Pronto, seu download está liberado.</p>
                <a
                    href={downloadHref}
                    download
                    className="inline-flex h-14 items-center gap-2 rounded-lg bg-[var(--amber)] px-6 font-semibold text-[var(--ink)] hover:bg-[#fbb32e]"
                >
                    <Download aria-hidden className="h-5 w-5" />
                    Baixar agora
                </a>
            </div>
        );
    }

    if (status === "done") {
        return (
            <p role="status" className={cn("text-lg font-semibold", dark ? "text-[var(--amber)]" : "text-[var(--ok)]", className)}>
                ✓ {done}
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={cn("flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
            <label htmlFor={`email-${source}`} className="sr-only">
                Seu e-mail
            </label>
            <input
                id={`email-${source}`}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className={cn(
                    "h-14 flex-1 rounded-lg px-4 text-base outline-none",
                    dark
                        ? "border border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-[var(--amber)]"
                        : "border border-[var(--grid)] bg-white placeholder:text-[var(--ink-3)] focus:border-[var(--navy)]"
                )}
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[var(--amber)] px-6 font-semibold text-[var(--ink)] transition-colors hover:bg-[#fbb32e] disabled:opacity-60"
            >
                {status === "loading" ? "Enviando..." : button}
                <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
            {status === "error" && (
                <p role="alert" className={cn("text-sm sm:basis-full", dark ? "text-[#ff9a85]" : "text-[var(--pen)]")}>
                    Não conseguimos registrar seu e-mail. Tente de novo em instantes.
                </p>
            )}
        </form>
    );
}
