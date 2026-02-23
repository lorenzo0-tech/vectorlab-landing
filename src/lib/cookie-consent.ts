export const COOKIE_CONSENT_KEY = "cookie_consent_v1";
export const COOKIE_PREFERENCES_KEY = "cookie_preferences_v1";
export const COOKIE_CONSENT_EVENT = "cookie-consent-updated";

export type CookieConsentState = "accepted" | "rejected";
export type CookiePreferences = {
  analytics: boolean;
  ads: boolean;
};

export function isCookieConsentState(
  value: string | null,
): value is CookieConsentState {
  return value === "accepted" || value === "rejected";
}

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;

  const preferences = readCookiePreferences();
  if (preferences) {
    return preferences.analytics || preferences.ads ? "accepted" : "rejected";
  }

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return isCookieConsentState(value) ? value : null;
}

function isCookiePreferences(value: unknown): value is CookiePreferences {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.analytics === "boolean" && typeof record.ads === "boolean"
  );
}

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    return isCookiePreferences(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function expireCookie(name: string, domain?: string) {
  if (typeof document === "undefined") return;

  const domainPart = domain ? `domain=${domain}; ` : "";
  document.cookie = `${name}=; Max-Age=0; path=/; ${domainPart}SameSite=Lax`;
}

function clearCookiesByPrefixes(prefixes: string[]) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const cookieNames = document.cookie
    .split(";")
    .map((entry) => entry.trim().split("=")[0])
    .filter(Boolean);

  const toDelete = cookieNames.filter((name) =>
    prefixes.some((prefix) => name === prefix || name.startsWith(`${prefix}_`)),
  );

  const hostname = window.location.hostname;
  const hostParts = hostname.split(".");
  const domainVariants = new Set<string | undefined>([undefined, hostname]);

  if (hostParts.length >= 2) {
    const baseDomain = `.${hostParts.slice(-2).join(".")}`;
    domainVariants.add(baseDomain);
  }

  for (const cookieName of toDelete) {
    for (const domain of domainVariants) {
      expireCookie(cookieName, domain);
    }
  }
}

function clearCookiesForPreferences(preferences: CookiePreferences) {
  if (!preferences.analytics) {
    clearCookiesByPrefixes(["_ga", "_gid", "_gat", "_dc_gtm"]);
  }

  if (!preferences.ads) {
    clearCookiesByPrefixes(["_gac", "_gcl"]);
  }
}

export function saveCookieConsent(value: CookieConsentState) {
  saveCookiePreferences({
    analytics: value === "accepted",
    ads: value === "accepted",
  });
}

export function saveCookiePreferences(preferences: CookiePreferences) {
  if (typeof window === "undefined") return;

  const consent: CookieConsentState =
    preferences.analytics || preferences.ads ? "accepted" : "rejected";

  window.localStorage.setItem(COOKIE_CONSENT_KEY, consent);
  window.localStorage.setItem(
    COOKIE_PREFERENCES_KEY,
    JSON.stringify(preferences),
  );

  clearCookiesForPreferences(preferences);

  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function resetCookieConsent() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.localStorage.removeItem(COOKIE_PREFERENCES_KEY);
  clearCookiesByPrefixes(["_ga", "_gid", "_gat", "_gac", "_gcl", "_dc_gtm"]);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
