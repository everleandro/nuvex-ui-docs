const common = {
  actions: {
    copyCode: 'Copy code',
    copied: 'Copied',
  },
  theme: {
    toggle: 'Toggle theme',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },
  language: {
    toggle: 'Toggle language',
    switchTo: 'Switch to {locale}',
  },
  docs: {
    secondaryNav: {
      title: 'On this page',
      empty: 'No sections available.',
    },
    footer: {
      title: 'Navigation',
      description: 'Continue with the previous or next topic.',
      previous: 'Previous',
      next: 'Next',
    },
    apiTable: {
      property: 'Property',
      type: 'Type',
      default: 'Default',
    },
  },
  labels: {
    api: 'API',
    props: 'Props',
    events: 'Events',
    slots: 'Slots',
    examples: 'Examples',
    preview: 'Preview',
    required: 'Required',
    optional: 'Optional',
    default: 'Default',
    type: 'Type',
    description: 'Description',
    search: 'Search',
  },
} as const

export default common