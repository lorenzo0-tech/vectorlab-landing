import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import { ReservationCalendar } from "@/components/the_restaurant/ReservationCalendar";

export const metadata: Metadata = {
  title: "Restaurant demo",
  description: "Internal demo page.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
};

export default async function DemoRistorantePage() {
  const cookieStore = await cookies();
  const rawLocale = cookieStore.get("site_locale_v1")?.value;
  const locale = rawLocale === "en" ? "en" : "it";
  const isEn = locale === "en";

  const t = isEn
    ? {
        skip: "Skip to main content",
        navLabel: "Main navigation",
        navMenu: "Menu",
        navExperiences: "Experiences",
        navAtmosphere: "Atmosphere",
        navBook: "Book",
        heroEyebrow: "Contemporary fine dining — Milan",
        heroTitle:
          "An Italian dining experience that feels from the future, with a handcrafted soul.",
        heroText:
          "Atelier Nove blends culinary research, sensory design, and tailored service. A setup designed to truly stand out in the Italian market.",
        heroPrimaryCta: "Book your table",
        heroSecondaryCta: "Explore tasting paths",
        heroDish: "Signature dish · Atelier Nove",
        availabilityTitle: "Availability this week",
        tablesPerNight: "Tables / night",
        avgRating: "Average rating",
        tastingPaths: "Tasting paths",
        firstDinner: "First dinner seating",
        availabilityText:
          "Open kitchen, evolving wine list, and alcohol-free pairings by our beverage lab.",
        featurePills: [
          "Traceable Italian ingredients",
          "Sound atmosphere calibrated for service",
          "Dynamic lighting for each course",
        ],
        menuTitle: "Tasting menu",
        menuNote: "Wine or non-alcoholic pairing also available",
        experiencesTitle: "Signature Atelier Nove experiences",
        atmosphereTitle: "Atmosphere",
        bookingTitle: "Book your experience",
        bookingText:
          "Open Tuesday to Sunday. Dinner seatings: 7:15 PM and 9:30 PM. Tasting lunch on Saturday and Sunday.",
        faqTitle: "Frequently asked questions",
        footerText:
          "© 2026 Atelier Nove — showcase demo website (fictional content)",
        footerLinks: "Instagram • Guides • Gift card",
        mobileBook: "Book now",
        mobileCall: "Call the restaurant",
      }
    : {
        skip: "Vai al contenuto principale",
        navLabel: "Navigazione principale",
        navMenu: "Menu",
        navExperiences: "Esperienze",
        navAtmosphere: "Atmosfera",
        navBook: "Prenota",
        heroEyebrow: "Alta cucina contemporanea — Milano",
        heroTitle:
          "Un’esperienza gastronomica italiana che sembra arrivare dal futuro, ma con anima artigianale.",
        heroText:
          "Atelier Nove unisce ricerca culinaria, progettazione sensoriale e servizio sartoriale. Un&apos;impostazione costruita per distinguersi davvero nel mercato italiano.",
        heroPrimaryCta: "Prenota il tuo tavolo",
        heroSecondaryCta: "Scopri i percorsi degustazione",
        heroDish: "Piatto simbolo · Atelier Nove",
        availabilityTitle: "Disponibilità questa settimana",
        tablesPerNight: "Tavoli / sera",
        avgRating: "Valutazione media",
        tastingPaths: "Percorsi degustazione",
        firstDinner: "Primo turno cena",
        availabilityText:
          "Cucina aperta, carta vini in evoluzione e abbinamenti analcolici firmati dal nostro laboratorio bevande.",
        featurePills: [
          "Ingredienti italiani tracciati",
          "Atmosfera sonora calibrata per il servizio",
          "Illuminazione dinamica per ogni portata",
        ],
        menuTitle: "Menu degustazione",
        menuNote: "Disponibile anche abbinamento vini o analcolico",
        experiencesTitle: "Esperienze firmate Atelier Nove",
        atmosphereTitle: "Atmosfera",
        bookingTitle: "Prenota la tua esperienza",
        bookingText:
          "Aperto dal martedì alla domenica. Turni cena: 19:15 e 21:30. Pranzo degustazione il sabato e la domenica.",
        faqTitle: "Domande frequenti",
        footerText:
          "© 2026 Atelier Nove — sito dimostrativo vetrina (contenuti fittizi)",
        footerLinks: "Instagram • Guide • Carta regalo",
        mobileBook: "Prenota ora",
        mobileCall: "Chiama il ristorante",
      };

  const menuDegustazione = isEn
    ? [
        {
          nome: "Dawn Journey",
          descrizione: "6 courses, seasonal vegetables, catch of the day",
          prezzo: "€95",
          esempi: [
            "Oyster, green apple, and mountain celery",
            "Ricotta gnocchi, smoked tomato water",
            "Seared amberjack, fennel, and black lemon",
            "Citrus and basil pre-dessert",
            "Dessert: milk, honey, and saffron",
          ],
        },
        {
          nome: "Ember Journey",
          descrizione: "7 courses, selected meats and charcoal cooking",
          prezzo: "€115",
          esempi: [
            "Malt bread, hazelnut butter, and smoked salt",
            "Crispy sweetbread, spring onion, and rich jus",
            "Plin pasta filled with guinea fowl roast reduction",
            "Charcoal pigeon, turnip, and fermented cherry",
            "Dessert: 70% chocolate, bay leaf, and coffee",
          ],
        },
        {
          nome: "Icons Journey",
          descrizione: "9 signature courses with dedicated pairing",
          prezzo: "€145",
          esempi: [
            "Italian caviar, potato, and sour cream",
            "Raw langoustine, mandarin beurre blanc",
            "Creamy risotto with burnt lemon and capers",
            "Turbot, flame-charred lettuce, and champagne sauce",
            "Lamb, artichoke, mint, and reduced jus",
            "Pre-dessert: pear, verbena, and timut pepper",
            "Dessert: vanilla, hazelnut, and extra virgin olive oil",
          ],
        },
      ]
    : [
        {
          nome: "Percorso Alba",
          descrizione: "6 portate, vegetali stagionali, pescato del giorno",
          prezzo: "€95",
          esempi: [
            "Ostrica, mela verde e sedano di montagna",
            "Gnocchi di ricotta, acqua di pomodoro affumicato",
            "Ricciola scottata, finocchio e limone nero",
            "Predessert agli agrumi e basilico",
            "Dessert: latte, miele e zafferano",
          ],
        },
        {
          nome: "Percorso Braci",
          descrizione: "7 portate, carni selezionate e cotture al carbone",
          prezzo: "€115",
          esempi: [
            "Pane al malto, burro nocciola e sale affumicato",
            "Animella croccante, cipollotto e jus denso",
            "Plin ripieni di faraona al fondo arrosto",
            "Piccione alla brace, rapa e ciliegia fermentata",
            "Dessert: cioccolato 70%, alloro e caffè",
          ],
        },
        {
          nome: "Percorso Icone",
          descrizione: "9 portate simbolo con abbinamento dedicato",
          prezzo: "€145",
          esempi: [
            "Caviale italiano, patata e panna acida",
            "Scampo crudo, beurre blanc al mandarino",
            "Risotto mantecato al limone bruciato e capperi",
            "Rombo, lattuga alla fiamma e salsa champagne",
            "Agnello, carciofo, menta e fondo ridotto",
            "Predessert: pera, verbena e pepe timut",
            "Dessert: vaniglia, nocciola e olio extravergine",
          ],
        },
      ];

  const esperienze = isEn
    ? [
        {
          titolo: "Chef's table",
          testo:
            "8 front-row seats by the kitchen, direct dialogue with the brigade, and off-menu creations.",
        },
        {
          titolo: "Private dining room",
          testo:
            "Private room for up to 18 guests, ideal for business dinners and celebrations.",
        },
        {
          titolo: "Wine pairing",
          testo:
            "A cellar with rare Italian labels and collectible international bottles.",
        },
      ]
    : [
        {
          titolo: "Tavolo dello chef",
          testo:
            "8 posti fronte cucina, dialogo diretto con la brigata e menu fuori carta.",
        },
        {
          titolo: "Sala riservata",
          testo:
            "Sala riservata fino a 18 ospiti per cene aziendali o celebrazioni.",
        },
        {
          titolo: "Abbinamento vini",
          testo:
            "Carta con etichette italiane rare e selezione internazionale da collezione.",
        },
      ];

  const faq = isEn
    ? [
        {
          q: "Does the menu change during the year?",
          a: "Yes. We work with true seasonality and refresh tasting paths about every 6-8 weeks.",
        },
        {
          q: "Are vegetarian or gluten-free options available?",
          a: "Yes. With advance notice in your booking request, we prepare dedicated alternatives.",
        },
        {
          q: "Can I book private events?",
          a: "Yes. We host events from 10 to 60 guests with a fully tailored setup.",
        },
      ]
    : [
        {
          q: "Il menu cambia durante l'anno?",
          a: "Sì, lavoriamo su stagionalità reale e aggiorniamo i percorsi circa ogni 6-8 settimane.",
        },
        {
          q: "Sono disponibili opzioni vegetariane o senza glutine?",
          a: "Sì, con preavviso in fase di prenotazione prepariamo alternative dedicate.",
        },
        {
          q: "Posso prenotare per eventi privati?",
          a: "Sì, organizziamo eventi da 10 a 60 persone con impostazione personalizzata.",
        },
      ];

  const atmosfera = isEn
    ? [
        {
          titolo: "Main dining room",
          src: "/images/salaprincipale.jpeg",
          extra: "lg:col-span-2",
        },
        {
          titolo: "Chef's table",
          src: "/images/cheftable.jpg",
          extra: "",
        },
        {
          titolo: "Beverage lab",
          src: "/images/beveragelab.webp",
          extra: "",
        },
        {
          titolo: "Dessert station",
          src: "/images/dessertstation.jpeg",
          extra: "",
        },
        {
          titolo: "Private room",
          src: "/images/privateroom.jpg",
          extra: "lg:col-span-2",
        },
      ]
    : [
        {
          titolo: "Sala principale",
          src: "/images/salaprincipale.jpeg",
          extra: "lg:col-span-2",
        },
        {
          titolo: "Tavolo dello chef",
          src: "/images/cheftable.jpg",
          extra: "",
        },
        {
          titolo: "Laboratorio bevande",
          src: "/images/beveragelab.webp",
          extra: "",
        },
        {
          titolo: "Postazione dessert",
          src: "/images/dessertstation.jpeg",
          extra: "",
        },
        {
          titolo: "Sala privata",
          src: "/images/privateroom.jpg",
          extra: "lg:col-span-2",
        },
      ];

  const press = isEn
    ? [
        {
          nome: "Tables Guide 2026",
          valore: "2 Golden Forks",
          descrizione: "Most innovative new opening of the year in Milan.",
        },
        {
          nome: "Fine Dining Review",
          valore: "96/100",
          descrizione: "A benchmark sensory experience for urban cuisine.",
        },
        {
          nome: "Guest voice",
          valore: "4.9/5",
          descrizione: "Over 1,200 reviews highlighting excellent service.",
        },
      ]
    : [
        {
          nome: "Guida Tavole 2026",
          valore: "2 Forchette d'Oro",
          descrizione: "Nuova apertura più innovativa dell'anno a Milano.",
        },
        {
          nome: "Rivista Alta Cucina",
          valore: "96/100",
          descrizione:
            "Esperienza sensoriale di riferimento per la cucina urbana.",
        },
        {
          nome: "Voce degli ospiti",
          valore: "4.9/5",
          descrizione:
            "Oltre 1.200 recensioni con menzione eccellente del servizio.",
        },
      ];

  return (
    <main className="restaurant-demo pb-28 md:pb-10">
      <a href="#contenuto" className="skip-link">
        {t.skip}
      </a>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(8,8,10,0.7)] backdrop-blur-xl">
        <div className="container-shell flex items-center justify-between py-4">
          <p className="brand-mark">Atelier Nove</p>
          <nav
            aria-label={t.navLabel}
            className="hidden gap-6 text-sm text-stone-300 md:flex"
          >
            <a href="#menu">{t.navMenu}</a>
            <a href="#esperienze">{t.navExperiences}</a>
            <a href="#gallery">{t.navAtmosphere}</a>
            <a href="#prenota">{t.navBook}</a>
          </nav>
          <a href="#prenota" className="btn-secondary px-4! py-2! text-xs">
            {t.navBook}
          </a>
        </div>
      </header>

      <section
        id="contenuto"
        className="container-shell grid gap-10 pt-16 pb-14 lg:grid-cols-12 lg:items-end lg:pt-24"
      >
        <div className="hero-shell lg:col-span-7">
          <div className="hero-orb" aria-hidden="true" />
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1 className="hero-title mt-4 text-balance">{t.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            {t.heroText}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#prenota" className="btn-primary">
              {t.heroPrimaryCta}
            </a>
            <a href="#menu" className="btn-secondary">
              {t.heroSecondaryCta}
            </a>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-5">
          <article className="hero-media-card">
            <Image
              src="/images/fotohero.jpeg"
              alt="Piatto simbolo Atelier Nove"
              fill
              className="hero-media-image"
              priority
              quality={96}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 40vw"
            />
            <div className="hero-media-overlay" />
            <p className="hero-media-label">{t.heroDish}</p>
          </article>

          <div className="lux-panel">
            <p className="text-xs tracking-[0.22em] text-amber-200/80 uppercase">
              {t.availabilityTitle}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="mini-stat">
                <p className="mini-value">12</p>
                <p className="mini-label">{t.tablesPerNight}</p>
              </div>
              <div className="mini-stat">
                <p className="mini-value">4.9</p>
                <p className="mini-label">{t.avgRating}</p>
              </div>
              <div className="mini-stat">
                <p className="mini-value">3</p>
                <p className="mini-label">{t.tastingPaths}</p>
              </div>
              <div className="mini-stat">
                <p className="mini-value">18:30</p>
                <p className="mini-label">{t.firstDinner}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-stone-300">
              {t.availabilityText}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell pb-8 sm:pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {press.map((item) => (
            <article key={item.nome} className="card">
              <p className="text-xs tracking-[0.2em] text-stone-400 uppercase">
                {item.nome}
              </p>
              <p className="mt-3 text-3xl text-amber-100">{item.valore}</p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                {item.descrizione}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {t.featurePills.map((item) => (
            <div key={item} className="card">
              <p className="text-sm tracking-[0.14em] text-stone-300 uppercase">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="menu"
        className="container-shell scroll-mt-24 py-12 sm:py-16"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="section-title">{t.menuTitle}</h2>
          <p className="text-sm text-stone-300">{t.menuNote}</p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {menuDegustazione.map((item) => (
            <article key={item.nome} className="card">
              <p className="text-sm tracking-[0.2em] text-amber-200/85 uppercase">
                {item.prezzo}
              </p>
              <h3 className="mt-3 text-2xl text-stone-100">{item.nome}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                {item.descrizione}
              </p>
              <ul className="mt-5 space-y-2 border-t border-amber-100/10 pt-4 text-sm text-stone-200">
                {item.esempi.map((piatto) => (
                  <li key={piatto} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                    <span>{piatto}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="esperienze"
        className="container-shell scroll-mt-24 py-10 sm:py-16"
      >
        <h2 className="section-title">{t.experiencesTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {esperienze.map((esperienza) => (
            <article key={esperienza.titolo} className="card">
              <h3 className="text-xl text-stone-100">{esperienza.titolo}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                {esperienza.testo}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="container-shell scroll-mt-24 py-10 sm:py-16"
      >
        <h2 className="section-title">{t.atmosphereTitle}</h2>
        <div className="mt-6 grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {atmosfera.map((item) => (
            <article key={item.titolo} className={`gallery-card ${item.extra}`}>
              <Image
                src={item.src}
                alt={item.titolo}
                fill
                className="gallery-image"
                quality={95}
                loading="lazy"
                sizes={
                  item.extra
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
              />
              <div className="gallery-gradient" />
              <p className="relative z-10 text-sm tracking-[0.16em] text-stone-100 uppercase">
                {item.titolo}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="prenota"
        className="container-shell scroll-mt-24 py-12 sm:py-16"
      >
        <div className="lux-panel grid gap-7 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="section-title">{t.bookingTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              {t.bookingText}
            </p>
            <div className="mt-6 space-y-2 text-sm text-stone-200">
              <p>Via Monte Napoleone 9, Milano</p>
              <p>+39 02 1234 5678</p>
              <p>vettolab0@gmail.com</p>
            </div>
          </div>
          <ReservationCalendar />
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <h2 className="section-title">{t.faqTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faq.map((item) => (
            <article key={item.q} className="card">
              <h3 className="text-base font-medium text-stone-100">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="container-shell border-t border-white/10 pt-8 pb-10 text-sm text-stone-400">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footerText}</p>
          <p>{t.footerLinks}</p>
        </div>
      </footer>

      <div className="mobile-cta md:hidden">
        <a href="#prenota" className="btn-primary w-full">
          {t.mobileBook}
        </a>
        <a href="tel:+390212345678" className="btn-secondary w-full">
          {t.mobileCall}
        </a>
      </div>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Atelier Nove",
            servesCuisine: isEn
              ? ["Italian", "Contemporary"]
              : ["Italiana", "Contemporanea"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Via Monte Napoleone 9",
              addressLocality: "Milano",
              addressCountry: "IT",
            },
            telephone: "+39 02 1234 5678",
            acceptsReservations: true,
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "19:00",
                closes: "23:30",
              },
            ],
            priceRange: "€€€",
            email: "vettolab0@gmail.com",
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
