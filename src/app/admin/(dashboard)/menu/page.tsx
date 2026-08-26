import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteNavItem } from "./actions";

export default async function MenuPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Menu de navegação" action={<CreateLink href="/admin/menu/novo">Novo item</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let items: { id: string; label: string; href: string }[] = [];
  let error: string | null = null;
  try {
    items = await prisma.navItem.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Menu de navegação"
        description="Os links do menu no topo do site e no rodapé."
        action={<CreateLink href="/admin/menu/novo">Novo item</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && items.length === 0 ? (
        <EmptyState>Nenhum item cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/menu/${item.id}`}
              title={item.label}
              subtitle={item.href}
              id={item.id}
              deleteAction={deleteNavItem}
              deleteConfirm={`Excluir "${item.label}" do menu?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
