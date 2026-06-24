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
                    <div className="bg-black/95 backdrop-blur-md border-t border-white/10 shadow-2xl shadow-black/50 px-4 py-3">
                        <Link
                            href={CHECKOUT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-bold text-base rounded-xl transition-all shadow-lg shadow-cyan-500/20"
                        >
                            QUERO COMEÇAR — R$ 197 →
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
