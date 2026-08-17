import Image from "next/image";
import { site } from "@/data/site";

const chips = [
  "Licenciamento Ambiental",
  "EIA/RIMA",
  "Recursos Hídricos",
  "CAR",
  "PRAD",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest-950"
    >
      <Image
        src="/images/drone-represa-serra.jpg"
        alt="Vista aérea de represa cercada por serras em Minas Gerais"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
          <span className="h-px w-8 bg-moss-300" />
          Conselheiro Lafaiete &mdash; MG
        </p>
        <h1 className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          Excelência em consultoria ambiental para o seu negócio avançar
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-white/80">
          Para cada segmento econômico, encontramos soluções ambientais
          sustentáveis com disponibilidade, proximidade e eficiência &mdash;
          do estudo técnico à licença emitida.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-clay-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-clay-600/30 transition-colors hover:bg-clay-600"
          >
            Solicitar orçamento
          </a>
          <a
            href="#servicos"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Conhecer serviços
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-2.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
