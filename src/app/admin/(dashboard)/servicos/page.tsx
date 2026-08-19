import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteService } from "./actions";

export default async function ServicosPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Serviços" action={<CreateLink href="/admin/servicos/novo">Novo serviço</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let services: { id: string; title: string; description: string; image: string }[] = [];
  let error: string | null = null;
  try {
    services = await prisma.service.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Serviços"
        description={`${services.length} serviços no catálogo. Aparecem em destaque (9 aleatórios) na página, com "ver mais" para o restante.`}
        action={<CreateLink href="/admin/servicos/novo">Novo serviço</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && services.length === 0 ? (
        <EmptyState>Nenhum serviço cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {services.map((service) => (
            <ListRow
              key={service.id}
              href={`/admin/servicos/${service.id}`}
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
