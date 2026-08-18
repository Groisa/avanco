import { process } from "@/data/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="bg-sand-100 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-600">
              Nosso método
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
              Método de trabalho
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div className="absolute inset-x-0 top-6 hidden border-t border-dashed border-forest-600/30 lg:block" />
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 90}>
              <div className="relative flex flex-col items-center text-center lg:items-center">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-800 font-display text-sm font-medium text-moss-300 ring-4 ring-sand-100">
                  {item.step}
                </span>
                <p className="mt-4 font-display text-base font-medium text-forest-900">
                  {item.title}
                </p>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
