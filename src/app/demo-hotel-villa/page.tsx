import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getHotelDemoContent } from "./content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Home" : "Home",
    description:
      locale === "en"
        ? "Luxury hotel homepage demo with suites, experiences, spa, restaurant, and booking flow."
        : "Demo homepage hotel luxury con suite, esperienze, spa, ristorante e prenotazione.",
  };
}

export default async function DemoHotelVillaPage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { experiences, gallery, suites } = getHotelDemoContent(locale);

  const overviewStats = [
    { value: "32", label: isEn ? "Suites & villas" : "Suite e ville" },
    {
      value: "9,8/10",
      label: isEn ? "Guest satisfaction" : "Ospiti soddisfatti",
    },
    {
      value: "18",
      label: isEn ? "Exclusive experiences" : "Esperienze esclusive",
    },
    { value: "24/7", label: isEn ? "Private concierge" : "Concierge privato" },
  ];

  const quickSections = [
    {
      eyebrow: isEn ? "Stay" : "Soggiorno",
      title: isEn ? "Suites" : "Suite",
      text: isEn
        ? "Elegant spaces, complete privacy, and comfort crafted in every detail."
        : "Spazi eleganti, privacy assoluta e comfort pensato in ogni dettaglio.",
      href: "/demo-hotel-villa/suite",
      image: "/images/luxury-real/suite-aria.jpg",
      cta: isEn ? "Discover suites" : "Scopri le suite",
    },
    {
      eyebrow: isEn ? "Special moments" : "Momenti speciali",
      title: isEn ? "Experiences" : "Esperienze",
      text: isEn
        ? "Private itineraries and bespoke activities to make every stay unique."
        : "Itinerari privati e attività su misura per rendere unico ogni soggiorno.",
      href: "/demo-hotel-villa/esperienze",
      image: "/images/luxury-real/page-experiences.jpg",
      cta: isEn ? "Live the experiences" : "Vivi le esperienze",
    },
    {
      eyebrow: isEn ? "Wellness" : "Benessere",
      title: "Spa",
      text: isEn
        ? "Exclusive rituals and dedicated treatments to restore balance and lightness."
        : "Rituali esclusivi e trattamenti dedicati per ritrovare equilibrio e leggerezza.",
      href: "/demo-hotel-villa/spa",
      image: "/images/luxury-real/page-spa.jpg",
      cta: isEn ? "Enter the spa" : "Entra in spa",
    },
    {
      eyebrow: "Fine dining",
      title: isEn ? "Restaurant" : "Ristorante",
      text: isEn
        ? "Contemporary Italian cuisine, curated cellar, and impeccable service."
        : "Cucina d'autore italiana, cantina selezionata e servizio impeccabile.",
      href: "/demo-hotel-villa/ristorante",
      image: "/images/luxury-real/page-restaurant.jpg",
      cta: isEn ? "Book a table" : "Prenota un tavolo",
    },
    {
      eyebrow: isEn ? "Inspiration" : "Ispirazione",
      title: isEn ? "Gallery" : "Galleria",
      text: isEn
        ? "A visual journey through the villa's spaces, light, and atmosphere."
        : "Un viaggio per immagini tra ambienti, luce e atmosfera della villa.",
      href: "/demo-hotel-villa/galleria",
      image: "/images/luxury-real/gallery-unique-1.jpg",
      cta: isEn ? "View gallery" : "Guarda la galleria",
    },
    {
      eyebrow: isEn ? "Book now" : "Prenota ora",
      title: isEn ? "Booking" : "Prenotazione",
      text: isEn
        ? "Configure your stay and receive a tailored proposal within hours."
        : "Configura il tuo soggiorno e ricevi una proposta personalizzata in poche ore.",
      href: "/demo-hotel-villa/prenotazione",
      image: "/images/herofoto.webp",
      cta: isEn ? "Request availability" : "Richiedi disponibilità",
    },
  ];

  const servicePillars = [
    isEn ? "Arrival curated by concierge" : "Arrivo orchestrato dal concierge",
    isEn
      ? "Private wellness and lake rituals"
      : "Benessere privato e rituali sul lago",
    isEn
      ? "Signature dining within the villa"
      : "Cucina d'autore all'interno della villa",
  ];

  const signatureMoments = [
    {
      title: isEn ? "Private arrival" : "Arrivo privato",
      text: isEn
        ? "Transfer, welcome ritual, and suite preparation aligned with your stay profile."
        : "Transfer, rituale di benvenuto e preparazione suite calibrati sul profilo del soggiorno.",
    },
    {
      title: isEn ? "Quiet luxury" : "Lusso silenzioso",
      text: isEn
        ? "Materials, fragrance, light, and service designed to feel intimate rather than ostentatious."
        : "Materiali, profumo, luce e servizio pensati per risultare intimi, non esibiti.",
    },
    {
      title: isEn ? "Tailored itinerary" : "Itinerario su misura",
      text: isEn
        ? "Every day can combine lake, spa, cuisine, and privacy without friction."
        : "Ogni giornata puo' combinare lago, spa, cucina e privacy senza frizioni.",
    },
  ];

  const suiteAtmospheres = [
    isEn
      ? "Panoramic terrace and marble bath"
      : "Terrazza panoramica e bagno in marmo",
    isEn
      ? "Reserved pool and butler rhythm"
      : "Piscina riservata e ritmo da maggiordomo",
    isEn
      ? "Fireplace, garden, and veranda breakfast"
      : "Camino, giardino e colazione in veranda",
  ];

  const bookingSignals = [
    {
      title: isEn ? "Concierge response" : "Risposta concierge",
      text: isEn
        ? "Availability and proposal shared within a few hours."
        : "Disponibilita' e proposta condivise entro poche ore.",
    },
    {
      title: isEn ? "Stay personalization" : "Personalizzazione soggiorno",
      text: isEn
        ? "Suite, spa, dining, and transfer aligned before arrival."
        : "Suite, spa, cena e transfer allineati prima dell'arrivo.",
    },
    {
      title: isEn ? "Premium reassurance" : "Rassicurazione premium",
      text: isEn
        ? "The guest understands this is direct, private, and carefully handled."
        : "L'ospite percepisce un contatto diretto, privato e seguito con cura.",
    },
  ];

  return (
    <main>
      <section className="relative min-h-[88svh] overflow-hidden border-b border-[#dfcfba] sm:min-h-[88vh]">
        <Image
          src="/images/luxury-real/hero-luxury.jpg"
          alt={
            isEn
              ? "Luxury hotel with panoramic pool"
              : "Hotel di lusso con piscina panoramica"
          }
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(22,16,11,0.82)_0%,rgba(44,31,20,0.62)_45%,rgba(67,49,32,0.18)_100%)]" />
        <div className="absolute left-[10%] top-[14%] h-44 w-44 rounded-full bg-[#f4e7d4]/10 blur-3xl" />
        <div className="container-pad relative z-10 grid min-h-[88svh] items-end gap-10 py-16 sm:min-h-[88vh] sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl space-y-6 text-[#fff8ee]">
            <div className="inline-flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em] text-[#f4e6d1]">
              <span className="rounded-full border border-white/20 bg-white/8 px-3 py-1.5">
                {isEn
                  ? "Villa Aurea · Lake Como"
                  : "Villa Aurea · Lago di Como"}
              </span>
              <span className="rounded-full border border-white/20 bg-white/8 px-3 py-1.5">
                {isEn ? "Private concierge 24/7" : "Concierge privato 24/7"}
              </span>
            </div>
            <h1 className="heading-display max-w-4xl text-5xl leading-[0.98] sm:text-7xl">
              {isEn
                ? "A hotel demo that feels already booked, desired, and unforgettable."
                : "Una demo hotel che sembra gia' desiderata, prenotata, indimenticabile."}
            </h1>
            <p className="max-w-2xl text-base text-[#f2e5d4] sm:text-lg sm:leading-8">
              {isEn
                ? "Villa Aurea stages a complete luxury narrative: cinematic arrival, layered service, private wellness, and signature dining in a lakeside setting built to be remembered."
                : "Villa Aurea mette in scena una narrativa luxury completa: arrivo cinematografico, servizio stratificato, benessere privato e cucina d'autore in una cornice sul lago costruita per restare impressa."}
            </p>
            <div className="grid gap-3 text-sm text-[#f1e3d1] sm:grid-cols-3">
              {servicePillars.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/14 bg-white/8 px-4 py-3 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/demo-hotel-villa/suite"
                className="min-h-[44px] inline-flex items-center justify-center rounded-full bg-[#f2e2c7] px-6 py-3 text-sm font-semibold text-[#342719] shadow-[0_18px_40px_rgba(28,20,13,0.18)]"
              >
                {isEn ? "Explore suites" : "Esplora le suite"}
              </Link>
              <Link
                href="/demo-hotel-villa/contatti"
                className="min-h-[44px] inline-flex items-center justify-center rounded-full border border-[#f6ead9] px-6 py-3 text-sm font-semibold text-[#fff8ee]"
              >
                {isEn ? "Request availability" : "Richiedi disponibilità"}
              </Link>
              <Link
                href="/demo-hotel-villa/prenotazione"
                className="min-h-[44px] inline-flex items-center justify-center rounded-full border border-[#f6ead9] bg-[#f6ead9] px-6 py-3 text-sm font-semibold text-[#3a2c1d]"
              >
                {isEn ? "Start booking" : "Avvia prenotazione"}
              </Link>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {bookingSignals.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/12 bg-black/14 px-4 py-4 text-sm text-[#f1e3d1] backdrop-blur"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#f4e6d1]">
                    {item.title}
                  </p>
                  <p className="mt-2 leading-6">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:justify-self-end lg:pl-8">
            <article className="rounded-[2rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,248,238,0.18),rgba(255,248,238,0.08))] p-6 text-[#fff8ee] shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#f4e6d1]">
                {isEn ? "Featured stay" : "Soggiorno in evidenza"}
              </p>
              <h2 className="heading-display mt-3 text-3xl leading-tight">
                {isEn
                  ? "Panoramic lake weekend with spa ritual and sunset dinner"
                  : "Weekend panoramico sul lago con rituale spa e cena al tramonto"}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/12 bg-black/12 px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#f0ddc6]">
                    {isEn ? "Response time" : "Tempo di risposta"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold">2h</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-black/12 px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#f0ddc6]">
                    {isEn ? "Guest score" : "Valutazione ospiti"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold">9,8/10</p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#e8d4ba] bg-[#fbf6ef] p-6 text-[#3f2f1f] shadow-[0_24px_70px_rgba(42,31,20,0.14)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#876846]">
                {isEn ? "Guest impression" : "Impressione ospite"}
              </p>
              <p className="mt-3 text-lg leading-8 text-[#4e3d2b]">
                {isEn
                  ? "A place that feels deeply private from the first second, yet never cold. Everything is composed, soft, and deliberate."
                  : "Un luogo che appare profondamente privato fin dal primo secondo, ma mai freddo. Tutto e' composto, morbido, intenzionale."}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[2rem] border border-[#deccb4] bg-[#fcf8f2] p-7 shadow-[0_20px_40px_rgba(90,70,45,0.08)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
              {isEn
                ? "The art of hospitality"
                : "L&apos;arte dell&apos;accoglienza"}
            </p>
            <h2 className="heading-display mt-3 text-3xl text-[#352617] sm:text-4xl">
              {isEn
                ? "Every detail here is designed to make you feel expected, welcomed, and special."
                : "Qui ogni dettaglio è pensato per farti sentire atteso, accolto, speciale."}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5f4d3b] sm:text-base">
              {isEn
                ? "From first light to your return to the suite, Villa Aurea offers authentic luxury: discreet, refined, unforgettable."
                : "Dalla prima luce del mattino al rientro in suite, Villa Aurea offre un lusso autentico: discreto, raffinato, indimenticabile."}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {overviewStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#ddcaaf] bg-[#f8f1e7] px-4 py-4"
                >
                  <p className="heading-display text-2xl text-[#3f2f1f]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#6b5946]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {signatureMoments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#ddcaaf] bg-[#f8f1e7] px-5 py-5"
                >
                  <p className="text-sm font-semibold text-[#3f2f1f]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5f4d3b]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#deccb4] bg-[linear-gradient(180deg,#f6efe4_0%,#f0e5d6_100%)] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
              {isEn ? "Why it sells" : "Perche' convince"}
            </p>
            <h2 className="heading-display mt-3 text-3xl text-[#352617] sm:text-4xl">
              {isEn
                ? "The demo doesn't just show rooms. It stages desire, reassurance, and next action."
                : "La demo non mostra solo camere. Mette in scena desiderio, rassicurazione e passo successivo."}
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#5a4836]">
              <li>
                {isEn
                  ? "Immediate perception of privacy, calm, and high-value service."
                  : "Percezione immediata di privacy, calma e servizio di alto valore."}
              </li>
              <li>
                {isEn
                  ? "Each section feels like a real commercial destination, not a mock-up."
                  : "Ogni sezione sembra una destinazione commerciale reale, non un semplice mock-up."}
              </li>
              <li>
                {isEn
                  ? "Booking is framed as concierge-led and highly curated."
                  : "La prenotazione viene percepita come assistita dal concierge e altamente curata."}
              </li>
            </ul>
            <Link
              href="/demo-hotel-villa/contatti"
              className="mt-6 min-h-[44px] inline-flex items-center rounded-full border border-[#bda17f] bg-[#fbf6ef] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#3d2e1f]"
            >
              {isEn ? "Talk to our concierge" : "Parla con il concierge"}
            </Link>
          </article>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {quickSections.map((item) => (
            <article
              key={item.href}
              className={
                "group relative overflow-hidden rounded-[2rem] border border-[#deccb4] lg:col-span-4 " +
                (item.href === "/demo-hotel-villa/prenotazione" ||
                item.href === "/demo-hotel-villa/suite"
                  ? "md:col-span-2 lg:col-span-6"
                  : "md:col-span-1 lg:col-span-3")
              }
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={900}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1f1710]/78 via-[#2d2218]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#fff8ee]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#f0deca]">
                  {item.eyebrow}
                </p>
                <h3 className="heading-display mt-2 text-3xl">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[#f2e5d4]">
                  {item.text}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 min-h-[44px] inline-flex items-center rounded-full border border-[#f6ead9] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#fff8ee]"
                >
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dfcfba] bg-[#f4ede3] py-14 sm:py-20">
        <div className="container-pad grid gap-5 md:grid-cols-3">
          {suites.map((suite, index) => (
            <article
              key={suite.name}
              className="overflow-hidden rounded-[2rem] border border-[#deccb4] bg-[#fdf9f3] shadow-[0_18px_36px_rgba(90,70,45,0.08)]"
            >
              <Image
                src={suite.image}
                alt={suite.name}
                width={1200}
                height={800}
                className="aspect-4/3 w-full object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-5">
                <h3 className="heading-display text-xl text-[#352617]">
                  {suite.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5f4d3b]">
                  {suite.description}
                </p>
                <p className="mt-4 rounded-full bg-[#f3eadf] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7a5c39]">
                  {suiteAtmospheres[index]}
                </p>
                <p className="mt-4 text-sm text-[#5f4d3b]">{suite.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-[#deccb4] bg-[#fdf9f3] p-7">
            <h2 className="heading-display text-3xl text-[#352617]">
              {isEn ? "Selected experiences" : "Esperienze selezionate"}
            </h2>
            <ul className="mt-5 space-y-3">
              {experiences.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-[#3f2f1f]">{item.title}</p>
                  <p className="text-sm text-[#5f4d3b]">{item.text}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/demo-hotel-villa/esperienze"
              className="mt-6 inline-flex text-sm font-semibold text-[#6f5232]"
            >
              {isEn
                ? "Go to experiences page →"
                : "Vai alla pagina esperienze →"}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {gallery.slice(0, 4).map((image, index) => (
              <div
                key={image.src}
                className={
                  "relative overflow-hidden rounded-[2rem] border border-[#deccb4] " +
                  (index === 0 ? "col-span-2 h-72" : "h-56")
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
