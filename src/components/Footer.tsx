import Image from "next/image";
import { nav } from "@/data/site";
import { getSiteSettings } from "@/lib/content";

export default async function Footer() {
  const { site, footerLogo } = await getSiteSettings();

  return (
    <footer className="bg-forest-950 border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src={footerLogo}
            alt={site.name}
            width={4883}
            height={1791}
            className="h-9 w-auto"
          />
          <p className="mt-3 text-sm text-white/50">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
