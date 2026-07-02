"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { gtagEvent } from "@/components/analytics";

const SK_BUY_URL = "#preco";

export function SKStickyMobileCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"
                }`}
        >
            <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
                <Link
                    href={SK_BUY_URL}
                    id="sticky-mobile-cta"
                    className="block w-full text-center py-4 bg-[#548235] hover:bg-[#4a7230] text-white font-bold text-base rounded-xl transition-all"
                    onClick={() => gtagEvent("click_cta", { label: "Quero Meu Starter Kit", section: "sticky_mobile", page: "starter-kit" })}
                >
                    QUERO MEU STARTER KIT →
                </Link>
            </div>
        </div>
    );
}
