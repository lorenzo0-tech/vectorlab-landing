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

- `src/app/page.tsx` composizione pagina singola
- `src/components/*` sezioni della pagina
- `src/lib/constants.ts` costanti configurabili via env
- `src/app/api/lead/route.ts` punto di accesso invio modulo preventivo
- `public/images/og.jpg` placeholder OpenGraph locale

## Form preventivo (invio reale)

Il modulo in `FinalCTA` invia i dati a `POST /api/lead`.

Env richieste per produzione:

- `RESEND_API_KEY`
- `LEADS_FROM_EMAIL` (mittente verificato su Resend)
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
2. `NEXT_PUBLIC_EMAIL_TO=info@tuodominio.it`
3. `LEADS_FROM_EMAIL=contatti@tuodominio.it`
4. `LEADS_EMAIL_TO=info@tuodominio.it`

### DNS consigliato (recapitabilità email)

- SPF (TXT)
- DKIM (TXT/CNAME forniti da Resend)
- DMARC (TXT)

Esempio DMARC base:

```txt
v=DMARC1; p=none; rua=mailto:dmarc@tuodominio.it; fo=1
```

Dopo verifica DNS su Resend, usa `LEADS_FROM_EMAIL` su dominio verificato (non `onboarding@resend.dev`) per evitare problemi di consegna.

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
