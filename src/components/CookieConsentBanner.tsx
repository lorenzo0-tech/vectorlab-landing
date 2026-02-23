"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT, saveCookieConsent } from "@/lib/cookie-consent";

export function CookieConsentBanner() {
  const [hydrated, setHydrated] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const reopenBanner = () => {
      setHydrated(true);
      setDismissed(false);
    };

    const timeout = window.setTimeout(() => {
      setHydrated(true);
      setDismissed(false);
    }, 0);

    window.addEventListener(COOKIE_CONSENT_EVENT, reopenBanner);
    window.addEventListener("storage", reopenBanner);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener(COOKIE_CONSENT_EVENT, reopenBanner);
      window.removeEventListener("storage", reopenBanner);
    };
  }, []);

  if (!hydrated || dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 pb-[max(env(safe-area-inset-bottom),12px)]">
      <div className="container-pad">
        <div className="glass-strong gradient-border panel-tech flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-xs text-(--muted) sm:text-sm">
            Usiamo cookie tecnici e, con il tuo consenso, cookie analitici per
            migliorare il sito. Leggi la{" "}
            <Link
              href="/cookie-policy"
              className="focus-ring rounded px-1 py-0.5 text-foreground underline decoration-cyan-300/60 underline-offset-4"
            >
              Cookie Policy
            </Link>
            .
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="btn-secondary focus-ring px-4 py-2 text-xs sm:text-sm"
              onClick={() => {
                saveCookieConsent("rejected");
                setDismissed(true);
              }}
            >
              Rifiuta
            </button>
            <button
              type="button"
              className="btn-primary focus-ring px-4 py-2 text-xs sm:text-sm"
              onClick={() => {
                saveCookieConsent("accepted");
                setDismissed(true);
              }}
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
