# Guida Step-by-Step — Creare una Campagna Google Ads per VettoLab

> Obiettivo: acquisire lead qualificati (imprenditori che stanno per aprire un'attività) con campagne Search ad alta intenzione.

---

## Prerequisiti (da fare UNA volta)

### P1. Crea un account Google Ads

1. Vai su [ads.google.com](https://ads.google.com)
2. Clicca **"Inizia ora"**
3. Accedi con il tuo account Google (usa quello business di VettoLab)
4. Google ti chiederà di creare una campagna — **clicca** "Passa a modalità esperto" in basso (FONDAMENTALE, non usare la modalità smart/semplificata)
5. Poi clicca **"Crea un account senza campagna"**
6. Seleziona:
   - Paese: Italia
   - Fuso orario: (UTC+01:00) Roma
   - Valuta: Euro (€)
7. Clicca **Invia**

### P2. Configura la fatturazione

1. Vai su **Strumenti e impostazioni** (icona chiave inglese in alto) → **Fatturazione** → **Impostazioni**
2. Inserisci i dati di fatturazione di VettoLab (P.IVA, indirizzo, ecc.)
3. Aggiungi un metodo di pagamento (carta di credito/debito o conto corrente)
4. Il pagamento avviene automaticamente — Google addebita quando raggiungi la soglia o a fine mese

### P3. Installa il tag di conversione (Google Tag)

Questo è il passo PIÙ IMPORTANTE — senza tracking non sai cosa funziona.

1. Vai su **Strumenti e impostazioni** → **Misurazione** → **Conversioni**
2. Clicca **+ Nuova azione di conversione**
3. Seleziona **Sito web**
4. Inserisci `https://www.vettolab.com` e clicca **Scansiona**
5. Scorri in basso e clicca **"Aggiungi un'azione di conversione manualmente"**
6. Compila:
   - **Nome**: "Lead - Analisi Gratuita Prenotata"
   - **Categoria**: Invio modulo per un lead
   - **Valore**: Usa lo stesso valore per ogni conversione → **€50** (valore stimato del lead)
   - **Conteggio**: Una (conta solo la prima conversione per utente)
   - **Finestra di conversione click-through**: 30 giorni
   - **Finestra di conversione view-through**: 1 giorno
   - **Modello di attribuzione**: Basata sui dati (o In mancanza: Ultimo clic)
7. Clicca **Fatto** → **Salva e continua**
8. Per l'installazione del tag, scegli **"Utilizza Google Tag Manager"** oppure installa manualmente:

   **Opzione A — Google Tag Manager (consigliata):**
   - Crea un account GTM su [tagmanager.google.com](https://tagmanager.google.com)
   - Installa lo snippet GTM nel `<head>` e `<body>` del sito (in `layout.tsx`)
   - In GTM crea un **Tag** > Google Ads Conversion Tracking con il Conversion ID e Label
   - Come **Trigger** usa un evento personalizzato "lead_submitted" (quello che già invii dal modulo)
   - Pubblica il container

   **Opzione B — Direttamente nel codice:**
   - Google ti dà due snippet: il "Google tag" globale (gtag.js) e lo snippet evento
   - Il tag globale va nel `<head>` di tutte le pagine
   - L'evento conversione va chiamato quando l'utente prenota (es. sulla pagina /grazie)

### P4. Collega Google Analytics 4

1. Se non l'hai già, crea una proprietà GA4 su [analytics.google.com](https://analytics.google.com)
2. In Google Ads: **Strumenti e impostazioni** → **Account collegati** → **Google Analytics (GA4)**
3. Clicca **Collega** e seleziona la tua proprietà
4. Questo ti permette di vedere i dati Ads dentro Analytics e importare audience

---

## Fase 1 — Creazione della Campagna Search

### Step 1: Avvia la campagna

1. Nel dashboard Google Ads, clicca **+ Nuova campagna**
2. **Obiettivo**: seleziona **Lead**
3. **Tipo di campagna**: seleziona **Ricerca** (Search)
4. **Come vuoi raggiungere il tuo obiettivo?**: spunta ✅ "Visite al sito web"
5. Inserisci il tuo sito: `https://www.vettolab.com`
6. **Nome campagna**: `VettoLab — Search — Nuove Attività — IT`
7. Clicca **Continua**

### Step 2: Impostazioni campagna

1. **Reti**:
   - ✅ Rete di ricerca Google
   - ❌ DESELEZIONA "Rete display" (non vuoi sprecare budget su banner random)
   - ❌ DESELEZIONA "Partner di ricerca" (all'inizio tieni solo Google Search)
2. **Località target**:
   - Clicca "Inserisci un'altra località"
   - Digita **Milano** → selezionala
   - Aggiungi anche: **Monza**, **Bergamo**, **Brescia**, **Como**, **Varese**, **Pavia**, **Lodi** (hinterland)
   - **IMPORTANTE**: Clicca su "Opzioni per la località" → seleziona **"Presenza: persone che si trovano o che si trovano regolarmente nelle località target"** (NON "Presenza o interesse")
3. **Lingua**: Italiano
4. **Budget giornaliero**: €20 (inizia conservativo, poi scala)
5. **Strategia di offerta**:
   - Seleziona **"Massimizza le conversioni"**
   - Se hai pochi dati inizialmente, puoi partire con **"Massimizza i clic"** per le prime 2-3 settimane, poi switchare a "Massimizza le conversioni" quando hai almeno 15-20 conversioni
   - NON impostare un CPA target all'inizio — lascia che l'algoritmo impari
6. **Pianificazione annunci**:
   - Clicca "Quando mostrare gli annunci"
   - Imposta: Lunedì → Venerdì, 7:00 → 22:00 (i tuoi clienti cercano in orario lavorativo)
   - Sabato: 9:00 → 18:00
   - Domenica: Off (opzionale, puoi testare)
7. Clicca **Avanti**

### Step 3: Crea il primo Gruppo di Annunci

**Nome gruppo**: `Sito web nuova attività — Broad`

**Keyword da inserire** (copia e incolla):

```
sito web nuova attività
sito web per nuova azienda
creare sito web per nuova attività
sito web apertura ristorante
sito web per chi apre un'attività
web agency nuove attività
sito web professionale da zero
sito web nuova apertura
agenzia web per nuova attività
realizzazione sito web nuova impresa
sito web per startup
sito web apertura locale
creare sito internet per nuova attività
sito web per nuovi imprenditori
sito web aziendale nuovo business
```

**Tipo di corrispondenza delle keyword:**

Per ogni keyword puoi scegliere:

- **Corrispondenza generica** (senza simboli): `sito web nuova attività` — Google mostra l'annuncio anche per ricerche correlate/simili. Più traffico, meno preciso.
- **Corrispondenza a frase** (tra virgolette): `"sito web nuova attività"` — Google mostra per ricerche che contengono questa frase.
- **Corrispondenza esatta** (tra parentesi quadre): `[sito web nuova attività]` — Solo per questa ricerca esatta o varianti molto vicine.

**Consiglio per iniziare**: Usa **corrispondenza a frase** per la maggior parte. Ecco come inserire:

```
"sito web nuova attività"
"sito web per nuova azienda"
"creare sito web per nuova attività"
"sito web apertura ristorante"
"web agency nuove attività"
"sito web professionale da zero"
"sito web nuova apertura"
"agenzia web per nuova attività"
"sito web per startup"
"sito web apertura locale"
[sito web nuova attività milano]
[sito web per nuova azienda milano]
[web agency per startup milano]
```

### Step 4: Aggiungi Keyword Negative

Queste impediscono che i tuoi annunci appaiano per ricerche irrilevanti. **Fondamentale per non sprecare budget.**

1. Nella sezione keyword, clicca su **Keyword escluse**
2. Aggiungi questa lista:

```
gratis
gratuito
free
fai da te
template
wordpress
wix
squarespace
tutorial
come fare da solo
corso
guida
download
lavoro
assunzione
stipendio
stage
tirocinio
tesi
wikipedia
esempio
pdf
```

### Step 5: Scrivi gli Annunci (Responsive Search Ads)

Google Ads usa **Annunci adattabili della rete di ricerca (RSA)** — dai a Google più titoli e descrizioni, e lui testa le combinazioni migliori.

**Annuncio 1:**

| Campo                       | Testo                                                              |
| --------------------------- | ------------------------------------------------------------------ |
| **URL finale**              | `https://www.vettolab.com` (o la landing page dedicata se la crei) |
| **Percorso visualizzato 1** | `siti-web`                                                         |
| **Percorso visualizzato 2** | `nuova-attivita`                                                   |

**Titoli** (max 30 caratteri ciascuno, inseriscine 12-15):

| #   | Titolo                            |
| --- | --------------------------------- |
| 1   | Sito Web Per Nuova Attività       |
| 2   | Apri Con Il Sito Giusto           |
| 3   | Siti Web Da Zero — VettoLab       |
| 4   | Sito Professionale Su Misura      |
| 5   | Analisi Gratuita 15 Minuti        |
| 6   | Design Premium + Performance      |
| 7   | Sito Che Converte Dal Giorno 1    |
| 8   | Web Studio Milano — VettoLab      |
| 9   | Dal Design Alla Conversione       |
| 10  | Zero Template, 100% Custom        |
| 11  | Stai Aprendo? Parti Col Sito      |
| 12  | Primo Sito Web Per La Tua Azienda |
| 13  | Niente WordPress — Solo Custom    |
| 14  | Prenota Analisi Gratuita          |
| 15  | Sito Web Pensato Per Vendere      |

**Descrizioni** (max 90 caratteri ciascuna, inseriscine 4):

| #   | Descrizione                                                                                                            |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
| 1   | Stai per aprire un'attività? Creiamo il tuo sito web da zero. Design premium, zero template. Prenota analisi gratuita. |
| 2   | Siti web su misura per nuove attività a Milano. Dalla strategia al lancio, tutto incluso. Performance reale garantita. |
| 3   | Il tuo business merita un sito pensato per convertire. Niente template. Analisi gratuita di 15 minuti senza impegno.   |
| 4   | VettoLab: siti web professionali per chi apre da zero. Design che impressiona, codice che performa. Contattaci ora.    |

**PIN (blocco posizione):**

- Blocca il Titolo #1 o #2 in **Posizione 1** (così Google li mostra sempre come primo titolo)
- Blocca il Titolo #5 ("Analisi Gratuita 15 Minuti") in **Posizione 3** (call-to-action sempre visibile)

### Step 6: Configura le Estensioni (Asset)

Le estensioni aumentano il CTR del 15-25%. **Non saltarle.**

1. **Sitelink** (link aggiuntivi sotto l'annuncio):
   | Testo link | URL | Descrizione |
   |---|---|---|
   | Analisi Gratuita | /grazie (o Calendly) | Prenota 15 minuti senza impegno |
   | I Nostri Pacchetti | /#pacchetti | STARTER, BUSINESS e ENTERPRISE |
   | Demo Ristorante | /demo-ristorante | Esempio reale di sito ristorante |
   | Demo Hotel & Spa | /demo-hotel-villa | Esempio reale di sito hospitality |

2. **Callout** (frasi brevi che appaiono sotto):
   - `Design Premium`
   - `Zero Template`
   - `Performance Garantita`
   - `Analisi Gratuita 15 Min`
   - `Milano e Lombardia`
   - `Consegna 2-4 Settimane`

3. **Snippet strutturati**:
   - Tipo: **Servizi**
   - Valori: `Siti Web Custom`, `Landing Page`, `E-commerce`, `SEO Tecnica`, `Rebranding Digitale`

4. **Estensione di chiamata** (se hai un numero):
   - Aggiungi il numero di telefono
   - Mostra solo negli orari di lavoro

5. **Estensione immagine**:
   - Carica 3-4 immagini dei tuoi progetti migliori (screenshot siti, mock-up)
   - Formato: quadrato 1:1 (minimo 300x300px)

### Step 7: Rivedi e Pubblica

1. Rivedi tutte le impostazioni nel riepilogo
2. Controlla:
   - ✅ Budget: €20/giorno
   - ✅ Località: solo Milano + hinterland
   - ✅ Rete: solo Search (NO Display, NO Partner)
   - ✅ Keyword negative inserite
   - ✅ Conversione tracking configurato
   - ✅ Estensioni aggiunte
3. Clicca **Pubblica campagna**
4. Google revisiona l'annuncio (di solito 1-24 ore), poi va live

---

## Fase 2 — Ottimizzazione (Primi 7-14 Giorni)

### Giorno 1-3: Monitora il traffico

1. Vai su **Campagne** → clicca sulla tua campagna → **Keyword**
2. Controlla la colonna **"Termini di ricerca"** (menu in alto: Insight e Report → Termini di ricerca)
3. Qui vedi ESATTAMENTE cosa cercano le persone quando cliccano il tuo annuncio
4. Aggiungi come **keyword negative** tutto ciò che è irrilevante (es. "sito web gratis corso online")

### Giorno 3-5: Analizza le metriche

| Metrica                      | Valore sano   | Dove trovarla                                      |
| ---------------------------- | ------------- | -------------------------------------------------- |
| **CTR** (Click-Through Rate) | > 3-5%        | Colonna nella vista campagna                       |
| **CPC** (Costo Per Clic)     | €0.80 - €3.00 | Colonna nella vista campagna                       |
| **Quality Score**            | ≥ 6/10        | Colonna keyword (aggiungi colonna se non visibile) |
| **Impressioni**              | > 100/giorno  | Colonna nella vista campagna                       |
| **Tasso conversione**        | > 3-5%        | Colonna conversioni                                |

### Giorno 7: Primo giro di ottimizzazione

1. **Keyword**: Pausa le keyword con CTR < 1% dopo 200+ impressioni
2. **Annunci**: Controlla quale combinazione di titoli performa meglio (clicca sull'annuncio → "Visualizza dettagli asset")
3. **Keyword negative**: Aggiungi tutti i termini di ricerca irrilevanti trovati
4. **Budget**: Se il CTR è buono e stai spendendo tutto il budget, aumenta a €25/giorno

### Giorno 14: Ottimizzazione avanzata

1. **Suddividi per dispositivo**: Vai su **Dispositivi** — se mobile converte meno, imposta un aggiustamento offerta -20% su mobile
2. **Suddividi per orario**: Vai su **Pianificazione annunci** — togli le fasce orarie con zero conversioni
3. **Suddividi per località**: Vai su **Località** — se Monza performa e Como no, aumenta l'offerta per Monza, riduci per Como
4. **Crea un secondo gruppo annunci** con keyword diverse:

   **Gruppo 2: `Web Agency Milano — Brand`**

   ```
   "web agency milano"
   "agenzia web milano"
   "web designer milano"
   "realizzazione siti web milano"
   "studio web milano"
   ```

---

## Fase 3 — Scaling (Dopo 30 Giorni)

### Quando hai almeno 15-20 conversioni totali:

1. **Cambia strategia di offerta** a **"CPA target"**
   - Imposta il CPA target al 20% sopra il tuo CPA medio attuale
   - Es. se il tuo CPA medio è €25, imposta target a €30
   - L'algoritmo imparerà e ottimizzerà nel tempo

2. **Crea campagna Performance Max** (opzionale, avanzata)
   - Google usa AI per mostrare annunci su Search, Display, YouTube, Gmail, Maps
   - Richiede più budget (€30-50/giorno)
   - Carica tutti i tuoi asset creativi (immagini, video, titoli, descrizioni)

3. **Crea landing page dedicata** `/siti-web-nuova-attivita`
   - Con headline specifica: "Stai Aprendo? Il Tuo Sito Web Nasce Con Te"
   - Testimonianze di clienti che hanno aperto con te
   - Form breve: Nome, Email, Settore, Quando apri
   - Questa landing page migliorerà il Quality Score e abbasserà il CPC

4. **Remarketing**:
   - In Google Ads crea un **Segmento di pubblico** con chi ha visitato il tuo sito ma non ha convertito
   - Crea una campagna Display con budget €5-10/giorno che mostra banner a queste persone
   - Usa messaggi tipo "Stai ancora cercando un web studio? Prenota analisi gratuita"

---

## Budget e ROI Atteso

| Scenario                        | Budget/mese | CPC medio | Click/mese | Tasso conv. | Lead/mese | Costo/lead |
| ------------------------------- | ----------- | --------- | ---------- | ----------- | --------- | ---------- |
| **Conservativo**                | €600        | €2.50     | 240        | 3%          | 7         | €85        |
| **Realistico**                  | €600        | €1.80     | 333        | 5%          | 17        | €35        |
| **Ottimizzato** (dopo 2-3 mesi) | €750        | €1.50     | 500        | 7%          | 35        | €21        |

**Se il tuo pacchetto medio è €2.000-5.000:**

- Anche con 2 conversioni su 17 lead = €4.000-10.000 di fatturato
- ROAS (Return on Ad Spend): 6-16x
- Il Google Ads si ripaga ampiamente

---

## Checklist Rapida

- [ ] Account Google Ads creato in modalità esperto
- [ ] Fatturazione configurata
- [ ] Tag conversione installato e testato
- [ ] GA4 collegata
- [ ] Campagna Search creata
- [ ] Keyword inserite con corrispondenza a frase
- [ ] Keyword negative aggiunte
- [ ] Annuncio RSA con 12-15 titoli e 4 descrizioni
- [ ] Sitelink configurati (4 link)
- [ ] Callout aggiunti (6+)
- [ ] Snippet strutturati aggiunti
- [ ] Budget €20/giorno impostato
- [ ] Solo Rete di Ricerca (NO Display/Partner)
- [ ] Località: Milano + hinterland
- [ ] Pianificazione oraria impostata
- [ ] Termini di ricerca controllati dopo 48h
- [ ] Keyword negative aggiornate dopo 7 giorni

---

## Errori da NON Fare

1. **NON usare la modalità Smart/Semplificata** — hai zero controllo. Usa SEMPRE la modalità esperto.
2. **NON lasciare "Rete Display" attiva** nella campagna Search — ti mangia il budget con banner inutili.
3. **NON usare "Presenza o interesse"** nella località — mostreresti annunci a persone in tutta Italia che hanno "cercato" Milano.
4. **NON ignorare i termini di ricerca** — controllali ogni 3-5 giorni nelle prime settimane.
5. **NON cambiare tutto in una volta** — modifica UNA cosa alla volta e aspetta 3-5 giorni per vedere i risultati.
6. **NON spegnere la campagna dopo 3 giorni** perché "non funziona" — l'algoritmo ha bisogno di 7-14 giorni per imparare.
7. **NON mandare il traffico alla homepage generica** — crea una landing page specifica per l'annuncio.
8. **NON dimenticare il tracking** — senza conversioni tracciate, stai guidando bendato.
