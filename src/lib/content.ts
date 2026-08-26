import { prisma, hasDatabase } from "./prisma";
import * as staticData from "@/data/site";

// Every getter below is DB-first: once Supabase is connected and seeded, it
// serves live rows. The static data in src/data/site.ts is the fallback for
// the two cases where there is genuinely nothing to read — the database isn't
// configured yet, or the table hasn't been seeded.
//
// A failed query is NOT one of those cases, so it rethrows. Swallowing it used
// to return the original hardcoded copy, and because the public page is
// statically cached, that wrong render got stored as the new page: an edit
// would apply, then "revert" to the pre-edit text and stay there. Throwing
// instead makes Next keep serving the last good cached page and try again
// later. Failures are logged either way, so they show up in Vercel's logs.

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
          teamImage: row.teamImage,
          footerLogo: row.footerLogo,
          servicesEyebrow: row.servicesEyebrow,
          servicesHeadline: row.servicesHeadline,
          heroCtaLabel: row.heroCtaLabel,
          heroSecondaryCtaLabel: row.heroSecondaryCtaLabel,
          ctaEyebrow: row.ctaEyebrow,
          ctaText: row.ctaText,
          ctaButtonLabel: row.ctaButtonLabel,
          about: {
            eyebrow: row.aboutEyebrow,
            headline: row.aboutHeadline,
            text1: row.aboutText1,
            text2: row.aboutText2,
            stat1Value: row.aboutStat1Value,
            stat1Label: row.aboutStat1Label,
            stat2Value: row.aboutStat2Value,
            stat2Label: row.aboutStat2Label,
            image1: row.aboutImage1,
            image2: row.aboutImage2,
          },
          headerLogoDark: row.headerLogoDark,
          headerLogoLight: row.headerLogoLight,
          headerCtaLabel: row.headerCtaLabel,
          painPoints: {
            headline: row.painPointsHeadline,
            label: row.painPointsLabel,
            text: row.painPointsText,
            image: row.painPointsImage,
          },
          headings: {
            pillarsEyebrow: row.pillarsEyebrow,
            pillarsHeadline: row.pillarsHeadline,
            blocksEyebrow: row.blocksEyebrow,
            blocksHeadline: row.blocksHeadline,
            sectorsEyebrow: row.sectorsEyebrow,
            sectorsHeadline: row.sectorsHeadline,
            clientsHeadline: row.clientsHeadline,
            whyUsEyebrow: row.whyUsEyebrow,
            whyUsHeadline: row.whyUsHeadline,
            whyUsImage: row.whyUsImage,
            processEyebrow: row.processEyebrow,
            processHeadline: row.processHeadline,
            gainsHeadline: row.gainsHeadline,
            galleryEyebrow: row.galleryEyebrow,
            galleryHeadline: row.galleryHeadline,
            faqEyebrow: row.faqEyebrow,
            faqHeadline: row.faqHeadline,
            faqImage: row.faqImage,
            teamEyebrow: row.teamEyebrow,
            teamHeadline: row.teamHeadline,
            teamText: row.teamText,
            contactEyebrow: row.contactEyebrow,
            contactHeadline: row.contactHeadline,
            contactText: row.contactText,
          },
        };
      }
    } catch (e) {
      console.error("[content] getSiteSettings failed:", e);
      throw e;
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
    teamImage: "/images/equipe-campo-02.jpg",
    footerLogo: "/brand/logo-white.png",
    servicesEyebrow: "Serviços",
    servicesHeadline: "Soluções ambientais completas para cada etapa do seu projeto",
    heroCtaLabel: "Solicitar diagnóstico gratuito",
    heroSecondaryCtaLabel: "Conhecer serviços",
    ctaEyebrow: "Solicite um diagnóstico técnico",
    ctaText:
      "Não espere receber uma notificação ambiental para agir. Nossa equipe está pronta para analisar seu empreendimento e indicar a melhor solução.",
    ctaButtonLabel: "Falar com um especialista",
    about: {
      eyebrow: "Quem somos",
      headline: "Consultoria ambiental próxima, técnica e comprometida com resultado",
      text1:
        "A Avanço Ambiental reúne profissionais experientes para viabilizar projetos socioambientais multidisciplinares. Para cada segmento econômico, entendemos as demandas específicas do seu negócio e construímos soluções sob medida — sempre com uma relação próxima e transparente com clientes e parceiros.",
      text2:
        "Do estudo técnico ao acompanhamento em campo, conduzimos cada etapa com agilidade, buscando resultados rápidos e efetivos que impulsionam seu negócio com práticas ambientais sustentáveis.",
      stat1Value: "4",
      stat1Label: "Especialistas multidisciplinares",
      stat2Value: "MG",
      stat2Label: "Atendimento em todo o estado",
      image1: "/images/campo-sondagem-solo.jpg",
      image2: "/images/campo-viveiro-mudas.jpg",
    },
    headerLogoDark: "/brand/logo-dark.png",
    headerLogoLight: "/brand/logo-white.png",
    headerCtaLabel: "Fale com especialista",
    painPoints: {
      headline:
        "Enquanto você cuida do seu negócio, nós cuidamos da sua regularização ambiental.",
      label: "Problemas ambientais podem gerar:",
      text: "Nossa equipe acompanha todo o processo junto aos órgãos ambientais para que sua empresa continue crescendo de forma segura.",
      image: "/images/campo-retroescavadeira.jpg",
    },
    headings: {
      pillarsEyebrow: "Especialidades",
      pillarsHeadline: "Somos especialistas em soluções ambientais",
      blocksEyebrow: "Serviços de campo",
      blocksHeadline: "Investigação, execução e precisão em cada etapa",
      sectorsEyebrow: "Segmentos",
      sectorsHeadline: "Atendemos diversos segmentos",
      clientsHeadline: "Empresas e produtores que confiam na Avanço Ambiental",
      whyUsEyebrow: "Por que escolher a Avanço Ambiental?",
      whyUsHeadline: "Uma equipe técnica próxima do seu projeto, do início ao fim",
      whyUsImage: "/images/equipe-campo-01.jpg",
      processEyebrow: "Nosso método",
      processHeadline: "Método de trabalho",
      gainsHeadline: "O que nossos clientes ganham",
      galleryEyebrow: "Galeria",
      galleryHeadline: "O nosso trabalho, visto do chão e do alto",
      faqEyebrow: "Perguntas frequentes",
      faqHeadline: "Dúvidas frequentes",
      faqImage: "/images/campo-viveiro-mudas.jpg",
      teamEyebrow: "Equipe",
      teamHeadline: "Formações multidisciplinares, presentes em campo",
      teamText:
        "Nossa equipe reúne profissionais de diferentes formações técnicas, trabalhando juntos para viabilizar o seu projeto do início ao fim.",
      contactEyebrow: "Contato",
      contactHeadline: "Vamos avançar juntos com o seu projeto",
      contactText:
        "Fale com a nossa equipe e receba uma proposta sob medida para a sua demanda ambiental.",
    },
  };
}

export async function getServices() {
  if (hasDatabase) {
    try {
      const rows = await prisma.service.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch (e) {
      console.error("[content] getServices failed:", e);
      throw e;
    }
  }
  return staticData.services;
}

export async function getSectors() {
  if (hasDatabase) {
    try {
      const rows = await prisma.sector.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch (e) {
      console.error("[content] getSectors failed:", e);
      throw e;
    }
  }
  return staticData.sectors;
}

export async function getFormations() {
  if (hasDatabase) {
    try {
      const rows = await prisma.formation.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => r.name);
    } catch (e) {
      console.error("[content] getFormations failed:", e);
      throw e;
    }
  }
  return staticData.formations;
}

export async function getClients() {
  if (hasDatabase) {
    try {
      const rows = await prisma.client.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch (e) {
      console.error("[content] getClients failed:", e);
      throw e;
    }
  }
  return staticData.clients;
}

export async function getGalleryImages() {
  if (hasDatabase) {
    try {
      const rows = await prisma.galleryImage.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch (e) {
      console.error("[content] getGalleryImages failed:", e);
      throw e;
    }
  }
  return staticData.galleryImages;
}

export async function getFaqItems() {
  if (hasDatabase) {
    try {
      const rows = await prisma.faqItem.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch (e) {
      console.error("[content] getFaqItems failed:", e);
      throw e;
    }
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
    } catch (e) {
      console.error("[content] getSpecializedBlocks failed:", e);
      throw e;
    }
  }
  return staticData.specializedBlocks;
}

export async function getPillars() {
  if (hasDatabase) {
    try {
      const rows = await prisma.pillar.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => ({ title: r.title, icon: r.icon }));
    } catch (e) {
      console.error("[content] getPillars failed:", e);
      throw e;
    }
  }
  return staticData.pillars;
}

export async function getHeroBadges() {
  if (hasDatabase) {
    try {
      const rows = await prisma.heroBadge.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => ({ label: r.label, value: r.value, icon: r.icon }));
    } catch (e) {
      console.error("[content] getHeroBadges failed:", e);
      throw e;
    }
  }
  return null; // Hero.tsx computes default badge values from live counts
}

export async function getWhyUsItems() {
  if (hasDatabase) {
    try {
      const rows = await prisma.whyUsItem.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => r.text);
    } catch (e) {
      console.error("[content] getWhyUsItems failed:", e);
      throw e;
    }
  }
  return staticData.whyUs;
}

export async function getProcessSteps() {
  if (hasDatabase) {
    try {
      const rows = await prisma.processStep.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch (e) {
      console.error("[content] getProcessSteps failed:", e);
      throw e;
    }
  }
  return staticData.process;
}

export async function getNavItems() {
  if (hasDatabase) {
    try {
      const rows = await prisma.navItem.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => ({ label: r.label, href: r.href }));
    } catch (e) {
      console.error("[content] getNavItems failed:", e);
      throw e;
    }
  }
  return staticData.nav;
}

export async function getHeroChecklist() {
  if (hasDatabase) {
    try {
      const rows = await prisma.heroChecklistItem.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => r.text);
    } catch (e) {
      console.error("[content] getHeroChecklist failed:", e);
      throw e;
    }
  }
  return staticData.heroChecklist;
}

export async function getPainPoints() {
  if (hasDatabase) {
    try {
      const rows = await prisma.painPoint.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => r.text);
    } catch (e) {
      console.error("[content] getPainPoints failed:", e);
      throw e;
    }
  }
  return staticData.painPoints;
}

const STATIC_DIFFERENTIALS = [
  { title: "Equipe multidisciplinar", description: "Engenharia florestal, ambiental, civil e geologia sob o mesmo teto." },
  { title: "Presença em campo", description: "Sondagem, coleta e monitoramento acompanhados de perto, sítio por sítio." },
  { title: "Do estudo à licença", description: "Condução completa do processo junto aos órgãos ambientais." },
  { title: "Proximidade real", description: "Relação próxima e transparente, com soluções sob medida para cada demanda." },
];

export async function getDifferentials() {
  if (hasDatabase) {
    try {
      const rows = await prisma.differential.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => ({ title: r.title, description: r.description }));
    } catch (e) {
      console.error("[content] getDifferentials failed:", e);
      throw e;
    }
  }
  return STATIC_DIFFERENTIALS;
}

export async function getFeatureStrip() {
  if (hasDatabase) {
    try {
      const rows = await prisma.featureStripItem.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch (e) {
      console.error("[content] getFeatureStrip failed:", e);
      throw e;
    }
  }
  return staticData.featureStrip;
}

const CLIENT_GAIN_ICONS = ["shield", "clock", "risk", "heart", "expert", "paper", "clipboard"];

export async function getClientGains() {
  if (hasDatabase) {
    try {
      const rows = await prisma.clientGain.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows.map((r) => ({ label: r.label, icon: r.icon }));
    } catch (e) {
      console.error("[content] getClientGains failed:", e);
      throw e;
    }
  }
  return staticData.clientGains.map((label, i) => ({
    label,
    icon: CLIENT_GAIN_ICONS[i % CLIENT_GAIN_ICONS.length],
  }));
}
