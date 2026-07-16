"use client";

import { useEffect, useState } from "react";

export function useUtmLink(baseUrl: string) {
    const [url, setUrl] = useState(baseUrl);

    useEffect(() => {
        try {
            const utmStr = sessionStorage.getItem("utm_data");
            if (utmStr) {
                const utmData = JSON.parse(utmStr);
                const urlObj = new URL(baseUrl);
                Object.keys(utmData).forEach((key) => {
                    urlObj.searchParams.set(key, utmData[key]);
                });
                setUrl(urlObj.toString());
            }
        } catch (e) {
            console.error("Error applying UTMs to link:", e);
        }
    }, [baseUrl]);

    return url;
}
