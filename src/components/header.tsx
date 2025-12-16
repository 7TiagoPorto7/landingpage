"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    if (pathname === "/") {
        return null;
    }

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 py-4 transition-all duration-300"
        >
            <div className="container px-4 mx-auto flex items-center justify-end gap-8">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        Blog
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="px-6 py-2.5 text-sm font-bold text-black rounded-full bg-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-white/10"
                    >
                        <div className="container px-4 py-6 flex flex-col gap-4">
                            <Link
                                href="/blog"
                                className="text-sm font-medium text-muted-foreground hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/login"
                                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-black rounded-full bg-primary hover:bg-primary/90"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
