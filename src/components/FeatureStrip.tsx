import { getFeatureStrip } from "@/lib/content";
import FeatureStripView from "./views/FeatureStripView";

export default async function FeatureStrip() {
  const featureStrip = await getFeatureStrip();

  return <FeatureStripView featureStrip={featureStrip} />;
}
