"use client";

import { useSyncExternalStore } from "react";
import { getDecoratedCheckoutUrl } from "@/lib/tracking";

const subscribe = () => () => {};

// Link de checkout com as UTMs da visita. No servidor devolve o link puro.
export function useUtmLink(baseUrl: string) {
    return useSyncExternalStore(
        subscribe,
        () => getDecoratedCheckoutUrl(baseUrl),
        () => baseUrl
    );
}
