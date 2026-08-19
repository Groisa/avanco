import { getSiteSettings } from "@/lib/content";
import ContactClient from "./ContactClient";

export default async function Contact() {
  const { site } = await getSiteSettings();
  return <ContactClient site={site} />;
}
