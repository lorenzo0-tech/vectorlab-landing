import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EMAIL_TO } from "@/lib/constants";

type LeadPayload = {
  nome: string;
  email: string;
  telefono?: string;
  attivita: string;
  citta: string;
  sito?: string;
  obiettivo: string;
  messaggio: string;
  _trap?: string;
  _startedAt?: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestCounter = new Map<string, { count: number; resetAt: number }>();

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLead(payload: LeadPayload) {
  const required: Array<
    "nome" | "email" | "attivita" | "citta" | "obiettivo" | "messaggio"
  > = ["nome", "email", "attivita", "citta", "obiettivo", "messaggio"];

  for (const key of required) {
    if (payload[key].trim().length < 2) {
      return `${key} non valido`;
    }
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
  if (!isEmailValid) return "email non valida";

  if (payload.telefono && payload.telefono.length > 0) {
    const isPhoneValid = /^[+()\d\s-]{6,24}$/.test(payload.telefono);
    if (!isPhoneValid) return "telefono non valido";
  }

  if (payload.sito && payload.sito.length > 0) {
    const looksLikeUrl = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}/i.test(
      payload.sito,
    );
    if (!looksLikeUrl) return "sito non valido";
  }

  return null;
}

function getClientKey(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for") ?? "";
  const ip = forwardedFor.split(",")[0]?.trim();
  return ip || "unknown";
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const current = requestCounter.get(clientKey);

  if (!current || now > current.resetAt) {
    requestCounter.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  requestCounter.set(clientKey, current);
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<LeadPayload>;

  const payload: LeadPayload = {
    nome: normalize(body.nome),
    email: normalize(body.email),
    telefono: normalize(body.telefono),
    attivita: normalize(body.attivita),
    citta: normalize(body.citta),
    sito: normalize(body.sito),
    obiettivo: normalize(body.obiettivo),
    messaggio: normalize(body.messaggio),
    _trap: normalize(body._trap),
    _startedAt:
      typeof body._startedAt === "number" ? body._startedAt : undefined,
  };

  if (payload._trap) {
    return NextResponse.json({ ok: true });
  }

  if (payload._startedAt && Date.now() - payload._startedAt < 2500) {
    return NextResponse.json(
      { ok: false, message: "Richiesta troppo veloce. Riprova." },
      { status: 400 },
    );
  }

  const clientKey = getClientKey(req);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Troppi invii ravvicinati. Attendi qualche minuto.",
      },
      { status: 429 },
    );
  }

  const validationError = validateLead(payload);
  if (validationError) {
    return NextResponse.json(
      { ok: false, message: `Dati non validi: ${validationError}` },
      { status: 400 },
    );
  }

  const smtpUser = process.env.SMTP_GMAIL_USER;
  const smtpAppPassword = process.env.SMTP_GMAIL_APP_PASSWORD;
  const to = process.env.LEADS_EMAIL_TO ?? EMAIL_TO;
  const from =
    process.env.LEADS_FROM_EMAIL ?? smtpUser ?? "vettolab0@gmail.com";

  if (!smtpUser || !smtpAppPassword) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Server non configurato: imposta SMTP_GMAIL_USER e SMTP_GMAIL_APP_PASSWORD.",
      },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpAppPassword,
      },
    });

    await transporter.sendMail({
      from,
      to,
      subject: `Nuova richiesta preventivo — ${payload.attivita} (${payload.citta})`,
      replyTo: process.env.LEADS_REPLY_TO ?? payload.email,
      text: [
        `Nome: ${payload.nome}`,
        `Email: ${payload.email}`,
        `Telefono: ${payload.telefono || "-"}`,
        `Attività: ${payload.attivita}`,
        `Città: ${payload.citta}`,
        `Sito attuale: ${payload.sito || "-"}`,
        `Obiettivo: ${payload.obiettivo}`,
        "",
        "Messaggio:",
        payload.messaggio,
      ].join("\n"),
      html: `
        <h2>Nuova richiesta preventivo</h2>
        <p><strong>Nome:</strong> ${payload.nome}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Telefono:</strong> ${payload.telefono || "-"}</p>
        <p><strong>Attività:</strong> ${payload.attivita}</p>
        <p><strong>Città:</strong> ${payload.citta}</p>
        <p><strong>Sito attuale:</strong> ${payload.sito || "-"}</p>
        <p><strong>Obiettivo:</strong> ${payload.obiettivo}</p>
        <p><strong>Messaggio:</strong><br/>${payload.messaggio.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api-contatti] errore invio", error);
    return NextResponse.json(
      { ok: false, message: "Invio non riuscito. Riprova tra poco." },
      { status: 500 },
    );
  }
}
