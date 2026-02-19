"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const checks = [
  "Inviti all’azione sempre visibili (Chiama / Prenota / Indicazioni)",
  "Menu immediato (PDF + pagina web indicizzabile)",
  "Prestazioni e struttura adatte a Google",
  "Struttura pensata per cellulare",
  "Tempi chiari, consegna tipica 14 giorni",
];

export function TrustBar() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="container-pad"
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="glass-strong gradient-border panel-tech relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <p className="text-sm font-semibold tracking-tight sm:text-base">
          Niente promesse vaghe. Solo scelte che aumentano le conversioni.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <div
              key={c}
              className="glass rounded-2xl px-3 py-3 transition-colors hover:bg-white"
            >
              <div className="flex items-start gap-2">
                <span className="icon-chip mt-0.5 h-6 w-6">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm text-(--muted)">{c}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
