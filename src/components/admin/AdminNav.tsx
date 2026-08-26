"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/icons";
import { SECTIONS } from "@/lib/sections";

const topLinks: { href: string; label: string; icon: IconName; exact?: boolean }[] = [
  { href: "/admin", label: "Início", icon: "home", exact: true },
];

const bottomLinks: { href: string; label: string; icon: IconName }[] = [
  { href: "/admin/configuracoes", label: "Contato e dados gerais", icon: "gear" },
  { href: "/admin/usuarios", label: "Usuários", icon: "user" },
];

function NavLink({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon?: IconName;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
        active ? "bg-moss-400/15 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon && (
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
            active ? "bg-moss-400/20 text-moss-300" : "bg-white/5 text-white/40 group-hover:text-moss-300"
          }`}
        >
          <Icon name={icon} className="h-4 w-4" />
        </span>
      )}
      <span className="leading-snug">{label}</span>
    </Link>
  );
}

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="mt-8 flex flex-1 flex-col gap-1">
      {topLinks.map((link) => (
        <NavLink
          key={link.href}
          {...link}
          active={link.exact ? pathname === link.href : Boolean(pathname?.startsWith(link.href))}
        />
      ))}

      <p className="mb-1 mt-5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
        Seções da página
      </p>
      {SECTIONS.map((section, i) => {
        const href = `/admin/secoes/${section.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={section.slug}
            href={href}
            className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
              active ? "bg-moss-400/15 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] transition ${
                active
                  ? "bg-moss-400/20 text-moss-300"
                  : "bg-white/5 text-white/35 group-hover:text-moss-300"
              }`}
            >
              {i + 1}
            </span>
            <span className="leading-snug">{section.label}</span>
          </Link>
        );
      })}

      <p className="mb-1 mt-5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
        Geral
      </p>
      {bottomLinks.map((link) => (
        <NavLink
          key={link.href}
          {...link}
          active={Boolean(pathname?.startsWith(link.href))}
        />
      ))}
    </nav>
  );
}
