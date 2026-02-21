import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { COMPANY_NAME, OG_IMAGE_PATH, SITE_URL } from "@/lib/constants";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} — Siti web per ristoranti e hotel`,
    template: `%s — ${COMPANY_NAME}`,
  },
  description:
    "Creazione e sviluppo siti web su misura per ristoranti e hotel. Progettazione di alto livello, esperienza utente prima da smartphone e struttura orientata alla conversione.",
  keywords: [
    "siti web ristoranti",
    "siti web hotel",
    "progettazione siti ristoranti",
    "sviluppo siti hotel",
    "pagina di atterraggio ospitalità",
  ],
  category: "attività",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Siti web per ristoranti e hotel`,
    description:
      "Creiamo siti web su misura per ristoranti e hotel: progettazione di alto livello, prestazioni ed esperienza utente orientata ai risultati.",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Pagina principale`,
      },
    ],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — Siti web per ristoranti e hotel`,
    description:
      "Creazione e sviluppo siti web su misura per ristoranti e hotel.",
    images: [OG_IMAGE_PATH],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} h-full antialiased`}
      >
        <AnalyticsProvider />
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
