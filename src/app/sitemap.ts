import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const siteUrl = SITE_URL;
const normalizedSiteUrl = siteUrl.replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${normalizedSiteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
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
  ];
}
