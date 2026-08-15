import { MetadataRoute } from "next";
import { getSource, getBlogSource, getCourseSource, locales } from "@/lib/source";

export const dynamic = "force-static";

// Override with NEXT_PUBLIC_SITE_URL when using a custom domain
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://aha-lang.vercel.app/").replace(/\/$/, "");

// @note generateSitemap creates sitemap.xml for search engines with all pages, per locale
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    routes.push(
      {
        url: `${siteUrl}/${lang}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: `${siteUrl}/${lang}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${siteUrl}/${lang}/course`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      }
    );

    // @note docs pages for this locale
    for (const page of getSource(lang).getPages()) {
      const cleanUrl = page.url.startsWith("/") ? page.url : `/${page.url}`;
      routes.push({
        url: `${siteUrl}${cleanUrl}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    // @note blog posts and course lessons for this locale
    for (const page of [...getBlogSource(lang).getPages(), ...getCourseSource(lang).getPages()]) {
      routes.push({
        url: `${siteUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
