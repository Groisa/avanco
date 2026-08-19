import Link from "next/link";
import { signOut } from "../actions";

const links = [
  { href: "/admin", label: "Início", exact: true },
  { href: "/admin/configuracoes", label: "Configurações e Hero" },
  { href: "/admin/servicos", label: "Serviços" },
  { href: "/admin/blocos", label: "Blocos de campo" },
  { href: "/admin/segmentos", label: "Segmentos" },
  { href: "/admin/clientes", label: "Clientes" },
  { href: "/admin/galeria", label: "Galeria" },
  { href: "/admin/equipe", label: "Formações da equipe" },
  { href: "/admin/faq", label: "Dúvidas frequentes" },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sand-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col bg-forest-950 px-5 py-8 lg:flex">
          <p className="px-2 font-display text-lg font-medium text-white">
            Avanço Ambiental
          </p>
          <p className="px-2 text-xs uppercase tracking-wide text-white/40">
            Painel administrativo
          </p>

          <nav className="mt-8 flex flex-1 flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            target="_blank"
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-moss-300 transition hover:bg-white/5"
          >
            Ver site →
          </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="mt-1 w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              Sair
            </button>
          </form>
        </aside>

        <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <p className="font-display text-lg font-medium text-forest-900">
              Painel admin
            </p>
            <form action={signOut}>
              <button type="submit" className="text-sm text-ink-500">
                Sair
              </button>
            </form>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
