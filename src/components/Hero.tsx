import Image from "next/image";
import { getSiteSettings, getHeroBadges, getServices, getFormations, getHeroChecklist } from "@/lib/content";
import { Icon, type IconName } from "./icons";

export default async function Hero() {
  const [{ site, hero, heroCtaLabel, heroSecondaryCtaLabel }, dbBadges, services, formations, heroChecklist] = await Promise.all([
    getSiteSettings(),
    getHeroBadges(),
    getServices(),
    getFormations(),
    getHeroChecklist(),
  ]);

  const badges = dbBadges ?? [
    { label: "Formações técnicas na equipe", value: String(formations.length), icon: "team" },
    { label: "Serviços ambientais prestados", value: String(services.length), icon: "check" },
    { label: "Atendimento em Minas Gerais", value: "MG", icon: "pin" },
  ];

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-950"
    >
      <Image
        src={hero.image}
        alt="Vista aérea de represa cercada por serras em Minas Gerais"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-950/20 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-8 lg:px-10 lg:pt-40">
        <div>
          <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
            <span className="h-px w-8 bg-moss-300" />
            {hero.eyebrow}
          </p>
          <h1 className="max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
            <span className="text-white">{hero.headlineWhite}</span>{" "}
            <span className="text-moss-300">{hero.headlineGreen}</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg text-white/80">
            {hero.subtext}
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {heroChecklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss-400/20 text-moss-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                    <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <div>
              <a
                href={`${site.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar um diagnóstico ambiental gratuito.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-clay-600/30 transition-colors hover:bg-clay-600"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12.04 2c-5.5 0-10 4.5-10 10 0 1.76.46 3.45 1.32 4.95L2 22l5.2-1.36A9.96 9.96 0 0 0 12.04 22c5.5 0 10-4.5 10-10s-4.5-10-10-10Zm5.87 14.3c-.25.7-1.45 1.35-2 1.44-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.25-5.04-4.45-.15-.2-1.2-1.6-1.2-3.06 0-1.45.77-2.17 1.04-2.46.27-.3.6-.37.8-.37h.57c.19 0 .43-.03.66.5.25.6.85 2.06.92 2.21.07.15.11.32.02.52-.09.2-.14.32-.28.49-.14.17-.3.38-.42.5-.14.15-.29.3-.13.6.16.3.71 1.18 1.53 1.92 1.05.94 1.94 1.24 2.24 1.38.3.14.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.24.66-.15.27.1 1.71.81 2 .96.29.15.48.22.55.34.07.13.07.75-.18 1.45Z" />
                </svg>
                {heroCtaLabel}
              </a>
              <p className="mt-2 text-center text-xs text-white/60">
                Resposta rápida via WhatsApp
              </p>
            </div>
            <a
              href="#servicos"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {heroSecondaryCtaLabel}
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-3 lg:flex-col">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-1 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-sm lg:flex-none"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-moss-300">
                <Icon name={badge.icon as IconName} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-medium leading-none text-white">
                  {badge.value}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase leading-tight tracking-wide text-white/70">
                  {badge.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
