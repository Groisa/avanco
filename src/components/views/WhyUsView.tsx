import Image from "next/image";
import Reveal from "../Reveal";

export default function WhyUsView({
  whyUs,
  eyebrow,
  headline,
  image,
}: {
  whyUs: string[];
  eyebrow: string;
  headline: string;
  image: string;
}) {
  const half = Math.ceil(whyUs.length / 2);
  const [colA, colB] = [whyUs.slice(0, half), whyUs.slice(half)];

  return (
    <section className="bg-forest-950 py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt="Profissional da Avanço Ambiental em campo"
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
            {headline}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {[colA, colB].map((column, ci) => (
              <ul key={ci} className="space-y-4">
                {column.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss-400/20 text-moss-300">
                      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                        <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
