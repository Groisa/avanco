import { getFaqItems } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteFaqItem } from "./actions";

type FaqRow = { id?: string; question: string; answer: string; order?: number };

export default async function FaqPage() {
  const faq = (await getFaqItems()) as FaqRow[];

  return (
    <div>
      <PageHeader
        title="Dúvidas frequentes"
        description="Perguntas e respostas do FAQ."
        action={<CreateLink href="/admin/faq/novo">Nova pergunta</CreateLink>}
      />
      {!hasDatabase && <SetupNotice />}

      {faq.length === 0 ? (
        <EmptyState>Nenhuma pergunta cadastrada ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {faq.map((item) => (
            <ListRow
              key={item.id ?? item.question}
              href={`/admin/faq/${item.id ?? ""}`}
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
