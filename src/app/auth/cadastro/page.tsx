"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrendingUp, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";

export default function CadastroPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) {
            setError(data.error || "Erro ao criar conta.");
            return;
        }

        setSuccess(true);
        setTimeout(() => {
            router.push("/forum");
            router.refresh();
        }, 1500);
    }

    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5 pointer-events-none" />

            <div className="w-full max-w-md relative">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 shadow-lg">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-black tracking-tight text-foreground">MFP Education</span>
                    </Link>
                    <h1 className="text-2xl font-black text-foreground mb-1">Criar sua conta</h1>
                    <p className="text-sm text-muted-foreground">Junte-se à comunidade de finanças corporativas</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                    {success ? (
                        <div className="text-center py-6">
                            <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-4" />
                            <p className="text-lg font-bold text-foreground">Conta criada com sucesso!</p>
                            <p className="text-sm text-muted-foreground mt-1">Redirecionando para o fórum...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Nome */}
                            <div>
                                <label htmlFor="register-name" className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                                    Nome completo
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <input
                                        id="register-name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Seu nome"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                                    />
                                </div>
                            </div>

                            {/* E-mail */}
                            <div>
                                <label htmlFor="register-email" className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                                    E-mail
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <input
                                        id="register-email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="seu@email.com"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Senha */}
                            <div>
                                <label htmlFor="register-password" className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                                    Senha <span className="text-muted-foreground font-normal normal-case">(mín. 6 caracteres)</span>
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <input
                                        id="register-password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        required
                                        minLength={6}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-12 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    {error}
                                </div>
                            )}

                            <button
                                id="register-submit"
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-extrabold text-sm hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg hover:shadow-amber-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Criando conta..." : "Criar conta grátis"}
                            </button>
                        </form>
                    )}

                    {!success && (
                        <div className="mt-6 text-center text-sm text-muted-foreground">
                            Já tem conta?{" "}
                            <Link href="/auth/login" className="text-primary font-semibold hover:text-amber-400 transition-colors">
                                Entrar
                            </Link>
                        </div>
                    )}
                </div>

                <div className="mt-4 text-center">
                    <Link href="/forum" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        ← Voltar para o Fórum
                    </Link>
                </div>
            </div>
        </main>
    );
}
