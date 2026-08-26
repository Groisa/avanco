import { getServices, getSiteSettings } from "@/lib/content";
import ServicesClient from "./ServicesClient";

export default async function Services() {
  const [services, { servicesEyebrow, servicesHeadline, servicesIntro }] = await Promise.all([
    getServices(),
    getSiteSettings(),
  ]);
  return (
    <ServicesClient
      services={services}
      eyebrow={servicesEyebrow}
      headline={servicesHeadline}
      intro={servicesIntro}
    />
  );
}
