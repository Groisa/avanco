"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const configured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);
    if (error) {
      setError("E-mail ou senha incorretos.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-forest-950 px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay-600">
          Avanço Ambiental
        </p>
        <h1 className="mt-2 font-display text-2xl font-medium text-forest-900">
          Painel administrativo
        </h1>

        {!configured ? (
          <p className="mt-6 rounded-xl bg-clay-500/10 p-4 text-sm leading-relaxed text-clay-600">
            O banco de dados ainda não foi conectado. Configure as variáveis
            do Supabase (<code>NEXT_PUBLIC_SUPABASE_URL</code> e chaves) para
            liberar o login.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                E-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-100 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Senha
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-ink-900/15 bg-sand-100 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600"
              />
            </div>

            {error && <p className="text-sm text-clay-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-forest-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
