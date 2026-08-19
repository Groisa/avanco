import { getClients } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteClient } from "./actions";

type ClientRow = { id?: string; name: string; logo?: string | null; order?: number };

export default async function ClientesPage() {
  const clients = (await getClients()) as ClientRow[];

  return (
    <div>
      <PageHeader
        title="Clientes"
        description="Carrossel de logos na página. Deixe o campo Logo vazio para mostrar um placeholder com o nome."
        action={<CreateLink href="/admin/clientes/novo">Novo cliente</CreateLink>}
      />
      {!hasDatabase && <SetupNotice />}

      {clients.length === 0 ? (
        <EmptyState>Nenhum cliente cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {clients.map((client) => (
            <ListRow
              key={client.id ?? client.name}
              href={`/admin/clientes/${client.id ?? ""}`}
              image={client.logo}
              title={client.name}
              subtitle={client.logo ? undefined : "Sem logo (mostra placeholder)"}
              id={client.id}
              deleteAction={deleteClient}
              deleteConfirm={`Excluir o cliente "${client.name}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
