import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as data from "../src/data/site";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database with current static content...");

  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      name: data.site.name,
      tagline: data.site.tagline,
      phone1: data.site.phone1,
      phone2: data.site.phone2,
      whatsapp: data.site.whatsapp,
      email: data.site.email,
      addressLine1: data.site.address.line1,
      addressLine2: data.site.address.line2,
      instagram: data.site.social.instagram,
      linkedin: data.site.social.linkedin,
      facebook: data.site.social.facebook,
      heroEyebrow: "Conselheiro Lafaiete — MG",
      heroHeadlineWhite: "Licenciamento Ambiental",
      heroHeadlineGreen: "sem burocracia.",
      heroSubtext:
        "Seu empreendimento regularizado com segurança, agilidade e suporte técnico especializado — do estudo ao licenciamento, com uma equipe multidisciplinar ao seu lado.",
      heroImage: "/images/drone-represa-serra.jpg",
    },
    update: {},
  });

  if ((await prisma.service.count()) === 0) {
    await prisma.service.createMany({
      data: data.services.map((s, order) => ({ ...s, order })),
    });
  }

  if ((await prisma.sector.count()) === 0) {
    await prisma.sector.createMany({
      data: data.sectors.map((s, order) => ({ ...s, order })),
    });
  }

  if ((await prisma.formation.count()) === 0) {
    await prisma.formation.createMany({
      data: data.formations.map((name, order) => ({ name, order })),
    });
  }

  if ((await prisma.client.count()) === 0) {
    await prisma.client.createMany({
      data: data.clients.map((c, order) => ({ ...c, order })),
    });
  }

  if ((await prisma.galleryImage.count()) === 0) {
    await prisma.galleryImage.createMany({
      data: data.galleryImages.map((g, order) => ({ ...g, order })),
    });
  }

  if ((await prisma.faqItem.count()) === 0) {
    await prisma.faqItem.createMany({
      data: data.faq.map((f, order) => ({ ...f, order })),
    });
  }

  if ((await prisma.specializedBlock.count()) === 0) {
    for (const [order, block] of data.specializedBlocks.entries()) {
      await prisma.specializedBlock.create({
        data: {
          title: block.title,
          headline: block.headline,
          intro: block.intro,
          image: block.image,
          order,
          groups: block.groups,
        },
      });
    }
  }

  if ((await prisma.pillar.count()) === 0) {
    await prisma.pillar.createMany({
      data: data.pillars.map((p, order) => ({ ...p, order })),
    });
  }

  if ((await prisma.whyUsItem.count()) === 0) {
    await prisma.whyUsItem.createMany({
      data: data.whyUs.map((text, order) => ({ text, order })),
    });
  }

  if ((await prisma.processStep.count()) === 0) {
    await prisma.processStep.createMany({
      data: data.process.map((p, order) => ({ ...p, order })),
    });
  }

  if ((await prisma.clientGain.count()) === 0) {
    const icons = ["shield", "clock", "risk", "heart", "expert", "paper", "clipboard"];
    await prisma.clientGain.createMany({
      data: data.clientGains.map((label, order) => ({
        label,
        icon: icons[order % icons.length],
        order,
      })),
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
