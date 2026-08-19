import { getAvailableImages } from "@/lib/images";
import { BackLink, PageHeader, Card, Field, Input, Textarea, ImagePicker, SaveButton } from "@/components/admin/ui";
import { createService } from "../actions";

export default function NovoServicoPage() {
  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/servicos">Voltar para Serviços</BackLink>
      <PageHeader title="Novo serviço" />
      <Card>
        <form action={createService} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
            <Field label="Título">
              <Input name="title" required />
            </Field>
            <Field label="Ordem">
              <Input name="order" type="number" defaultValue={0} className="w-24" />
            </Field>
          </div>
          <Field label="Descrição">
            <Textarea name="description" rows={3} />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue="" images={images} />
          </Field>
          <SaveButton>Criar serviço</SaveButton>
        </form>
      </Card>
    </div>
  );
}
