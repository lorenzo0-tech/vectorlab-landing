import Image from "next/image";
import { ReservationCalendar } from "@/components/the_restaurant/ReservationCalendar";

export default function DemoRistorantePage() {
  const menuDegustazione = [
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
      descrizione: "9 portate signature con pairing dedicato",
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

  const esperienze = [
    {
      titolo: "Tavolo dello chef",
      testo:
        "8 posti fronte cucina, dialogo diretto con la brigata e menu fuori carta.",
    },
    {
      titolo: "Sala riservata",
      testo:
        "Sala riservata fino a 18 ospiti per cene business o celebrazioni.",
    },
    {
      titolo: "Abbinamento vini",
      testo:
        "Carta con etichette italiane rare e selezione internazionale da collezione.",
    },
  ];

  const faq = [
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
      a: "Sì, organizziamo eventi da 10 a 60 persone con format personalizzato.",
    },
  ];

  const atmosfera = [
    {
      titolo: "Sala principale",
      src: "/images/salaprincipale.jpeg",
      extra: "lg:col-span-2",
    },
    {
      titolo: "Chef table",
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
  ];

  const press = [
    {
      nome: "Guida Tavole 2026",
      valore: "2 Forchette d'Oro",
      descrizione: "Nuova apertura più innovativa dell'anno a Milano.",
    },
    {
      nome: "Rivista Alta Cucina",
      valore: "96/100",
      descrizione: "Esperienza sensoriale di riferimento per la cucina urbana.",
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
        Vai al contenuto principale
      </a>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(8,8,10,0.7)] backdrop-blur-xl">
        <div className="container-shell flex items-center justify-between py-4">
          <p className="brand-mark">Atelier Nove</p>
          <nav
            aria-label="Navigazione principale"
            className="hidden gap-6 text-sm text-stone-300 md:flex"
          >
            <a href="#menu">Menu</a>
            <a href="#esperienze">Esperienze</a>
            <a href="#gallery">Atmosfera</a>
            <a href="#prenota">Prenota</a>
          </nav>
          <a href="#prenota" className="btn-secondary px-4! py-2! text-xs">
            Prenota
          </a>
        </div>
      </header>

      <section
        id="contenuto"
        className="container-shell grid gap-10 pt-16 pb-14 lg:grid-cols-12 lg:items-end lg:pt-24"
      >
        <div className="hero-shell lg:col-span-7">
          <div className="hero-orb" aria-hidden="true" />
          <p className="eyebrow">Alta cucina contemporanea — Milano</p>
          <h1 className="hero-title mt-4 text-balance">
            Un’esperienza gastronomica italiana che sembra arrivare dal futuro,
            ma con anima artigianale.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            Atelier Nove unisce ricerca culinaria, design sensoriale e servizio
            sartoriale. Un format costruito per distinguersi davvero nel mercato
            italiano.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#prenota" className="btn-primary">
              Prenota il tuo tavolo
            </a>
            <a href="#menu" className="btn-secondary">
              Scopri i percorsi degustazione
            </a>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-5">
          <article className="hero-media-card">
            <Image
              src="/images/fotohero.jpeg"
              alt="Piatto signature Atelier Nove"
              fill
              className="hero-media-image"
              priority
              quality={96}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 40vw"
            />
            <div className="hero-media-overlay" />
            <p className="hero-media-label">Piatto simbolo · Atelier Nove</p>
          </article>

          <div className="lux-panel">
            <p className="text-xs tracking-[0.22em] text-amber-200/80 uppercase">
              Disponibilità questa settimana
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="mini-stat">
                <p className="mini-value">12</p>
                <p className="mini-label">Tavoli / sera</p>
              </div>
              <div className="mini-stat">
                <p className="mini-value">4.9</p>
                <p className="mini-label">Valutazione media</p>
              </div>
              <div className="mini-stat">
                <p className="mini-value">3</p>
                <p className="mini-label">Percorsi degustazione</p>
              </div>
              <div className="mini-stat">
                <p className="mini-value">18:30</p>
                <p className="mini-label">Primo turno cena</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-stone-300">
              Cucina aperta, carta vini in evoluzione e abbinamenti analcolici
              firmati dal nostro beverage lab.
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
          {[
            "Ingredienti italiani tracciati",
            "Atmosfera sonora calibrata per il servizio",
            "Illuminazione dinamica per ogni portata",
          ].map((item) => (
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
          <h2 className="section-title">Menu degustazione</h2>
          <p className="text-sm text-stone-300">
            Disponibile anche abbinamento vini o analcolico
          </p>
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
        <h2 className="section-title">Esperienze firmate Atelier Nove</h2>
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
        <h2 className="section-title">Atmosfera</h2>
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
            <h2 className="section-title">Prenota la tua esperienza</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Aperto dal martedì alla domenica. Turni cena: 19:15 e 21:30.
              Pranzo degustazione il sabato e la domenica.
            </p>
            <div className="mt-6 space-y-2 text-sm text-stone-200">
              <p>Via Monte Napoleone 9, Milano</p>
              <p>+39 02 1234 5678</p>
              <p>prenotazioni@ateliernove.it</p>
            </div>
          </div>
          <ReservationCalendar />
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <h2 className="section-title">Domande frequenti</h2>
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
          <p>© 2026 Atelier Nove — sito demo portfolio (contenuti fittizi)</p>
          <p>Instagram • Guide • Carta regalo</p>
        </div>
      </footer>

      <div className="mobile-cta md:hidden">
        <a href="#prenota" className="btn-primary w-full">
          Prenota ora
        </a>
        <a href="tel:+390212345678" className="btn-secondary w-full">
          Chiama il ristorante
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
            servesCuisine: ["Italiana", "Contemporanea"],
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
            email: "prenotazioni@ateliernove.it",
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
