import { Instrument_Sans } from "next/font/google";

export const sans = Instrument_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans-mfp",
    display: "swap",
});

export const mfpFonts = sans.variable;
