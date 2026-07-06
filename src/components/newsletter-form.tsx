"use client";

import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                required
            />
            <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-primary text-slate-950 font-bold text-sm hover:bg-amber-400 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
                <span>Inscrever-se</span>
                <ArrowRight className="w-4 h-4" />
            </button>
        </form>
    );
}
