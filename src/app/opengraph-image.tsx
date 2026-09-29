import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE_NAME;

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 72,
                    background: "#0b1220",
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "120px 44px",
                    color: "white",
                }}
            >
                <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#fcd34d" }}>
                    Tiago Porto
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "flex", fontSize: 88, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
                        {SITE_NAME}
                    </div>
                    <div style={{ display: "flex", fontSize: 34, color: "#94a3b8" }}>
                        DRE, Balanço, Fluxo de Caixa e Valuation montados no Excel, do jeito que o mercado usa.
                    </div>
                </div>
                <div style={{ display: "flex", fontSize: 26, color: "#cbd5e1" }}>mfnapratica.com.br</div>
            </div>
        ),
        size
    );
}
