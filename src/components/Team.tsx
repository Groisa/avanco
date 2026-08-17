import Image from "next/image";
import { team } from "@/data/site";
import Reveal from "./Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function Team() {
  return (
    <section id="equipe" className="bg-sand-100 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/campo-amostra-solo-01.jpg"
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
                Profissionais multidisciplinares, presentes em campo
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-700">
                Engenharia florestal, ambiental, civil e geologia trabalhando
                juntas para viabilizar o seu projeto do início ao fim.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={i * 90}>
                  <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-900/5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-800 font-display text-sm font-medium text-moss-300">
                      {initials(member.name)}
                    </span>
                    <div>
                      <p className="font-display text-base font-medium text-forest-900">
                        {member.name}
                      </p>
                      <p className="text-sm text-ink-500">{member.role}</p>
                    </div>
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
