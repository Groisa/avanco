import { getProcessSteps, getSiteSettings } from "@/lib/content";
import ProcessView from "./views/ProcessView";

export default async function Process() {
  const [process, { headings }] = await Promise.all([getProcessSteps(), getSiteSettings()]);

  return (
    <ProcessView
      process={process}
      eyebrow={headings.processEyebrow}
      headline={headings.processHeadline}
    />
  );
}
