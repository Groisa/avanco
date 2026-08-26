"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateDifferential(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.differential.update({
    where: { id },
    data: {
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/cards-topo");
  redirect("/admin/cards-topo");
}

export async function createDifferential(formData: FormData) {
  await prisma.differential.create({
    data: {
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/cards-topo");
  redirect("/admin/cards-topo");
}

export async function deleteDifferential(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.differential.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/cards-topo");
  redirect("/admin/cards-topo");
}
