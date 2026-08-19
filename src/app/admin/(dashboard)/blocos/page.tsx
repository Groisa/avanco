import { getSpecializedBlocks } from "@/lib/content";
import { getAvailableImages } from "@/lib/images";
import { hasDatabase } from "@/lib/prisma";
import { serializeGroups, type Group } from "@/lib/groups-format";
import { Card, Field, Input, Textarea, ImagePicker, SaveButton, DeleteButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { updateBlock, createBlock, deleteBlock } from "./actions";

type BlockRow = {
  id?: string;
  title: string;
  headline: string;
  intro: string;
  image: string;
  order?: number;
  groups: Group[];
};

const GROUPS_HELP =
  'Cada grupo de itens fica separado por uma linha em branco. A primeira linha de um grupo é o subtítulo (opcional); as linhas seguintes começam com "- " e são os itens. Exemplo:\n\nRevegetação\n- Plantio de mudas\n- Recuperação de margens\n\n- Item sem subtítulo';

export default async function BlocosPage() {
  const blocks = (await getSpecializedBlocks()) as BlockRow[];
  const images = getAvailableImages();

  return (
    <div>
      <PageHeader
        title="Blocos de campo"
        description="Sondagem de Solo, Execução Ambiental, Topografia — seções com texto completo e checklist."
      />
      {!hasDatabase && <SetupNotice />}

      <div className="space-y-6">
        {blocks.map((block) => (
          <Card key={block.id ?? block.title}>
            <form action={updateBlock} className="space-y-4">
              <input type="hidden" name="id" value={block.id} />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
                <Field label="Título (etiqueta pequena)">
                  <Input name="title" defaultValue={block.title} required />
                </Field>
                <Field label="Ordem">
                  <Input name="order" type="number" defaultValue={block.order ?? 0} className="w-24" />
                </Field>
              </div>
              <Field label="Título grande (headline)">
                <Input name="headline" defaultValue={block.headline} />
              </Field>
              <Field label="Texto de introdução">
                <Textarea name="intro" rows={2} defaultValue={block.intro} />
              </Field>
              <Field label="Imagem">
                <ImagePicker name="image" defaultValue={block.image} images={images} />
              </Field>
              <Field label="Grupos e itens">
                <Textarea name="groups" rows={10} defaultValue={serializeGroups(block.groups)} className="font-mono text-xs" />
              </Field>
              <p className="whitespace-pre-line text-xs leading-relaxed text-ink-500">{GROUPS_HELP}</p>
              <div className="flex gap-3">
                <SaveButton />
                {block.id && (
                  <DeleteButton formAction={deleteBlock} confirmMessage={`Excluir o bloco "${block.title}"?`} />
                )}
              </div>
            </form>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-2 border-dashed border-forest-600/20">
        <p className="mb-4 font-display text-base font-medium text-forest-900">Adicionar bloco</p>
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
            <Input name="order" type="number" defaultValue={blocks.length} className="w-24" />
          </Field>
          <SaveButton>Adicionar</SaveButton>
        </form>
      </Card>
    </div>
  );
}
