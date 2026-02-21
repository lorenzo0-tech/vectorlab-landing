import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  CALENDLY_URL,
  COMPANY_CITY,
  COMPANY_NAME,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Siti Web per Hotel a Milano",
  description:
    "Sviluppo siti web per hotel a Milano: esperienza mobile-first, percorso prenotazione chiaro e base SEO tecnica orientata a conversione.",
  keywords: [
    "siti web hotel Milano",
    "creazione sito hotel Milano",
    "agenzia web hotel Milano",
    "sito prenotazioni hotel Milano",
  ],
  alternates: {
    canonical: "/siti-web-hotel-milano",
  },
  openGraph: {
    title: `Siti Web per Hotel a Milano | ${COMPANY_NAME}`,
    description:
      "Siti web per hotel a Milano progettati per richieste dirette e prenotazioni.",
    url: "/siti-web-hotel-milano",
    type: "article",
    locale: "it_IT",
  },
};

const punti = [
  "Percorso prenotazione semplice, con CTA visibili su mobile",
  "Messaggi orientati a richieste dirette e riduzione dispersione traffico",
  "SEO locale di base per intercettare ricerche hotel su Milano",
] as const;

export default function SitiWebHotelMilanoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Siti web per hotel a Milano",
    serviceType: "Creazione siti web per hotel",
    areaServed: {
      "@type": "City",
      name: COMPANY_CITY,
    },
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL.replace(/\/+$/, "")}/siti-web-hotel-milano`,
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
              Siti web per hotel a Milano
            </h1>
            <p className="mt-4 text-(--muted)">
              Progettiamo siti web per hotel con un percorso chiaro verso
              prenotazione e contatto. Design premium, struttura orientata alla
              conversione e scelte tecniche pensate per una presenza locale
              solida.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-(--muted)">
              {punti.map((punto) => (
                <li key={punto} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                  <span>{punto}</span>
                </li>
              ))}
            </ul>

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
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
