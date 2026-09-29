import type { PostData } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

interface BlogJsonLdProps {
    post: PostData;
    url: string;
}

export function BlogJsonLd({ post, url }: BlogJsonLdProps) {
    const publishDateISO = `${post.isoDate}T08:00:00-03:00`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url,
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": [`${url}/opengraph-image`],
        "datePublished": publishDateISO,
        "dateModified": publishDateISO,
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": SITE_URL,
        },
        "publisher": {
            "@type": "Organization",
            "name": "Modelagem Financeira na Prática",
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/icon.png`,
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
