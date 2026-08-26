"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { Icon } from "./icons";

const PREVIEW_COUNT = 9;

type ServiceItem = { title: string; description: string; image: string };

function pickRandom<T>(arr: T[], count: number) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

function ServiceModal({ service, onClose }: { service: ServiceItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-forest-950 shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-forest-950/60 text-white backdrop-blur-sm transition hover:bg-forest-950/80"
        >
          <Icon name="x" className="h-4 w-4" />
        </button>

        <div className="relative h-56 w-full shrink-0 sm:h-72">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 640px) 42rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/10 to-transparent" />
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <h3 className="font-display text-2xl font-medium text-white">{service.title}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/75 sm:text-base">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesClient({
  services,
  eyebrow,
  headline,
  intro,
}: {
  services: ServiceItem[];
  eyebrow: string;
  headline: string;
  intro: string;
}) {
  // First render (server + initial client) stays deterministic to avoid a
  // hydration mismatch; the random 9 are picked right after mount instead.
  const [preview, setPreview] = useState(() => services.slice(0, PREVIEW_COUNT));
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  useEffect(() => {
    setPreview(pickRandom(services, PREVIEW_COUNT));
  }, [services]);

  const list = showAll ? services : preview;
  const hiddenCount = services.length - PREVIEW_COUNT;
  const introText = intro
    .replace("{{total}}", String(services.length))
    .replace("{{preview}}", String(PREVIEW_COUNT));

  return (
    <section id="servicos" className="bg-forest-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {introText}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setSelected(service)}
                className="group relative block h-80 w-full overflow-hidden rounded-2xl text-left"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3 className="font-display text-xl font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/75 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-moss-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Ver mais
                    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                      <path d="M7.5 5 12.5 10 7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              {showAll
                ? "Ver menos serviços"
                : `Ver mais serviços (+${hiddenCount})`}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                <path
                  d="M5 7.5 10 12.5 15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
