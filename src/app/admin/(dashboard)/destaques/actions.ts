"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateFeatureStripItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.featureStripItem.update({
    where: { id },
    data: {
      title: String(formData.get("title") ?? ""),
      image: String(formData.get("image") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/destaques");
  redirect("/admin/destaques");
}

export async function createFeatureStripItem(formData: FormData) {
  await prisma.featureStripItem.create({
    data: {
      title: String(formData.get("title") ?? ""),
      image: String(formData.get("image") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/destaques");
  redirect("/admin/destaques");
}

export async function deleteFeatureStripItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.featureStripItem.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/destaques");
  redirect("/admin/destaques");
}
