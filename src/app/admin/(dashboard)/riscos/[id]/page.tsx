import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { BackLink, PageHeader, Card, Field, Input, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updatePainPoint, deletePainPoint } from "../actions";

export default async function EditarRiscoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/riscos">Voltar para Riscos ambientais</BackLink>
        <PageHeader title="Editar risco" />
        <SetupNotice />
      </div>
    );
  }

  const item = await prisma.painPoint.findUnique({ where: { id } });
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/admin/riscos">Voltar para Riscos ambientais</BackLink>
      <PageHeader title="Editar risco" />
      <Card>
        <form action={updatePainPoint} className="flex items-end gap-3">
          <input type="hidden" name="id" value={item.id} />
          <Field label="Texto">
            <Input name="text" defaultValue={item.text} required />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={item.order} className="w-24" />
          </Field>
          <SaveButton />
          <DeleteButton formAction={deletePainPoint} confirmMessage={`Excluir "${item.text}"?`} />
        </form>
      </Card>
    </div>
  );
}
