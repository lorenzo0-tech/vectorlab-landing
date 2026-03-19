export type BlogArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: BlogArticleSection[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "quanto-costa-un-sito-web-per-attivita-locale",
    title: "Quanto costa davvero un sito web per un'attività locale?",
    excerpt:
      "Capire il prezzo giusto significa distinguere tra sito vetrina, sito che porta contatti e progetto costruito per crescere.",
    description:
      "Guida pratica ai fattori che incidono sul costo di un sito web per attività locali, professionisti e aziende.",
    category: "Preventivi",
    publishedAt: "2026-03-11",
    readTime: "6 min di lettura",
    image: "/images/business/pkg-business.jpg",
    imageAlt: "Anteprima di un progetto web aziendale moderno",
    sections: [
      {
        heading:
          "Il prezzo dipende dall'obiettivo, non solo dal numero di pagine",
        paragraphs: [
          "Molti chiedono quanto costa un sito web pensando che il prezzo dipenda solo dal numero di pagine. In realtà il costo cambia soprattutto in base all'obiettivo commerciale: presentarsi bene, generare richieste o sostenere vendite e campagne.",
          "Un sito per un professionista, una palestra, uno studio o un negozio può avere strutture molto diverse anche con lo stesso numero di sezioni. Se serve acquisire contatti, il progetto richiede più lavoro su gerarchia dei contenuti, inviti all'azione, velocità e misurazione dei risultati.",
        ],
      },
      {
        heading: "Le voci che incidono davvero sul preventivo",
        paragraphs: [
          "Quando valuti un preventivo, guarda cosa include davvero. La differenza non è tra sito economico e sito costoso: la differenza è tra sito incompleto e sito pensato per lavorare bene.",
        ],
        bullets: [
          "Progettazione della struttura e dei percorsi di contatto",
          "Scrittura o revisione dei testi in ottica commerciale",
          "Ottimizzazione per smartphone e tempi di caricamento",
          "Impostazione SEO di base e dati tecnici corretti",
          "Modulo contatti, tracciamenti e pagina di ringraziamento",
        ],
      },
      {
        heading: "Quanto aspettarsi in modo realistico",
        paragraphs: [
          "Per molte attività locali il punto di partenza sensato non è il sito più economico, ma un sito essenziale costruito bene. Quando il progetto deve sostenere campagne Google Ads, richieste commerciali e crescita nel tempo, servono contenuti più curati e una base tecnica più solida.",
          "Il criterio corretto non è spendere il meno possibile: è capire quanto ti costa ogni mese avere un sito che non porta richieste, non chiarisce l'offerta e disperde il traffico che stai pagando.",
        ],
      },
    ],
  },
  {
    slug: "errori-sito-web-che-fanno-perdere-clienti",
    title:
      "5 errori del sito web che fanno perdere clienti alle attività locali",
    excerpt:
      "Messaggi vaghi, percorsi confusi e tempi lenti: sono questi gli errori che bloccano contatti e richieste, non solo l'estetica.",
    description:
      "I problemi più comuni che riducono contatti e conversioni su siti di attività locali e aziende di servizi.",
    category: "Conversione",
    publishedAt: "2026-03-11",
    readTime: "5 min di lettura",
    image: "/images/business/office-professionals.jpg",
    imageAlt: "Team al lavoro su strategia e contenuti del sito web",
    sections: [
      {
        heading: "1. Non si capisce subito cosa fai",
        paragraphs: [
          "Se nei primi secondi il visitatore non capisce a chi ti rivolgi, cosa offri e quale passo deve fare, il sito perde forza. Una testata bella ma vaga non aiuta a generare fiducia.",
        ],
      },
      {
        heading: "2. Gli inviti all'azione sono deboli o nascosti",
        paragraphs: [
          "Molti siti hanno il pulsante giusto nel punto sbagliato. Numero, modulo, richiesta preventivo o prenotazione devono essere evidenti, coerenti e ripetuti nei punti chiave del percorso.",
        ],
      },
      {
        heading: "3. Da smartphone si fa fatica",
        paragraphs: [
          "Oggi gran parte del traffico arriva da telefono. Se testi, spaziature, menu o moduli rendono difficile muoversi, stai perdendo richieste reali. La versione mobile non è una riduzione della desktop: è il centro del progetto.",
        ],
      },
      {
        heading: "4. Il sito non trasmette fiducia",
        paragraphs: [
          "Foto deboli, testi generici, assenza di prove e messaggi poco concreti abbassano la credibilità. Servono elementi semplici ma forti: casi reali, processi chiari, riferimenti territoriali e linguaggio diretto.",
        ],
      },
      {
        heading: "5. Non stai misurando niente",
        paragraphs: [
          "Se non sai da dove arrivano i contatti, quali pulsanti vengono cliccati e quali pagine trattengono le persone, stai lavorando al buio. Anche un sito piccolo deve avere una misurazione minima ben impostata.",
        ],
      },
    ],
  },
  {
    slug: "google-ads-per-attivita-locale-cosa-serve-prima-di-investire",
    title:
      "Google Ads per attività locali: cosa deve esserci sul sito prima di investire",
    excerpt:
      "Prima della campagna servono pagina di arrivo coerente, lingua pulita, misurazione corretta e un'offerta chiara. Altrimenti paghi clic che non maturano.",
    description:
      "Checklist essenziale per preparare il sito web prima di attivare campagne Google Ads per attività locali e aziende.",
    category: "Google Ads",
    publishedAt: "2026-03-11",
    readTime: "7 min di lettura",
    image: "/images/business/presentation.jpg",
    imageAlt: "Presentazione di una strategia digitale per campagne Google Ads",
    sections: [
      {
        heading: "Una lingua coerente in tutto il sito",
        paragraphs: [
          "Se il sito alterna italiano, inglese e termini ibridi senza una logica chiara, Google Ads può segnalare incongruenze linguistiche. Titoli, pulsanti, metadati e testi principali devono parlare la stessa lingua del pubblico che vuoi raggiungere.",
        ],
      },
      {
        heading: "Una pagina di arrivo costruita per la campagna",
        paragraphs: [
          "La persona che clicca un annuncio non vuole decifrare il tuo sito. Vuole trovare subito una promessa chiara, prove credibili e una strada semplice per contattarti. Per questo la pagina di arrivo deve essere coerente con l'annuncio e con la parola chiave cercata.",
        ],
        bullets: [
          "Titolo coerente con la ricerca fatta dall'utente",
          "Invito all'azione ben visibile nella parte alta della pagina",
          "Modulo semplice o pagina di ringraziamento ben configurata",
          "Testi puliti, senza miscugli di lingue o formule generiche",
        ],
      },
      {
        heading: "Misurazione e conversioni prima del lancio",
        paragraphs: [
          "Prima di investire anche un solo euro, devi sapere quale azione vuoi misurare: invio modulo, telefonata, prenotazione o visita alla pagina di ringraziamento. Senza questo passaggio non puoi capire se la campagna funziona davvero.",
          "Se la base tecnica e la pagina non sono allineate, il problema non è Google Ads. Il problema è che stai mandando traffico a una struttura che non è pronta a trasformarlo in richieste.",
        ],
      },
    ],
  },
  {
    slug: "come-scrivere-la-homepage-di-un-sito-che-porta-contatti",
    title: "Come scrivere la homepage di un sito che porta contatti",
    excerpt:
      "Una homepage efficace non deve dire tutto: deve chiarire l'offerta, rassicurare e guidare verso il passo successivo.",
    description:
      "Struttura e contenuti essenziali per una homepage chiara, credibile e capace di generare richieste.",
    category: "Contenuti",
    publishedAt: "2026-03-11",
    readTime: "6 min di lettura",
    image: "/images/business/modern-building.jpg",
    imageAlt:
      "Edificio moderno usato come immagine di copertina per un articolo sulla homepage",
    sections: [
      {
        heading: "La homepage non è una brochure",
        paragraphs: [
          "Molte homepage cercano di raccontare tutto e finiscono per non chiarire niente. Una persona che arriva sul sito vuole capire subito chi sei, cosa fai e perché dovrebbe contattarti proprio ora.",
          "La homepage deve filtrare l'attenzione, non disperderla. Per questo servono pochi messaggi forti, gerarchia chiara e un invito all'azione visibile fin dall'inizio.",
        ],
      },
      {
        heading: "Gli elementi che non dovrebbero mancare",
        paragraphs: [
          "Una homepage che genera richieste ha quasi sempre una struttura semplice ma rigorosa. Non serve stupire con effetti a caso: serve accompagnare bene la lettura.",
        ],
        bullets: [
          "Titolo principale che spiega il servizio in modo immediato",
          "Sottotitolo che chiarisce beneficio e destinatario",
          "Invito all'azione ben visibile nella parte alta della pagina",
          "Sezione fiducia con prove, metodo o casi applicativi",
          "Chiusura con modulo o contatto facile da usare",
        ],
      },
      {
        heading: "Meglio chiarezza che creatività fine a sé stessa",
        paragraphs: [
          "Una homepage efficace può essere anche molto curata dal punto di vista visivo, ma la forma deve sempre sostenere la comprensione. Se il visitatore si perde, il design non sta aiutando il business.",
        ],
      },
    ],
  },
  {
    slug: "seo-locale-per-pmi-cosa-serve-davvero-nel-2026",
    title: "SEO locale per PMI: cosa serve davvero nel 2026",
    excerpt:
      "Essere trovati non dipende da trucchi: dipende da struttura corretta, contenuti utili e segnali locali coerenti.",
    description:
      "Panoramica pratica su SEO locale per piccole e medie imprese, con priorità realistiche e senza fumo negli occhi.",
    category: "SEO locale",
    publishedAt: "2026-03-11",
    readTime: "7 min di lettura",
    image: "/images/business/business-handshake.jpg",
    imageAlt:
      "Stretta di mano usata come immagine per un articolo sulla SEO locale",
    sections: [
      {
        heading: "La SEO locale parte dal sito, non solo dalla scheda Google",
        paragraphs: [
          "Molte imprese pensano che basti curare la scheda Google. In realtà il sito è il punto in cui Google e l'utente verificano se l'offerta è chiara, credibile e coerente con il territorio in cui lavori.",
        ],
      },
      {
        heading: "Le priorità concrete",
        paragraphs: [
          "Prima di pensare a interventi complessi, serve mettere ordine nella base. La maggior parte dei risultati arriva da un lavoro pulito sui fondamentali.",
        ],
        bullets: [
          "Titoli di pagina chiari e coerenti con i servizi offerti",
          "Testi che citano aree servite e problemi reali dei clienti",
          "Prestazioni buone soprattutto da smartphone",
          "Pagina contatti completa e facile da usare",
          "Coerenza tra sito, recapiti, mappa e presenza locale",
        ],
      },
      {
        heading: "Cosa evitare",
        paragraphs: [
          "Riempire il sito di parole chiave ripetute, creare pagine inutili o affidarsi a testi generici peggiora la qualità percepita. La SEO locale funziona meglio quando il sito è utile, leggibile e costruito intorno a un'offerta precisa.",
        ],
      },
    ],
  },
  {
    slug: "quando-rifare-un-sito-web-e-quando-basta-ottimizzarlo",
    title: "Quando rifare un sito web e quando basta ottimizzarlo",
    excerpt:
      "Non sempre serve ripartire da zero. Il punto è capire se il problema è tecnico, strategico o di messaggio.",
    description:
      "Come capire se conviene rifare il sito web da zero oppure intervenire con un'ottimizzazione mirata.",
    category: "Strategia",
    publishedAt: "2026-03-11",
    readTime: "5 min di lettura",
    image: "/images/business/pkg-starter.jpg",
    imageAlt:
      "Schermata di progetto web usata come immagine per un articolo sul rifacimento del sito",
    sections: [
      {
        heading: "Quando basta ottimizzare",
        paragraphs: [
          "Se il sito ha una base tecnica discreta, contenuti recuperabili e una struttura non troppo compromessa, spesso conviene intervenire sui punti che bloccano i risultati: testata, inviti all'azione, pagina contatti, velocità e chiarezza dell'offerta.",
        ],
      },
      {
        heading: "Quando rifarlo da zero",
        paragraphs: [
          "Se il sito è lento, confuso, difficile da aggiornare e nato senza una logica di conversione, continuare a rattopparlo rischia di costare più del necessario. In questi casi rifare il progetto permette di recuperare controllo, coerenza e misurazione.",
        ],
      },
      {
        heading: "La domanda giusta da farti",
        paragraphs: [
          "Non chiederti solo se il sito è bello o brutto. Chiediti se oggi ti aiuta a ottenere richieste, se chiarisce davvero il tuo valore e se può sostenere campagne, contenuti e crescita nei prossimi mesi.",
        ],
      },
    ],
  },
  {
    slug: "perche-un-sito-lento-fa-fallire-anche-una-buona-campagna-google-ads",
    title:
      "Perché un sito lento fa fallire anche una buona campagna Google Ads",
    excerpt:
      "Puoi avere annunci validi e parole chiave corrette, ma se la pagina è lenta o confusa stai pagando traffico che non lavora per te.",
    description:
      "Le ragioni per cui le prestazioni del sito incidono direttamente sul rendimento di una campagna Google Ads.",
    category: "Prestazioni",
    publishedAt: "2026-03-11",
    readTime: "6 min di lettura",
    image: "/images/business/team-meeting.jpg",
    imageAlt:
      "Team in riunione usato come immagine per un articolo su prestazioni e Google Ads",
    sections: [
      {
        heading: "Il clic non basta",
        paragraphs: [
          "Quando una persona clicca un annuncio, il lavoro non è finito: in quel momento inizia la parte decisiva. Se la pagina si carica lentamente o non chiarisce subito il messaggio, la visita si disperde prima ancora di diventare una richiesta.",
        ],
      },
      {
        heading: "Le conseguenze pratiche di un sito lento",
        paragraphs: [
          "Le prestazioni non sono un dettaglio tecnico separato dal marketing. Hanno impatto diretto sull'esperienza, sulla fiducia e quindi anche sul costo reale di acquisizione.",
        ],
        bullets: [
          "Più abbandoni subito dopo il clic",
          "Meno contatti a parità di budget investito",
          "Difficoltà a capire se il problema è l'annuncio o la pagina",
          "Percezione meno professionale del marchio",
        ],
      },
      {
        heading: "La regola semplice",
        paragraphs: [
          "Se stai investendo in Google Ads, il sito deve essere pronto prima del lancio. Una pagina veloce, chiara e coerente permette alla campagna di esprimere davvero il proprio potenziale.",
        ],
      },
    ],
  },
  {
    slug: "come-aumentare-richieste-da-sito-web-per-studio-professionale",
    title:
      "Come aumentare le richieste da un sito web per studio professionale",
    excerpt:
      "Avvocati, commercialisti, consulenti e studi tecnici hanno bisogno di chiarezza, fiducia e percorsi semplici verso il contatto.",
    description:
      "Indicazioni pratiche per trasformare il sito di uno studio professionale in uno strumento che genera richieste qualificate.",
    category: "Studi professionali",
    publishedAt: "2026-03-11",
    readTime: "6 min di lettura",
    image: "/images/business/business-handshake.jpg",
    imageAlt: "Incontro professionale tra consulente e cliente",
    sections: [
      {
        heading: "Le persone devono capire subito perché contattarti",
        paragraphs: [
          "Chi arriva sul sito di uno studio professionale non cerca effetti speciali. Cerca competenza, chiarezza e un primo passo semplice. Se il messaggio è troppo generico, la richiesta non parte.",
          "La testata della pagina deve spiegare servizio, destinatario e beneficio in modo diretto. Subito dopo servono prove di affidabilità e un invito al contatto chiaro.",
        ],
      },
      {
        heading: "Cosa non dovrebbe mancare",
        paragraphs: [
          "Un sito per studio professionale converte meglio quando riduce i dubbi prima ancora della telefonata.",
        ],
        bullets: [
          "Servizi spiegati con parole comprensibili",
          "Biografia o presentazione che trasmetta autorevolezza",
          "Modulo breve o contatto diretto sempre visibile",
          "Riferimenti territoriali chiari per la ricerca locale",
        ],
      },
      {
        heading: "La fiducia decide prima del prezzo",
        paragraphs: [
          "Molte richieste si perdono non perché il prezzo è alto, ma perché il sito non rassicura abbastanza. Un linguaggio chiaro e una struttura ordinata aiutano più di molte promesse generiche.",
        ],
      },
    ],
  },
  {
    slug: "landing-page-google-ads-per-pmi-errori-da-evitare",
    title: "Pagina di arrivo per Google Ads: errori da evitare per una PMI",
    excerpt:
      "Se la pagina non è allineata all'annuncio, la campagna disperde budget anche quando i clic arrivano.",
    description:
      "Gli errori più frequenti nelle pagine di arrivo usate dalle PMI per campagne Google Ads e come correggerli.",
    category: "Pagine di arrivo",
    publishedAt: "2026-03-11",
    readTime: "7 min di lettura",
    image: "/images/business/presentation.jpg",
    imageAlt: "Presentazione di una pagina di arrivo per campagne digitali",
    sections: [
      {
        heading: "Promessa scollegata dall'annuncio",
        paragraphs: [
          "Se l'annuncio parla di un servizio specifico e la pagina di arrivo resta generica, l'utente percepisce subito una frattura. Questo abbassa fiducia e probabilità di richiesta.",
        ],
      },
      {
        heading: "Troppa dispersione nella parte alta",
        paragraphs: [
          "Menu affollati, testi vaghi e troppi link secondari distraggono proprio nel momento in cui la persona deve capire se continuare. La parte alta della pagina deve essere pulita e orientata a un solo obiettivo.",
        ],
        bullets: [
          "Titolo coerente con la parola chiave cercata",
          "Sottotitolo che chiarisca il vantaggio",
          "Invito all'azione immediato",
          "Prova o rassicurazione già visibile senza scorrere troppo",
        ],
      },
      {
        heading: "Misurazione assente o incompleta",
        paragraphs: [
          "Senza tracciamento delle richieste, dei clic e della pagina di ringraziamento, non sai se il problema è nell'annuncio, nella pagina o nel modulo. Una campagna senza misura è una campagna cieca.",
        ],
      },
    ],
  },
  {
    slug: "sito-web-per-ristorante-cosa-deve-avere-davvero",
    title:
      "Sito web per ristorante: cosa deve avere davvero per portare prenotazioni",
    excerpt:
      "Menu leggibile, fotografie credibili e contatto immediato contano più di un sito scenografico ma dispersivo.",
    description:
      "Gli elementi davvero utili in un sito web per ristorante che vuole generare prenotazioni e richieste.",
    category: "Ristoranti",
    publishedAt: "2026-03-11",
    readTime: "6 min di lettura",
    image: "/images/restaurant-real/hero-dining.jpg",
    imageAlt: "Tavolo apparecchiato in un ristorante elegante",
    sections: [
      {
        heading: "Da telefono deve essere tutto immediato",
        paragraphs: [
          "Molte persone cercano un ristorante mentre sono già in movimento. Vogliono vedere menu, posizione, orari e prenotazione senza ostacoli. Se da smartphone il sito complica, la prenotazione si perde.",
        ],
      },
      {
        heading: "Le informazioni decisive",
        paragraphs: [
          "Un buon sito per ristorante non deve raccontare troppo: deve far trovare subito quello che serve per decidere.",
        ],
        bullets: [
          "Menu facile da consultare",
          "Fotografie autentiche e coerenti con il locale",
          "Orari, indirizzo e mappa sempre chiari",
          "Pulsante prenotazione o chiamata sempre visibile",
        ],
      },
      {
        heading: "L'estetica conta solo se aiuta la scelta",
        paragraphs: [
          "Un sito molto scenografico ma poco leggibile rischia di peggiorare il risultato. Per un ristorante la bellezza deve sostenere l'appetibilità, non ostacolare l'azione.",
        ],
      },
    ],
  },
  {
    slug: "sito-web-per-hotel-come-aumentare-richieste-dirette",
    title:
      "Sito web per hotel: come aumentare le richieste dirette senza dipendere solo dai portali",
    excerpt:
      "Un buon sito per hotel deve far percepire esperienza, rassicurare e semplificare la richiesta diretta.",
    description:
      "Come progettare un sito per hotel o struttura ricettiva che favorisca richieste dirette e contatti qualificati.",
    category: "Hotel",
    publishedAt: "2026-03-11",
    readTime: "7 min di lettura",
    image: "/images/luxury-real/hero-luxury.jpg",
    imageAlt: "Suite elegante di una struttura ricettiva",
    sections: [
      {
        heading: "La richiesta diretta nasce dalla fiducia",
        paragraphs: [
          "Per spingere una richiesta diretta, il sito deve trasmettere subito qualità dell'esperienza, chiarezza dell'offerta e semplicità del contatto. Se questi elementi mancano, l'utente torna sui portali.",
        ],
      },
      {
        heading: "Cosa deve trovare subito il visitatore",
        paragraphs: [
          "Nella parte alta della pagina non servono frasi astratte. Servono informazioni concrete che aiutino a capire se la struttura è adatta.",
        ],
        bullets: [
          "Tipologia di soggiorno proposta",
          "Galleria fotografica forte ma veloce da caricare",
          "Posizione e punti di interesse vicini",
          "Richiesta disponibilità semplice e visibile",
        ],
      },
      {
        heading: "Meno attrito, più richieste",
        paragraphs: [
          "Ogni passaggio inutile riduce le possibilità di contatto. Moduli troppo lunghi, informazioni sparse o pulsanti nascosti spingono l'utente a rimandare o a uscire.",
        ],
      },
    ],
  },
  {
    slug: "google-business-profile-e-sito-web-come-lavorano-insieme",
    title: "Scheda Google e sito web: come lavorano insieme per la SEO locale",
    excerpt:
      "La scheda Google porta visibilità, ma il sito conferma se l'offerta è davvero credibile e pronta a convertire.",
    description:
      "Relazione tra scheda Google Business Profile e sito web nel lavoro di SEO locale per attività e aziende.",
    category: "SEO locale",
    publishedAt: "2026-03-11",
    readTime: "6 min di lettura",
    image: "/images/business/modern-building.jpg",
    imageAlt: "Facciata di edificio moderno associata a presenza locale online",
    sections: [
      {
        heading: "La scheda attira, il sito conferma",
        paragraphs: [
          "Molte attività si concentrano solo sulla scheda Google. È utile, ma da sola non basta. Quando una persona vuole approfondire, il sito decide se quella visita diventerà una richiesta.",
        ],
      },
      {
        heading: "I segnali che devono essere coerenti",
        paragraphs: [
          "Per lavorare bene in locale, sito e scheda devono raccontare la stessa realtà senza contraddizioni.",
        ],
        bullets: [
          "Nome attività e recapiti coerenti",
          "Servizi descritti nello stesso modo",
          "Aree servite e riferimenti territoriali chiari",
          "Collegamento verso pagine pertinenti del sito",
        ],
      },
      {
        heading: "Quando il sito fa la differenza",
        paragraphs: [
          "Se il tuo settore è competitivo, la differenza la fanno la qualità della pagina, la chiarezza dell'offerta e la facilità di contatto. La scheda genera curiosità; il sito deve trasformarla in fiducia.",
        ],
      },
    ],
  },
  {
    slug: "quanto-deve-essere-lungo-un-modulo-contatti-per-convertire",
    title: "Quanto deve essere lungo un modulo contatti per convertire davvero",
    excerpt:
      "Chiedere troppe informazioni troppo presto blocca le richieste. Chiederne troppo poche rende il contatto debole. Serve equilibrio.",
    description:
      "Come progettare un modulo contatti efficace per aumentare conversioni e richieste utili dal sito.",
    category: "Conversione",
    publishedAt: "2026-03-11",
    readTime: "5 min di lettura",
    image: "/images/business/office-professionals.jpg",
    imageAlt: "Persona che compila un modulo di contatto su schermo",
    sections: [
      {
        heading: "Il modulo non deve interrogare, deve accompagnare",
        paragraphs: [
          "Molti moduli sembrano un questionario. Questo aumenta l'attrito. All'inizio serve raccogliere solo le informazioni utili a rispondere bene, non tutto quello che potrebbe essere utile più avanti.",
        ],
      },
      {
        heading: "I campi essenziali nella maggior parte dei casi",
        paragraphs: [
          "Un modulo breve converte meglio quando chiede solo ciò che serve per iniziare la conversazione.",
        ],
        bullets: [
          "Nome",
          "Email o telefono",
          "Attività o settore",
          "Obiettivo principale della richiesta",
          "Messaggio libero facoltativo ma ben invitato",
        ],
      },
      {
        heading: "Meglio un contatto in più che un filtro troppo rigido",
        paragraphs: [
          "Se il modulo è troppo pesante, perdi anche contatti buoni. Il primo obiettivo è far partire la conversazione. La qualificazione più dettagliata può arrivare dopo.",
        ],
      },
    ],
  },
  {
    slug: "come-capire-se-il-tuo-sito-web-sta-portando-risultati",
    title: "Come capire se il tuo sito web sta portando risultati reali",
    excerpt:
      "Guardare solo le visite non basta. Bisogna leggere richieste, clic, percorsi e qualità dei contatti generati.",
    description:
      "I segnali pratici da osservare per capire se un sito web sta contribuendo davvero a generare risultati commerciali.",
    category: "Analisi",
    publishedAt: "2026-03-11",
    readTime: "6 min di lettura",
    image: "/images/business/team-meeting.jpg",
    imageAlt: "Riunione di team davanti a dati e risultati",
    sections: [
      {
        heading: "Le visite da sole non dicono abbastanza",
        paragraphs: [
          "Avere più traffico può sembrare positivo, ma non significa automaticamente ottenere più richieste. Il punto è capire quante persone fanno l'azione che conta davvero.",
        ],
      },
      {
        heading: "I segnali che contano di più",
        paragraphs: [
          "Per valutare un sito in modo serio servono pochi indicatori, ma ben letti.",
        ],
        bullets: [
          "Invii modulo o richieste preventivo",
          "Clic su telefono, email o WhatsApp",
          "Qualità media dei contatti ricevuti",
          "Pagine che generano più interesse e permanenza",
        ],
      },
      {
        heading: "Risultati reali vuol dire migliore qualità delle richieste",
        paragraphs: [
          "Un sito migliore non porta solo più contatti. Porta contatti più coerenti con quello che offri. Questo riduce perdite di tempo e rende più efficaci sia il commerciale sia le campagne a pagamento.",
        ],
      },
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
