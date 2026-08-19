import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import AdminNav from "@/components/admin/AdminNav";
import { signOut } from "../actions";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sand-200">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 flex-col bg-forest-950 px-5 py-7 lg:flex">
          <Link href="/admin" className="flex items-center px-1">
            <Image
              src="/brand/logo-white.png"
              alt="Avanço Ambiental"
              width={4883}
              height={1791}
              className="h-8 w-auto"
            />
          </Link>
          <p className="mt-2 px-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-moss-300/80">
            Painel administrativo
          </p>

          <AdminNav />

          <div className="mt-auto space-y-1 border-t border-white/10 pt-4">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-moss-300 transition hover:bg-white/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-moss-400/10">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 5h5v5M19 5l-8 8M9 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3" />
                </svg>
              </span>
              Ver site
            </Link>
            <form action={signOut}>
              <button
                type="submit"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-white/45 transition hover:bg-white/5 hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Icon name="logout" className="h-4 w-4" />
                </span>
                Sair
              </button>
            </form>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between border-b border-ink-900/10 bg-white px-6 py-4 lg:hidden">
            <Image src="/brand/logo-dark.png" alt="Avanço Ambiental" width={4883} height={1791} className="h-7 w-auto" />
            <form action={signOut}>
              <button type="submit" className="text-sm font-medium text-ink-500">
                Sair
              </button>
            </form>
          </div>
          <main className="px-6 py-8 lg:px-12 lg:py-12">
            <div className="mx-auto max-w-5xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
