"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateClient(formData: FormData) {
  const id = String(formData.get("id"));
  const logo = String(formData.get("logo") ?? "").trim();
  await prisma.client.update({
    where: { id },
    data: {
      name: String(formData.get("name") ?? ""),
      logo: logo || null,
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/clientes");
  redirect("/admin/clientes");
}

export async function createClient(formData: FormData) {
  const logo = String(formData.get("logo") ?? "").trim();
  await prisma.client.create({
    data: {
      name: String(formData.get("name") ?? ""),
      logo: logo || null,
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/clientes");
  redirect("/admin/clientes");
}

export async function deleteClient(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.client.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/clientes");
  redirect("/admin/clientes");
}
