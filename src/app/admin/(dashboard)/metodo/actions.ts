"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateProcessStep(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.processStep.update({
    where: { id },
    data: {
      step: String(formData.get("step") ?? ""),
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/metodo");
  redirect("/admin/metodo");
}

export async function createProcessStep(formData: FormData) {
  await prisma.processStep.create({
    data: {
      step: String(formData.get("step") ?? ""),
      title: String(formData.get("title") ?? ""),
      description: String(formData.get("description") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/metodo");
  redirect("/admin/metodo");
}

export async function deleteProcessStep(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.processStep.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/metodo");
  redirect("/admin/metodo");
}
