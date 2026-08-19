"use server";

import { createAdminClient } from "@/lib/supabase/admin";

export type UploadResult = { url?: string; error?: string };

export async function uploadImage(formData: FormData): Promise<UploadResult> {
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Nenhum arquivo selecionado." };
  }
  if (!file.type.startsWith("image/")) {
    return { error: "Envie um arquivo de imagem." };
  }
  if (file.size > 10 * 1024 * 1024) {
    return { error: "Imagem muito grande (máximo 10MB)." };
  }

  const supabase = createAdminClient();
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `uploads/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const { error } = await supabase.storage.from("media").upload(path, file, {
    contentType: file.type,
    upsert: false,
  });
  if (error) return { error: error.message };

  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return { url: data.publicUrl };
}
