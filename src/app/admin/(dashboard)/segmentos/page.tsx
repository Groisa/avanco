import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteSector } from "./actions";

export default async function SegmentosPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Segmentos" action={<CreateLink href="/admin/segmentos/novo">Novo segmento</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let sectors: { id: string; title: string; description: string; image: string }[] = [];
  let error: string | null = null;
  try {
    sectors = await prisma.sector.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Segmentos"
        description="Setores econômicos atendidos, exibidos com foto e ícone."
        action={<CreateLink href="/admin/segmentos/novo">Novo segmento</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && sectors.length === 0 ? (
        <EmptyState>Nenhum segmento cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {sectors.map((sector) => (
            <ListRow
              key={sector.id}
              href={`/admin/segmentos/${sector.id}`}
              image={sector.image}
              title={sector.title}
              subtitle={sector.description}
              id={sector.id}
              deleteAction={deleteSector}
              deleteConfirm={`Excluir o segmento "${sector.title}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
