import type { Metadata } from "next";
import Link from "next/link";
import { DemoMobileNav } from "@/components/DemoMobileNav";
import { getRestaurantDemoContent } from "./content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const isEn = locale === "en";

  return {
    title: {
      default: isEn
        ? "Atelier Nove — Restaurant Website Demo"
        : "Atelier Nove — Vetrina Sito Ristorante",
      template: "%s — Atelier Nove",
    },
    description: isEn
      ? "Complete showcase demo for a fine-dining restaurant."
      : "Vetrina completa per ristorante di alta gamma.",
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

export default async function DemoRistoranteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { navItems, restaurantMeta } = getRestaurantDemoContent(locale);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(80%_60%_at_10%_0%,rgba(180,83,9,0.12),transparent_58%),radial-gradient(60%_55%_at_100%_14%,rgba(217,119,6,0.08),transparent_56%),linear-gradient(180deg,#0b0908_0%,#120d0b_42%,#17100c_100%)] pb-16 text-[#f5eee4] sm:pb-0">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-[4%] top-[22%] h-96 w-96 rounded-full bg-orange-500/8 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[#7c5b35]/40 bg-[#120d09]/88 backdrop-blur-xl">
        <div className="container-pad flex items-center justify-between py-4">
          <div>
            <Link
              href="/demo-ristorante"
              className="heading-display text-sm uppercase tracking-[0.24em] text-[#ecd9ba]"
            >
              {restaurantMeta.name}
            </Link>
            <p className="mt-1 hidden text-[11px] uppercase tracking-[0.16em] text-[#b9956a] md:block">
              {isEn ? "Contemporary fine dining" : "Alta cucina contemporanea"}
            </p>
          </div>

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

          <div className="flex items-center gap-2">
            <Link
              href="/demo-ristorante/menu"
              className="hidden min-h-[44px] items-center rounded-full border border-[#7c5b35]/45 bg-[#1b130d]/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#f2e1c8] lg:inline-flex"
            >
              {isEn ? "Tasting menus" : "Percorsi degustazione"}
            </Link>
            <Link
              href="/demo-ristorante/prenotazione"
              className="min-h-[44px] inline-flex items-center rounded-full border border-[#b98a55] bg-[#d8a86f] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#2b1d11] shadow-[0_14px_34px_rgba(216,168,111,0.16)]"
            >
              {isEn ? "Book" : "Prenota"}
            </Link>
            <DemoMobileNav items={navItems} theme="dark" />
          </div>
        </div>
      </header>

      <div className="border-b border-[#7c5b35]/30 bg-[#1a1209]/90 py-1.5 text-center text-[11px] uppercase tracking-[0.15em] text-[#c9a775]">
        {isEn
          ? "Demonstrative example — fictional fine-dining concept by VettoLab"
          : "Esempio dimostrativo — concept fine dining fittizio creato da VettoLab"}
      </div>

      <Link
        href="/"
        aria-label={isEn ? "Back to main website" : "Torna al sito principale"}
        className="fixed bottom-3 right-3 z-50 min-h-[44px] inline-flex items-center rounded-full border border-[#b98a55] bg-[#1b130c]/95 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#f2e1c8] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-[#261b12] sm:bottom-4 sm:right-4 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.12em]"
      >
        <span className="sm:hidden">
          {isEn ? "← Main site" : "← Torna al sito"}
        </span>
        <span className="hidden sm:inline">
          {isEn ? "← Back to main website" : "← Torna al sito principale"}
        </span>
      </Link>

      {children}

      <footer className="border-t border-[#7c5b35]/40 bg-[#0d0906]/96">
        <div className="container-pad py-10 text-sm text-[#cbb69a]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#b9956a]">
                {isEn ? "Showcase concept" : "Concept dimostrativo"}
              </p>
              <h3 className="heading-display mt-3 text-3xl text-[#f2debf] sm:text-4xl">
                {isEn
                  ? "A restaurant identity built to feel desirable before the first reservation."
                  : "Un'identita' ristorante costruita per sembrare desiderabile prima ancora della prima prenotazione."}
              </h3>
            </div>
            <div className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#cba36f]">
                {restaurantMeta.city}
              </p>
              <p className="mt-2 text-sm">{restaurantMeta.phone}</p>
              <p className="text-sm">{restaurantMeta.email}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2 border-t border-[#7c5b35]/35 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 {restaurantMeta.name} —{" "}
              {isEn
                ? "Fine-dining restaurant showcase."
                : "Vetrina ristorante di alta gamma."}
            </p>
            <p>{restaurantMeta.city}</p>
          </div>
          <p className="mt-2 text-xs text-[#a99375]">
            {isEn
              ? "This is a demonstrative example created by VettoLab. All names, data, and content are fictitious."
              : "Questo è un esempio dimostrativo creato da VettoLab. Tutti i nomi, dati e contenuti sono fittizi."}
          </p>
          <p className="mt-1 text-xs text-[#a99375]">
            {isEn
              ? "Showcase photos are free with commercial license (source: Pexels)."
              : "Foto vetrina gratuite con licenza commerciale (fonte: Pexels)."}
          </p>
        </div>
      </footer>
    </div>
  );
}
