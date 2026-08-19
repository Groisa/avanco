import { getAvailableImages } from "@/lib/images";
import { BackLink, PageHeader, Card, Field, Input, ImagePicker, SaveButton } from "@/components/admin/ui";
import { createClient } from "../actions";

export default function NovoClientePage() {
  const images = getAvailableImages();

  return (
    <div>
      <BackLink href="/admin/clientes">Voltar para Clientes</BackLink>
      <PageHeader title="Novo cliente" />
      <Card>
        <form action={createClient} className="space-y-4">
          <Field label="Nome">
            <Input name="name" required />
          </Field>
          <Field label="Logo (opcional)">
            <ImagePicker name="logo" defaultValue="" images={images} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Criar cliente</SaveButton>
        </form>
      </Card>
    </div>
  );
}
