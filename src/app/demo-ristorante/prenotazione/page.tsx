import type { Metadata } from "next";
import Image from "next/image";
import { getRestaurantDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Booking" : "Prenotazione",
    description:
      locale === "en"
        ? "Restaurant booking page for tailored table requests and special occasions."
        : "Pagina prenotazione ristorante per richieste tavolo su misura e occasioni speciali.",
  };
}

export default async function PrenotazioneRistorantePage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { tastingMenus, restaurantMeta } = getRestaurantDemoContent(locale);

  const occasions = [
    isEn ? "Romantic dinner" : "Cena romantica",
    isEn ? "Birthday" : "Compleanno",
    isEn ? "Anniversary" : "Anniversario",
    isEn ? "Corporate dinner" : "Cena aziendale",
    isEn ? "Private tasting" : "Degustazione privata",
  ];

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
          {isEn ? "Booking" : "Prenotazione"}
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
          {isEn
            ? "Book your tailor-made table"
            : "Prenota il tuo tavolo su misura"}
        </h1>
        <p className="mt-4 text-[#d9c4a8]">
          {isEn
            ? "Tell us your preferences and occasion: our team will reply quickly with the best proposal."
            : "Indicaci preferenze e occasione: il nostro team ti risponderà rapidamente con la migliore proposta."}
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-7 sm:p-10">
          <form
            className="grid gap-5"
            aria-label={
              isEn
                ? "Restaurant booking form"
                : "Modulo prenotazione ristorante"
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                {isEn ? "Date" : "Data"}
                <input
                  type="date"
                  className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                {isEn ? "Time" : "Orario"}
                <select className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none">
                  <option>19:15</option>
                  <option>19:45</option>
                  <option>20:30</option>
                  <option>21:15</option>
                  <option>21:45</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                {isEn ? "Guests" : "Persone"}
                <select className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none">
                  {[2, 3, 4, 5, 6, 8, 10].map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm text-[#cbb69a] sm:col-span-2">
                {isEn ? "Preferred tasting menu" : "Percorso preferito"}
                <select className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none">
                  {tastingMenus.map((menu) => (
                    <option key={menu.name}>{menu.name}</option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset className="grid gap-3 rounded-2xl border border-[#7c5b35]/45 bg-[#1d140c] p-4">
              <legend className="px-2 text-sm font-semibold text-[#e1b982]">
                {isEn ? "Occasion" : "Occasione"}
              </legend>
              {occasions.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#cbb69a]"
                >
                  <input type="checkbox" className="h-4 w-4 accent-[#d2a46d]" />
                  {item}
                </label>
              ))}
            </fieldset>

            <label className="grid gap-2 text-sm text-[#cbb69a]">
              {isEn ? "Full name" : "Nome e cognome"}
              <input
                className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                placeholder={isEn ? "Enter your name" : "Inserisci il tuo nome"}
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                Email
                <input
                  type="email"
                  className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                  placeholder={isEn ? "name@email.com" : "nome@email.it"}
                />
              </label>
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                {isEn ? "Phone" : "Telefono"}
                <input
                  className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                  placeholder="+39"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-[#cbb69a]">
              {isEn ? "Notes" : "Note"}
              <textarea
                className="min-h-28 rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                placeholder={
                  isEn
                    ? "Intolerances, allergies, special requests"
                    : "Intolleranze, allergie, richieste speciali"
                }
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-[#d8a86f] px-6 py-3 text-sm font-semibold text-[#2b1d11]"
            >
              {isEn ? "Send booking request" : "Invia richiesta prenotazione"}
            </button>
          </form>
        </section>

        <aside className="h-fit rounded-3xl border border-[#7c5b35]/45 bg-[#1b130c] p-7 sm:p-8">
          <div className="mb-5 overflow-hidden rounded-2xl border border-[#7c5b35]/45">
            <Image
              src="/images/restaurant-real/reserved-table.jpg"
              alt={
                isEn
                  ? "Elegant table ready for an evening reservation"
                  : "Tavolo elegante pronto per una prenotazione serale"
              }
              width={1000}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="heading-display text-3xl text-[#f2debf]">
            {isEn ? "Dedicated front-of-house" : "Accoglienza dedicata"}
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#cbb69a]">
            <li>
              {isEn
                ? "Average response: within 2 hours"
                : "Risposta media: entro 2 ore"}
            </li>
            <li>
              {isEn
                ? "Table and tasting menu confirmation"
                : "Conferma tavolo e percorso degustazione"}
            </li>
            <li>
              {isEn
                ? "Allergy and special-request handling"
                : "Gestione allergie e richieste speciali"}
            </li>
            <li>
              {isEn
                ? "Dedicated support for private events"
                : "Supporto dedicato eventi privati"}
            </li>
          </ul>

          <div className="mt-7 rounded-2xl border border-[#7c5b35]/45 bg-[#120d09] p-4 text-sm text-[#cbb69a]">
            {isEn ? "Quick contacts" : "Contatti rapidi"}:{" "}
            {restaurantMeta.phone} · {restaurantMeta.email}
          </div>
        </aside>
      </div>
    </main>
  );
}
