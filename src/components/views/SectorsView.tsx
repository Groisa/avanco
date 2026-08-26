import Image from "next/image";
import { Icon, type IconName } from "../icons";
import Reveal from "../Reveal";

export default function SectorsView({
  sectors,
  eyebrow,
  headline,
}: {
  sectors: { title: string; description: string; image: string; icon: string }[];
  eyebrow: string;
  headline: string;
}) {
  return (
    <section id="segmentos" className="bg-sand-300 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-600">
              {eyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
              {headline}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {sectors.map((sector, i) => (
            <Reveal key={sector.title} delay={(i % 4) * 90}>
              <article className="group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl">
                <Image
                  src={sector.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/25 to-transparent" />
                <div className="relative flex flex-col items-center gap-2 p-4 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                    <Icon name={sector.icon as IconName} className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-semibold leading-snug text-white">
                    {sector.title}
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
