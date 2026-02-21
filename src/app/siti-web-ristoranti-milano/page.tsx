import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cookies } from "next/headers";
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

export default async function SitiWebRistorantiMilanoPage() {
  const cookieStore = await cookies();
  const locale =
    cookieStore.get("site_locale_v1")?.value === "en" ? "en" : "it";
  const punti =
    locale === "it"
      ? [
          "Struttura mobile-first per utenti che cercano tavolo da smartphone",
          "Menu, CTA e contatti in evidenza per aumentare richieste e chiamate",
          "Base SEO locale pulita per ricerche geo-localizzate su Milano",
        ]
      : [
          "Mobile-first structure for users searching for a table on smartphone",
          "Menu, CTA and contacts highlighted to increase leads and calls",
          "Clean local SEO base for geo-localized Milan searches",
        ];

  const faq =
    locale === "it"
      ? [
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
        ]
      : [
          {
            q: "How long does it take to publish a restaurant website in Milan?",
            a: "In many cases it takes about 2-4 weeks, depending on available content, number of pages, and required integrations.",
          },
          {
            q: "Can the menu be managed easily on smartphone too?",
            a: "Yes, we design a fast menu structure with clear paths for booking, calling, and requesting information.",
          },
          {
            q: "Does the site really help local visibility in Milan?",
            a: "The local SEO base is designed to support geo-localized searches with clean technical structure and intent-oriented content.",
          },
        ];

  const cleanSiteUrl = SITE_URL.replace(/\/+$/, "");
  const pageUrl = `${cleanSiteUrl}/siti-web-ristoranti-milano`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name:
          locale === "it"
            ? "Siti web per ristoranti a Milano"
            : "Restaurant websites in Milan",
        serviceType:
          locale === "it"
            ? "Creazione siti web per ristoranti"
            : "Restaurant website development",
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
            name:
              locale === "it"
                ? "Siti web per ristoranti a Milano"
                : "Restaurant websites in Milan",
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
              {locale === "it" ? "SEO Locale · Milano" : "Local SEO · Milan"}
            </p>
            <h1 className="heading-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {locale === "it"
                ? "Siti web per ristoranti a Milano"
                : "Restaurant websites in Milan"}
            </h1>
            <p className="mt-4 text-(--muted)">
              {locale === "it"
                ? "Realizziamo siti web per ristoranti con un approccio orientato a prenotazioni, chiamate e richieste reali. Layout pulito, performance solide e messaggi chiari per chi cerca un locale a Milano."
                : "We build restaurant websites with a booking-, call-, and lead-focused approach. Clean layout, solid performance, and clear messaging for people searching in Milan."}
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
                {locale === "it"
                  ? "FAQ su siti web per ristoranti a Milano"
                  : "FAQ about restaurant websites in Milan"}
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
                {locale === "it" ? "Prenota una chiamata" : "Book a call"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link href="/" className="btn-secondary focus-ring inline-flex">
                <ArrowLeft className="h-4 w-4" />
                {locale === "it" ? "Torna alla home" : "Back to home"}
              </Link>
              <Link
                href="/siti-web-hotel-milano"
                className="btn-secondary focus-ring inline-flex"
              >
                {locale === "it"
                  ? "Vedi anche: siti web hotel Milano"
                  : "See also: hotel websites Milan"}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
