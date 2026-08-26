import Link from "next/link";
import { hasDatabase } from "@/lib/prisma";
import { Icon, type IconName } from "@/components/icons";
import { PageHeader, Card, SetupNotice } from "@/components/admin/ui";

const sections: { href: string; label: string; description: string; icon: IconName }[] = [
  { href: "/admin/configuracoes", label: "Configurações e Hero", description: "Contato, endereço, redes sociais e texto do topo.", icon: "gear" },
  { href: "/admin/menu", label: "Menu de navegação", description: "Links do menu no topo e no rodapé.", icon: "map" },
  { href: "/admin/checklist", label: "Checklist da capa", description: "Itens com check abaixo do texto da capa.", icon: "check" },
  { href: "/admin/cards-topo", label: "Cards abaixo da capa", description: "Os 4 cards brancos logo abaixo da capa.", icon: "clipboard" },
  { href: "/admin/riscos", label: "Riscos ambientais", description: "Multas, Embargos e demais riscos listados.", icon: "risk" },
  { href: "/admin/servicos", label: "Serviços", description: "Catálogo de serviços com foto e descrição.", icon: "document" },
  { href: "/admin/blocos", label: "Blocos de campo", description: "Sondagem de Solo, Execução Ambiental e Topografia.", icon: "field" },
  { href: "/admin/segmentos", label: "Segmentos", description: "Setores atendidos (Indústrias, Mineração, etc).", icon: "map" },
  { href: "/admin/diferenciais", label: "Especialidades", description: "Ícones de 'Somos especialistas em soluções ambientais'.", icon: "leaf" },
  { href: "/admin/numeros", label: "Números do Hero", description: "Os cartões com números ao lado do texto principal da capa.", icon: "check" },
  { href: "/admin/vantagens", label: "Por que nos escolher", description: "Lista de itens de 'Por que escolher a Avanço Ambiental?'.", icon: "shield" },
  { href: "/admin/metodo", label: "Método de trabalho", description: "As etapas numeradas do processo de trabalho.", icon: "clipboard" },
  { href: "/admin/ganhos", label: "O que o cliente ganha", description: "Ícones de 'O que nossos clientes ganham'.", icon: "heart" },
  { href: "/admin/clientes", label: "Clientes", description: "Carrossel de logos de clientes.", icon: "team" },
  { href: "/admin/galeria", label: "Galeria", description: "Fotos de campo e aéreas.", icon: "image" },
  { href: "/admin/destaques", label: "Faixa de destaques", description: "As 5 imagens com título entre as seções do site.", icon: "image" },
  { href: "/admin/equipe", label: "Formações da equipe", description: "Formações técnicas exibidas na seção Equipe.", icon: "expert" },
  { href: "/admin/faq", label: "Dúvidas frequentes", description: "Perguntas e respostas do FAQ.", icon: "help" },
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
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
  );
}
