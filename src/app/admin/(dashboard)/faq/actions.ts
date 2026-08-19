"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateFaqItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.faqItem.update({
    where: { id },
    data: {
      question: String(formData.get("question") ?? ""),
      answer: String(formData.get("answer") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/faq");
  redirect("/admin/faq");
}

export async function createFaqItem(formData: FormData) {
  await prisma.faqItem.create({
    data: {
      question: String(formData.get("question") ?? ""),
      answer: String(formData.get("answer") ?? ""),
      order: Number(formData.get("order") ?? 0),
    },
  });
  revalidatePath("/");
  revalidatePath("/admin/faq");
  redirect("/admin/faq");
}

export async function deleteFaqItem(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.faqItem.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/faq");
  redirect("/admin/faq");
}
