import { getAvailableImages } from "@/lib/images";
import { GROUPS_HELP } from "@/lib/groups-format";
import { BackLink, PageHeader, Card, Field, Input, Textarea, ImagePicker, SaveButton } from "@/components/admin/ui";
import { createBlock } from "../actions";

export default function NovoBlocoPage() {
  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/blocos">Voltar para Blocos de campo</BackLink>
      <PageHeader title="Novo bloco de campo" />
      <Card>
        <form action={createBlock} className="space-y-4">
          <Field label="Título (etiqueta pequena)">
            <Input name="title" required />
          </Field>
          <Field label="Título grande (headline)">
            <Input name="headline" />
          </Field>
          <Field label="Texto de introdução">
            <Textarea name="intro" rows={2} />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue="" images={images} />
          </Field>
          <Field label="Grupos e itens">
            <Textarea name="groups" rows={10} className="font-mono text-xs" />
          </Field>
          <p className="whitespace-pre-line text-xs leading-relaxed text-ink-500">{GROUPS_HELP}</p>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Criar bloco</SaveButton>
        </form>
      </Card>
    </div>
  );
}
