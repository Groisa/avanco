import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { getAvailableImages } from "@/lib/images";
import { serializeGroups, GROUPS_HELP, type Group } from "@/lib/groups-format";
import { BackLink, PageHeader, Card, Field, Input, Textarea, ImagePicker, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateBlock, deleteBlock } from "../actions";

export default async function EditarBlocoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/blocos">Voltar para Blocos de campo</BackLink>
        <PageHeader title="Editar bloco" />
        <SetupNotice />
      </div>
    );
  }

  const block = await prisma.specializedBlock.findUnique({ where: { id } });
  if (!block) notFound();

  const images = getAvailableImages();
  const groups = block.groups as unknown as Group[];

  return (
    <div>
      <BackLink href="/admin/blocos">Voltar para Blocos de campo</BackLink>
      <PageHeader title="Editar bloco" />
      <Card>
        <form action={updateBlock} className="space-y-4">
          <input type="hidden" name="id" value={block.id} />
          <Field label="Título (etiqueta pequena)">
            <Input name="title" defaultValue={block.title} required />
          </Field>
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
            <Textarea name="groups" rows={10} defaultValue={serializeGroups(groups)} className="font-mono text-xs" />
          </Field>
          <p className="whitespace-pre-line text-xs leading-relaxed text-ink-500">{GROUPS_HELP}</p>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={block.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteBlock} confirmMessage={`Excluir o bloco "${block.title}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
