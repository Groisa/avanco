import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { BackLink, PageHeader, Card, Field, Input, Textarea, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateProcessStep, deleteProcessStep } from "../actions";

export default async function EditarEtapaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/metodo">Voltar para Método de trabalho</BackLink>
        <PageHeader title="Editar etapa" />
        <SetupNotice />
      </div>
    );
  }

  const step = await prisma.processStep.findUnique({ where: { id } });
  if (!step) notFound();

  return (
    <div>
      <BackLink href="/admin/metodo">Voltar para Método de trabalho</BackLink>
      <PageHeader title="Editar etapa" />
      <Card>
        <form action={updateProcessStep} className="space-y-4">
          <input type="hidden" name="id" value={step.id} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field label="Número (ex: 01)">
              <Input name="step" defaultValue={step.step} required />
            </Field>
            <Field label="Título">
              <Input name="title" defaultValue={step.title} required className="sm:col-span-2" />
            </Field>
          </div>
          <Field label="Descrição">
            <Textarea name="description" rows={3} defaultValue={step.description} required />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={step.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteProcessStep} confirmMessage={`Excluir a etapa "${step.title}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
