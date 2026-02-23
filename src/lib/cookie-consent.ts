export const COOKIE_CONSENT_KEY = "cookie_consent_v1";
export const COOKIE_CONSENT_EVENT = "cookie-consent-updated";

export type CookieConsentState = "accepted" | "rejected";

export function isCookieConsentState(
  value: string | null,
): value is CookieConsentState {
  return value === "accepted" || value === "rejected";
}

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return isCookieConsentState(value) ? value : null;
}

function expireCookie(name: string, domain?: string) {
  if (typeof document === "undefined") return;

  const domainPart = domain ? `domain=${domain}; ` : "";
  document.cookie = `${name}=; Max-Age=0; path=/; ${domainPart}SameSite=Lax`;
}

function clearAnalyticsCookies() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const cookieNames = document.cookie
    .split(";")
    .map((entry) => entry.trim().split("=")[0])
    .filter(Boolean);

  const prefixes = ["_ga", "_gid", "_gat", "_gac", "_gcl", "_dc_gtm"];
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

  const gtag = (
    window as Window & {
      gtag?: (...args: unknown[]) => void;
    }
  ).gtag;

  if (gtag) {
    gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export function saveCookieConsent(value: CookieConsentState) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);

  if (value === "rejected") {
    clearAnalyticsCookies();
  }

  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function resetCookieConsent() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  clearAnalyticsCookies();
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
