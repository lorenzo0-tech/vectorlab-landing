"use client";

import { resetCookieConsent } from "@/lib/cookie-consent";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="focus-ring rounded px-1 py-0.5 hover:text-foreground"
      onClick={resetCookieConsent}
    >
      Preferenze cookie
    </button>
  );
}
