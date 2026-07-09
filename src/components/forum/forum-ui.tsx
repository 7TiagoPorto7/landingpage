"use client";

import { TAG_COLORS, FORUM_TAGS } from "@/lib/forum-constants";

export { FORUM_TAGS };

interface UserAvatarProps {
    name: string;
    avatarUrl?: string | null;
    size?: "sm" | "md" | "lg";
}

export function UserAvatar({ name, avatarUrl, size = "md" }: UserAvatarProps) {
    const initials = name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase() || "")
        .join("");

    const sizeClasses = {
        sm: "w-7 h-7 text-[10px]",
        md: "w-9 h-9 text-xs",
        lg: "w-12 h-12 text-sm",
    };

    if (avatarUrl) {
        return (
            <div className={`${sizeClasses[size]} rounded-full overflow-hidden shrink-0 shadow-sm border border-slate-700 bg-slate-800`}>
                <img
                    src={avatarUrl}
                    alt={`Foto de ${name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        // Se falhar ao carregar a imagem, remover para mostrar as iniciais
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />
            </div>
        );
    }

    const colors = [
        "from-amber-400 to-orange-500",
        "from-violet-400 to-purple-600",
        "from-blue-400 to-cyan-500",
        "from-green-400 to-emerald-500",
        "from-pink-400 to-rose-500",
        "from-indigo-400 to-blue-600",
    ];
    const colorIndex = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % colors.length;

    return (
        <div
            className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center font-bold text-slate-950 shrink-0 shadow-sm`}
            aria-label={`Avatar de ${name}`}
        >
            {initials}
        </div>
    );
}


interface TagBadgeProps {
    tag: string;
    onClick?: () => void;
    active?: boolean;
}

export function TagBadge({ tag, onClick, active }: TagBadgeProps) {
    const colorClass = TAG_COLORS[tag] || "bg-slate-500/15 text-slate-300 border-slate-500/30";
    const activeClass = active ? "ring-1 ring-current" : "";

    return (
        <span
            role={onClick ? "button" : undefined}
            onClick={onClick}
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${colorClass} ${activeClass} ${onClick ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}`}
        >
            {tag}
        </span>
    );
}
