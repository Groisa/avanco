import { getClientGains, getSiteSettings } from "@/lib/content";
import ClientGainsView from "./views/ClientGainsView";

export default async function ClientGains() {
  const [clientGains, { headings }] = await Promise.all([getClientGains(), getSiteSettings()]);

  return <ClientGainsView clientGains={clientGains} headline={headings.gainsHeadline} />;
}
