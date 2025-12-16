"use client";

import { motion } from "framer-motion";

export function MazeGrid() {
    // Generate a grid of paths to simulate a maze/circuit forming
    // We'll use a few random-looking paths for the "maze" effect

    const paths = [
        "M0 0 H20 V20 H40 V40 H60 V60 H80",
        "M100 0 V20 H80 V40 H60 V80 H40",
        "M0 100 H20 V80 H40 V60 H80 V40",
        "M100 100 V80 H80 V60 H60 V20 H40",
        "M50 0 V100",
        "M0 50 H100",
        // Add more complex paths
        "M10 10 H30 V30 H10 Z",
        "M70 70 H90 V90 H70 Z",
        "M30 30 H70 V70 H30 Z"
    ];

    return (
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {paths.map((d, i) => (
                    <motion.path
                        key={i}
                        d={d}
                        fill="transparent"
                        stroke="url(#maze-gradient)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 1
                        }}
                    />
                ))}
                <defs>
                    <linearGradient id="maze-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                        <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Overlay for fade effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>
    );
}
