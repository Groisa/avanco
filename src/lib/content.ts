import { prisma, hasDatabase } from "./prisma";
import * as staticData from "@/data/site";

// Every getter below is DB-first: once Supabase is connected and seeded, it
// serves live rows. Until then (or if a query fails), it falls back to the
// static data in src/data/site.ts so the public site never breaks.

export async function getSiteSettings() {
  if (hasDatabase) {
    try {
      const row = await prisma.siteSettings.findUnique({ where: { id: 1 } });
      if (row) {
        return {
          site: {
            name: row.name,
            tagline: row.tagline,
            phone1: row.phone1,
            phone2: row.phone2,
            whatsapp: row.whatsapp,
            whatsappNumberDisplay: row.phone1,
            email: row.email,
            address: { line1: row.addressLine1, line2: row.addressLine2 },
            social: {
              instagram: row.instagram,
              linkedin: row.linkedin,
              facebook: row.facebook,
            },
          },
          hero: {
            eyebrow: row.heroEyebrow,
            headlineWhite: row.heroHeadlineWhite,
            headlineGreen: row.heroHeadlineGreen,
            subtext: row.heroSubtext,
            image: row.heroImage,
          },
        };
      }
    } catch {
      // fall through to static
    }
  }
  return {
    site: staticData.site,
    hero: {
      eyebrow: "Conselheiro Lafaiete — MG",
      headlineWhite: "Licenciamento Ambiental",
      headlineGreen: "sem burocracia.",
      subtext:
        "Seu empreendimento regularizado com segurança, agilidade e suporte técnico especializado — do estudo ao licenciamento, com uma equipe multidisciplinar ao seu lado.",
      image: "/images/drone-represa-serra.jpg",
    },
  };
}

export async function getServices() {
  if (hasDatabase) {
    try {
      const rows = await prisma.service.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch {}
  }
  return staticData.services;
}

export async function getSectors() {
  if (hasDatabase) {
    try {
      const rows = await prisma.sector.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch {}
  }
  return staticData.sectors;
}

export async function getFormations() {
  if (hasDatabase) {
    try {
      const rows = await prisma.formation.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => r.name);
    } catch {}
  }
  return staticData.formations;
}

export async function getClients() {
  if (hasDatabase) {
    try {
      const rows = await prisma.client.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch {}
  }
  return staticData.clients;
}

export async function getGalleryImages() {
  if (hasDatabase) {
    try {
      const rows = await prisma.galleryImage.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch {}
  }
  return staticData.galleryImages;
}

export async function getFaqItems() {
  if (hasDatabase) {
    try {
      const rows = await prisma.faqItem.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch {}
  }
  return staticData.faq;
}

type SpecializedGroup = { subtitle?: string; items: string[] };

export async function getSpecializedBlocks() {
  if (hasDatabase) {
    try {
      const rows = await prisma.specializedBlock.findMany({ orderBy: { order: "asc" } });
      if (rows.length) {
        return rows.map((r) => ({
          title: r.title,
          headline: r.headline,
          intro: r.intro,
          image: r.image,
          groups: r.groups as unknown as SpecializedGroup[],
        }));
      }
    } catch {}
  }
  return staticData.specializedBlocks;
}

export async function getPillars() {
  if (hasDatabase) {
    try {
      const rows = await prisma.pillar.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => ({ title: r.title, icon: r.icon }));
    } catch {}
  }
  return staticData.pillars;
}

export async function getHeroBadges() {
  if (hasDatabase) {
    try {
      const rows = await prisma.heroBadge.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => ({ label: r.label, value: r.value, icon: r.icon }));
    } catch {}
  }
  return null; // Hero.tsx computes default badge values from live counts
}

export async function getWhyUsItems() {
  if (hasDatabase) {
    try {
      const rows = await prisma.whyUsItem.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => r.text);
    } catch {}
  }
  return staticData.whyUs;
}

export async function getProcessSteps() {
  if (hasDatabase) {
    try {
      const rows = await prisma.processStep.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch {}
  }
  return staticData.process;
}

export async function getClientGains() {
  if (hasDatabase) {
    try {
      const rows = await prisma.clientGain.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => r.label);
    } catch {}
  }
  return staticData.clientGains;
}
