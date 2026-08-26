import { getSpecializedBlocks, getSiteSettings } from "@/lib/content";
import SpecializedBlocksView from "./views/SpecializedBlocksView";

export default async function SpecializedBlocks() {
  const [specializedBlocks, { headings }] = await Promise.all([
    getSpecializedBlocks(),
    getSiteSettings(),
  ]);

  return (
    <SpecializedBlocksView
      blocks={specializedBlocks}
      eyebrow={headings.blocksEyebrow}
      headline={headings.blocksHeadline}
    />
  );
}
