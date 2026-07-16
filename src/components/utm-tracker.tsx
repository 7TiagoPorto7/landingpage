"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function UtmTrackerInner() {
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!searchParams) return;

        const utms = [
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_term",
            "utm_content"
        ];

        let hasUtm = false;
        const utmData: Record<string, string> = {};

        utms.forEach((utm) => {
            const value = searchParams.get(utm);
            if (value) {
                utmData[utm] = value;
                hasUtm = true;
            }
        });

        // Se encontrou UTMs na URL, salva no sessionStorage
        // Assim, se o usuário navegar pra outra página, ainda sabemos a origem dele
        if (hasUtm) {
            sessionStorage.setItem("utm_data", JSON.stringify(utmData));
        }
    }, [searchParams]);

    return null;
}

export function UtmTracker() {
    return (
        <Suspense fallback={null}>
            <UtmTrackerInner />
        </Suspense>
    );
}
