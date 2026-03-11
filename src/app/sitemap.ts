import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { blogArticles } from "@/app/blog/blog-data";

const siteUrl = SITE_URL;
const normalizedSiteUrl = siteUrl.replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogEntries = blogArticles.map((article) => ({
    url: `${normalizedSiteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${normalizedSiteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${normalizedSiteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${normalizedSiteUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${normalizedSiteUrl}/siti-web-ristoranti-milano`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${normalizedSiteUrl}/siti-web-hotel-milano`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${normalizedSiteUrl}/cookie-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${normalizedSiteUrl}/termini-condizioni`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...blogEntries,
  ];
}
