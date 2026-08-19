export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-900/5 ${className}`}>
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
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-ink-900/15 bg-sand-100 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

let pickerId = 0;

export function ImagePicker({
  name,
  defaultValue,
  images,
}: {
  name: string;
  defaultValue: string;
  images: string[];
}) {
  const listId = `img-list-${name}-${pickerId++}`;
  return (
    <div className="flex items-center gap-3">
      {defaultValue && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={defaultValue}
          alt=""
          className="h-11 w-11 shrink-0 rounded-lg object-cover ring-1 ring-ink-900/10"
        />
      )}
      <input name={name} defaultValue={defaultValue} list={listId} className={inputClass} />
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
      className="rounded-lg bg-forest-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-700"
    >
      {children}
    </button>
  );
}

export function DeleteButton({ formAction, confirmMessage }: { formAction: (formData: FormData) => void; confirmMessage: string }) {
  return (
    <button
      type="submit"
      formAction={formAction}
      className="rounded-lg border border-clay-600/30 px-4 py-2.5 text-sm font-semibold text-clay-600 transition hover:bg-clay-500/10"
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
    <div className="mb-8">
      <h1 className="font-display text-2xl font-medium text-forest-900">{title}</h1>
      {description && <p className="mt-1.5 text-sm text-ink-500">{description}</p>}
    </div>
  );
}

export function SetupNotice() {
  return (
    <div className="mb-8 rounded-xl bg-clay-500/10 p-4 text-sm leading-relaxed text-clay-600">
      O banco de dados ainda não está conectado — esta seção vai mostrar e
      salvar dados reais assim que as variáveis do Supabase forem
      configuradas em <code>.env</code> (local) e nas Environment Variables
      do projeto na Vercel.
    </div>
  );
}
