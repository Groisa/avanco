import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { BackLink, PageHeader, Card, Field, Input, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateFormation, deleteFormation } from "../actions";

export default async function EditarFormacaoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/equipe">Voltar para Formações</BackLink>
        <PageHeader title="Editar formação" />
        <SetupNotice />
      </div>
    );
  }

  const formation = await prisma.formation.findUnique({ where: { id } });
  if (!formation) notFound();

  return (
    <div>
      <BackLink href="/admin/equipe">Voltar para Formações</BackLink>
      <PageHeader title="Editar formação" />
      <Card>
        <form action={updateFormation} className="flex items-end gap-3">
          <input type="hidden" name="id" value={formation.id} />
          <Field label="Formação">
            <Input name="name" defaultValue={formation.name} required />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={formation.order} className="w-24" />
          </Field>
          <SaveButton />
          <DeleteButton formAction={deleteFormation} confirmMessage={`Excluir "${formation.name}"?`} />
        </form>
      </Card>
    </div>
  );
}
