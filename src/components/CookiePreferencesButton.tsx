"use client";

import { Cookie } from "lucide-react";
import { openCookiePreferences } from "@/lib/cookie-consent";

type CookiePreferencesButtonProps = {
  floating?: boolean;
};

export function CookiePreferencesButton({
  floating = false,
}: CookiePreferencesButtonProps) {
  if (floating) {
    return (
      <button
        type="button"
        aria-label="Apri preferenze cookie"
        title="Preferenze cookie"
        className="focus-ring fixed bottom-4 left-4 z-55 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200/45 bg-[#081325]/92 text-cyan-100 shadow-[0_10px_30px_rgba(2,6,23,0.35)] backdrop-blur transition hover:border-cyan-200/70 hover:bg-[#0d1b33]"
        onClick={openCookiePreferences}
      >
        <Cookie className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="focus-ring rounded px-1 py-0.5 hover:text-foreground"
      onClick={openCookiePreferences}
    >
      Preferenze cookie
    </button>
  );
}
