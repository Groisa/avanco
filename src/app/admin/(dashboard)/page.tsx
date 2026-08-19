import Link from "next/link";
import { hasDatabase } from "@/lib/prisma";
import { PageHeader, Card } from "@/components/admin/ui";

const sections = [
  { href: "/admin/configuracoes", label: "Configurações e Hero", description: "Contato, endereço, redes sociais e texto do topo." },
  { href: "/admin/servicos", label: "Serviços", description: "Catálogo de serviços com foto e descrição." },
  { href: "/admin/blocos", label: "Blocos de campo", description: "Sondagem de Solo, Execução Ambiental e Topografia." },
  { href: "/admin/segmentos", label: "Segmentos", description: "Setores atendidos (Indústrias, Mineração, etc)." },
  { href: "/admin/clientes", label: "Clientes", description: "Carrossel de logos de clientes." },
  { href: "/admin/galeria", label: "Galeria", description: "Fotos de campo e aéreas." },
  { href: "/admin/equipe", label: "Formações da equipe", description: "Formações técnicas exibidas na seção Equipe." },
  { href: "/admin/faq", label: "Dúvidas frequentes", description: "Perguntas e respostas do FAQ." },
];

export default function AdminHomePage() {
  return (
    <div>
      <PageHeader
        title="Painel administrativo"
        description="Edite o conteúdo do site avancoambiental. As mudanças aparecem no ar em poucos segundos."
      />

      {!hasDatabase && (
        <Card className="mb-8 border border-clay-500/30">
          <p className="font-display text-base font-medium text-clay-600">
            Banco de dados ainda não conectado
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            O site está funcionando normalmente com o conteúdo padrão. Assim
            que o Supabase for configurado (variáveis <code>DATABASE_URL</code>,{" "}
            <code>NEXT_PUBLIC_SUPABASE_URL</code> e chaves), rode{" "}
            <code>npx prisma migrate deploy</code> e <code>npm run db:seed</code> —
            as edições feitas aqui passam a valer no site imediatamente.
          </p>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="h-full transition hover:shadow-md">
              <p className="font-display text-base font-medium text-forest-900">
                {section.label}
              </p>
              <p className="mt-1.5 text-sm text-ink-500">{section.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
