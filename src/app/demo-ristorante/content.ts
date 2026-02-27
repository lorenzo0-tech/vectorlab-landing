import type { SiteLocale } from "@/lib/server-locale";

const restaurantMeta = {
  name: "Atelier Nove",
  city: {
    it: "Milano",
    en: "Milan",
  },
  phone: "+39 02 3344 5566",
  email: "prenotazioni@ateliernove.it",
};

const navItems = [
  { href: "/demo-ristorante", label: { it: "Inizio", en: "Home" } },
  { href: "/demo-ristorante/menu", label: { it: "Menu", en: "Menu" } },
  {
    href: "/demo-ristorante/esperienze",
    label: { it: "Esperienze", en: "Experiences" },
  },
  {
    href: "/demo-ristorante/ambienti",
    label: { it: "Ambienti", en: "Spaces" },
  },
  {
    href: "/demo-ristorante/prenotazione",
    label: { it: "Prenotazione", en: "Booking" },
  },
  {
    href: "/demo-ristorante/contatti",
    label: { it: "Contatti", en: "Contacts" },
  },
];

const tastingMenus = [
  {
    name: { it: "Percorso Alba", en: "Alba Journey" },
    price: {
      it: "Disponibilità su richiesta",
      en: "Availability on request",
    },
    description: {
      it: "6 portate stagionali tra vegetali, pescato del giorno e dessert d'autore.",
      en: "6 seasonal courses featuring vegetables, catch of the day, and signature dessert.",
    },
    courses: {
      it: [
        "Benvenuto del cuoco con piccola selezione di stagione",
        "Crudo di ricciola, agrumi italiani ed erbe aromatiche",
        "Riso mantecato al limone, gambero rosso e maggiorana",
        "Pescato del giorno, fondo leggero e ortaggi croccanti",
        "Pre-dessert agli agrumi",
        "Dessert d'autore con frutta e crema alla vaniglia",
      ],
      en: [
        "Chef's welcome with a small seasonal selection",
        "Amberjack crudo, Italian citrus, and aromatic herbs",
        "Lemon-creamed rice, red prawn, and marjoram",
        "Catch of the day, light reduction, and crisp vegetables",
        "Citrus pre-dessert",
        "Signature dessert with fruit and vanilla cream",
      ],
    },
  },
  {
    name: { it: "Percorso Braci", en: "Braci Journey" },
    price: {
      it: "Disponibilità su richiesta",
      en: "Availability on request",
    },
    description: {
      it: "7 portate con cotture al carbone, carni selezionate e fondi intensi.",
      en: "7 courses with charcoal cooking, selected meats, and intense reductions.",
    },
    courses: {
      it: [
        "Benvenuto del cuoco con lievitato caldo",
        "Tartare di manzo, tuorlo marinato e senape antica",
        "Verdure alla brace con salsa alle erbe",
        "Raviolo ripieno al ragù bianco e jus ristretto",
        "Agnello al carbone, patata affumicata e salsa al rosmarino",
        "Selezione di formaggi italiani con mostarda artigianale",
        "Dessert al cioccolato fondente e nocciola",
      ],
      en: [
        "Chef's welcome with warm leavened bread",
        "Beef tartare, marinated yolk, and wholegrain mustard",
        "Charcoal-grilled vegetables with herb sauce",
        "Stuffed raviolo with white ragù and reduced jus",
        "Charcoal lamb, smoked potato, and rosemary sauce",
        "Selection of Italian cheeses with artisanal fruit mustard",
        "Dark chocolate and hazelnut dessert",
      ],
    },
  },
  {
    name: { it: "Percorso Icone", en: "Icone Journey" },
    price: {
      it: "Disponibilità su richiesta",
      en: "Availability on request",
    },
    description: {
      it: "9 portate d'autore con abbinamento vini o percorso analcolico di alta gamma.",
      en: "9 signature courses with wine pairing or a premium non-alcoholic pairing.",
    },
    courses: {
      it: [
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
      en: [
        "Chef's welcome with seasonal tasting",
        "Oyster, green apple, and wild fennel",
        "Seared langoustine, sour butter, and Italian caviar",
        "Tagliolini with smoked butter and truffle",
        "Lobster, light bisque, and celeriac cream",
        "Roasted pigeon, red wine reduction, and Jerusalem artichoke",
        "Aged cheese selection",
        "Mint and lime pre-dessert",
        "Grand finale of table-side pastry",
      ],
    },
  },
];

const experiences = [
  {
    title: { it: "Tavolo del cuoco", en: "Chef's Table" },
    text: {
      it: "8 posti fronte cucina con percorso esclusivo e servizio dedicato.",
      en: "8 seats facing the kitchen with an exclusive menu and dedicated service.",
    },
  },
  {
    title: { it: "Sala riservata", en: "Private Dining Room" },
    text: {
      it: "Sala riservata fino a 18 ospiti per cene aziendali o occasioni speciali.",
      en: "Private room for up to 18 guests for corporate dinners or special occasions.",
    },
  },
  {
    title: { it: "Rito del vino", en: "Wine Ritual" },
    text: {
      it: "Selezione di etichette italiane rare raccontate direttamente al tavolo dal sommelier.",
      en: "Selection of rare Italian labels presented directly at the table by the sommelier.",
    },
  },
];

const spaces = [
  {
    src: "/images/restaurant-real/hero-dining.jpg",
    alt: {
      it: "Sala ristorante serale con atmosfera calda e tavoli apparecchiati",
      en: "Evening dining room with warm atmosphere and set tables",
    },
  },
  {
    src: "/images/restaurant-real/service-table.jpg",
    alt: {
      it: "Tavolo elegantemente apparecchiato con luce soffusa",
      en: "Elegantly set table with soft lighting",
    },
  },
  {
    src: "/images/restaurant-real/chef-kitchen.jpg",
    alt: {
      it: "Brigata in cucina durante il servizio",
      en: "Kitchen brigade during service",
    },
  },
  {
    src: "/images/restaurant-real/reserved-table.jpg",
    alt: {
      it: "Tavolo riservato per cena privata",
      en: "Reserved table for a private dinner",
    },
  },
  {
    src: "/images/restaurant-real/wine-service.jpg",
    alt: {
      it: "Servizio vini al tavolo in ambiente di alta cucina",
      en: "Wine service at the table in a fine-dining setting",
    },
  },
  {
    src: "/images/restaurant-real/dessert-plate.jpg",
    alt: {
      it: "Dessert impiattato in stile alta cucina",
      en: "Fine-dining style plated dessert",
    },
  },
];

export function getRestaurantDemoContent(locale: SiteLocale) {
  return {
    restaurantMeta: {
      ...restaurantMeta,
      city: restaurantMeta.city[locale],
    },
    navItems: navItems.map((item) => ({
      href: item.href,
      label: item.label[locale],
    })),
    tastingMenus: tastingMenus.map((menu) => ({
      name: menu.name[locale],
      price: menu.price[locale],
      description: menu.description[locale],
      courses: menu.courses[locale],
    })),
    experiences: experiences.map((experience) => ({
      title: experience.title[locale],
      text: experience.text[locale],
    })),
    spaces: spaces.map((space) => ({
      src: space.src,
      alt: space.alt[locale],
    })),
  };
}
