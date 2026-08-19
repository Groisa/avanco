import { getGalleryImages } from "@/lib/content";
import { hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteGalleryImage } from "./actions";

type GalleryRow = { id?: string; src: string; alt: string; order?: number };

export default async function GaleriaPage() {
  const galleryImages = (await getGalleryImages()) as GalleryRow[];

  return (
    <div>
      <PageHeader
        title="Galeria"
        description="Fotos exibidas na grade da seção Galeria."
        action={<CreateLink href="/admin/galeria/novo">Nova foto</CreateLink>}
      />
      {!hasDatabase && <SetupNotice />}

      {galleryImages.length === 0 ? (
        <EmptyState>Nenhuma foto cadastrada ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {galleryImages.map((image) => (
            <ListRow
              key={image.id ?? image.src}
              href={`/admin/galeria/${image.id ?? ""}`}
              image={image.src}
              title={image.alt || "(sem descrição)"}
              id={image.id}
              deleteAction={deleteGalleryImage}
              deleteConfirm="Excluir esta foto da galeria?"
            />
          ))}
        </div>
      )}
    </div>
  );
}
