import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ristorante",
};

const menu = [
  {
    nome: "Degustazione Lago",
    descrizione: "7 portate stagionali, focus materie prime italiane.",
    prezzo: "€145",
  },
  {
    nome: "Percorso Villa",
    descrizione: "9 portate signature con servizio dedicato al tavolo.",
    prezzo: "€185",
  },
  {
    nome: "Wine Pairing",
    descrizione: "Abbinamento curato da sommelier con etichette italiane rare.",
    prezzo: "€80",
  },
];

export default function RistorantePage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
            Ristorante
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
            Un ristorante che rende ogni sera speciale
          </h1>
          <p className="mt-4 text-[#5f4d3b]">
            Sapori italiani contemporanei, servizio impeccabile e una cantina
            scelta per accompagnare ogni momento con stile.
          </p>
          <div className="mt-8 space-y-4">
            {menu.map((item) => (
              <article
                key={item.nome}
                className="rounded-2xl border border-[#deccb4] bg-[#fdf9f3] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="heading-display text-2xl text-[#352617]">
                      {item.nome}
                    </h2>
                    <p className="mt-2 text-sm text-[#5f4d3b]">
                      {item.descrizione}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[#7e5a36]">
                    {item.prezzo}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[#deccb4]">
          <Image
            src="/images/luxury-real/page-restaurant.jpg"
            alt="Sala ristorante di lusso"
            width={1400}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
