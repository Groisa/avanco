import { prisma, hasDatabase } from "@/lib/prisma";
import { formations as staticFormations } from "@/data/site";
import { Card, Field, Input, SaveButton, DeleteButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { updateFormation, createFormation, deleteFormation } from "./actions";

async function loadFormations() {
  if (hasDatabase) {
    try {
      const rows = await prisma.formation.findMany({ orderBy: { order: "asc" } });
      if (rows.length) return rows;
    } catch {}
  }
  return staticFormations.map((name, i) => ({ id: undefined as unknown as string, name, order: i }));
}

export default async function EquipePage() {
  const formations = await loadFormations();

  return (
    <div>
      <PageHeader title="Formações da equipe" description="Lista de formações técnicas exibidas na seção Equipe." />
      {!hasDatabase && <SetupNotice />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {formations.map((formation) => (
          <Card key={formation.id ?? formation.name}>
            <form action={updateFormation} className="flex items-end gap-3">
              <input type="hidden" name="id" value={formation.id} />
              <Field label="Formação">
                <Input name="name" defaultValue={formation.name} required />
              </Field>
              <Field label="Ordem">
                <Input name="order" type="number" defaultValue={formation.order ?? 0} className="w-20" />
              </Field>
              <SaveButton />
              {formation.id && (
                <DeleteButton formAction={deleteFormation} confirmMessage={`Excluir "${formation.name}"?`} />
              )}
            </form>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-2 border-dashed border-forest-600/20">
        <p className="mb-4 font-display text-base font-medium text-forest-900">Adicionar formação</p>
        <form action={createFormation} className="flex items-end gap-3">
          <Field label="Formação">
            <Input name="name" required placeholder="Ex: Engenharia Sanitária" />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={formations.length} className="w-20" />
          </Field>
          <SaveButton>Adicionar</SaveButton>
        </form>
      </Card>
    </div>
  );
}
