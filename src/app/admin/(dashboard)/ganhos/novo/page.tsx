import { GENERAL_ICON_OPTIONS } from "@/lib/icon-options";
import { BackLink, PageHeader, Card, Field, Input, Select, SaveButton } from "@/components/admin/ui";
import { createClientGain } from "../actions";

export default function NovoGanhoPage() {
  return (
    <div>
      <BackLink href="/admin/ganhos">Voltar para O que o cliente ganha</BackLink>
      <PageHeader title="Novo item" />
      <Card>
        <form action={createClientGain} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Texto">
              <Input name="label" required />
            </Field>
            <Field label="Ícone">
              <Select name="icon" defaultValue="check">
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
