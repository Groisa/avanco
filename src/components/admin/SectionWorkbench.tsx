"use client";

import SectionEditor, { type SectionField } from "./SectionEditor";
import HeroView from "@/components/views/HeroView";
import DifferentialsView from "@/components/views/DifferentialsView";
import PainPointsView from "@/components/views/PainPointsView";
import AboutView from "@/components/views/AboutView";
import PillarsView from "@/components/views/PillarsView";
import SpecializedBlocksView from "@/components/views/SpecializedBlocksView";
import SectorsView from "@/components/views/SectorsView";
import ClientsCarouselView from "@/components/views/ClientsCarouselView";
import WhyUsView from "@/components/views/WhyUsView";
import ProcessView from "@/components/views/ProcessView";
import ClientGainsView from "@/components/views/ClientGainsView";
import TeamView from "@/components/views/TeamView";
import CTABandView from "@/components/views/CTABandView";
import FeatureStripView from "@/components/views/FeatureStripView";
import ServicesClient from "@/components/ServicesClient";
import GalleryClient from "@/components/GalleryClient";
import FAQClient from "@/components/FAQClient";
import ContactClient from "@/components/ContactClient";
import HeaderClient from "@/components/HeaderClient";
import type { SectionMeta } from "@/lib/sections";

export type WorkbenchData = {
  settings: Record<string, string>;
  site: {
    name: string;
    tagline: string;
    whatsapp: string;
    phone1: string;
    phone2: string;
    email: string;
    address: { line1: string; line2: string };
    social: { instagram: string; linkedin: string; facebook: string };
  };
  nav: { label: string; href: string }[];
  heroChecklist: string[];
  badges: { label: string; value: string; icon: string }[];
  differentials: { title: string; description: string }[];
  painPoints: string[];
  pillars: { title: string; icon: string }[];
  services: { title: string; description: string; image: string }[];
  blocks: { title: string; headline: string; intro: string; image: string; groups: { subtitle?: string; items: string[] }[] }[];
  sectors: { title: string; description: string; image: string; icon: string }[];
  clients: { name: string; logo: string | null }[];
  whyUs: string[];
  process: { step: string; title: string; description: string }[];
  clientGains: { label: string; icon: string }[];
  gallery: { src: string; alt: string }[];
  faq: { question: string; answer: string }[];
  featureStrip: { title: string; image: string }[];
  formations: string[];
};

const f = (name: string, label: string, type: SectionField["type"] = "text", extra: Partial<SectionField> = {}): SectionField =>
  ({ name, label, type, ...extra });

export default function SectionWorkbench({
  section,
  data,
  images,
}: {
  section: SectionMeta;
  data: WorkbenchData;
  images: string[];
}) {
  const { settings: s, site } = data;
  const pick = (...names: string[]) =>
    Object.fromEntries(names.map((n) => [n, s[n] ?? ""]));

  const common = { title: section.label, description: section.description, images };

  switch (section.slug) {
    case "cabecalho":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("headerLogoDark", "Logo (quando o fundo fica claro)", "image"),
            f("headerLogoLight", "Logo (sobre a capa escura)", "image"),
            f("headerCtaLabel", "Texto do botão"),
          ]}
          initial={pick("headerLogoDark", "headerLogoLight", "headerCtaLabel")}
          manageLinks={[{ href: "/admin/menu", label: "Editar itens do menu" }]}
          renderPreview={(d) => (
            <div className="relative h-40 bg-forest-900">
              <HeaderClient
                whatsapp={site.whatsapp}
                siteName={site.name}
                nav={data.nav}
                logoDark={d.headerLogoDark}
                logoLight={d.headerLogoLight}
                ctaLabel={d.headerCtaLabel}
              />
            </div>
          )}
        />
      );

    case "capa":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("heroEyebrow", "Localização (acima do título)"),
            f("heroHeadlineWhite", "Título — parte branca"),
            f("heroHeadlineGreen", "Título — parte verde"),
            f("heroSubtext", "Texto de apoio", "textarea", { rows: 3 }),
            f("heroImage", "Foto de fundo", "image"),
            f("heroCtaLabel", "Botão principal"),
            f("heroSecondaryCtaLabel", "Botão secundário"),
          ]}
          initial={pick(
            "heroEyebrow", "heroHeadlineWhite", "heroHeadlineGreen",
            "heroSubtext", "heroImage", "heroCtaLabel", "heroSecondaryCtaLabel"
          )}
          manageLinks={[
            { href: "/admin/checklist", label: "Editar checklist" },
            { href: "/admin/numeros", label: "Editar números" },
          ]}
          renderPreview={(d) => (
            <HeroView
              site={{ whatsapp: site.whatsapp }}
              hero={{
                eyebrow: d.heroEyebrow,
                headlineWhite: d.heroHeadlineWhite,
                headlineGreen: d.heroHeadlineGreen,
                subtext: d.heroSubtext,
                image: d.heroImage,
              }}
              heroCtaLabel={d.heroCtaLabel}
              heroSecondaryCtaLabel={d.heroSecondaryCtaLabel}
              badges={data.badges}
              heroChecklist={data.heroChecklist}
            />
          )}
        />
      );

    case "cards-topo":
      return (
        <SectionEditor
          {...common}
          fields={[]}
          initial={{}}
          manageLinks={[{ href: "/admin/cards-topo", label: "Editar os cards" }]}
          renderPreview={() => (
            <div className="bg-sand-100 pt-20 pb-8">
              <DifferentialsView items={data.differentials} />
            </div>
          )}
        />
      );

    case "riscos":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("painPointsHeadline", "Título da seção", "textarea", { rows: 2 }),
            f("painPointsLabel", "Texto acima da lista"),
            f("painPointsText", "Texto abaixo da lista", "textarea", { rows: 3 }),
            f("painPointsImage", "Foto", "image"),
          ]}
          initial={pick("painPointsHeadline", "painPointsLabel", "painPointsText", "painPointsImage")}
          manageLinks={[{ href: "/admin/riscos", label: "Editar os riscos listados" }]}
          renderPreview={(d) => (
            <PainPointsView
              painPoints={data.painPoints}
              copy={{
                headline: d.painPointsHeadline,
                label: d.painPointsLabel,
                text: d.painPointsText,
                image: d.painPointsImage,
              }}
            />
          )}
        />
      );

    case "quem-somos":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("aboutEyebrow", "Localização (acima do título)"),
            f("aboutHeadline", "Título da seção", "textarea", { rows: 2 }),
            f("aboutText1", "Primeiro parágrafo", "textarea", { rows: 4 }),
            f("aboutText2", "Segundo parágrafo", "textarea", { rows: 4 }),
            f("aboutStat1Value", "Número 1"),
            f("aboutStat1Label", "Legenda do número 1"),
            f("aboutStat2Value", "Número 2"),
            f("aboutStat2Label", "Legenda do número 2"),
            f("aboutImage1", "Foto principal", "image"),
            f("aboutImage2", "Foto pequena (canto)", "image"),
          ]}
          initial={pick(
            "aboutEyebrow", "aboutHeadline", "aboutText1", "aboutText2",
            "aboutStat1Value", "aboutStat1Label", "aboutStat2Value",
            "aboutStat2Label", "aboutImage1", "aboutImage2"
          )}
          renderPreview={(d) => (
            <AboutView
              about={{
                eyebrow: d.aboutEyebrow,
                headline: d.aboutHeadline,
                text1: d.aboutText1,
                text2: d.aboutText2,
                stat1Value: d.aboutStat1Value,
                stat1Label: d.aboutStat1Label,
                stat2Value: d.aboutStat2Value,
                stat2Label: d.aboutStat2Label,
                image1: d.aboutImage1,
                image2: d.aboutImage2,
              }}
            />
          )}
        />
      );

    case "especialidades":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("pillarsEyebrow", "Localização (acima do título)"),
            f("pillarsHeadline", "Título da seção", "textarea", { rows: 2 }),
          ]}
          initial={pick("pillarsEyebrow", "pillarsHeadline")}
          manageLinks={[{ href: "/admin/diferenciais", label: "Editar as especialidades" }]}
          renderPreview={(d) => (
            <PillarsView
              pillars={data.pillars}
              eyebrow={d.pillarsEyebrow}
              headline={d.pillarsHeadline}
            />
          )}
        />
      );

    case "servicos":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("servicesEyebrow", "Localização (acima do título)"),
            f("servicesHeadline", "Título da seção", "textarea", { rows: 2 }),
          ]}
          initial={pick("servicesEyebrow", "servicesHeadline")}
          manageLinks={[{ href: "/admin/servicos", label: "Editar os serviços" }]}
          renderPreview={(d) => (
            <ServicesClient
              services={data.services}
              eyebrow={d.servicesEyebrow}
              headline={d.servicesHeadline}
            />
          )}
        />
      );

    case "servicos-campo":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("blocksEyebrow", "Localização (acima do título)"),
            f("blocksHeadline", "Título da seção", "textarea", { rows: 2 }),
          ]}
          initial={pick("blocksEyebrow", "blocksHeadline")}
          manageLinks={[{ href: "/admin/blocos", label: "Editar os blocos" }]}
          renderPreview={(d) => (
            <SpecializedBlocksView
              blocks={data.blocks}
              eyebrow={d.blocksEyebrow}
              headline={d.blocksHeadline}
            />
          )}
        />
      );

    case "segmentos":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("sectorsEyebrow", "Localização (acima do título)"),
            f("sectorsHeadline", "Título da seção", "textarea", { rows: 2 }),
          ]}
          initial={pick("sectorsEyebrow", "sectorsHeadline")}
          manageLinks={[{ href: "/admin/segmentos", label: "Editar os segmentos" }]}
          renderPreview={(d) => (
            <SectorsView
              sectors={data.sectors}
              eyebrow={d.sectorsEyebrow}
              headline={d.sectorsHeadline}
            />
          )}
        />
      );

    case "clientes":
      return (
        <SectionEditor
          {...common}
          fields={[f("clientsHeadline", "Título da seção", "textarea", { rows: 2 })]}
          initial={pick("clientsHeadline")}
          manageLinks={[{ href: "/admin/clientes", label: "Editar os clientes" }]}
          renderPreview={(d) => (
            <ClientsCarouselView clients={data.clients} headline={d.clientsHeadline} />
          )}
        />
      );

    case "por-que-nos":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("whyUsEyebrow", "Localização (acima do título)"),
            f("whyUsHeadline", "Título da seção", "textarea", { rows: 2 }),
            f("whyUsImage", "Foto", "image"),
          ]}
          initial={pick("whyUsEyebrow", "whyUsHeadline", "whyUsImage")}
          manageLinks={[{ href: "/admin/vantagens", label: "Editar os motivos" }]}
          renderPreview={(d) => (
            <WhyUsView
              whyUs={data.whyUs}
              eyebrow={d.whyUsEyebrow}
              headline={d.whyUsHeadline}
              image={d.whyUsImage}
            />
          )}
        />
      );

    case "metodo":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("processEyebrow", "Localização (acima do título)"),
            f("processHeadline", "Título da seção", "textarea", { rows: 2 }),
          ]}
          initial={pick("processEyebrow", "processHeadline")}
          manageLinks={[{ href: "/admin/metodo", label: "Editar as etapas" }]}
          renderPreview={(d) => (
            <ProcessView
              process={data.process}
              eyebrow={d.processEyebrow}
              headline={d.processHeadline}
            />
          )}
        />
      );

    case "ganhos":
      return (
        <SectionEditor
          {...common}
          fields={[f("gainsHeadline", "Título da seção", "textarea", { rows: 2 })]}
          initial={pick("gainsHeadline")}
          manageLinks={[{ href: "/admin/ganhos", label: "Editar os ganhos" }]}
          renderPreview={(d) => (
            <ClientGainsView clientGains={data.clientGains} headline={d.gainsHeadline} />
          )}
        />
      );

    case "galeria":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("galleryEyebrow", "Localização (acima do título)"),
            f("galleryHeadline", "Título da seção", "textarea", { rows: 2 }),
          ]}
          initial={pick("galleryEyebrow", "galleryHeadline")}
          manageLinks={[{ href: "/admin/galeria", label: "Editar as fotos" }]}
          renderPreview={(d) => (
            <GalleryClient
              galleryImages={data.gallery}
              eyebrow={d.galleryEyebrow}
              headline={d.galleryHeadline}
            />
          )}
        />
      );

    case "duvidas":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("faqEyebrow", "Localização (acima do título)"),
            f("faqHeadline", "Título da seção", "textarea", { rows: 2 }),
            f("faqImage", "Foto", "image"),
          ]}
          initial={pick("faqEyebrow", "faqHeadline", "faqImage")}
          manageLinks={[{ href: "/admin/faq", label: "Editar as perguntas" }]}
          renderPreview={(d) => (
            <FAQClient
              faq={data.faq}
              eyebrow={d.faqEyebrow}
              headline={d.faqHeadline}
              image={d.faqImage}
            />
          )}
        />
      );

    case "destaques":
      return (
        <SectionEditor
          {...common}
          fields={[]}
          initial={{}}
          manageLinks={[{ href: "/admin/destaques", label: "Editar as imagens" }]}
          renderPreview={() => <FeatureStripView featureStrip={data.featureStrip} />}
        />
      );

    case "equipe":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("teamEyebrow", "Localização (acima do título)"),
            f("teamHeadline", "Título da seção", "textarea", { rows: 2 }),
            f("teamText", "Texto de apoio", "textarea", { rows: 3 }),
            f("teamImage", "Foto", "image"),
          ]}
          initial={pick("teamEyebrow", "teamHeadline", "teamText", "teamImage")}
          manageLinks={[{ href: "/admin/equipe", label: "Editar as formações" }]}
          renderPreview={(d) => (
            <TeamView
              formations={data.formations}
              teamImage={d.teamImage}
              eyebrow={d.teamEyebrow}
              headline={d.teamHeadline}
              text={d.teamText}
            />
          )}
        />
      );

    case "quadro-contato":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("ctaEyebrow", "Título"),
            f("ctaText", "Texto de apoio", "textarea", { rows: 3 }),
            f("ctaButtonLabel", "Texto do botão"),
          ]}
          initial={pick("ctaEyebrow", "ctaText", "ctaButtonLabel")}
          renderPreview={(d) => (
            <CTABandView
              whatsapp={site.whatsapp}
              eyebrow={d.ctaEyebrow}
              text={d.ctaText}
              buttonLabel={d.ctaButtonLabel}
            />
          )}
        />
      );

    case "contato":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("contactEyebrow", "Localização (acima do título)"),
            f("contactHeadline", "Título da seção", "textarea", { rows: 2 }),
            f("contactText", "Texto de apoio", "textarea", { rows: 3 }),
            f("phone1", "Telefone 1"),
            f("phone2", "Telefone 2"),
            f("email", "E-mail"),
            f("addressLine1", "Endereço — linha 1"),
            f("addressLine2", "Endereço — linha 2"),
            f("whatsapp", "Link do WhatsApp", "text", { hint: "Ex: https://wa.me/5531999999999" }),
            f("instagram", "Instagram (URL)"),
            f("linkedin", "LinkedIn (URL)"),
            f("facebook", "Facebook (URL)"),
          ]}
          initial={pick(
            "contactEyebrow", "contactHeadline", "contactText",
            "phone1", "phone2", "email", "addressLine1", "addressLine2",
            "whatsapp", "instagram", "linkedin", "facebook"
          )}
          renderPreview={(d) => (
            <ContactClient
              site={{
                whatsapp: d.whatsapp,
                phone1: d.phone1,
                phone2: d.phone2,
                email: d.email,
                address: { line1: d.addressLine1, line2: d.addressLine2 },
                social: {
                  instagram: d.instagram,
                  linkedin: d.linkedin,
                  facebook: d.facebook,
                },
              }}
              eyebrow={d.contactEyebrow}
              headline={d.contactHeadline}
              text={d.contactText}
            />
          )}
        />
      );

    case "rodape":
      return (
        <SectionEditor
          {...common}
          fields={[
            f("name", "Nome da empresa"),
            f("tagline", "Slogan"),
            f("footerLogo", "Logo do rodapé", "image"),
          ]}
          initial={pick("name", "tagline", "footerLogo")}
          manageLinks={[{ href: "/admin/menu", label: "Editar itens do menu" }]}
          renderPreview={(d) => (
            <footer className="bg-forest-950 border-t border-white/10 py-12">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.footerLogo} alt={d.name} className="h-9 w-auto" />
                  <p className="mt-3 text-sm text-white/50">{d.tagline}</p>
                </div>
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {data.nav.map((item) => (
                    <span key={item.href} className="text-sm text-white/60">
                      {item.label}
                    </span>
                  ))}
                </nav>
                <p className="text-xs text-white/40">
                  &copy; {new Date().getFullYear()} {d.name}. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          )}
        />
      );

    default:
      return null;
  }
}
