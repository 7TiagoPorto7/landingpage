import { ImageResponse } from "next/og";
import { getSortedPostsData } from "@/lib/blog";
import { getCategory, getCoverLabel } from "@/lib/blog-categories";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Capa do artigo";

export function generateStaticParams() {
    return getSortedPostsData().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getSortedPostsData().find((p) => p.slug === slug);
    const title = post?.title ?? SITE_NAME;

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
                    {getCategory(slug)}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
                        {getCoverLabel(title)}
                    </div>
                    <div style={{ display: "flex", fontSize: 30, color: "#94a3b8", lineHeight: 1.3 }}>
                        {title.length > 110 ? title.slice(0, 108) + "…" : title}
                    </div>
                </div>
                <div style={{ display: "flex", fontSize: 26, color: "#cbd5e1" }}>{SITE_NAME} · Tiago Porto</div>
            </div>
        ),
        size
    );
}
