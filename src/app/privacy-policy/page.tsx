import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  COMPANY_CITY,
  COMPANY_NAME,
  COMPANY_VAT,
  EMAIL_TO,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Informativa privacy di ${COMPANY_NAME} ai sensi del GDPR.`,
  alternates: {
    canonical: "/privacy-policy",
  },
};

const effectiveDate = "21 febbraio 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <article className="glass-strong gradient-border panel-tech mx-auto max-w-4xl rounded-3xl p-6 sm:p-10">
            <h1 className="heading-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-(--muted)">
              Ultimo aggiornamento: {effectiveDate}
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-(--muted)">
              <section>
                <h2 className="text-base font-semibold text-foreground">
                  1. Titolare del trattamento
                </h2>
                <p className="mt-2">
                  Il titolare del trattamento è {COMPANY_NAME}, con sede
                  operativa in {COMPANY_CITY} ({COMPANY_VAT}). Per richieste
                  privacy:{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  2. Dati raccolti
                </h2>
                <p className="mt-2">
                  Possiamo raccogliere dati identificativi e di contatto (es.
                  nome, email, telefono) inviati volontariamente tramite moduli
                  del sito, oltre a dati tecnici di navigazione (es. indirizzo
                  IP, user agent, eventi di interazione) necessari al
                  funzionamento e al miglioramento del servizio.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  3. Finalità e base giuridica
                </h2>
                <p className="mt-2">
                  Trattiamo i dati per: rispondere alle richieste di contatto,
                  fornire preventivi, gestire comunicazioni precontrattuali,
                  garantire sicurezza e performance del sito, analizzare
                  l’utilizzo del servizio. Le basi giuridiche includono misure
                  precontrattuali, legittimo interesse e, quando richiesto,
                  consenso.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  4. Conservazione dei dati
                </h2>
                <p className="mt-2">
                  Conserviamo i dati per il tempo strettamente necessario alle
                  finalità indicate e agli obblighi di legge. I dati relativi
                  alle richieste commerciali sono mantenuti per il tempo utile a
                  gestire la trattativa, salvo obblighi normativi differenti.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  5. Destinatari e responsabili esterni
                </h2>
                <p className="mt-2">
                  I dati possono essere trattati da fornitori tecnici necessari
                  all’erogazione del servizio (hosting, piattaforme email,
                  strumenti analitici) nominati, ove necessario, responsabili
                  del trattamento.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  6. Trasferimenti extra UE
                </h2>
                <p className="mt-2">
                  Alcuni fornitori potrebbero trattare dati in Paesi extra UE.
                  In tali casi adottiamo misure conformi al GDPR, incluse
                  clausole contrattuali standard o strumenti equivalenti
                  previsti dalla normativa.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  7. Diritti dell’interessato
                </h2>
                <p className="mt-2">
                  Puoi esercitare i diritti di accesso, rettifica,
                  cancellazione, limitazione, opposizione e portabilità, oltre a
                  revocare il consenso quando applicabile, scrivendo a{" "}
                  <a
                    className="underline decoration-cyan-300/60 underline-offset-4"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                  . Hai anche diritto di reclamo all’Autorità Garante per la
                  protezione dei dati personali.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-foreground">
                  8. Aggiornamenti
                </h2>
                <p className="mt-2">
                  La presente informativa può essere aggiornata in qualsiasi
                  momento. La versione corrente è pubblicata su{" "}
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
