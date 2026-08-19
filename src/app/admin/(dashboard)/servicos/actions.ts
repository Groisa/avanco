"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateService(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.service.update({
    where: { id },
    data: {
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      image: String(formData.get("image") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/servicos");
}

export async function createService(formData: FormData) {
  await prisma.service.create({
    data: {
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      image: String(formData.get("image") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/servicos");
}

export async function deleteService(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.service.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/servicos");
}
