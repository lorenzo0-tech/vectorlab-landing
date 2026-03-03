import type { Metadata } from "next";
import Link from "next/link";
import { DemoMobileNav } from "@/components/DemoMobileNav";
import { getHotelDemoContent } from "./content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const isEn = locale === "en";

  return {
    title: {
      default: isEn
        ? "Villa Aurea — Hotel Website Demo"
        : "Villa Aurea — Demo Sito Hotel",
      template: "%s — Villa Aurea",
    },
    description: isEn
      ? "Complete showcase demo for a luxury hotel and villa."
      : "Demo sito completo per hotel e villa di lusso.",
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
}

export default async function DemoHotelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getServerLocale();
  const { navItems, hotelMeta } = getHotelDemoContent(locale);
  const isEn = locale === "en";

  return (
    <div className="min-h-screen bg-[#f8f5ef] pb-16 text-[#32281d] sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-[#dfcfba] bg-[#fbf8f2]/92 backdrop-blur">
        <div className="container-pad flex items-center justify-between py-4">
          <Link
            href="/demo-hotel-villa"
            className="heading-display text-sm uppercase tracking-[0.24em] text-[#4b3927]"
          >
            {hotelMeta.name}
          </Link>
          <nav
            aria-label={
              isEn ? "Hotel demo navigation" : "Navigazione demo hotel"
            }
            className="hidden gap-5 md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#5a4836] transition hover:text-[#2f2418]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <Link
              href="/demo-hotel-villa/prenotazione"
              className="min-h-[44px] inline-flex items-center rounded-full border border-[#bda17f] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#3d2e1f]"
            >
              {isEn ? "Book now" : "Prenota ora"}
            </Link>
            <DemoMobileNav items={navItems} theme="light" />
          </div>
        </div>
      </header>

      <div className="border-b border-[#dfcfba] bg-[#f0e8dc]/90 py-1.5 text-center text-[11px] uppercase tracking-[0.15em] text-[#7a6548]">
        {isEn
          ? "Demonstrative example \u2014 fictitious content created by VettoLab"
          : "Esempio dimostrativo \u2014 contenuti fittizi creati da VettoLab"}
      </div>

      <Link
        href="/"
        aria-label={isEn ? "Back to main website" : "Torna al sito principale"}
        className="fixed bottom-3 right-3 z-50 min-h-[44px] inline-flex items-center rounded-full border border-[#bda17f] bg-[#fff8ee]/95 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3a2c1d] shadow-[0_10px_30px_rgba(85,64,40,0.2)] backdrop-blur transition hover:bg-[#f7eedf] sm:bottom-4 sm:right-4 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.12em]"
      >
        <span className="sm:hidden">
          {isEn ? "← Main site" : "← Torna al sito"}
        </span>
        <span className="hidden sm:inline">
          {isEn ? "← Back to main website" : "← Torna al sito principale"}
        </span>
      </Link>

      {children}

      <footer className="border-t border-[#dfcfba] bg-[#f4ede3]">
        <div className="container-pad py-8 text-sm text-[#5f4d3b]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 {hotelMeta.name} —{" "}
              {isEn
                ? "Luxury hotel showcase demo."
                : "Demo vetrina hotel luxury."}
            </p>
            <p>
              {hotelMeta.city} · {hotelMeta.phone} · {hotelMeta.email}
            </p>
          </div>
          <p className="mt-2 text-xs text-[#7a6a58]">
            {isEn
              ? "This is a demonstrative example created by VettoLab. All names, data, and content are fictitious."
              : "Questo è un esempio dimostrativo creato da VettoLab. Tutti i nomi, dati e contenuti sono fittizi."}
          </p>
          <p className="mt-1 text-xs text-[#7a6a58]">
            {isEn
              ? "Showcase photos are free with commercial license (source: Pexels)."
              : "Foto vetrina gratuite con licenza commerciale (fonte: Pexels)."}
          </p>
        </div>
      </footer>
    </div>
  );
}
