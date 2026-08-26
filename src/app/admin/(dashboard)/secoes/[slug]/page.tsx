import { notFound } from "next/navigation";
import { findSection } from "@/lib/sections";
import { getAvailableImages } from "@/lib/images";
import { hasDatabase } from "@/lib/prisma";
import { SetupNotice } from "@/components/admin/ui";
import SectionWorkbench, { type WorkbenchData } from "@/components/admin/SectionWorkbench";
import {
  getSiteSettings, getNavItems, getHeroChecklist, getHeroBadges,
  getDifferentials, getPainPoints, getPillars, getServices,
  getSpecializedBlocks, getSectors, getClients, getWhyUsItems,
  getProcessSteps, getClientGains, getGalleryImages, getFaqItems,
  getFeatureStrip, getFormations,
} from "@/lib/content";

export default async function SecaoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = findSection(slug);
  if (!section) notFound();

  const [
    settings, nav, heroChecklist, dbBadges, differentials, painPoints,
    pillars, services, blocks, sectors, clients, whyUs, process,
    clientGains, gallery, faq, featureStrip, formations,
  ] = await Promise.all([
    getSiteSettings(), getNavItems(), getHeroChecklist(), getHeroBadges(),
    getDifferentials(), getPainPoints(), getPillars(), getServices(),
    getSpecializedBlocks(), getSectors(), getClients(), getWhyUsItems(),
    getProcessSteps(), getClientGains(), getGalleryImages(), getFaqItems(),
    getFeatureStrip(), getFormations(),
  ]);

  const { site, hero, about, headings, painPoints: painCopy } = settings;

  // The editor drives a flat name -> value draft, matching the SiteSettings
  // column names so the partial save action can write them straight back.
  const flat: Record<string, string> = {
    name: site.name,
    tagline: site.tagline,
    phone1: site.phone1,
    phone2: site.phone2,
    whatsapp: site.whatsapp,
    email: site.email,
    addressLine1: site.address.line1,
    addressLine2: site.address.line2,
    instagram: site.social.instagram,
    linkedin: site.social.linkedin,
    facebook: site.social.facebook,
    headerLogoDark: settings.headerLogoDark,
    headerLogoLight: settings.headerLogoLight,
    headerCtaLabel: settings.headerCtaLabel,
    heroEyebrow: hero.eyebrow,
    heroHeadlineWhite: hero.headlineWhite,
    heroHeadlineGreen: hero.headlineGreen,
    heroSubtext: hero.subtext,
    heroImage: hero.image,
    heroCtaLabel: settings.heroCtaLabel,
    heroSecondaryCtaLabel: settings.heroSecondaryCtaLabel,
    painPointsHeadline: painCopy.headline,
    painPointsLabel: painCopy.label,
    painPointsText: painCopy.text,
    painPointsImage: painCopy.image,
    aboutEyebrow: about.eyebrow,
    aboutHeadline: about.headline,
    aboutText1: about.text1,
    aboutText2: about.text2,
    aboutStat1Value: about.stat1Value,
    aboutStat1Label: about.stat1Label,
    aboutStat2Value: about.stat2Value,
    aboutStat2Label: about.stat2Label,
    aboutImage1: about.image1,
    aboutImage2: about.image2,
    servicesEyebrow: settings.servicesEyebrow,
    servicesHeadline: settings.servicesHeadline,
    ctaEyebrow: settings.ctaEyebrow,
    ctaText: settings.ctaText,
    ctaButtonLabel: settings.ctaButtonLabel,
    teamImage: settings.teamImage,
    footerLogo: settings.footerLogo,
    ...headings,
  };

  const badges = dbBadges ?? [
    { label: "Formações técnicas na equipe", value: String(formations.length), icon: "team" },
    { label: "Serviços ambientais prestados", value: String(services.length), icon: "check" },
    { label: "Atendimento em Minas Gerais", value: "MG", icon: "pin" },
  ];

  const data: WorkbenchData = {
    settings: flat,
    site,
    nav,
    heroChecklist,
    badges,
    differentials,
    painPoints,
    pillars,
    services,
    blocks,
    sectors,
    clients,
    whyUs,
    process,
    clientGains,
    gallery,
    faq,
    featureStrip,
    formations,
  };

  return (
    <div>
      {!hasDatabase && <SetupNotice />}
      <SectionWorkbench section={section} data={data} images={getAvailableImages()} />
    </div>
  );
}
