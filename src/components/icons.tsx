export type IconName =
  | "team"
  | "check"
  | "pin"
  | "license"
  | "leaf"
  | "drop"
  | "map"
  | "drone"
  | "document"
  | "gear"
  | "pickaxe"
  | "field"
  | "recycle"
  | "factory"
  | "crane"
  | "building"
  | "fuel"
  | "gov"
  | "x"
  | "shield"
  | "clock"
  | "risk"
  | "heart"
  | "expert"
  | "paper"
  | "clipboard";

const paths: Record<IconName, React.ReactNode> = {
  team: (
    <>
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M2.5 19.5c.6-3.2 3-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15.5 5.6a2.9 2.9 0 0 1 0 5.8" />
      <path d="M16 14.6c2 .5 3.6 2 4 4.9" />
    </>
  ),
  check: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8.5 11.5l2 2 4-4.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  license: (
    <>
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
      <path d="M9 12l2 2 4-4.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M12 3c2.8 3 4.5 6 4.5 9a4.5 4.5 0 1 1-9 0c0-3 1.7-6 4.5-9Z" />
      <path d="M12 12v8" />
    </>
  ),
  drop: <path d="M12 2s6 7 6 11.5a6 6 0 1 1-12 0C6 9 12 2 12 2Z" />,
  map: (
    <>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  drone: (
    <>
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M10 10 5 5M14 10l5-5M10 14l-5 5M14 14l5 5" />
      <circle cx="4" cy="4" r="2" />
      <circle cx="20" cy="4" r="2" />
      <circle cx="4" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
    </>
  ),
  document: (
    <>
      <path d="M7 2h7l4 4v16H7V2Z" />
      <path d="M14 2v4h4" />
      <path d="M9.5 12h6M9.5 15.5h6M9.5 8.5h3" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" />
    </>
  ),
  pickaxe: (
    <>
      <path d="M4 5c3.5 1 6.5 3.5 8 7" />
      <path d="M20 5c-3.5 1-6.5 3.5-8 7" />
      <path d="M11 12 5 20" />
    </>
  ),
  field: (
    <>
      <rect x="3" y="9" width="18" height="11" rx="1" />
      <path d="M3 14h18M9 9v11M15 9v11" />
    </>
  ),
  recycle: (
    <>
      <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V11l5 3v-3l5 3V8l5 3v10H3Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  crane: (
    <>
      <path d="M5 21V4l9 5" />
      <path d="M14 9h6l-2 4h-4" />
      <path d="M9 21V13" />
    </>
  ),
  building: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
    </>
  ),
  fuel: (
    <>
      <path d="M6 21V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v15M6 21h8" />
      <path d="M15 10l2.5 2.5V18a1.5 1.5 0 0 0 3 0v-6l-2-2" />
      <path d="M6 12h6" />
    </>
  ),
  gov: (
    <>
      <path d="M4 21h16M5 21V10M19 21V10M4 10l8-5 8 5M8 10v11M12 10v11M16 10v11" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6L6 18" />,
  shield: (
    <>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  risk: (
    <>
      <path d="M12 3 22 20H2L12 3Z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  heart: (
    <path d="M12 20.5S3.5 15.2 3.5 9.2A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.5 2.4c0 6-8.5 11.3-8.5 11.3Z" />
  ),
  expert: (
    <>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />
    </>
  ),
  paper: (
    <>
      <path d="M7 2h7l4 4v16H7V2Z" />
      <path d="M14 2v4h4" />
      <path d="M5 5l14 14" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
