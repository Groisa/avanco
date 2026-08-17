import Image from "next/image";
import { sectors } from "@/data/site";
import Reveal from "./Reveal";

export default function Sectors() {
  return (
    <section id="setores" className="bg-sand-100 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-600">
              Setores
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
              Especialização para cada segmento econômico
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {sectors.map((sector, i) => (
            <Reveal key={sector.title} delay={(i % 2) * 100}>
              <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink-900/5 sm:flex-row">
                <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-2/5">
                  <Image
                    src={sector.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-7">
                  <h3 className="font-display text-xl font-medium text-forest-900">
                    {sector.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                    {sector.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
