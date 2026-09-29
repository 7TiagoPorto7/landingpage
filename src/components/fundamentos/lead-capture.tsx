"use client";

import { useState } from "react";
import { trackLead } from "@/lib/tracking";
import { submitLead } from "@/lib/submit-lead";

export function FundamentosLeadCapture() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        const ok = await submitLead(email, "fundamentos-mapa-balanco");
        if (ok) trackLead("fundamentos_lead_section");
        setStatus(ok ? "done" : "error");
    };

    return (
        <div className="grid gap-8 rounded-[1.75rem] border border-white/10 bg-[var(--navy-2)] p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
                <h2 className="text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-3xl">
                    Ainda não é hora de comprar?
                </h2>
                <p className="mt-2 text-lg text-white/70">
                    Receba grátis o mapa de 1 página de como o Balanço fecha.
                </p>
            </div>

            {status === "done" ? (
                <p role="status" className="text-lg font-semibold text-[var(--amber)]">
                    ✓ E-mail registrado. O mapa chega na sua caixa de entrada.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <label htmlFor="lead-email" className="sr-only">
                        Seu e-mail
                    </label>
                    <input
                        id="lead-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-base text-white placeholder:text-white/40 focus:border-[var(--amber)]"
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="h-12 whitespace-nowrap rounded-full border border-white/25 px-6 font-semibold text-white transition-colors hover:bg-white hover:text-[var(--ink)] disabled:opacity-60"
                    >
                        {status === "loading" ? "Enviando..." : "Quero o mapa"}
                    </button>
                    {status === "error" && (
                        <p role="alert" className="text-sm text-[#ff9a85] sm:basis-full">
                            Não conseguimos registrar seu e-mail. Tente de novo em instantes.
                        </p>
                    )}
                </form>
            )}
        </div>
    );
}
