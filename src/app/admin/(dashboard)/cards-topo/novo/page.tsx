import { BackLink, PageHeader, Card, Field, Input, Textarea, SaveButton } from "@/components/admin/ui";
import { createDifferential } from "../actions";

export default function NovoCardTopoPage() {
  return (
    <div>
      <BackLink href="/admin/cards-topo">Voltar para Cards abaixo da capa</BackLink>
      <PageHeader title="Novo card" />
      <Card>
        <form action={createDifferential} className="space-y-4">
          <Field label="Título">
            <Input name="title" required placeholder="Ex: Equipe multidisciplinar" />
          </Field>
          <Field label="Descrição">
            <Textarea name="description" rows={2} required />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Criar card</SaveButton>
        </form>
      </Card>
    </div>
  );
}
