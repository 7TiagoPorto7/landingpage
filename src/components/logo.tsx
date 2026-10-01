"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
    /** "dark": letras azul-marinho sem fundo, para barras claras */
    variant?: "light" | "dark";
}

export function Logo({ className = "h-8 w-auto", variant = "light" }: LogoProps) {
    return (
        <motion.img
            src={variant === "dark" ? "/logo-mfp-dark.png" : "/logo-mfp.png"}
            alt="Modelagem Financeira na Prática"
            className={className}
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            transition={{ duration: 0.2 }}
        />
    );
}

