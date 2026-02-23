import type { Metadata } from "next";
import Link from "next/link";
import { getRestaurantDemoContent } from "./content";
import { getServerLocale } from "@/lib/server-locale";

export const metadata: Metadata = {
  title: {
    default: "Atelier Nove — Vetrina Sito Ristorante",
    template: "%s — Atelier Nove",
  },
  description: "Vetrina completa per ristorante di alta gamma.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
};

export default async function DemoRistoranteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { navItems, restaurantMeta } = getRestaurantDemoContent(locale);

  return (
    <div className="min-h-screen bg-[#0f0a06] pb-20 text-[#f5eee4] sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-[#7c5b35]/40 bg-[#120d09]/92 backdrop-blur">
        <div className="container-pad flex items-center justify-between py-4">
          <Link
            href="/demo-ristorante"
            className="heading-display text-sm uppercase tracking-[0.24em] text-[#ecd9ba]"
          >
            {restaurantMeta.name}
          </Link>

          <nav
            className="hidden items-center gap-5 md:flex"
            aria-label={
              isEn
                ? "Restaurant showcase navigation"
                : "Navigazione vetrina ristorante"
            }
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#e4d1b6]/85 transition hover:text-[#f7e6cc]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/demo-ristorante/prenotazione"
            className="rounded-full border border-[#b98a55] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f2e1c8]"
          >
            {isEn ? "Book" : "Prenota"}
          </Link>
        </div>
      </header>

      <Link
        href="/"
        aria-label={isEn ? "Back to main website" : "Torna al sito principale"}
        className="fixed bottom-3 right-3 z-50 rounded-full border border-[#b98a55] bg-[#1b130c]/95 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#f2e1c8] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-[#261b12] sm:bottom-4 sm:right-4 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.12em]"
      >
        <span className="sm:hidden">
          {isEn ? "← Main site" : "← Torna al sito"}
        </span>
        <span className="hidden sm:inline">
          {isEn ? "← Back to main website" : "← Torna al sito principale"}
        </span>
      </Link>

      {children}

      <footer className="border-t border-[#7c5b35]/40 bg-[#0d0906]">
        <div className="container-pad py-8 text-sm text-[#cbb69a]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 {restaurantMeta.name} —{" "}
              {isEn
                ? "Fine-dining restaurant showcase."
                : "Vetrina ristorante di alta gamma."}
            </p>
            <p>
              {restaurantMeta.city} · {restaurantMeta.phone} ·{" "}
              {restaurantMeta.email}
            </p>
          </div>
          <p className="mt-2 text-xs text-[#a99375]">
            {isEn
              ? "Showcase photos are free with commercial license (source: Pexels)."
              : "Foto vetrina gratuite con licenza commerciale (fonte: Pexels)."}
          </p>
        </div>
      </footer>
    </div>
  );
}
