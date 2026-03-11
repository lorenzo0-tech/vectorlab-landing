import dynamic from "next/dynamic";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TrustBar } from "@/components/TrustBar";
import { CaseStudies } from "@/components/CaseStudies";
import { Problem } from "@/components/Problem";
import { AboutFounder } from "@/components/AboutFounder";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Process } from "@/components/Process";
import {
  COMPANY_CITY,
  COMPANY_NAME,
  COMPANY_VAT,
  LOGO_IMAGE_PATH,
  SITE_URL,
} from "@/lib/constants";

const Solution = dynamic(() =>
  import("@/components/Solution").then((mod) => mod.Solution),
);
const Packages = dynamic(() =>
  import("@/components/Packages").then((mod) => mod.Packages),
);
const Maintenance = dynamic(() =>
  import("@/components/Maintenance").then((mod) => mod.Maintenance),
);
const FAQ = dynamic(() => import("@/components/FAQ").then((mod) => mod.FAQ));
// const GoogleReviews = dynamic(() =>
//   import("@/components/GoogleReviews").then((mod) => mod.GoogleReviews),
// );
const FinalCTA = dynamic(() =>
  import("@/components/FinalCTA").then((mod) => mod.FinalCTA),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((mod) => mod.Footer),
);
const Marquee = dynamic(() =>
  import("@/components/Marquee").then((mod) => mod.Marquee),
);

export default async function Home() {
  const locale = "it";

  const homepageFaq = [
    {
      question: "In quanto tempo consegnate?",
      answer:
        "In molti casi la consegna tipica è di 14 giorni, in base alla complessità del progetto.",
    },
    {
      question: "Quanto costa un sito web per la mia azienda?",
      answer:
        "I pacchetti partono da 1.490 euro. Prenota un'analisi gratuita per ricevere un preventivo su misura.",
    },
    {
      question: "Il sito sarà adatto a Google?",
      answer:
        "Sì, la base include struttura SEO locale, buone prestazioni e contenuti orientati alla ricerca.",
    },
    {
      question: "Posso aggiornare i contenuti da solo?",
      answer:
        "Sì. Consegniamo il sito con una struttura facilmente aggiornabile. Offriamo anche piani di manutenzione mensile.",
    },
    {
      question: "Il sito è di mia proprietà?",
      answer:
        "Assolutamente sì. Dominio, contenuti e immagini restano tuoi, senza vincoli tecnici o contrattuali.",
    },
    {
      question: "Cosa succede dopo la consegna?",
      answer:
        "Puoi gestire il sito in autonomia oppure attivare un piano di manutenzione con aggiornamenti, sicurezza e supporto continuativo.",
    },
    {
      question: "Come misurate se sta funzionando?",
      answer:
        "Tracciamo le azioni principali, come clic sugli inviti all'azione, contatti e richieste.",
    },
    {
      question: "Lavorate solo a Milano?",
      answer:
        "Siamo basati a Milano, ma lavoriamo in tutta Italia e anche con aziende internazionali.",
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
        name: `${COMPANY_NAME} - Progettazione siti web per aziende`,
        areaServed: "IT",
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY_CITY,
          addressCountry: "IT",
        },
        serviceType: [
          "Creazione siti web per aziende",
          "Sviluppo siti web professionali",
          "Sviluppo pagine di atterraggio orientate alla conversione",
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

  return (
    <div className="min-h-screen">
      <main className="main-ambient overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AmbientBackdrop />
        <div>
          <Navbar />
          <Hero />
          <div className="section-tone pb-10">
            <TrustBar locale={locale} />
          </div>
          <Marquee />
          <div className="divider-tech section-tone" data-tone="cyan">
            <CaseStudies locale={locale} />
          </div>
          <div className="divider-tech section-tone" data-tone="indigo">
            <ProjectShowcase locale={locale} />
          </div>
          <div className="divider-tech section-tone" data-tone="warning">
            <Problem locale={locale} />
          </div>
          <div className="divider-tech section-tone" data-tone="cyan">
            <Solution />
          </div>
          <div className="divider-tech section-tone" data-tone="fuchsia">
            <Packages />
          </div>
          <div className="divider-tech section-tone" data-tone="emerald">
            <Maintenance />
          </div>
          <div className="divider-tech section-tone" data-tone="indigo">
            <AboutFounder locale={locale} />
          </div>
          <div className="divider-tech section-tone">
            <Process locale={locale} />
          </div>
          <div className="divider-tech section-tone" data-tone="cyan">
            <FAQ />
          </div>
          {/* <div className="divider-tech section-tone" data-tone="emerald">
            <GoogleReviews />
          </div> */}
          <div className="divider-tech section-tone" data-tone="fuchsia">
            <FinalCTA />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
