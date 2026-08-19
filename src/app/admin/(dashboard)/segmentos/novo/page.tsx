import { getAvailableImages } from "@/lib/images";
import { SECTOR_ICON_OPTIONS } from "@/lib/icon-options";
import { BackLink, PageHeader, Card, Field, Input, Textarea, Select, ImagePicker, SaveButton } from "@/components/admin/ui";
import { createSector } from "../actions";

export default function NovoSegmentoPage() {
  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/segmentos">Voltar para Segmentos</BackLink>
      <PageHeader title="Novo segmento" />
      <Card>
        <form action={createSector} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Título">
              <Input name="title" required />
            </Field>
            <Field label="Ícone">
              <Select name="icon" defaultValue="leaf">
                {SECTOR_ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Descrição">
            <Textarea name="description" rows={3} />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue="" images={images} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Criar segmento</SaveButton>
        </form>
      </Card>
    </div>
  );
}
