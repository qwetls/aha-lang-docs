import { MetadataRoute } from "next";
import { source } from "@/lib/source";

export const dynamic = "force-static";

// Override with NEXT_PUBLIC_SITE_URL when deploying under a custom domain
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://qwetls.github.io/aha-lang-docs/").replace(/\/$/, "");

// @note generateSitemap creates sitemap.xml for search engines with all pages
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];

  // @note add all docs pages to sitemap
  const pages = source.getPages();
  const docsRoutes: MetadataRoute.Sitemap = pages.map((page) => {
    const cleanUrl = page.url.startsWith('/') ? page.url : `/${page.url}`;
    return {
      url: `${siteUrl}${cleanUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    };
  });

  return [...routes, ...docsRoutes];
}