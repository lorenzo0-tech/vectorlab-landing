import type { Metadata } from "next";
import Image from "next/image";
import { getHotelDemoContent } from "../content";
import { getServerLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return {
    title: locale === "en" ? "Gallery" : "Galleria",
    description:
      locale === "en"
        ? "Photo gallery of suites, architecture, and luxury spaces at Villa Aurea."
        : "Galleria fotografica di suite, architettura e spazi luxury di Villa Aurea.",
  };
}

export default async function GalleriaPage() {
  const locale = await getServerLocale();
  const isEn = locale === "en";
  const { gallery } = getHotelDemoContent(locale);

  const galleryIntro = isEn
    ? "A visual sequence designed to make the property feel tactile, luminous, and unmistakably high-end before the guest even asks for availability."
    : "Una sequenza visiva pensata per far percepire la struttura come materica, luminosa e inequivocabilmente di fascia alta prima ancora della richiesta disponibilità.";

  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
          {isEn ? "Gallery" : "Galleria"}
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
          {isEn
            ? "Get inspired before you arrive"
            : "Lasciati ispirare prima di arrivare"}
        </h1>
        <p className="mt-4 max-w-3xl text-[#5f4d3b] sm:text-lg sm:leading-8">
          {isEn
            ? "Bright spaces, precious materials, and exclusive views: a preview of the beauty that awaits you at Villa Aurea."
            : "Ambienti luminosi, materiali preziosi e scorci esclusivi: un&apos;anteprima della bellezza che ti aspetta a Villa Aurea."}
        </p>
        <div className="mt-6 rounded-[2rem] border border-[#deccb4] bg-[#fbf7ef] p-6 text-sm leading-8 text-[#5f4d3b]">
          {galleryIntro}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className={
              "group relative overflow-hidden rounded-[2rem] border border-[#deccb4] bg-[#fdf9f3] shadow-[0_16px_34px_rgba(90,70,45,0.06)] " +
              (index === 0 ? "sm:col-span-2 lg:col-span-2" : "")
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className={
                "w-full object-cover transition duration-700 group-hover:scale-105 " +
                (index === 0 ? "aspect-[16/9]" : "aspect-4/3")
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/28 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm text-[#fff8ee]">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
