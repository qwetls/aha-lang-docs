import { MetadataRoute } from "next";
import { source, blogSource, courseSource } from "@/lib/source";

export const dynamic = "force-static";

// Override with NEXT_PUBLIC_SITE_URL when using a custom domain
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://aha-lang.vercel.app/").replace(/\/$/, "");

// @note generateSitemap creates sitemap.xml for search engines with all pages
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/course`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
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

  // @note add blog posts and course lessons
  const blogAndCourse: MetadataRoute.Sitemap = [...blogSource.getPages(), ...courseSource.getPages()].map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7
  }));

  return [...routes, ...docsRoutes, ...blogAndCourse];
}