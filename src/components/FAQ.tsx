import { getFaqItems, getSiteSettings } from "@/lib/content";
import FAQClient from "./FAQClient";

export default async function FAQ() {
  const [faq, { headings }] = await Promise.all([getFaqItems(), getSiteSettings()]);
  return (
    <FAQClient
      faq={faq}
      eyebrow={headings.faqEyebrow}
      headline={headings.faqHeadline}
      image={headings.faqImage}
    />
  );
}
