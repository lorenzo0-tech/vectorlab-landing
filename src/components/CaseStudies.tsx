"use client";

import { motion, useReducedMotion } from "framer-motion";

const cases = [
  {
    name: "Ristorante centro città",
    metric: "+38% richieste tavolo",
    detail: "nei primi 45 giorni dopo il rilascio",
  },
  {
    name: "Pizzeria takeaway",
    metric: "+52% clic su menu",
    detail: "dopo ottimizzazione testata e CTA",
  },
  {
    name: "Cocktail bar eventi",
    metric: "2.1x click su prenota",
    detail: "grazie a percorso mobile semplificato",
  },
];

export function CaseStudies() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad" id="case-study">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Risultati reali, non promesse.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            Esempi sintetici di outcome tipici su attività locali con struttura
            orientata alle conversioni.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <motion.article
              key={item.name}
              className="glass gradient-border card-tech rounded-3xl p-6"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <p className="text-xs font-semibold tracking-widest text-(--muted)">
                {item.name}
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                {item.metric}
              </p>
              <p className="mt-2 text-sm text-(--muted)">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
