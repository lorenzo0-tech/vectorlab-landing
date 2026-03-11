export type SiteLocale = "it" | "en";

export async function getServerLocale(): Promise<SiteLocale> {
  return "it";
}
