import type { Metadata } from "next";
import Image from "next/image";
import { getHotelDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Experiences" : "Esperienze",
    description:
      locale === "en"
        ? "Private and bespoke luxury experiences designed around your stay."
        : "Esperienze private e su misura pensate per valorizzare il soggiorno.",
  };
}

export default async function EsperienzePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { experiences } = getHotelDemoContent(locale);
  const promises = [
    isEn
      ? "Always private, never standardized"
      : "Sempre private, mai standardizzate",
    isEn
      ? "Built around your stay rhythm"
      : "Pensate intorno al ritmo del tuo soggiorno",
    isEn
      ? "Curated by concierge before arrival"
      : "Coordinate dal concierge prima dell'arrivo",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
            {isEn ? "Signature experiences" : "Esperienze Signature"}
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
            {isEn
              ? "Experiences designed to surprise"
              : "Esperienze pensate per sorprendere"}
          </h1>
          <p className="mt-4 max-w-2xl text-[#5f4d3b] sm:text-lg sm:leading-8">
            {isEn
              ? "Private excursions, romantic moments, and exclusive activities: each proposal is tailored to turn your stay into a lasting memory."
              : "Escursioni private, momenti romantici e attività esclusive: ogni proposta è personalizzata per trasformare il soggiorno in ricordo."}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {promises.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#deccb4] bg-[#fbf7ef] px-4 py-4 text-sm text-[#5f4d3b]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {experiences.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#deccb4] bg-[#fdf9f3] p-6 shadow-[0_18px_34px_rgba(90,70,45,0.06)]"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a6a46]">
                  0{index + 1} ·{" "}
                  {isEn ? "Signature moment" : "Momento signature"}
                </p>
                <h2 className="heading-display text-2xl text-[#352617]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#5f4d3b]">
                  {item.text}
                </p>
                <div className="mt-4 rounded-2xl border border-[#deccb4] bg-[#f6eee2] px-4 py-4 text-sm leading-7 text-[#5f4d3b]">
                  {isEn
                    ? "Conceived as part of a full stay narrative: preparation, atmosphere, service, and return to the suite all feel connected."
                    : "Pensata come parte di una narrazione completa del soggiorno: preparazione, atmosfera, servizio e rientro in suite risultano coerenti tra loro."}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#deccb4]">
            <Image
              src="/images/luxury-real/page-experiences.jpg"
              alt={
                isEn
                  ? "Private experience in a luxury villa"
                  : "Esperienza privata in villa di lusso"
              }
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[#fff8ee]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#f4e6d1]">
                {isEn ? "Curated through concierge" : "Curate dal concierge"}
              </p>
              <h2 className="heading-display mt-2 text-3xl">
                {isEn
                  ? "The stay expands beyond the room and becomes a story worth remembering."
                  : "Il soggiorno esce dalla camera e diventa una storia da ricordare."}
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#deccb4] bg-[#f6eee2] p-6 text-[#5f4d3b]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8a6a46]">
              {isEn ? "Commercial effect" : "Effetto commerciale"}
            </p>
            <p className="mt-3 text-sm leading-8">
              {isEn
                ? "These experiences increase perceived value, justify premium positioning, and make the property feel impossible to compare on price alone."
                : "Queste esperienze alzano il valore percepito, giustificano il posizionamento premium e fanno sembrare la struttura non confrontabile solo sul prezzo."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
