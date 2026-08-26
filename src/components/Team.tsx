import { getFormations, getSiteSettings } from "@/lib/content";
import TeamView from "./views/TeamView";

export default async function Team() {
  const [formations, { teamImage, headings }] = await Promise.all([
    getFormations(),
    getSiteSettings(),
  ]);

  return (
    <TeamView
      formations={formations}
      teamImage={teamImage}
      eyebrow={headings.teamEyebrow}
      headline={headings.teamHeadline}
      text={headings.teamText}
    />
  );
}
