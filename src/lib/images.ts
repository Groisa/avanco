import { readdirSync } from "node:fs";
import { join } from "node:path";

// Lists photos already in public/images so admin forms can offer a picker
// instead of requiring a typed path. Runs server-side only.
export function getAvailableImages(): string[] {
  try {
    const dir = join(process.cwd(), "public", "images");
    return readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort()
      .map((f) => `/images/${f}`);
  } catch {
    return [];
  }
}
