import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deletePainPoint } from "./actions";

export default async function RiscosPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Riscos ambientais" action={<CreateLink href="/admin/riscos/novo">Novo risco</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let items: { id: string; text: string }[] = [];
  let error: string | null = null;
  try {
    items = await prisma.painPoint.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Riscos ambientais"
        description="Os itens listados em 'Problemas ambientais podem gerar:' (Multas, Embargos, etc)."
        action={<CreateLink href="/admin/riscos/novo">Novo risco</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && items.length === 0 ? (
        <EmptyState>Nenhum risco cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/riscos/${item.id}`}
              title={item.text}
              id={item.id}
              deleteAction={deletePainPoint}
              deleteConfirm={`Excluir "${item.text}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
