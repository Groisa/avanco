"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { uploadImage } from "@/lib/actions/upload";

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
  const [value, setValue] = useState(defaultValue);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    const fd = new FormData();
    fd.set("file", file);
    const result = await uploadImage(fd);
    setUploading(false);
    if (result.url) setValue(result.url);
    else setError(result.error ?? "Falha ao enviar imagem.");
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sand-100 ring-1 ring-ink-900/10">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <Icon name="image" className="h-5 w-5 text-ink-500/40" />
          )}
        </div>
        <input
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          list={listId}
          className={inputClass}
          placeholder="/images/arquivo.jpg"
        />
        <datalist id={listId}>
          {images.map((src) => (
            <option key={src} value={src} />
          ))}
        </datalist>
        <label className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border border-ink-900/12 px-3.5 py-2.5 text-xs font-semibold text-ink-700 transition hover:bg-sand-100">
          <Icon name="upload" className="h-3.5 w-3.5" />
          {uploading ? "Enviando..." : "Do computador"}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            disabled={uploading}
            className="sr-only"
          />
        </label>
      </div>
      {error && <p className="mt-1.5 text-xs text-clay-600">{error}</p>}
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

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-ink-900/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
          Avanço Ambiental
        </p>
        <h1 className="mt-2 font-display text-2xl font-medium text-forest-900 sm:text-3xl">
          {title}
        </h1>
        {description && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function CreateLink({ href, children = "Novo" }: { href: string; children?: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-clay-600/20 transition hover:bg-clay-600"
    >
      <Icon name="plus" className="h-4 w-4" />
      {children}
    </Link>
  );
}

export function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-forest-700"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path d="M15 6 9 12l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </Link>
  );
}

export function ListRow({
  href,
  image,
  title,
  subtitle,
  id,
  deleteAction,
  deleteConfirm,
}: {
  href: string;
  image?: string | null;
  title: string;
  subtitle?: string;
  id?: string;
  deleteAction: (formData: FormData) => void;
  deleteConfirm: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-ink-900/5 bg-white p-4 shadow-sm shadow-ink-900/5">
      {image !== undefined && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-sand-100 ring-1 ring-ink-900/10">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="" className="h-full w-full object-cover" />
          ) : (
            <Icon name="image" className="h-5 w-5 text-ink-500/40" />
          )}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-base font-medium text-forest-900">{title}</p>
        {subtitle && <p className="mt-0.5 truncate text-sm text-ink-500">{subtitle}</p>}
      </div>
      {id ? (
        <>
          <Link
            href={href}
            className="shrink-0 rounded-full border border-forest-700/20 px-4 py-2 text-sm font-semibold text-forest-700 transition hover:bg-forest-800/5"
          >
            Editar
          </Link>
          <form className="shrink-0">
            <input type="hidden" name="id" value={id} />
            <DeleteButton formAction={deleteAction} confirmMessage={deleteConfirm} />
          </form>
        </>
      ) : (
        <span className="shrink-0 rounded-full bg-ink-900/5 px-3 py-1.5 text-xs font-medium text-ink-500">
          prévia
        </span>
      )}
    </div>
  );
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-ink-900/10 p-10 text-center text-sm text-ink-500">
      {children}
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
