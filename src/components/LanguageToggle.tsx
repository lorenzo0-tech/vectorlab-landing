"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full border border-cyan-200/25 bg-slate-950/70 p-1"
      role="group"
      aria-label="Language toggle"
    >
      <button
        type="button"
        onClick={() => setLocale("it")}
        className={
          "focus-ring rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors sm:text-xs " +
          (locale === "it"
            ? "bg-cyan-300/25 text-cyan-100"
            : "text-(--muted) hover:text-foreground")
        }
        aria-pressed={locale === "it"}
      >
        IT
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={
          "focus-ring rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors sm:text-xs " +
          (locale === "en"
            ? "bg-cyan-300/25 text-cyan-100"
            : "text-(--muted) hover:text-foreground")
        }
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
