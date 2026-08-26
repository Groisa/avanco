"use client";

import { useEffect, useRef, useState, useTransition, type ReactNode } from "react";
import { Icon } from "@/components/icons";
import { PreviewProvider } from "@/components/preview/PreviewContext";
import { uploadImage } from "@/lib/actions/upload";
import { saveSection } from "@/app/admin/(dashboard)/secoes/actions";

export type SectionField = {
  name: string;
  label: string;
  type: "text" | "textarea" | "image";
  hint?: string;
  rows?: number;
};

const inputClass =
  "w-full rounded-xl border border-ink-900/12 bg-sand-100 px-3.5 py-2.5 text-sm text-ink-900 outline-none transition focus:border-forest-600 focus:ring-4 focus:ring-forest-600/10";

/** Image field wired to the editor's draft state instead of its own. */
function DraftImageField({
  value,
  onChange,
  images,
}: {
  value: string;
  onChange: (v: string) => void;
  images: string[];
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const listId = `imgs-${Math.abs(hashString(images.join(",")))}`;

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    const fd = new FormData();
    fd.set("file", file);
    const result = await uploadImage(fd);
    setUploading(false);
    if (result.url) onChange(result.url);
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
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
          {uploading ? "Enviando..." : "Trocar"}
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

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return h;
}

/** Renders the real site section at desktop width, scaled to fit the pane. */
function PreviewPane({ children }: { children: ReactNode }) {
  const holderRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    const holder = holderRef.current;
    const inner = innerRef.current;
    if (!holder || !inner) return;

    const measure = () => {
      const next = holder.clientWidth / 1280;
      setScale(next);
      // offsetHeight is the untransformed layout height, so the holder gets
      // the scaled height without reading back its own size (no feedback loop).
      setHeight(inner.offsetHeight * next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(holder);
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={holderRef}
      className="overflow-hidden rounded-2xl bg-sand-100 ring-1 ring-ink-900/10"
      style={{ height }}
    >
      <div
        ref={innerRef}
        // The preview renders the real, interactive components — links and
        // WhatsApp buttons included — so clicks are disabled to stop a stray
        // click navigating the editor away.
        className="pointer-events-none select-none"
        style={{
          width: 1280,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <PreviewProvider>{children}</PreviewProvider>
      </div>
    </div>
  );
}

export default function SectionEditor({
  title,
  description,
  fields,
  initial,
  images,
  renderPreview,
  manageLinks,
}: {
  title: string;
  description?: string;
  fields: SectionField[];
  initial: Record<string, string>;
  images: string[];
  renderPreview: (draft: Record<string, string>) => ReactNode;
  manageLinks?: { href: string; label: string }[];
}) {
  const [draft, setDraft] = useState(initial);
  const [saved, setSaved] = useState(false);
  const [pending, startTransition] = useTransition();

  const dirty = fields.some((f) => draft[f.name] !== initial[f.name]);

  const set = (name: string, value: string) => {
    setDraft((d) => ({ ...d, [name]: value }));
    setSaved(false);
  };

  function save() {
    const fd = new FormData();
    for (const field of fields) fd.set(field.name, draft[field.name] ?? "");
    startTransition(async () => {
      await saveSection(fd);
      setSaved(true);
    });
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 border-b border-ink-900/8 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
            Editando seção
          </p>
          <h1 className="mt-2 font-display text-2xl font-medium text-forest-900">
            {title}
          </h1>
          {description && (
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-500">
              {description}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {saved && !dirty && (
            <span className="text-sm font-medium text-forest-700">Salvo!</span>
          )}
          <button
            type="button"
            onClick={save}
            disabled={pending || !dirty}
            className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-clay-600/20 transition hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {pending ? "Salvando..." : "Salvar alterações"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
        <div className="space-y-5">
          {fields.length === 0 && (
            <p className="rounded-2xl border-2 border-dashed border-ink-900/10 p-6 text-sm text-ink-500">
              Esta seção não tem textos fixos — o conteúdo dela vem da lista
              abaixo.
            </p>
          )}

          {fields.map((field) => (
            <label key={field.name} className="block">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                {field.label}
              </span>
              <div className="mt-1.5">
                {field.type === "image" ? (
                  <DraftImageField
                    value={draft[field.name] ?? ""}
                    onChange={(v) => set(field.name, v)}
                    images={images}
                  />
                ) : field.type === "textarea" ? (
                  <textarea
                    value={draft[field.name] ?? ""}
                    onChange={(e) => set(field.name, e.target.value)}
                    rows={field.rows ?? 3}
                    className={inputClass}
                  />
                ) : (
                  <input
                    value={draft[field.name] ?? ""}
                    onChange={(e) => set(field.name, e.target.value)}
                    className={inputClass}
                  />
                )}
              </div>
              {field.hint && (
                <span className="mt-1 block text-xs text-ink-500/80">{field.hint}</span>
              )}
            </label>
          ))}

          {manageLinks && manageLinks.length > 0 && (
            <div className="rounded-2xl border border-ink-900/8 bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Conteúdo em lista
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {manageLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-forest-700/20 px-4 py-2 text-sm font-semibold text-forest-700 transition hover:bg-forest-800/5"
                  >
                    {link.label}
                    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                      <path d="M7.5 5 12.5 10 7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
            Prévia
          </p>
          <div className="xl:sticky xl:top-4">
            <PreviewPane>{renderPreview(draft)}</PreviewPane>
          </div>
        </div>
      </div>
    </div>
  );
}
