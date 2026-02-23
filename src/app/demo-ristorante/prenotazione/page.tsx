import type { Metadata } from "next";
import Image from "next/image";
import { percorsiMenu, restaurantMeta } from "../content";

export const metadata: Metadata = {
  title: "Prenotazione",
};

const occasioni = [
  "Cena romantica",
  "Compleanno",
  "Anniversario",
  "Cena aziendale",
  "Degustazione privata",
];

export default function PrenotazioneRistorantePage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
          Prenotazione
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
          Prenota il tuo tavolo su misura
        </h1>
        <p className="mt-4 text-[#d9c4a8]">
          Indicaci preferenze e occasione: il nostro team ti risponderà
          rapidamente con la migliore proposta.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-7 sm:p-10">
          <form
            className="grid gap-5"
            aria-label="Modulo prenotazione ristorante"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                Data
                <input
                  type="date"
                  className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                Orario
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
                Persone
                <select className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none">
                  {[2, 3, 4, 5, 6, 8, 10].map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm text-[#cbb69a] sm:col-span-2">
                Percorso preferito
                <select className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none">
                  {percorsiMenu.map((menu) => (
                    <option key={menu.nome}>{menu.nome}</option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset className="grid gap-3 rounded-2xl border border-[#7c5b35]/45 bg-[#1d140c] p-4">
              <legend className="px-2 text-sm font-semibold text-[#e1b982]">
                Occasione
              </legend>
              {occasioni.map((item) => (
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
              Nome e cognome
              <input
                className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                placeholder="Inserisci il tuo nome"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                Email
                <input
                  type="email"
                  className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                  placeholder="nome@email.it"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#cbb69a]">
                Telefono
                <input
                  className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                  placeholder="+39"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-[#cbb69a]">
              Note
              <textarea
                className="min-h-28 rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
                placeholder="Intolleranze, allergie, richieste speciali"
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-[#d8a86f] px-6 py-3 text-sm font-semibold text-[#2b1d11]"
            >
              Invia richiesta prenotazione
            </button>
          </form>
        </section>

        <aside className="h-fit rounded-3xl border border-[#7c5b35]/45 bg-[#1b130c] p-7 sm:p-8">
          <div className="mb-5 overflow-hidden rounded-2xl border border-[#7c5b35]/45">
            <Image
              src="/images/restaurant-real/reserved-table.jpg"
              alt="Tavolo elegante pronto per una prenotazione serale"
              width={1000}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="heading-display text-3xl text-[#f2debf]">
            Accoglienza dedicata
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#cbb69a]">
            <li>Risposta media: entro 2 ore</li>
            <li>Conferma tavolo e percorso degustazione</li>
            <li>Gestione allergie e richieste speciali</li>
            <li>Supporto dedicato eventi privati</li>
          </ul>

          <div className="mt-7 rounded-2xl border border-[#7c5b35]/45 bg-[#120d09] p-4 text-sm text-[#cbb69a]">
            Contatti rapidi: {restaurantMeta.phone} · {restaurantMeta.email}
          </div>
        </aside>
      </div>
    </main>
  );
}
