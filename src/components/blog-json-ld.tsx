import { PostData } from "@/lib/blog";

interface BlogJsonLdProps {
    post: PostData;
    url: string;
}

// Auxiliar para converter datas como "05 Dez 2025" ou "04 Mar 2026" em formato ISO "2025-12-05"
function parseDateToISO(dateStr: string): string {
    try {
        const parts = dateStr.trim().split(" ");
        if (parts.length !== 3) return new Date().toISOString();

        const day = parts[0].padStart(2, "0");
        const monthStr = parts[1].toLowerCase();
        const year = parts[2];

        const months: Record<string, string> = {
            jan: "01",
            fev: "02",
            mar: "03",
            abr: "04",
            mai: "05",
            jun: "06",
            jul: "07",
            ago: "08",
            set: "09",
            out: "10",
            nov: "11",
            dez: "12",
        };

        const month = months[monthStr.substring(0, 3)] || "01";
        return `${year}-${month}-${day}T08:00:00Z`;
    } catch {
        return new Date().toISOString();
    }
}

export function BlogJsonLd({ post, url }: BlogJsonLdProps) {
    const publishDateISO = parseDateToISO(post.date);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url,
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image ? [post.image] : ["https://www.mfnapratica.com.br/icon.png"],
        "datePublished": publishDateISO,
        "dateModified": publishDateISO,
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://www.mfnapratica.com.br",
        },
        "publisher": {
            "@type": "Organization",
            "name": "MFP Education",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.mfnapratica.com.br/icon.png",
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
