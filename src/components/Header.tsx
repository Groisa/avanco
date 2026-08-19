import { getSiteSettings } from "@/lib/content";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const { site } = await getSiteSettings();
  return <HeaderClient whatsapp={site.whatsapp} />;
}
