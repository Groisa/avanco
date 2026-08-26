import { BackLink, PageHeader, Card, Field, Input, SaveButton } from "@/components/admin/ui";
import { createChecklistItem } from "../actions";

export default function NovoChecklistPage() {
  return (
    <div>
      <BackLink href="/admin/checklist">Voltar para Checklist da capa</BackLink>
      <PageHeader title="Novo item" />
      <Card>
        <form action={createChecklistItem} className="flex items-end gap-3">
          <Field label="Texto">
            <Input name="text" required placeholder="Ex: Atendimento Especializado" />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Adicionar</SaveButton>
        </form>
      </Card>
    </div>
  );
}
