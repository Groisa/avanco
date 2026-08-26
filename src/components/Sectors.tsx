import { getSectors, getSiteSettings } from "@/lib/content";
import SectorsView from "./views/SectorsView";

export default async function Sectors() {
  const [sectors, { headings }] = await Promise.all([getSectors(), getSiteSettings()]);

  return (
    <SectorsView
      sectors={sectors}
      eyebrow={headings.sectorsEyebrow}
      headline={headings.sectorsHeadline}
    />
  );
}
