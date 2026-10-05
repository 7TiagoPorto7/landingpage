"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { trackLead } from "@/lib/tracking";

const FIELDS = [
    { name: "name", label: "Nome", type: "text", autoComplete: "name", required: true },
    { name: "email", label: "E-mail", type: "email", autoComplete: "email", required: true },
    { name: "phone", label: "WhatsApp", type: "tel", autoComplete: "tel", required: false },
    { name: "company", label: "Empresa", type: "text", autoComplete: "organization", required: false },
] as const;

const input =
    "w-full border-0 border-b border-white/20 bg-transparent px-0 pb-2.5 pt-1 text-[16px] text-white placeholder-white/30 transition-colors focus:border-white focus:outline-none focus:ring-0";

// Formulário de contato da consultoria: grava em /api/consultoria e mostra a confirmação no lugar
export function ConsultoriaForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        let utm = {};
        try {
            utm = JSON.parse(sessionStorage.getItem("utm_data") ?? "{}");
        } catch {}
        try {
            const res = await fetch("/api/consultoria", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...utm, ...Object.fromEntries(new FormData(e.currentTarget)) }),
            });
            if (!res.ok) return setStatus("error");
            trackLead("consultoria");
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    };

    if (status === "sent") {
        return (
            <div role="status" className="py-10">
                <CheckCircle aria-hidden weight="thin" className="h-14 w-14 text-[var(--amber)]" />
                <p className="mt-6 text-3xl font-medium tracking-[-0.02em] text-white">Mensagem recebida.</p>
                <p className="mt-3 max-w-sm leading-relaxed text-white/60">Vamos ler com atenção e responder no e-mail que você informou.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {FIELDS.map((f) => (
                <label key={f.name} className="block">
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/50">
                        {f.label}
                        {!f.required && <span className="normal-case tracking-normal text-white/30"> (opcional)</span>}
                    </span>
                    <input name={f.name} type={f.type} autoComplete={f.autoComplete} required={f.required} className={`mt-2 ${input}`} />
                </label>
            ))}
            <label className="block sm:col-span-2">
                <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/50">Observação</span>
                <textarea
                    name="message"
                    rows={4}
                    placeholder="Conte o que você precisa: o tipo de modelo, o objetivo e o prazo."
                    className={`mt-2 resize-none ${input}`}
                />
            </label>
            {/* Armadilha para robôs: escondida de pessoas e leitores de tela */}
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex h-14 cursor-pointer items-center justify-center gap-3 bg-white px-8 text-[15px] font-semibold text-[#1c1d20] transition-colors hover:bg-[var(--amber)] disabled:opacity-60"
                >
                    {status === "loading" ? "Enviando..." : "Solicitar contato"}
                    <ArrowRight aria-hidden weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[13px] leading-snug text-white/40 sm:max-w-[15rem] sm:text-right">Seus dados são usados só para responder a este contato.</p>
            </div>
            {status === "error" && (
                <p role="alert" className="text-sm text-red-300 sm:col-span-2">
                    Não conseguimos enviar agora. Tente de novo em alguns instantes.
                </p>
            )}
        </form>
    );
}
