"use client";

import { useEffect, useRef } from "react";
import { gtagEvent } from "@/components/analytics";

/**
 * Hook que rastreia a profundidade de scroll da página.
 * Dispara eventos GA nos marcos de 25%, 50%, 75% e 100%.
 * Cada marco é disparado apenas uma vez por sessão.
 */
export function useScrollDepthTracking() {
    const milestones = useRef(new Set<number>());

    useEffect(() => {
        const thresholds = [25, 50, 75, 100];

        function getScrollPercent(): number {
            const el = document.documentElement;
            const scrollTop = window.scrollY || el.scrollTop;
            const scrollHeight = el.scrollHeight - el.clientHeight;
            if (scrollHeight <= 0) return 100;
            return Math.round((scrollTop / scrollHeight) * 100);
        }

        function handleScroll() {
            const percent = getScrollPercent();
            for (const threshold of thresholds) {
                if (percent >= threshold && !milestones.current.has(threshold)) {
                    milestones.current.add(threshold);
                    gtagEvent("scroll_depth", {
                        percent_scrolled: threshold,
                        page: window.location.pathname,
                    });
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
}
