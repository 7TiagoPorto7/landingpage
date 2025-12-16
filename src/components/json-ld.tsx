export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Modelagem Financeira na Prática",
        "description": "Aprenda a construir modelos financeiros robustos, realizar valuations precisos e tomar decisões de investimento baseadas em dados.",
        "provider": {
            "@type": "Organization",
            "name": "Modelagem Financeira na Prática",
            "sameAs": "https://financialmodeling.course"
        },
        "offers": {
            "@type": "Offer",
            "category": "Paid",
            "priceCurrency": "BRL",
            "price": "997.00",
            "url": "https://financialmodeling.course#pricing"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT10H"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
