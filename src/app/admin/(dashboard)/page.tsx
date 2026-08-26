import Link from "next/link";
import { hasDatabase } from "@/lib/prisma";
import { Icon, type IconName } from "@/components/icons";
import { PageHeader, Card, SetupNotice } from "@/components/admin/ui";
import { SECTIONS } from "@/lib/sections";

const shortcuts: { href: string; label: string; description: string; icon: IconName }[] = [
  { href: "/admin/servicos", label: "Serviços", description: "Catálogo de serviços com foto e descrição.", icon: "document" },
  { href: "/admin/segmentos", label: "Segmentos", description: "Setores atendidos (Indústrias, Mineração, etc).", icon: "map" },
  { href: "/admin/blocos", label: "Blocos de campo", description: "Sondagem de Solo, Execução Ambiental e Topografia.", icon: "field" },
  { href: "/admin/galeria", label: "Galeria", description: "Fotos de campo e aéreas.", icon: "image" },
  { href: "/admin/clientes", label: "Clientes", description: "Carrossel de logos de clientes.", icon: "team" },
  { href: "/admin/faq", label: "Dúvidas frequentes", description: "Perguntas e respostas do FAQ.", icon: "help" },
  { href: "/admin/configuracoes", label: "Contato e dados gerais", description: "Telefones, e-mail, endereço e redes sociais.", icon: "gear" },
  { href: "/admin/usuarios", label: "Usuários", description: "Quem pode fazer login no painel administrativo.", icon: "user" },
];

export default function AdminHomePage() {
  return (
    <div>
      <PageHeader
        title="Painel administrativo"
        description="Edite o conteúdo do site avancoambiental. As mudanças aparecem no ar em poucos segundos."
      />

      {!hasDatabase && <SetupNotice />}

      <div className="mb-10">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="font-display text-lg font-medium text-forest-900">
              Editar por seção
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              Na ordem em que aparecem na página, com prévia ao lado.
            </p>
          </div>
          <Link
            href="/admin/secoes"
            className="shrink-0 text-sm font-semibold text-forest-700 transition hover:text-forest-900"
          >
            Ver todas
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SECTIONS.map((section, i) => (
            <Link
              key={section.slug}
              href={`/admin/secoes/${section.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-ink-900/5 bg-white p-4 shadow-sm shadow-ink-900/5 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-forest-900/10"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-forest-800/8 font-display text-xs font-medium text-forest-700 transition group-hover:bg-forest-800 group-hover:text-moss-300">
                {i + 1}
              </span>
              <span className="min-w-0 truncate text-sm font-medium text-forest-900">
                {section.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-medium text-forest-900">
          Listas e cadastros
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shortcuts.map((section) => (
            <Link key={section.href} href={section.href} className="group">
              <Card className="h-full transition group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-forest-900/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-800/8 text-forest-700 transition group-hover:bg-forest-800 group-hover:text-moss-300">
                  <Icon name={section.icon} className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-base font-medium text-forest-900">
                  {section.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{section.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
