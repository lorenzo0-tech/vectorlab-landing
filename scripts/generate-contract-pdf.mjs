import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const outputPath = path.join(
  rootDir,
  "public",
  "docs",
  "Contratto-Servizi-VettoLab.pdf",
);
const logoPath = path.join(rootDir, "public", "images", "mock", "logo_vettolab.png");

const palette = {
  bgDark: rgb(7 / 255, 11 / 255, 20 / 255),
  cyan: rgb(6 / 255, 182 / 255, 212 / 255),
  indigo: rgb(99 / 255, 102 / 255, 241 / 255),
  fuchsia: rgb(217 / 255, 70 / 255, 239 / 255),
  text: rgb(15 / 255, 23 / 255, 42 / 255),
  muted: rgb(71 / 255, 85 / 255, 105 / 255),
  border: rgb(203 / 255, 213 / 255, 225 / 255),
  soft: rgb(248 / 255, 250 / 255, 252 / 255),
};

const agreementSections = [
  {
    title: "1) Parti del contratto",
    paragraphs: [
      "Il presente contratto di servizi digitali (\"Contratto\") è concluso tra:",
      "Fornitore: VettoLab (\"Fornitore\"), con sede operativa in Milano, P.IVA 14572400969, email: vettolab0@gmail.com.",
      "Cliente: [Ragione sociale cliente], con sede in [indirizzo], P.IVA/C.F. [dato], email [email referente].",
    ],
  },
  {
    title: "2) Oggetto",
    paragraphs: [
      "Il Fornitore realizza per il Cliente un sito web orientato alla conversione per ristorazione o alberghi, secondo il pacchetto selezionato in offerta (Standard, Pro o Enterprise).",
      "Il progetto include attività di strategia, progettazione UX/UI, sviluppo front-end, impostazione contenuti e pubblicazione, secondo quanto definito nell'offerta economica allegata.",
    ],
  },
  {
    title: "3) Ambito servizi inclusi",
    bullets: [
      "Struttura del sito e architettura pagine in linea con il settore (ristorazione/alberghi).",
      "Design responsive smartphone-first con attenzione a velocità e chiarezza dei CTA.",
      "Impostazione sezioni principali (es. menu/servizi/camere/contatti/prenotazione).",
      "Set up base SEO locale tecnico-editoriale (struttura, heading, metadati essenziali).",
      "Impostazione tracciamento azioni chiave (es. click CTA, contatti, richieste).",
      "Messa online su dominio/hosting del Cliente o ambiente concordato.",
    ],
  },
  {
    title: "4) Servizi esclusi salvo accordo scritto",
    bullets: [
      "Produzione foto/video professionali in loco.",
      "Copywriting esteso multilingua non previsto nell'offerta.",
      "Gestione campagne advertising continuativa (Google Ads/Meta Ads).",
      "Integrazioni software complesse (PMS/CRM/channel manager/API custom) salvo pacchetti dedicati.",
    ],
  },
  {
    title: "5) Tempistiche e milestone",
    paragraphs: [
      "La tempistica tipica di consegna è indicativamente 14 giorni lavorativi dalla ricezione completa dei materiali richiesti e dall'avvio operativo.",
      "Le milestone operative (bozza struttura, revisione, consegna finale) sono dettagliate nell'offerta. Eventuali ritardi nella consegna materiali da parte del Cliente spostano le date in modo proporzionale.",
    ],
  },
  {
    title: "6) Corrispettivo e pagamenti",
    paragraphs: [
      "Il corrispettivo complessivo è quello riportato nell'offerta commerciale accettata dal Cliente.",
      "Salvo diverso accordo scritto: 50% all'accettazione dell'incarico e 50% prima della pubblicazione finale.",
      "Eventuali attività extra rispetto allo scope concordato saranno preventivate a parte e avviate solo previa approvazione scritta del Cliente.",
    ],
  },
  {
    title: "7) Revisioni",
    paragraphs: [
      "Sono incluse [numero] finestre di revisione contenutistica/grafica come indicato nell'offerta.",
      "Richieste eccedenti o modifiche sostanziali di impostazione dopo approvazione milestone possono comportare costi aggiuntivi e aggiornamento timeline.",
    ],
  },
  {
    title: "8) Obblighi del Cliente",
    bullets: [
      "Fornire materiali, testi, immagini e riferimenti utili nei tempi concordati.",
      "Garantire la titolarità o licenza d'uso dei contenuti forniti.",
      "Nominare un referente unico per feedback e approvazioni.",
      "Approvare o richiedere modifiche entro 3 giorni lavorativi per non rallentare il progetto.",
    ],
  },
  {
    title: "9) Tracciamento e risultati",
    paragraphs: [
      "Il Fornitore implementa strumenti di misurazione tecnica delle azioni utente (es. clic su CTA, invio richieste, interazioni principali).",
      "Il Fornitore non garantisce risultati economici specifici (es. numero prenotazioni/fatturato), in quanto dipendono da fattori esterni quali offerta commerciale, prezzi, reputazione, stagionalità e investimenti media.",
    ],
  },
  {
    title: "10) Proprietà intellettuale",
    paragraphs: [
      "A saldo completo del corrispettivo, il Cliente acquisisce diritto d'uso del deliverable finale realizzato per il proprio brand.",
      "Restano di titolarità del Fornitore metodologie, know-how, componenti riutilizzabili e asset proprietari preesistenti.",
      "Il Fornitore può citare il progetto nel proprio portfolio, salvo diversa pattuizione scritta.",
    ],
  },
  {
    title: "11) Riservatezza e privacy",
    paragraphs: [
      "Le parti si impegnano alla riservatezza su informazioni commerciali e tecniche apprese durante il progetto.",
      "Le attività di trattamento dati sono svolte nel rispetto della normativa applicabile (GDPR e normativa nazionale), secondo ruoli e responsabilità definiti dalle parti.",
    ],
  },
  {
    title: "12) Durata, recesso e risoluzione",
    paragraphs: [
      "Il Contratto ha validità dalla data di accettazione fino al completamento delle attività previste e al saldo finale.",
      "In caso di recesso del Cliente a progetto avviato, restano dovuti gli importi maturati per attività già eseguite.",
      "In caso di inadempimento grave di una parte, l'altra parte può risolvere il Contratto previa comunicazione scritta.",
    ],
  },
  {
    title: "13) Legge applicabile e foro competente",
    paragraphs: [
      "Il presente Contratto è regolato dalla legge italiana.",
      "Per ogni controversia è competente in via esclusiva il Foro di Milano, salvo diversa disposizione inderogabile di legge.",
    ],
  },
  {
    title: "14) Accettazione",
    paragraphs: [
      "Il Cliente dichiara di aver letto e accettato integralmente le condizioni del presente Contratto e dell'offerta allegata.",
    ],
  },
];

function wrapText(text, font, size, maxWidth) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    const width = font.widthOfTextAtSize(candidate, size);

    if (width <= maxWidth) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);
  return lines;
}

async function generatePdf() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const pageSize = { width: 595.28, height: 841.89 }; // A4
  const margin = 44;
  const contentWidth = pageSize.width - margin * 2;

  let page = pdfDoc.addPage([pageSize.width, pageSize.height]);
  let cursorY = pageSize.height - margin;

  const drawHeader = () => {
    page.drawRectangle({
      x: 0,
      y: pageSize.height - 122,
      width: pageSize.width,
      height: 122,
      color: palette.bgDark,
    });

    page.drawRectangle({
      x: 0,
      y: pageSize.height - 126,
      width: pageSize.width,
      height: 4,
      color: palette.cyan,
    });

    page.drawRectangle({
      x: pageSize.width * 0.38,
      y: pageSize.height - 126,
      width: pageSize.width * 0.32,
      height: 4,
      color: palette.indigo,
    });

    page.drawRectangle({
      x: pageSize.width * 0.7,
      y: pageSize.height - 126,
      width: pageSize.width * 0.3,
      height: 4,
      color: palette.fuchsia,
    });
  };

  const drawFooter = (currentPageNumber) => {
    page.drawLine({
      start: { x: margin, y: 30 },
      end: { x: pageSize.width - margin, y: 30 },
      thickness: 1,
      color: palette.border,
    });

    page.drawText("VettoLab · Contratto servizi web", {
      x: margin,
      y: 17,
      size: 9,
      font: fontRegular,
      color: palette.muted,
    });

    page.drawText(`Pagina ${currentPageNumber}`, {
      x: pageSize.width - margin - 52,
      y: 17,
      size: 9,
      font: fontRegular,
      color: palette.muted,
    });
  };

  const addPage = () => {
    page = pdfDoc.addPage([pageSize.width, pageSize.height]);
    cursorY = pageSize.height - margin;
    drawHeader();
    cursorY = pageSize.height - 146;
  };

  const ensureSpace = (neededHeight) => {
    if (cursorY - neededHeight < 54) {
      addPage();
    }
  };

  drawHeader();

  const logoBytes = fs.readFileSync(logoPath);
  const logoImage = await pdfDoc.embedPng(logoBytes);
  const logoDims = logoImage.scale(0.125);

  page.drawRectangle({
    x: margin,
    y: pageSize.height - 106,
    width: 66,
    height: 66,
    color: rgb(1, 1, 1),
    borderColor: rgb(1, 1, 1),
    borderWidth: 1,
    opacity: 0.08,
  });

  page.drawImage(logoImage, {
    x: margin + (66 - logoDims.width) / 2,
    y: pageSize.height - 106 + (66 - logoDims.height) / 2,
    width: logoDims.width,
    height: logoDims.height,
  });

  page.drawText("VettoLab", {
    x: margin + 78,
    y: pageSize.height - 64,
    size: 22,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText("Contratto servizi web per ristorazione e alberghi", {
    x: margin + 78,
    y: pageSize.height - 86,
    size: 10,
    font: fontRegular,
    color: rgb(0.86, 0.93, 1),
  });

  const today = new Date();
  const dateLabel = today.toLocaleDateString("it-IT");

  page.drawText(`Data documento: ${dateLabel}`, {
    x: margin,
    y: pageSize.height - 162,
    size: 10,
    font: fontRegular,
    color: palette.muted,
  });

  page.drawText("ID contratto: [VTL-____-____]", {
    x: margin + 250,
    y: pageSize.height - 162,
    size: 10,
    font: fontRegular,
    color: palette.muted,
  });

  cursorY = pageSize.height - 196;

  page.drawRectangle({
    x: margin,
    y: cursorY - 58,
    width: contentWidth,
    height: 58,
    color: palette.soft,
    borderColor: palette.border,
    borderWidth: 1,
  });

  page.drawText("Dati rapidi commessa", {
    x: margin + 12,
    y: cursorY - 18,
    size: 11,
    font: fontBold,
    color: palette.text,
  });

  page.drawText("Cliente: [Nome cliente]   |   Progetto: [Sito ristorante/hotel]   |   Importo: [€____ + IVA]", {
    x: margin + 12,
    y: cursorY - 36,
    size: 9.8,
    font: fontRegular,
    color: palette.muted,
  });

  cursorY -= 84;

  const titleSize = 13;
  const paragraphSize = 10.5;
  const lineHeight = 15.4;

  for (const section of agreementSections) {
    ensureSpace(32);
    page.drawText(section.title, {
      x: margin,
      y: cursorY,
      size: titleSize,
      font: fontBold,
      color: palette.text,
    });
    cursorY -= 18;

    if (section.paragraphs) {
      for (const paragraph of section.paragraphs) {
        const lines = wrapText(paragraph, fontRegular, paragraphSize, contentWidth);
        ensureSpace(lines.length * lineHeight + 10);
        for (const line of lines) {
          page.drawText(line, {
            x: margin,
            y: cursorY,
            size: paragraphSize,
            font: fontRegular,
            color: palette.text,
          });
          cursorY -= lineHeight;
        }
        cursorY -= 2;
      }
    }

    if (section.bullets) {
      for (const bullet of section.bullets) {
        const bulletLines = wrapText(bullet, fontRegular, paragraphSize, contentWidth - 18);
        ensureSpace(bulletLines.length * lineHeight + 8);

        page.drawCircle({
          x: margin + 4,
          y: cursorY + 5,
          size: 2.5,
          color: palette.cyan,
        });

        for (let index = 0; index < bulletLines.length; index += 1) {
          page.drawText(bulletLines[index], {
            x: margin + 14,
            y: cursorY,
            size: paragraphSize,
            font: fontRegular,
            color: palette.text,
          });
          cursorY -= lineHeight;
        }
        cursorY -= 1;
      }
    }

    cursorY -= 10;
  }

  ensureSpace(120);

  page.drawRectangle({
    x: margin,
    y: cursorY - 62,
    width: contentWidth,
    height: 62,
    color: rgb(0.99, 0.99, 1),
    borderColor: palette.border,
    borderWidth: 1,
  });

  const noteLines = wrapText(
    "Nota importante: questo documento è un template operativo pronto all'uso e va completato con dati economici e specifiche progetto. Per esigenze normative specifiche si raccomanda verifica con consulente legale.",
    fontItalic,
    9,
    contentWidth - 20,
  );

  let noteY = cursorY - 18;
  for (const line of noteLines) {
    page.drawText(line, {
      x: margin + 10,
      y: noteY,
      size: 9,
      font: fontItalic,
      color: palette.muted,
    });
    noteY -= 12;
  }

  cursorY -= 92;

  ensureSpace(150);

  page.drawText("Luogo e data: ___________________________", {
    x: margin,
    y: cursorY,
    size: 10.5,
    font: fontRegular,
    color: palette.text,
  });

  cursorY -= 46;
  page.drawText("Per il Fornitore (VettoLab)", {
    x: margin,
    y: cursorY,
    size: 10.5,
    font: fontBold,
    color: palette.text,
  });

  page.drawText("Per il Cliente", {
    x: pageSize.width / 2 + 20,
    y: cursorY,
    size: 10.5,
    font: fontBold,
    color: palette.text,
  });

  cursorY -= 32;

  page.drawLine({
    start: { x: margin, y: cursorY },
    end: { x: margin + 200, y: cursorY },
    thickness: 1,
    color: palette.border,
  });

  page.drawLine({
    start: { x: pageSize.width / 2 + 20, y: cursorY },
    end: { x: pageSize.width / 2 + 220, y: cursorY },
    thickness: 1,
    color: palette.border,
  });

  const pages = pdfDoc.getPages();
  pages.forEach((p, index) => {
    page = p;
    drawFooter(index + 1);
  });

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const bytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, bytes);

  console.log(`PDF generato: ${outputPath}`);
}

generatePdf().catch((error) => {
  console.error("Errore generazione PDF:", error);
  process.exit(1);
});
