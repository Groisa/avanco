import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteFormation } from "./actions";

export default async function EquipePage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Formações da equipe" action={<CreateLink href="/admin/equipe/novo">Nova formação</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let formations: { id: string; name: string }[] = [];
  let error: string | null = null;
  try {
    formations = await prisma.formation.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Formações da equipe"
        description="Lista de formações técnicas exibidas na seção Equipe."
        action={<CreateLink href="/admin/equipe/novo">Nova formação</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && formations.length === 0 ? (
        <EmptyState>Nenhuma formação cadastrada ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {formations.map((formation) => (
            <ListRow
              key={formation.id}
              href={`/admin/equipe/${formation.id}`}
              title={formation.name}
              id={formation.id}
              deleteAction={deleteFormation}
              deleteConfirm={`Excluir "${formation.name}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
