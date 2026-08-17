import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="bg-sand-100 py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/campo-sondagem-solo.jpg"
                alt="Especialista da Avanço Ambiental realizando sondagem de solo em campo"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden aspect-[4/5] w-2/5 overflow-hidden rounded-2xl border-8 border-sand-100 shadow-xl sm:block">
              <Image
                src="/images/campo-viveiro-mudas.jpg"
                alt="Viveiro de mudas nativas para projetos de recuperação ambiental"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-600">
            Quem somos
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
            Consultoria ambiental próxima, técnica e comprometida com resultado
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            A Avanço Ambiental reúne profissionais experientes para viabilizar
            projetos socioambientais multidisciplinares. Para cada segmento
            econômico, entendemos as demandas específicas do seu negócio e
            construímos soluções sob medida &mdash; sempre com uma relação
            próxima e transparente com clientes e parceiros.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Do estudo técnico ao acompanhamento em campo, conduzimos cada
            etapa com agilidade, buscando resultados rápidos e efetivos que
            impulsionam seu negócio com práticas ambientais sustentáveis.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-900/10 pt-8">
            <div>
              <dt className="font-display text-2xl text-forest-800">4</dt>
              <dd className="mt-1 text-sm text-ink-500">
                Especialistas multidisciplinares
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-forest-800">MG</dt>
              <dd className="mt-1 text-sm text-ink-500">
                Atendimento em todo o estado
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
