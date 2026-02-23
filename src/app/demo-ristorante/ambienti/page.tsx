import type { Metadata } from "next";
import Image from "next/image";
import { getRestaurantDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export const metadata: Metadata = {
  title: "Ambienti",
};

export default async function AmbientiPage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { spaces } = getRestaurantDemoContent(locale);

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
        <p className="mt-4 text-[#d9c4a8]">
          {isEn
            ? "A visual journey through the main room, chef's table, private dining room, and tasting area."
            : "Un percorso visivo tra sala principale, tavolo del cuoco, sala riservata e area degustazione."}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spaces.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className="overflow-hidden rounded-3xl border border-[#7c5b35]/45 bg-[#17110b]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={900}
              className="aspect-4/3 w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
