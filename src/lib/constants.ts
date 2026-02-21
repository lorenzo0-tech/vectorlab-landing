export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "VettoLab";

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/tuo-link/15min";

export const EMAIL_TO =
  process.env.NEXT_PUBLIC_EMAIL_TO ?? "vettolab0@gmail.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vettolab.com";

export const OG_IMAGE_PATH = "/images/og.jpg";
export const LOGO_IMAGE_PATH = "/images/mock/logo_vettolab.png";

export const COMPANY_CITY = process.env.NEXT_PUBLIC_COMPANY_CITY ?? "Milano";
export const COMPANY_VAT = process.env.NEXT_PUBLIC_COMPANY_VAT ?? "14572400969";

const rawRestaurantVetrinaUrl =
  process.env.NEXT_PUBLIC_RESTAURANT_VETRINA_URL?.trim() ?? "";

const normalizeUrl = (value: string) => value.replace(/\/+$/, "");

const siteUrlNormalized = normalizeUrl(SITE_URL);
const restaurantUrlNormalized = normalizeUrl(rawRestaurantVetrinaUrl);

export const RESTAURANT_VETRINA_URL =
  !restaurantUrlNormalized || restaurantUrlNormalized === siteUrlNormalized
    ? "/demo-ristorante"
    : rawRestaurantVetrinaUrl;

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
