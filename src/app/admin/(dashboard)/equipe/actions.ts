"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateFormation(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.formation.update({
    where: { id },
    data: {
      name: String(formData.get("name") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/equipe");
}

export async function createFormation(formData: FormData) {
  await prisma.formation.create({
    data: {
      name: String(formData.get("name") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/equipe");
}

export async function deleteFormation(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.formation.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/equipe");
}
