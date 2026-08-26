import { getSiteSettings } from "@/lib/content";
import ContactClient from "./ContactClient";

export default async function Contact() {
  const { site, headings } = await getSiteSettings();
  return (
    <ContactClient
      site={site}
      eyebrow={headings.contactEyebrow}
      headline={headings.contactHeadline}
      text={headings.contactText}
    />
  );
}
