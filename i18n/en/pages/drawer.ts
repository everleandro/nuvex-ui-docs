import type { DocsComponentPageContent } from "~/types/docs";

export const drawerComponentContent: DocsComponentPageContent = {
  kind: "component",
  seo: {
    title: "Drawer",
    description:
      "Drawer component documentation for Nuvex UI with state, sizing, surfaces, slots, and API reference.",
  },
  hero: {
    title: "Drawer",
    descriptionHtml:
      "Drawer presents navigation or supporting content in a side panel with controlled state.",
  },
  sections: [
    {
      key: "playground",
      title: "Playground",
      descriptionHtml:
        "This playground shows a navigation drawer with <code class='docs-inline-code'>prepend</code>, main content, and <code class='docs-inline-code'>append</code> regions. You can compare side, width, appearance, and positioning modes.",
      callout: {
        title: "Positioning difference",
        description:
          "In normal mode, the drawer participates in layout. In absolute mode, it overlays content.",
        color: "info",
        icon: "information",
      },
    },
    {
      key: "slots",
      title: "Slots and composition",
      descriptionHtml:
        "Use <code class='docs-inline-code'>prepend</code> for persistent context, the default slot for scrollable content, and <code class='docs-inline-code'>append</code> for account or session actions.",
    },
    {
      key: "props",
      title: "API reference",
      description:
        "Reference the verified public props for EDrawer. Its event and slots are summarized after the table.",
    },
  ],
  labels: {
    controls: [
      { key: "toggle", label: "Toggle" },
      { key: "side", label: "Side" },
      { key: "width", label: "Width" },
      { key: "appearance", label: "Appearance" },
      { key: "floating", label: "Floating" },
      { key: "absolute", label: "Absolute" },
      { key: "elevation", label: "Elevation" },
    ],
    drawerText: {
      playgroundTitle: "Interactive Drawer playground",
      openDrawer: "Open drawer",
      closeDrawer: "Close drawer",
      workspace: "Workspace",
      home: "Home",
      profile: "Profile",
      settings: "Settings",
      account: "Account",
      logout: "Logout",
      apiEventTitle: "Event",
      apiEventBody:
        "EDrawer emits update:modelValue when its open state changes.",
      apiSlotsTitle: "Slots",
      apiSlotsBody:
        "The prepend and append slots frame the scrollable default slot with persistent content regions.",
    },
  },
};

export const drawerPages = { drawer: drawerComponentContent } as const;

export default drawerPages;
