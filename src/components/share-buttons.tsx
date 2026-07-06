"use client";

import { useState } from "react";
import { Link as LinkIcon, Check, Twitter, Linkedin } from "lucide-react";

interface ShareButtonsProps {
    title: string;
    slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const url = `https://www.mfnapratica.com.br/blog/${slug}`;

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

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={shareTwitter}
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 hover:border-primary/20 text-neutral-400 hover:text-white transition-all cursor-pointer"
                title="Compartilhar no Twitter/X"
            >
                <Twitter className="w-4 h-4" />
            </button>
            <button
                onClick={shareLinkedin}
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 hover:border-primary/20 text-neutral-400 hover:text-white transition-all cursor-pointer"
                title="Compartilhar no LinkedIn"
            >
                <Linkedin className="w-4 h-4" />
            </button>
            <button
                onClick={copyToClipboard}
                className="p-2 rounded-lg bg-neutral-900 border border-white/5 hover:border-primary/20 text-neutral-400 hover:text-white transition-all flex items-center justify-center cursor-pointer"
                title="Copiar Link"
            >
                {copied ? (
                    <Check className="w-4 h-4 text-emerald-500 animate-pulse" />
                ) : (
                    <LinkIcon className="w-4 h-4" />
                )}
            </button>
        </div>
    );
}
