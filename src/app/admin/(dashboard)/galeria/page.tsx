import { getGalleryImages } from "@/lib/content";
import { getAvailableImages } from "@/lib/images";
import { hasDatabase } from "@/lib/prisma";
import { Card, Field, Input, ImagePicker, SaveButton, DeleteButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { updateGalleryImage, createGalleryImage, deleteGalleryImage } from "./actions";

type GalleryRow = { id?: string; src: string; alt: string; order?: number };

export default async function GaleriaPage() {
  const galleryImages = (await getGalleryImages()) as GalleryRow[];
  const images = getAvailableImages();

  return (
    <div>
      <PageHeader title="Galeria" description="Fotos exibidas na grade da seção Galeria." />
      {!hasDatabase && <SetupNotice />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {galleryImages.map((image) => (
          <Card key={image.id ?? image.src}>
            <form action={updateGalleryImage} className="space-y-3">
              <input type="hidden" name="id" value={image.id} />
              <Field label="Foto">
                <ImagePicker name="src" defaultValue={image.src} images={images} />
              </Field>
              <Field label="Descrição (alt)">
                <Input name="alt" defaultValue={image.alt} />
              </Field>
              <div className="flex items-end gap-3">
                <Field label="Ordem">
                  <Input name="order" type="number" defaultValue={image.order ?? 0} className="w-20" />
                </Field>
                <SaveButton />
                {image.id && (
                  <DeleteButton formAction={deleteGalleryImage} confirmMessage="Excluir esta foto da galeria?" />
                )}
              </div>
            </form>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-2 border-dashed border-forest-600/20">
        <p className="mb-4 font-display text-base font-medium text-forest-900">Adicionar foto</p>
        <form action={createGalleryImage} className="space-y-3">
          <Field label="Foto">
            <ImagePicker name="src" defaultValue="" images={images} />
          </Field>
          <Field label="Descrição (alt)">
            <Input name="alt" />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={galleryImages.length} className="w-20" />
          </Field>
          <SaveButton>Adicionar</SaveButton>
        </form>
      </Card>
    </div>
  );
}
