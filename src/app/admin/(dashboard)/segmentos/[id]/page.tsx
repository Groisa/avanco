import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { getAvailableImages } from "@/lib/images";
import { SECTOR_ICON_OPTIONS } from "@/lib/icon-options";
import { BackLink, PageHeader, Card, Field, Input, Textarea, Select, ImagePicker, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateSector, deleteSector } from "../actions";

export default async function EditarSegmentoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/segmentos">Voltar para Segmentos</BackLink>
        <PageHeader title="Editar segmento" />
        <SetupNotice />
      </div>
    );
  }

  const sector = await prisma.sector.findUnique({ where: { id } });
  if (!sector) notFound();

  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/segmentos">Voltar para Segmentos</BackLink>
      <PageHeader title="Editar segmento" />
      <Card>
        <form action={updateSector} className="space-y-4">
          <input type="hidden" name="id" value={sector.id} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Título">
              <Input name="title" defaultValue={sector.title} required />
            </Field>
            <Field label="Ícone">
              <Select name="icon" defaultValue={sector.icon}>
                {SECTOR_ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Descrição">
            <Textarea name="description" rows={3} defaultValue={sector.description} />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue={sector.image} images={images} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={sector.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteSector} confirmMessage={`Excluir o segmento "${sector.title}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
