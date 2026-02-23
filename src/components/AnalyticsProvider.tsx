"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/constants";
import {
  COOKIE_CONSENT_EVENT,
  readCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookie-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function AnalyticsProvider() {
  const pathname = usePathname();
  const [preferences, setPreferences] = useState<CookiePreferences | null>(
    null,
  );
  const hasGa = Boolean(GA_MEASUREMENT_ID);
  const hasAds = Boolean(GOOGLE_ADS_ID);
  const gtagBootstrapId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncConsent = () => {
      setPreferences(readCookiePreferences());
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
    const analyticsGranted = Boolean(preferences?.analytics);
    const adsGranted = Boolean(preferences?.ads);

    gtag("consent", "update", {
      analytics_storage: analyticsGranted ? "granted" : "denied",
      ad_storage: adsGranted && hasAds ? "granted" : "denied",
      ad_user_data: adsGranted && hasAds ? "granted" : "denied",
      ad_personalization: adsGranted && hasAds ? "granted" : "denied",
    });
  }, [preferences, hasAds]);

  useEffect(() => {
    if (!hasGa || !preferences?.analytics || typeof window === "undefined") {
      return;
    }

    const query = window.location.search.replace(/^\?/, "");
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
    });
  }, [preferences, hasGa, pathname]);

  const shouldLoad = Boolean(preferences?.analytics || preferences?.ads);

  if (!gtagBootstrapId || !shouldLoad) return null;

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
