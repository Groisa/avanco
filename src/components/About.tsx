import { getSiteSettings } from "@/lib/content";
import AboutView from "./views/AboutView";

export default async function About() {
  const { about } = await getSiteSettings();

  return <AboutView about={about} />;
}
