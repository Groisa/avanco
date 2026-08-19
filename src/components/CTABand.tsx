import { getSiteSettings } from "@/lib/content";
import { Icon } from "./icons";

export default async function CTABand() {
  const { site } = await getSiteSettings();

  return (
    <section className="bg-forest-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-moss-300">
            <Icon name="pin" className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-moss-300">
              Solicite um diagnóstico técnico
            </p>
            <p className="mt-1 max-w-lg text-sm leading-relaxed text-white/70">
              Não espere receber uma notificação ambiental para agir. Nossa
              equipe está pronta para analisar seu empreendimento e indicar a
              melhor solução.
            </p>
          </div>
        </div>

        <a
          href={`${site.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de solicitar um diagnóstico técnico.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-forest-900 shadow-lg transition-colors hover:bg-sand-200"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-forest-800">
            <path d="M12.04 2c-5.5 0-10 4.5-10 10 0 1.76.46 3.45 1.32 4.95L2 22l5.2-1.36A9.96 9.96 0 0 0 12.04 22c5.5 0 10-4.5 10-10s-4.5-10-10-10Zm5.87 14.3c-.25.7-1.45 1.35-2 1.44-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.25-5.04-4.45-.15-.2-1.2-1.6-1.2-3.06 0-1.45.77-2.17 1.04-2.46.27-.3.6-.37.8-.37h.57c.19 0 .43-.03.66.5.25.6.85 2.06.92 2.21.07.15.11.32.02.52-.09.2-.14.32-.28.49-.14.17-.3.38-.42.5-.14.15-.29.3-.13.6.16.3.71 1.18 1.53 1.92 1.05.94 1.94 1.24 2.24 1.38.3.14.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.24.66-.15.27.1 1.71.81 2 .96.29.15.48.22.55.34.07.13.07.75-.18 1.45Z" />
          </svg>
          Falar com um especialista
        </a>
      </div>
    </section>
  );
}
