# studio-landing-ultratech

Pagina singola in italiano per vendita siti web di alto livello per ristoranti e attività locali.

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

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (opzionale, per analisi traffico)
- `SMTP_GMAIL_USER`
- `SMTP_GMAIL_APP_PASSWORD`

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

- `src/app/page.tsx` composizione pagina singola
- `src/components/*` sezioni della pagina
- `src/lib/constants.ts` costanti configurabili via env
- `src/app/api/lead/route.ts` punto di accesso invio modulo preventivo
- `public/images/og.jpg` placeholder OpenGraph locale

## Form preventivo (invio reale)

Il modulo in `FinalCTA` invia i dati a `POST /api/lead`.

Env richieste per produzione:

- `SMTP_GMAIL_USER`
- `SMTP_GMAIL_APP_PASSWORD` (App Password Google, non la password account)
- `LEADS_FROM_EMAIL` (opzionale, default: `SMTP_GMAIL_USER`)
- `LEADS_EMAIL_TO` (opzionale, alternativa a `NEXT_PUBLIC_EMAIL_TO`)
- `LEADS_REPLY_TO` (opzionale)

Il form ora include:

- email e telefono (telefono opzionale)
- honeypot anti-bot
- controllo invii troppo rapidi
- limite base invii lato API

## Calendario prenotazioni

Se `NEXT_PUBLIC_CALENDLY_URL` punta a un link Calendly valido, nella sezione finale viene mostrato anche il calendario incorporato (oltre al pulsante invito all’azione).

## Dominio + email: lista pubblicazione

Quando acquisti il dominio, imposta:

1. `NEXT_PUBLIC_SITE_URL=https://www.tuodominio.it`
2. `NEXT_PUBLIC_EMAIL_TO=vettolab0@gmail.com`
3. `LEADS_FROM_EMAIL=vettolab0@gmail.com`
4. `LEADS_EMAIL_TO=vettolab0@gmail.com`

### Nota invio email con Gmail

Per usare Gmail senza servizi esterni:

1. Attiva verifica a due fattori sull'account Google.
2. Genera una App Password.
3. Inserisci l'App Password in `SMTP_GMAIL_APP_PASSWORD`.

## Analisi traffico (GA4)

Se imposti `NEXT_PUBLIC_GA_MEASUREMENT_ID`, il sito carica GA4 e traccia:

- visualizzazioni pagina automatiche su cambio percorso
- eventi invito all’azione e invio contatto già integrati nei componenti

### Convenzione eventi GA4

Eventi uniformati in `src/lib/analytics-events.ts`:

- `clic_invito_azione`
  - `posizione`: `testata` | `barra_nav` | `barra_fissa_smartphone` | `pacchetti` | `cta_finale`
  - `destinazione`: `calendly` | `preventivo`
  - `nome_pacchetto` (opzionale): `BASE` | `VETRINA` | `CRESCITA`
- `tentativo_invio_contatto`
  - `sorgente`: `modulo_cta_finale`
  - `citta`
- `successo_invio_contatto`
  - `sorgente`: `modulo_cta_finale`
  - `citta`
- `errore_invio_contatto`
  - `sorgente`: `modulo_cta_finale`
