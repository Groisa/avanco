import { BackLink, PageHeader, Card, Field, Input, Textarea, SaveButton } from "@/components/admin/ui";
import { createFaqItem } from "../actions";

export default function NovaPerguntaPage() {
  return (
    <div>
      <BackLink href="/admin/faq">Voltar para Dúvidas frequentes</BackLink>
      <PageHeader title="Nova pergunta" />
      <Card>
        <form action={createFaqItem} className="space-y-4">
          <Field label="Pergunta">
            <Input name="question" required />
          </Field>
          <Field label="Resposta">
            <Textarea name="answer" rows={3} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={0} className="w-24" />
          </Field>
          <SaveButton>Adicionar pergunta</SaveButton>
        </form>
      </Card>
    </div>
  );
}
