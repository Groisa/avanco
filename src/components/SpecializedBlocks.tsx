import Image from "next/image";
import { getSpecializedBlocks } from "@/lib/content";
import Reveal from "./Reveal";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-snug text-ink-700">
      <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-forest-700/10 text-forest-700">
        <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5">
          <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </li>
  );
}

export default async function SpecializedBlocks() {
  const specializedBlocks = await getSpecializedBlocks();

  return (
    <section className="bg-sand-100 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-600">
              Serviços de campo
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
              Investigação, execução e precisão em cada etapa
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 space-y-14">
          {specializedBlocks.map((block) => (
            <Reveal key={block.title}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-ink-900/5 ring-1 ring-ink-900/5">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8 sm:p-10 lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-moss-400">
                    {block.title}
                  </p>
                  <h3 className="mt-3 text-balance font-display text-2xl font-medium leading-snug text-forest-900 sm:text-3xl">
                    {block.headline}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-500">
                    {block.intro}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2">
                    {block.groups.map((group) => (
                      <div key={group.subtitle ?? block.title}>
                        {group.subtitle && (
                          <p className="mb-3 font-display text-base font-medium text-forest-800">
                            {group.subtitle}
                          </p>
                        )}
                        <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                          {group.items.map((item) => (
                            <CheckItem key={item}>{item}</CheckItem>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
