import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div>
          <p className="font-display text-lg font-medium text-white">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-white/50">
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
