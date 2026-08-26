import { BackLink, PageHeader, Card, Field, Input, Textarea, SaveButton } from "@/components/admin/ui";
import { createProcessStep } from "../actions";

export default function NovaEtapaPage() {
  return (
    <div>
      <BackLink href="/admin/metodo">Voltar para Método de trabalho</BackLink>
      <PageHeader title="Nova etapa" />
      <Card>
        <form action={createProcessStep} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field label="Número (ex: 01)">
              <Input name="step" required placeholder="01" />
            </Field>
            <Field label="Título">
              <Input name="title" required className="sm:col-span-2" />
            </Field>
          </div>
          <Field label="Descrição">
            <Textarea name="description" rows={3} required />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Criar etapa</SaveButton>
        </form>
      </Card>
    </div>
  );
}
