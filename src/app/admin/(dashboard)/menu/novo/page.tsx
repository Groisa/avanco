import { BackLink, PageHeader, Card, Field, Input, SaveButton } from "@/components/admin/ui";
import { createNavItem } from "../actions";

export default function NovoItemMenuPage() {
  return (
    <div>
      <BackLink href="/admin/menu">Voltar para Menu de navegação</BackLink>
      <PageHeader title="Novo item do menu" />
      <Card>
        <form action={createNavItem} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Texto do link">
              <Input name="label" required placeholder="Ex: Serviços" />
            </Field>
            <Field label="Destino (âncora da seção)">
              <Input name="href" required placeholder="Ex: #servicos" />
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
