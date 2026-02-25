"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export function ProjectShowcase() {
  const { locale } = useLanguage();
  const reduce = useReducedMotion();

  const projects =
    locale === "it"
      ? [
          {
            title: "Demo Hotel / Villa Luxury",
            subtitle: "Esperienza completa multipagina per hotel, villa e b&b",
            description:
              "Un sito premium con percorso completo: suite, esperienze, spa, ristorante, galleria, contatti e prenotazione.",
            href: "/demo-hotel-villa",
            image: "/images/vettolab-free/hotel-pro.jpg",
            cta: "Apri progetto hotel",
          },
          {
            title: "Demo Ristorante Premium",
            subtitle: "Vetrina orientata a prenotazioni e valore percepito",
            description:
              "Un concept completo per ristoranti: storytelling, menu, esperienze, atmosfera e inviti all'azione ottimizzati.",
            href: "/demo-ristorante",
            image: "/images/vettolab-free/hero-ristorante.jpg",
            cta: "Apri progetto ristorante",
          },
        ]
      : [
          {
            title: "Luxury Hotel / Villa Demo",
            subtitle:
              "Complete multi-page experience for hotels, villas and b&bs",
            description:
              "A premium website with a full journey: suites, experiences, spa, restaurant, gallery, contacts, and booking.",
            href: "/demo-hotel-villa",
            image: "/images/vettolab-free/hotel-pro.jpg",
            cta: "Open hotel project",
          },
          {
            title: "Premium Restaurant Demo",
            subtitle: "Showcase focused on bookings and perceived value",
            description:
              "A complete concept for restaurants: storytelling, menu, experiences, atmosphere, and optimized CTAs.",
            href: "/demo-ristorante",
            image: "/images/vettolab-free/hero-ristorante.jpg",
            cta: "Open restaurant project",
          },
        ];

  return (
    <section id="progetti" className="section-pad">
      <div className="container-pad">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "it"
              ? "Guarda subito come può vendere il tuo prossimo sito"
              : "See how your next website can sell better"}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
            {locale === "it"
              ? "Due demo navigabili, immediate da valutare, per capire in pochi minuti qualità, posizionamento e potenziale di conversione del tuo progetto."
              : "Two fully navigable demos to quickly evaluate quality, positioning, and conversion potential for your project."}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.href}
              className="group glass-strong gradient-border card-tech overflow-hidden rounded-3xl"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full border border-white/35 bg-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-white/95 backdrop-blur-sm">
                  {project.subtitle}
                </p>
              </div>

              <div className="p-6">
                <h3 className="heading-display text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-(--muted)">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  className="btn-primary focus-ring mt-6 inline-flex"
                >
                  {project.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
