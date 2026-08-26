"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateClientGain(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.clientGain.update({
    where: { id },
    data: {
      label: String(formData.get("label") ?? ""),
      icon: String(formData.get("icon") ?? "check"),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/ganhos");
  redirect("/admin/ganhos");
}

export async function createClientGain(formData: FormData) {
  await prisma.clientGain.create({
    data: {
      label: String(formData.get("label") ?? ""),
      icon: String(formData.get("icon") ?? "check"),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/ganhos");
  redirect("/admin/ganhos");
}

export async function deleteClientGain(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.clientGain.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/ganhos");
  redirect("/admin/ganhos");
}
