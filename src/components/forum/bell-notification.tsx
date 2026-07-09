"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, MessageSquare, Heart } from "lucide-react";
import Link from "next/link";

interface Notification {
    id: number;
    type: "answer" | "like";
    sender_name: string;
    is_read: boolean;
    created_at: string;
    question_id: number;
    question_title: string;
}

interface BellNotificationProps {
    initialCount: number;
}

export function BellNotification({ initialCount }: BellNotificationProps) {
    const [unreadCount, setUnreadCount] = useState(initialCount);
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Fechar ao clicar fora
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    async function handleToggleDropdown() {
        if (!isOpen) {
            setIsOpen(true);
            setLoading(true);
            try {
                const res = await fetch("/api/forum/notifications");
                const data = await res.json();
                if (data.success) {
                    setNotifications(data.notifications);
                    // Se houver não lidas, zera o contador e marca todas como lidas
                    if (unreadCount > 0) {
                        setUnreadCount(0);
                        fetch("/api/forum/notifications", { method: "POST" });
                    }
                }
            } catch (err) {
                console.error("Erro ao carregar notificações:", err);
            } finally {
                setLoading(false);
            }
        } else {
            setIsOpen(false);
        }
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={handleToggleDropdown}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors relative cursor-pointer"
                aria-label="Notificações"
            >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#0d1322] dark:ring-white animate-pulse" />
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-[#0d1322] border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden text-left">
                    <div className="p-3 border-b border-slate-800 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">Notificações</span>
                        {unreadCount > 0 && (
                            <span className="text-[10px] bg-red-500/10 text-red-500 px-1.5 py-0.5 rounded font-black">
                                {unreadCount} Nova(s)
                            </span>
                        )}
                    </div>

                    <div className="max-h-64 overflow-y-auto divide-y divide-slate-800/40">
                        {loading ? (
                            <div className="p-4 text-center text-xs text-slate-500">Carregando...</div>
                        ) : notifications.length === 0 ? (
                            <div className="p-6 text-center text-xs text-slate-500">Nenhuma notificação por aqui.</div>
                        ) : (
                            notifications.map((notif) => (
                                <Link
                                    key={notif.id}
                                    href={`/forum/${notif.question_id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-start gap-2.5 p-3 hover:bg-slate-800/40 transition-colors text-xs ${!notif.is_read ? 'bg-blue-500/[0.03]' : ''}`}
                                >
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${notif.type === 'answer' ? 'bg-blue-500/10 text-blue-400' : 'bg-pink-500/10 text-pink-400'}`}>
                                        {notif.type === "answer" ? (
                                            <MessageSquare className="w-3.5 h-3.5" />
                                        ) : (
                                            <Heart className="w-3.5 h-3.5 fill-current" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-slate-300 leading-snug">
                                            <strong className="font-bold text-white">{notif.sender_name}</strong>{" "}
                                            {notif.type === "answer" ? "respondeu sua dúvida:" : "curtiu sua resposta em:"}
                                        </p>
                                        <p className="text-slate-400 truncate font-semibold mt-0.5">
                                            "{notif.question_title}"
                                        </p>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
