import type { Metadata } from "next";
import Link from "next/link";
import { navItems, hotelMeta } from "./content";

export const metadata: Metadata = {
  title: {
    default: "Villa Aurea — Demo Sito Hotel",
    template: "%s — Villa Aurea",
  },
  description:
    "Demo sito completo per hotel e villa di lusso, interamente in italiano.",
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

export default function DemoHotelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#f8f5ef] pb-20 text-[#32281d] sm:pb-0">
      <header className="sticky top-0 z-40 border-b border-[#dfcfba] bg-[#fbf8f2]/92 backdrop-blur">
        <div className="container-pad flex items-center justify-between py-4">
          <Link
            href="/demo-hotel-villa"
            className="heading-display text-sm uppercase tracking-[0.24em] text-[#4b3927]"
          >
            {hotelMeta.name}
          </Link>
          <nav
            aria-label="Navigazione demo hotel"
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
          <Link
            href="/demo-hotel-villa/prenotazione"
            className="rounded-full border border-[#bda17f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#3d2e1f]"
          >
            Prenota ora
          </Link>
        </div>
      </header>

      <Link
        href="/"
        aria-label="Torna al sito principale"
        className="fixed bottom-3 right-3 z-50 rounded-full border border-[#bda17f] bg-[#fff8ee]/95 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3a2c1d] shadow-[0_10px_30px_rgba(85,64,40,0.2)] backdrop-blur transition hover:bg-[#f7eedf] sm:bottom-4 sm:right-4 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.12em]"
      >
        <span className="sm:hidden">← Torna al sito</span>
        <span className="hidden sm:inline">← Torna al sito principale</span>
      </Link>

      {children}

      <footer className="border-t border-[#dfcfba] bg-[#f4ede3]">
        <div className="container-pad flex flex-col gap-3 py-8 text-sm text-[#5f4d3b] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {hotelMeta.name} — Demo vetrina hotel luxury.</p>
          <p>
            {hotelMeta.city} · {hotelMeta.phone} · {hotelMeta.email}
          </p>
        </div>
      </footer>
    </div>
  );
}
