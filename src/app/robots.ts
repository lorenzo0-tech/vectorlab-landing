import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const siteUrl = SITE_URL;
const isLocalEnvironment = /localhost|127\.0\.0\.1/i.test(siteUrl);
const normalizedSiteUrl = siteUrl.replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isLocalEnvironment
      ? {
          userAgent: "*",
          disallow: "/",
        }
      : {
          userAgent: "*",
          allow: "/",
          disallow: ["/grazie", "/anteprima-soluzione", "/demo-ristorante"],
        },
    sitemap: `${normalizedSiteUrl}/sitemap.xml`,
    host: isLocalEnvironment ? undefined : normalizedSiteUrl,
  };
}
