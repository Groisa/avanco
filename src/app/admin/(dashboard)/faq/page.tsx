import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteFaqItem } from "./actions";

export default async function FaqPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Dúvidas frequentes" action={<CreateLink href="/admin/faq/novo">Nova pergunta</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let faq: { id: string; question: string; answer: string }[] = [];
  let error: string | null = null;
  try {
    faq = await prisma.faqItem.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Dúvidas frequentes"
        description="Perguntas e respostas do FAQ."
        action={<CreateLink href="/admin/faq/novo">Nova pergunta</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && faq.length === 0 ? (
        <EmptyState>Nenhuma pergunta cadastrada ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {faq.map((item) => (
            <ListRow
              key={item.id}
              href={`/admin/faq/${item.id}`}
              title={item.question}
              subtitle={item.answer}
              id={item.id}
              deleteAction={deleteFaqItem}
              deleteConfirm="Excluir esta pergunta?"
            />
          ))}
        </div>
      )}
    </div>
  );
}
