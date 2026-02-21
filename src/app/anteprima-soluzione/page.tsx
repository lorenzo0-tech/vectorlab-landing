import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Anteprima soluzione",
  description: "Pagina anteprima interna.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
};

export default async function AnteprimaSoluzionePage() {
  const cookieStore = await cookies();
  const locale =
    cookieStore.get("site_locale_v1")?.value === "en" ? "en" : "it";

  const candidates =
    locale === "it"
      ? [
          {
            label: "Testata + prenota",
            reason: "Sala di alto livello leggibile e orientata a conversione.",
            src: "/images/salaprincipale.jpeg",
          },
          {
            label: "Piatto firma primo piano",
            reason:
              "Immagine principale del cibo più coerente con il valore percepito del locale.",
            src: "/images/herofoto.webp",
          },
          {
            label: "Chef al pass",
            reason:
              "Gesto dello chef in azione: comunica qualità e artigianalità.",
            src: "/images/chefalpass.jpg",
          },
          {
            label: "Menu degustazione",
            reason:
              "Scatto menu/tavolo per rappresentare scelta percorsi e offerta.",
            src: "/images/menudegustazione.jpeg",
          },
          {
            label: "Prenotazione tavolo",
            reason:
              "Dettaglio tavolo riservato chiaro, perfetto per invito alla prenotazione.",
            src: "/images/tavoloreserved.jpg",
          },
        ]
      : [
          {
            label: "Hero + book",
            reason: "Premium dining room, readable and conversion-oriented.",
            src: "/images/salaprincipale.jpeg",
          },
          {
            label: "Signature dish close-up",
            reason: "Main food image aligned with the venue’s perceived value.",
            src: "/images/herofoto.webp",
          },
          {
            label: "Chef at the pass",
            reason: "Chef in action: communicates quality and craftsmanship.",
            src: "/images/chefalpass.jpg",
          },
          {
            label: "Tasting menu",
            reason: "Menu/table shot to represent menu paths and offer.",
            src: "/images/menudegustazione.jpeg",
          },
          {
            label: "Table booking",
            reason: "Clear reserved-table detail, perfect for booking CTA.",
            src: "/images/tavoloreserved.jpg",
          },
        ];

  return (
    <main className="min-h-screen py-12">
      <section className="container-pad">
        <h1 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {locale === "it"
            ? "Anteprima immagini — sezione Soluzione"
            : "Image preview — Solution section"}
        </h1>
        <p className="mt-3 max-w-2xl text-(--muted)">
          {locale === "it"
            ? "Qui vedi le 5 immagini candidate prima di applicarle in produzione."
            : "Here you can review the 5 image candidates before production rollout."}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {candidates.map((item) => (
            <article
              key={item.label}
              className="glass-strong gradient-border overflow-hidden rounded-3xl p-4"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-white/15">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-cyan-100/90 uppercase">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-(--muted)">{item.reason}</p>
              <p className="mt-2 text-xs text-cyan-100/75">{item.src}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
