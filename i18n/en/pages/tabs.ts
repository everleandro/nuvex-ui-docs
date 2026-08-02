import type { DocsComponentPageContent } from "~/types/docs";

export const tabsComponentContent: DocsComponentPageContent = {
  kind: "component",
  seo: {
    title: "Tabs",
    description:
      "Tabs component documentation for Nuvex UI with selection, visual variants, alignment, orientation, content panels, keyboard behavior, and API reference.",
  },
  hero: {
    title: "Tabs",
    descriptionHtml:
      "The Nuvex UI tabs suite combines <code class='docs-inline-code'>ETabGroup</code> and <code class='docs-inline-code'>ETab</code> to organize related views behind one active selection. Pair it with <code class='docs-inline-code'>EWindow</code> and <code class='docs-inline-code'>EWindowItem</code> when each tab controls a content panel with synchronized state and accessible relationships.",
  },
  sections: [
    {
      key: "usage",
      title: "Usage",
      descriptionHtml:
        "Configure the active value and the main group props in the playground. Each <code class='docs-inline-code'>ETab</code> has a stable value, while the shared <code class='docs-inline-code'>v-model</code> identifies the current selection.",
    },
    {
      key: "visual-variants",
      title: "Visual variants",
      descriptionHtml:
        "Use <code class='docs-inline-code'>color</code> and <code class='docs-inline-code'>inactiveColor</code> to establish selection contrast, add <code class='docs-inline-code'>track</code> for a persistent baseline, and include icons when they improve recognition.",
    },
    {
      key: "alignment-and-growth",
      title: "Alignment and growth",
      descriptionHtml:
        "Set <code class='docs-inline-code'>tabAlign</code> to place compact tabs at the start, center, or end. Enable <code class='docs-inline-code'>grow</code> when tabs should divide the available width equally.",
    },
    {
      key: "orientation",
      title: "Orientation",
      descriptionHtml:
        "Tabs are horizontal by default. Enable <code class='docs-inline-code'>vertical</code> for side navigation; the indicator rotates and keyboard movement changes from Left and Right to Up and Down.",
    },
    {
      key: "content-panels",
      title: "Content panels",
      descriptionHtml:
        "Connect tabs to <code class='docs-inline-code'>EWindowItem</code> panels through the same model values. Give <code class='docs-inline-code'>ETabGroup</code> and <code class='docs-inline-code'>EWindow</code> the same <code class='docs-inline-code'>name</code> to generate matching tab and panel IDs.",
    },
    {
      key: "states-and-interactions",
      title: "States and interactions",
      descriptionHtml:
        "The model controls active and inactive state and can be updated from tabs or application actions. Individual tabs inherit Button state props such as <code class='docs-inline-code'>disabled</code>.",
    },
    {
      key: "slots-composition",
      title: "Slots and composition",
      descriptionHtml:
        "The group default slot owns the tab sequence, and each tab default slot owns its label. Tabs also inherit Button icon support.",
    },
    {
      key: "accessibility",
      title: "Accessibility and keyboard",
      descriptionHtml:
        "Tabs expose tablist, tab, and tabpanel semantics with roving focus. Horizontal groups support Left and Right; vertical groups support Up and Down. <code class='docs-inline-code'>Home</code> and <code class='docs-inline-code'>End</code> move to the first and last tab.",
    },
    {
      key: "props",
      title: "API reference",
      description:
        "Reference the public props for ETabGroup and the primary ETab props. Events and slots are summarized after the tables.",
    },
  ],
  labels: {
    controls: [
      { key: "color", label: "active color" },
      { key: "inactiveColor", label: "inactive color" },
      { key: "tabAlign", label: "tab alignment" },
      { key: "track", label: "track" },
      { key: "grow", label: "grow" },
    ],
    tabsText: {
      overview: "Overview",
      activity: "Activity",
      settings: "Settings",
      overviewBody: "Review the workspace summary and recent project health.",
      activityBody:
        "Follow updates from the people and projects you work with.",
      settingsBody: "Manage workspace preferences and notification defaults.",
      selectedValue: "Selected tab",
      defaultStyle: "Default",
      trackedStyle: "Tracked",
      iconStyle: "With icons",
      design: "Design",
      documentation: "Documentation",
      releases: "Releases",
      alignStart: "Start",
      alignCenter: "Center",
      alignEnd: "End",
      foundation: "Foundation",
      components: "Components",
      utilities: "Utilities",
      foundationBody: "Color, type, spacing, and surface foundations.",
      componentsBody: "Reusable controls and interaction patterns.",
      utilitiesBody: "Layout and styling helpers for application views.",
      profile: "Profile",
      security: "Security",
      billing: "Billing",
      openSecurity: "Open Security",
      keyboardHint: "Focus a tab and use the arrow keys, Home, or End.",
      workspaceAriaLabel: "Workspace sections",
      apiGroup: "ETabGroup props",
      apiTab: "ETab props",
      eventsTitle: "Events and slots",
      eventsBody:
        "ETabGroup emits update:modelValue and exposes the default slot. ETab emits click and exposes default and activator slots. A custom activator must preserve the tab role, ARIA attributes, and keyboard behavior.",
    },
  },
};

export const tabsPages = {
  tabs: tabsComponentContent,
} as const;

export default tabsPages;
