import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";
import { ScrollTracker } from "@/components/scroll-tracker";
import { UtmTracker } from "@/components/utm-tracker";
import { SITE_URL, SITE_NAME } from "@/lib/site";



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Modelagem Financeira na Prática | Valuation, DRE e FP&A com Tiago Porto",
    template: `%s | ${SITE_NAME}`,
  },
  description: "Formação executiva e modelos institucionais em Excel, Valuation DCF, DRE, Balanço Patrimonial, DFC e automações de finanças com Inteligência Artificial.",
  keywords: [
    "modelagem financeira",
    "valuation",
    "dcf",
    "dre",
    "balanço patrimonial",
    "fluxo de caixa",
    "fp&a",
    "excel financeiro",
    "mfp education",
    "mfp academy",
    "tiago porto",
    "prompts excel ia",
    "claude finanças",
    "investment banking",
    "m&a",
  ],
  authors: [{ name: "Tiago Porto", url: siteUrl }],
  creator: "Tiago Porto",
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Modelagem Financeira na Prática | Valuation, DRE e FP&A com Tiago Porto",
    description: "Formação executiva e modelos institucionais em Excel, Valuation DCF, DRE, Balanço Patrimonial, DFC e automações com IA.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Formação executiva e modelos institucionais em Excel, Valuation DCF e IA para finanças.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(inter.variable, "min-h-screen bg-background font-sans antialiased")}>
        <JsonLd />
        <Analytics />
        <ScrollTracker />
        <UtmTracker />
        {children}
      </body>
    </html>
  );
}
