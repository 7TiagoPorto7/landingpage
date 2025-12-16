import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Modelagem Financeira na Prática | Premium Course for Finance Professionals",
  description: "Elevate your career with our comprehensive Financial Modeling course. Learn to build robust, institutional-grade models from scratch.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://financialmodeling.course", // Placeholder
    title: "Modelagem Financeira na Prática | Premium Course",
    description: "Elevate your career with our comprehensive Financial Modeling course.",
    siteName: "Modelagem Financeira na Prática",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modelagem Financeira na Prática",
    description: "Elevate your career with our comprehensive Financial Modeling course.",
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
        {children}
      </body>
    </html>
  );
}
