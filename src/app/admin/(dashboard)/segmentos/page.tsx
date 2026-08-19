import { getSectors } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteSector } from "./actions";

type SectorRow = { id?: string; title: string; description: string; image: string; icon?: string; order?: number };

export default async function SegmentosPage() {
  const sectors = (await getSectors()) as SectorRow[];

  return (
    <div>
      <PageHeader
        title="Segmentos"
        description="Setores econômicos atendidos, exibidos com foto e ícone."
        action={<CreateLink href="/admin/segmentos/novo">Novo segmento</CreateLink>}
      />
      {!hasDatabase && <SetupNotice />}

      {sectors.length === 0 ? (
        <EmptyState>Nenhum segmento cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {sectors.map((sector) => (
            <ListRow
              key={sector.id ?? sector.title}
              href={`/admin/segmentos/${sector.id ?? ""}`}
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
