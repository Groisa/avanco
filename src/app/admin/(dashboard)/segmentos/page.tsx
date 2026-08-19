import { getSectors } from "@/lib/content";
import { getAvailableImages } from "@/lib/images";
import { hasDatabase } from "@/lib/prisma";
import { Card, Field, Input, Textarea, Select, ImagePicker, SaveButton, DeleteButton, PageHeader, SetupNotice } from "@/components/admin/ui";
import { updateSector, createSector, deleteSector } from "./actions";

const ICON_OPTIONS = [
  "factory", "pickaxe", "crane", "leaf", "building", "fuel", "gov",
  "drop", "map", "drone", "document", "gear", "field", "recycle",
];

type SectorRow = { id?: string; title: string; description: string; image: string; icon?: string; order?: number };

export default async function SegmentosPage() {
  const sectors = (await getSectors()) as SectorRow[];
  const images = getAvailableImages();

  return (
    <div>
      <PageHeader title="Segmentos" description="Setores econômicos atendidos, exibidos com foto e ícone." />
      {!hasDatabase && <SetupNotice />}

      <div className="space-y-4">
        {sectors.map((sector) => (
          <Card key={sector.id ?? sector.title}>
            <form action={updateSector} className="space-y-4">
              <input type="hidden" name="id" value={sector.id} />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_auto]">
                <Field label="Título">
                  <Input name="title" defaultValue={sector.title} required />
                </Field>
                <Field label="Ícone">
                  <Select name="icon" defaultValue={sector.icon ?? "leaf"}>
                    {ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
                  </Select>
                </Field>
                <Field label="Ordem">
                  <Input name="order" type="number" defaultValue={sector.order ?? 0} className="w-24" />
                </Field>
              </div>
              <Field label="Descrição">
                <Textarea name="description" rows={2} defaultValue={sector.description} />
              </Field>
              <Field label="Imagem">
                <ImagePicker name="image" defaultValue={sector.image} images={images} />
              </Field>
              <div className="flex gap-3">
                <SaveButton />
                {sector.id && (
                  <DeleteButton formAction={deleteSector} confirmMessage={`Excluir o segmento "${sector.title}"?`} />
                )}
              </div>
            </form>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-2 border-dashed border-forest-600/20">
        <p className="mb-4 font-display text-base font-medium text-forest-900">Adicionar segmento</p>
        <form action={createSector} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Título">
              <Input name="title" required />
            </Field>
            <Field label="Ícone">
              <Select name="icon" defaultValue="leaf">
                {ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Descrição">
            <Textarea name="description" rows={2} />
          </Field>
          <Field label="Imagem">
            <ImagePicker name="image" defaultValue="" images={images} />
          </Field>
          <Field label="Ordem">
            <Input name="order" type="number" defaultValue={sectors.length} className="w-24" />
          </Field>
          <SaveButton>Adicionar</SaveButton>
        </form>
      </Card>
    </div>
  );
}
