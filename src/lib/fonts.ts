import { Instrument_Sans, Lato } from "next/font/google";

export const sans = Instrument_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans-mfp",
    display: "swap",
});

export const mfpFonts = sans.variable;

// Fonte da logo (MFP Academy), usada na animação da marca
export const logoFont = Lato({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
});
