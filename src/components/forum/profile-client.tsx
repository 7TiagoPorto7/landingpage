"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle, LogOut, Save } from "lucide-react";

interface ProfileClientProps {
    initialName: string;
    initialAvatarUrl: string;
}

const PRESET_AVATARS = [
    { name: "Analista", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    { name: "Trader", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
    { name: "Associada", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
    { name: "Diretor", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { name: "Consultora", url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
    { name: "Sócio", url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" },
];

export function ProfileClient({ initialName, initialAvatarUrl }: ProfileClientProps) {
    const router = useRouter();

    const [name, setName] = useState(initialName);
    const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loggingOut, setLoggingOut] = useState(false);

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        if (!name.trim()) {
            setError("O nome é obrigatório.");
            return;
        }

        setSaving(true);
        setError("");
        setSuccess("");

        try {
            const res = await fetch("/api/forum/profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, avatarUrl }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Erro ao salvar alterações.");
            } else {
                setSuccess("Perfil atualizado com sucesso!");
                router.refresh();
            }
        } catch {
            setError("Erro de rede ao salvar.");
        } finally {
            setSaving(false);
        }
    }

    async function handleLogout() {
        if (loggingOut) return;
        setLoggingOut(true);

        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
            });

            if (res.ok) {
                router.push("/forum");
                router.refresh();
            }
        } catch {
            alert("Erro ao fazer logout.");
        } finally {
            setLoggingOut(false);
        }
    }

    return (
        <div className="space-y-6">
            <form onSubmit={handleSave} className="space-y-4">
                {/* Nome */}
                <div>
                    <label htmlFor="profile-name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        Nome de Exibição
                    </label>
                    <input
                        id="profile-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-amber-500/40 transition-colors"
                        required
                    />
                </div>

                {/* URL da Foto */}
                <div>
                    <label htmlFor="profile-avatar" className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        URL da Foto de Perfil
                    </label>
                    <input
                        id="profile-avatar"
                        type="url"
                        value={avatarUrl}
                        onChange={(e) => setAvatarUrl(e.target.value)}
                        placeholder="https://exemplo.com/sua-foto.jpg"
                        className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-amber-500/40 transition-colors"
                    />
                </div>

                {/* Selecionar Foto dos Presets */}
                <div>
                    <span className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">
                        Ou selecione um avatar padrão
                    </span>
                    <div className="grid grid-cols-6 gap-2">
                        {PRESET_AVATARS.map((av) => (
                            <button
                                key={av.name}
                                type="button"
                                onClick={() => setAvatarUrl(av.url)}
                                className={`relative rounded-lg overflow-hidden border aspect-square transition-all ${
                                    avatarUrl === av.url ? "border-amber-500 ring-1 ring-amber-500" : "border-slate-800 hover:border-slate-600"
                                }`}
                                title={av.name}
                            >
                                <img src={av.url} alt={av.name} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mensagens de feedback */}
                {error && (
                    <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {error}
                    </div>
                )}
                {success && (
                    <div className="flex items-center gap-2 text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2.5">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                        {success}
                    </div>
                )}

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                    <button
                        type="button"
                        onClick={handleLogout}
                        disabled={loggingOut}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-red-500/30 text-red-400 rounded-lg text-xs font-bold hover:bg-red-500/10 transition-colors"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                        {loggingOut ? "Saindo..." : "Sair da Conta"}
                    </button>

                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-black transition-colors shadow-lg shadow-amber-500/10"
                    >
                        <Save className="w-3.5 h-3.5" />
                        {saving ? "Salvando..." : "Salvar Alterações"}
                    </button>
                </div>
            </form>
        </div>
    );
}
