"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-sand-100/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#inicio" className="flex items-center gap-2.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full ${
              scrolled ? "bg-forest-700" : "bg-white/15 backdrop-blur"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-moss-300" fill="currentColor">
              <path d="M12 2C7 2 3 6.5 3 11.5c0 3.6 2.2 6.4 5 8.1V22h2v-2.3a9 9 0 0 0 2-.05V22h2v-2.5c2.8-1.7 5-4.5 5-8 0-5-4-9.5-9-9.5Zm-1 15.9c-3-.7-5-3.4-5-6.4C6 8 8.7 5 12 5c.6 0 1.2.1 1.7.2C11 6.7 9 9.7 9 13c0 1.8.6 3.5 1.6 4.9-.1 0-.4 0-.6 0Zm3-.4C12.6 16.3 12 14.7 12 13c0-3 1.8-5.6 4.3-6.7A6.98 6.98 0 0 1 19 11.5c0 3.4-2.4 6.3-5 7Z" />
            </svg>
          </span>
          <span
            className={`font-display text-lg font-medium leading-none tracking-tight ${
              scrolled ? "text-forest-900" : "text-white"
            }`}
          >
            Avanço<span className="block text-xs font-sans font-normal tracking-[0.25em] uppercase opacity-80">Ambiental</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-ink-700 hover:text-forest-700"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-clay-600"
          >
            Fale conosco
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            scrolled ? "text-forest-900" : "text-white"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/10 bg-sand-100 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-clay-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
