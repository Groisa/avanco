"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

const spanClasses = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
];

export default function GalleryClient({
  galleryImages,
}: {
  galleryImages: { src: string; alt: string }[];
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-forest-900 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
              Galeria
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              O nosso trabalho, visto do chão e do alto
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[140px] grid-cols-2 gap-4 sm:auto-rows-[180px] sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <button
              key={image.src}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-xl ${spanClasses[i % spanClasses.length]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/20" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 p-6"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Fechar"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="relative aspect-[4/3] w-full max-w-4xl">
            <Image
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              fill
              sizes="90vw"
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
