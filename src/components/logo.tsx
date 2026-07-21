"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
    variant?: "full" | "icon" | "glowing";
    animate?: boolean;
    text?: string;
}

export function Logo({
    className = "h-8 w-auto",
    variant = "full",
    animate = true,
    text = "MFP Academy",
}: LogoProps) {
    // Unique ID for SVG gradients to prevent conflicts when multiple logos exist on page
    const idSuffix = React.useId().replace(/:/g, "");
    const gradientId = `mfp-logo-grad-${idSuffix}`;
    const glowId = `mfp-logo-glow-${idSuffix}`;

    const ribbonVariants = {
        hidden: { opacity: 0, scale: 0.92 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                delay: animate ? i * 0.18 : 0,
                ease: "easeOut" as const,
            },
        }),
    };

    return (
        <motion.div
            className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
            whileHover={animate ? { scale: 1.03 } : undefined}
            whileTap={animate ? { scale: 0.97 } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* SVG Logo Icon (3 Ribbons) */}
            <div className="relative flex items-center justify-center shrink-0">
                {/* Glow Backdrop */}
                {variant === "glowing" && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-teal-400/30 to-amber-500/30 blur-lg rounded-full"
                        animate={
                            animate
                                ? {
                                      opacity: [0.4, 0.8, 0.4],
                                      scale: [0.9, 1.1, 0.9],
                                  }
                                : undefined
                        }
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                )}

                <svg
                    viewBox="0 0 380 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-auto max-h-full overflow-visible drop-shadow-[0_2px_10px_rgba(20,184,166,0.25)]"
                    style={{ height: "100%", width: "auto" }}
                >
                    <defs>
                        {/* Shimmering Linear Gradient */}
                        <linearGradient
                            id={gradientId}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="45%" stopColor="#14B8A6" />
                            <stop offset="85%" stopColor="#F59E0B" />
                        </linearGradient>

                        {/* Soft Glow Filter */}
                        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Group containing the 3 flowing ribbons */}
                    <g filter={`url(#${glowId})`}>
                        {/* Ribbon 1 (Leftmost / Main Flow) */}
                        <motion.path
                            d="M 12 12 L 175 12 C 218 12 228 34 188 74 L 115 138 L 80 138 L 158 60 C 182 36 170 27 136 27 L 12 27 Z"
                            fill={`url(#${gradientId})`}
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={ribbonVariants}
                        />

                        {/* Ribbon 2 (Middle Flow) */}
                        <motion.path
                            d="M 202 12 C 245 12 255 34 215 74 L 142 138 L 107 138 L 185 60 C 209 36 197 27 163 27 L 154 27 L 167 12 Z"
                            fill={`url(#${gradientId})`}
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={ribbonVariants}
                        />

                        {/* Ribbon 3 (Rightmost Flow) */}
                        <motion.path
                            d="M 262 12 C 305 12 315 34 275 74 L 202 138 L 167 138 L 245 60 C 269 36 257 27 223 27 L 214 27 L 227 12 Z"
                            fill={`url(#${gradientId})`}
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={ribbonVariants}
                        />
                    </g>
                </svg>
            </div>

            {/* Typography (Full Variant) */}
            {variant !== "icon" && (
                <div className="flex items-center gap-1 font-black tracking-tight text-white leading-none whitespace-nowrap">
                    <span className="text-white font-extrabold">MFP</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-400 font-black">
                        {text.replace(/^MFP\s*/i, "") || "Academy"}
                    </span>
                </div>
            )}
        </motion.div>
    );
}

