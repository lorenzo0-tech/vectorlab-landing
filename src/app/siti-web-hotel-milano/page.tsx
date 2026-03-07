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
  title: "Siti Web per Aziende a Milano",
  description:
    "Sviluppo siti web per aziende a Milano: esperienza mobile-first, percorso di contatto chiaro e base SEO tecnica orientata alla conversione.",
  keywords: [
    "siti web aziende Milano",
    "creazione sito aziendale Milano",
    "agenzia web aziende Milano",
    "sito web professionale Milano",
  ],
  alternates: {
    canonical: "/siti-web-hotel-milano",
  },
  openGraph: {
    title: `Siti Web per Aziende a Milano | ${COMPANY_NAME}`,
    description:
      "Siti web per aziende a Milano progettati per generare contatti e conversioni.",
    url: "/siti-web-hotel-milano",
    type: "article",
    locale: "it_IT",
  },
};

export default async function SitiWebHotelMilanoPage() {
  const cookieStore = await cookies();
  const locale =
    cookieStore.get("site_locale_v1")?.value === "en" ? "en" : "it";
  const punti =
    locale === "it"
      ? [
          "Percorso di contatto semplice, con CTA visibili su mobile",
          "Messaggi orientati a richieste dirette e riduzione della dispersione",
          "SEO locale di base per intercettare ricerche aziendali su Milano",
        ]
      : [
          "Simple contact path, with mobile-visible CTAs",
          "Messaging aimed at direct requests and lower traffic leakage",
          "Local SEO baseline to capture business searches in Milan",
        ];

  const faq =
    locale === "it"
      ? [
          {
            q: "Un sito professionale può aumentare le richieste?",
            a: "Sì, una struttura chiara con call to action evidenti e contenuti orientati all'utente riduce la dispersione e facilita richieste dirette.",
          },
          {
            q: "Quanto conta la velocità su mobile per un'azienda?",
            a: "Conta molto: gli utenti valutano rapidamente servizi e offerte da smartphone. Performance e chiarezza incidono sulla conversione.",
          },
          {
            q: "Il sito è pensato anche per ricerche locali su Milano?",
            a: "Sì, impostiamo una base SEO locale tecnica e contenutistica per intercettare intenti di ricerca legati ai tuoi servizi nella città.",
          },
        ]
      : [
          {
            q: "Can a professional website increase direct requests?",
            a: "Yes, a clear structure with visible calls to action and user-oriented content reduces drop-off and improves direct requests.",
          },
          {
            q: "How important is mobile speed for a business?",
            a: "Very important: users evaluate services and offers quickly on smartphone. Performance and clarity affect conversion.",
          },
          {
            q: "Is the site designed for local searches in Milan too?",
            a: "Yes, we set a technical and content local SEO baseline to capture search intent for your services in the city.",
          },
        ];

  const cleanSiteUrl = SITE_URL.replace(/\/+$/, "");
  const pageUrl = `${cleanSiteUrl}/siti-web-hotel-milano`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name:
          locale === "it"
            ? "Siti web per aziende a Milano"
            : "Business websites in Milan",
        serviceType:
          locale === "it"
            ? "Creazione siti web per aziende"
            : "Business website development",
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
                ? "Siti web per aziende a Milano"
                : "Business websites in Milan",
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
                ? "Siti web per aziende a Milano"
                : "Business websites in Milan"}
            </h1>
            <p className="mt-4 text-(--muted)">
              {locale === "it"
                ? "Progettiamo siti web per aziende con un percorso chiaro verso il contatto e la conversione. Design premium, struttura orientata ai risultati e scelte tecniche pensate per una presenza locale solida."
                : "We design business websites with a clear path to contact and conversion. Premium design, results-oriented structure, and technical choices built for a solid local presence."}
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
                  ? "FAQ su siti web per aziende a Milano"
                  : "FAQ about business websites in Milan"}
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
                href="/siti-web-ristoranti-milano"
                className="btn-secondary focus-ring inline-flex"
              >
                {locale === "it"
                  ? "Vedi anche: siti web professionali Milano"
                  : "See also: professional websites Milan"}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
