"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Icon } from "@/components/icons";

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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest-950 px-6 py-16">
      <Image
        src="/images/equipe-campo-01.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/85 to-forest-950/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-950/40 to-transparent" />

      <div className="relative w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Image
            src="/brand/logo-white.png"
            alt="Avanço Ambiental"
            width={4883}
            height={1791}
            priority
            className="h-11 w-auto"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-forest-900/60 p-8 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-moss-300">
            Área restrita
          </p>
          <h1 className="mt-2 font-display text-2xl font-medium text-white">
            Painel administrativo
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Entre com sua conta para editar o conteúdo do site.
          </p>

          {!configured ? (
            <div className="mt-7 flex items-start gap-3 rounded-xl border border-clay-500/30 bg-clay-500/10 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay-500/20 text-clay-400">
                <Icon name="help" className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm leading-relaxed text-white/80">
                O banco de dados ainda não foi conectado. Configure as
                variáveis do Supabase para liberar o login.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  E-mail
                </label>
                <div className="relative mt-1.5">
                  <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-white/30">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@avancoambiental.com.br"
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-3.5 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-moss-300/60 focus:bg-white/10"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  Senha
                </label>
                <div className="relative mt-1.5">
                  <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-white/30">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="10" width="16" height="10" rx="2" />
                      <path d="M8 10V7a4 4 0 1 1 8 0v3" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-3.5 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-moss-300/60 focus:bg-white/10"
                  />
                </div>
              </div>

              {error && (
                <p className="flex items-center gap-2 text-sm text-clay-400">
                  <Icon name="x" className="h-3.5 w-3.5 shrink-0" />
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-clay-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-clay-600/30 transition hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 animate-spin">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" />
                      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-white/30">
          Avanço Ambiental &middot; Consultoria e Serviços Ambientais
        </p>
      </div>
    </div>
  );
}
