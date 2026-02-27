"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { CALENDLY_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";

type PackageCard = {
  name: string;
  trackingName: "BASE" | "VETRINA" | "CRESCITA";
  tagline: string;
  points: string[];
  image: string;
  target: string;
  highlight?: boolean;
};

type PackageCategory = {
  key: "ristoranti" | "hotel";
  title: string;
  subtitle: string;
  cards: PackageCard[];
};

export function Packages() {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<
    "ristoranti" | "hotel"
  >("ristoranti");

  const categories: PackageCategory[] =
    locale === "it"
      ? [
          {
            key: "ristoranti",
            title: "Pacchetti siti web per ristoranti",
            subtitle:
              "Pensati per aumentare prenotazioni, ordini e valore percepito del locale.",
            cards: [
              {
                name: "STANDARD",
                trackingName: "BASE",
                tagline: "Base solida per iniziare a vendere meglio online.",
                points: [
                  "Sito professionale fino a 5 sezioni (home, menu, chi siamo, contatti, prenotazione)",
                  "Menu digitale chiaro e facilmente aggiornabile",
                  "CTA dirette a WhatsApp/telefono/prenotazione",
                  "Ottimizzazione smartphone-first e tempi di caricamento rapidi",
                  "SEO locale base (Google Business Profile + struttura tecnica)",
                ],
                image: "/images/vettolab-free/ristorante-base.jpg",
                target: "Ristoranti, pizzerie, trattorie",
              },
              {
                name: "PRO",
                trackingName: "VETRINA",
                tagline:
                  "Per locali che vogliono distinguersi e convertire di più.",
                highlight: true,
                points: [
                  "Tutto del piano Standard",
                  "Design premium personalizzato sul posizionamento del locale",
                  "Galleria fotografica avanzata e sezioni storytelling",
                  "Integrazione modulo richieste eventi/cene private",
                  "Tracking conversioni principali (clic prenota, chiamate, mappa)",
                  "Setup blog/notizie o eventi speciali",
                ],
                image: "/images/vettolab-free/ristorante-pro.jpg",
                target: "Ristoranti premium, bistrot, locali eventi",
              },
              {
                name: "ENTERPRISE",
                trackingName: "CRESCITA",
                tagline:
                  "Pacchetto personalizzato per richieste complesse e obiettivi ambiziosi.",
                points: [
                  "Architettura su misura multi-sede o multi-brand",
                  "Funzionalità dedicate (CRM, booking avanzato, integrazioni esterne)",
                  "Strategia contenuti e funnel completi di acquisizione",
                  "Performance e SEO avanzata con roadmap trimestrale",
                  "Supporto continuativo e sviluppo evolutivo",
                ],
                image: "/images/vettolab-free/ristorante-enterprise.jpg",
                target: "Gruppi ristorazione e progetti complessi",
              },
            ],
          },
          {
            key: "hotel",
            title: "Pacchetti siti web per hotel, ville e b&b",
            subtitle:
              "Creati per aumentare richieste dirette, ridurre dipendenza OTA e valorizzare la struttura.",
            cards: [
              {
                name: "STANDARD",
                trackingName: "BASE",
                tagline:
                  "Per presentare la struttura in modo elegante e chiaro.",
                points: [
                  "Sito professionale fino a 7 sezioni (camere, servizi, location, contatti)",
                  "Presentazione camere/suite con gallery dedicata",
                  "Modulo richiesta disponibilità ottimizzato",
                  "Ottimizzazione mobile e performance core",
                  "SEO locale base e struttura tecnica corretta",
                ],
                image: "/images/vettolab-free/hotel-base.jpg",
                target: "B&b, boutique hotel, ville vacanza",
              },
              {
                name: "PRO",
                trackingName: "VETRINA",
                tagline:
                  "Per strutture che vogliono un'immagine luxury e più richieste dirette.",
                highlight: true,
                points: [
                  "Tutto del piano Standard",
                  "Design premium su misura con storytelling struttura",
                  "Pagine esperienze/servizi (spa, ristorante, transfer, attività)",
                  "Percorso prenotazione avanzato con campi personalizzati",
                  "Tracking eventi conversione e report essenziali",
                  "SEO contenutistica iniziale su keyword locali ad alto intento",
                ],
                image: "/images/vettolab-free/hotel-pro.jpg",
                target: "Hotel 4*, resort, ville di fascia alta",
              },
              {
                name: "ENTERPRISE",
                trackingName: "CRESCITA",
                tagline:
                  "Soluzione su richiesta per progetti hospitality complessi.",
                points: [
                  "Progetto custom per gruppi alberghieri o strutture multi-servizio",
                  "Integrazioni PMS/CRM/channel manager dove richiesto",
                  "Architettura multilingua avanzata e multi-destinazione",
                  "Strategia conversione diretta con funnel dedicati",
                  "Roadmap evolutiva tecnica e marketing con supporto continuativo",
                ],
                image: "/images/vettolab-free/hotel-enterprise.jpg",
                target: "Gruppi hotel, resort luxury, progetti complessi",
              },
            ],
          },
        ]
      : [
          {
            key: "ristoranti",
            title: "Restaurant website packages",
            subtitle:
              "Built to increase bookings, orders, and perceived value.",
            cards: [
              {
                name: "STANDARD",
                trackingName: "BASE",
                tagline: "Strong baseline to sell better online.",
                points: [
                  "Professional website up to 5 sections",
                  "Clear and editable digital menu",
                  "Direct CTAs to WhatsApp/phone/booking",
                  "Smartphone-first speed optimization",
                  "Local SEO fundamentals",
                ],
                image: "/images/vettolab-free/ristorante-base.jpg",
                target: "Restaurants, pizzerias, trattorias",
              },
              {
                name: "PRO",
                trackingName: "VETRINA",
                tagline:
                  "For venues that want higher positioning and conversion.",
                highlight: true,
                points: [
                  "Everything in Standard",
                  "Premium custom design",
                  "Advanced visual storytelling blocks",
                  "Private events inquiry forms",
                  "Core conversion tracking",
                  "Events/news setup",
                ],
                image: "/images/vettolab-free/ristorante-pro.jpg",
                target: "Premium restaurants, bistros, event venues",
              },
              {
                name: "ENTERPRISE",
                trackingName: "CRESCITA",
                tagline: "Tailored package for complex requirements.",
                points: [
                  "Custom architecture for multi-location brands",
                  "Advanced integrations and custom features",
                  "Full acquisition funnel strategy",
                  "Advanced SEO/performance roadmap",
                  "Ongoing optimization support",
                ],
                image: "/images/vettolab-free/ristorante-enterprise.jpg",
                target: "Restaurant groups and complex projects",
              },
            ],
          },
          {
            key: "hotel",
            title: "Hotel, villa and b&b website packages",
            subtitle:
              "Designed to increase direct requests and strengthen positioning.",
            cards: [
              {
                name: "STANDARD",
                trackingName: "BASE",
                tagline: "Elegant and clear online presence for your property.",
                points: [
                  "Professional website up to 7 sections",
                  "Rooms/suites presentation with dedicated gallery",
                  "Availability request form",
                  "Mobile and core performance optimization",
                  "Local SEO fundamentals",
                ],
                image: "/images/vettolab-free/hotel-base.jpg",
                target: "B&b, boutique hotels, villas",
              },
              {
                name: "PRO",
                trackingName: "VETRINA",
                tagline: "For luxury positioning and higher direct demand.",
                highlight: true,
                points: [
                  "Everything in Standard",
                  "Premium custom storytelling design",
                  "Experience/services pages (spa, dining, transfer)",
                  "Advanced booking inquiry flow",
                  "Conversion tracking and reporting",
                  "High-intent local SEO content setup",
                ],
                image: "/images/vettolab-free/hotel-pro.jpg",
                target: "4-star hotels, resorts, premium villas",
              },
              {
                name: "ENTERPRISE",
                trackingName: "CRESCITA",
                tagline:
                  "Made-to-measure package for complex hospitality projects.",
                points: [
                  "Custom project for groups and multi-service properties",
                  "PMS/CRM/channel manager integrations where needed",
                  "Advanced multilingual architecture",
                  "Direct-booking conversion strategy",
                  "Continuous technical and marketing roadmap",
                ],
                image: "/images/vettolab-free/hotel-enterprise.jpg",
                target: "Hotel groups, luxury resorts, complex projects",
              },
            ],
          },
        ];

  const activeCategory =
    categories.find((category) => category.key === selectedCategory) ??
    categories[0];

  return (
    <section id="pacchetti" className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "it" ? "Pacchetti" : "Packages"}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Offerte chiare e trasparenti, con differenze nette tra ristorazione e alberghi."
              : "Clear and transparent offers, with dedicated setups for restaurants and hospitality."}
          </p>

          <div className="mt-6 flex w-full flex-wrap gap-2 rounded-2xl border border-white/15 bg-black/10 p-2 sm:inline-flex sm:w-auto sm:gap-0 sm:rounded-full sm:p-1">
            <button
              type="button"
              onClick={() => setSelectedCategory("ristoranti")}
              className={
                "focus-ring rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm " +
                (selectedCategory === "ristoranti"
                  ? "bg-white/90 text-slate-900"
                  : "text-foreground/80 hover:text-foreground")
              }
              aria-pressed={selectedCategory === "ristoranti"}
            >
              {locale === "it" ? "Ristoranti" : "Restaurants"}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("hotel")}
              className={
                "focus-ring rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm " +
                (selectedCategory === "hotel"
                  ? "bg-white/90 text-slate-900"
                  : "text-foreground/80 hover:text-foreground")
              }
              aria-pressed={selectedCategory === "hotel"}
            >
              <span className="sm:hidden">
                {locale === "it" ? "Hotel / Ville" : "Hotels / Villas"}
              </span>
              <span className="hidden sm:inline">
                {locale === "it"
                  ? "Hotel / Ville / B&B"
                  : "Hotels / Villas / B&B"}
              </span>
            </button>
          </div>
        </motion.div>

        <div className="mt-10">
          <div className="mb-5">
            <h3 className="heading-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {activeCategory.title}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-(--muted)">
              {activeCategory.subtitle}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {activeCategory.cards.map((p) => (
              <motion.div
                key={`${activeCategory.key}-${p.name}`}
                className={
                  "group card-tech relative overflow-hidden rounded-3xl p-6 transition-transform " +
                  (p.highlight
                    ? "glass-strong gradient-border"
                    : "glass gradient-border")
                }
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={reduce ? undefined : { y: -2 }}
              >
                <span aria-hidden="true" className="sweep-strip" />

                <div className="mb-4 aspect-5/3 overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src={p.image}
                    alt={
                      locale === "it"
                        ? `Anteprima pacchetto ${p.name}`
                        : `Package preview ${p.name}`
                    }
                    width={900}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="text-xs font-semibold tracking-widest text-(--muted)">
                  {p.name}
                </p>
                <p className="mt-1 text-xs font-semibold text-(--muted)">
                  {p.target}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight">
                  {p.tagline}
                </p>

                <ul className="mt-5 space-y-3">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm leading-7"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-(--muted)">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary focus-ring w-full"
                    onClick={() =>
                      trackCtaClick({
                        posizione: "pacchetti",
                        destinazione: "calendly",
                        nomePacchetto: p.trackingName,
                      })
                    }
                  >
                    {locale === "it"
                      ? "Prenota analisi gratuita"
                      : "Book free audit"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#preventivo"
                    className="btn-secondary focus-ring w-full"
                    onClick={() =>
                      trackCtaClick({
                        posizione: "pacchetti",
                        destinazione: "preventivo",
                        nomePacchetto: p.trackingName,
                      })
                    }
                  >
                    {locale === "it" ? "Ricevi proposta" : "Get proposal"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
