import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteWhyUsItem } from "./actions";

export default async function VantagensPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Por que nos escolher" action={<CreateLink href="/admin/vantagens/novo">Novo item</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let items: { id: string; text: string }[] = [];
  let error: string | null = null;
  try {
    items = await prisma.whyUsItem.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Por que nos escolher"
        description="A lista de itens exibida em 'Por que escolher a Avanço Ambiental?'."
        action={<CreateLink href="/admin/vantagens/novo">Novo item</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && items.length === 0 ? (
        <EmptyState>Nenhum item cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/vantagens/${item.id}`}
              title={item.text}
              id={item.id}
              deleteAction={deleteWhyUsItem}
              deleteConfirm={`Excluir este item?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
