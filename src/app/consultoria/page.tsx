import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mfpFonts } from "@/lib/fonts";
import { ConsultoriaForm } from "@/components/consultoria/contact-form";

export const metadata: Metadata = {
    title: { absolute: "Consultoria em modelagem financeira | MFP Advisory" },
    description: "Precisa de um modelo financeiro para a sua empresa? Fale com a MFP Advisory sobre consultoria em modelagem financeira.",
    alternates: { canonical: "/consultoria" },
};

const PHOTO = "https://images.unsplash.com/photo-1772301685774-a4f0e81e032e?auto=format&fit=crop&q=80&w=1400";

// Captação de pedidos de consultoria: tela dividida, foto à esquerda e formulário à direita, em cinza neutro
export default function ConsultoriaPage() {
    return (
        <div className={`mfp ${mfpFonts} min-h-screen text-white`} style={{ background: "#2a2b2e" }}>
            <div className="grid lg:min-h-screen lg:grid-cols-[1.05fr_1fr]">
                {/* Foto com a logo por cima */}
                <div className="relative h-[46svh] min-h-[320px] overflow-hidden lg:sticky lg:top-0 lg:h-screen">
                    <Image src={PHOTO} alt="Empresário de terno e óculos sentado à mesa com o notebook" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover object-[35%_0%] lg:object-[35%_30%] grayscale-[20%]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-[#2a2b2e] lg:to-black/25" />
                    <Link href="/" aria-label="MFP Advisory" className="absolute left-5 top-6 sm:left-10 sm:top-9">
                        <Image src="/logo-mfp-advisory.png" alt="MFP Advisory" width={1959} height={225} priority className="h-6 w-auto sm:h-7" />
                    </Link>
                    <p className="absolute bottom-6 left-10 hidden text-[12px] text-white/60 lg:block">
                        Foto:{" "}
                        <a href="https://unsplash.com/@madruguinha176" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                            Lucas Silva no Unsplash
                        </a>
                    </p>
                </div>

                {/* Formulário */}
                <main className="flex items-center px-5 pb-16 pt-4 sm:px-10 lg:px-16 lg:py-20 xl:px-24" style={{ background: "#2a2b2e" }}>
                    <div className="w-full max-w-xl">
                        <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white/50">
                            <span aria-hidden className="h-px w-8 bg-white/40" />
                            Consultoria
                        </p>
                        <h1 className="mt-6 text-balance text-white text-[2.3rem] font-medium leading-[1.05] tracking-[-0.035em] sm:text-[3.1rem]">
                            Precisa de consultoria em modelagem financeira?
                        </h1>
                        <p className="mt-5 text-lg leading-relaxed text-white/60">Entre em contato conosco. Conte o que sua empresa precisa e retornamos para conversar.</p>

                        <div className="mt-12 border-t border-white/10 pt-10">
                            <ConsultoriaForm />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
