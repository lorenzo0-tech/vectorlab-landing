type EventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: {
      (command: "js", loadedAt: Date): void;
      (command: "config", targetId: string, config?: EventParams): void;
      (command: "event", eventName: string, params?: EventParams): void;
    };
    plausible?: (eventName: string, options?: { props?: EventParams }) => void;
  }
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const cleanParams: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    cleanParams[key] = value;
  }

  window.gtag?.("event", eventName, cleanParams);
  window.plausible?.(eventName, { props: cleanParams });
}

export function trackGoogleAdsConversion(params: {
  sendTo: string;
  value?: number;
  currency?: string;
}) {
  if (typeof window === "undefined" || !params.sendTo) return;

  window.gtag?.("event", "conversion", {
    send_to: params.sendTo,
    value: params.value,
    currency: params.currency,
  });
}
