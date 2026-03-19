import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getHotelDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Suites" : "Suite",
    description:
      locale === "en"
        ? "Showcase of luxury suites and villas with premium comfort and privacy."
        : "Vetrina di suite e ville esclusive con comfort elevato e privacy assoluta.",
  };
}

export default async function SuitePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { suites } = getHotelDemoContent(locale);

  const suiteNotes = [
    isEn
      ? "Best for romantic lake weekends"
      : "Ideale per weekend romantici sul lago",
    isEn
      ? "Best for private long stays"
      : "Ideale per soggiorni privati piu' lunghi",
    isEn
      ? "Best for quiet design-led escapes"
      : "Ideale per fughe riservate dal gusto contemporaneo",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
          {isEn ? "Rooms and Villas" : "Camere e Ville"}
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
          {isEn
            ? "Suites designed for contemporary luxury"
            : "Suite disegnate per il lusso contemporaneo"}
        </h1>
        <p className="mt-4 max-w-3xl text-[#5f4d3b] sm:text-lg sm:leading-8">
          {isEn
            ? "Every option is crafted to offer privacy, elevated comfort, and timeless aesthetics."
            : "Ogni soluzione è progettata per offrire privacy, comfort elevato e un&apos;estetica senza tempo."}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            isEn ? "Arrival ritual included" : "Rituale di arrivo incluso",
            isEn ? "Refined material palette" : "Palette materica raffinata",
            isEn
              ? "Concierge-led personalization"
              : "Personalizzazione guidata dal concierge",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#deccb4] bg-[#fbf7ef] px-4 py-3 text-sm text-[#5f4d3b]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {suites.map((suite, index) => (
          <article
            key={suite.name}
            className="overflow-hidden rounded-[2rem] border border-[#deccb4] bg-[#fdf9f3] shadow-[0_18px_34px_rgba(90,70,45,0.08)]"
          >
            <Image
              src={suite.image}
              alt={suite.name}
              width={1400}
              height={900}
              className="aspect-16/10 w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="space-y-3 p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a6a46]">
                {suiteNotes[index]}
              </p>
              <h2 className="heading-display text-2xl text-[#352617]">
                {suite.name}
              </h2>
              <p className="text-sm leading-relaxed text-[#5f4d3b]">
                {suite.description}
              </p>
              <div className="rounded-2xl border border-[#deccb4] bg-[#f7efe3] px-4 py-4 text-sm text-[#5f4d3b]">
                {isEn
                  ? "Thought as a complete mood: lighting, textures, scent, and service all reinforce the same promise."
                  : "Pensata come un'atmosfera completa: luce, tessuti, profumo e servizio rafforzano la stessa promessa."}
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7e5a36]">
                {suite.price}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-[#deccb4] bg-[linear-gradient(180deg,#fbf6ef_0%,#f4ebdf_100%)] p-7 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
              {isEn ? "Tailored stay" : "Soggiorno su misura"}
            </p>
            <h2 className="heading-display mt-3 text-3xl text-[#352617] sm:text-4xl">
              {isEn
                ? "Turn the suite into a complete experience before arrival."
                : "Trasforma la suite in un'esperienza completa ancora prima dell'arrivo."}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/demo-hotel-villa/prenotazione"
              className="rounded-full bg-[#3f2f1f] px-6 py-3 text-sm font-semibold text-[#f6ecdd]"
            >
              {isEn ? "Book your suite" : "Prenota la tua suite"}
            </Link>
            <Link
              href="/demo-hotel-villa/contatti"
              className="rounded-full border border-[#bda17f] px-6 py-3 text-sm font-semibold text-[#3f2f1f]"
            >
              {isEn ? "Talk to concierge" : "Parla con il concierge"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
