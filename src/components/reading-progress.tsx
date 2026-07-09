"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                setProgress((scrollPosition / totalHeight) * 100);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-16 left-0 h-[2px] bg-blue-500 z-50 transition-all duration-75"

            style={{ width: `${progress}%` }}
        />
    );
}
