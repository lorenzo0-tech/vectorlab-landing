type EventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: {
      (
        command: "event",
        eventName: string,
        params?: Record<string, string | number | boolean>,
      ): void;
      (
        command: "config",
        targetId: string,
        config?: Record<string, string | number | boolean>,
      ): void;
      (command: "js", loadedAt: Date): void;
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
