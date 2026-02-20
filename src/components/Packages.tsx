"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics-events";

type PackageCard = {
  name: "BASE" | "VETRINA" | "CRESCITA";
  tagline: string;
  points: string[];
  image: string;
  segment: string;
  highlight?: boolean;
};

const packages: PackageCard[] = [
  {
    name: "BASE",
    tagline: "Essenziale, veloce, pronto a convertire.",
    points: [
      "Testata + invito all’azione chiaro",
      "Menu in un tocco",
      "Contatti e indicazioni immediate",
      "Ottimizzazione prestazioni base",
      "SEO locale base",
    ],
    image: "/images/mock/package-base-placeholder.svg",
    segment: "Ristoranti e pizzerie",
  },
  {
    name: "VETRINA",
    tagline: "Di alto livello e credibile, per alzare il valore percepito.",
    highlight: true,
    points: [
      "Struttura di alto livello prima su smartphone",
      "Sezioni persuasive + prove rapide",
      "Galleria foto ottimizzata",
      "Tracciamento clic (inviti all’azione / menu / mappa)",
      "Impostazione tecnica pulita e scalabile",
    ],
    image: "/images/mock/package-vetrina-placeholder.svg",
    segment: "Bar di miscelazione ed eventi",
  },
  {
    name: "CRESCITA",
    tagline: "Per chi vuole misurare e migliorare nel tempo.",
    points: [
      "Struttura orientata a contatti/prenotazioni",
      "Miglioramenti dell’esperienza utente su dati reali",
      "Confronto tra due varianti sugli inviti all’azione (quando serve)",
      "Eventi e tracciamenti avanzati",
      "Piano iterativo di ottimizzazione",
    ],
    image: "/images/mock/package-crescita-placeholder.svg",
    segment: "Attività locali ad alto valore",
  },
];

export function Packages() {
  const reduce = useReducedMotion();

  return (
    <section id="pacchetti" className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Pacchetti
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            Nessun pacchetto “standard”: scegliamo il taglio giusto in base a
            obiettivi e contenuti.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {packages.map((p) => (
            <motion.div
              key={p.name}
              className={
                "group card-tech relative overflow-hidden rounded-3xl p-6 transition-transform " +
                (p.highlight
                  ? "glass-strong gradient-border"
                  : "glass gradient-border")
              }
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={reduce ? undefined : { y: -2 }}
            >
              <span aria-hidden="true" className="sweep-strip" />

              <div className="mb-4 aspect-5/3 overflow-hidden rounded-2xl border border-black/10">
                <Image
                  src={p.image}
                  alt={`Anteprima grafica pacchetto ${p.name}`}
                  width={900}
                  height={540}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-xs font-semibold tracking-widest text-(--muted)">
                {p.name}
              </p>
              <p className="mt-1 text-xs font-semibold text-cyan-900/80">
                {p.segment}
              </p>
              <p className="mt-3 text-lg font-semibold tracking-tight">
                {p.tagline}
              </p>

              <ul className="mt-5 space-y-3">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-sm leading-7"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-(--muted)">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary focus-ring w-full"
                  onClick={() =>
                    trackCtaClick({
                      posizione: "pacchetti",
                      destinazione: "calendly",
                      nomePacchetto: p.name,
                    })
                  }
                >
                  Prenota una chiamata
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#preventivo"
                  className="btn-secondary focus-ring w-full"
                  onClick={() =>
                    trackCtaClick({
                      posizione: "pacchetti",
                      destinazione: "preventivo",
                      nomePacchetto: p.name,
                    })
                  }
                >
                  Richiedi preventivo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
