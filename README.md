# studio-landing-ultratech

Landing page one-page in italiano per vendita siti web premium per ristoranti e attività locali.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Avvio locale

1. Copia `.env.example` in `.env.local`
2. Imposta almeno:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_EMAIL_TO`
   - `NEXT_PUBLIC_RESTAURANT_VETRINA_URL`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (opzionale, per analytics)
   - `RESEND_API_KEY`
   - `LEADS_FROM_EMAIL`
3. Installa dipendenze e avvia:

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Build produzione

```bash
npm run build
npm run start
```

## Struttura principale

- `src/app/page.tsx` composizione one-page
- `src/components/*` sezioni della landing
- `src/lib/constants.ts` costanti configurabili via env
- `src/app/api/lead/route.ts` endpoint submit form preventivo
- `public/images/og.jpg` placeholder OpenGraph locale

## Form preventivo (invio reale)

Il form in `FinalCTA` invia i dati a `POST /api/lead`.

Env richieste per produzione:

- `RESEND_API_KEY`
- `LEADS_FROM_EMAIL` (mittente verificato su Resend)
- `LEADS_EMAIL_TO` (opzionale, fallback a `NEXT_PUBLIC_EMAIL_TO`)
- `LEADS_REPLY_TO` (opzionale)

## Analytics (GA4)

Se imposti `NEXT_PUBLIC_GA_MEASUREMENT_ID`, il sito carica GA4 e traccia:

- pageview automatiche su route change
- eventi CTA e submit lead già integrati nei componenti

### Convenzione eventi GA4

Eventi standardizzati in `src/lib/analytics-events.ts`:

- `cta_click`
  - `location`: `hero` | `navbar` | `mobile_sticky_bar` | `packages` | `final_cta`
  - `target`: `calendly` | `preventivo`
  - `package_name` (opzionale): `BASE` | `VETRINA` | `CRESCITA`
- `lead_submit_attempt`
  - `source`: `final_cta_form`
  - `city`
- `lead_submit_success`
  - `source`: `final_cta_form`
  - `city`
- `lead_submit_error`
  - `source`: `final_cta_form`
