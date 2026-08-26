import { getSiteSettings, getNavItems } from "@/lib/content";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const [{ site, headerLogoDark, headerLogoLight, headerCtaLabel }, nav] = await Promise.all([
    getSiteSettings(),
    getNavItems(),
  ]);

  return (
    <HeaderClient
      whatsapp={site.whatsapp}
      siteName={site.name}
      nav={nav}
      logoDark={headerLogoDark}
      logoLight={headerLogoLight}
      ctaLabel={headerCtaLabel}
    />
  );
}
