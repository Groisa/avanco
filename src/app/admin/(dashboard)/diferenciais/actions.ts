"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updatePillar(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.pillar.update({
    where: { id },
    data: {
      title: String(formData.get("title") ?? ""),
      icon: String(formData.get("icon") ?? "leaf"),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/diferenciais");
  redirect("/admin/diferenciais");
}

export async function createPillar(formData: FormData) {
  await prisma.pillar.create({
    data: {
      title: String(formData.get("title") ?? ""),
      icon: String(formData.get("icon") ?? "leaf"),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/diferenciais");
  redirect("/admin/diferenciais");
}

export async function deletePillar(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.pillar.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/diferenciais");
  redirect("/admin/diferenciais");
}
