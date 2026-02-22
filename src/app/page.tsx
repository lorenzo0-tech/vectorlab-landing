"use client";

import dynamic from "next/dynamic";
import {
  AmbientBackdrop,
  GateOverlay,
  Hero,
  Navbar,
  TrustBar,
} from "@/components";
import {
  COMPANY_CITY,
  COMPANY_NAME,
  COMPANY_VAT,
  LOGO_IMAGE_PATH,
  SITE_URL,
} from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";

const CaseStudies = dynamic(() =>
  import("@/components/CaseStudies").then((mod) => mod.CaseStudies),
);
const Problem = dynamic(() =>
  import("@/components/Problem").then((mod) => mod.Problem),
);
const Solution = dynamic(() =>
  import("@/components/Solution").then((mod) => mod.Solution),
);
const Packages = dynamic(() =>
  import("@/components/Packages").then((mod) => mod.Packages),
);
const Process = dynamic(() =>
  import("@/components/Process").then((mod) => mod.Process),
);
const FAQ = dynamic(() => import("@/components/FAQ").then((mod) => mod.FAQ));
const FinalCTA = dynamic(() =>
  import("@/components/FinalCTA").then((mod) => mod.FinalCTA),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((mod) => mod.Footer),
);

export default function Home() {
  const { locale } = useLanguage();

  const homepageFaq =
    locale === "it"
      ? [
          {
            question: "In quanto tempo consegnate?",
            answer:
              "In molti casi la consegna tipica è 14 giorni, in base alla complessità del progetto.",
          },
          {
            question: "Il sito sarà adatto a Google?",
            answer:
              "Sì, la base include struttura SEO locale, performance e contenuti orientati alla ricerca.",
          },
          {
            question: "Come misurate se sta funzionando?",
            answer:
              "Tracciamo le azioni principali come clic su call to action, contatti e richieste.",
          },
        ]
      : [
          {
            question: "How long is delivery?",
            answer:
              "In many cases, typical delivery is 14 days depending on project complexity.",
          },
          {
            question: "Will the website be Google-friendly?",
            answer:
              "Yes, the base includes local SEO structure, performance, and search-oriented content.",
          },
          {
            question: "How do you measure if it is working?",
            answer:
              "We track key actions such as CTA clicks, contacts, and lead requests.",
          },
        ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: COMPANY_NAME,
        url: SITE_URL,
        logo: `${SITE_URL.replace(/\/+$/, "")}${LOGO_IMAGE_PATH}`,
        vatID: COMPANY_VAT,
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY_CITY,
          addressCountry: "IT",
        },
      },
      {
        "@type": "ProfessionalService",
        name:
          locale === "it"
            ? `${COMPANY_NAME} - Progettazione siti per ospitalità`
            : `${COMPANY_NAME} - Hospitality website design`,
        areaServed: "IT",
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY_CITY,
          addressCountry: "IT",
        },
        serviceType:
          locale === "it"
            ? [
                "Creazione siti web per ristoranti",
                "Creazione siti web per hotel",
                "Sviluppo pagina di atterraggio per conversione",
              ]
            : [
                "Website design for restaurants",
                "Website design for hotels",
                "Conversion-focused landing page development",
              ],
        provider: {
          "@type": "Organization",
          name: COMPANY_NAME,
        },
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        name: COMPANY_NAME,
        url: SITE_URL,
        inLanguage: locale === "it" ? "it-IT" : "en-US",
      },
      {
        "@type": "FAQPage",
        mainEntity: homepageFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <main className="main-ambient overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AmbientBackdrop />
        <GateOverlay />
        <div>
          <Navbar />
          <Hero />
          <div className="section-tone pb-10">
            <TrustBar />
          </div>
          <div className="divider-tech section-tone">
            <CaseStudies />
          </div>
          <div className="divider-tech section-tone">
            <Problem />
          </div>
          <div className="divider-tech section-tone">
            <Solution />
          </div>
          <div className="divider-tech section-tone">
            <Packages />
          </div>
          <div className="divider-tech section-tone">
            <Process />
          </div>
          <div className="divider-tech section-tone">
            <FAQ />
          </div>
          <div className="divider-tech section-tone">
            <FinalCTA />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
