// Serializes/parses SpecializedBlock.groups (JSON: {subtitle?, items[]}[]) to
// a simple text format an admin can edit in a plain textarea:
//
//   Subtítulo do grupo (opcional, linha sem "- ")
//   - item 1
//   - item 2
//
//   - item do grupo seguinte, sem subtítulo

export type Group = { subtitle?: string; items: string[] };

export const GROUPS_HELP =
  'Cada grupo de itens fica separado por uma linha em branco. A primeira linha de um grupo é o subtítulo (opcional); as linhas seguintes começam com "- " e são os itens. Exemplo:\n\nRevegetação\n- Plantio de mudas\n- Recuperação de margens\n\n- Item sem subtítulo';

export function serializeGroups(groups: Group[]): string {
  return groups
    .map((g) => {
      const lines = g.items.map((item) => `- ${item}`);
      return g.subtitle ? [g.subtitle, ...lines].join("\n") : lines.join("\n");
    })
    .join("\n\n");
}

export function parseGroups(text: string): Group[] {
  return text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
      const subtitleLine = lines[0]?.startsWith("-") ? undefined : lines[0];
      const itemLines = (subtitleLine ? lines.slice(1) : lines)
        .map((l) => l.replace(/^-\s*/, "").trim())
        .filter(Boolean);
      return subtitleLine ? { subtitle: subtitleLine, items: itemLines } : { items: itemLines };
    })
    .filter((g) => g.items.length > 0);
}
