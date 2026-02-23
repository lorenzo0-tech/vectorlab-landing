import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getRestaurantDemoContent } from "./content";
import { getServerLocale } from "@/lib/server-locale";

export const metadata: Metadata = {
  title: "Inizio",
};

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

  return (
    <main>
      <section className="relative min-h-[72svh] overflow-hidden border-b border-[#7c5b35]/45 sm:min-h-[72vh]">
        <Image
          src="/images/restaurant-real/hero-dining.jpg"
          alt={
            isEn
              ? "Fine-dining restaurant with warm atmosphere"
              : "Ristorante di alta cucina con atmosfera calda"
          }
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#120b07]/78 via-[#1b120a]/52 to-[#2f2115]/25" />

        <div className="container-pad relative z-10 flex min-h-[72svh] items-end py-16 sm:min-h-[72vh] sm:py-24">
          <div className="max-w-3xl space-y-6 text-[#f8ebd9]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#dcb485]">
              {restaurantMeta.name} · {restaurantMeta.city}
            </p>
            <h1 className="heading-display text-4xl leading-[1.05] sm:text-6xl">
              {isEn
                ? "Italian fine dining with a contemporary soul."
                : "Alta cucina italiana con anima contemporanea."}
            </h1>
            <p className="max-w-2xl text-base text-[#e8d7bf] sm:text-lg">
              {isEn
                ? "A destination for guests seeking taste, atmosphere, and impeccable service, from intimate dinners to special occasions."
                : "Un luogo pensato per chi cerca gusto, atmosfera e servizio impeccabile: dalla cena intima alle occasioni speciali."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo-ristorante/prenotazione"
                className="rounded-full bg-[#e4be8e] px-6 py-3 text-sm font-semibold text-[#2d1e12]"
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
          </div>
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-7 sm:p-8">
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
          </article>

          <article className="rounded-3xl border border-[#7c5b35]/45 bg-[#1a120b] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#d3a872]">
              {isEn ? "What guests say" : "Dicono di noi"}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#e7d3b6]">
              {isEn
                ? "“A memorable dinner: refined cuisine, a beautiful atmosphere, and service that makes you feel truly special.”"
                : "“Una cena memorabile: cucina raffinata, atmosfera splendida e un servizio capace di farti sentire ospite speciale.”"}
            </p>
            <p className="mt-3 text-sm text-[#bea283]">
              {isEn ? "— Atelier Nove Guest" : "— Cliente Atelier Nove"}
            </p>
            <Link
              href="/demo-ristorante/contatti"
              className="mt-6 inline-flex rounded-full border border-[#b98a55] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f2e1c8]"
            >
              {isEn ? "Contact front-of-house" : "Contatta l&apos;accoglienza"}
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
          {tastingMenus.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-[#7c5b35]/45 bg-[#1a120b] p-6"
            >
              <h3 className="heading-display text-2xl text-[#f2debf]">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-[#cbb69a]">{item.description}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#ddb07b]">
                {item.price}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-pad py-14 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-7">
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
            {spaces.slice(0, 4).map((item) => (
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
