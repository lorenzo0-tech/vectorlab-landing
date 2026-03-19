import type { Metadata } from "next";
import Image from "next/image";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: "Spa",
    description:
      locale === "en"
        ? "Luxury spa and wellness rituals for deep relaxation and regeneration."
        : "Rituali spa e wellness luxury per relax profondo e rigenerazione.",
  };
}

export default async function SpaPage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";

  const rituals = [
    {
      name: isEn ? "Alba Ritual" : "Rituale Alba",
      duration: "75 min",
      description: isEn
        ? "Relaxing ritual with draining massage and citrus aromatherapy."
        : "Percorso rilassante con massaggio drenante e aromaterapia agrumata.",
    },
    {
      name: isEn ? "Seta Journey" : "Percorso Seta",
      duration: "110 min",
      description: isEn
        ? "Full body-face treatment with manual lifting techniques."
        : "Trattamento completo corpo-viso con tecniche lifting manuali.",
    },
    {
      name: isEn ? "Lake Couple" : "Coppia Lago",
      duration: "90 min",
      description: isEn
        ? "Double suite with tub, botanical tea, and private relaxation area."
        : "Cabina doppia con vasca, tisana botanica e area relax riservata.",
    },
  ];

  const spaHighlights = [
    isEn ? "Double suite rituals" : "Rituali in cabina doppia",
    isEn
      ? "Botanical tea and quiet recovery"
      : "Tisana botanica e recupero silenzioso",
    isEn
      ? "Reserved atmosphere, no crowd feeling"
      : "Atmosfera riservata, senza effetto affollamento",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#deccb4]">
            <Image
              src="/images/luxury-real/page-spa.jpg"
              alt={
                isEn
                  ? "Spa and wellness area in a luxury hotel"
                  : "Area spa e benessere di hotel di lusso"
              }
              width={1400}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[#fff8ee]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#efe2cf]">
                Spa & Wellness
              </p>
              <h2 className="heading-display mt-2 text-3xl">
                {isEn
                  ? "More than treatment: a quieter pace for the whole stay."
                  : "Più di un trattamento: un ritmo più quieto per l'intero soggiorno."}
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#deccb4] bg-[#f6eee2] p-6 text-[#5f4d3b]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8a6a46]">
              {isEn ? "Positioning" : "Posizionamento"}
            </p>
            <p className="mt-3 text-sm leading-8">
              {isEn
                ? "The spa feels integrated into the hotel's identity: discreet, tactile, softly luxurious, and perfectly aligned with the villa atmosphere."
                : "La spa appare integrata nell'identità dell'hotel: discreta, materica, morbida nel lusso e perfettamente coerente con l'atmosfera della villa."}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
            Spa & Wellness
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
            {isEn
              ? "A wellness sanctuary reserved for you"
              : "Un santuario di benessere solo per te"}
          </h1>
          <p className="mt-4 max-w-2xl text-[#5f4d3b] sm:text-lg sm:leading-8">
            {isEn
              ? "Signature rituals, enveloping atmospheres, and expert hands for a deep, elegant, regenerative pause."
              : "Rituali firmati, atmosfere avvolgenti e mani esperte per regalarti una pausa profonda, elegante, rigenerante."}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {spaHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#deccb4] bg-[#fbf7ef] px-4 py-4 text-sm text-[#5f4d3b]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {rituals.map((ritual, index) => (
              <article
                key={ritual.name}
                className="rounded-3xl border border-[#deccb4] bg-[#fdf9f3] p-6 shadow-[0_18px_34px_rgba(90,70,45,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a6a46]">
                      0{index + 1} ·{" "}
                      {isEn ? "Signature ritual" : "Rituale signature"}
                    </p>
                    <h2 className="heading-display text-2xl text-[#352617]">
                      {ritual.name}
                    </h2>
                  </div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#7e5a36]">
                    {ritual.duration}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 text-[#5f4d3b]">
                  {ritual.description}
                </p>
                <div className="mt-4 rounded-2xl border border-[#deccb4] bg-[#f7efe3] px-4 py-4 text-sm leading-7 text-[#5f4d3b]">
                  {isEn
                    ? "Framed as part of the stay, not as an isolated treatment. The guest perceives continuity between suite, spa, and service."
                    : "Presentato come parte del soggiorno, non come trattamento isolato. L'ospite percepisce continuità tra suite, spa e servizio."}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
