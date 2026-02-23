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
          <p className="mt-4 text-[#5f4d3b]">
            {isEn
              ? "Private excursions, romantic moments, and exclusive activities: each proposal is tailored to turn your stay into a lasting memory."
              : "Escursioni private, momenti romantici e attività esclusive: ogni proposta è personalizzata per trasformare il soggiorno in ricordo."}
          </p>

          <div className="mt-8 space-y-4">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#deccb4] bg-[#fdf9f3] p-5"
              >
                <h2 className="heading-display text-2xl text-[#352617]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-[#5f4d3b]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#deccb4]">
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
          />
        </div>
      </div>
    </main>
  );
}
