"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

export default function FAQClient({
  faq,
}: {
  faq: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-sand-100 py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-600">
            Perguntas frequentes
          </p>
          <h2 className="mt-4 max-w-md text-balance font-display text-3xl font-medium leading-tight text-forest-900 sm:text-4xl">
            Dúvidas frequentes
          </h2>

          <div className="mt-10 space-y-3">
            {faq.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink-900/5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay-500/10 text-sm font-semibold text-clay-600">
                      ?
                    </span>
                    <span className="flex-1 font-display text-base font-medium text-forest-900">
                      {item.question}
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`h-4 w-4 shrink-0 text-ink-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 pl-16 text-sm leading-relaxed text-ink-500">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl lg:ml-auto">
            <Image
              src="/images/campo-viveiro-mudas.jpg"
              alt="Mudas nativas cultivadas para projetos de recuperação ambiental"
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
