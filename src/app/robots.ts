import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const isLocalEnvironment = /localhost|127\.0\.0\.1/i.test(siteUrl);

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
        },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: isLocalEnvironment ? undefined : siteUrl,
  };
}
