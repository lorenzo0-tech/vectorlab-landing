import { trackEvent } from "@/lib/analytics";

export const EVENT_NAMES = {
  clicInvitoAzione: "clic_invito_azione",
  tentativoInvioContatto: "tentativo_invio_contatto",
  successoInvioContatto: "successo_invio_contatto",
  erroreInvioContatto: "errore_invio_contatto",
  completamentoIntro: "completamento_intro",
  saltoIntro: "salto_intro",
} as const;

export type PosizioneInvitoAzione =
  | "testata"
  | "barra_nav"
  | "barra_fissa_smartphone"
  | "pacchetti"
  | "cta_finale";

export type DestinazioneInvitoAzione = "calendly" | "preventivo";

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
