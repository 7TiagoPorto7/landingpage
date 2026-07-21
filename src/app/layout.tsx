import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";
import { ScrollTracker } from "@/components/scroll-tracker";
import { UtmTracker } from "@/components/utm-tracker";



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mfpacademy.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MFP Education | Modelagem Financeira na Prática, Valuation & FP&A",
    template: "%s | MFP Education",
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
  creator: "MFP Education",
  publisher: "MFP Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "MFP Education | Modelagem Financeira na Prática, Valuation & FP&A",
    description: "Formação executiva e modelos institucionais em Excel, Valuation DCF, DRE, Balanço Patrimonial, DFC e automações com IA.",
    siteName: "MFP Education — Modelagem Financeira na Prática",
    images: [
      {
        url: "/logo-mfp.png",
        width: 1200,
        height: 630,
        alt: "MFP Education — Modelagem Financeira na Prática",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MFP Education | Modelagem Financeira na Prática",
    description: "Formação executiva e modelos institucionais em Excel, Valuation DCF e IA para finanças.",
    images: ["/logo-mfp.png"],
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
