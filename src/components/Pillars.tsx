import { getPillars, getSiteSettings } from "@/lib/content";
import PillarsView from "./views/PillarsView";

export default async function Pillars() {
  const [pillars, { headings }] = await Promise.all([getPillars(), getSiteSettings()]);

  return (
    <PillarsView
      pillars={pillars}
      eyebrow={headings.pillarsEyebrow}
      headline={headings.pillarsHeadline}
    />
  );
}
