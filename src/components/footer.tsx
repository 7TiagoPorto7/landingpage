import Link from "next/link";
import { TrendingUp } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        <span className="text-xl font-bold">Modelagem Financeira na Prática</span>
                    </div>

                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <Link href="/legal#terms" className="hover:text-white transition-colors">Termos de Uso</Link>
                        <Link href="/legal#privacy" className="hover:text-white transition-colors">Privacidade</Link>
                        <Link href="/legal#contact" className="hover:text-white transition-colors">Contato</Link>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Modelagem Financeira na Prática. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

