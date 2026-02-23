import type { Metadata } from "next";
import Image from "next/image";
import { esperienze } from "../content";

export const metadata: Metadata = {
  title: "Esperienze",
};

export default function EsperienzePage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
            Esperienze Esclusive
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
            Serate create su misura
          </h1>
          <p className="mt-4 text-[#d9c4a8]">
            Dalla cena intima all&apos;evento privato, ogni dettaglio viene
            curato per lasciare il segno.
          </p>

          <div className="mt-8 space-y-4">
            {esperienze.map((item) => (
              <article
                key={item.titolo}
                className="rounded-2xl border border-[#7c5b35]/45 bg-[#17110b] p-5"
              >
                <h2 className="heading-display text-2xl text-[#f2debf]">
                  {item.titolo}
                </h2>
                <p className="mt-2 text-sm text-[#cbb69a]">{item.testo}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#7c5b35]/45">
          <Image
            src="/images/restaurant-real/wine-service.jpg"
            alt="Brigata in servizio durante la serata"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
