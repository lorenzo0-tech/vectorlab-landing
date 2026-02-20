import Link from "next/link";
import { ArrowLeft, CalendarCheck } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export default function GraziePage() {
  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <div className="glass-strong gradient-border panel-tech mx-auto max-w-2xl rounded-3xl p-8 sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15">
              <CalendarCheck className="h-6 w-6" />
            </span>
            <h1 className="heading-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Richiesta inviata correttamente.
            </h1>
            <p className="mt-4 text-(--muted)">
              Ti ricontattiamo entro 24 ore lavorative con una prima proposta di
              struttura e priorità.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-ring"
              >
                Prenota una chiamata ora
              </a>
              <Link href="/" className="btn-secondary focus-ring inline-flex">
                <ArrowLeft className="h-4 w-4" />
                Torna alla home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
