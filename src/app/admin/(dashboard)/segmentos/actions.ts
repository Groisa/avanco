"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateSector(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.sector.update({
    where: { id },
    data: {
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      image: String(formData.get("image") ?? ""),
      icon: String(formData.get("icon") ?? "leaf"),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/segmentos");
}

export async function createSector(formData: FormData) {
  await prisma.sector.create({
    data: {
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      image: String(formData.get("image") ?? ""),
      icon: String(formData.get("icon") ?? "leaf"),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/segmentos");
}

export async function deleteSector(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.sector.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/segmentos");
}
