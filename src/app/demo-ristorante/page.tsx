import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin, Phone } from "lucide-react";

export default function DemoRistorantePage() {
  return (
    <main className="main-ambient min-h-screen overflow-hidden">
      <section className="section-pad">
        <div className="container-pad">
          <div className="glass-strong gradient-border panel-tech rounded-3xl p-6 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.14em] text-cyan-100/90 uppercase">
              Demo vetrina ristorante
            </p>
            <h1 className="heading-display mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Osteria Aurora — cucina contemporanea italiana
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-(--muted)">
              Questa è una demo interna del sito ristorante, utile per mostrare
              stile, struttura e conversione mobile-first.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a href="#prenota" className="btn-primary focus-ring">
                Prenota tavolo
                <CalendarCheck className="h-4 w-4" />
              </a>
              <a href="tel:+390212345678" className="btn-secondary focus-ring">
                Chiama ora
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary focus-ring"
              >
                Indicazioni
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass gradient-border overflow-hidden rounded-3xl p-3">
              <Image
                src="/images/herosala.jpg"
                alt="Sala ristorante elegante"
                width={1200}
                height={800}
                className="h-56 w-full rounded-2xl object-cover"
              />
            </div>
            <div className="glass gradient-border overflow-hidden rounded-3xl p-3">
              <Image
                src="/images/piattosignature.jpg"
                alt="Piatto signature"
                width={1200}
                height={800}
                className="h-56 w-full rounded-2xl object-cover"
              />
            </div>
            <div className="glass gradient-border overflow-hidden rounded-3xl p-3 sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/menudegustazione.jpeg"
                alt="Menu degustazione"
                width={1200}
                height={800}
                className="h-56 w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div
            id="prenota"
            className="mt-8 glass gradient-border rounded-3xl p-6 sm:p-8"
          >
            <h2 className="heading-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Sezione prenotazione (demo)
            </h2>
            <p className="mt-3 text-(--muted)">
              Qui nella versione reale collegheresti il tuo gestionale
              prenotazioni o un form dedicato.
            </p>
            <div className="mt-6">
              <Link href="/" className="btn-secondary focus-ring inline-flex">
                Torna al sito principale
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
