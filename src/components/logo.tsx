import React from "react";

interface LogoProps {
    className?: string;
}

export function Logo({ className = "h-6 w-auto" }: LogoProps) {
    return (
        <img
            src="/logo-mfp.png"
            alt="MFP Education"
            className={className}
        />
    );
}

