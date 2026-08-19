import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { getAvailableImages } from "@/lib/images";
import { BackLink, PageHeader, Card, Field, Input, ImagePicker, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateGalleryImage, deleteGalleryImage } from "../actions";

export default async function EditarFotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/galeria">Voltar para Galeria</BackLink>
        <PageHeader title="Editar foto" />
        <SetupNotice />
      </div>
    );
  }

  const image = await prisma.galleryImage.findUnique({ where: { id } });
  if (!image) notFound();

  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/galeria">Voltar para Galeria</BackLink>
      <PageHeader title="Editar foto" />
      <Card>
        <form action={updateGalleryImage} className="space-y-4">
          <input type="hidden" name="id" value={image.id} />
          <Field label="Foto">
            <ImagePicker name="src" defaultValue={image.src} images={images} />
          </Field>
          <Field label="Descrição (alt)">
            <Input name="alt" defaultValue={image.alt} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={image.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteGalleryImage} confirmMessage="Excluir esta foto da galeria?" />
          </div>
        </form>
      </Card>
    </div>
  );
}
