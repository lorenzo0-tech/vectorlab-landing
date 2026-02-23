import type { Metadata } from "next";
import { suites } from "../content";

export const metadata: Metadata = {
  title: "Prenotazione",
};

const extraServices = [
  "Transfer privato aeroporto",
  "Cena degustazione in villa",
  "Percorso spa coppia",
  "Late check-out fino alle 15:00",
];

export default function PrenotazionePage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
          Prenotazione
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
          Prenota il tuo soggiorno su misura
        </h1>
        <p className="mt-4 text-[#5f4d3b]">
          Indica date, preferenze e servizi desiderati: il nostro concierge ti
          risponderà con una proposta personalizzata in tempi rapidi.
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
                Ospiti
                <select className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none">
                  {[1, 2, 3, 4, 5, 6].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                Camere
                <select className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none">
                  {[1, 2, 3, 4].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                Fascia budget
                <select className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none">
                  <option>€500 - €900 / notte</option>
                  <option>€900 - €1.400 / notte</option>
                  <option>€1.400+ / notte</option>
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm text-[#5f4d3b]">
              Suite preferita
              <select className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none">
                {suites.map((suite) => (
                  <option key={suite.nome}>{suite.nome}</option>
                ))}
              </select>
            </label>

            <fieldset className="grid gap-3 rounded-2xl border border-[#deccb4] bg-[#f7f0e5] p-4">
              <legend className="px-2 text-sm font-semibold text-[#4a3826]">
                Servizi extra
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
              Nome e cognome
              <input
                className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                placeholder="Inserisci il tuo nome"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                Email
                <input
                  type="email"
                  className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                  placeholder="nome@email.it"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#5f4d3b]">
                Telefono
                <input
                  className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                  placeholder="+39"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm text-[#5f4d3b]">
              Richieste speciali
              <textarea
                className="min-h-28 rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
                placeholder="Es. allergie, transfer dedicato, anniversario"
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-[#3f2f1f] px-6 py-3 text-sm font-semibold text-[#f6ecdd]"
            >
              Invia richiesta di prenotazione
            </button>
          </form>
        </section>

        <aside className="h-fit rounded-3xl border border-[#deccb4] bg-[#f4ede3] p-7 sm:p-8">
          <h2 className="heading-display text-3xl text-[#352617]">
            Assistenza dedicata
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#5f4d3b]">
            <li>Conferma disponibilità in 2-4 ore.</li>
            <li>Proposta personalizzata per suite e servizi.</li>
            <li>Pagamento sicuro con deposito flessibile.</li>
            <li>Assistenza concierge dedicata pre-arrivo.</li>
          </ul>

          <div className="mt-7 rounded-2xl border border-[#d7c2a4] bg-[#fbf7ef] p-4 text-sm text-[#5f4d3b]">
            Dal primo contatto all&apos;arrivo in struttura, ti accompagniamo
            con cura e attenzione per offrirti un&apos;esperienza impeccabile.
          </div>
        </aside>
      </div>
    </main>
  );
}
