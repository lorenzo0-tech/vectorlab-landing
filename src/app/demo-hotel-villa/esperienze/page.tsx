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
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
            Esperienze Signature
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
            Esperienze pensate per sorprendere
          </h1>
          <p className="mt-4 text-[#5f4d3b]">
            Escursioni private, momenti romantici e attività esclusive: ogni
            proposta è personalizzata per trasformare il soggiorno in ricordo.
          </p>

          <div className="mt-8 space-y-4">
            {esperienze.map((item) => (
              <article
                key={item.titolo}
                className="rounded-2xl border border-[#deccb4] bg-[#fdf9f3] p-5"
              >
                <h2 className="heading-display text-2xl text-[#352617]">
                  {item.titolo}
                </h2>
                <p className="mt-2 text-sm text-[#5f4d3b]">{item.testo}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#deccb4]">
          <Image
            src="/images/luxury-real/page-experiences.jpg"
            alt="Esperienza privata in villa di lusso"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
