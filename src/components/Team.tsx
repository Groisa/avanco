import Image from "next/image";
import { formations } from "@/data/site";
import { Icon } from "./icons";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="equipe" className="bg-sand-100 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/equipe-campo-02.jpg"
                alt="Equipe da Avanço Ambiental em campo"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-600">
                Equipe
              </p>
              <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
                Formações multidisciplinares, presentes em campo
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700">
                Nossa equipe reúne profissionais de diferentes formações
                técnicas, trabalhando juntos para viabilizar o seu projeto
                do início ao fim.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {formations.map((formation, i) => (
                <Reveal key={formation} delay={i * 60}>
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-900/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-800 text-moss-300">
                      <Icon name="expert" className="h-5 w-5" />
                    </span>
                    <p className="font-display text-base font-medium leading-snug text-forest-900">
                      {formation}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
