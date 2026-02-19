import { ArrowUpRight, Sparkles } from "lucide-react";

export function VetrinaRistorante() {
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
                <a href="/demo-ristorante" className="btn-primary focus-ring">
                  Apri la vetrina ristorante
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#metodo" className="btn-secondary focus-ring">
                  Vedi come lavoro
                </a>
              </div>
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
