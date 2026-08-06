import type { DocsComposablesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const composablesEditorialContent: DocsWorkflowPageContent<DocsComposablesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Composables',
    description:
      'Use NuvexUI composables to drive runtime theme actions, overlay behavior, and breakpoint-aware UI state from app code.',
  },
  hero: {
    title: 'Composables',
    description:
      'Use this page for daily composable usage in app code after plugin setup is already stable.',
    prerequisitesTitle: 'Before you start',
    actions: [
      {
        key: 'open-plugin-api',
        label: 'Open Plugin API',
      },
      {
        key: 'open-runtime-theme-api',
        label: 'Open Runtime Theme API',
      },
    ],
    prerequisites: [
      'Plugin setup is complete and your app is already rendering with NuvexUI.',
      'You need state-driven behavior from app code, not a new component abstraction.',
      'You want practical usage of useTheme, useOverlayService, and useBreakpoint without duplicating theming internals.',
    ],
  },
  sections: {
    overview: {
      title: 'Overview',
      description:
        'These composables expose runtime behavior that components already use internally, so your app can coordinate state with the same contracts.',
      items: [
        {
          title: 'useTheme',
          description: 'Read and change active theme state from app-level UI controls and flows.',
        },
        {
          title: 'useOverlayService',
          description: 'Open, close, and stack overlays with shared outside click, escape, focus, and scroll behavior.',
        },
        {
          title: 'useBreakpoint',
          description: 'Branch UI behavior from reactive viewport ranges aligned with framework breakpoints.',
        },
      ],
    },
    'use-theme': {
      title: 'useTheme for app-level controls',
      description:
        'Use this composable to connect toggles and selectors to the active theme state without creating a parallel theme store.',
      calloutDescription:
        'Keep runtime operations here. For initial theme resolution, persistence strategy, and runtime theme registration details, continue on Runtime Theme API and Custom Themes.',
    },
    'use-overlay-service': {
      title: 'useOverlayService for transient layers',
      description:
        'Use this composable when custom overlays need the same lock scroll, focus, escape, and z-index behavior used by framework overlays.',
    },
    'use-breakpoint': {
      title: 'useBreakpoint for responsive branching',
      description:
        'Use reactive viewport ranges to branch layout density, navigation mode, and conditional UI blocks from app code.',
    },
    'compose-patterns': {
      title: 'Compose multiple composables',
      description:
        'Combine these composables to drive one coherent UI state instead of spreading responsiveness, overlays, and theming across disconnected stores.',
      items: [
        {
          title: 'One state source per concern',
          description: 'Keep theming, overlays, and breakpoints in their own composable contract and derive UI state from computed values.',
        },
        {
          title: 'Prefer composable composition over cross-component events',
          description: 'Connect screen state in setup logic and pass only the derived state to presentational components.',
        },
        {
          title: 'Keep lifecycle cleanup explicit',
          description: 'When opening custom overlays, always close them in the same flow that opened them to avoid stale stack entries.',
        },
        {
          title: 'Avoid reimplementing framework internals',
          description: 'If a composable already exposes runtime state, consume it directly before introducing new global stores.',
        },
      ],
    },
  },
}

export const composablesPages = {
  composables: composablesEditorialContent,
} as const

export default composablesPages
