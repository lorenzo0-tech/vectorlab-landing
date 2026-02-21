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

export function saveCookieConsent(value: CookieConsentState) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function resetCookieConsent() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
