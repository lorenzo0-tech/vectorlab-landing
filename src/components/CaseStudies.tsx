"use client";

import { motion, useReducedMotion } from "framer-motion";

const cases = [
  {
    name: "Ristorante centro città · Milano",
    metric: "+38% richieste tavolo",
    detail: "45 giorni dopo il rilascio",
    before:
      "Invito all’azione poco visibile e percorso prenotazione dispersivo",
    action:
      "Testata semplificata, invito all’azione fisso e percorso smartphone lineare",
  },
  {
    name: "Pizzeria da asporto · Bergamo",
    metric: "+52% clic su menu",
    detail: "30 giorni dopo ottimizzazione testata e invito all’azione",
    before: "Menu difficile da trovare da smartphone",
    action: "Menu in un tocco + gerarchia visiva orientata all’azione",
  },
  {
    name: "Bar di miscelazione eventi · Torino",
    metric: "2.1x clic su prenota",
    detail: "60 giorni con tracciamento eventi attivo",
    before: "Traffico buono ma conversione bassa su smartphone",
    action: "Riduzione frizione sui tocchi e blocchi fiducia sopra la piega",
  },
];

export function CaseStudies() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad" id="casi-reali">
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
            Mini casi con contesto, intervento e risultato. Niente promesse
            vaghe: solo metriche di comportamento utili alla vendita.
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
