import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Spa",
};

const rituals = [
  {
    nome: "Rituale Alba",
    durata: "75 min",
    descrizione:
      "Percorso rilassante con massaggio drenante e aromaterapia agrumata.",
  },
  {
    nome: "Percorso Seta",
    durata: "110 min",
    descrizione:
      "Trattamento completo corpo-viso con tecniche lifting manuali.",
  },
  {
    nome: "Coppia Lago",
    durata: "90 min",
    descrizione:
      "Cabina doppia con vasca, tisana botanica e area relax riservata.",
  },
];

export default function SpaPage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-[#deccb4]">
          <Image
            src="/images/luxury-real/page-spa.jpg"
            alt="Area spa e benessere di hotel di lusso"
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
            Un santuario di benessere solo per te
          </h1>
          <p className="mt-4 text-[#5f4d3b]">
            Rituali firmati, atmosfere avvolgenti e mani esperte per regalarti
            una pausa profonda, elegante, rigenerante.
          </p>

          <div className="mt-8 space-y-4">
            {rituals.map((ritual) => (
              <article
                key={ritual.nome}
                className="rounded-2xl border border-[#deccb4] bg-[#fdf9f3] p-5"
              >
                <div className="flex items-center justify-between">
                  <h2 className="heading-display text-2xl text-[#352617]">
                    {ritual.nome}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#7e5a36]">
                    {ritual.durata}
                  </p>
                </div>
                <p className="mt-2 text-sm text-[#5f4d3b]">
                  {ritual.descrizione}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
