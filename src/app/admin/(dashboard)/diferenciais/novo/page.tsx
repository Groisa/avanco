import { GENERAL_ICON_OPTIONS } from "@/lib/icon-options";
import { BackLink, PageHeader, Card, Field, Input, Select, SaveButton } from "@/components/admin/ui";
import { createPillar } from "../actions";

export default function NovoDiferencialPage() {
  return (
    <div>
      <BackLink href="/admin/diferenciais">Voltar para Especialidades</BackLink>
      <PageHeader title="Novo item" />
      <Card>
        <form action={createPillar} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Título">
              <Input name="title" required />
            </Field>
            <Field label="Ícone">
              <Select name="icon" defaultValue="leaf">
                {GENERAL_ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Criar item</SaveButton>
        </form>
      </Card>
    </div>
  );
}
