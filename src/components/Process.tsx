"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, DraftingCompass, Rocket, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function Process() {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();
  const steps =
    locale === "it"
      ? [
          {
            n: "01",
            title: "Allineamento (15–30 min)",
            desc: "Obiettivo, pubblico, azione principale. Tagliamo tutto il resto.",
            Icon: Zap,
          },
          {
            n: "02",
            title: "Struttura e testi",
            desc: "Testata, inviti all’azione, menu e sezioni: ordine logico, frizione minima.",
            Icon: DraftingCompass,
          },
          {
            n: "03",
            title: "Progettazione di alto livello + sviluppo",
            desc: "Prima su smartphone, prestazioni, immagini ottimizzate, interfaccia pulita.",
            Icon: Rocket,
          },
          {
            n: "04",
            title: "Pubblicazione e misurazione",
            desc: "Mettiamo online e tracciamo i clic su inviti all’azione, menu e contatti.",
            Icon: ClipboardCheck,
          },
        ]
      : [
          {
            n: "01",
            title: "Alignment (15–30 min)",
            desc: "Goal, audience, primary action. We cut everything unnecessary.",
            Icon: Zap,
          },
          {
            n: "02",
            title: "Structure and copy",
            desc: "Hero, calls to action, menu and sections: clear order, minimum friction.",
            Icon: DraftingCompass,
          },
          {
            n: "03",
            title: "Premium design + development",
            desc: "Smartphone-first, high performance, optimized images, clean interface.",
            Icon: Rocket,
          },
          {
            n: "04",
            title: "Launch and measurement",
            desc: "We go live and track clicks on CTAs, menu and contacts.",
            Icon: ClipboardCheck,
          },
        ];

  return (
    <section id="metodo" className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "it"
              ? "Metodo rapido. Decisioni rapide. Risultati rapidi."
              : "Fast method. Fast decisions. Fast results."}
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map(({ n, title, desc, Icon }) => (
            <motion.div
              key={n}
              className="glass gradient-border card-tech group rounded-3xl p-6"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={reduce ? undefined : { y: -2 }}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-widest text-(--muted)">
                  {n}
                </p>
                <motion.span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5"
                  whileHover={reduce ? undefined : { rotate: 2, scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-(--muted)">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
