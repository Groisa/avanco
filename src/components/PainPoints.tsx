import { getPainPoints, getSiteSettings } from "@/lib/content";
import PainPointsView from "./views/PainPointsView";

export default async function PainPoints() {
  const [painPoints, { painPoints: copy }] = await Promise.all([
    getPainPoints(),
    getSiteSettings(),
  ]);

  return <PainPointsView painPoints={painPoints} copy={copy} />;
}
