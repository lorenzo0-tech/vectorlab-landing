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
  title: "Siti Web Professionali a Milano",
  description:
    "Progettazione siti web professionali a Milano: strategia, UX mobile-first e struttura orientata alla conversione per aziende di ogni settore.",
  keywords: [
    "siti web professionali Milano",
    "creazione sito aziendale Milano",
    "web agency Milano",
    "sviluppo siti web Milano",
  ],
  alternates: {
    canonical: "/siti-web-ristoranti-milano",
  },
  openGraph: {
    title: `Siti Web Professionali a Milano | ${COMPANY_NAME}`,
    description:
      "Siti web professionali a Milano orientati alla conversione e ai risultati concreti.",
    url: "/siti-web-ristoranti-milano",
    type: "article",
    locale: "it_IT",
  },
};

export default async function SitiWebRistorantiMilanoPage() {
  const punti = [
    "Struttura pensata prima di tutto per smartphone, per chi cerca rapidamente i tuoi servizi a Milano",
    "Contatti, chiamata e richiesta informazioni sempre in evidenza nei punti decisivi",
    "Base SEO locale pulita per intercettare ricerche geolocalizzate su Milano e dintorni",
  ];

  const faq = [
    {
      q: "Quanto tempo serve per pubblicare un sito professionale a Milano?",
      a: "In molti casi servono circa 2-4 settimane, in base ai contenuti disponibili, al numero di pagine e alle integrazioni richieste.",
    },
    {
      q: "I contenuti si consultano bene anche da smartphone?",
      a: "Sì, progettiamo percorsi chiari e veloci, con accessi diretti a contatto, chiamata e richiesta informazioni.",
    },
    {
      q: "Il sito aiuta davvero la visibilità locale su Milano?",
      a: "Sì, la base SEO locale è pensata per sostenere le ricerche geolocalizzate, con struttura tecnica ordinata e contenuti coerenti con l'intento di ricerca.",
    },
  ];

  const cleanSiteUrl = SITE_URL.replace(/\/+$/, "");
  const pageUrl = `${cleanSiteUrl}/siti-web-ristoranti-milano`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Siti web professionali a Milano",
        serviceType: "Creazione di siti web professionali",
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
            name: "Siti web professionali a Milano",
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
              SEO locale · Milano
            </p>
            <h1 className="heading-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Siti web professionali a Milano
            </h1>
            <p className="mt-4 text-(--muted)">
              Realizziamo siti web per aziende e professionisti con un approccio orientato a richieste, contatti e risultati concreti. Struttura chiara, prestazioni solide e messaggi puliti per chi cerca i tuoi servizi a Milano.
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
                FAQ sui siti web professionali a Milano
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
                Vedi anche: siti web per aziende a Milano
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
