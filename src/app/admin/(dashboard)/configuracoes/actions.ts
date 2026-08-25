"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function saveSettings(formData: FormData) {
  const get = (key: string) => String(formData.get(key) ?? "");

  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      name: get("name"),
      tagline: get("tagline"),
      phone1: get("phone1"),
      phone2: get("phone2"),
      whatsapp: get("whatsapp"),
      email: get("email"),
      addressLine1: get("addressLine1"),
      addressLine2: get("addressLine2"),
      instagram: get("instagram"),
      linkedin: get("linkedin"),
      facebook: get("facebook"),
      heroEyebrow: get("heroEyebrow"),
      heroHeadlineWhite: get("heroHeadlineWhite"),
      heroHeadlineGreen: get("heroHeadlineGreen"),
      heroSubtext: get("heroSubtext"),
      heroImage: get("heroImage"),
      teamImage: get("teamImage"),
      footerLogo: get("footerLogo"),
      servicesEyebrow: get("servicesEyebrow"),
      servicesHeadline: get("servicesHeadline"),
    },
    update: {
      name: get("name"),
      tagline: get("tagline"),
      phone1: get("phone1"),
      phone2: get("phone2"),
      whatsapp: get("whatsapp"),
      email: get("email"),
      addressLine1: get("addressLine1"),
      addressLine2: get("addressLine2"),
      instagram: get("instagram"),
      linkedin: get("linkedin"),
      facebook: get("facebook"),
      heroEyebrow: get("heroEyebrow"),
      heroHeadlineWhite: get("heroHeadlineWhite"),
      heroHeadlineGreen: get("heroHeadlineGreen"),
      heroSubtext: get("heroSubtext"),
      heroImage: get("heroImage"),
      teamImage: get("teamImage"),
      footerLogo: get("footerLogo"),
      servicesEyebrow: get("servicesEyebrow"),
      servicesHeadline: get("servicesHeadline"),
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/configuracoes");
}
