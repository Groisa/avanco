import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { GENERAL_ICON_OPTIONS } from "@/lib/icon-options";
import { BackLink, PageHeader, Card, Field, Input, Select, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateHeroBadge, deleteHeroBadge } from "../actions";

export default async function EditarNumeroPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/numeros">Voltar para Números do Hero</BackLink>
        <PageHeader title="Editar número" />
        <SetupNotice />
      </div>
    );
  }

  const badge = await prisma.heroBadge.findUnique({ where: { id } });
  if (!badge) notFound();

  return (
    <div>
      <BackLink href="/admin/numeros">Voltar para Números do Hero</BackLink>
      <PageHeader title="Editar número" />
      <Card>
        <form action={updateHeroBadge} className="space-y-4">
          <input type="hidden" name="id" value={badge.id} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field label="Valor (ex: 9, MG)">
              <Input name="value" defaultValue={badge.value} required />
            </Field>
            <Field label="Legenda">
              <Input name="label" defaultValue={badge.label} required />
            </Field>
            <Field label="Ícone">
              <Select name="icon" defaultValue={badge.icon}>
                {GENERAL_ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={badge.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteHeroBadge} confirmMessage={`Excluir "${badge.label}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
