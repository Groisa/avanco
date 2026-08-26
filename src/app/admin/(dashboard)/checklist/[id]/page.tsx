import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { BackLink, PageHeader, Card, Field, Input, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateChecklistItem, deleteChecklistItem } from "../actions";

export default async function EditarChecklistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/checklist">Voltar para Checklist da capa</BackLink>
        <PageHeader title="Editar item" />
        <SetupNotice />
      </div>
    );
  }

  const item = await prisma.heroChecklistItem.findUnique({ where: { id } });
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/admin/checklist">Voltar para Checklist da capa</BackLink>
      <PageHeader title="Editar item" />
      <Card>
        <form action={updateChecklistItem} className="flex items-end gap-3">
          <input type="hidden" name="id" value={item.id} />
          <Field label="Texto">
            <Input name="text" defaultValue={item.text} required />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={item.order} className="w-24" />
          </Field>
          <SaveButton />
          <DeleteButton formAction={deleteChecklistItem} confirmMessage="Excluir este item?" />
        </form>
      </Card>
    </div>
  );
}
