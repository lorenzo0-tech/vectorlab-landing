import type { Metadata } from "next";
import Image from "next/image";
import { getRestaurantDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Experiences" : "Esperienze",
    description:
      locale === "en"
        ? "Exclusive restaurant experiences for private dinners and bespoke events."
        : "Esperienze esclusive del ristorante per cene private ed eventi su misura.",
  };
}

export default async function EsperienzePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { experiences } = getRestaurantDemoContent(locale);

  const experienceSignals = [
    isEn
      ? "Private dinners with stronger identity"
      : "Cene private con identità più forte",
    isEn ? "Occasion-led hospitality" : "Accoglienza pensata per l'occasione",
    isEn
      ? "Service shaped around guests, not standard slots"
      : "Servizio costruito sugli ospiti, non su slot standard",
  ];

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
          <p className="mt-4 max-w-2xl text-[#d9c4a8] sm:text-lg sm:leading-8">
            {isEn
              ? "From intimate dinners to private events, every detail is curated to leave a lasting mark."
              : "Dalla cena intima all&apos;evento privato, ogni dettaglio viene curato per lasciare il segno."}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {experienceSignals.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#7c5b35]/45 bg-[#17110b] px-4 py-4 text-sm text-[#d7c3a7]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {experiences.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-6 shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#dcb485]">
                  0{index + 1} ·{" "}
                  {isEn ? "Reserved experience" : "Esperienza riservata"}
                </p>
                <h2 className="heading-display text-2xl text-[#f2debf]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#cbb69a]">
                  {item.text}
                </p>
                <div className="mt-4 rounded-2xl border border-[#7c5b35]/40 bg-[#120d09] px-4 py-4 text-sm leading-7 text-[#d7c3a7]">
                  {isEn
                    ? "Each proposal is written to feel like an occasion with social value and emotional charge, not just an add-on."
                    : "Ogni proposta è scritta per sembrare un'occasione con valore sociale e carica emotiva, non un semplice extra."}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#7c5b35]/45">
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
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[#f7ead6]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#dcb485]">
                {isEn ? "Hospitality in motion" : "Accoglienza in movimento"}
              </p>
              <h2 className="heading-display mt-2 text-3xl">
                {isEn
                  ? "The restaurant feels ready for memorable evenings before the first guest arrives."
                  : "Il ristorante sembra pronto a serate memorabili prima ancora dell'arrivo del primo ospite."}
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#7c5b35]/45 bg-[#17110b] p-6 text-[#d7c3a7]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#dcb485]">
              {isEn ? "For your occasion" : "Per la tua occasione"}
            </p>
            <p className="mt-3 text-sm leading-8">
              {isEn
                ? "Each format is designed to give anniversaries, celebrations, and private dinners the right atmosphere from the first welcome to the last toast."
                : "Ogni proposta e' pensata per dare ad anniversari, celebrazioni e cene riservate l'atmosfera giusta dal primo benvenuto all'ultimo brindisi."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
