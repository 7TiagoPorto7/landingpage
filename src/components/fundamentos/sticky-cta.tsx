"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDecoratedCheckoutUrl, trackCheckout } from "@/lib/tracking";

export function FundamentosStickyMobileCTA() {
    const [visible, setVisible] = useState(false);
    const [checkoutUrl, setCheckoutUrl] = useState("https://pay.hotmart.com/F106435738T");

    useEffect(() => {
        setCheckoutUrl(getDecoratedCheckoutUrl());

        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-auto"
                >
                    <div className="bg-[#0D1935]/95 backdrop-blur-md border-t border-teal-500/30 shadow-2xl px-4 py-3 text-center">
                        <a
                            href={checkoutUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-black text-base rounded-xl transition-all shadow-lg active:scale-95"
                            onClick={() => trackCheckout("sticky_mobile", 197)}
                        >
                            QUERO COMEÇAR — R$ 197 →
                        </a>
                        <span className="text-[10px] text-slate-400 mt-1 block">ou 12x de R$ 19,70 · Compra Segura</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
