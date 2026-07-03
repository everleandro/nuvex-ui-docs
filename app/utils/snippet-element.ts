type ElementSnippetAttr = string | false | null | undefined;

interface ElementSnippetOptions {
  tag: string;
  attrs?: ElementSnippetAttr[];
  contentLines?: string[];
}

export const buildTemplateElementSnippet = ({
  tag,
  attrs = [],
  contentLines = [],
}: ElementSnippetOptions): string => {
  const attrLines = attrs
    .filter((value): value is string => Boolean(value))
    .map((value) => `    ${value}`);
  const bodyLines = contentLines.map((value) => `    ${value}`);

  if (!bodyLines.length) {
    return [
      "<template>",
      ...(attrLines.length
        ? [`  <${tag}`, ...attrLines, "  />"]
        : [`  <${tag} />`]),
      "</template>",
    ].join("\n");
  }

  return [
    "<template>",
    `  <${tag}`,
    ...attrLines,
    "  >",
    ...bodyLines,
    `  </${tag}>`,
    "</template>",
  ].join("\n");
};
