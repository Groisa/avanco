import { getSiteSettings } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { getAvailableImages } from "@/lib/images";
import { Card, Field, Input, Textarea, ImagePicker, SaveButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { saveSettings } from "./actions";

export default async function ConfiguracoesPage() {
  const {
    site,
    hero,
    teamImage,
    footerLogo,
    servicesEyebrow,
    servicesHeadline,
    heroCtaLabel,
    heroSecondaryCtaLabel,
    ctaEyebrow,
    ctaText,
    ctaButtonLabel,
    about,
  } = await getSiteSettings();
  const images = getAvailableImages();

  return (
    <div>
      <PageHeader
        title="Configurações e Hero"
        description="Dados de contato exibidos no site e o texto principal da capa (hero)."
      />
      {!hasDatabase && <SetupNotice />}

      <form action={saveSettings} className="space-y-8">
        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Contato e empresa
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Nome da empresa">
              <Input name="name" defaultValue={site.name} />
            </Field>
            <Field label="Slogan (rodapé)">
              <Input name="tagline" defaultValue={site.tagline} />
            </Field>
            <Field label="Telefone 1">
              <Input name="phone1" defaultValue={site.phone1} />
            </Field>
            <Field label="Telefone 2">
              <Input name="phone2" defaultValue={site.phone2} />
            </Field>
            <Field label="Link do WhatsApp (https://wa.me/55...)">
              <Input name="whatsapp" defaultValue={site.whatsapp} />
            </Field>
            <Field label="E-mail">
              <Input name="email" defaultValue={site.email} />
            </Field>
            <Field label="Endereço — linha 1">
              <Input name="addressLine1" defaultValue={site.address.line1} />
            </Field>
            <Field label="Endereço — linha 2">
              <Input name="addressLine2" defaultValue={site.address.line2} />
            </Field>
            <Field label="Instagram (URL)">
              <Input name="instagram" defaultValue={site.social.instagram} />
            </Field>
            <Field label="LinkedIn (URL)">
              <Input name="linkedin" defaultValue={site.social.linkedin} />
            </Field>
            <Field label="Facebook (URL)">
              <Input name="facebook" defaultValue={site.social.facebook} />
            </Field>
          </div>
        </Card>

        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Capa (Hero)
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Localização (acima do título)">
              <Input name="heroEyebrow" defaultValue={hero.eyebrow} />
            </Field>
            <Field label="Imagem de fundo">
              <ImagePicker name="heroImage" defaultValue={hero.image} images={images} />
            </Field>
            <Field label="Título — parte branca">
              <Input name="heroHeadlineWhite" defaultValue={hero.headlineWhite} />
            </Field>
            <Field label="Título — parte verde">
              <Input name="heroHeadlineGreen" defaultValue={hero.headlineGreen} />
            </Field>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Texto de apoio">
              <Textarea name="heroSubtext" rows={3} defaultValue={hero.subtext} />
            </Field>
            <div className="grid grid-cols-1 gap-5">
              <Field label="Botão principal">
                <Input name="heroCtaLabel" defaultValue={heroCtaLabel} />
              </Field>
              <Field label="Botão secundário">
                <Input name="heroSecondaryCtaLabel" defaultValue={heroSecondaryCtaLabel} />
              </Field>
            </div>
          </div>
        </Card>

        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Seção Quem somos
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Localização (acima do título)">
              <Input name="aboutEyebrow" defaultValue={about.eyebrow} />
            </Field>
            <Field label="Título da seção">
              <Input name="aboutHeadline" defaultValue={about.headline} />
            </Field>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Primeiro parágrafo">
              <Textarea name="aboutText1" rows={4} defaultValue={about.text1} />
            </Field>
            <Field label="Segundo parágrafo">
              <Textarea name="aboutText2" rows={4} defaultValue={about.text2} />
            </Field>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Número 1">
                <Input name="aboutStat1Value" defaultValue={about.stat1Value} />
              </Field>
              <Field label="Legenda 1">
                <Input name="aboutStat1Label" defaultValue={about.stat1Label} />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Número 2">
                <Input name="aboutStat2Value" defaultValue={about.stat2Value} />
              </Field>
              <Field label="Legenda 2">
                <Input name="aboutStat2Label" defaultValue={about.stat2Label} />
              </Field>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Foto principal">
              <ImagePicker name="aboutImage1" defaultValue={about.image1} images={images} />
            </Field>
            <Field label="Foto pequena (canto)">
              <ImagePicker name="aboutImage2" defaultValue={about.image2} images={images} />
            </Field>
          </div>
        </Card>

        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Quadro de contato (antes do rodapé)
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Localização (acima do título)">
              <Input name="ctaEyebrow" defaultValue={ctaEyebrow} />
            </Field>
            <Field label="Texto do botão">
              <Input name="ctaButtonLabel" defaultValue={ctaButtonLabel} />
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Texto de apoio">
              <Textarea name="ctaText" rows={3} defaultValue={ctaText} />
            </Field>
          </div>
        </Card>

        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Seção Serviços
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Localização (acima do título)">
              <Input name="servicesEyebrow" defaultValue={servicesEyebrow} />
            </Field>
            <Field label="Título da seção">
              <Input name="servicesHeadline" defaultValue={servicesHeadline} />
            </Field>
          </div>
        </Card>

        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Outras imagens do site
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Foto da seção Equipe">
              <ImagePicker name="teamImage" defaultValue={teamImage} images={images} />
            </Field>
            <Field label="Logo do rodapé">
              <ImagePicker name="footerLogo" defaultValue={footerLogo} images={images} />
            </Field>
          </div>
        </Card>

        <SaveButton>Salvar configurações</SaveButton>
      </form>
    </div>
  );
}
