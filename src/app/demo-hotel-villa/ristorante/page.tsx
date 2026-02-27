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
        : "Ristorante signature con cucina italiana contemporanea e wine pairing curato.",
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
        : "7 portate stagionali, focus materie prime italiane.",
      price: isEn ? "Rate on request" : "Tariffa su richiesta",
    },
    {
      name: isEn ? "Villa Journey" : "Percorso Villa",
      description: isEn
        ? "9 signature courses with dedicated table service."
        : "9 portate signature con servizio dedicato al tavolo.",
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
          <p className="mt-4 text-[#5f4d3b]">
            {isEn
              ? "Contemporary Italian flavors, impeccable service, and a curated cellar to elevate every moment."
              : "Sapori italiani contemporanei, servizio impeccabile e una cantina scelta per accompagnare ogni momento con stile."}
          </p>
          <div className="mt-8 space-y-4">
            {menu.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-[#deccb4] bg-[#fdf9f3] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="heading-display text-2xl text-[#352617]">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm text-[#5f4d3b]">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[#7e5a36]">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#deccb4]">
          <Image
            src="/images/luxury-real/page-restaurant.jpg"
            alt={isEn ? "Luxury dining room" : "Sala ristorante di lusso"}
            width={1400}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
