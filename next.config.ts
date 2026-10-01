import type { NextConfig } from "next";
import blogRedirects from "./content/blog-redirects.json";

const nextConfig: NextConfig = {
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
