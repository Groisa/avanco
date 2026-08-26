import { GENERAL_ICON_OPTIONS } from "@/lib/icon-options";
import { BackLink, PageHeader, Card, Field, Input, Select, SaveButton } from "@/components/admin/ui";
import { createHeroBadge } from "../actions";

export default function NovoNumeroPage() {
  return (
    <div>
      <BackLink href="/admin/numeros">Voltar para Números do Hero</BackLink>
      <PageHeader title="Novo número" />
      <Card>
        <form action={createHeroBadge} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Field label="Valor (ex: 9, MG)">
              <Input name="value" required />
            </Field>
            <Field label="Legenda">
              <Input name="label" required placeholder="Ex: Serviços ambientais prestados" />
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
          <SaveButton>Criar número</SaveButton>
        </form>
      </Card>
    </div>
  );
}
