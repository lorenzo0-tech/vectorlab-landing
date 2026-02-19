import Image from "next/image";

const candidates = [
  {
    label: "Testata + prenota",
    reason: "Sala premium leggibile e orientata a conversione high-end.",
    src: "/images/salaprincipale.jpeg",
  },
  {
    label: "Piatto firma primo piano",
    reason: "Visual food hero più coerente con valore percepito del locale.",
    src: "/images/herofoto.webp",
  },
  {
    label: "Chef al pass",
    reason: "Gesto dello chef in azione: comunica qualità e artigianalità.",
    src: "/images/chefalpass.jpg",
  },
  {
    label: "Menu degustazione",
    reason: "Scatto menu/tavolo per rappresentare scelta percorsi e offerta.",
    src: "/images/menudegustazione.jpeg",
  },
  {
    label: "Prenotazione tavolo",
    reason: "Dettaglio reserved chiaro, perfetto per CTA prenotazione.",
    src: "/images/tavoloreserved.jpg",
  },
] as const;

export default function AnteprimaSoluzionePage() {
  return (
    <main className="min-h-screen py-12">
      <section className="container-pad">
        <h1 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Anteprima immagini — sezione Soluzione
        </h1>
        <p className="mt-3 max-w-2xl text-(--muted)">
          Qui vedi le 5 immagini candidate prima di applicarle in produzione.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {candidates.map((item) => (
            <article
              key={item.label}
              className="glass-strong gradient-border overflow-hidden rounded-3xl p-4"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15">
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
