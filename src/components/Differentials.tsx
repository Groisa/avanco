import { getDifferentials } from "@/lib/content";
import DifferentialsView from "./views/DifferentialsView";

export default async function Differentials() {
  const items = await getDifferentials();

  return <DifferentialsView items={items} />;
}
