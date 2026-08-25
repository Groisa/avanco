import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { getAvailableImages } from "@/lib/images";
import { BackLink, PageHeader, Card, Field, Input, ImagePicker, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateFeatureStripItem, deleteFeatureStripItem } from "../actions";

export default async function EditarDestaquePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/destaques">Voltar para Faixa de destaques</BackLink>
        <PageHeader title="Editar destaque" />
        <SetupNotice />
      </div>
    );
  }

  const item = await prisma.featureStripItem.findUnique({ where: { id } });
  if (!item) notFound();

  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/destaques">Voltar para Faixa de destaques</BackLink>
      <PageHeader title="Editar destaque" />
      <Card>
        <form action={updateFeatureStripItem} className="space-y-4">
          <input type="hidden" name="id" value={item.id} />
          <Field label="Título">
            <Input name="title" defaultValue={item.title} required />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue={item.image} images={images} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={item.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteFeatureStripItem} confirmMessage={`Excluir o destaque "${item.title}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
