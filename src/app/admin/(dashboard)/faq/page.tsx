import { getFaqItems } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { Card, Field, Input, Textarea, SaveButton, DeleteButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { updateFaqItem, createFaqItem, deleteFaqItem } from "./actions";

type FaqRow = { id?: string; question: string; answer: string; order?: number };

export default async function FaqPage() {
  const faq = (await getFaqItems()) as FaqRow[];

  return (
    <div>
      <PageHeader title="Dúvidas frequentes" description="Perguntas e respostas do FAQ." />
      {!hasDatabase && <SetupNotice />}

      <div className="space-y-4">
        {faq.map((item) => (
          <Card key={item.id ?? item.question}>
            <form action={updateFaqItem} className="space-y-3">
              <input type="hidden" name="id" value={item.id} />
              <Field label="Pergunta">
                <Input name="question" defaultValue={item.question} required />
              </Field>
              <Field label="Resposta">
                <Textarea name="answer" rows={2} defaultValue={item.answer} />
              </Field>
              <div className="flex items-end gap-3">
                <Field label="Ordem">
                  <Input name="order" type="number" defaultValue={item.order ?? 0} className="w-20" />
                </Field>
                <SaveButton />
                {item.id && (
                  <DeleteButton formAction={deleteFaqItem} confirmMessage="Excluir esta pergunta?" />
                )}
              </div>
            </form>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-2 border-dashed border-forest-600/20">
        <p className="mb-4 font-display text-base font-medium text-forest-900">Adicionar pergunta</p>
        <form action={createFaqItem} className="space-y-3">
          <Field label="Pergunta">
            <Input name="question" required />
          </Field>
          <Field label="Resposta">
            <Textarea name="answer" rows={2} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={faq.length} className="w-20" />
          </Field>
          <SaveButton>Adicionar</SaveButton>
        </form>
      </Card>
    </div>
  );
}
