export const restaurantMeta = {
  name: "Atelier Nove",
  city: "Milano",
  phone: "+39 02 3344 5566",
  email: "prenotazioni@ateliernove.it",
};

export const navItems = [
  { href: "/demo-ristorante", label: "Inizio" },
  { href: "/demo-ristorante/menu", label: "Menu" },
  { href: "/demo-ristorante/esperienze", label: "Esperienze" },
  { href: "/demo-ristorante/ambienti", label: "Ambienti" },
  { href: "/demo-ristorante/prenotazione", label: "Prenotazione" },
  { href: "/demo-ristorante/contatti", label: "Contatti" },
];

export const percorsiMenu = [
  {
    nome: "Percorso Alba",
    prezzo: "€95",
    descrizione:
      "6 portate stagionali tra vegetali, pescato del giorno e dessert d'autore.",
    portate: [
      "Benvenuto del cuoco con piccola selezione di stagione",
      "Crudo di ricciola, agrumi italiani ed erbe aromatiche",
      "Riso mantecato al limone, gambero rosso e maggiorana",
      "Pescato del giorno, fondo leggero e ortaggi croccanti",
      "Pre-dessert agli agrumi",
      "Dessert d'autore con frutta e crema alla vaniglia",
    ],
  },
  {
    nome: "Percorso Braci",
    prezzo: "€125",
    descrizione:
      "7 portate con cotture al carbone, carni selezionate e fondi intensi.",
    portate: [
      "Benvenuto del cuoco con lievitato caldo",
      "Tartare di manzo, tuorlo marinato e senape antica",
      "Verdure alla brace con salsa alle erbe",
      "Raviolo ripieno al ragù bianco e jus ristretto",
      "Agnello al carbone, patata affumicata e salsa al rosmarino",
      "Selezione di formaggi italiani con mostarda artigianale",
      "Dessert al cioccolato fondente e nocciola",
    ],
  },
  {
    nome: "Percorso Icone",
    prezzo: "€165",
    descrizione:
      "9 portate d'autore con abbinamento vini o percorso analcolico di alta gamma.",
    portate: [
      "Benvenuto del cuoco con assaggio stagionale",
      "Ostrica, mela verde e finocchietto",
      "Scampo scottato, burro acido e caviale italiano",
      "Tagliolino al burro affumicato e tartufo",
      "Astice, bisque leggera e crema di sedano rapa",
      "Piccione arrosto, fondo al vino rosso e topinambur",
      "Selezione di formaggi affinati",
      "Pre-dessert alla menta e lime",
      "Gran finale di pasticceria da tavola",
    ],
  },
];

export const esperienze = [
  {
    titolo: "Tavolo del cuoco",
    testo: "8 posti fronte cucina con percorso esclusivo e servizio dedicato.",
  },
  {
    titolo: "Sala riservata",
    testo:
      "Sala riservata fino a 18 ospiti per cene aziendali o occasioni speciali.",
  },
  {
    titolo: "Rito del vino",
    testo:
      "Selezione di etichette italiane rare raccontate direttamente al tavolo dal sommelier.",
  },
];

export const ambienti = [
  {
    src: "/images/restaurant-real/hero-dining.jpg",
    alt: "Sala ristorante serale con atmosfera calda e tavoli apparecchiati",
  },
  {
    src: "/images/restaurant-real/service-table.jpg",
    alt: "Tavolo elegantemente apparecchiato con luce soffusa",
  },
  {
    src: "/images/restaurant-real/chef-kitchen.jpg",
    alt: "Brigata in cucina durante il servizio",
  },
  {
    src: "/images/restaurant-real/reserved-table.jpg",
    alt: "Tavolo riservato per cena privata",
  },
  {
    src: "/images/restaurant-real/wine-service.jpg",
    alt: "Servizio vini al tavolo in ambiente di alta cucina",
  },
  {
    src: "/images/restaurant-real/dessert-plate.jpg",
    alt: "Dessert impiattato in stile alta cucina",
  },
];
