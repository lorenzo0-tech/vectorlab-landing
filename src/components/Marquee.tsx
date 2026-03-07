"use client";

import { useLanguage } from "@/components/LanguageProvider";

const ITEMS_IT = [
  "Siti per aziende",
  "Siti professionali",
  "Smartphone-first",
  "SEO locale",
  "Velocità reale",
  "Contenuti strutturati",
  "Contatti diretti",
  "Design premium",
  "Tracciamento clic",
  "Consegna 14 giorni",
];

const ITEMS_EN = [
  "Business websites",
  "Professional websites",
  "Smartphone-first",
  "Local SEO",
  "Real speed",
  "Structured content",
  "Direct leads",
  "Premium design",
  "Click tracking",
  "14-day delivery",
];

/**
 * Infinite horizontal scrolling marquee with keyword pills.
 * Pure CSS animation — no JS runtime cost.
 */
export function Marquee() {
  const { locale } = useLanguage();
  const items = locale === "it" ? ITEMS_IT : ITEMS_EN;

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <section className="relative overflow-hidden py-6" aria-hidden="true">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent" />

      <div className="marquee-track flex w-max gap-4">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="marquee-pill whitespace-nowrap rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-semibold text-cyan-100/80"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
