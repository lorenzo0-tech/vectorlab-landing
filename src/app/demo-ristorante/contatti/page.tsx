import type { Metadata } from "next";
import Link from "next/link";
import { getRestaurantDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Contacts" : "Contatti",
    description:
      locale === "en"
        ? "Restaurant contact page for bookings, private events, and custom requests."
        : "Pagina contatti ristorante per prenotazioni, eventi privati e richieste personalizzate.",
  };
}

export default async function ContattiRistorantePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { restaurantMeta } = getRestaurantDemoContent(locale);

  const contactSignals = [
    isEn ? "Fast reply for reservations" : "Risposta rapida per prenotazioni",
    isEn ? "Private event support" : "Supporto per eventi privati",
    isEn
      ? "Allergies and special requests handled with care"
      : "Allergie e richieste speciali gestite con attenzione",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <section className="rounded-[2rem] border border-[#7c5b35]/45 bg-[#17110b] p-7 shadow-[0_18px_36px_rgba(0,0,0,0.18)] sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
            {isEn ? "Contacts" : "Contatti"}
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
            {isEn ? "Talk to Atelier Nove" : "Parla con Atelier Nove"}
          </h1>
          <p className="mt-4 max-w-2xl text-[#d9c4a8] sm:text-lg sm:leading-8">
            {isEn
              ? "For bookings, private events, or tailored requests, our team is at your service."
              : "Per prenotazioni, eventi privati o richieste personalizzate, il nostro team è a disposizione."}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {contactSignals.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#7c5b35]/45 bg-[#120d09] px-4 py-4 text-sm text-[#d7c3a7]"
              >
                {item}
              </div>
            ))}
          </div>

          <form
            className="mt-8 grid gap-4"
            aria-label={
              isEn ? "Restaurant contact form" : "Modulo contatti ristorante"
            }
          >
            <input
              className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
              placeholder={isEn ? "Full name" : "Nome e cognome"}
            />
            <input
              className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
              placeholder="Email"
              type="email"
            />
            <input
              className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
              placeholder={isEn ? "Phone" : "Telefono"}
            />
            <textarea
              className="min-h-28 rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
              placeholder={
                isEn
                  ? "Tell us about your request"
                  : "Raccontaci la tua richiesta"
              }
            />
            <button
              type="button"
              className="rounded-full bg-[#d8a86f] px-6 py-3 text-sm font-semibold text-[#2b1d11]"
            >
              {isEn ? "Send request" : "Invia richiesta"}
            </button>
          </form>

          <Link
            href="/demo-ristorante/prenotazione"
            className="mt-4 inline-flex rounded-full border border-[#b98a55] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f2e1c8]"
          >
            {isEn
              ? "Go to full booking form"
              : "Vai alla prenotazione completa"}
          </Link>
        </section>

        <aside className="rounded-[2rem] border border-[#7c5b35]/45 bg-[#1b130c] p-7 sm:p-10">
          <h2 className="heading-display text-3xl text-[#f2debf]">
            {isEn ? "Useful information" : "Informazioni utili"}
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#cbb69a]">
            <li>
              {isEn ? "Phone" : "Telefono"}: {restaurantMeta.phone}
            </li>
            <li>Email: {restaurantMeta.email}</li>
            <li>
              {isEn ? "City" : "Città"}: {restaurantMeta.city}
            </li>
            <li>
              {isEn ? "Open: Tuesday - Sunday" : "Aperti: Martedì - Domenica"}
            </li>
            <li>
              {isEn
                ? "First seating: 7:15 PM · Second seating: 9:30 PM"
                : "Primo turno: 19:15 · Secondo turno: 21:30"}
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-[#7c5b35]/45 bg-[#120d09] p-5 text-sm leading-8 text-[#cbb69a]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#dcb485]">
              {isEn ? "Before your reservation" : "Prima della prenotazione"}
            </p>
            <p className="mt-3">
              {isEn
                ? "You receive a measured, welcoming reply that already reflects the care reserved for your table."
                : "Ricevi una risposta misurata e accogliente che riflette fin da subito la cura riservata al tuo tavolo."}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
