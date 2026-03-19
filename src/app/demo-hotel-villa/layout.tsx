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
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fcfaf6_0%,#f7f1e8_42%,#f2e8db_100%)] pb-16 text-[#32281d] sm:pb-0">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-0 h-80 w-80 rounded-full bg-[#e8dac2]/45 blur-3xl" />
        <div className="absolute right-[-5%] top-[18%] h-96 w-96 rounded-full bg-[#d8c1a0]/30 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[#dfcfba]/80 bg-[#fbf8f2]/88 backdrop-blur-xl">
        <div className="container-pad flex items-center justify-between py-4">
          <div>
            <Link
              href="/demo-hotel-villa"
              className="heading-display text-sm uppercase tracking-[0.24em] text-[#4b3927]"
            >
              {hotelMeta.name}
            </Link>
            <p className="mt-1 hidden text-[11px] uppercase tracking-[0.16em] text-[#7a6548] md:block">
              {isEn ? "Lakefront luxury retreat" : "Ritiro esclusivo sul lago"}
            </p>
          </div>
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
          <div className="flex items-center gap-2">
            <Link
              href="/demo-hotel-villa/contatti"
              className="hidden min-h-[44px] items-center rounded-full border border-[#cfb28b] bg-white/55 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4c3926] shadow-[0_12px_35px_rgba(90,70,45,0.08)] lg:inline-flex"
            >
              {isEn ? "Private concierge" : "Concierge privato"}
            </Link>
            <Link
              href="/demo-hotel-villa/prenotazione"
              className="min-h-[44px] inline-flex items-center rounded-full border border-[#bda17f] bg-[#4e3b28] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#f8ecda] shadow-[0_12px_30px_rgba(65,48,31,0.18)]"
            >
              {isEn ? "Book now" : "Prenota ora"}
            </Link>
            <DemoMobileNav items={navItems} theme="light" />
          </div>
        </div>
      </header>

      <div className="border-b border-[#dfcfba] bg-[#efe5d7]/90 py-1.5 text-center text-[11px] uppercase tracking-[0.15em] text-[#7a6548]">
        {isEn
          ? "Demonstrative example \u2014 fictional premium hotel concept by VettoLab"
          : "Esempio dimostrativo \u2014 concept premium fittizio creato da VettoLab"}
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

      <footer className="border-t border-[#dfcfba] bg-[#efe5d8]/85 backdrop-blur">
        <div className="container-pad py-10 text-sm text-[#5f4d3b]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#7c6545]">
                {isEn ? "Showcase concept" : "Concept dimostrativo"}
              </p>
              <h3 className="heading-display mt-3 text-3xl text-[#382918] sm:text-4xl">
                {isEn
                  ? "An immersive hotel experience built to sell exclusivity at first glance."
                  : "Un'esperienza hotel immersiva pensata per vendere esclusivita' al primo sguardo."}
              </h3>
            </div>
            <div className="rounded-3xl border border-[#d7c2a4] bg-[#fbf6ef] p-5 shadow-[0_18px_40px_rgba(90,70,45,0.08)]">
              <p className="text-xs uppercase tracking-[0.14em] text-[#7a6548]">
                {hotelMeta.city}
              </p>
              <p className="mt-2 text-sm text-[#5f4d3b]">{hotelMeta.phone}</p>
              <p className="text-sm text-[#5f4d3b]">{hotelMeta.email}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2 border-t border-[#dccbb5] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 {hotelMeta.name} —{" "}
              {isEn
                ? "Luxury hotel showcase demo."
                : "Demo vetrina hotel di fascia alta."}
            </p>
            <p>{hotelMeta.city}</p>
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
