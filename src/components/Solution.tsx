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
    title: "Menu in un tocco",
    desc: "PDF + pagina web indicizzabile: utile per persone e Google.",
    Icon: UtensilsCrossed,
  },
  {
    title: "Foto ottimizzate",
    desc: "Immagini leggere, nitide, con caricamento veloce su smartphone.",
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
  const sequenceContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  } as const;

  const sequenceItem = {
    hidden: reduce
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 14, scale: 0.99 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.48, ease: [0.2, 0.8, 0.2, 1] },
    },
  } as const;

  const gallery = [
    {
      src: "/images/herosala.jpg",
      alt: "Testata sala completa con profondità e luce calda",
      label: "Testata + prenota",
      mockHeader: true,
      className:
        "relative col-span-12 h-44 overflow-hidden rounded-2xl border border-white/15 sm:col-span-7 sm:h-64 lg:h-72",
      sizes: "(max-width: 640px) 100vw, 58vw",
    },
    {
      src: "/images/piattosignature.jpg",
      alt: "Piatto simbolo in primo piano con servizio al tavolo",
      label: "Piatto firma primo piano",
      mockHeader: false,
      className:
        "relative col-span-12 h-44 overflow-hidden rounded-2xl border border-white/15 sm:col-span-5 sm:h-64 lg:h-72",
      sizes: "(max-width: 640px) 100vw, 42vw",
    },
    {
      src: "/images/chefalpass.jpg",
      alt: "Chef al pass durante il servizio",
      label: "Chef al pass",
      mockHeader: false,
      className:
        "relative col-span-12 h-36 overflow-hidden rounded-2xl border border-white/15 sm:col-span-4 sm:h-52",
      sizes: "(max-width: 640px) 100vw, 34vw",
    },
    {
      src: "/images/menudegustazione.jpeg",
      alt: "Menu degustazione in primo piano",
      label: "Menu degustazione",
      mockHeader: false,
      className:
        "relative col-span-12 h-36 overflow-hidden rounded-2xl border border-white/15 sm:col-span-5 sm:h-52",
      sizes: "(max-width: 640px) 100vw, 40vw",
    },
    {
      src: "/images/tavoloreserved.jpg",
      alt: "Dettaglio tavolo riservato",
      label: "Prenotazione tavolo",
      mockHeader: false,
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
            <motion.div
              className="grid grid-cols-12 gap-3"
              variants={sequenceContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {gallery.map((shot) => (
                <motion.div
                  key={shot.label}
                  className={shot.className}
                  variants={sequenceItem}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes={shot.sizes}
                  />

                  {shot.mockHeader ? (
                    <div className="absolute left-2 top-2 w-[58%] rounded-lg border border-cyan-100/30 bg-slate-950/72 p-1.5 shadow-[0_16px_44px_rgba(2,6,23,0.45)] backdrop-blur-md sm:left-3 sm:top-3 sm:w-[46%] sm:rounded-xl sm:p-2 lg:w-[42%]">
                      <p className="text-[10px] font-semibold tracking-[0.14em] text-cyan-100/85 uppercase">
                        Anteprima testata
                      </p>
                      <p className="mt-1 text-[10px] font-semibold leading-3.5 text-white/95 sm:text-[11px] sm:leading-4 lg:text-xs">
                        Prenota il tavolo in 15 secondi.
                      </p>
                      <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
                        <span className="rounded-full bg-cyan-300/20 px-1.5 py-0.5 text-[9px] font-semibold text-cyan-100 sm:px-2 sm:py-1 sm:text-[10px]">
                          Chiama
                        </span>
                        <span className="rounded-full bg-fuchsia-300/20 px-1.5 py-0.5 text-[9px] font-semibold text-fuchsia-100 sm:px-2 sm:py-1 sm:text-[10px]">
                          Indicazioni
                        </span>
                      </div>
                      <button
                        type="button"
                        className="mt-1.5 w-full rounded-md bg-[linear-gradient(120deg,rgba(103,232,249,0.9),rgba(129,140,248,0.86),rgba(232,121,249,0.85))] px-2 py-1 text-[9px] font-semibold text-slate-950 sm:mt-2 sm:rounded-lg sm:py-1.5 sm:text-[10px]"
                      >
                        Prenota ora
                      </button>
                    </div>
                  ) : null}

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/75 to-transparent px-3 py-2">
                    <p className="text-xs font-semibold tracking-[0.12em] text-cyan-100/95 uppercase">
                      {shot.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, Icon }, index) => (
            <motion.div
              key={title}
              className="glass gradient-border card-tech group rounded-3xl p-6 transition-transform will-change-transform"
              initial={
                reduce ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.99 }
              }
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: [0.2, 0.8, 0.2, 1],
                delay: reduce ? 0 : index * 0.05,
              }}
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
        </motion.div>
      </div>
    </section>
  );
}
