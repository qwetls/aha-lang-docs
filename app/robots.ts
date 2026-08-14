import { MetadataRoute } from "next";

export const dynamic = "force-static";

// Override with NEXT_PUBLIC_SITE_URL when deploying under a custom domain
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://qwetls.github.io/aha-lang-docs/").replace(/\/$/, "");

// @note generateRobots creates robots.txt for search engine crawlers
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/"]
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}