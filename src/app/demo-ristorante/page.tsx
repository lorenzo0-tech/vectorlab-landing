import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ambienti, esperienze, percorsiMenu } from "./content";

export const metadata: Metadata = {
  title: "Inizio",
};

const highlights = [
  { value: "9,7/10", label: "Valutazione ospiti" },
  { value: "3", label: "Percorsi degustazione" },
  { value: "18", label: "Posti in sala riservata" },
  { value: "6", label: "Serate su 7" },
];

const quickSections = [
  {
    title: "Menu",
    text: "Percorsi degustazione stagionali con abbinamenti dedicati.",
    href: "/demo-ristorante/menu",
    image: "/images/restaurant-real/menu-fine-dining.jpg",
    cta: "Scopri il menu",
  },
  {
    title: "Esperienze",
    text: "Tavolo del cuoco, sala riservata e serate su misura.",
    href: "/demo-ristorante/esperienze",
    image: "/images/restaurant-real/chef-kitchen.jpg",
    cta: "Vivi l'esperienza",
  },
  {
    title: "Ambienti",
    text: "Atmosfera elegante tra luce, materiali e dettagli.",
    href: "/demo-ristorante/ambienti",
    image: "/images/restaurant-real/service-table.jpg",
    cta: "Guarda gli ambienti",
  },
  {
    title: "Prenotazione",
    text: "Prenota il tuo tavolo con richiesta personalizzata.",
    href: "/demo-ristorante/prenotazione",
    image: "/images/restaurant-real/reserved-table.jpg",
    cta: "Prenota ora",
  },
];

export default function DemoRistoranteHomePage() {
  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[#7c5b35]/45">
        <Image
          src="/images/restaurant-real/hero-dining.jpg"
          alt="Ristorante di alta cucina con atmosfera calda"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#120b07]/78 via-[#1b120a]/52 to-[#2f2115]/25" />

        <div className="container-pad relative z-10 flex min-h-[72vh] items-end py-16 sm:py-24">
          <div className="max-w-3xl space-y-6 text-[#f8ebd9]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#dcb485]">
              Atelier Nove · Milano
            </p>
            <h1 className="heading-display text-4xl leading-[1.05] sm:text-6xl">
              Alta cucina italiana con anima contemporanea.
            </h1>
            <p className="max-w-2xl text-base text-[#e8d7bf] sm:text-lg">
              Un luogo pensato per chi cerca gusto, atmosfera e servizio
              impeccabile: dalla cena intima alle occasioni speciali.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo-ristorante/prenotazione"
                className="rounded-full bg-[#e4be8e] px-6 py-3 text-sm font-semibold text-[#2d1e12]"
              >
                Prenota il tuo tavolo
              </Link>
              <Link
                href="/demo-ristorante/menu"
                className="rounded-full border border-[#f0dec2]/60 px-6 py-3 text-sm font-semibold text-[#f8ebd9]"
              >
                Scopri il menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d3a872]">
              Il nostro stile
            </p>
            <h2 className="heading-display mt-3 text-3xl text-[#f3dfc3] sm:text-4xl">
              Cucina, accoglienza e ritmo di sala in perfetto equilibrio.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#cbb69a] sm:text-base">
              Ogni portata nasce da ricerca vera su materia prima, tecnica e
              stagionalità. In sala, il servizio accompagna con discrezione e
              precisione.
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
          </article>

          <article className="rounded-3xl border border-[#7c5b35]/45 bg-[#1a120b] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d3a872]">
              Dicono di noi
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#e7d3b6]">
              “Una cena memorabile: cucina raffinata, atmosfera splendida e un
              servizio capace di farti sentire ospite speciale.”
            </p>
            <p className="mt-3 text-sm text-[#bea283]">
              — Cliente Atelier Nove
            </p>
            <Link
              href="/demo-ristorante/contatti"
              className="mt-6 inline-flex rounded-full border border-[#b98a55] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f2e1c8]"
            >
              Contatta l&apos;accoglienza
            </Link>
          </article>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {quickSections.map((item) => (
            <article
              key={item.href}
              className="group relative overflow-hidden rounded-3xl border border-[#7c5b35]/45"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#120c07]/82 via-[#1f150d]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f7ead6]">
                <h3 className="heading-display text-3xl">{item.title}</h3>
                <p className="mt-2 text-sm text-[#e4d0b4]">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex rounded-full border border-[#f0dec2]/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]"
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
          {percorsiMenu.map((item) => (
            <article
              key={item.nome}
              className="rounded-3xl border border-[#7c5b35]/45 bg-[#1a120b] p-6"
            >
              <h3 className="heading-display text-2xl text-[#f2debf]">
                {item.nome}
              </h3>
              <p className="mt-2 text-sm text-[#cbb69a]">{item.descrizione}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#ddb07b]">
                {item.prezzo}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-7">
            <h2 className="heading-display text-3xl text-[#f3dfc3]">
              Esperienze selezionate
            </h2>
            <ul className="mt-5 space-y-3">
              {esperienze.map((item) => (
                <li key={item.titolo}>
                  <p className="font-semibold text-[#e1b982]">{item.titolo}</p>
                  <p className="text-sm text-[#cbb69a]">{item.testo}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/demo-ristorante/esperienze"
              className="mt-6 inline-flex text-sm font-semibold text-[#e1b982]"
            >
              Vai alla pagina esperienze →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ambienti.slice(0, 4).map((item) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                className="h-full w-full rounded-2xl border border-[#7c5b35]/45 object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
