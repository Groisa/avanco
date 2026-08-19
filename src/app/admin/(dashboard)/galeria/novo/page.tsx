import { getAvailableImages } from "@/lib/images";
import { BackLink, PageHeader, Card, Field, Input, ImagePicker, SaveButton } from "@/components/admin/ui";
import { createGalleryImage } from "../actions";

export default function NovaFotoPage() {
  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/galeria">Voltar para Galeria</BackLink>
      <PageHeader title="Nova foto" />
      <Card>
        <form action={createGalleryImage} className="space-y-4">
          <Field label="Foto">
            <ImagePicker name="src" defaultValue="" images={images} />
          </Field>
          <Field label="Descrição (alt)">
            <Input name="alt" />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Adicionar foto</SaveButton>
        </form>
      </Card>
    </div>
  );
}
