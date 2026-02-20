import { ArrowUpRight, Mail } from "lucide-react";
import {
  CALENDLY_URL,
  COMPANY_CITY,
  COMPANY_NAME,
  COMPANY_VAT,
  EMAIL_TO,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="pb-28 sm:pb-10">
      <div className="container-pad">
        <div className="glass gradient-border panel-tech rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="heading-display inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
                <span className="h-2 w-2 rounded-full bg-cyan-500/80 shadow-[0_0_14px_rgba(6,182,212,.6)]" />
                {COMPANY_NAME}
              </p>
              <p className="mt-2 text-sm text-(--muted)">
                {COMPANY_CITY} · {COMPANY_VAT}
              </p>
              <p className="mt-3 text-xs text-(--muted)">
                Nota legale: le informazioni non costituiscono offerta
                vincolante.
              </p>
              <p className="mt-4 inline-flex items-center rounded-full border border-cyan-200/60 bg-cyan-50/80 px-3 py-1 text-xs font-semibold text-cyan-900">
                Disponibilità chiamata: 15 min
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto">
              <a
                className="btn-secondary focus-ring w-full break-all text-xs sm:w-auto sm:text-sm"
                href={`mailto:${EMAIL_TO}`}
              >
                {EMAIL_TO}
                <Mail className="h-4 w-4" />
              </a>
              <a
                className="btn-primary focus-ring w-full sm:w-auto"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Prenota una chiamata
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
