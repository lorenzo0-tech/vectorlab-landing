import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL_TO } from "@/lib/constants";

type LeadPayload = {
  nome: string;
  attivita: string;
  citta: string;
  sito?: string;
  obiettivo: string;
  messaggio: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLead(payload: LeadPayload) {
  const required: Array<keyof LeadPayload> = [
    "nome",
    "attivita",
    "citta",
    "obiettivo",
    "messaggio",
  ];

  for (const key of required) {
    if (!payload[key] || payload[key].trim().length < 2) {
      return `${key} non valido`;
    }
  }

  if (payload.sito && payload.sito.length > 0) {
    const looksLikeUrl = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}/i.test(
      payload.sito,
    );
    if (!looksLikeUrl) return "sito non valido";
  }

  return null;
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<LeadPayload>;

  const payload: LeadPayload = {
    nome: normalize(body.nome),
    attivita: normalize(body.attivita),
    citta: normalize(body.citta),
    sito: normalize(body.sito),
    obiettivo: normalize(body.obiettivo),
    messaggio: normalize(body.messaggio),
  };

  const validationError = validateLead(payload);
  if (validationError) {
    return NextResponse.json(
      { ok: false, message: `Dati non validi: ${validationError}` },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_EMAIL_TO ?? EMAIL_TO;
  const from = process.env.LEADS_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Server non configurato: imposta RESEND_API_KEY e LEADS_FROM_EMAIL.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      subject: `Nuova richiesta preventivo — ${payload.attivita} (${payload.citta})`,
      replyTo: process.env.LEADS_REPLY_TO ?? undefined,
      text: [
        `Nome: ${payload.nome}`,
        `Attività: ${payload.attivita}`,
        `Città: ${payload.citta}`,
        `Sito attuale: ${payload.sito || "-"}`,
        `Obiettivo: ${payload.obiettivo}`,
        "",
        "Messaggio:",
        payload.messaggio,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead-api] send error", error);
    return NextResponse.json(
      { ok: false, message: "Invio non riuscito. Riprova tra poco." },
      { status: 500 },
    );
  }
}
