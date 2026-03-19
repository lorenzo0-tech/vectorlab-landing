import type { Metadata } from "next";
import Image from "next/image";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Restaurant" : "Ristorante",
    description:
      locale === "en"
        ? "Signature Italian dining with curated wine pairing in a luxury setting."
        : "Ristorante con cucina italiana contemporanea e abbinamento vini curato in un contesto esclusivo.",
  };
}

export default async function RistorantePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";

  const menu = [
    {
      name: isEn ? "Lake Tasting" : "Degustazione Lago",
      description: isEn
        ? "7 seasonal courses with a focus on premium Italian ingredients."
        : "7 portate stagionali con attenzione alle migliori materie prime italiane.",
      price: isEn ? "Rate on request" : "Tariffa su richiesta",
    },
    {
      name: isEn ? "Villa Journey" : "Percorso Villa",
      description: isEn
        ? "9 signature courses with dedicated table service."
        : "9 portate d'autore con servizio dedicato al tavolo.",
      price: isEn ? "Rate on request" : "Tariffa su richiesta",
    },
    {
      name: "Wine Pairing",
      description: isEn
        ? "Sommelier-curated pairing with rare Italian labels."
        : "Abbinamento curato da sommelier con etichette italiane rare.",
      price: isEn ? "Rate on request" : "Tariffa su richiesta",
    },
  ];

  const diningSignals = [
    isEn ? "Curated cellar and measured service" : "Cantina curata e servizio misurato",
    isEn ? "Cuisine designed to extend the stay atmosphere" : "Cucina pensata per prolungare l'atmosfera del soggiorno",
    isEn ? "Tableside experience aligned with the villa tone" : "Esperienza al tavolo coerente con il tono della villa",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
            {isEn ? "Restaurant" : "Ristorante"}
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
            {isEn
              ? "A restaurant that makes every evening special"
              : "Un ristorante che rende ogni sera speciale"}
          </h1>
          <p className="mt-4 max-w-2xl text-[#5f4d3b] sm:text-lg sm:leading-8">
            {isEn
              ? "Contemporary Italian flavors, impeccable service, and a curated cellar to elevate every moment."
              : "Sapori italiani contemporanei, servizio impeccabile e una cantina scelta per accompagnare ogni momento con stile."}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {diningSignals.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#deccb4] bg-[#fbf7ef] px-4 py-4 text-sm text-[#5f4d3b]"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {menu.map((item, index) => (
              <article
                key={item.name}
                className="rounded-3xl border border-[#deccb4] bg-[#fdf9f3] p-6 shadow-[0_18px_34px_rgba(90,70,45,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a6a46]">
                      0{index + 1} · {isEn ? "Dining proposal" : "Proposta di sala"}
                    </p>
                    <h2 className="heading-display text-2xl text-[#352617]">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#5f4d3b]">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[#7e5a36]">
                    {item.price}
                  </p>
                </div>
                <div className="mt-4 rounded-2xl border border-[#deccb4] bg-[#f7efe3] px-4 py-4 text-sm leading-7 text-[#5f4d3b]">
                  {isEn
                    ? "This menu reads as part of the hotel's promise of exclusivity, not as a detached restaurant offer."
                    : "Questa proposta si legge come parte della promessa di esclusività dell'hotel, non come offerta ristorante separata."}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#deccb4]">
            <Image
              src="/images/luxury-real/page-restaurant.jpg"
              alt={isEn ? "Luxury dining room" : "Sala ristorante di lusso"}
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[#fff8ee]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#f0deca]">
                {isEn ? "Villa dining" : "Ristorante della villa"}
              </p>
              <h2 className="heading-display mt-2 text-3xl">
                {isEn
                  ? "Dinner becomes part of the destination, not just one more service."
                  : "La cena diventa parte della destinazione, non un semplice servizio in più."}
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#deccb4] bg-[#f6eee2] p-6 text-[#5f4d3b]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8a6a46]">
              {isEn ? "Perceived value" : "Valore percepito"}
            </p>
            <p className="mt-3 text-sm leading-8">
              {isEn
                ? "The restaurant supports higher room desirability because it reinforces the image of a complete, self-contained luxury retreat."
                : "Il ristorante aumenta la desiderabilità delle camere perché rafforza l'immagine di un rifugio di lusso completo, autosufficiente e coerente."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
