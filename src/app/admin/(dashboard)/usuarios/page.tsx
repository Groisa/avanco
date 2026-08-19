import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { hasDatabase } from "@/lib/prisma";
import { Card, PageHeader, SetupNotice, DeleteButton } from "@/components/admin/ui";
import { Icon } from "@/components/icons";
import { deleteUser } from "./actions";
import CreateUserForm from "./CreateUserForm";

export default async function UsuariosPage() {
  const supabase = await createClient();
  const { data: { user: currentUser } } = await supabase.auth.getUser();

  const admin = createAdminClient();
  const { data, error } = await admin.auth.admin.listUsers();
  const users = data?.users ?? [];

  return (
    <div>
      <PageHeader
        title="Usuários"
        description="Quem pode fazer login no painel administrativo."
      />
      {!hasDatabase && <SetupNotice />}
      {error && (
        <p className="mb-6 text-sm text-clay-600">
          Não foi possível carregar os usuários: {error.message}
        </p>
      )}

      <div className="space-y-3">
        {users.map((u) => {
          const isSelf = u.id === currentUser?.id;
          return (
            <Card key={u.id} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-800/8 text-forest-700">
                  <Icon name="user" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-medium text-forest-900">
                    {u.email}
                    {isSelf && (
                      <span className="ml-2 rounded-full bg-moss-400/15 px-2 py-0.5 text-xs font-semibold text-forest-700">
                        você
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-ink-500">
                    Criado em {new Date(u.created_at).toLocaleDateString("pt-BR")}
                    {u.last_sign_in_at &&
                      ` · Último login em ${new Date(u.last_sign_in_at).toLocaleDateString("pt-BR")}`}
                  </p>
                </div>
              </div>
              {!isSelf && (
                <form>
                  <input type="hidden" name="id" value={u.id} />
                  <DeleteButton
                    formAction={deleteUser}
                    confirmMessage={`Remover o acesso de ${u.email}?`}
                  />
                </form>
              )}
            </Card>
          );
        })}
      </div>

      <CreateUserForm />
    </div>
  );
}
