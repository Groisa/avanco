import Image from "next/image";
import { getPainPoints, getSiteSettings } from "@/lib/content";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default async function PainPoints() {
  const [painPoints, { painPoints: copy }] = await Promise.all([
    getPainPoints(),
    getSiteSettings(),
  ]);

  return (
    <section className="bg-sand-100 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src={copy.image}
              alt="Especialista da Avanço Ambiental acompanhando obra em campo"
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
            {copy.headline}
          </h2>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-clay-600">
            {copy.label}
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm ring-1 ring-ink-900/5"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay-500/10 text-clay-600">
                  <Icon name="x" className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-700">
            {copy.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
