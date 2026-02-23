import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { suites } from "../content";

export const metadata: Metadata = {
  title: "Suite",
};

export default function SuitePage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
          Camere e Ville
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
          Suite disegnate per il lusso contemporaneo
        </h1>
        <p className="mt-4 text-[#5f4d3b]">
          Ogni soluzione è progettata per offrire privacy, comfort elevato e
          un&apos;estetica senza tempo.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {suites.map((suite) => (
          <article
            key={suite.nome}
            className="overflow-hidden rounded-3xl border border-[#deccb4] bg-[#fdf9f3] shadow-[0_16px_30px_rgba(90,70,45,0.07)]"
          >
            <Image
              src={suite.image}
              alt={suite.nome}
              width={1400}
              height={900}
              className="aspect-16/10 w-full object-cover"
            />
            <div className="space-y-3 p-6">
              <h2 className="heading-display text-2xl text-[#352617]">
                {suite.nome}
              </h2>
              <p className="text-sm leading-relaxed text-[#5f4d3b]">
                {suite.descrizione}
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7e5a36]">
                {suite.prezzo}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/demo-hotel-villa/prenotazione"
          className="rounded-full bg-[#3f2f1f] px-6 py-3 text-sm font-semibold text-[#f6ecdd]"
        >
          Prenota la tua suite
        </Link>
      </div>
    </main>
  );
}
