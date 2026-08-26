"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/icons";

const links: { href: string; label: string; icon: IconName; exact?: boolean }[] = [
  { href: "/admin", label: "Início", icon: "home", exact: true },
  { href: "/admin/configuracoes", label: "Configurações e Hero", icon: "gear" },
  { href: "/admin/servicos", label: "Serviços", icon: "document" },
  { href: "/admin/blocos", label: "Blocos de campo", icon: "field" },
  { href: "/admin/segmentos", label: "Segmentos", icon: "map" },
  { href: "/admin/diferenciais", label: "Especialidades", icon: "leaf" },
  { href: "/admin/numeros", label: "Números do Hero", icon: "check" },
  { href: "/admin/vantagens", label: "Por que nos escolher", icon: "shield" },
  { href: "/admin/metodo", label: "Método de trabalho", icon: "clipboard" },
  { href: "/admin/ganhos", label: "O que o cliente ganha", icon: "heart" },
  { href: "/admin/clientes", label: "Clientes", icon: "team" },
  { href: "/admin/galeria", label: "Galeria", icon: "image" },
  { href: "/admin/destaques", label: "Faixa de destaques", icon: "image" },
  { href: "/admin/equipe", label: "Formações da equipe", icon: "expert" },
  { href: "/admin/faq", label: "Dúvidas frequentes", icon: "help" },
  { href: "/admin/usuarios", label: "Usuários", icon: "user" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="mt-8 flex flex-1 flex-col gap-1">
      {links.map((link) => {
        const active = link.exact ? pathname === link.href : pathname?.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
              active
                ? "bg-moss-400/15 text-white"
                : "text-white/65 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                active ? "bg-moss-400/20 text-moss-300" : "bg-white/5 text-white/40 group-hover:text-moss-300"
              }`}
            >
              <Icon name={link.icon} className="h-4 w-4" />
            </span>
            <span className="leading-snug">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
