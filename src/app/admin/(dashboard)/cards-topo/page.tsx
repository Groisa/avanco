import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteDifferential } from "./actions";

export default async function CardsTopoPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Cards abaixo da capa" action={<CreateLink href="/admin/cards-topo/novo">Novo card</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let items: { id: string; title: string; description: string }[] = [];
  let error: string | null = null;
  try {
    items = await prisma.differential.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Cards abaixo da capa"
        description="Os 4 cards brancos que aparecem logo abaixo da capa (Equipe multidisciplinar, Presença em campo, etc)."
        action={<CreateLink href="/admin/cards-topo/novo">Novo card</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && items.length === 0 ? (
        <EmptyState>Nenhum card cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/cards-topo/${item.id}`}
              title={item.title}
              subtitle={item.description}
              id={item.id}
              deleteAction={deleteDifferential}
              deleteConfirm={`Excluir o card "${item.title}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
