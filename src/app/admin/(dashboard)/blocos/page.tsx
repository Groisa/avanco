import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteBlock } from "./actions";

export default async function BlocosPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Blocos de campo" action={<CreateLink href="/admin/blocos/novo">Novo bloco</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let blocks: { id: string; title: string; headline: string; image: string }[] = [];
  let error: string | null = null;
  try {
    blocks = await prisma.specializedBlock.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Blocos de campo"
        description="Sondagem de Solo, Execução Ambiental, Topografia — seções com texto completo e checklist."
        action={<CreateLink href="/admin/blocos/novo">Novo bloco</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && blocks.length === 0 ? (
        <EmptyState>Nenhum bloco cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {blocks.map((block) => (
            <ListRow
              key={block.id}
              href={`/admin/blocos/${block.id}`}
              image={block.image}
              title={block.title}
              subtitle={block.headline}
              id={block.id}
              deleteAction={deleteBlock}
              deleteConfirm={`Excluir o bloco "${block.title}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
