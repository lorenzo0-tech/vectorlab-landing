"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type Locale = "it" | "en";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LANGUAGE_STORAGE_KEY = "site_locale_v1";
const LANGUAGE_COOKIE_KEY = "site_locale_v1";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "it";
    try {
      const cookie = document.cookie
        .split("; ")
        .find((entry) => entry.startsWith(`${LANGUAGE_COOKIE_KEY}=`))
        ?.split("=")[1];
      if (cookie === "it" || cookie === "en") return cookie;
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return saved === "it" || saved === "en" ? saved : "it";
    } catch {
      return "it";
    }
  });

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
      document.cookie = `${LANGUAGE_COOKIE_KEY}=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      return;
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === "it" ? "en" : "it"),
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
