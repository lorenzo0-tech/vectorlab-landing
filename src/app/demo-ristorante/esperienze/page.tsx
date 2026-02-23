import type { Metadata } from "next";
import Image from "next/image";
import { getRestaurantDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export const metadata: Metadata = {
  title: "Esperienze",
};

export default async function EsperienzePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { experiences } = getRestaurantDemoContent(locale);

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
            {isEn ? "Exclusive experiences" : "Esperienze Esclusive"}
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
            {isEn ? "Evenings crafted around you" : "Serate create su misura"}
          </h1>
          <p className="mt-4 text-[#d9c4a8]">
            {isEn
              ? "From intimate dinners to private events, every detail is curated to leave a lasting mark."
              : "Dalla cena intima all&apos;evento privato, ogni dettaglio viene curato per lasciare il segno."}
          </p>

          <div className="mt-8 space-y-4">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#7c5b35]/45 bg-[#17110b] p-5"
              >
                <h2 className="heading-display text-2xl text-[#f2debf]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-[#cbb69a]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#7c5b35]/45">
          <Image
            src="/images/restaurant-real/wine-service.jpg"
            alt={
              isEn
                ? "Service team during evening dining"
                : "Brigata in servizio durante la serata"
            }
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
