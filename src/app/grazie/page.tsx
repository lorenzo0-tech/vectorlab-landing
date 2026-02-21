import Link from "next/link";
import { ArrowLeft, CalendarCheck } from "lucide-react";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { CALENDLY_URL } from "@/lib/constants";

export default function GraziePage() {
  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <AmbientBackdrop />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-[8%] top-[12%] h-52 w-52 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-60 w-60 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute bottom-[8%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-300/15 blur-3xl" />
      </div>

      <section className="section-pad relative z-10">
        <div className="container-pad">
          <div className="glass-strong gradient-border panel-tech mx-auto max-w-2xl rounded-3xl p-8 shadow-2xl sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15">
              <CalendarCheck className="h-6 w-6" />
            </span>
            <h1 className="heading-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Richiesta inviata correttamente.
            </h1>
            <p className="mt-4 text-(--muted)">
              Ti ricontattiamo entro 48 ore con i prossimi step consigliati per
              impostare il progetto nel modo giusto.
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
