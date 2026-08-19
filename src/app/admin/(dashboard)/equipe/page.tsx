import { prisma, hasDatabase } from "@/lib/prisma";
import { formations as staticFormations } from "@/data/site";
import { PageHeader, SetupNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteFormation } from "./actions";

async function loadFormations() {
  if (hasDatabase) {
    try {
      const rows = await prisma.formation.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch {}
  }
  return staticFormations.map((name, i) => ({ id: undefined as unknown as string, name, order: i }));
}

export default async function EquipePage() {
  const formations = await loadFormations();

  return (
    <div>
      <PageHeader
        title="Formações da equipe"
        description="Lista de formações técnicas exibidas na seção Equipe."
        action={<CreateLink href="/admin/equipe/novo">Nova formação</CreateLink>}
      />
      {!hasDatabase && <SetupNotice />}

      {formations.length === 0 ? (
        <EmptyState>Nenhuma formação cadastrada ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {formations.map((formation) => (
            <ListRow
              key={formation.id ?? formation.name}
              href={`/admin/equipe/${formation.id ?? ""}`}
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
