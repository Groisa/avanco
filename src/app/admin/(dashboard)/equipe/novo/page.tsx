import { BackLink, PageHeader, Card, Field, Input, SaveButton } from "@/components/admin/ui";
import { createFormation } from "../actions";

export default function NovaFormacaoPage() {
  return (
    <div>
      <BackLink href="/admin/equipe">Voltar para Formações</BackLink>
      <PageHeader title="Nova formação" />
      <Card>
        <form action={createFormation} className="flex items-end gap-3">
          <Field label="Formação">
            <Input name="name" required placeholder="Ex: Engenharia Sanitária" />
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
