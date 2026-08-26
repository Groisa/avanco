"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

// Every SiteSettings text/image column a section editor is allowed to write.
// Acts as an allowlist so a crafted form can't reach unintended columns, and
// keeps the partial update honest: only keys actually present in the
// submitted FormData get written, so saving one section never blanks another.
const EDITABLE_FIELDS = new Set([
  "name", "tagline", "phone1", "phone2", "whatsapp", "email",
  "addressLine1", "addressLine2", "instagram", "linkedin", "facebook",
  "headerLogoDark", "headerLogoLight", "headerCtaLabel",
  "heroEyebrow", "heroHeadlineWhite", "heroHeadlineGreen", "heroSubtext",
  "heroImage", "heroCtaLabel", "heroSecondaryCtaLabel",
  "painPointsHeadline", "painPointsLabel", "painPointsText", "painPointsImage",
  "aboutEyebrow", "aboutHeadline", "aboutText1", "aboutText2",
  "aboutStat1Value", "aboutStat1Label", "aboutStat2Value", "aboutStat2Label",
  "aboutImage1", "aboutImage2",
  "pillarsEyebrow", "pillarsHeadline",
  "servicesEyebrow", "servicesHeadline",
  "blocksEyebrow", "blocksHeadline",
  "sectorsEyebrow", "sectorsHeadline",
  "clientsHeadline",
  "whyUsEyebrow", "whyUsHeadline", "whyUsImage",
  "processEyebrow", "processHeadline",
  "gainsHeadline",
  "galleryEyebrow", "galleryHeadline",
  "faqEyebrow", "faqHeadline", "faqImage",
  "teamEyebrow", "teamHeadline", "teamText", "teamImage",
  "ctaEyebrow", "ctaText", "ctaButtonLabel",
  "contactEyebrow", "contactHeadline", "contactText",
  "footerLogo",
]);

export async function saveSection(formData: FormData) {
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string" && EDITABLE_FIELDS.has(key)) {
      data[key] = value;
    }
  }

  if (Object.keys(data).length === 0) return;

  // Every column has a schema default, so a partial `create` is valid on the
  // off chance the singleton row was never seeded.
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: { id: 1, ...data },
    update: data,
  });

  revalidatePath("/");
  revalidatePath("/admin/secoes", "layout");
}
