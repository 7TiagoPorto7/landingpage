import { Barcode, CreditCard, LockSimple, QrCode } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

// Sinais de compra segura, sempre perto do botão de compra
export function SecureCheckout({ dark = false, className }: { dark?: boolean; className?: string }) {
    const muted = dark ? "text-white/70" : "text-[var(--ink-2)]";
    return (
        <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]", muted, className)}>
            <span className={cn("flex items-center gap-1.5 font-semibold", dark ? "text-white" : "text-[var(--ink)]")}>
                <LockSimple className="h-4 w-4" weight="bold" aria-hidden />
                Compra segura pela Hotmart
            </span>
            <span className="flex items-center gap-1.5">
                <CreditCard className="h-4 w-4" aria-hidden />
                Cartão
            </span>
            <span className="flex items-center gap-1.5">
                <QrCode className="h-4 w-4" aria-hidden />
                Pix
            </span>
            <span className="flex items-center gap-1.5">
                <Barcode className="h-4 w-4" aria-hidden />
                Boleto
            </span>
        </div>
    );
}
