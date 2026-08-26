"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type SiteInfo = {
  whatsapp: string;
  phone1: string;
  phone2: string;
  email: string;
  address: { line1: string; line2: string };
  social: { instagram: string; linkedin: string; facebook: string };
};

export default function ContactClient({
  site,
  eyebrow,
  headline,
  text,
}: {
  site: SiteInfo;
  eyebrow: string;
  headline: string;
  text: string;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent(
    `Olá! Meu nome é ${name || "___"}. ${message || "Gostaria de solicitar um orçamento."}`
  )}`;

  return (
    <section id="contato" className="bg-forest-950 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss-300">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              {text}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-10 rounded-3xl bg-forest-900 p-8 lg:p-10">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-moss-300">
                    Telefone / WhatsApp
                  </dt>
                  <dd className="mt-2 text-lg text-white">
                    {site.phone1} &middot; {site.phone2}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-moss-300">
                    E-mail
                  </dt>
                  <dd className="mt-2 text-lg text-white">{site.email}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-moss-300">
                    Endereço
                  </dt>
                  <dd className="mt-2 text-lg text-white">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </dd>
                </div>
              </dl>

              <div className="flex gap-3">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2.2c2.7 0 3 0 4.1.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.64 2.56c.64-.25 1.37-.42 2.43-.47C9.17 2.02 9.5 2 12.2 2H12Zm0 1.8c-2.65 0-2.96 0-4.05.06-.93.04-1.44.19-1.77.32-.44.17-.76.38-1.1.71-.33.34-.54.66-.71 1.1-.13.33-.28.84-.32 1.77C4 8.85 4 9.16 4 11.8v.4c0 2.65 0 2.96.06 4.05.04.93.19 1.44.32 1.77.17.44.38.76.71 1.1.34.33.66.54 1.1.71.33.13.84.28 1.77.32 1 .05 1.32.06 3.85.06h.4c2.65 0 2.96 0 4.05-.06.93-.04 1.44-.19 1.77-.32.44-.17.76-.38 1.1-.71.33-.34.54-.66.71-1.1.13-.33.28-.84.32-1.77.05-1 .06-1.32.06-3.85v-.4c0-2.65 0-2.96-.06-4.05-.04-.93-.19-1.44-.32-1.77a2.99 2.99 0 0 0-.71-1.1 2.99 2.99 0 0 0-1.1-.71c-.33-.13-.84-.28-1.77-.32-1-.05-1.32-.06-3.85-.06Zm0 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm4.9-1.99a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                  </svg>
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M6.94 8.94H3.56V20.4h3.38V8.94ZM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4h-3.37v-5.87c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1v5.97H9.5V8.94h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.44 2.26 4.44 5.2v6.46Z" />
                  </svg>
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M13.5 21.6v-8.02h2.69l.4-3.12h-3.1V8.5c0-.9.25-1.52 1.54-1.52h1.65V4.19C16.4 4.13 15.4 4 14.24 4c-2.4 0-4.05 1.47-4.05 4.16v2.32H7.5v3.12h2.69v8.02h3.31Z" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              className="flex h-full flex-col gap-4 rounded-3xl bg-white p-8 lg:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Nome
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-xl border border-ink-900/10 bg-sand-100 px-4 py-3 text-ink-900 outline-none focus:border-forest-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Mensagem
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Conte-nos sobre o seu projeto ou demanda ambiental"
                  className="mt-2 w-full resize-none rounded-xl border border-ink-900/10 bg-sand-100 px-4 py-3 text-ink-900 outline-none focus:border-forest-500"
                />
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-clay-500 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-clay-600"
              >
                Enviar pelo WhatsApp
              </a>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
