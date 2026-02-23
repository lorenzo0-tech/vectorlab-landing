import type { Metadata } from "next";
import Link from "next/link";
import { getHotelDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export const metadata: Metadata = {
  title: "Contatti",
};

export default async function ContattiPage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { hotelMeta } = getHotelDemoContent(locale);

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <section className="rounded-3xl border border-[#deccb4] bg-[#fdf9f3] p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
            {isEn ? "Contacts & Bookings" : "Contatti & Prenotazioni"}
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
            {isEn ? "Talk to our concierge" : "Parla con il nostro concierge"}
          </h1>
          <p className="mt-4 text-[#5f4d3b]">
            {isEn
              ? "Tell us how you imagine your stay: you will receive a tailored proposal with the best available options."
              : "Raccontaci come immagini il tuo soggiorno: riceverai una proposta dedicata con le migliori soluzioni disponibili."}
          </p>

          <form
            className="mt-8 grid gap-4"
            aria-label={
              isEn
                ? "Availability request form"
                : "Modulo richiesta disponibilità"
            }
          >
            <input
              className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
              placeholder={isEn ? "Full name" : "Nome e cognome"}
            />
            <input
              className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
              placeholder="Email"
              type="email"
            />
            <input
              className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
              placeholder={isEn ? "Phone" : "Telefono"}
            />
            <textarea
              className="min-h-28 rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
              placeholder={
                isEn
                  ? "Dates, number of guests, preferences"
                  : "Date, numero ospiti, preferenze"
              }
            />
            <button
              type="button"
              className="rounded-full bg-[#3f2f1f] px-6 py-3 text-sm font-semibold text-[#f6ecdd]"
            >
              {isEn ? "Send request" : "Invia richiesta"}
            </button>
          </form>

          <Link
            href="/demo-hotel-villa/prenotazione"
            className="mt-4 inline-flex rounded-full border border-[#bda17f] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#3d2e1f]"
          >
            {isEn
              ? "Go to full booking form"
              : "Vai alla prenotazione completa"}
          </Link>
        </section>

        <aside className="rounded-3xl border border-[#deccb4] bg-[#f4ede3] p-7 sm:p-10">
          <h2 className="heading-display text-3xl text-[#352617]">
            {isEn ? "Dedicated concierge" : "Concierge dedicato"}
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#5f4d3b]">
            <li>
              {isEn ? "Phone" : "Telefono"}: {hotelMeta.phone}
            </li>
            <li>Email: {hotelMeta.email}</li>
            <li>
              {isEn ? "Location" : "Location"}: {hotelMeta.city}
            </li>
            <li>
              {isEn
                ? "Check-in: from 3:00 PM · Check-out: by 11:00 AM"
                : "Check-in: dalle 15:00 · Check-out: entro 11:00"}
            </li>
            <li>
              {isEn
                ? "Private transfer available on request"
                : "Transfer privato disponibile su richiesta"}
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
