import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { getAvailableImages } from "@/lib/images";
import { BackLink, PageHeader, Card, Field, Input, ImagePicker, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateClient, deleteClient } from "../actions";

export default async function EditarClientePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/clientes">Voltar para Clientes</BackLink>
        <PageHeader title="Editar cliente" />
        <SetupNotice />
      </div>
    );
  }

  const client = await prisma.client.findUnique({ where: { id } });
  if (!client) notFound();

  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/clientes">Voltar para Clientes</BackLink>
      <PageHeader title="Editar cliente" />
      <Card>
        <form action={updateClient} className="space-y-4">
          <input type="hidden" name="id" value={client.id} />
          <Field label="Nome">
            <Input name="name" defaultValue={client.name} required />
          </Field>
          <Field label="Logo (opcional)">
            <ImagePicker name="logo" defaultValue={client.logo ?? ""} images={images} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={client.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteClient} confirmMessage={`Excluir o cliente "${client.name}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
