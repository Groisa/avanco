"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateHeroBadge(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.heroBadge.update({
    where: { id },
    data: {
      label: String(formData.get("label") ?? ""),
      value: String(formData.get("value") ?? ""),
      icon: String(formData.get("icon") ?? "check"),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/numeros");
  redirect("/admin/numeros");
}

export async function createHeroBadge(formData: FormData) {
  await prisma.heroBadge.create({
    data: {
      label: String(formData.get("label") ?? ""),
      value: String(formData.get("value") ?? ""),
      icon: String(formData.get("icon") ?? "check"),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/numeros");
  redirect("/admin/numeros");
}

export async function deleteHeroBadge(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.heroBadge.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/numeros");
  redirect("/admin/numeros");
}
