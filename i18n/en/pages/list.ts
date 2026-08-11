import type { DocsComponentPageContent } from '~/types/docs'

export const listComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'List | Nuvex UI Docs',
    description: 'List component documentation for Nuvex UI with selection, item content, navigation, groups, slots, keyboard behavior, and API reference.',
  },
  hero: {
    title: 'List',
    descriptionHtml:
      "The Nuvex UI list suite combines <code class='docs-inline-code'>EList</code>, <code class='docs-inline-code'>EListItem</code>, and <code class='docs-inline-code'>EListGroup</code> to render structured collections with selection, router links, rich item content, and nested expandable groups. Shared color, sizing, state, and keyboard behavior keep simple lists and full navigation trees on the same framework contract.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      descriptionHtml:
        "Configure a selectable <code class='docs-inline-code'>EList</code> and inspect how container props are inherited by its items. The current <code class='docs-inline-code'>v-model</code> value identifies the active row.",
    },
    {
      key: 'item-content',
      title: 'Item content',
      descriptionHtml:
        "Build each row with <code class='docs-inline-code'>title</code>, <code class='docs-inline-code'>subtitle</code>, icons, or avatars. The item keeps the leading and trailing regions aligned while the central content truncates safely.",
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      descriptionHtml:
        "Combine <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>inset</code>, <code class='docs-inline-code'>dense</code>, elevation, and the shared size scale to adapt list density and surface treatment.",
    },
    {
      key: 'selection-and-states',
      title: 'Selection and states',
      descriptionHtml:
        "A scalar <code class='docs-inline-code'>v-model</code> enables single selection; an array enables multiple selection. Active, disabled, and focus states remain synchronized with the model and keyboard interaction.",
    },
    {
      key: 'navigation-links',
      title: 'Navigation links',
      descriptionHtml:
        "Pass <code class='docs-inline-code'>to</code> to render router-aware items. Route identity becomes the fallback item value and active route classes use the list active color.",
    },
    {
      key: 'groups-and-nesting',
      title: 'Groups and nesting',
      descriptionHtml:
        "Compose expandable branches with <code class='docs-inline-code'>EListGroup</code> and forward the activator <code class='docs-inline-code'>attrs</code>. Stable values produce hierarchical paths that can be controlled with <code class='docs-inline-code'>v-model:group</code>.",
    },
    {
      key: 'slots-composition',
      title: 'Slots and composition',
      descriptionHtml:
        "Use the <code class='docs-inline-code'>prepend</code> and <code class='docs-inline-code'>append</code> slots for custom media and actions while preserving the item layout and interaction surface.",
    },
    {
      key: 'accessibility',
      title: 'Accessibility and keyboard',
      descriptionHtml:
        "Selectable lists expose listbox semantics and roving focus. Items support arrow navigation, <code class='docs-inline-code'>Home</code>, <code class='docs-inline-code'>End</code>, <code class='docs-inline-code'>Enter</code>, and <code class='docs-inline-code'>Space</code>; grouped lists also support horizontal navigation between levels.",
    },
    {
      key: 'props',
      title: 'API reference',
      description: 'Reference the public props for each component in the List suite. Events and named slots are summarized after the tables.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'activeColor', label: 'active color' },
      { key: 'size', label: 'size' },
      { key: 'outlined', label: 'outlined' },
      { key: 'inset', label: 'inset' },
      { key: 'disabled', label: 'disabled' },
    ],
    listText: {
      inbox: 'Inbox',
      inboxSubtitle: '12 unread messages',
      drafts: 'Drafts',
      draftsSubtitle: '3 items pending review',
      archive: 'Archive',
      archiveSubtitle: 'Completed conversations',
      selectedValue: 'Selected value',
      profile: 'Profile',
      profileSubtitle: 'Account details and preferences',
      team: 'Design team',
      teamSubtitle: '8 active collaborators',
      notifications: 'Notifications',
      notificationsSubtitle: 'Email and push settings',
      defaultVariant: 'Default',
      defaultVariantSubtitle: 'Default spacing and surface',
      outlinedVariant: 'Outlined and inset',
      outlinedVariantSubtitle: 'Large inherited size',
      denseVariant: 'Dense',
      denseVariantSubtitle: 'Compact vertical rhythm',
      singleSelection: 'Single selection',
      multipleSelection: 'Multiple selection',
      available: 'Available',
      disabledItem: 'Disabled item',
      home: 'Overview',
      listDocs: 'List documentation',
      buttonDocs: 'Button documentation',
      components: 'Components',
      navigation: 'Navigation',
      list: 'List',
      tabs: 'Tabs',
      settings: 'Settings',
      account: 'Account',
      security: 'Security',
      member: 'Jordan Lee',
      memberSubtitle: 'Product designer',
      moreActions: 'More actions',
      keyboardHint: 'Focus an item and use Arrow Up, Arrow Down, Home, End, Enter, or Space.',
      foldersAriaLabel: 'Message folders',
      apiList: 'EList props',
      apiItem: 'EListItem props',
      apiGroup: 'EListGroup props',
      eventsTitle: 'Events and slots',
      eventsBody: 'EList emits update:modelValue and update:group. EListItem emits click:item. Public slots are EList default; EListItem default, prepend, and append; and EListGroup activator and default.',
    },
  },
}

export const listPages = {
  list: listComponentContent,
} as const

export default listPages