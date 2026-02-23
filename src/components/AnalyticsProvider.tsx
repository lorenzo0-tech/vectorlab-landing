"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/constants";
import {
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
  type CookieConsentState,
} from "@/lib/cookie-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function AnalyticsProvider() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const hasGa = Boolean(GA_MEASUREMENT_ID);
  const hasAds = Boolean(GOOGLE_ADS_ID);
  const gtagBootstrapId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncConsent = () => {
      setConsent(readCookieConsent());
    };

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);
    window.addEventListener("storage", syncConsent);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const gtag = (
      window as Window & {
        gtag?: (...args: unknown[]) => void;
      }
    ).gtag;

    if (!gtag) return;

    const granted = consent === "accepted";

    gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: granted && hasAds ? "granted" : "denied",
      ad_user_data: granted && hasAds ? "granted" : "denied",
      ad_personalization: granted && hasAds ? "granted" : "denied",
    });
  }, [consent, hasAds]);

  useEffect(() => {
    if (!hasGa || consent !== "accepted" || typeof window === "undefined") {
      return;
    }

    const query = window.location.search.replace(/^\?/, "");
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
    });
  }, [consent, hasGa, pathname]);

  if (!gtagBootstrapId || consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagBootstrapId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${hasGa ? `gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });` : ""}
${hasAds ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}`}
      </Script>
    </>
  );
}
