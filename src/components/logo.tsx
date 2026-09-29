"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
}

export function Logo({ className = "h-8 w-auto" }: LogoProps) {
    return (
        <motion.img
            src="/logo-mfp.png"
            alt="Modelagem Financeira na Prática"
            className={className}
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            transition={{ duration: 0.2 }}
        />
    );
}

