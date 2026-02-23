import type { Metadata } from "next";
import Link from "next/link";
import { restaurantMeta } from "../content";

export const metadata: Metadata = {
  title: "Contatti",
};

export default function ContattiRistorantePage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <section className="rounded-3xl border border-[#7c5b35]/45 bg-[#17110b] p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
            Contatti
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
            Parla con Atelier Nove
          </h1>
          <p className="mt-4 text-[#d9c4a8]">
            Per prenotazioni, eventi privati o richieste personalizzate, il
            nostro team è a disposizione.
          </p>

          <form
            className="mt-8 grid gap-4"
            aria-label="Modulo contatti ristorante"
          >
            <input
              className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
              placeholder="Nome e cognome"
            />
            <input
              className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
              placeholder="Email"
              type="email"
            />
            <input
              className="rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
              placeholder="Telefono"
            />
            <textarea
              className="min-h-28 rounded-xl border border-[#7c5b35]/45 bg-[#0f0a06] px-4 py-3 text-sm text-[#f1e3cd] outline-none"
              placeholder="Raccontaci la tua richiesta"
            />
            <button
              type="button"
              className="rounded-full bg-[#d8a86f] px-6 py-3 text-sm font-semibold text-[#2b1d11]"
            >
              Invia richiesta
            </button>
          </form>

          <Link
            href="/demo-ristorante/prenotazione"
            className="mt-4 inline-flex rounded-full border border-[#b98a55] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f2e1c8]"
          >
            Vai alla prenotazione completa
          </Link>
        </section>

        <aside className="rounded-3xl border border-[#7c5b35]/45 bg-[#1b130c] p-7 sm:p-10">
          <h2 className="heading-display text-3xl text-[#f2debf]">
            Informazioni utili
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#cbb69a]">
            <li>Telefono: {restaurantMeta.phone}</li>
            <li>Email: {restaurantMeta.email}</li>
            <li>Città: {restaurantMeta.city}</li>
            <li>Aperti: Martedì - Domenica</li>
            <li>Primo turno: 19:15 · Secondo turno: 21:30</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
