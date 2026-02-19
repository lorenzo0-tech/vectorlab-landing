"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import Image from "next/image";

type ConceptCard = {
  title: string;
  before: string;
  after: string;
  beforeImage: string;
  afterImage: string;
  tag: string;
};

const cards: ConceptCard[] = [
  {
    title: "Ristorante — prenotazioni",
    before:
      "Hero senza promessa chiara, CTA poco visibile, menu sotto la piega.",
    after:
      "Titolo orientato alla prenotazione, CTA subito sopra la piega, menu in 1 tap.",
    beforeImage: "/images/mock/concept-restaurant-before.svg",
    afterImage: "/images/mock/concept-restaurant-after.svg",
    tag: "Focus prenotazioni",
  },
  {
    title: "Cocktail bar — eventi",
    before:
      "Eventi dispersi nella pagina, orari nascosti, nessuna priorità d’azione.",
    after:
      "Calendario eventi in evidenza, pulsanti tavolo e indicazioni sempre presenti.",
    beforeImage: "/images/mock/concept-bar-before.svg",
    afterImage: "/images/mock/concept-bar-after.svg",
    tag: "Flusso eventi",
  },
  {
    title: "Attività locale — lead",
    before:
      "Pagina lunga e generica, form troppo esteso, conversione bassa da mobile.",
    after:
      "Promessa specifica, CTA ripetuta nei punti chiave, richiesta contatto in pochi tap.",
    beforeImage: "/images/mock/concept-local-before.svg",
    afterImage: "/images/mock/concept-local-after.svg",
    tag: "Generazione contatti",
  },
];

function ComparisonPanel({
  before,
  after,
  beforeImage,
  afterImage,
  reduce,
}: {
  before: string;
  after: string;
  beforeImage: string;
  afterImage: string;
  reduce: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const revealPercent = reduce ? 56 : hovered ? 82 : 56;

  return (
    <motion.div
      className="mt-5"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-black/12 bg-slate-950">
        <div className="relative aspect-[16/10]">
          <Image
            src={beforeImage}
            alt="Versione prima del redesign"
            fill
            className="object-cover saturate-75"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />

          <motion.div
            className="absolute inset-y-0 left-0 overflow-hidden"
            animate={{ width: `${revealPercent}%` }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="relative h-full w-full">
              <Image
                src={afterImage}
                alt="Versione dopo il redesign"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.22)_0%,rgba(2,6,23,0.46)_100%)]" />

          <motion.div
            className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
            animate={{
              x: hovered ? ["-12%", "110%"] : "-12%",
              opacity: hovered ? [0, 0.85, 0] : 0,
            }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          />

          <motion.div
            className="absolute inset-y-0 w-px bg-white/85"
            animate={{ left: `calc(${revealPercent}% - 0.5px)` }}
            transition={{ duration: 0.72, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-slate-900/70 backdrop-blur"
              animate={hovered ? { scale: [1, 1.06, 1] } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <span className="inline-flex h-full w-full items-center justify-center text-white">
                <ArrowLeftRight className="h-4 w-4" />
              </span>
            </motion.div>
          </motion.div>

          <div className="absolute left-3 top-3 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/90">
            PRIMA
          </div>
          <div className="absolute right-3 top-3 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/90">
            DOPO
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-white/25" />
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white/90 p-4">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
            PRIMA
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-700">{before}</p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-700">
            DOPO
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-700">{after}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ConceptRedesign() {
  const reduce = useReducedMotion();

  return (
    <section id="concept" className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Prima → Dopo (Confronto di restyling)
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            Ogni card mostra cosa cambia in modo concreto: messaggio, gerarchia,
            CTA e percorsi rapidi per prenotare o contattare.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {cards.map((card) => (
            <motion.article
              key={card.title}
              className="glass gradient-border rounded-3xl p-6"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={reduce ? undefined : { y: -2 }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight">
                  {card.title}
                </h3>
                <span className="rounded-full border border-black/10 bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-slate-600">
                  {card.tag}
                </span>
              </div>

              <p className="mt-2 text-xs font-medium text-(--muted)">
                Confronto diretto tra struttura “prima” e “dopo”, con beneficio
                esplicito lato conversione.
              </p>

              <ComparisonPanel
                before={card.before}
                after={card.after}
                beforeImage={card.beforeImage}
                afterImage={card.afterImage}
                reduce={!!reduce}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
