import { getClients } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { Card, Field, Input, SaveButton, DeleteButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { updateClient, createClient, deleteClient } from "./actions";

type ClientRow = { id?: string; name: string; logo?: string | null; order?: number };

export default async function ClientesPage() {
  const clients = (await getClients()) as ClientRow[];

  return (
    <div>
      <PageHeader
        title="Clientes"
        description="Carrossel de logos na página. Deixe o campo Logo vazio para mostrar um placeholder com o nome."
      />
      {!hasDatabase && <SetupNotice />}

      <div className="space-y-4">
        {clients.map((client) => (
          <Card key={client.id ?? client.name}>
            <form action={updateClient} className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto_auto] sm:items-end">
              <input type="hidden" name="id" value={client.id} />
              <Field label="Nome">
                <Input name="name" defaultValue={client.name} required />
              </Field>
              <Field label="URL do logo (opcional)">
                <Input name="logo" defaultValue={client.logo ?? ""} placeholder="https://..." />
              </Field>
              <Field label="Ordem">
                <Input name="order" type="number" defaultValue={client.order ?? 0} className="w-20" />
              </Field>
              <div className="flex gap-2">
                <SaveButton />
                {client.id && (
                  <DeleteButton formAction={deleteClient} confirmMessage={`Excluir o cliente "${client.name}"?`} />
                )}
              </div>
            </form>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-2 border-dashed border-forest-600/20">
        <p className="mb-4 font-display text-base font-medium text-forest-900">Adicionar cliente</p>
        <form action={createClient} className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto_auto] sm:items-end">
          <Field label="Nome">
            <Input name="name" required />
          </Field>
          <Field label="URL do logo (opcional)">
            <Input name="logo" placeholder="https://..." />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={clients.length} className="w-20" />
          </Field>
          <SaveButton>Adicionar</SaveButton>
        </form>
      </Card>
    </div>
  );
}
