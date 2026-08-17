import Image from "next/image";
import { services } from "@/data/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="bg-forest-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
              Serviços
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              Soluções ambientais completas para cada etapa do seu projeto
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <article className="group relative h-80 overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3 className="font-display text-xl font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
