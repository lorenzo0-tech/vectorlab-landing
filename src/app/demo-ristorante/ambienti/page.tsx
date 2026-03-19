import type { Metadata } from "next";
import Image from "next/image";
import { getRestaurantDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Spaces" : "Ambienti",
    description:
      locale === "en"
        ? "Visual gallery of dining spaces, chef's table, and private room atmosphere."
        : "Galleria visiva di sala, tavolo del cuoco e atmosfera degli ambienti riservati.",
  };
}

export default async function AmbientiPage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { spaces } = getRestaurantDemoContent(locale);

  const atmosphereSignals = [
    isEn ? "Warm room with editorial lighting" : "Sala calda con illuminazione editoriale",
    isEn ? "Chef's table energy and precision" : "Energia e precisione del tavolo del cuoco",
    isEn ? "Private room suitable for high-value occasions" : "Sala riservata adatta a occasioni di alto valore",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
          {isEn ? "Spaces" : "Ambienti"}
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
          {isEn
            ? "Atmosphere, light, and detail"
            : "Atmosfera, luce e dettaglio"}
        </h1>
        <p className="mt-4 max-w-3xl text-[#d9c4a8] sm:text-lg sm:leading-8">
          {isEn
            ? "A visual journey through the main room, chef's table, private dining room, and tasting area."
            : "Un percorso visivo tra sala principale, tavolo del cuoco, sala riservata e area degustazione."}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {atmosphereSignals.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#7c5b35]/45 bg-[#17110b] px-4 py-4 text-sm text-[#d7c3a7]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className={
              "group relative overflow-hidden rounded-[2rem] border border-[#7c5b35]/45 bg-[#17110b] shadow-[0_18px_36px_rgba(0,0,0,0.18)] " +
              (index === 0 ? "sm:col-span-2 lg:col-span-2" : "")
            }
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={900}
              className={
                "w-full object-cover transition duration-700 group-hover:scale-105 " +
                (index === 0 ? "aspect-[16/9]" : "aspect-4/3")
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm text-[#f7ead6]">
              {item.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
