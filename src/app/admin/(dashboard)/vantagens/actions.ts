"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateWhyUsItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.whyUsItem.update({
    where: { id },
    data: {
      text: String(formData.get("text") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/vantagens");
  redirect("/admin/vantagens");
}

export async function createWhyUsItem(formData: FormData) {
  await prisma.whyUsItem.create({
    data: {
      text: String(formData.get("text") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/vantagens");
  redirect("/admin/vantagens");
}

export async function deleteWhyUsItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.whyUsItem.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/vantagens");
  redirect("/admin/vantagens");
}
