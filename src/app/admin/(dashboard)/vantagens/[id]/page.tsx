import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { BackLink, PageHeader, Card, Field, Input, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateWhyUsItem, deleteWhyUsItem } from "../actions";

export default async function EditarVantagemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/vantagens">Voltar para Por que nos escolher</BackLink>
        <PageHeader title="Editar item" />
        <SetupNotice />
      </div>
    );
  }

  const item = await prisma.whyUsItem.findUnique({ where: { id } });
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/admin/vantagens">Voltar para Por que nos escolher</BackLink>
      <PageHeader title="Editar item" />
      <Card>
        <form action={updateWhyUsItem} className="flex items-end gap-3">
          <input type="hidden" name="id" value={item.id} />
          <Field label="Texto">
            <Input name="text" defaultValue={item.text} required />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={item.order} className="w-24" />
          </Field>
          <SaveButton />
          <DeleteButton formAction={deleteWhyUsItem} confirmMessage="Excluir este item?" />
        </form>
      </Card>
    </div>
  );
}
