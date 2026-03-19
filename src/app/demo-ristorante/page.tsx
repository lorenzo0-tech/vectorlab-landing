import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getRestaurantDemoContent } from "./content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Home" : "Inizio",
    description:
      locale === "en"
        ? "Fine-dining restaurant homepage demo with menu, experiences, spaces, and booking flow."
        : "Demo homepage ristorante fine dining con menu, esperienze, ambienti e prenotazione.",
  };
}

export default async function DemoRistoranteHomePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { spaces, experiences, tastingMenus, restaurantMeta } =
    getRestaurantDemoContent(locale);

  const highlights = [
    { value: "9,7/10", label: isEn ? "Guest rating" : "Valutazione ospiti" },
    { value: "3", label: isEn ? "Tasting menus" : "Percorsi degustazione" },
    {
      value: "18",
      label: isEn ? "Private room seats" : "Posti in sala riservata",
    },
    { value: "6", label: isEn ? "Nights per week" : "Serate su 7" },
  ];

  const quickSections = [
    {
      title: "Menu",
      text: isEn
        ? "Seasonal tasting journeys with curated pairings."
        : "Percorsi degustazione stagionali con abbinamenti dedicati.",
      href: "/demo-ristorante/menu",
      image: "/images/restaurant-real/menu-fine-dining.jpg",
      cta: isEn ? "Discover the menu" : "Scopri il menu",
    },
    {
      title: isEn ? "Experiences" : "Esperienze",
      text: isEn
        ? "Chef's table, private room, and bespoke evenings."
        : "Tavolo del cuoco, sala riservata e serate su misura.",
      href: "/demo-ristorante/esperienze",
      image: "/images/restaurant-real/chef-kitchen.jpg",
      cta: isEn ? "Live the experience" : "Vivi l'esperienza",
    },
    {
      title: isEn ? "Spaces" : "Ambienti",
      text: isEn
        ? "Elegant atmosphere through light, materials, and details."
        : "Atmosfera elegante tra luce, materiali e dettagli.",
      href: "/demo-ristorante/ambienti",
      image: "/images/restaurant-real/service-table.jpg",
      cta: isEn ? "View spaces" : "Guarda gli ambienti",
    },
    {
      title: isEn ? "Booking" : "Prenotazione",
      text: isEn
        ? "Book your table with a personalized request."
        : "Prenota il tuo tavolo con richiesta personalizzata.",
      href: "/demo-ristorante/prenotazione",
      image: "/images/restaurant-real/reserved-table.jpg",
      cta: isEn ? "Book now" : "Prenota ora",
    },
  ];

  const tastingNotes = [
    isEn
      ? "Service that explains without interrupting the rhythm."
      : "Servizio che racconta senza interrompere il ritmo.",
    isEn
      ? "Seasonality translated into atmosphere and expectation."
      : "Stagionalita' tradotta in atmosfera e attesa.",
    isEn
      ? "Memorable details from the first course to petit four."
      : "Dettagli memorabili dal primo assaggio alla piccola pasticceria.",
  ];

  const reservationSignals = [
    {
      title: isEn ? "Fast confirmation" : "Conferma rapida",
      text: isEn
        ? "Useful reply times for bookings, special occasions, and private dining."
        : "Tempi di risposta chiari per tavoli, occasioni speciali e sala riservata.",
    },
    {
      title: isEn
        ? "Occasion-first service"
        : "Servizio orientato all'occasione",
      text: isEn
        ? "Allergies, anniversaries, and tasting preferences are handled before arrival."
        : "Allergie, anniversari e preferenze degustazione vengono raccolti prima dell'arrivo.",
    },
    {
      title: isEn ? "High-spend positioning" : "Posizionamento alta spesa",
      text: isEn
        ? "The booking flow feels suitable for memorable dinners, not generic table requests."
        : "La prenotazione appare adatta a cene memorabili, non a una richiesta tavolo generica.",
    },
  ];

  return (
    <main>
      <section className="relative min-h-[88svh] overflow-hidden border-b border-[#7c5b35]/45 sm:min-h-[88vh]">
        <Image
          src="/images/restaurant-real/hero-dining.jpg"
          alt={
            isEn
              ? "Fine-dining restaurant with warm atmosphere"
              : "Ristorante di alta cucina con atmosfera calda"
          }
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,6,5,0.86)_0%,rgba(20,13,9,0.68)_45%,rgba(38,27,18,0.18)_100%)]" />

        <div className="container-pad relative z-10 grid min-h-[88svh] items-end gap-10 py-16 sm:min-h-[88vh] sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-3xl space-y-6 text-[#f8ebd9]">
            <div className="inline-flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-[#dcb485]">
              <span className="rounded-full border border-white/12 bg-black/18 px-3 py-1.5">
                {restaurantMeta.name} · {restaurantMeta.city}
              </span>
              <span className="rounded-full border border-white/12 bg-black/18 px-3 py-1.5">
                {isEn
                  ? "Chef's table and private dining"
                  : "Tavolo del cuoco e sala riservata"}
              </span>
            </div>
            <h1 className="heading-display text-5xl leading-[0.98] sm:text-7xl">
              {isEn
                ? "A restaurant demo that already feels booked by the right clientele."
                : "Una demo ristorante che sembra gia' prenotata dalla clientela giusta."}
            </h1>
            <p className="max-w-2xl text-base text-[#e8d7bf] sm:text-lg sm:leading-8">
              {isEn
                ? "Atelier Nove is presented as a complete destination: atmosphere, rhythm of service, tasting identity, and reservation flow all work together to feel real, premium, and desirable."
                : "Atelier Nove viene presentato come una destinazione completa: atmosfera, ritmo di sala, identita' degustazione e flusso di prenotazione lavorano insieme per sembrare reali, premium e desiderabili."}
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-sm text-[#ead8c0]">
              {tastingNotes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/18 px-4 py-3 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo-ristorante/prenotazione"
                className="rounded-full bg-[#e4be8e] px-6 py-3 text-sm font-semibold text-[#2d1e12] shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              >
                {isEn ? "Book your table" : "Prenota il tuo tavolo"}
              </Link>
              <Link
                href="/demo-ristorante/menu"
                className="rounded-full border border-[#f0dec2]/60 px-6 py-3 text-sm font-semibold text-[#f8ebd9]"
              >
                {isEn ? "Discover the menu" : "Scopri il menu"}
              </Link>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-3 text-sm text-[#ead8c0]">
              {reservationSignals.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/18 px-4 py-4 backdrop-blur"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#dcb485]">
                    {item.title}
                  </p>
                  <p className="mt-2 leading-6">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:justify-self-end lg:pl-8">
            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,12,8,0.8),rgba(28,18,11,0.72))] p-6 text-[#f7ead6] shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#dcb485]">
                {isEn ? "Tonight's impression" : "Impressione di questa sera"}
              </p>
              <h2 className="heading-display mt-3 text-3xl leading-tight text-[#f6e4ca]">
                {isEn
                  ? "Warm room, precise service, and a tasting journey guests want to talk about."
                  : "Sala calda, servizio preciso e un percorso degustazione di cui gli ospiti vogliono parlare."}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-black/18 px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#dcb485]">
                    {isEn ? "Average reply" : "Risposta media"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#f3dfc3]">
                    2h
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/18 px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#dcb485]">
                    {isEn ? "Guest score" : "Valutazione ospiti"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#f3dfc3]">
                    9,7/10
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#7c5b35]/35 bg-[#f0dcc0] p-6 text-[#2b1d11] shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f5530]">
                {isEn ? "Guest quote" : "Voce del cliente"}
              </p>
              <p className="mt-3 text-lg leading-8 text-[#3a2819]">
                {isEn
                  ? "Elegant without being stiff. Memorable without being theatrical for its own sake."
                  : "Elegante senza essere rigido. Memorabile senza essere teatrale fine a se' stesso."}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[2rem] border border-[#7c5b35]/45 bg-[#17110b] p-7 shadow-[0_20px_45px_rgba(0,0,0,0.22)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d3a872]">
              {isEn ? "Our style" : "Il nostro stile"}
            </p>
            <h2 className="heading-display mt-3 text-3xl text-[#f3dfc3] sm:text-4xl">
              {isEn
                ? "Cuisine, hospitality, and dining-room rhythm in perfect balance."
                : "Cucina, accoglienza e ritmo di sala in perfetto equilibrio."}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#cbb69a] sm:text-base">
              {isEn
                ? "Each course comes from real research on ingredients, technique, and seasonality. In the dining room, service guides the experience with discretion and precision."
                : "Ogni portata nasce da ricerca vera su materia prima, tecnica e stagionalità. In sala, il servizio accompagna con discrezione e precisione."}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#7c5b35]/45 bg-[#1e150d] px-4 py-4"
                >
                  <p className="heading-display text-2xl text-[#e2b57f]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#bfa281]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: isEn ? "Room rhythm" : "Ritmo di sala",
                  text: isEn
                    ? "Welcoming, precise, and paced to make the guest feel guided rather than rushed."
                    : "Accogliente, preciso e cadenzato per far sentire l'ospite guidato, non spinto.",
                },
                {
                  title: isEn ? "Ingredient story" : "Racconto della materia",
                  text: isEn
                    ? "Each course feels sourced, thought through, and plated with intent."
                    : "Ogni portata fa percepire materia prima selezionata, pensiero e intenzione in impiattamento.",
                },
                {
                  title: isEn
                    ? "Reservation desire"
                    : "Desiderio di prenotazione",
                  text: isEn
                    ? "The whole page is composed to make the next click feel natural."
                    : "Tutta la pagina e' composta per rendere naturale il clic successivo verso la prenotazione.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#7c5b35]/40 bg-[#1e150d] px-5 py-5"
                >
                  <p className="text-sm font-semibold text-[#e1b982]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#cbb69a]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#7c5b35]/45 bg-[linear-gradient(180deg,#191109_0%,#21170e_100%)] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d3a872]">
              {isEn ? "Why it works" : "Perche' funziona"}
            </p>
            <h2 className="heading-display mt-3 text-3xl text-[#f2debf] sm:text-4xl">
              {isEn
                ? "It feels like a restaurant people already recommend."
                : "Sembra il ristorante che le persone consigliano gia' adesso."}
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#cbb69a]">
              <li>
                {isEn
                  ? "The tone is elevated but still warm and accessible."
                  : "Il tono e' alto, ma resta caldo e accessibile."}
              </li>
              <li>
                {isEn
                  ? "The menu looks editorial, not merely listed."
                  : "Il menu appare editoriale, non solo elencato."}
              </li>
              <li>
                {isEn
                  ? "Booking is framed as an invitation to an occasion, not a formality."
                  : "La prenotazione viene percepita come invito a un'occasione, non come formalita'."}
              </li>
            </ul>
            <Link
              href="/demo-ristorante/contatti"
              className="mt-6 min-h-[44px] inline-flex items-center rounded-full border border-[#b98a55] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#f2e1c8]"
            >
              {isEn ? "Contact front-of-house" : "Contatta l&apos;accoglienza"}
            </Link>
          </article>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {quickSections.map((item) => (
            <article
              key={item.href}
              className="group relative overflow-hidden rounded-[2rem] border border-[#7c5b35]/45 lg:col-span-6"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={900}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#120c07]/82 via-[#1f150d]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f7ead6]">
                <h3 className="heading-display text-3xl">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[#e4d0b4]">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 min-h-[44px] inline-flex items-center rounded-full border border-[#f0dec2]/65 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em]"
                >
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#7c5b35]/45 bg-[#140e09] py-14 sm:py-20">
        <div className="container-pad grid gap-5 md:grid-cols-3">
          {tastingMenus.map((item, index) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-[#7c5b35]/45 bg-[#1a120b] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
            >
              <h3 className="heading-display text-2xl text-[#f2debf]">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-[#cbb69a]">{item.description}</p>
              <div className="mt-4 rounded-2xl border border-[#7c5b35]/40 bg-[#120c08] px-4 py-4 text-sm leading-7 text-[#d5b793]">
                {tastingNotes[index]}
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#ddb07b]">
                {item.price}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#7c5b35]/45 bg-[#17110b] p-7">
            <h2 className="heading-display text-3xl text-[#f3dfc3]">
              {isEn ? "Selected experiences" : "Esperienze selezionate"}
            </h2>
            <ul className="mt-5 space-y-3">
              {experiences.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-[#e1b982]">{item.title}</p>
                  <p className="text-sm text-[#cbb69a]">{item.text}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/demo-ristorante/esperienze"
              className="mt-6 inline-flex text-sm font-semibold text-[#e1b982]"
            >
              {isEn
                ? "Go to experiences page →"
                : "Vai alla pagina esperienze →"}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {spaces.slice(0, 4).map((item, index) => (
              <div
                key={item.src}
                className={
                  "relative overflow-hidden rounded-[2rem] border border-[#7c5b35]/45 " +
                  (index === 0 ? "col-span-2 h-72" : "h-56")
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
