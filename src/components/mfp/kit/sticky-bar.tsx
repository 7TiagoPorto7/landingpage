"use client";

import { useEffect, useState } from "react";

// Barra fixa embaixo que aparece depois do topo (celular e desktop)
export function StickyBar({ name, shortName, price, action }: { name: string; shortName: string; price: string; action: React.ReactNode }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 700);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            aria-hidden={!visible}
            className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[var(--navy)]/95 px-4 py-3 text-white backdrop-blur transition-transform duration-300 ${
                visible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 sm:px-4">
                <div className="leading-tight">
                    <p className="text-sm font-semibold">
                        <span className="sm:hidden">{shortName}</span>
                        <span className="hidden sm:inline">{name}</span>
                    </p>
                    <p className="text-xs text-white/65">{price}</p>
                </div>
                {action}
            </div>
        </div>
    );
}
