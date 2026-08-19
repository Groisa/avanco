import { getServices } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteService } from "./actions";

type ServiceRow = { id?: string; title: string; description: string; image: string; order?: number };

export default async function ServicosPage() {
  const services = (await getServices()) as ServiceRow[];

  return (
    <div>
      <PageHeader
        title="Serviços"
        description={`${services.length} serviços no catálogo. Aparecem em destaque (9 aleatórios) na página, com "ver mais" para o restante.`}
        action={<CreateLink href="/admin/servicos/novo">Novo serviço</CreateLink>}
      />
      {!hasDatabase && <SetupNotice />}

      {services.length === 0 ? (
        <EmptyState>Nenhum serviço cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {services.map((service) => (
            <ListRow
              key={service.id ?? service.title}
              href={`/admin/servicos/${service.id ?? ""}`}
              image={service.image}
              title={service.title}
              subtitle={service.description}
              id={service.id}
              deleteAction={deleteService}
              deleteConfirm={`Excluir o serviço "${service.title}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
