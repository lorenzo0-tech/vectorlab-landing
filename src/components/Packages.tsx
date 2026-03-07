"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { CALENDLY_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";

type PackageCard = {
  name: string;
  trackingName: "BASE" | "VETRINA" | "CRESCITA";
  tagline: string;
  price: string;
  points: string[];
  image: string;
  target: string;
  highlight?: boolean;
};

export function Packages() {
  const { locale } = useLanguage();

  const cards: PackageCard[] =
    locale === "it"
      ? [
          {
            name: "STARTER",
            trackingName: "BASE",
            tagline: "Base solida per iniziare a crescere online.",
            price: "A partire da €1.490",
            points: [
              "Sito professionale fino a 5 sezioni (home, servizi, chi siamo, contatti, richiesta informazioni)",
              "CTA dirette a WhatsApp/telefono/modulo contatto",
              "Ottimizzazione smartphone-first e tempi di caricamento rapidi",
              "SEO base (struttura tecnica + contenuti orientati alla ricerca)",
              "Consegna tipica in 14 giorni",
            ],
            image: "/images/business/pkg-starter.jpg",
            target: "Professionisti, studi, attività locali",
          },
          {
            name: "BUSINESS",
            trackingName: "VETRINA",
            tagline:
              "Per aziende che vogliono distinguersi e convertire di più.",
            price: "A partire da €2.990",
            highlight: true,
            points: [
              "Tutto del piano Starter",
              "Design premium personalizzato sul posizionamento del brand",
              "Galleria fotografica avanzata e sezioni storytelling",
              "Integrazione moduli richieste e funzionalità specifiche",
              "Tracking conversioni principali (clic CTA, contatti, mappa)",
              "Setup blog/notizie o sezioni dinamiche",
            ],
            image: "/images/business/pkg-business.jpg",
            target: "PMI, brand in crescita, aziende ambiziose",
          },
          {
            name: "ENTERPRISE",
            trackingName: "CRESCITA",
            tagline:
              "Soluzione su misura per progetti complessi e obiettivi ambiziosi.",
            price: "Da €5.500",
            points: [
              "Architettura su misura multi-sede o multi-brand",
              "Funzionalità dedicate (CRM, booking, integrazioni esterne)",
              "Strategia contenuti e funnel completi di acquisizione",
              "Performance e SEO avanzata con roadmap trimestrale",
              "Supporto continuativo e sviluppo evolutivo",
            ],
            image: "/images/business/team-meeting.jpg",
            target: "Gruppi aziendali, realtà strutturate, progetti complessi",
          },
        ]
      : [
          {
            name: "STARTER",
            trackingName: "BASE",
            tagline: "Strong baseline to grow your online presence.",
            price: "From €1,490",
            points: [
              "Professional website up to 5 sections",
              "Direct CTAs to WhatsApp/phone/contact form",
              "Smartphone-first speed optimization",
              "SEO fundamentals (technical structure + search-oriented content)",
              "Typical delivery in 14 days",
            ],
            image: "/images/business/pkg-starter.jpg",
            target: "Professionals, studios, local businesses",
          },
          {
            name: "BUSINESS",
            trackingName: "VETRINA",
            tagline:
              "For companies that want higher positioning and conversion.",
            price: "From €2,990",
            highlight: true,
            points: [
              "Everything in Starter",
              "Premium custom design tailored to your brand",
              "Advanced visual storytelling blocks",
              "Custom inquiry forms and specific features",
              "Core conversion tracking",
              "Blog/news or dynamic sections setup",
            ],
            image: "/images/business/pkg-business.jpg",
            target: "SMEs, growing brands, ambitious businesses",
          },
          {
            name: "ENTERPRISE",
            trackingName: "CRESCITA",
            tagline: "Tailored solution for complex projects and big goals.",
            price: "From €5,500",
            points: [
              "Custom architecture for multi-location brands",
              "Advanced integrations and custom features (CRM, booking, APIs)",
              "Full acquisition funnel strategy",
              "Advanced SEO/performance roadmap",
              "Ongoing optimization and development support",
            ],
            image: "/images/business/team-meeting.jpg",
            target: "Corporate groups, structured businesses, complex projects",
          },
        ];

  return (
    <section id="pacchetti" className="section-pad">
      <div className="container-pad">
        <div className="reveal">
          <h2 className="heading-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
            {locale === "it" ? (
              <>
                <span className="heading-accent">Pacchetti</span>
              </>
            ) : (
              <>
                <span className="heading-accent">Packages</span>
              </>
            )}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Offerte chiare e trasparenti, pensate per aziende di ogni dimensione e settore."
              : "Clear and transparent offers, designed for businesses of every size and industry."}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid gap-4 lg:grid-cols-3">
            {cards.map((p) => (
              <div
                key={p.name}
                className={
                  "group card-tech relative overflow-hidden rounded-3xl p-6 transition-transform reveal " +
                  (p.highlight
                    ? "glass-strong gradient-border card-highlight-glow"
                    : "glass gradient-border")
                }
              >
                <span aria-hidden="true" className="sweep-strip" />

                <div className="mb-4 aspect-5/3 overflow-hidden rounded-2xl border border-black/10 img-reveal reveal">
                  <Image
                    src={p.image}
                    alt={
                      locale === "it"
                        ? `Anteprima pacchetto ${p.name}`
                        : `Package preview ${p.name}`
                    }
                    width={900}
                    height={540}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <p className="text-xs font-semibold tracking-widest text-(--muted)">
                  {p.name}
                </p>
                {p.highlight && (
                  <span className="mt-2 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-1 text-[10px] font-bold tracking-wider text-slate-950 uppercase">
                    {locale === "it" ? "Consigliato" : "Recommended"}
                  </span>
                )}
                <p className="mt-1 text-xs font-semibold text-(--muted)">
                  {p.target}
                </p>
                <p className="mt-3 text-2xl font-bold tracking-tight text-cyan-200">
                  {p.price}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight">
                  {p.tagline}
                </p>

                <ul className="mt-5 space-y-3">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm leading-7"
                    >
                      <span className="mt-0.5 icon-chip-cyan h-6 w-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
