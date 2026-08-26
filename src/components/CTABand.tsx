import { getSiteSettings } from "@/lib/content";
import CTABandView from "./views/CTABandView";

export default async function CTABand() {
  const { site, ctaEyebrow, ctaText, ctaButtonLabel } = await getSiteSettings();

  return (
    <CTABandView
      whatsapp={site.whatsapp}
      eyebrow={ctaEyebrow}
      text={ctaText}
      buttonLabel={ctaButtonLabel}
    />
  );
}
