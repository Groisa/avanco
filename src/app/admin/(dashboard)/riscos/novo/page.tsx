import { BackLink, PageHeader, Card, Field, Input, SaveButton } from "@/components/admin/ui";
import { createPainPoint } from "../actions";

export default function NovoRiscoPage() {
  return (
    <div>
      <BackLink href="/admin/riscos">Voltar para Riscos ambientais</BackLink>
      <PageHeader title="Novo risco" />
      <Card>
        <form action={createPainPoint} className="flex items-end gap-3">
          <Field label="Texto">
            <Input name="text" required placeholder="Ex: Multas" />
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
