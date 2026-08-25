import { getAvailableImages } from "@/lib/images";
import { BackLink, PageHeader, Card, Field, Input, ImagePicker, SaveButton } from "@/components/admin/ui";
import { createFeatureStripItem } from "../actions";

export default function NovoDestaquePage() {
  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/destaques">Voltar para Faixa de destaques</BackLink>
      <PageHeader title="Novo destaque" />
      <Card>
        <form action={createFeatureStripItem} className="space-y-4">
          <Field label="Título">
            <Input name="title" required />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue="" images={images} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Criar destaque</SaveButton>
        </form>
      </Card>
    </div>
  );
}
