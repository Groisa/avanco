import { getSpecializedBlocks } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteBlock } from "./actions";

type BlockRow = { id?: string; title: string; headline: string; image: string; order?: number };

export default async function BlocosPage() {
  const blocks = (await getSpecializedBlocks()) as BlockRow[];

  return (
    <div>
      <PageHeader
        title="Blocos de campo"
        description="Sondagem de Solo, Execução Ambiental, Topografia — seções com texto completo e checklist."
        action={<CreateLink href="/admin/blocos/novo">Novo bloco</CreateLink>}
      />
      {!hasDatabase && <SetupNotice />}

      {blocks.length === 0 ? (
        <EmptyState>Nenhum bloco cadastrado ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {blocks.map((block) => (
            <ListRow
              key={block.id ?? block.title}
              href={`/admin/blocos/${block.id ?? ""}`}
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
