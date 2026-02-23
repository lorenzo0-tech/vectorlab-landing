import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "../content";

export const metadata: Metadata = {
  title: "Galleria",
};

export default function GalleriaPage() {
  return (
    <main className="container-pad py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a46]">
          Galleria
        </p>
        <h1 className="heading-display mt-3 text-4xl text-[#352617] sm:text-5xl">
          Lasciati ispirare prima di arrivare
        </h1>
        <p className="mt-4 text-[#5f4d3b]">
          Ambienti luminosi, materiali preziosi e scorci esclusivi:
          un&apos;anteprima della bellezza che ti aspetta a Villa Aurea.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className="overflow-hidden rounded-3xl border border-[#deccb4] bg-[#fdf9f3]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="aspect-4/3 w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
