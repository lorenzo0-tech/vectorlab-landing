import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const siteUrl = SITE_URL;
const normalizedSiteUrl = siteUrl.replace(/\/+$/, "");
const indexingDisabled = /^(1|true)$/i.test(
  process.env.BLOCK_INDEXING ?? process.env.NEXT_PUBLIC_BLOCK_INDEXING ?? "",
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: indexingDisabled
      ? {
          userAgent: "*",
          disallow: "/",
        }
      : {
          userAgent: "*",
          allow: "/",
          disallow: [
            "/grazie",
            "/anteprima-soluzione",
            "/demo-ristorante",
            "/demo-hotel-villa",
          ],
        },
    sitemap: `${normalizedSiteUrl}/sitemap.xml`,
    host: normalizedSiteUrl,
  };
}
