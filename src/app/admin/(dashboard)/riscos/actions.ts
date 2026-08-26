"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updatePainPoint(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.painPoint.update({
    where: { id },
    data: {
      text: String(formData.get("text") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/riscos");
  redirect("/admin/riscos");
}

export async function createPainPoint(formData: FormData) {
  await prisma.painPoint.create({
    data: {
      text: String(formData.get("text") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/riscos");
  redirect("/admin/riscos");
}

export async function deletePainPoint(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.painPoint.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/riscos");
  redirect("/admin/riscos");
}
