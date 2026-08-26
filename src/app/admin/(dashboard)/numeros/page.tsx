import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteHeroBadge } from "./actions";

export default async function NumerosPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Números do Hero" action={<CreateLink href="/admin/numeros/novo">Novo número</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let badges: { id: string; label: string; value: string }[] = [];
  let error: string | null = null;
  try {
    badges = await prisma.heroBadge.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Números do Hero"
        description="Os cartões com números exibidos ao lado do texto principal da capa (ex: '9 Serviços ambientais prestados')."
        action={<CreateLink href="/admin/numeros/novo">Novo número</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && badges.length === 0 ? (
        <EmptyState>Nenhum número cadastrado ainda. Sem cadastro, o site calcula automaticamente 3 números padrão.</EmptyState>
      ) : (
        <div className="space-y-3">
          {badges.map((badge) => (
            <ListRow
              key={badge.id}
              href={`/admin/numeros/${badge.id}`}
              title={`${badge.value} — ${badge.label}`}
              id={badge.id}
              deleteAction={deleteHeroBadge}
              deleteConfirm={`Excluir "${badge.label}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
