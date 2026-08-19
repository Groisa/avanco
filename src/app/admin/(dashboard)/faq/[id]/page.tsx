import { notFound } from "next/navigation";
import { prisma, hasDatabase } from "@/lib/prisma";
import { BackLink, PageHeader, Card, Field, Input, Textarea, SaveButton, DeleteButton, SetupNotice } from "@/components/admin/ui";
import { updateFaqItem, deleteFaqItem } from "../actions";

export default async function EditarPerguntaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!hasDatabase) {
    return (
      <div>
        <BackLink href="/admin/faq">Voltar para Dúvidas frequentes</BackLink>
        <PageHeader title="Editar pergunta" />
        <SetupNotice />
      </div>
    );
  }

  const item = await prisma.faqItem.findUnique({ where: { id } });
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/admin/faq">Voltar para Dúvidas frequentes</BackLink>
      <PageHeader title="Editar pergunta" />
      <Card>
        <form action={updateFaqItem} className="space-y-4">
          <input type="hidden" name="id" value={item.id} />
          <Field label="Pergunta">
            <Input name="question" defaultValue={item.question} required />
          </Field>
          <Field label="Resposta">
            <Textarea name="answer" rows={3} defaultValue={item.answer} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={item.order} className="w-24" />
          </Field>
          <div className="flex gap-3">
            <SaveButton />
            <DeleteButton formAction={deleteFaqItem} confirmMessage="Excluir esta pergunta?" />
          </div>
        </form>
      </Card>
    </div>
  );
}
