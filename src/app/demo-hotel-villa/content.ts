import type { SiteLocale } from "@/lib/server-locale";

const hotelMeta = {
  name: "Villa Aurea",
  city: {
    it: "Lago di Como",
    en: "Lake Como",
  },
  phone: "+39 02 0000 0000",
  email: "info@villaaurea.it",
};

const navItems = [
  {
    href: "/demo-hotel-villa",
    label: { it: "Home", en: "Home" },
  },
  {
    href: "/demo-hotel-villa/suite",
    label: { it: "Suite", en: "Suites" },
  },
  {
    href: "/demo-hotel-villa/esperienze",
    label: { it: "Esperienze", en: "Experiences" },
  },
  {
    href: "/demo-hotel-villa/spa",
    label: { it: "Spa", en: "Spa" },
  },
  {
    href: "/demo-hotel-villa/ristorante",
    label: { it: "Ristorante", en: "Restaurant" },
  },
  {
    href: "/demo-hotel-villa/galleria",
    label: { it: "Galleria", en: "Gallery" },
  },
  {
    href: "/demo-hotel-villa/prenotazione",
    label: { it: "Prenotazione", en: "Booking" },
  },
  {
    href: "/demo-hotel-villa/contatti",
    label: { it: "Contatti", en: "Contacts" },
  },
];

const suites = [
  {
    name: {
      it: "Suite Panoramica Aria",
      en: "Aria Panoramic Suite",
    },
    description: {
      it: "Terrazza privata, letto king, bagno in marmo travertino e rituale serale in camera.",
      en: "Private terrace, king bed, travertine marble bathroom, and an evening in-room ritual.",
    },
    price: {
      it: "da €760 / notte",
      en: "from €760 / night",
    },
    image: "/images/luxury-real/suite-aria.jpg",
  },
  {
    name: {
      it: "Villa Privata Seta",
      en: "Seta Private Villa",
    },
    description: {
      it: "Ingresso indipendente, piscina riservata, area living esterna e servizio maggiordomo.",
      en: "Private entrance, reserved pool, outdoor living area, and butler service.",
    },
    price: {
      it: "da €1.450 / notte",
      en: "from €1,450 / night",
    },
    image: "/images/luxury-real/suite-seta.jpg",
  },
  {
    name: {
      it: "Loft Giardino Aurora",
      en: "Aurora Garden Loft",
    },
    description: {
      it: "Spazi contemporanei con camino, angolo lettura e breakfast signature in veranda.",
      en: "Contemporary spaces with fireplace, reading nook, and signature breakfast on the veranda.",
    },
    price: {
      it: "da €620 / notte",
      en: "from €620 / night",
    },
    image: "/images/luxury-real/suite-aurora.jpg",
  },
];

const experiences = [
  {
    title: {
      it: "Tour privato in motoscafo",
      en: "Private Speedboat Tour",
    },
    text: {
      it: "Itinerario sul lago con aperitivo al tramonto, skipper dedicato e soste in location iconiche.",
      en: "Lake itinerary with sunset aperitif, dedicated skipper, and stops at iconic locations.",
    },
  },
  {
    title: {
      it: "Wine & Villa Ritual",
      en: "Wine & Villa Ritual",
    },
    text: {
      it: "Degustazione guidata di etichette italiane rare con cena privata e pairing su misura.",
      en: "Guided tasting of rare Italian labels with private dinner and bespoke pairings.",
    },
  },
  {
    title: {
      it: "Atelier benessere",
      en: "Wellness Atelier",
    },
    text: {
      it: "Percorso corpo-viso in spa con prodotti naturali italiani e cabina doppia panoramica.",
      en: "Body and facial spa journey with natural Italian products and a panoramic double suite.",
    },
  },
];

const gallery = [
  {
    src: "/images/luxury-real/gallery-unique-1.jpg",
    alt: {
      it: "Suite luxury con luce naturale e arredi contemporanei",
      en: "Luxury suite with natural light and contemporary furnishings",
    },
  },
  {
    src: "/images/luxury-real/gallery-unique-2.jpg",
    alt: {
      it: "Dettagli eleganti di una camera premium",
      en: "Elegant details of a premium room",
    },
  },
  {
    src: "/images/luxury-real/gallery-unique-3.jpg",
    alt: {
      it: "Living suite con atmosfera calda e raffinata",
      en: "Suite living area with a warm, refined atmosphere",
    },
  },
  {
    src: "/images/luxury-real/gallery-unique-4.jpg",
    alt: {
      it: "Piscina scenografica in contesto resort di lusso",
      en: "Scenic pool in a luxury resort setting",
    },
  },
  {
    src: "/images/luxury-real/gallery-unique-5.jpg",
    alt: {
      it: "Terrazza con vista per soggiorni esclusivi",
      en: "Panoramic terrace for exclusive stays",
    },
  },
  {
    src: "/images/luxury-real/gallery-unique-6.jpg",
    alt: {
      it: "Spazi architettonici di una villa contemporanea",
      en: "Architectural spaces of a contemporary villa",
    },
  },
];

export function getHotelDemoContent(locale: SiteLocale) {
  return {
    hotelMeta: {
      ...hotelMeta,
      city: hotelMeta.city[locale],
    },
    navItems: navItems.map((item) => ({
      href: item.href,
      label: item.label[locale],
    })),
    suites: suites.map((suite) => ({
      name: suite.name[locale],
      description: suite.description[locale],
      price: suite.price[locale],
      image: suite.image,
    })),
    experiences: experiences.map((experience) => ({
      title: experience.title[locale],
      text: experience.text[locale],
    })),
    gallery: gallery.map((item) => ({
      src: item.src,
      alt: item.alt[locale],
    })),
  };
}
