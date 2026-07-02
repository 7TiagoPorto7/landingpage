"use client";

import { useScrollDepthTracking } from "@/hooks/use-scroll-depth";

/**
 * Componente client-side que ativa o rastreamento de scroll depth.
 * Deve ser incluído no layout raiz.
 */
export function ScrollTracker() {
    useScrollDepthTracking();
    return null;
}
