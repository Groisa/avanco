import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { BackLink, PageHeader, Card, Field, Input, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateNavItem, deleteNavItem } from "../actions";

export default async function EditarItemMenuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/menu">Voltar para Menu de navegação</BackLink>
        <PageHeader title="Editar item do menu" />
        <SetupNotice />
      </div>
    );
  }

  const item = await prisma.navItem.findUnique({ where: { id } });
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/admin/menu">Voltar para Menu de navegação</BackLink>
      <PageHeader title="Editar item do menu" />
      <Card>
        <form action={updateNavItem} className="space-y-4">
          <input type="hidden" name="id" value={item.id} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Texto do link">
              <Input name="label" defaultValue={item.label} required />
            </Field>
            <Field label="Destino (âncora da seção)">
              <Input name="href" defaultValue={item.href} required />
            </Field>
          </div>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={item.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteNavItem} confirmMessage={`Excluir "${item.label}" do menu?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
