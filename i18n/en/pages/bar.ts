import type { DocsComponentPageContent } from "~/types/docs";

export const barComponentContent: DocsComponentPageContent = {
  kind: "component",
  seo: {
    title: "Bar",
    description:
      "Bar component documentation for Nuvex UI with surface styling, action composition, density, and API reference.",
  },
  hero: {
    title: "Bar",
    descriptionHtml:
      "The <code class='docs-inline-code'>EBar</code> component organizes a title, navigation triggers, and contextual actions in a horizontal surface. Its color, elevation, outline, and density establish the visual emphasis appropriate to each context.",
  },
  sections: [
    {
      key: "usage",
      title: "Usage",
      descriptionHtml:
        "Adjust <code class='docs-inline-code'>color</code> and <code class='docs-inline-code'>elevation</code> to define the bar surface. Use <code class='docs-inline-code'>ESpacer</code> to separate its identity from trailing actions.",
    },
    {
      key: "content-actions",
      title: "Content and actions",
      descriptionHtml:
        "The <code class='docs-inline-code'>outlined</code> prop adds a border to the component and replaces the elevation with a more defined appearance.",
    },
    {
      key: "density",
      title: "Density",
      descriptionHtml:
        "The default bar is 64px high. Enable <code class='docs-inline-code'>dense</code> for a compact 48px bar when the surrounding interface already provides enough context and touch targets remain clear.",
    },
    {
      key: "props",
      title: "API reference",
      description:
        "Reference the verified public props for EBar. Its content slots are summarized after the table.",
    },
  ],
  labels: {
    controls: [
      { key: "color", label: "color" },
      { key: "elevation", label: "elevation" },
    ],
    barText: {
      workspace: "Workspace",
      account: "Account",
      openNavigation: "Open navigation",
      projects: "Projects",
      search: "Search",
      create: "Create",
      standardBar: "Standard bar",
      denseBar: "Dense bar",
      moreActions: "More actions",
      apiSlotsTitle: "Slots",
      apiSlotsBody:
        "The default slot contains the main bar content. The append slot renders an additional region after it.",
    },
  },
};

export const barPages = { bar: barComponentContent } as const;

export default barPages;
