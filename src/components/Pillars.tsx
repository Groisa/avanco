import { getPillars, getSiteSettings } from "@/lib/content";
import { Icon, type IconName } from "./icons";
import Reveal from "./Reveal";

export default async function Pillars() {
  const [pillars, { headings }] = await Promise.all([getPillars(), getSiteSettings()]);

  return (
    <section className="bg-forest-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
              {headings.pillarsEyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              {headings.pillarsHeadline}
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 5) * 70}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-7 text-center transition-colors hover:bg-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-moss-400/15 text-moss-300">
                  <Icon name={pillar.icon as IconName} className="h-6 w-6" />
                </span>
                <p className="text-sm font-medium leading-snug text-white/90">
                  {pillar.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
