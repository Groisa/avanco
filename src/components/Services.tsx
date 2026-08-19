import { getServices } from "@/lib/content";
import ServicesClient from "./ServicesClient";

export default async function Services() {
  const services = await getServices();
  return <ServicesClient services={services} />;
}
