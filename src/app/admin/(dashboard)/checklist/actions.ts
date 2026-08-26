"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateChecklistItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.heroChecklistItem.update({
    where: { id },
    data: {
      text: String(formData.get("text") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/checklist");
  redirect("/admin/checklist");
}

export async function createChecklistItem(formData: FormData) {
  await prisma.heroChecklistItem.create({
    data: {
      text: String(formData.get("text") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/checklist");
  redirect("/admin/checklist");
}

export async function deleteChecklistItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.heroChecklistItem.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/checklist");
  redirect("/admin/checklist");
}
