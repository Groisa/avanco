import { getServices } from "@/lib/content";
import { getAvailableImages } from "@/lib/images";
import { hasDatabase } from "@/lib/prisma";
import { Card, Field, Input, Textarea, ImagePicker, SaveButton, DeleteButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { updateService, createService, deleteService } from "./actions";

type ServiceRow = { id?: string; title: string; description: string; image: string; order?: number };

export default async function ServicosPage() {
  const services = (await getServices()) as ServiceRow[];
  const images = getAvailableImages();

  return (
    <div>
      <PageHeader
        title="Serviços"
        description={`${services.length} serviços no catálogo. Aparecem em destaque (9 aleatórios) na página, com "ver mais" para o restante.`}
      />
      {!hasDatabase && <SetupNotice />}

      <div className="space-y-4">
        {services.map((service) => (
          <Card key={service.id ?? service.title}>
            <form action={updateService} className="space-y-4">
              <input type="hidden" name="id" value={service.id} />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
                <Field label="Título">
                  <Input name="title" defaultValue={service.title} required />
                </Field>
                <Field label="Ordem">
                  <Input name="order" type="number" defaultValue={service.order ?? 0} className="w-24" />
                </Field>
              </div>
              <Field label="Descrição">
                <Textarea name="description" rows={2} defaultValue={service.description} />
              </Field>
              <Field label="Imagem">
                <ImagePicker name="image" defaultValue={service.image} images={images} />
              </Field>
              <div className="flex gap-3">
                <SaveButton />
                {service.id && (
                  <DeleteButton
                    formAction={deleteService}
                    confirmMessage={`Excluir o serviço "${service.title}"?`}
                  />
                )}
              </div>
            </form>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-2 border-dashed border-forest-600/20">
        <p className="mb-4 font-display text-base font-medium text-forest-900">
          Adicionar novo serviço
        </p>
        <form action={createService} className="space-y-4">
          <Field label="Título">
            <Input name="title" required />
          </Field>
          <Field label="Descrição">
            <Textarea name="description" rows={2} />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue="" images={images} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={services.length} className="w-24" />
          </Field>
          <SaveButton>Adicionar</SaveButton>
        </form>
      </Card>
    </div>
  );
}
