"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateNavItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.navItem.update({
    where: { id },
    data: {
      label: String(formData.get("label") ?? ""),
      href: String(formData.get("href") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/menu");
  redirect("/admin/menu");
}

export async function createNavItem(formData: FormData) {
  await prisma.navItem.create({
    data: {
      label: String(formData.get("label") ?? ""),
      href: String(formData.get("href") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/menu");
  redirect("/admin/menu");
}

export async function deleteNavItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.navItem.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/menu");
  redirect("/admin/menu");
}
