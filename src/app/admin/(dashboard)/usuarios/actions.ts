"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export type CreateUserState = { error: string | null; success?: boolean };

export async function createUser(
  _prevState: CreateUserState,
  formData: FormData
): Promise<CreateUserState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email) return { error: "Informe um e-mail." };
  if (password.length < 8) return { error: "A senha precisa ter pelo menos 8 caracteres." };

  const supabase = createAdminClient();
  const { error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/usuarios");
  return { error: null, success: true };
}

export async function deleteUser(formData: FormData) {
  const id = String(formData.get("id"));

  // Guard against deleting your own account and getting locked out.
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user?.id === id) return;

  const admin = createAdminClient();
  await admin.auth.admin.deleteUser(id);
  revalidatePath("/admin/usuarios");
}
