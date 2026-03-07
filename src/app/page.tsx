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
import { getServerLocale } from "@/lib/server-locale";

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
  const locale = await getServerLocale();

  const homepageFaq =
    locale === "it"
      ? [
          {
            question: "In quanto tempo consegnate?",
            answer:
              "In molti casi la consegna tipica è 14 giorni, in base alla complessità del progetto.",
          },
          {
            question: "Quanto costa un sito web per la mia azienda?",
            answer:
              "I pacchetti partono da \u20ac1.490. Prenota un'analisi gratuita per un preventivo su misura.",
          },
          {
            question: "Il sito sarà adatto a Google?",
            answer:
              "Sì, la base include struttura SEO locale, performance e contenuti orientati alla ricerca.",
          },
          {
            question: "Posso aggiornare i contenuti da solo?",
            answer:
              "Sì. Consegniamo il sito con una struttura facilmente aggiornabile. Offriamo anche piani di manutenzione mensile.",
          },
          {
            question: "Il sito è di mia proprietà?",
            answer:
              "Assolutamente sì. Dominio, contenuti e immagini restano tuoi, senza vincoli di lock-in.",
          },
          {
            question: "Cosa succede dopo la consegna?",
            answer:
              "Puoi gestire il sito in autonomia oppure attivare un piano di manutenzione: Essential, Business o Performance.",
          },
          {
            question: "Come misurate se sta funzionando?",
            answer:
              "Tracciamo le azioni principali come clic su call to action, contatti e richieste.",
          },
          {
            question: "Lavorate solo a Milano?",
            answer:
              "Siamo basati a Milano, ma lavoriamo in tutta Italia e con aziende internazionali.",
          },
        ]
      : [
          {
            question: "How long is delivery?",
            answer:
              "In many cases, typical delivery is 14 days depending on project complexity.",
          },
          {
            question: "How much does a website cost for my business?",
            answer:
              "Packages start from \u20ac1,490. Book a free audit for a tailored quote.",
          },
          {
            question: "Will the website be Google-friendly?",
            answer:
              "Yes, the base includes local SEO structure, performance, and search-oriented content.",
          },
          {
            question: "Can I update the content myself?",
            answer:
              "Yes. We deliver the site with an easily updatable structure. We also offer monthly maintenance plans.",
          },
          {
            question: "Do I own the website?",
            answer:
              "Absolutely. The domain, content, and images are yours, with no lock-in.",
          },
          {
            question: "What happens after delivery?",
            answer:
              "You can manage the site yourself or activate a maintenance plan: Essential, Business, or Performance.",
          },
          {
            question: "How do you measure if it is working?",
            answer:
              "We track key actions such as CTA clicks, contacts, and lead requests.",
          },
          {
            question: "Do you only work in Milan?",
            answer:
              "We're based in Milan, but we work across Italy and with international businesses.",
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
            ? `${COMPANY_NAME} - Progettazione siti web per aziende`
            : `${COMPANY_NAME} - Business website design`,
        areaServed: "IT",
        address: {
          "@type": "PostalAddress",
          addressLocality: COMPANY_CITY,
          addressCountry: "IT",
        },
        serviceType:
          locale === "it"
            ? [
                "Creazione siti web per aziende",
                "Sviluppo siti web professionali",
                "Sviluppo pagina di atterraggio per conversione",
              ]
            : [
                "Website design for businesses",
                "Professional website development",
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
