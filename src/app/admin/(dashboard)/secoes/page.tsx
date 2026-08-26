import Link from "next/link";
import { SECTIONS } from "@/lib/sections";
import { PageHeader, Card } from "@/components/admin/ui";

export default function SecoesPage() {
  return (
    <div>
      <PageHeader
        title="Seções do site"
        description="Na mesma ordem em que aparecem na página. Clique em uma seção para editar seus textos e imagens com prévia ao lado."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((section, i) => (
          <Link key={section.slug} href={`/admin/secoes/${section.slug}`} className="group">
            <Card className="h-full transition group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-forest-900/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-800/8 font-display text-sm font-medium text-forest-700 transition group-hover:bg-forest-800 group-hover:text-moss-300">
                {i + 1}
              </span>
              <p className="mt-4 font-display text-base font-medium text-forest-900">
                {section.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                {section.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
