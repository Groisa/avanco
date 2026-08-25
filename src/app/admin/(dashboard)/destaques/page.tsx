import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteFeatureStripItem } from "./actions";

export default async function DestaquesPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Faixa de destaques" action={<CreateLink href="/admin/destaques/novo">Novo destaque</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let items: { id: string; title: string; image: string }[] = [];
  let error: string | null = null;
  try {
    items = await prisma.featureStripItem.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Faixa de destaques"
        description="As 5 imagens com título exibidas na faixa escura entre as seções do site."
        action={<CreateLink href="/admin/destaques/novo">Novo destaque</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && items.length === 0 ? (
        <EmptyState>Nenhum destaque cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/destaques/${item.id}`}
              image={item.image}
              title={item.title}
              id={item.id}
              deleteAction={deleteFeatureStripItem}
              deleteConfirm={`Excluir o destaque "${item.title}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
