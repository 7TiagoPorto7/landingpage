"use client";

import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

    if (pathname === "/") {
        return null;
    }

    // Header mantido sem navegação para preservar o espaçamento e layout
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 py-4 transition-all duration-300"
        >
            <div className="container px-4 mx-auto flex items-center justify-end gap-8">
                {/* Navigation removed */}
            </div>
        </header>
    );
}
