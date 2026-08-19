"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

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

export default function ServicesClient({ services }: { services: ServiceItem[] }) {
  // First render (server + initial client) stays deterministic to avoid a
  // hydration mismatch; the random 9 are picked right after mount instead.
  const [preview, setPreview] = useState(() => services.slice(0, PREVIEW_COUNT));
  const [showAll, setShowAll] = useState(false);
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  useEffect(() => {
    setPreview(pickRandom(services, PREVIEW_COUNT));
  }, [services]);

  const list = showAll ? services : preview;
  const hiddenCount = services.length - PREVIEW_COUNT;

  return (
    <section id="servicos" className="bg-forest-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
              Serviços
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              Soluções ambientais completas para cada etapa do seu projeto
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              A Avanço Ambiental atua em {services.length} frentes de consultoria
              ambiental. Veja abaixo uma seleção de {PREVIEW_COUNT} serviços — ou
              explore a lista completa.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() =>
                  setOpenTitle((current) => (current === service.title ? null : service.title))
                }
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
                  <p
                    className={`mt-2 overflow-hidden text-sm leading-relaxed text-white/75 transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100 ${
                      openTitle === service.title ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {service.description}
                  </p>
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
    </section>
  );
}
