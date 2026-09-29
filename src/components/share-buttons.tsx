"use client";

import { useState } from "react";
import { SITE_URL } from "@/lib/site";
import { Link as LinkIcon, Check, Twitter, Linkedin } from "lucide-react";

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const url = `${SITE_URL}/blog/${slug}`;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    const shareTwitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title
            )}&url=${encodeURIComponent(url)}`,
            "_blank"
        );
    };

    const shareLinkedin = () => {
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            "_blank"
        );
    };

    const btn =
        "p-2 rounded-lg bg-[var(--snow,#f5f7fb)] ring-1 ring-[var(--grid,#dbe2ec)] text-[var(--ink-2,#475569)] hover:text-[var(--ink,#0f172a)] hover:ring-[var(--amber,#f59e0b)] transition-all cursor-pointer";

    return (
        <div className="flex items-center gap-2">
            <button onClick={shareTwitter} className={btn} title="Compartilhar no Twitter/X">
                <Twitter className="w-4 h-4" />
            </button>
            <button onClick={shareLinkedin} className={btn} title="Compartilhar no LinkedIn">
                <Linkedin className="w-4 h-4" />
            </button>
            <button
                onClick={copyToClipboard}
                className={`${btn} flex items-center justify-center`}
                title="Copiar Link"
            >
                {copied ? (
                    <Check className="w-4 h-4 text-[var(--ok,#15803d)] animate-pulse" />
                ) : (
                    <LinkIcon className="w-4 h-4" />
                )}
            </button>
        </div>
    );
}
