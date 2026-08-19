import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { getAvailableImages } from "@/lib/images";
import { BackLink, PageHeader, Card, Field, Input, Textarea, ImagePicker, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateService, deleteService } from "../actions";

export default async function EditarServicoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/servicos">Voltar para Serviços</BackLink>
        <PageHeader title="Editar serviço" />
        <SetupNotice />
      </div>
    );
  }

  const service = await prisma.service.findUnique({ where: { id } });
  if (!service) notFound();

  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/servicos">Voltar para Serviços</BackLink>
      <PageHeader title="Editar serviço" />
      <Card>
        <form action={updateService} className="space-y-4">
          <input type="hidden" name="id" value={service.id} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
            <Field label="Título">
              <Input name="title" defaultValue={service.title} required />
            </Field>
            <Field label="Ordem">
              <Input name="order" type="number" defaultValue={service.order} className="w-24" />
            </Field>
          </div>
          <Field label="Descrição">
            <Textarea name="description" rows={3} defaultValue={service.description} />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue={service.image} images={images} />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteService} confirmMessage={`Excluir o serviço "${service.title}"?`} />
          </div>
        </form>
      </Card>
    </div>
  );
}
