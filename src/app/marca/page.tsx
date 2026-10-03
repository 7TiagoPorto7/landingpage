import type { Metadata } from "next";
import { mfpFonts } from "@/lib/fonts";
import { LogoAnimation } from "@/components/mfp/logo-animation";

export const metadata: Metadata = {
    title: { absolute: "Animação da marca | Modelagem Financeira na Prática" },
    robots: { index: false, follow: false },
};

// Prévia da animação da marca (não aparece no menu nem no Google)
export default function MarcaPage() {
    return (
        <div className={`mfp ${mfpFonts} min-h-screen`} style={{ background: "#070d24" }}>
            <section className="flex min-h-[55vh] items-center justify-center px-6 text-white">
                <LogoAnimation className="text-[1.6rem] sm:text-4xl lg:text-5xl" />
            </section>
            <section className="flex min-h-[45vh] items-center justify-center bg-white px-6 text-[var(--ink)]">
                <LogoAnimation className="text-[1.6rem] sm:text-4xl lg:text-5xl" />
            </section>
        </div>
    );
}
