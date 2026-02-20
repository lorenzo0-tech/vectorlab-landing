"use client";

import { motion, useReducedMotion } from "framer-motion";

const cases = [
  {
    name: "Ristorante centro città · Milano",
    metric: "+38% richieste tavolo",
    detail: "45 giorni dopo il rilascio",
    before: "CTA poco visibile e percorso prenotazione dispersivo",
    action: "Header semplificata, CTA sticky e percorso mobile lineare",
  },
  {
    name: "Pizzeria takeaway · Bergamo",
    metric: "+52% clic su menu",
    detail: "30 giorni dopo ottimizzazione testata e CTA",
    before: "Menu difficile da trovare da smartphone",
    action: "Menu in 1 tap + gerarchia visiva orientata all’azione",
  },
  {
    name: "Cocktail bar eventi · Torino",
    metric: "2.1x clic su prenota",
    detail: "60 giorni con tracciamento eventi attivo",
    before: "Traffico buono ma conversione bassa su mobile",
    action: "Riduzione frizione sui tap e blocchi trust sopra la piega",
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
            Mini-case con contesto, intervento e outcome. Niente promesse vaghe:
            solo metriche di comportamento utili alla vendita.
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
              <p className="mt-4 text-xs leading-6 text-(--muted)">
                <span className="font-semibold text-foreground/90">Prima:</span>{" "}
                {item.before}
              </p>
              <p className="mt-1 text-xs leading-6 text-(--muted)">
                <span className="font-semibold text-foreground/90">
                  Intervento:
                </span>{" "}
                {item.action}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
