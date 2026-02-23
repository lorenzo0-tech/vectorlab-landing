import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { esperienze, gallery, suites } from "./content";

export const metadata: Metadata = {
  title: "Home",
};

const overviewStats = [
  { value: "32", label: "Suite e ville" },
  { value: "9,8/10", label: "Ospiti soddisfatti" },
  { value: "18", label: "Esperienze esclusive" },
  { value: "24/7", label: "Concierge privato" },
];

const quickSections = [
  {
    eyebrow: "Soggiorno",
    title: "Suite",
    text: "Spazi eleganti, privacy assoluta e comfort pensato in ogni dettaglio.",
    href: "/demo-hotel-villa/suite",
    image: "/images/luxury-real/suite-aria.jpg",
    cta: "Scopri le suite",
  },
  {
    eyebrow: "Momenti speciali",
    title: "Esperienze",
    text: "Itinerari privati e attività su misura per rendere unico ogni soggiorno.",
    href: "/demo-hotel-villa/esperienze",
    image: "/images/luxury-real/page-experiences.jpg",
    cta: "Vivi le esperienze",
  },
  {
    eyebrow: "Benessere",
    title: "Spa",
    text: "Rituali esclusivi e trattamenti dedicati per ritrovare equilibrio e leggerezza.",
    href: "/demo-hotel-villa/spa",
    image: "/images/luxury-real/page-spa.jpg",
    cta: "Entra in spa",
  },
  {
    eyebrow: "Fine dining",
    title: "Ristorante",
    text: "Cucina d'autore italiana, cantina selezionata e servizio impeccabile.",
    href: "/demo-hotel-villa/ristorante",
    image: "/images/luxury-real/page-restaurant.jpg",
    cta: "Prenota un tavolo",
  },
  {
    eyebrow: "Ispirazione",
    title: "Galleria",
    text: "Un viaggio per immagini tra ambienti, luce e atmosfera della villa.",
    href: "/demo-hotel-villa/galleria",
    image: "/images/luxury-real/gallery-unique-1.jpg",
    cta: "Guarda la galleria",
  },
  {
    eyebrow: "Prenota ora",
    title: "Prenotazione",
    text: "Configura il tuo soggiorno e ricevi una proposta personalizzata in poche ore.",
    href: "/demo-hotel-villa/prenotazione",
    image: "/images/herofoto.webp",
    cta: "Richiedi disponibilità",
  },
];

export default function DemoHotelVillaPage() {
  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[#dfcfba]">
        <Image
          src="/images/luxury-real/hero-luxury.jpg"
          alt="Hotel di lusso con piscina panoramica"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#231a12]/60 via-[#3a2b1d]/46 to-[#594430]/20" />
        <div className="container-pad relative z-10 flex min-h-[72vh] items-end py-16 sm:py-24">
          <div className="max-w-3xl space-y-6 text-[#fff8ee]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#f4e6d1]">
              Villa Aurea · Lago di Como
            </p>
            <h1 className="heading-display text-4xl leading-[1.05] sm:text-6xl">
              Il tuo rifugio di lusso tra quiete, bellezza e servizio
              impeccabile.
            </h1>
            <p className="max-w-2xl text-base text-[#f2e5d4] sm:text-lg">
              A Villa Aurea ogni soggiorno è creato su misura: suite eleganti,
              esperienze esclusive, benessere privato e cucina d&apos;autore in
              una cornice unica sul lago.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo-hotel-villa/suite"
                className="rounded-full bg-[#f2e2c7] px-6 py-3 text-sm font-semibold text-[#342719]"
              >
                Esplora le suite
              </Link>
              <Link
                href="/demo-hotel-villa/contatti"
                className="rounded-full border border-[#f6ead9] px-6 py-3 text-sm font-semibold text-[#fff8ee]"
              >
                Richiedi disponibilità
              </Link>
              <Link
                href="/demo-hotel-villa/prenotazione"
                className="rounded-full border border-[#f6ead9] bg-[#f6ead9] px-6 py-3 text-sm font-semibold text-[#3a2c1d]"
              >
                Avvia prenotazione
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-[#deccb4] bg-[#fcf8f2] p-7 shadow-[0_16px_30px_rgba(90,70,45,0.07)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
              L&apos;arte dell&apos;accoglienza
            </p>
            <h2 className="heading-display mt-3 text-3xl text-[#352617] sm:text-4xl">
              Qui ogni dettaglio è pensato per farti sentire atteso, accolto,
              speciale.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5f4d3b] sm:text-base">
              Dalla prima luce del mattino al rientro in suite, Villa Aurea
              offre un lusso autentico: discreto, raffinato, indimenticabile.
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
          </article>

          <article className="rounded-3xl border border-[#deccb4] bg-[#f4ede3] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
              Dicono di noi
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#4c3b2b]">
              “Un soggiorno perfetto: ambienti splendidi, servizio impeccabile e
              una sensazione di esclusività che resta nel cuore.”
            </p>
            <p className="mt-3 text-sm text-[#6a5844]">— Ospite Villa Aurea</p>
            <Link
              href="/demo-hotel-villa/contatti"
              className="mt-6 inline-flex rounded-full border border-[#bda17f] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#3d2e1f]"
            >
              Parla con il concierge
            </Link>
          </article>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {quickSections.map((item) => (
            <article
              key={item.href}
              className="group relative overflow-hidden rounded-3xl border border-[#deccb4]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1f1710]/78 via-[#2d2218]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#fff8ee]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#f0deca]">
                  {item.eyebrow}
                </p>
                <h3 className="heading-display mt-2 text-3xl">{item.title}</h3>
                <p className="mt-2 text-sm text-[#f2e5d4]">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex rounded-full border border-[#f6ead9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#fff8ee]"
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
          {suites.map((suite) => (
            <article
              key={suite.nome}
              className="overflow-hidden rounded-3xl border border-[#deccb4] bg-[#fdf9f3]"
            >
              <Image
                src={suite.image}
                alt={suite.nome}
                width={1200}
                height={800}
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="heading-display text-xl text-[#352617]">
                  {suite.nome}
                </h3>
                <p className="mt-2 text-sm text-[#5f4d3b]">{suite.prezzo}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#deccb4] bg-[#fdf9f3] p-7">
            <h2 className="heading-display text-3xl text-[#352617]">
              Esperienze selezionate
            </h2>
            <ul className="mt-5 space-y-3">
              {esperienze.map((item) => (
                <li key={item.titolo}>
                  <p className="font-semibold text-[#3f2f1f]">{item.titolo}</p>
                  <p className="text-sm text-[#5f4d3b]">{item.testo}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/demo-hotel-villa/esperienze"
              className="mt-6 inline-flex text-sm font-semibold text-[#6f5232]"
            >
              Vai alla pagina esperienze →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {gallery.slice(0, 4).map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="h-full w-full rounded-2xl border border-[#deccb4] object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
