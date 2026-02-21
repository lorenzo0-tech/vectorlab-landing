import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_NAME, EMAIL_TO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Informativa cookie del sito ${COMPANY_NAME}.`,
  alternates: {
    canonical: "/cookie-policy",
  },
};

const effectiveDate = "21 febbraio 2026";

export default function CookiePolicyPage() {
  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <article className="glass-strong gradient-border panel-tech mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
            <h1 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Cookie Policy
            </h1>
            <p className="mt-3 text-sm text-(--muted)">
              Ultimo aggiornamento: {effectiveDate}
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-(--muted)">
              <section>
                <h2 className="text-base font-semibold text-foreground">
                  1. Cosa sono i cookie
                </h2>
                <p className="mt-2">
                  I cookie sono piccoli file di testo memorizzati sul
                  dispositivo dell’utente durante la navigazione. Servono a
                  garantire funzionalità tecniche, sicurezza e analisi aggregate
                  dell’utilizzo del sito.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  2. Tipologie utilizzate
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Cookie tecnici: necessari al corretto funzionamento del
                    sito.
                  </li>
                  <li>
                    Cookie analitici: misurano traffico e interazioni in forma
                    aggregata.
                  </li>
                  <li>
                    Cookie di terze parti: eventuali servizi integrati (es.
                    analisi o scheduling).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  3. Base giuridica
                </h2>
                <p className="mt-2">
                  I cookie tecnici sono trattati sulla base del legittimo
                  interesse all’erogazione del servizio. Eventuali cookie non
                  tecnici sono attivati solo in presenza di una base giuridica
                  adeguata, incluso il consenso quando richiesto.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  4. Gestione preferenze
                </h2>
                <p className="mt-2">
                  Al primo accesso puoi scegliere dal banner se accettare o
                  rifiutare i cookie analitici. Puoi inoltre limitare o bloccare
                  i cookie tramite le impostazioni del browser. La
                  disattivazione dei cookie tecnici può compromettere il
                  corretto funzionamento di alcune parti del sito.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  5. Servizi di terze parti
                </h2>
                <p className="mt-2">
                  Il sito può integrare strumenti di terze parti (ad esempio
                  analisi traffico o prenotazioni) che potrebbero impostare
                  propri cookie secondo le rispettive informative.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  6. Contatti
                </h2>
                <p className="mt-2">
                  Per informazioni su questa policy puoi scrivere a{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                  . La versione aggiornata è disponibile su{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={SITE_URL}
                  >
                    {SITE_URL}
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-8">
              <Link href="/" className="btn-secondary focus-ring inline-flex">
                <ArrowLeft className="h-4 w-4" />
                Torna alla home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
