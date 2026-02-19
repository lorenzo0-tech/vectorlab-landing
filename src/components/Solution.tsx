"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Gauge,
  MapPinned,
  MousePointerClick,
  Search,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";

const items = [
  {
    title: "Testata chiara",
    desc: "Una promessa comprensibile in 3 secondi, con invito all’azione immediato.",
    Icon: MousePointerClick,
  },
  {
    title: "Pulsanti che convertono",
    desc: "Chiama / Prenota / Indicazioni sempre visibili e facili da toccare.",
    Icon: Smartphone,
  },
  {
    title: "Menu in 1 tap",
    desc: "PDF + pagina web indicizzabile: utile per persone e Google.",
    Icon: UtensilsCrossed,
  },
  {
    title: "Foto ottimizzate",
    desc: "Immagini leggere, nitide, con caricamento veloce su mobile.",
    Icon: Gauge,
  },
  {
    title: "SEO locale base",
    desc: "Struttura, testi e segnali fondamentali per essere trovati.",
    Icon: Search,
  },
  {
    title: "Tracciamento clic",
    desc: "Misuriamo le azioni importanti per capire cosa porta contatti.",
    Icon: MapPinned,
  },
];

export function Solution() {
  const reduce = useReducedMotion();

  const gallery = [
    {
      src: "/images/herosala.jpg",
      alt: "Hero sala completa con profondità e luce calda",
      label: "Testata + prenota",
      className:
        "relative col-span-12 h-44 overflow-hidden rounded-2xl border border-white/15 sm:col-span-7 sm:h-64 lg:h-72",
      sizes: "(max-width: 640px) 100vw, 58vw",
    },
    {
      src: "/images/piattosignature.jpg",
      alt: "Piatto signature in close-up con servizio al tavolo",
      label: "Piatto firma primo piano",
      className:
        "relative col-span-12 h-44 overflow-hidden rounded-2xl border border-white/15 sm:col-span-5 sm:h-64 lg:h-72",
      sizes: "(max-width: 640px) 100vw, 42vw",
    },
    {
      src: "/images/chefalpass.jpg",
      alt: "Chef al pass durante il servizio",
      label: "Chef al pass",
      className:
        "relative col-span-12 h-36 overflow-hidden rounded-2xl border border-white/15 sm:col-span-4 sm:h-52",
      sizes: "(max-width: 640px) 100vw, 34vw",
    },
    {
      src: "/images/menudegustazione.jpeg",
      alt: "Menu degustazione in primo piano",
      label: "Menu degustazione",
      className:
        "relative col-span-12 h-36 overflow-hidden rounded-2xl border border-white/15 sm:col-span-5 sm:h-52",
      sizes: "(max-width: 640px) 100vw, 40vw",
    },
    {
      src: "/images/tavoloreserved.jpg",
      alt: "Dettaglio tavolo riservato",
      label: "Prenotazione tavolo",
      className:
        "relative col-span-12 h-36 overflow-hidden rounded-2xl border border-white/15 sm:col-span-3 sm:h-52",
      sizes: "(max-width: 640px) 100vw, 26vw",
    },
  ] as const;

  return (
    <section id="soluzione" className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Un sito progettato per una cosa sola: far agire le persone.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            Elementi concreti, pensati per prenotazioni, chiamate e richieste.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-strong gradient-border panel-tech mt-8 overflow-hidden rounded-3xl p-3"
        >
          <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-4">
            <div className="grid grid-cols-12 gap-3">
              {gallery.map((shot) => (
                <div key={shot.label} className={shot.className}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes={shot.sizes}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-3 py-2">
                    <p className="text-xs font-semibold tracking-[0.12em] text-cyan-100/95 uppercase">
                      {shot.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <motion.div
              key={title}
              className="glass gradient-border card-tech group rounded-3xl p-6 transition-transform will-change-transform"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={reduce ? undefined : { y: -2 }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-(--muted)">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
