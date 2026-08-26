import { getSiteSettings, getHeroBadges, getServices, getFormations, getHeroChecklist } from "@/lib/content";
import HeroView from "./views/HeroView";

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
    <HeroView
      site={site}
      hero={hero}
      heroCtaLabel={heroCtaLabel}
      heroSecondaryCtaLabel={heroSecondaryCtaLabel}
      badges={badges}
      heroChecklist={heroChecklist}
    />
  );
}
