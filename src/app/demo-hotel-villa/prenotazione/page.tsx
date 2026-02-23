import type { Metadata } from "next";
import { getHotelDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Booking" : "Prenotazione",
    description:
      locale === "en"
        ? "Tailor-made luxury hotel booking form with concierge assistance."
        : "Modulo prenotazione su misura per hotel luxury con assistenza concierge.",
  };
}

export default async function PrenotazionePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { suites } = getHotelDemoContent(locale);

  const extraServices = [
    isEn ? "Private airport transfer" : "Transfer privato aeroporto",
    isEn ? "Villa tasting dinner" : "Cena degustazione in villa",
    isEn ? "Couples spa journey" : "Percorso spa coppia",
    isEn ? "Late check-out until 3:00 PM" : "Late check-out fino alle 15:00",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
          {isEn ? "Booking" : "Prenotazione"}
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
          {isEn
            ? "Book your tailor-made stay"
            : "Prenota il tuo soggiorno su misura"}
        </h1>
        <p className="mt-4 text-[#5f4d3b]">
          {isEn
            ? "Share dates, preferences, and desired services: our concierge will reply quickly with a personalized proposal."
            : "Indica date, preferenze e servizi desiderati: il nostro concierge ti risponderà con una proposta personalizzata in tempi rapidi."}
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-[#deccb4] bg-[#fdf9f3] p-7 sm:p-10">
          <form className="grid gap-5" aria-label="Modulo prenotazione hotel">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                Check-in
                <input
                  type="date"
                  className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                Check-out
                <input
                  type="date"
                  className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                {isEn ? "Guests" : "Ospiti"}
                <select className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none">
                  {[1, 2, 3, 4, 5, 6].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                {isEn ? "Rooms" : "Camere"}
                <select className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none">
                  {[1, 2, 3, 4].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                {isEn ? "Budget range" : "Fascia budget"}
                <select className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none">
                  <option>
                    {isEn ? "€500 - €900 / night" : "€500 - €900 / notte"}
                  </option>
                  <option>
                    {isEn ? "€900 - €1,400 / night" : "€900 - €1.400 / notte"}
                  </option>
                  <option>
                    {isEn ? "€1,400+ / night" : "€1.400+ / notte"}
                  </option>
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm text-[#5f4d3b]">
              {isEn ? "Preferred suite" : "Suite preferita"}
              <select className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none">
                {suites.map((suite) => (
                  <option key={suite.name}>{suite.name}</option>
                ))}
              </select>
            </label>

            <fieldset className="grid gap-3 rounded-2xl border border-[#deccb4] bg-[#f7f0e5] p-4">
              <legend className="px-2 text-sm font-semibold text-[#4a3826]">
                {isEn ? "Extra services" : "Servizi extra"}
              </legend>
              {extraServices.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#5f4d3b]"
                >
                  <input type="checkbox" className="h-4 w-4 accent-[#6f5232]" />
                  {item}
                </label>
              ))}
            </fieldset>

            <label className="grid gap-2 text-sm text-[#5f4d3b]">
              {isEn ? "Full name" : "Nome e cognome"}
              <input
                className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                placeholder={isEn ? "Enter your name" : "Inserisci il tuo nome"}
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                Email
                <input
                  type="email"
                  className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                  placeholder={isEn ? "name@email.com" : "nome@email.it"}
                />
              </label>
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                {isEn ? "Phone" : "Telefono"}
                <input
                  className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                  placeholder="+39"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-[#5f4d3b]">
              {isEn ? "Special requests" : "Richieste speciali"}
              <textarea
                className="min-h-28 rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                placeholder={
                  isEn
                    ? "e.g. allergies, private transfer, anniversary"
                    : "Es. allergie, transfer dedicato, anniversario"
                }
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-[#3f2f1f] px-6 py-3 text-sm font-semibold text-[#f6ecdd]"
            >
              {isEn
                ? "Send booking request"
                : "Invia richiesta di prenotazione"}
            </button>
          </form>
        </section>

        <aside className="h-fit rounded-3xl border border-[#deccb4] bg-[#f4ede3] p-7 sm:p-8">
          <h2 className="heading-display text-3xl text-[#352617]">
            {isEn ? "Dedicated assistance" : "Assistenza dedicata"}
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#5f4d3b]">
            <li>
              {isEn
                ? "Availability confirmation within 2-4 hours."
                : "Conferma disponibilità in 2-4 ore."}
            </li>
            <li>
              {isEn
                ? "Personalized proposal for suites and services."
                : "Proposta personalizzata per suite e servizi."}
            </li>
            <li>
              {isEn
                ? "Secure payment with flexible deposit."
                : "Pagamento sicuro con deposito flessibile."}
            </li>
            <li>
              {isEn
                ? "Dedicated pre-arrival concierge assistance."
                : "Assistenza concierge dedicata pre-arrivo."}
            </li>
          </ul>

          <div className="mt-7 rounded-2xl border border-[#d7c2a4] bg-[#fbf7ef] p-4 text-sm text-[#5f4d3b]">
            {isEn
              ? "From first contact to your arrival, we support you with care and attention to deliver an impeccable experience."
              : "Dal primo contatto all&apos;arrivo in struttura, ti accompagniamo con cura e attenzione per offrirti un&apos;esperienza impeccabile."}
          </div>
        </aside>
      </div>
    </main>
  );
}
