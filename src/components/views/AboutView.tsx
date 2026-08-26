import Image from "next/image";
import Reveal from "../Reveal";

export default function AboutView({
  about,
}: {
  about: {
    eyebrow: string;
    headline: string;
    text1: string;
    text2: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    image1: string;
    image2: string;
  };
}) {
  return (
    <section id="sobre" className="bg-sand-200 py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src={about.image1}
                alt="Especialista da Avanço Ambiental realizando sondagem de solo em campo"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden aspect-[4/5] w-2/5 overflow-hidden rounded-2xl border-8 border-sand-100 shadow-xl sm:block">
              <Image
                src={about.image2}
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
            {about.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
            {about.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            {about.text1}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            {about.text2}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-900/10 pt-8">
            <div>
              <dt className="font-display text-2xl text-forest-800">{about.stat1Value}</dt>
              <dd className="mt-1 text-sm text-ink-500">
                {about.stat1Label}
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-forest-800">{about.stat2Value}</dt>
              <dd className="mt-1 text-sm text-ink-500">
                {about.stat2Label}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
