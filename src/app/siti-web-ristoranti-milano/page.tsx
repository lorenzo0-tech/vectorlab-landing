import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  CALENDLY_URL,
  COMPANY_CITY,
  COMPANY_NAME,
  LOGO_IMAGE_PATH,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Siti Web per Ristoranti a Milano",
  description:
    "Progettazione siti web per ristoranti a Milano: strategia, UX mobile-first, menu chiaro e percorso orientato a prenotazioni e richieste.",
  keywords: [
    "siti web ristoranti Milano",
    "creazione sito ristorante Milano",
    "agenzia web ristoranti Milano",
    "landing page ristorante Milano",
  ],
  alternates: {
    canonical: "/siti-web-ristoranti-milano",
  },
  openGraph: {
    title: `Siti Web per Ristoranti a Milano | ${COMPANY_NAME}`,
    description:
      "Siti web per ristoranti a Milano orientati a prenotazioni e conversione.",
    url: "/siti-web-ristoranti-milano",
    type: "article",
    locale: "it_IT",
  },
};

const punti = [
  "Struttura mobile-first per utenti che cercano tavolo da smartphone",
  "Menu, CTA e contatti in evidenza per aumentare richieste e chiamate",
  "Base SEO locale pulita per ricerche geo-localizzate su Milano",
] as const;

const faq = [
  {
    q: "Quanto tempo serve per pubblicare un sito ristorante a Milano?",
    a: "In molti casi servono circa 2-4 settimane, in base a contenuti disponibili, numero di pagine e integrazioni richieste.",
  },
  {
    q: "Il menu viene gestito in modo semplice anche da smartphone?",
    a: "Sì, progettiamo una struttura menu veloce da consultare, con percorsi chiari per prenotazione, chiamata e richiesta informazioni.",
  },
  {
    q: "Il sito aiuta davvero la visibilità locale su Milano?",
    a: "La base SEO locale è progettata per supportare le ricerche geolocalizzate, con struttura tecnica pulita e contenuti orientati all'intento di ricerca.",
  },
] as const;

export default function SitiWebRistorantiMilanoPage() {
  const cleanSiteUrl = SITE_URL.replace(/\/+$/, "");
  const pageUrl = `${cleanSiteUrl}/siti-web-ristoranti-milano`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Siti web per ristoranti a Milano",
        serviceType: "Creazione siti web per ristoranti",
        areaServed: {
          "@type": "City",
          name: COMPANY_CITY,
        },
        provider: {
          "@type": "Organization",
          name: COMPANY_NAME,
          url: cleanSiteUrl,
          logo: `${cleanSiteUrl}${LOGO_IMAGE_PATH}`,
        },
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: cleanSiteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Siti web per ristoranti a Milano",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <article className="glass-strong gradient-border panel-tech mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <p className="text-xs font-semibold tracking-[0.16em] text-cyan-100/90 uppercase">
              SEO Locale · Milano
            </p>
            <h1 className="heading-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Siti web per ristoranti a Milano
            </h1>
            <p className="mt-4 text-(--muted)">
              Realizziamo siti web per ristoranti con un approccio orientato a
              prenotazioni, chiamate e richieste reali. Layout pulito,
              performance solide e messaggi chiari per chi cerca un locale a
              Milano.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-(--muted)">
              {punti.map((punto) => (
                <li key={punto} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                  <span>{punto}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-cyan-200/20 bg-slate-900/45 p-5 sm:p-6">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                FAQ su siti web per ristoranti a Milano
              </h2>
              <div className="mt-4 space-y-4">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-sm font-semibold text-foreground sm:text-base">
                      {item.q}
                    </h3>
                    <p className="mt-1 text-sm text-(--muted)">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-ring"
              >
                Prenota una chiamata
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href="/" className="btn-secondary focus-ring inline-flex">
                <ArrowLeft className="h-4 w-4" />
                Torna alla home
              </Link>
              <Link
                href="/siti-web-hotel-milano"
                className="btn-secondary focus-ring inline-flex"
              >
                Vedi anche: siti web hotel Milano
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
