import { getFaqItems } from "@/lib/content";
import FAQClient from "./FAQClient";

export default async function FAQ() {
  const faq = await getFaqItems();
  return <FAQClient faq={faq} />;
}
