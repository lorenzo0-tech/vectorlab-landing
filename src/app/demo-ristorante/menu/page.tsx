import type { Metadata } from "next";
import Image from "next/image";
import { getRestaurantDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export const metadata: Metadata = {
  title: "Menu",
};

export default async function MenuPage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { tastingMenus } = getRestaurantDemoContent(locale);

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a273]">
            {isEn ? "Tasting Menu" : "Menu Degustazione"}
          </p>
          <h1 className="heading-display mt-3 text-4xl text-[#f7e7d2] sm:text-5xl">
            {isEn
              ? "Journeys crafted to move you"
              : "Percorsi pensati per emozionare"}
          </h1>
          <p className="mt-4 text-[#d9c4a8]">
            {isEn
              ? "Each menu is rooted in Italian seasonality and presented with tailored service."
              : "Ogni menu nasce dalla stagionalità italiana e viene raccontato con un servizio sartoriale."}
          </p>

          <div className="mt-8 space-y-4">
            {tastingMenus.map((item) => (
              <details
                key={item.name}
                className="group rounded-2xl border border-[#7c5b35]/45 bg-[#17110b] p-5 transition open:border-[#b98a55]/70 open:bg-[#1a120c]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98a55]/55">
                  <div className="pt-0.5">
                    <h2 className="heading-display text-2xl text-[#f2debf]">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm text-[#cbb69a]">
                      {item.description}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#b89467]">
                      {isEn
                        ? "Open to view all courses"
                        : "Premi per vedere tutte le portate"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <p className="text-sm font-semibold text-[#ddb07b]">
                      {item.price}
                    </p>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#b98a55]/60 text-[#ddb07b] transition duration-300 group-open:rotate-180 group-open:bg-[#25180d]">
                      ▾
                    </span>
                  </div>
                </summary>

                <div className="mt-4 border-t border-[#7c5b35]/35 pt-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#ddb07b]">
                    {isEn ? "Included courses" : "Portate incluse"}
                  </p>
                  <ol className="mt-3 space-y-2.5 text-sm text-[#d7c3a7]">
                    {item.courses.map((course, index) => (
                      <li key={course} className="flex items-start gap-2">
                        <span className="mt-0.5 text-xs font-semibold text-[#cfa473]">
                          {index + 1}.
                        </span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#7c5b35]/45">
          <Image
            src="/images/restaurant-real/dish-plating.jpg"
            alt={
              isEn
                ? "Tasting dishes from a fine-dining restaurant"
                : "Piatti degustazione di ristorante di alta cucina"
            }
            width={1400}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
