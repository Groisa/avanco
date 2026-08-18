import { clients } from "@/data/site";
import Reveal from "./Reveal";

// Placeholder slots — replace `clients` in src/data/site.ts with the real
// client logos/names once they're available and this carousel updates itself.
export default function ClientsCarousel() {
  const track = [...clients, ...clients];

  return (
    <section id="clientes" className="border-y border-ink-900/10 bg-sand-200 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-ink-500">
            Empresas e produtores que confiam na Avanço Ambiental
          </p>
        </Reveal>
      </div>

      <div className="group relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-sand-200 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-sand-200 to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="mx-4 flex h-24 w-52 shrink-0 items-center justify-center gap-3 rounded-2xl border border-dashed border-ink-900/15 bg-white/70 px-6 text-ink-500 sm:w-60"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 shrink-0 text-forest-600"
              >
                <path
                  d="M12 3c2.8 3 4.5 6 4.5 9a4.5 4.5 0 1 1-9 0c0-3 1.7-6 4.5-9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12v8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-sm font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
