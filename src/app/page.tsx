"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AmbientBackdrop,
  CaseStudies,
  FAQ,
  FinalCTA,
  Footer,
  GateOverlay,
  Hero,
  Navbar,
  Packages,
  Problem,
  Process,
  Solution,
  TrustBar,
  VetrinaRistorante,
} from "@/components";
import {
  COMPANY_CITY,
  COMPANY_NAME,
  SITE_URL,
  COMPANY_VAT,
} from "@/lib/constants";

const homepageFaq = [
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
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
      vatID: COMPANY_VAT,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY_CITY,
        addressCountry: "IT",
      },
    },
    {
      "@type": "ProfessionalService",
      name: `${COMPANY_NAME} - Progettazione siti per ospitalità`,
      areaServed: "IT",
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY_CITY,
        addressCountry: "IT",
      },
      serviceType: [
        "Creazione siti web per ristoranti",
        "Creazione siti web per hotel",
        "Sviluppo pagina di atterraggio per conversione",
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
      inLanguage: "it-IT",
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="main-ambient overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AmbientBackdrop />
        <GateOverlay />
        <AnimatePresence>
          <motion.div
            key="site"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
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
              <VetrinaRistorante />
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
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
