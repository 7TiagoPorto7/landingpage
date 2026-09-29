import Link from "next/link";
import { Container } from "@/components/mfp/ui";
import { SITE_NAME } from "@/lib/site";

export function MfpFooter() {
    return (
        <footer className="bg-[var(--navy)] py-10 text-sm text-white/55">
            <Container className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © {new Date().getFullYear()} {SITE_NAME}
                </p>
                <Link href="/legal#terms" className="hover:text-white">
                    Termos de uso
                </Link>
            </Container>
        </footer>
    );
}
