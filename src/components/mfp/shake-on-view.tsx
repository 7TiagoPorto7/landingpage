"use client";

import { useEffect, useRef, useState } from "react";

// Treme o conteúdo de leve quando ele entra na tela rolando para baixo
export function ShakeOnView({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [shaking, setShaking] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let timer: ReturnType<typeof setTimeout>;
        let lastY = window.scrollY;
        const io = new IntersectionObserver(
            ([e]) => {
                const descendo = window.scrollY >= lastY;
                lastY = window.scrollY;
                if (!e.isIntersecting || !descendo) return;
                clearTimeout(timer);
                setShaking(false);
                // Espera um instante para o botão estar bem visível antes de tremer
                timer = setTimeout(() => {
                    setShaking(true);
                    timer = setTimeout(() => setShaking(false), 800);
                }, 250);
            },
            { threshold: 1 },
        );
        io.observe(el);
        return () => {
            io.disconnect();
            clearTimeout(timer);
        };
    }, []);

    return (
        <div ref={ref} className={`${shaking ? "cta-shake" : ""} ${className ?? ""}`}>
            {children}
        </div>
    );
}
