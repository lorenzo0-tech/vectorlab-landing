import { trackEvent } from "@/lib/analytics";

export const EVENT_NAMES = {
  ctaClick: "cta_click",
  leadSubmitAttempt: "lead_submit_attempt",
  leadSubmitSuccess: "lead_submit_success",
  leadSubmitError: "lead_submit_error",
  introComplete: "intro_complete",
  introSkip: "intro_skip",
} as const;

export type CtaLocation =
  | "hero"
  | "navbar"
  | "mobile_sticky_bar"
  | "packages"
  | "final_cta";

export type CtaTarget = "calendly" | "preventivo";

export type LeadSource = "final_cta_form";
export type IntroMode = "blocking" | "non_blocking";

type CtaPayload = {
  location: CtaLocation;
  target: CtaTarget;
  packageName?: "BASE" | "VETRINA" | "CRESCITA";
};

export function trackCtaClick(payload: CtaPayload) {
  trackEvent(EVENT_NAMES.ctaClick, {
    location: payload.location,
    target: payload.target,
    package_name: payload.packageName,
  });
}

export function trackLeadSubmitAttempt(payload: {
  source: LeadSource;
  city: string;
}) {
  trackEvent(EVENT_NAMES.leadSubmitAttempt, payload);
}

export function trackLeadSubmitSuccess(payload: {
  source: LeadSource;
  city: string;
}) {
  trackEvent(EVENT_NAMES.leadSubmitSuccess, payload);
}

export function trackLeadSubmitError(payload: { source: LeadSource }) {
  trackEvent(EVENT_NAMES.leadSubmitError, payload);
}

export function trackIntroComplete(payload: {
  mode: IntroMode;
  autoStart: boolean;
}) {
  trackEvent(EVENT_NAMES.introComplete, payload);
}

export function trackIntroSkip(payload: {
  mode: IntroMode;
  autoStart: boolean;
}) {
  trackEvent(EVENT_NAMES.introSkip, payload);
}
