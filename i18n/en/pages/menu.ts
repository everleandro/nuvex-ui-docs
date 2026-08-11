import type { DocsComponentPageContent } from '~/types/docs'

export const menuComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Menu | Nuvex UI Docs',
    description: 'Menu component documentation for Nuvex UI with activators, placement, sizing, controlled state, composition, nesting, accessibility, and API reference.',
  },
  hero: {
    title: 'Menu',
    descriptionHtml:
      "The <code class='docs-inline-code'>EMenu</code> component anchors contextual content to a trigger and coordinates its placement, open state, dismissal, focus, and layering. Compose it with <code class='docs-inline-code'>EList</code> for action menus or provide custom interactive content when the overlay must stay open.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      descriptionHtml:
        "Use the playground to configure the most common menu decisions. The activator slot forwards the click, keyboard, and ARIA bindings through <code class='docs-inline-code'>attrs</code> while <code class='docs-inline-code'>v-model</code> exposes the current open state.",
    },
    {
      key: 'activator-patterns',
      title: 'Activator patterns',
      descriptionHtml:
        "Prefer the named <code class='docs-inline-code'>activator</code> slot to keep the trigger and menu together. Use the <code class='docs-inline-code'>activator</code> prop with an element ref when another component owns the trigger; selector strings are available for stable DOM targets.",
    },
    {
      key: 'placement-offsets',
      title: 'Placement and offsets',
      descriptionHtml:
        "Set the preferred edge with <code class='docs-inline-code'>origin</code>, then apply <code class='docs-inline-code'>offsetX</code> and <code class='docs-inline-code'>offsetY</code>. The menu can flip to the side with more room, while <code class='docs-inline-code'>checkOffset</code> keeps the surface within the viewport.",
    },
    {
      key: 'sizing-surface',
      title: 'Sizing and surface',
      descriptionHtml:
        "By default, the menu accommodates both its activator and content. Use <code class='docs-inline-code'>fitContent</code> for intrinsic content width, <code class='docs-inline-code'>fullWidth</code> to match the activator, or explicit dimensions when the design requires a fixed surface.",
    },
    {
      key: 'transitions',
      title: 'Transitions',
      descriptionHtml:
        "Menus use the <code class='docs-inline-code'>fade</code> transition by default, so the prop can be omitted. Set <code class='docs-inline-code'>transition=\"scale\"</code> when the surface should grow into view from its origin.",
    },
    {
      key: 'open-close-states',
      title: 'Open, close, and disabled states',
      descriptionHtml:
        "Control visibility with <code class='docs-inline-code'>v-model</code>. Configure selection dismissal with <code class='docs-inline-code'>closeOnContentClick</code>, prevent all activator opening with <code class='docs-inline-code'>disableMenu</code>, or call the exposed methods for application-driven flows.",
    },
    {
      key: 'composition-patterns',
      title: 'Composition patterns',
      descriptionHtml:
        "Compose <code class='docs-inline-code'>EMenu</code> with <code class='docs-inline-code'>EList</code> for compact actions. For filters, pickers, or other multi-step content, keep the overlay open and close it explicitly when the task is complete.",
    },
    {
      key: 'nested-menus',
      title: 'Nested menus and layering',
      descriptionHtml:
        "Nested menus form a shared overlay branch. Each child receives the next layer, outside interaction closes unrelated branches, and <code class='docs-inline-code'>Escape</code> closes the topmost open menu first.",
    },
    {
      key: 'accessibility',
      title: 'Accessibility and keyboard',
      descriptionHtml:
        "Activator bindings synchronize <code class='docs-inline-code'>aria-haspopup</code>, <code class='docs-inline-code'>aria-expanded</code>, <code class='docs-inline-code'>aria-controls</code>, and disabled state. Enter, Space, or Arrow Down opens the menu; Escape closes the top layer and focus returns to the activator.",
    },
    {
      key: 'props',
      title: 'API reference',
      description: 'Reference the verified public props for EMenu. Events, slots, and exposed methods are summarized after the table.',
    },
  ],
  labels: {
    controls: [
      { key: 'origin', label: 'origin' },
      { key: 'color', label: 'color' },
      { key: 'elevation', label: 'elevation' },
      { key: 'fitContent', label: 'fit content' },
      { key: 'fullWidth', label: 'full width' },
      { key: 'closeOnContentClick', label: 'close on content click' },
      { key: 'checkOffset', label: 'check viewport offset' },
      { key: 'disableMenu', label: 'disable menu' },
    ],
    menuText: {
      openActions: 'Open actions',
      edit: 'Edit',
      duplicate: 'Duplicate',
      archive: 'Archive',
      slotActivator: 'Slot activator',
      externalActivator: 'External activator',
      leftAligned: 'Bottom left',
      rightAligned: 'Bottom right',
      compact: 'Compact content',
      matchActivator: 'Match activator',
      fixedWidth: 'Fixed width',
      defaultFade: 'Fade (default)',
      scaleTransition: 'Scale',
      controlledMenu: 'Controlled menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      currentState: 'Current state',
      opened: 'open',
      closed: 'closed',
      filters: 'Filters',
      showArchived: 'Show archived',
      includeDrafts: 'Include drafts',
      apply: 'Apply',
      moreActions: 'More actions',
      moveTo: 'Move to',
      project: 'Project',
      personal: 'Personal',
      keyboardMenu: 'Keyboard menu',
      keyboardHint: 'Focus the activator and press Enter, Space, or Arrow Down. Press Escape to close.',
      apiEvents: 'Events, slots, and methods',
      apiEventsBody: 'EMenu emits update:modelValue. Public slots are activator and default. The component exposes openMenu() and closeMenu().',
    },
  },
}

export const menuPages = {
  menu: menuComponentContent,
} as const

export default menuPages