import React from "react";

interface LogoProps {
    className?: string;
}

export function Logo({ className = "w-8 h-8" }: LogoProps) {
    return (
        <svg
            viewBox="0 0 120 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M10,42 C25,42 33,26 43,8 C45,4 50,2 62,2" />
            <path d="M35,42 C50,42 58,26 68,8 C70,4 75,2 87,2" />
            <path d="M60,42 C75,42 83,26 93,8 C95,4 100,2 112,2" />
        </svg>
    );
}
