import { getSiteSettings } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { Card, Field, Input, SaveButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { saveSection } from "../secoes/actions";

// Section-specific copy and images are edited under /admin/secoes/[slug],
// where each field sits next to a live preview. This page keeps only the
// company-wide data that shows up in several sections at once.
export default async function ConfiguracoesPage() {
  const { site } = await getSiteSettings();

  return (
    <div>
      <PageHeader
        title="Contato e dados gerais"
        description="Informações da empresa usadas em várias seções do site. Para editar os textos e imagens de uma seção específica, use o menu Seções da página."
      />
      {!hasDatabase && <SetupNotice />}

      <form action={saveSection} className="space-y-8">
        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Empresa
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Nome da empresa">
              <Input name="name" defaultValue={site.name} />
            </Field>
            <Field label="Slogan (rodapé)">
              <Input name="tagline" defaultValue={site.tagline} />
            </Field>
          </div>
        </Card>

        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Contato
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
          </div>
        </Card>

        <Card>
          <p className="mb-5 font-display text-base font-medium text-forest-900">
            Redes sociais
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
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

        <SaveButton>Salvar</SaveButton>
      </form>
    </div>
  );
}
