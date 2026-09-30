"use client";

import { useEffect, useState } from "react";
import { CheckoutButton } from "@/components/mfp/checkout-button";
import { BUY_LABEL, CHECKOUT_URL, INSTALLMENT_LABEL, PRICE, PRICE_LABEL, PRODUCT } from "./content";

// Barra de compra fixa embaixo depois que a pessoa passa do topo (celular e desktop)
export function FundamentosStickyCTA() {
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
                    <p className="text-sm font-semibold"><span className="sm:hidden">Curso Fundamentos</span><span className="hidden sm:inline">{PRODUCT}</span></p>
                    <p className="text-xs text-white/65">{INSTALLMENT_LABEL} ou {PRICE_LABEL}</p>
                </div>
                <CheckoutButton href={CHECKOUT_URL} section="sticky_mobile" value={PRICE} product={PRODUCT} size="sm">
                    {BUY_LABEL}
                </CheckoutButton>
            </div>
        </div>
    );
}
