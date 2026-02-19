import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
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
    default: `${COMPANY_NAME} — Siti web che portano prenotazioni`,
    template: `%s — ${COMPANY_NAME}`,
  },
  description:
    "Progettiamo e sviluppiamo siti moderni per ristoranti e attività locali che vogliono risultati: prenotazioni, chiamate, richieste.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Siti web che portano risultati`,
    description:
      "Design premium + sviluppo solido. Mobile-first, veloce, Google-friendly.",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Landing`,
      },
    ],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE_PATH],
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
      </body>
    </html>
  );
}
