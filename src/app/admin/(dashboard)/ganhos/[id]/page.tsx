import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { GENERAL_ICON_OPTIONS } from "@/lib/icon-options";
import { BackLink, PageHeader, Card, Field, Input, Select, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateClientGain, deleteClientGain } from "../actions";

export default async function EditarGanhoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/ganhos">Voltar para O que o cliente ganha</BackLink>
        <PageHeader title="Editar item" />
        <SetupNotice />
      </div>
    );
  }

  const gain = await prisma.clientGain.findUnique({ where: { id } });
  if (!gain) notFound();

  return (
    <div>
      <BackLink href="/admin/ganhos">Voltar para O que o cliente ganha</BackLink>
      <PageHeader title="Editar item" />
      <Card>
        <form action={updateClientGain} className="space-y-4">
          <input type="hidden" name="id" value={gain.id} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Texto">
              <Input name="label" defaultValue={gain.label} required />
            </Field>
            <Field label="Ícone">
              <Select name="icon" defaultValue={gain.icon}>
                {GENERAL_ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={gain.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteClientGain} confirmMessage={`Excluir "${gain.label}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
