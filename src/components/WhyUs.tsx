import { getWhyUsItems, getSiteSettings } from "@/lib/content";
import WhyUsView from "./views/WhyUsView";

export default async function WhyUs() {
  const [whyUs, { headings }] = await Promise.all([getWhyUsItems(), getSiteSettings()]);

  return (
    <WhyUsView
      whyUs={whyUs}
      eyebrow={headings.whyUsEyebrow}
      headline={headings.whyUsHeadline}
      image={headings.whyUsImage}
    />
  );
}
