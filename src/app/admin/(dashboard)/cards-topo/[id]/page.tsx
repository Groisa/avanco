import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { BackLink, PageHeader, Card, Field, Input, Textarea, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateDifferential, deleteDifferential } from "../actions";

export default async function EditarCardTopoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/cards-topo">Voltar para Cards abaixo da capa</BackLink>
        <PageHeader title="Editar card" />
        <SetupNotice />
      </div>
    );
  }

  const item = await prisma.differential.findUnique({ where: { id } });
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/admin/cards-topo">Voltar para Cards abaixo da capa</BackLink>
      <PageHeader title="Editar card" />
      <Card>
        <form action={updateDifferential} className="space-y-4">
          <input type="hidden" name="id" value={item.id} />
          <Field label="Título">
            <Input name="title" defaultValue={item.title} required />
          </Field>
          <Field label="Descrição">
            <Textarea name="description" rows={2} defaultValue={item.description} required />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={item.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteDifferential} confirmMessage={`Excluir o card "${item.title}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
