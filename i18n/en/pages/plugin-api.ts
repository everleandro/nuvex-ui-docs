import type { DocsPluginApiSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const pluginApiEditorialContent: DocsWorkflowPageContent<DocsPluginApiSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Plugin API | Nuvex UI Docs',
    description:
      'Configure NuvexUI plugin options focused on internationalization and component registration strategy.',
  },
  hero: {
    title: 'Plugin API',
    description:
      'Use this page to configure locale behavior and component registration when the minimum setup is already complete.',
    prerequisitesTitle: 'Before you start',
    actions: [
      {
        key: 'back-to-installation',
        label: 'Back to Installation',
      },
      {
        key: 'open-nuxt-integration',
        label: 'Open Nuxt Integration',
      },
    ],
    prerequisites: [
      'You already completed the minimum setup from Installation.',
      'You need to configure locale behavior or custom component registration.',
      'You want direct navigation to dedicated pages for icon and runtime theme configuration.',
    ],
  },
  sections: {
    'configure-locales-and-default-locale': {
      title: 'Configure locales and default locale',
      description:
        'Use locales to register additional dictionaries and locale to set the initial locale code used by date helpers and date-driven components.',
    },
    'override-components-registry': {
      title: 'Override component registration strategy',
      description:
        'Use the components option when you need a constrained registry instead of registering the whole default component set.',
      calloutDescription:
        'If you do not pass components, NuvexUI registers its default public component registry.',
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with the page that matches your next integration decision after plugin setup is stable.',
      items: [
        {
          title: 'Icon Configuration',
          description: 'Open this page if your next step is icon setup and icon rendering rules.',
        },
        {
          title: 'Composables',
          description: 'Open this page to continue with useTheme, useOverlayService, and useBreakpoint after plugin setup.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Open this page if your next step is runtime theme control and state transitions.',
        },
        {
          title: 'Nuxt Integration',
          description: 'Open this page if you need SSR-safe persistence behavior in Nuxt.',
        },
      ],
    },
  },
}

export const pluginApiPages = {
  pluginApi: pluginApiEditorialContent,
} as const

export default pluginApiPages
