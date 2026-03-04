"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function VetrinaRistorante() {
  const { locale } = useLanguage();

  return (
    <section className="section-pad" id="vetrina-ristorante">
      <div className="container-pad">
        <div className="glass-strong gradient-border panel-tech card-tech overflow-hidden rounded-3xl p-5 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/8 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-cyan-100/90 uppercase sm:text-[11px] sm:tracking-[0.18em]">
                <Sparkles className="h-3.5 w-3.5" />
                {locale === "it"
                  ? "Esempio reale di progetto"
                  : "Real project example"}
              </p>
              <h2 className="heading-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                {locale === "it"
                  ? "Sito per ristorante: vetrina di alto livello pronta da presentare ai clienti"
                  : "Restaurant website: premium showcase ready to present to clients"}
              </h2>
              <p className="mt-4 text-lg leading-8 text-(--muted)">
                {locale === "it"
                  ? "Ho realizzato una pagina completa con identità visiva, fotografia d'impatto, menu degustazione, calendario di prenotazione e ottimizzazione per cellulare."
                  : "I built a complete page with visual identity, impactful photography, tasting menu, booking calendar, and smartphone optimization."}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="/demo-ristorante" className="btn-primary focus-ring">
                  {locale === "it"
                    ? "Apri la vetrina ristorante"
                    : "Open restaurant showcase"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#metodo" className="btn-secondary focus-ring">
                  {locale === "it" ? "Vedi come lavoro" : "See my process"}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* Restaurant demo screenshot */}
              <div className="group/img overflow-hidden rounded-2xl border border-white/12 bg-slate-950/55">
                <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 flex-1 rounded-md bg-white/8 px-2 py-0.5 text-[10px] text-white/40 font-mono">
                    vettolab.com/demo-ristorante
                  </span>
                </div>
                <div className="relative aspect-4/3">
                  <Image
                    src="/images/vettolab-free/hero-ristorante.jpg"
                    alt={
                      locale === "it"
                        ? "Anteprima demo ristorante premium"
                        : "Premium restaurant demo preview"
                    }
                    fill
                    className="object-cover transition-transform duration-500 group-hover/img:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100/90 uppercase">
                    {locale === "it" ? "Cosa dimostra" : "What it proves"}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                    {(locale === "it"
                      ? [
                          "Posizionamento chiaro e proposta di valore immediata",
                          "Sezioni orientate alle prenotazioni, non solo estetica",
                          "Struttura pensata per conversione da telefono",
                          "Base tecnica pronta per andare online",
                        ]
                      : [
                          "Clear positioning and immediate value proposition",
                          "Sections focused on bookings, not just aesthetics",
                          "Structure built for smartphone conversion",
                          "Technical base ready to go live",
                        ]
                    ).map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
