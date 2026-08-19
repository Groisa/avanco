"use client";

import { useId } from "react";
import { Icon } from "@/components/icons";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-ink-900/5 bg-white p-6 shadow-sm shadow-ink-900/5 sm:p-7 ${className}`}>
      {children}
    </div>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink-900/12 bg-sand-100 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition focus:border-forest-600 focus:ring-4 focus:ring-forest-600/10";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function ImagePicker({
  name,
  defaultValue,
  images,
}: {
  name: string;
  defaultValue: string;
  images: string[];
}) {
  const listId = useId();
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sand-100 ring-1 ring-ink-900/10">
        {defaultValue ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={defaultValue} alt="" className="h-full w-full object-cover" />
        ) : (
          <Icon name="image" className="h-5 w-5 text-ink-500/40" />
        )}
      </div>
      <input name={name} defaultValue={defaultValue} list={listId} className={inputClass} placeholder="/images/arquivo.jpg" />
      <datalist id={listId}>
        {images.map((src) => (
          <option key={src} value={src} />
        ))}
      </datalist>
    </div>
  );
}

export function SaveButton({ children = "Salvar" }: { children?: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-clay-600/20 transition hover:bg-clay-600"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </button>
  );
}

export function DeleteButton({ formAction, confirmMessage }: { formAction: (formData: FormData) => void; confirmMessage: string }) {
  return (
    <button
      type="submit"
      formAction={formAction}
      className="rounded-full border border-clay-600/25 px-4 py-2.5 text-sm font-semibold text-clay-600 transition hover:bg-clay-500/10"
      onClick={(e) => {
        if (!confirm(confirmMessage)) e.preventDefault();
      }}
    >
      Excluir
    </button>
  );
}

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8 border-b border-ink-900/8 pb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
        Avanço Ambiental
      </p>
      <h1 className="mt-2 font-display text-2xl font-medium text-forest-900 sm:text-3xl">
        {title}
      </h1>
      {description && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">{description}</p>}
    </div>
  );
}

export function SetupNotice() {
  return (
    <div className="mb-8 flex items-start gap-3 rounded-2xl border border-clay-500/20 bg-clay-500/5 p-4">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay-500/15 text-clay-600">
        <Icon name="help" className="h-4 w-4" />
      </span>
      <p className="text-sm leading-relaxed text-clay-600">
        O banco de dados ainda não está conectado — esta seção vai mostrar e
        salvar dados reais assim que as variáveis do Supabase forem
        configuradas em <code className="rounded bg-clay-500/10 px-1 py-0.5">.env</code> (local) e nas Environment Variables
        do projeto na Vercel.
      </p>
    </div>
  );
}
