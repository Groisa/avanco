"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { parseGroups } from "@/lib/groups-format";

export async function updateBlock(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.specializedBlock.update({
    where: { id },
    data: {
      title: String(formData.get("title") ?? ""),
      headline: String(formData.get("headline") ?? ""),
      intro: String(formData.get("intro") ?? ""),
      image: String(formData.get("image") ?? ""),
      order: Number(formData.get("order") ?? 0),
      groups: parseGroups(String(formData.get("groups") ?? "")),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/blocos");
}

export async function createBlock(formData: FormData) {
  await prisma.specializedBlock.create({
    data: {
      title: String(formData.get("title") ?? ""),
      headline: String(formData.get("headline") ?? ""),
      intro: String(formData.get("intro") ?? ""),
      image: String(formData.get("image") ?? ""),
      order: Number(formData.get("order") ?? 0),
      groups: parseGroups(String(formData.get("groups") ?? "")),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/blocos");
}

export async function deleteBlock(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.specializedBlock.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/blocos");
}
