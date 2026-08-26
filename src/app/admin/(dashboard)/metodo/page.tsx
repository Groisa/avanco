import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteProcessStep } from "./actions";

export default async function MetodoPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Método de trabalho" action={<CreateLink href="/admin/metodo/novo">Nova etapa</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let steps: { id: string; step: string; title: string }[] = [];
  let error: string | null = null;
  try {
    steps = await prisma.processStep.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Método de trabalho"
        description="As etapas numeradas exibidas na seção 'Método de trabalho'."
        action={<CreateLink href="/admin/metodo/novo">Nova etapa</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && steps.length === 0 ? (
        <EmptyState>Nenhuma etapa cadastrada ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {steps.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/metodo/${item.id}`}
              title={`${item.step} — ${item.title}`}
              id={item.id}
              deleteAction={deleteProcessStep}
              deleteConfirm={`Excluir a etapa "${item.title}"?`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
