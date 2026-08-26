import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deletePillar } from "./actions";

export default async function DiferenciaisPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Especialidades" action={<CreateLink href="/admin/diferenciais/novo">Novo item</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let pillars: { id: string; title: string; icon: string }[] = [];
  let error: string | null = null;
  try {
    pillars = await prisma.pillar.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Especialidades"
        description="Os ícones com título exibidos em 'Somos especialistas em soluções ambientais'."
        action={<CreateLink href="/admin/diferenciais/novo">Novo item</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && pillars.length === 0 ? (
        <EmptyState>Nenhum item cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {pillars.map((pillar) => (
            <ListRow
              key={pillar.id}
              href={`/admin/diferenciais/${pillar.id}`}
              title={pillar.title}
              subtitle={`Ícone: ${pillar.icon}`}
              id={pillar.id}
              deleteAction={deletePillar}
              deleteConfirm={`Excluir "${pillar.title}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
