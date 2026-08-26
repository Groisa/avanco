import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteChecklistItem } from "./actions";

export default async function ChecklistPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Checklist da capa" action={<CreateLink href="/admin/checklist/novo">Novo item</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let items: { id: string; text: string }[] = [];
  let error: string | null = null;
  try {
    items = await prisma.heroChecklistItem.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Checklist da capa"
        description="Os itens com marcador de check exibidos abaixo do texto principal da capa."
        action={<CreateLink href="/admin/checklist/novo">Novo item</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && items.length === 0 ? (
        <EmptyState>Nenhum item cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/checklist/${item.id}`}
              title={item.text}
              id={item.id}
              deleteAction={deleteChecklistItem}
              deleteConfirm="Excluir este item?"
            />
          ))}
        </div>
      )}
    </div>
  );
}
