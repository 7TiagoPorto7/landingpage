import Link from "next/link";

export function SKFooter() {
    return (
        <footer className="bg-[#1a1a2e] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo / Brand */}
                    <div>
                        <p className="font-bold text-lg text-white">
                            Starter Kit <span className="text-[#548235]">Financeiro</span>
                        </p>
                        <p className="text-white/40 text-xs mt-1">
                            Parte do ecossistema Pro Finance
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap gap-4 text-sm text-white/60">
                        <Link
                            href="/legal"
                            className="hover:text-white transition-colors"
                        >
                            Termos de uso
                        </Link>
                        <Link
                            href="/legal"
                            className="hover:text-white transition-colors"
                        >
                            Política de privacidade
                        </Link>
                        <a
                            href="mailto:contato@profinance.com.br"
                            className="hover:text-white transition-colors"
                        >
                            Contato
                        </a>
                    </nav>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/30 text-xs">
                        © 2025 Starter Kit Financeiro · Pro Finance. Todos os direitos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
