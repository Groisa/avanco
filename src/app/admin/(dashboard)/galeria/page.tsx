import { prisma, hasDatabase } from "@/lib/prisma";
import { PageHeader, SetupNotice, ErrorNotice, CreateLink, ListRow, EmptyState } from "@/components/admin/ui";
import { deleteGalleryImage } from "./actions";

export default async function GaleriaPage() {
  if (!hasDatabase) {
    return (
      <div>
        <PageHeader title="Galeria" action={<CreateLink href="/admin/galeria/novo">Nova foto</CreateLink>} />
        <SetupNotice />
      </div>
    );
  }

  let galleryImages: { id: string; src: string; alt: string }[] = [];
  let error: string | null = null;
  try {
    galleryImages = await prisma.galleryImage.findMany({ orderBy: { order: "asc" } });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div>
      <PageHeader
        title="Galeria"
        description="Fotos exibidas na grade da seção Galeria."
        action={<CreateLink href="/admin/galeria/novo">Nova foto</CreateLink>}
      />
      {error && <ErrorNotice message={error} />}

      {!error && galleryImages.length === 0 ? (
        <EmptyState>Nenhuma foto cadastrada ainda.</EmptyState>
      ) : (
        <div className="space-y-3">
          {galleryImages.map((image) => (
            <ListRow
              key={image.id}
              href={`/admin/galeria/${image.id}`}
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
