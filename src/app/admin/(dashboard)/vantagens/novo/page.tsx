import { BackLink, PageHeader, Card, Field, Input, SaveButton } from "@/components/admin/ui";
import { createWhyUsItem } from "../actions";

export default function NovaVantagemPage() {
  return (
    <div>
      <BackLink href="/admin/vantagens">Voltar para Por que nos escolher</BackLink>
      <PageHeader title="Novo item" />
      <Card>
        <form action={createWhyUsItem} className="flex items-end gap-3">
          <Field label="Texto">
            <Input name="text" required placeholder="Ex: Atendimento ágil e próximo" />
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
