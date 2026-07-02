"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { gtagEvent } from "@/components/analytics";

const SK_BUY_URL = "#preco";

export function SKCTAFinal() {
    return (
        <section
            id="cta-final"
            className="py-24 bg-[#2F5496] relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-[#FFF2CC] font-semibold uppercase tracking-wider text-sm mb-4">
                        Comece agora
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Clareza financeira não é luxo.
                        <br />
                        <span className="text-[#FFF2CC]">É o mínimo.</span>
                    </h2>
                    <p className="text-white/70 text-xl mb-10">
                        Seu negócio merece mais do que achismo. Comece hoje.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        <Link
                            href={SK_BUY_URL}
                            id="final-cta"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#548235] hover:bg-[#F2F2F2] font-bold text-xl rounded-xl transition-all duration-200 shadow-xl"
                            onClick={() => gtagEvent("click_cta", { label: "Quero Meu Starter Kit", section: "final_cta", page: "starter-kit" })}
                        >
                            QUERO MEU STARTER KIT →
                        </Link>
                    </motion.div>

                    <p className="mt-6 text-white/50 text-sm flex items-center justify-center gap-2">
                        🔒 Garantia de 7 dias · Acesso imediato · Pagamento único
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
