import type { DocsDirectivesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const directivesEditorialContent: DocsWorkflowPageContent<DocsDirectivesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Directives | Nuvex UI Docs',
    description:
      'Apply NuvexUI directives to add ripple feedback, click outside behavior, and focus outside handling in interactive UI.',
  },
  hero: {
    title: 'Directives',
    description:
      'Use directives when you need interaction behavior at element level without creating custom logic for each component.',
    prerequisitesTitle: 'Before you start',
    actions: [
      {
        key: 'open-menu-docs',
        label: 'Open Menu docs',
      },
      {
        key: 'open-dialog-docs',
        label: 'Open Dialog docs',
      },
    ],
    prerequisites: [
      'NuvexUI plugin is already installed in your app.',
      'You need element-level interaction behavior, not a new component abstraction.',
      'You want click, focus, and ripple behavior to stay consistent across your UI.',
    ],
  },
  sections: {
    overview: {
      title: 'Overview',
      description:
        'NuvexUI exports three directives. Pick one based on the interaction trigger and the UX behavior you need.',
      items: [
        {
          title: 'v-ripple',
          description: 'Adds pointer and keyboard ripple feedback on interactive elements.',
        },
        {
          title: 'v-click-outside',
          description: 'Runs a handler when the user clicks outside a target boundary.',
        },
        {
          title: 'v-focus-outside',
          description: 'Runs a handler when focus leaves the current boundary.',
        },
      ],
    },
    ripple: {
      title: 'Ripple',
      description:
        'Use ripple to show immediate visual feedback in buttons, list rows, and other actionable surfaces.',
      calloutDescription:
        'Set keyboard: true when the element is keyboard actionable so keyboard and pointer users get the same feedback.',
    },
    'click-outside': {
      title: 'Click Outside',
      description:
        'Use click outside to close transient UI such as menus, popovers, or quick actions when the user interacts elsewhere.',
    },
    'focus-outside': {
      title: 'Focus Outside',
      description:
        'Use focus outside when behavior must react to focus transitions, especially for keyboard flows and delayed validation.',
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with the page that matches what you need next after applying directives.',
      items: [
        {
          title: 'Composables',
          description: 'Use useTheme, useOverlayService, and useBreakpoint for state-driven behavior.',
        },
        {
          title: 'Menu',
          description: 'Apply outside-click patterns in a concrete navigation component.',
        },
        {
          title: 'Dialog',
          description: 'Apply focus outside behavior in an overlay context.',
        },
        {
          title: 'Nuxt Integration',
          description: 'Continue if your next concern is SSR-safe integration behavior.',
        },
      ],
    },
  },
}

export const directivesPages = {
  directives: directivesEditorialContent,
} as const

export default directivesPages
