import type { NextConfig } from "next";
import blogRedirects from "./content/blog-redirects.json";

const nextConfig: NextConfig = {
  // Fotos de banco gratuito (Unsplash) usadas na capa e no blog
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/forum", destination: "/blog", permanent: true },
      { source: "/forum/:path*", destination: "/blog", permanent: true },
      { source: "/auth/:path*", destination: "/", permanent: true },
      { source: "/fluxograma", destination: "/fundamentos", permanent: true },
      // Posts duplicados consolidados e slugs corrigidos
      ...blogRedirects.map(({ from, to }) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
