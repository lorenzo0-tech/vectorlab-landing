import type { Metadata } from "next";
import Link from "next/link";
import { hotelMeta } from "../content";

export const metadata: Metadata = {
  title: "Contatti",
};

export default function ContattiPage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <section className="rounded-3xl border border-[#deccb4] bg-[#fdf9f3] p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
            Contatti & Prenotazioni
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
            Parla con il nostro concierge
          </h1>
          <p className="mt-4 text-[#5f4d3b]">
            Raccontaci come immagini il tuo soggiorno: riceverai una proposta
            dedicata con le migliori soluzioni disponibili.
          </p>

          <form
            className="mt-8 grid gap-4"
            aria-label="Modulo richiesta disponibilità"
          >
            <input
              className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
              placeholder="Nome e cognome"
            />
            <input
              className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
              placeholder="Email"
              type="email"
            />
            <input
              className="rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
              placeholder="Telefono"
            />
            <textarea
              className="min-h-28 rounded-xl border border-[#d8c4a8] bg-white px-4 py-3 text-sm text-[#3a2f23] outline-none"
              placeholder="Date, numero ospiti, preferenze"
            />
            <button
              type="button"
              className="rounded-full bg-[#3f2f1f] px-6 py-3 text-sm font-semibold text-[#f6ecdd]"
            >
              Invia richiesta
            </button>
          </form>

          <Link
            href="/demo-hotel-villa/prenotazione"
            className="mt-4 inline-flex rounded-full border border-[#bda17f] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#3d2e1f]"
          >
            Vai alla prenotazione completa
          </Link>
        </section>

        <aside className="rounded-3xl border border-[#deccb4] bg-[#f4ede3] p-7 sm:p-10">
          <h2 className="heading-display text-3xl text-[#352617]">
            Concierge dedicato
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#5f4d3b]">
            <li>Telefono: {hotelMeta.phone}</li>
            <li>Email: {hotelMeta.email}</li>
            <li>Location: {hotelMeta.city}</li>
            <li>Check-in: dalle 15:00 · Check-out: entro 11:00</li>
            <li>Transfer privato disponibile su richiesta</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
