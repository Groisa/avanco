import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteClient } from "./actions";

export default async function ClientesPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Clientes" action={<CreateLink href="/admin/clientes/novo">Novo cliente</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let clients: { id: string; name: string; logo: string | null }[] = [];
  let error: string | null = null;
  try {
    clients = await prisma.client.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Clientes"
        description="Carrossel de logos na página. Deixe o campo Logo vazio para mostrar um placeholder com o nome."
        action={<CreateLink href="/admin/clientes/novo">Novo cliente</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && clients.length === 0 ? (
        <EmptyState>Nenhum cliente cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {clients.map((client) => (
            <ListRow
              key={client.id}
              href={`/admin/clientes/${client.id}`}
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
