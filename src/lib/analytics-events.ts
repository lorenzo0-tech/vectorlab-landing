import { trackEvent, trackGoogleAdsConversion } from "@/lib/analytics";
import { GOOGLE_ADS_LEAD_SEND_TO } from "@/lib/constants";

export const EVENT_NAMES = {
  clicInvitoAzione: "clic_invito_azione",
  tentativoInvioContatto: "tentativo_invio_contatto",
  successoInvioContatto: "successo_invio_contatto",
  erroreInvioContatto: "errore_invio_contatto",
  completamentoIntro: "completamento_intro",
  saltoIntro: "salto_intro",
  interazioneFaq: "interazione_faq",
  validazioneModuloContatto: "validazione_modulo_contatto",
  allertaConversioneInvio: "allerta_conversione_invio",
} as const;

export type PosizioneInvitoAzione =
  | "testata"
  | "barra_nav"
  | "barra_fissa_smartphone"
  | "pacchetti"
  | "cta_finale";

export type DestinazioneInvitoAzione =
  | "calendly"
  | "preventivo"
  | "demo-hotel-villa";

export type SorgenteContatto = "modulo_cta_finale";
export type ModalitaIntro = "bloccante" | "non_bloccante";

type PayloadInvitoAzione = {
  posizione: PosizioneInvitoAzione;
  destinazione: DestinazioneInvitoAzione;
  nomePacchetto?: "BASE" | "VETRINA" | "CRESCITA";
};

export function trackCtaClick(payload: PayloadInvitoAzione) {
  trackEvent(EVENT_NAMES.clicInvitoAzione, {
    posizione: payload.posizione,
    destinazione: payload.destinazione,
    nome_pacchetto: payload.nomePacchetto,
  });
}

export function trackLeadSubmitAttempt(payload: {
  sorgente: SorgenteContatto;
  citta: string;
}) {
  trackEvent(EVENT_NAMES.tentativoInvioContatto, payload);
}

export function trackLeadSubmitSuccess(payload: {
  sorgente: SorgenteContatto;
  citta: string;
}) {
  trackEvent(EVENT_NAMES.successoInvioContatto, payload);
}

export function trackLeadSubmitError(payload: { sorgente: SorgenteContatto }) {
  trackEvent(EVENT_NAMES.erroreInvioContatto, payload);
}

export function trackIntroComplete(payload: {
  modalita: ModalitaIntro;
  autoStart: boolean;
}) {
  trackEvent(EVENT_NAMES.completamentoIntro, payload);
}

export function trackIntroSkip(payload: {
  modalita: ModalitaIntro;
  autoStart: boolean;
}) {
  trackEvent(EVENT_NAMES.saltoIntro, payload);
}

export function trackFaqToggle(payload: {
  indice: number;
  azione: "aperta" | "chiusa";
}) {
  trackEvent(EVENT_NAMES.interazioneFaq, payload);
}

export function trackValidazioneModulo(payload: {
  campo: string;
  esito: "ok" | "errore";
}) {
  trackEvent(EVENT_NAMES.validazioneModuloContatto, payload);
}

export function trackAllertaConversione(payload: {
  erroriConsecutivi: number;
}) {
  trackEvent(EVENT_NAMES.allertaConversioneInvio, payload);
}

export function trackLeadAdsConversion(payload?: {
  value?: number;
  currency?: string;
}) {
  if (!GOOGLE_ADS_LEAD_SEND_TO) return;

  trackGoogleAdsConversion({
    sendTo: GOOGLE_ADS_LEAD_SEND_TO,
    value: payload?.value,
    currency: payload?.currency ?? "EUR",
  });
}
