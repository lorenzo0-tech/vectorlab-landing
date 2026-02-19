"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TriangleAlert } from "lucide-react";

const bullets = [
  "Menu nascosto o scomodo: chi vuole prenotare abbandona.",
  "CTA assente o debole: le persone non sanno cosa fare.",
  "Mobile disastro: tap difficili, testi piccoli, pagina pesante.",
  "Sito lento: perdi traffico e fiducia ancora prima di parlare del locale.",
];

export function Problem() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="section-pad"
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Se il tuo sito è lento o confuso, stai regalando clienti agli
              altri.
            </h2>
            <p className="mt-4 text-lg leading-8 text-(--muted)">
              “Le persone decidono in pochi secondi…”
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="glass gradient-border rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <TriangleAlert className="h-5 w-5" />
                <p className="text-sm font-semibold">
                  Problemi reali, ogni giorno
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="text-sm leading-7 text-(--muted)">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
