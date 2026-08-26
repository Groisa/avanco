import { getClients, getSiteSettings } from "@/lib/content";
import ClientsCarouselView from "./views/ClientsCarouselView";

// Placeholder slots by default — add real client logos/names via the admin
// panel (/admin/clientes) and this carousel updates automatically.
export default async function ClientsCarousel() {
  const [clients, { headings }] = await Promise.all([getClients(), getSiteSettings()]);

  return <ClientsCarouselView clients={clients} headline={headings.clientsHeadline} />;
}
