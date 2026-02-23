import { cookies } from "next/headers";

export type SiteLocale = "it" | "en";

export async function getServerLocale(): Promise<SiteLocale> {
  const cookieStore = await cookies();
  return cookieStore.get("site_locale_v1")?.value === "en" ? "en" : "it";
}
