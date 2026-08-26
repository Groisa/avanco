import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { GENERAL_ICON_OPTIONS } from "@/lib/icon-options";
import { BackLink, PageHeader, Card, Field, Input, Select, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updatePillar, deletePillar } from "../actions";

export default async function EditarDiferencialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/diferenciais">Voltar para Especialidades</BackLink>
        <PageHeader title="Editar item" />
        <SetupNotice />
      </div>
    );
  }

  const pillar = await prisma.pillar.findUnique({ where: { id } });
  if (!pillar) notFound();

  return (
    <div>
      <BackLink href="/admin/diferenciais">Voltar para Especialidades</BackLink>
      <PageHeader title="Editar item" />
      <Card>
        <form action={updatePillar} className="space-y-4">
          <input type="hidden" name="id" value={pillar.id} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Título">
              <Input name="title" defaultValue={pillar.title} required />
            </Field>
            <Field label="Ícone">
              <Select name="icon" defaultValue={pillar.icon}>
                {GENERAL_ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={pillar.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deletePillar} confirmMessage={`Excluir "${pillar.title}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
