import type { Metadata } from "next";
import Image from "next/image";
import { getRestaurantDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: "Menu",
    description:
      locale === "en"
        ? "Tasting menus with seasonal fine-dining courses and curated pairings."
        : "Menu degustazione con portate stagionali fine dining e abbinamenti curati.",
  };
}

export default async function MenuPage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { tastingMenus } = getRestaurantDemoContent(locale);

  const pairings = [
    isEn
      ? "Suggested with mineral white wines and bright service tempo."
      : "Ideale con bianchi minerali e servizio dal ritmo luminoso.",
    isEn
      ? "Best expressed with structured reds and warmer dining moments."
      : "Rende al meglio con rossi strutturati e un ritmo di sala piu' profondo.",
    isEn
      ? "The most theatrical journey, for guests seeking the full signature experience."
      : "Il percorso piu' scenografico, per chi cerca l'esperienza firma completa.",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
            {isEn ? "Tasting Menu" : "Menu Degustazione"}
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
            {isEn
              ? "Journeys crafted to move you"
              : "Percorsi pensati per emozionare"}
          </h1>
          <p className="mt-4 max-w-2xl text-[#d9c4a8] sm:text-lg sm:leading-8">
            {isEn
              ? "Each menu is rooted in Italian seasonality and presented with tailored service."
              : "Ogni menu nasce dalla stagionalità italiana e viene raccontato con un servizio sartoriale."}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              isEn ? "Seasonality first" : "Stagionalita' al centro",
              isEn
                ? "Pairing-led storytelling"
                : "Racconto guidato dagli abbinamenti",
              isEn ? "Editorial presentation" : "Presentazione editoriale",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#7c5b35]/45 bg-[#17110b] px-4 py-4 text-sm text-[#d7c3a7]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {tastingMenus.map((item, index) => (
              <details
                key={item.name}
                className="group rounded-2xl border border-[#7c5b35]/45 bg-[#17110b] p-5 transition open:border-[#b98a55]/70 open:bg-[#1a120c]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98a55]/55">
                  <div className="pt-0.5">
                    <h2 className="heading-display text-2xl text-[#f2debf]">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm text-[#cbb69a]">
                      {item.description}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#b89467]">
                      {isEn
                        ? "Open to view all courses"
                        : "Premi per vedere tutte le portate"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <p className="text-sm font-semibold text-[#ddb07b]">
                      {item.price}
                    </p>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#b98a55]/60 text-[#ddb07b] transition duration-300 group-open:rotate-180 group-open:bg-[#25180d]">
                      ▾
                    </span>
                  </div>
                </summary>

                <div className="mt-4 border-t border-[#7c5b35]/35 pt-4">
                  <p className="mb-4 rounded-2xl border border-[#7c5b35]/35 bg-[#120c08] px-4 py-4 text-sm leading-7 text-[#d7c3a7]">
                    {pairings[index]}
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#ddb07b]">
                    {isEn ? "Included courses" : "Portate incluse"}
                  </p>
                  <ol className="mt-3 space-y-2.5 text-sm text-[#d7c3a7]">
                    {item.courses.map((course, index) => (
                      <li key={course} className="flex items-start gap-2">
                        <span className="mt-0.5 text-xs font-semibold text-[#cfa473]">
                          {index + 1}.
                        </span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#7c5b35]/45">
            <Image
              src="/images/restaurant-real/dish-plating.jpg"
              alt={
                isEn
                  ? "Tasting dishes from a fine-dining restaurant"
                  : "Piatti degustazione di ristorante di alta cucina"
              }
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[#f5e5cc]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#dcb485]">
                {isEn ? "Chef's perspective" : "Sguardo della cucina"}
              </p>
              <h2 className="heading-display mt-2 text-3xl">
                {isEn
                  ? "A menu page that feels like an invitation, not a list."
                  : "Una pagina menu che sembra un invito, non un elenco."}
              </h2>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#7c5b35]/45 bg-[#17110b] p-6 text-[#d7c3a7]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#dcb485]">
              {isEn ? "At your table" : "Al tuo tavolo"}
            </p>
            <p className="mt-3 text-sm leading-8">
              {isEn
                ? "Before reading every course in detail, you already sense identity, seasonality, and the value of the evening ahead."
                : "Prima ancora di leggere ogni portata nel dettaglio, percepisci identita', stagionalita' e il valore della serata che ti aspetta."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
