"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
  readCookiePreferences,
  saveCookieConsent,
  saveCookiePreferences,
} from "@/lib/cookie-consent";

export function CookieConsentBanner() {
  const [hydrated, setHydrated] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [adsEnabled, setAdsEnabled] = useState(true);

  useEffect(() => {
    const reopenBanner = () => {
      const preferences = readCookiePreferences();
      if (preferences) {
        setAnalyticsEnabled(preferences.analytics);
        setAdsEnabled(preferences.ads);
      } else {
        const consent = readCookieConsent();
        const granted = consent === "accepted";
        setAnalyticsEnabled(granted);
        setAdsEnabled(granted);
      }

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
          <div className="space-y-3">
            <p className="text-xs text-(--muted) sm:text-sm">
              Usiamo cookie tecnici (sempre attivi) e, con il tuo consenso,
              cookie analitici e pubblicitari. Leggi la{" "}
              <Link
                href="/cookie-policy"
                className="focus-ring rounded px-1 py-0.5 text-foreground underline decoration-cyan-300/60 underline-offset-4"
              >
                Cookie Policy
              </Link>
              .
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <label className="inline-flex items-center gap-2 text-xs text-(--muted) sm:text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-cyan-400"
                  checked={analyticsEnabled}
                  onChange={(event) =>
                    setAnalyticsEnabled(event.target.checked)
                  }
                />
                Google Analytics
              </label>

              <label className="inline-flex items-center gap-2 text-xs text-(--muted) sm:text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-cyan-400"
                  checked={adsEnabled}
                  onChange={(event) => setAdsEnabled(event.target.checked)}
                />
                Google Ads
              </label>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="btn-secondary focus-ring px-4 py-2 text-xs sm:text-sm"
              onClick={() => {
                saveCookieConsent("rejected");
                setDismissed(true);
              }}
            >
              Rifiuta tutti
            </button>
            <button
              type="button"
              className="btn-secondary focus-ring px-4 py-2 text-xs sm:text-sm"
              onClick={() => {
                saveCookiePreferences({
                  analytics: analyticsEnabled,
                  ads: adsEnabled,
                });
                setDismissed(true);
              }}
            >
              Salva scelte
            </button>
            <button
              type="button"
              className="btn-primary focus-ring px-4 py-2 text-xs sm:text-sm"
              onClick={() => {
                saveCookieConsent("accepted");
                setDismissed(true);
              }}
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
