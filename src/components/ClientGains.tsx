import { getClientGains, getSiteSettings } from "@/lib/content";
import { Icon, type IconName } from "./icons";
import Reveal from "./Reveal";

export default async function ClientGains() {
  const [clientGains, { headings }] = await Promise.all([getClientGains(), getSiteSettings()]);

  return (
    <section className="bg-forest-950 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
            {headings.gainsHeadline}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-7">
          {clientGains.map((gain, i) => (
            <Reveal key={gain.label} delay={i * 60}>
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-moss-300">
                  <Icon name={gain.icon as IconName} className="h-5 w-5" />
                </span>
                <p className="text-xs font-medium leading-snug text-white/85 sm:text-sm">
                  {gain.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
