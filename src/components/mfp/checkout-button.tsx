"use client";

import { ArrowRight } from "lucide-react";
import { useUtmLink } from "@/hooks/use-utm-link";
import { trackCheckout } from "@/lib/tracking";
import { cn } from "@/lib/utils";

interface CheckoutButtonProps {
    href: string;
    section: string;
    value: number;
    product: string;
    size?: "sm" | "lg";
    className?: string;
    children: React.ReactNode;
}

// Botão de checkout em âmbar (cor da seta do logo): aplica UTMs/sck da visita e dispara begin_checkout
export function CheckoutButton({ href, section, value, product, size = "lg", className, children }: CheckoutButtonProps) {
    const url = useUtmLink(href);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener"
            onClick={() => trackCheckout(section, value, product)}
            className={cn(
                "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-[var(--amber)] font-semibold text-[var(--ink)] shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_10px_24px_-12px_rgba(245,158,11,0.7)] transition-colors hover:bg-[#fbb32e]",
                size === "lg" ? "h-14 px-7 text-[17px]" : "h-10 px-4 text-sm",
                className
            )}
        >
            {children}
            <ArrowRight aria-hidden className={cn("transition-transform group-hover:translate-x-0.5", size === "lg" ? "h-5 w-5" : "h-4 w-4")} />
        </a>
    );
}
