"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateGalleryImage(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.galleryImage.update({
    where: { id },
    data: {
      src: String(formData.get("src") ?? ""),
      alt: String(formData.get("alt") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/galeria");
}

export async function createGalleryImage(formData: FormData) {
  await prisma.galleryImage.create({
    data: {
      src: String(formData.get("src") ?? ""),
      alt: String(formData.get("alt") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/galeria");
}

export async function deleteGalleryImage(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.galleryImage.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/galeria");
}
