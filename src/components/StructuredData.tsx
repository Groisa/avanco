import { getSiteSettings, getFaqItems } from "@/lib/content";

const SITE_URL = "https://www.avancoambiental.com.br";

export default async function StructuredData() {
  const [{ site }, faq] = await Promise.all([getSiteSettings(), getFaqItems()]);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.tagline,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.jpg`,
    telephone: site.phone1,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Conselheiro Lafaiete",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "State",
      name: "Minas Gerais",
    },
    sameAs: [site.social.instagram, site.social.linkedin, site.social.facebook].filter(
      (url) => url && !url.endsWith("://instagram.com") && !url.endsWith("://linkedin.com") && !url.endsWith("://facebook.com")
    ),
  };

  const faqPage = faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {faqPage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
      )}
    </>
  );
}
