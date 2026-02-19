import { ArrowUpRight, Sparkles } from "lucide-react";
import { RESTAURANT_VETRINA_URL } from "@/lib/constants";

export function VetrinaRistorante() {
  const hasVetrinaUrl = RESTAURANT_VETRINA_URL.trim().length > 0;

  return (
    <section className="section-pad" id="vetrina-ristorante">
      <div className="container-pad">
        <div className="glass-strong gradient-border panel-tech card-tech overflow-hidden rounded-3xl p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-cyan-100/90 uppercase sm:text-[11px] sm:tracking-[0.18em]">
                <Sparkles className="h-3.5 w-3.5" />
                Esempio reale di progetto
              </p>
              <h2 className="heading-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Sito per ristorante: vetrina di alto livello pronta da
                presentare ai clienti
              </h2>
              <p className="mt-4 text-lg leading-8 text-(--muted)">
                Ho realizzato una pagina completa con identità visiva,
                fotografia d&apos;impatto, menu degustazione, calendario di
                prenotazione e ottimizzazione per cellulare.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={
                    hasVetrinaUrl
                      ? RESTAURANT_VETRINA_URL
                      : "#vetrina-ristorante"
                  }
                  target={hasVetrinaUrl ? "_blank" : undefined}
                  rel={hasVetrinaUrl ? "noopener noreferrer" : undefined}
                  aria-disabled={!hasVetrinaUrl}
                  className={`btn-primary focus-ring ${hasVetrinaUrl ? "" : "pointer-events-none opacity-60"}`}
                >
                  {hasVetrinaUrl
                    ? "Apri la vetrina ristorante"
                    : "Imposta URL vetrina in .env.local"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#metodo" className="btn-secondary focus-ring">
                  Vedi come lavoro
                </a>
              </div>
              {!hasVetrinaUrl ? (
                <p className="mt-3 text-xs text-(--muted)">
                  Aggiungi `NEXT_PUBLIC_RESTAURANT_VETRINA_URL` per collegare il
                  sito ristorante reale.
                </p>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/12 bg-slate-950/55 p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100/90 uppercase">
                  Cosa dimostra
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200/90">
                  <li>
                    • Posizionamento chiaro e proposta di valore immediata
                  </li>
                  <li>
                    • Sezioni orientate alle prenotazioni, non solo estetica
                  </li>
                  <li>• Struttura pensata per conversione da telefono</li>
                  <li>• Base tecnica pronta per andare online</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
