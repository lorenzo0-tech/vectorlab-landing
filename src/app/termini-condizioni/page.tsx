import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_NAME, EMAIL_TO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termini e Condizioni",
  description: `Termini e condizioni di utilizzo del sito ${COMPANY_NAME}.`,
  alternates: {
    canonical: "/termini-condizioni",
  },
};

const effectiveDate = "21 febbraio 2026";

export default function TerminiCondizioniPage() {
  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <article className="glass-strong gradient-border panel-tech mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
            <h1 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Termini e Condizioni
            </h1>
            <p className="mt-3 text-sm text-(--muted)">
              Ultimo aggiornamento: {effectiveDate}
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-(--muted)">
              <section>
                <h2 className="text-base font-semibold text-foreground">
                  1. Oggetto
                </h2>
                <p className="mt-2">
                  Questi termini regolano l’accesso e l’utilizzo del sito{" "}
                  {COMPANY_NAME}. Navigando il sito, l’utente accetta i presenti
                  termini.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  2. Contenuti e proprietà intellettuale
                </h2>
                <p className="mt-2">
                  Testi, elementi grafici, marchi e contenuti presenti sul sito
                  sono protetti dalle norme applicabili in materia di proprietà
                  intellettuale. È vietato l’uso non autorizzato.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  3. Uso consentito
                </h2>
                <p className="mt-2">
                  L’utente si impegna a non utilizzare il sito per finalità
                  illecite, fraudolente o lesive dei diritti di terzi, e a non
                  compromettere sicurezza e disponibilità del servizio.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  4. Limitazione di responsabilità
                </h2>
                <p className="mt-2">
                  Le informazioni presenti sul sito hanno carattere informativo
                  e possono essere aggiornate o modificate senza preavviso.
                  Salvo dolo o colpa grave, non si garantisce l’assenza di
                  errori o interruzioni.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  5. Link esterni
                </h2>
                <p className="mt-2">
                  Il sito può contenere collegamenti a servizi di terze parti.{" "}
                  {COMPANY_NAME} non è responsabile per contenuti, disponibilità
                  o policy di siti esterni.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  6. Modifiche ai termini
                </h2>
                <p className="mt-2">
                  Ci riserviamo il diritto di modificare i presenti termini in
                  qualsiasi momento. Le modifiche hanno efficacia dalla
                  pubblicazione su{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={SITE_URL}
                  >
                    {SITE_URL}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  7. Contatti
                </h2>
                <p className="mt-2">
                  Per comunicazioni relative ai presenti termini:{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
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
