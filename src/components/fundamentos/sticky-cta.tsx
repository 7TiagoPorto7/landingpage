"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CHECKOUT_URL = "https://pay.hotmart.com/F106435738T";

export function FundamentosStickyMobileCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
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
                    className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
                >
                    <div className="bg-white border-t border-slate-200 shadow-lg px-4 py-3">
                        <Link
                            href={CHECKOUT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 bg-gradient-to-r from-teal-600 to-cyan-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.35)] text-white font-bold text-base rounded-xl transition-all shadow-lg"
                        >
                            QUERO COMEÇAR — R$ 197 →
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
