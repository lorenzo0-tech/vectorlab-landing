"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import {
  Gauge,
  MapPinned,
  MousePointerClick,
  Search,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";

export function Solution() {
  const { locale } = useLanguage();
  const items =
    locale === "it"
      ? [
          {
            title: "Testata chiara",
            desc: "Una promessa comprensibile in 3 secondi, con invito all’azione immediato.",
            Icon: MousePointerClick,
          },
          {
            title: "Pulsanti che convertono",
            desc: "Chiama / Prenota / Indicazioni sempre visibili e facili da toccare.",
            Icon: Smartphone,
          },
          {
            title: "Menu in un tocco",
            desc: "PDF + pagina web indicizzabile: utile per persone e Google.",
            Icon: UtensilsCrossed,
          },
          {
            title: "Foto ottimizzate",
            desc: "Immagini leggere, nitide, con caricamento veloce su smartphone.",
            Icon: Gauge,
          },
          {
            title: "SEO locale base",
            desc: "Struttura, testi e segnali fondamentali per essere trovati.",
            Icon: Search,
          },
          {
            title: "Tracciamento clic",
            desc: "Misuriamo le azioni importanti per capire cosa porta contatti.",
            Icon: MapPinned,
          },
        ]
      : [
          {
            title: "Clear hero section",
            desc: "A clear promise in 3 seconds, with an immediate call to action.",
            Icon: MousePointerClick,
          },
          {
            title: "High-converting buttons",
            desc: "Call / Book / Directions always visible and easy to tap.",
            Icon: Smartphone,
          },
          {
            title: "One-tap menu",
            desc: "PDF + indexable web page: useful for people and Google.",
            Icon: UtensilsCrossed,
          },
          {
            title: "Optimized photos",
            desc: "Light and sharp images with fast smartphone loading.",
            Icon: Gauge,
          },
          {
            title: "Local SEO basics",
            desc: "Structure, copy and core signals to get discovered.",
            Icon: Search,
          },
          {
            title: "Click tracking",
            desc: "We measure key actions to understand what generates leads.",
            Icon: MapPinned,
          },
        ];
  const gallery = [
    {
      src: "/images/restaurant-real/hero-dining.jpg",
      alt:
        locale === "it"
          ? "Sala ristorante con atmosfera calda e tavoli apparecchiati"
          : "Restaurant dining room with warm atmosphere and set tables",
      label: locale === "it" ? "Testata + prenota" : "Hero + book",
      mockHeader: true,
      className:
        "relative col-span-12 h-44 overflow-hidden rounded-2xl border border-white/15 sm:col-span-7 sm:h-64 lg:h-72",
      sizes: "(max-width: 640px) 100vw, 58vw",
    },
    {
      src: "/images/restaurant-real/dish-plating.jpg",
      alt:
        locale === "it"
          ? "Sala ristorante luminosa con tavoli pronti al servizio"
          : "Bright dining room with tables ready for service",
      label: locale === "it" ? "Sala ristorante" : "Dining room",
      mockHeader: false,
      className:
        "relative col-span-12 h-44 overflow-hidden rounded-2xl border border-white/15 sm:col-span-5 sm:h-64 lg:h-72",
      sizes: "(max-width: 640px) 100vw, 42vw",
    },
    {
      src: "/images/restaurant-real/chef-kitchen.jpg",
      alt:
        locale === "it"
          ? "Piatto in evidenza con cura dell'impiattamento"
          : "Featured dish with careful plating",
      label: locale === "it" ? "Piatto in evidenza" : "Featured dish",
      mockHeader: false,
      className:
        "relative col-span-12 h-36 overflow-hidden rounded-2xl border border-white/15 sm:col-span-4 sm:h-52",
      sizes: "(max-width: 640px) 100vw, 34vw",
    },
    {
      src: "/images/restaurant-real/menu-fine-dining.jpg",
      alt:
        locale === "it"
          ? "Cocktail e abbinamenti serviti al tavolo"
          : "Cocktails and pairings served at the table",
      label:
        locale === "it" ? "Cocktail e abbinamenti" : "Cocktails and pairings",
      mockHeader: false,
      className:
        "relative col-span-12 h-36 overflow-hidden rounded-2xl border border-white/15 sm:col-span-5 sm:h-52",
      sizes: "(max-width: 640px) 100vw, 40vw",
    },
    {
      src: "/images/restaurant-real/reserved-table.jpg",
      alt:
        locale === "it"
          ? "Area bar e sala serale con illuminazione d'atmosfera"
          : "Evening bar and dining area with ambient lighting",
      label: locale === "it" ? "Atmosfera serale" : "Evening atmosphere",
      mockHeader: false,
      className:
        "relative col-span-12 h-36 overflow-hidden rounded-2xl border border-white/15 sm:col-span-3 sm:h-52",
      sizes: "(max-width: 640px) 100vw, 26vw",
    },
  ] as const;

  const iconColors = [
    "icon-chip-cyan",
    "icon-chip-indigo",
    "icon-chip-fuchsia",
    "icon-chip-cyan",
    "icon-chip-indigo",
    "icon-chip-fuchsia",
  ];

  return (
    <section id="soluzione" className="section-pad">
      <div className="container-pad">
        <div className="reveal">
          <h2 className="heading-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
            {locale === "it" ? (
              <>
                Un sito progettato per una cosa sola:{" "}
                <span className="heading-accent">far agire le persone.</span>
              </>
            ) : (
              <>
                A website designed for one thing only:{" "}
                <span className="heading-accent">driving action.</span>
              </>
            )}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Elementi concreti, pensati per prenotazioni, chiamate e richieste."
              : "Practical elements built for bookings, calls, and leads."}
          </p>
        </div>

        <div className="glass-strong gradient-border panel-tech mt-8 overflow-hidden rounded-3xl p-3 reveal">
          <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-4">
            <div className="grid grid-cols-12 gap-3 reveal-stagger">
              {gallery.map((shot) => (
                <div
                  key={shot.src}
                  className={`${shot.className} group reveal`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes={shot.sizes}
                  />

                  {shot.mockHeader ? (
                    <div className="absolute left-2 top-2 w-[58%] rounded-lg border border-cyan-100/30 bg-slate-950/72 p-1.5 shadow-[0_16px_44px_rgba(2,6,23,0.45)] backdrop-blur-md sm:left-3 sm:top-3 sm:w-[46%] sm:rounded-xl sm:p-2 lg:w-[42%]">
                      <p className="text-[10px] font-semibold tracking-[0.14em] text-cyan-100/85 uppercase">
                        {locale === "it" ? "Anteprima testata" : "Hero preview"}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold leading-3.5 text-white/95 sm:text-[11px] sm:leading-4 lg:text-xs">
                        {locale === "it"
                          ? "Prenota il tavolo in 15 secondi."
                          : "Book your table in 15 seconds."}
                      </p>
                      <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
                        <span className="rounded-full bg-cyan-300/20 px-1.5 py-0.5 text-[9px] font-semibold text-cyan-100 sm:px-2 sm:py-1 sm:text-[10px]">
                          {locale === "it" ? "Chiama" : "Call"}
                        </span>
                        <span className="rounded-full bg-fuchsia-300/20 px-1.5 py-0.5 text-[9px] font-semibold text-fuchsia-100 sm:px-2 sm:py-1 sm:text-[10px]">
                          {locale === "it" ? "Indicazioni" : "Directions"}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="mt-1.5 w-full rounded-md bg-[linear-gradient(120deg,rgba(103,232,249,0.9),rgba(129,140,248,0.86),rgba(232,121,249,0.85))] px-2 py-1 text-[9px] font-semibold text-slate-950 sm:mt-2 sm:rounded-lg sm:py-1.5 sm:text-[10px]"
                      >
                        {locale === "it" ? "Prenota ora" : "Book now"}
                      </button>
                    </div>
                  ) : null}

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/75 to-transparent px-3 py-2">
                    <p className="text-xs font-semibold tracking-[0.12em] text-cyan-100/95 uppercase">
                      {shot.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger">
          {items.map(({ title, desc, Icon }, index) => (
            <div
              key={`solution-item-${index}`}
              className="glass gradient-border card-tech group rounded-3xl p-6 will-change-transform reveal"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-10 w-10 ${iconColors[index % iconColors.length]}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-(--muted)">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
