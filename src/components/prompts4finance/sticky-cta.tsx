"use client"
import { useUtmLink } from "@/hooks/use-utm-link";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function StickyCTA() {
    const checkoutUrl = useUtmLink("https://pay.hotmart.com/P104814631L?off=8b3uxx2o");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Mostrar CTA apenas após rolar um pouco para baixo
            // (evitando conflito com o Hero CTA original)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 bg-background/90 backdrop-blur-lg border-t border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-5">
            <Link
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg active:scale-95 transition-transform"
            >
                QUERO MEU GUIA — R$ 29,90 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
    );
}
