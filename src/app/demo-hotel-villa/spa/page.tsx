import type { Metadata } from "next";
import Image from "next/image";
import { getServerLocale } from "@/lib/server-locale";

export const metadata: Metadata = {
  title: "Spa",
};

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

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-[#deccb4]">
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
          />
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
          <p className="mt-4 text-[#5f4d3b]">
            {isEn
              ? "Signature rituals, enveloping atmospheres, and expert hands for a deep, elegant, regenerative pause."
              : "Rituali firmati, atmosfere avvolgenti e mani esperte per regalarti una pausa profonda, elegante, rigenerante."}
          </p>

          <div className="mt-8 space-y-4">
            {rituals.map((ritual) => (
              <article
                key={ritual.name}
                className="rounded-2xl border border-[#deccb4] bg-[#fdf9f3] p-5"
              >
                <div className="flex items-center justify-between">
                  <h2 className="heading-display text-2xl text-[#352617]">
                    {ritual.name}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#7e5a36]">
                    {ritual.duration}
                  </p>
                </div>
                <p className="mt-2 text-sm text-[#5f4d3b]">
                  {ritual.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
