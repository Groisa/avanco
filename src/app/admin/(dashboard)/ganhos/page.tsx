import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteClientGain } from "./actions";

export default async function GanhosPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="O que o cliente ganha" action={<CreateLink href="/admin/ganhos/novo">Novo item</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let items: { id: string; label: string; icon: string }[] = [];
  let error: string | null = null;
  try {
    items = await prisma.clientGain.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="O que o cliente ganha"
        description="Os ícones exibidos em 'O que nossos clientes ganham'."
        action={<CreateLink href="/admin/ganhos/novo">Novo item</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && items.length === 0 ? (
        <EmptyState>Nenhum item cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/ganhos/${item.id}`}
              title={item.label}
              subtitle={`Ícone: ${item.icon}`}
              id={item.id}
              deleteAction={deleteClientGain}
              deleteConfirm={`Excluir "${item.label}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
